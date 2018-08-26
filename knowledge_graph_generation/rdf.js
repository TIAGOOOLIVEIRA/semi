var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var CsvReadableStream = require('csv-reader');
var subject_data = require(__dirname + '/subject.js');
var rdfstore = require('rdfstore');

// TODO: General improvement of variables naming and function decomposition

// Such object should be the default one for all kind of datasets
var csv_as_object = (headers, data) => {
    var csv_object = {};
    for (var i in headers) {
        var column_data = [];
        for (var j in data) {
            column_data.push(data[j][i]);
        }
        csv_object[headers[i]] = column_data;
    }
    return csv_object;
}

var read_csv = (path_file, delimiter) => {
    return new Promise(function(resolve, reject) {
        var is_header = true;
        var headers = [];
        var data = [];
        var inputStream = fs.createReadStream(path_file, 'utf8')
            .pipe(CsvReadableStream({
                parseNumbers: true,
                parseBooleans: true,
                delimiter: delimiter
            }))
            .on('error', function() {
                reject();
            })
            .on('data', function(row) {
                if (is_header) {
                    headers = row;
                    is_header = false;
                } else {
                    data.push(row);
                }
            })
            .on('end', function() {
                resolve(csv_as_object(headers, data));
            });
    });
}

var read_sm = (path_file) => {
    return new Promise(function(resolve, reject) {
        var columns_map = [];
        var nodes = [];
        var links = [];
        fs.readFile(path_file, 'utf8', function(err, data) {
            if (err) reject(err);
            var sm = JSON.parse(data);
            columns_map = sm['sourceColumns'];
            nodes = sm['graph']['nodes'];
            links = sm['graph']['links'];
            var sm_data = [columns_map, nodes, links];
            resolve(sm_data);
        })
    });
}

var create_subjects = (nodes) => {
    var subjects = [];
    for (var n in nodes) {
        if (nodes[n]['type'] === 'InternalNode') {
            var id = nodes[n]['id'];
            var uri_class = nodes[n]['label']['uri'];
            var index = subject_data.classes.indexOf(uri_class);
            if (index === undefined)
                throw new Error('Subject ' + uri_class + ' not found! Check subject.js');
            var base_uri = subject_data.uris[index];
            var field = subject_data.field_for_uris[index];
            subjects.push({
                'id': id,
                'base_uri': base_uri,
                'field': field,
                'class': uri_class
            });
        }
    }
    return subjects;
}

// TODO: There are too cycles
var extract_subjects = (data, subjects, column_nodes) => {
    var subjects_uris = [];
    for (var i in column_nodes) {
        var user_st = column_nodes[i]['userSemanticTypes'][0]; // Basically, you have only one semantic type defined by the user
        for (var j in subjects) {
            if (user_st['domain']['uri'] === subjects[j]['class']) {
                var subject_id = subjects[j]['id'];
                var subject_class = subjects[j]['class'];
                var subject_field = subjects[j]['field'];
                var subject_base_uri = subjects[j]['base_uri'];
                if (user_st['type']['uri'] === subject_field) {
                    var entries = data[column_nodes[i]['columnName']];
                    var subject_entries = [];
                    for (var e in entries) {
                        subject_entries.push(subject_data.basic_uri + subject_base_uri + entries[e].replace(/ /g, "_"));
                    }
                    subjects_uris.push({
                        'id': subject_id,
                        'class': subject_class,
                        'entries': subject_entries
                    });
                }
            }
        }
    }
    return subjects_uris;
}

// TODO: Add information on the source of subjects

// Generate semantic type triples of all columns of a dataset
var create_st_triples = (subjects_uris, data_property_links, column_nodes, data) => {
    var triples = [];
    var link_ids = [];
    for (var i in data_property_links) {
        link_ids.push(data_property_links[i]['id'].split('---'));
    }

    for (var j in link_ids) {
        var s_uri = link_ids[j][0];
        var p_uri = link_ids[j][1];
        var o_id = link_ids[j][2];
        var subject_entries = [];
        var data_entries = [];

        for (var r in subjects_uris) {
            if (subjects_uris[r]['id'] === s_uri) {
                subject_entries = subjects_uris[r]['entries'];
            }
        }

        for (var t in column_nodes) {
            if (column_nodes[t]['id'] === o_id) {
                data_entries = data[column_nodes[t]['columnName']];
            }
        }

        if (data_entries != undefined) { // XXX Control for bad data
            for (var k in subject_entries) {
                var triple = [];
                triple[0] = subject_entries[k];
                triple[1] = p_uri;
                triple[2] = data_entries[k];
                triples.push(triple);
            }
        }
    }

    return triples;
}

// Generate object property triples
var create_sm_triples = (subjects_uris, links) => {
    var triples = [];
    var link_ids = [];
    for (var i in links) {
        link_ids.push(links[i]['id'].split('---'));
    }
    for (var j in link_ids) {
        var subjects = [];
        var predicate = '';
        var objects = [];
        var subjects_type = [];
        var objects_type = [];
        var s_uri = link_ids[j][0];
        var p_uri = link_ids[j][1];
        var o_uri = link_ids[j][2];

        for (var t in subjects_uris) {
            if (subjects_uris[t]['id'] === s_uri) {
                subjects = subjects_uris[t]['entries'];
                subjects_type = subjects_uris[t]['class'];
            }
            if (subjects_uris[t]['id'] === o_uri) {
                objects = subjects_uris[t]['entries'];
                objects_type = subjects_uris[t]['class'];
            }
        }
        predicate = p_uri;

        for (var r in subjects) {
            // Object properties triples
            var triple = [];
            triple[0] = subjects[r];
            triple[1] = predicate;
            triple[2] = objects[r];
            triples.push(triple);

            // RDF Type triples
            var subject_type = [];
            subject_type[0] = subjects[r];
            subject_type[1] = 'https://www.w3.org/1999/02/22-rdf-syntax-ns#type';
            subject_type[2] = subjects_type;
            triples.push(subject_type);

            var object_type = [];
            object_type[0] = objects[r];
            object_type[1] = 'https://www.w3.org/1999/02/22-rdf-syntax-ns#type';
            object_type[2] = objects_type;
            triples.push(object_type);
        }
    }
    return triples;
}

var create_from_csv = (data, sm) => {
    return new Promise(function(resolve, reject) {
        var columns_map = sm[0];
        var nodes = sm[1];
        var links = sm[2];
        var internal_nodes = [];
        var column_nodes = [];
        var object_property_links = [];
        var data_property_links = [];

        for (var n in nodes) {
            if (nodes[n]['type'] === 'InternalNode')
                internal_nodes.push(nodes[n]);
            else if (nodes[n]['type'] === 'ColumnNode')
                column_nodes.push(nodes[n]);
            else throw new Error('Unknow node type: ' + nodes[n]['type']); // Just a check if there are strange things in the dataset
        }

        for (var l in links) {
            if (links[l]['type'] === 'ObjectPropertyLink')
                object_property_links.push(links[l]);
            else if (links[l]['type'] === 'DataPropertyLink')
                data_property_links.push(links[l]);
            else if (links[l]['type'] === 'ClassInstanceLink') // For now threat is as a data property;
                data_property_links.push(links[l]);
            else throw new Error('Unknow link type: ' + links[l]['type']); // Just a check if there are strange things in the dataset
        }

        var subjects_metadata = create_subjects(internal_nodes);
        var subjects_uris = extract_subjects(data, subjects_metadata, column_nodes);
        var sm_triples = create_sm_triples(subjects_uris, object_property_links);
        var st_triples = create_st_triples(subjects_uris, data_property_links, column_nodes, data);
        var triples = {};
        triples['data_properties'] = st_triples;
        triples['object_properties'] = sm_triples;
        resolve(triples);
    });
}

var generate_rdf_store = (triples) => {
    return new Promise(function(resolve, reject) {
        rdfstore.create(function(err, store) {
            var graph = store.rdf.createGraph();
            var data_properties = triples['data_properties'];
            var object_properties = triples['object_properties'];
            for (var t in data_properties) {
                graph.add(store.rdf.createTriple(
                    store.rdf.createNamedNode(data_properties[t][0]),
                    store.rdf.createNamedNode(data_properties[t][1]),
                    store.rdf.createLiteral(data_properties[t][2])));
            }
            for (var j in object_properties) {
                graph.add(store.rdf.createTriple(
                    store.rdf.createNamedNode(object_properties[j][0]),
                    store.rdf.createNamedNode(object_properties[j][1]),
                    store.rdf.createNamedNode(object_properties[j][2])));
            }
            var serialized = graph.toNT();
            resolve(serialized);
        });
    });
}

var csv_pipeline = (csv_path, sm_path) => {
    return new Promise(function(resolve, reject) {
        var csv_data = [];
        var semantic_model_data = [];
        var sequence = Promise.resolve()
            .then(function() {
                // Read CSV
                return read_csv(csv_path, ',');
            })
            .then(function(csv) {
                csv_data = csv;
                // Read Semantic Model
                return read_sm(sm_path);
            })
            .then(function(sm) {
                semantic_model_data = sm;
                // Create RDF data
                return create_from_csv(csv_data, semantic_model_data);
            })
            .then(function(triples) {
                resolve(generate_rdf_store(triples));
            });
    });
}

var get_related_sm = (input_name, sm_files) => {
    var ext = path.extname(input_name);
    var input_base_name = path.basename(input_name, ext);
    for (var i in sm_files) {
        var sm_base_name = path.basename(sm_files[i], '.json').split(ext + '.model')[0];
        if (input_base_name == sm_base_name) {
            return sm_files[i];
        }
    }
}

var build_knowledge_graph = (input_dirs, sm_dirs) => {
    var write_path = 'data/evaluation/output/kg.nt'
    fs.unlinkSync(write_path);

    var input_files = [];
    var sm_files = [];
    for (var i in input_dirs) {
        fs.readdirSync(input_dirs[i]).forEach(file => {
            input_files.push(path.resolve(input_dirs[i] + '/' + file));
        });
    }
    for (var j in sm_dirs) {
        fs.readdirSync(sm_dirs[j]).forEach(file => {
            sm_files.push(path.resolve(sm_dirs[j] + '/' + file));
        });
    }
    for (var t in input_files) {
        if (path.extname(input_files[t]) === '.csv') {
            // Process CSV files
            var sm_file = get_related_sm(input_files[t], sm_files);
            csv_pipeline(input_files[t], sm_file)
                .then(function(rdf) {
                    fs.appendFileSync(write_path, rdf);
                });
        }
    }
}

var input_dirs = [
    'data/evaluation/jws-knowledge-graphs-2015/museum-29-edm/sources'
]

var sm_dirs = [
    'data/evaluation/jws-knowledge-graphs-2015/museum-29-edm/models-json'
];

build_knowledge_graph(input_dirs, sm_dirs);

exports.read_csv = read_csv;
exports.read_sm = read_sm;
exports.create_subjects = create_subjects;
exports.create_from_csv = create_from_csv;
exports.generate_rdf_store = generate_rdf_store;

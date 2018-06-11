var Graph = require('graphlib').Graph;
var rdfstore = require('rdfstore');
var fs = require('fs');
var graph_generator = require(__dirname + '/../../semantic_modeling/graph.js');
var assert = require('assert');

describe('Get class nodes from a graph', function() {
    var graph = new Graph();
    graph.setNode('a', {
        type: 'class_uri'
    });
    graph.setNode('b', {
        type: 'attribute_name'
    });
    it('\'a\' is a class_uri in the graph', function() {
        assert.deepEqual(['a'], graph_generator.get_class_nodes(graph));
    });
});

describe('Get direct object properties from domain ontologies between 2 classes included in the graph', function() {
    it('The direct property between schema:EducationalOrganization and schema:Organization should be rdfs:subClassOf', function() {
        var class_u = 'schema:EducationalOrganization';
        var class_v = 'schema:Organization';
        var dp_query = `PREFIX schema: <http://schema.org/>
                         SELECT ?direct_properties WHERE {
                             ${class_u} ?direct_properties ${class_v}
                         }
                        `
        // TODO rdf store should be created before all functions that exploit it
        rdfstore.create(function(err, store) {
            var ontology = fs.readFileSync(__dirname + '/schema.ttl').toString();
            store.load('text/turtle', ontology, function(err, data) {
                graph_generator.get_direct_properties(dp_query, store, function(direct_properties) {
                    assert.deepEqual(direct_properties[0], 'rdfs:subClassOf');
                });
            });
        });
    });
});

describe('Add semantic types from different data sources', function() {
    var graph = new Graph();
    var updated_graph;
    before(function() {
        updated_graph = graph_generator.add_semantic_types(__dirname + '/semantic_types_test.json', graph)
    });
    it('The graph should have at least the following nodes: schema:Person, identifier, affiliation', function() {
        assert.deepEqual(true, updated_graph.hasNode('schema:Person'));
        assert.deepEqual(true, updated_graph.hasNode('identifier'));
        assert.deepEqual(true, updated_graph.hasNode('affiliation'));
    });
});

describe('Create semantic types nodes of a single data source', function() {
    var graph = new Graph();
    var st = {
        'source': 'data/schema.csv',
        'attributes': ['identifier', 'name', 'affiliation', 'birth_date'],
        'semantic_types': [
            ['schema:Person_schema:identifier'],
            ['schema:Person_schema:name'],
            ['schema:Organization_schema:legalName,'],
            ['schema:Person_schema:birth_date']
        ],
        'scores': [
            [0.5],
            [0.7],
            [0.1],
            [0.4]
        ]
    };
    var updated_graph;
    before(function() {
        updated_graph = graph_generator.create_semantic_types_nodes(st, graph);
    });
    it('The graph should have at least the following nodes: schema:Person, identifier, affiliation', function() {
        assert.deepEqual(true, updated_graph.hasNode('schema:Person'));
        assert.deepEqual(true, updated_graph.hasNode('identifier'));
        assert.deepEqual(true, updated_graph.hasNode('affiliation'));
    });

});

describe('Add closures classes of a class node inside the graph', function() {
    it('The graph contanis the following class nodes: schema:Organization, schema:School, schema:CollegeOrUniversity', function() {
        var graph = new Graph();
        var closure_classes = ['schema:Organization', 'schema:School', 'schema:CollegeOrUniversity'];
        var updated_graph = graph_generator.add_closures(closure_classes, graph);
        assert.deepEqual(true, updated_graph.hasNode('schema:Organization'));
        assert.deepEqual(true, updated_graph.hasNode('schema:School'));
        assert.deepEqual(true, updated_graph.hasNode('schema:CollegeOrUniversity'));
    });
});

describe('Get closures of a class node defined in the graph', function() {
    it('Some of the closure classes of schema:EducationalOrganization are: schema:Organization, schema:School, schema:CollegeOrUniversity, etc.', function() {
        var closure_query = `PREFIX schema: <http://schema.org/>
                             PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                             SELECT ?closure_classes
                                 WHERE {
                                     { schema:EducationalOrganization ?property ?closure_classes.
                                         ?closure_classes a rdfs:Class }
                                         UNION { ?closure_classes ?property schema:EducationalOrganization .
                                             ?closure_classes a rdfs:Class }
                                         }`;
        // TODO rdf store should be created before all functions that exploit it
        rdfstore.create(function(err, store) {
            var ontology = fs.readFileSync(__dirname + '/schema.ttl').toString();
            store.load('text/turtle', ontology, function(err, data) {
                // Get closures
                graph_generator.get_closures(closure_query, store, function(closure_classes) {
                    assert.deepEqual(closure_classes[0], 'schema:Organization');
                    assert.deepEqual(closure_classes[1], 'schema:School');
                    assert.deepEqual(closure_classes[2], 'schema:CollegeOrUniversity');
                });
            });
        });
    });
});

describe('Test on graph.js', function() {
    it('Graph should be built', function() {
        graph_generator.buildGraph(__dirname + '/semantic_types_test.json', __dirname + '/schema.ttl');
    });
});

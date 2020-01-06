module.exports.SOURCE_TO_CLEAN_BRACKETS = {
    's03-ima-artists.json': 1,
    's04-ima-artworks.json': 1,
    's08-s-17-edited.json': 1,
    's11-s-19-artists.json': 1,
    's12-s-19-artworks.json': 1,
    's13-s-art-institute-of-chicago.json': 1,
    's14-s-california-african-american.json': 1,
    's15-s-detroit-institute-of-art.json': 1,
    's16-s-hammer.json': 1,
    's18-s-indianapolis-artists.json': 1,
    's19-s-indianapolis-artworks.json': 1,
    's20-s-lacma.json': 1,
    's22-s-moca.json': 1,
    's26-s-san-francisco-moma.json': 1,
    's27-s-the-huntington.json': 1,
};

module.exports.VALUES = {
    's05-met.json': ['What', 'Dimensions'],
    's09-s-18-artists.json': ['name', 'name'],
    's10-s-18-artworks.json': ['description', 'accession_id', 'inscription', 'title', 'accession_id', 'dimensions', 'materials', 'collection_name', 'collection_name', 'artist', 'credit'],
    's23-s-national-portrait-gallery.json': ['Sitter']
};

module.exports.TASK_01_NEW_FIELDS = {
    's01-cb.json': [{
        'Actor_URI': 'Attribution'
    }, {
        'Artist_Appellation_URI': 'Attribution'
    }],
    's02-dma.json': [{
        'Artist URI': 'Artist Name'
    }, {
        'Nationality_URI': 'Artist Nationality'
    }, {
        'Museum URI': 'Object Link Source'
    }, {
        'Object_URI': 'Object ID'
    }, {
        'Medium URI': 'Object Facet Value 1'
    }],
    's03-ima-artists.json': [{
        'Artist URI': 'name'
    }, {
        'artist appellation uri': 'name'
    }],
    's04-ima-artworks.json': [{
        'galleryLabelTypeURI': 'galleryLabel'
    }, {
        'artistAppellationURI': 'artist'
    }, {
        'provenanceTypeURI': 'provenance'
    }],
    's05-met.json': [{
        'Person URI': 'Who'
    }, {
        'Object URI': 'id'
    }, {
        'ProvenanceTypeURI': 'Accession Number'
    }, {
        'Appellation URI': 'Who'
    }],
    's06-npg.json': [{
        'ArtistAppellation_URI': 'Nahum Ball Onthank'
    }, {
        'ObjectURI': 'Ref'
    }],
    's07-s-13.json': [{
        'technique_uri': 'technique'
    }, {
        'label_type_uri': 'ac_id'
    }, {
        'Object_URI': 'ac_id'
    }, {
        'origin_type_uri': 'ac_id'
    }, {
        'Artist_appellation_uri': 'name'
    }, {
        'Artist_uri': 'name'
    }],
    's08-s-17-edited.json': [{
        'VIDEO_TYPE_URI': 'VIDEO'
    }, {
        'AUTHOR_APPELLATION_URI': 'AUTHOR'
    }],
    's09-s-18-artists.json': [{
        'artist_appellation_uri': 'name'
    }, {
        'artist_uri': 'name'
    }],
    's10-s-18-artworks.json': [{
        'auther_uri': 'artist'
    }, {
        'object_uri': 'accession_id'
    }, {
        'material_uri': 'materials'
    }, {
        'author_appellation_uri': 'artist'
    }],
    's11-s-19-artists.json': [{
        'biography_type_uri': 'artist_name' // To mantain clean uri
    }, {
        'occupation_type_uri': 'occupation'
    }],
    's12-s-19-artworks.json': [{
        'artist_uri': 'artist_name'
    }, {
        'object_uri': 'access_id'
    }, {
        'artist_appellation_uri': 'artist_name'
    }],
    's13-s-art-institute-of-chicago.json': [{
        'Artist_URI': 'Artistname'
    }, {
        'Artist_Appellation_URI': 'Artistname'
    }, {
        'Technique_uri': 'Typeofartwork'
    }],
    's14-s-california-african-american.json': [{
        'object_uri': 'accessionId'
    }, {
        'ethnicity_uri': 'enthnicity'
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's15-s-detroit-institute-of-art.json': [{
        'artist_uri': 'name'
    }, {
        'artist_appellation_uri': 'name'
    }, {
        'object_uri': 'accession'
    }],
    's16-s-hammer.json': [{
        'artist_uri': 'artist'
    }, {
        'technique_uri': 'description' // Pay attention to this field
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's17-s-houston-museum-of-fine-arts.json': [{
        'artist_appellation_uri': 'artist'
    }],
    's18-s-indianapolis-artists.json': [{
        'artist_uri': 'name'
    }, {
        'artist_appellation_uri': 'name'
    }],
    's19-s-indianapolis-artworks.json': [{
        'material_URI': 'materials'
    }, {
        'provenance_type_uri': 'creditLine'
    }, {
        'galleryLabel_type_uri': 'title' // Probably it avoid issues in the URI generation
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's20-s-lacma.json': [{
        'Classification_URI': 'Origin' // Pay attention to this field
    }, {
        'Artist_Appellation_URI': 'Artist_Name'
    }, {
        'Object_URI': 'ID'
    }, {
        'Artist_URI': 'Artist_Name'
    }],
    's22-s-moca.json': [{
        'person_uri': 'Artist_Name'
    }, {
        'object_uri': 'Assension_Number'
    }, {
        'person_appellation_uri': 'Artist_Name'
    }],
    's23-s-national-portrait-gallery.json': [{
        'Object_URI': 'Ref'
    }, {
        'Artist_Appellation_URI': 'Artist'
    }, {
        'Subclassification_URI': 'Keywords'
    }],
    's24-s-norton-simon.json': [{
        'artist_appellation_uri': 'access'
    }, {
        'object_uri': 'access'
    }],
    's25-s-oakland-museum-paintings.json': [{
        'Type_URI': 'Type_of_Art'
    }, {
        'Object_uri': 'Accession_id'
    }, {
        'Artist_URI': 'ArtistName'
    }, {
        'Subtype_URI': 'Subtype_of_Art'
    }, {
        'Artist_Appellation_URI': 'ArtistName'
    }],
    's26-s-san-francisco-moma.json': [{
        'artistAppellationURI': 'artistName'
    }, {
        'Type_URI': 'type'
    }, {
        'artistURI': 'artistName'
    }],
    's27-s-the-huntington.json': [{
        'artist_appellation_uri': 'artist'
    }, {
        'object_uri': 'object_no'
    }, {
        'Nationality_URI': 'nationality'
    }],
    's28-wildlife-art.json': [{
        'Object_URI': 'ID Number'
    }, {
        'Collector_Information_typeURI': 'Collector'
    }, {
        'Maker_Appellation_URI': 'Maker'
    }, {
        'Acquisition_URI': 'How Acquired?' // Check if it is valid
    }, {
        'Nationality_URI': 'Place Made'
    }],
    's29-gilcrease.json': [{
        'Object_URI': 'ObjectID'
    }, {
        'Type_URI': 'Classification'
    }, {
        'Attribution_Appellation_URI': 'Attribution'
    }]
}

module.exports.TASK_02_NEW_FIELDS = {
    's01-cb.json': [{
        'Actor_URI': 'Attribution'
    }, {
        'Death_URI': 'End Date'
    }, {
        'Birth_URI': 'Begin Date'
    }, {
        'Artist_Appellation_URI': 'Attribution'
    }],
    's02-dma.json': [{
        'Artist URI': 'Artist Name'
    }, {
        'Nationality_URI': 'Artist Nationality'
    }, {
        'Death_URI': 'Artist Death Date'
    }, {
        'Museum URI': 'Object Link Source'
    }, {
        'Birth_URI': 'Artist Birth Date'
    }, {
        'Object_URI': 'Object ID'
    }, {
        'Medium URI': 'Object Facet Value 1'
    }],
    's03-ima-artists.json': [{
        'Birth_URI': 'birthDeath'
    }, {
        'Artist URI': 'name'
    }, {
        'Death_URI': 'birthDeath'
    }, {
        'artist appellation uri': 'name'
    }],
    's04-ima-artworks.json': [{
        'Death_URI': 'birthDeath'
    }, {
        'galleryLabelTypeURI': 'galleryLabel'
    }, {
        'artistAppellationURI': 'artist'
    }, {
        'Birth_URI': 'birthDeath'
    }, {
        'provenanceTypeURI': 'provenance'
    }],
    's05-met.json': [{
        'Person URI': 'Who'
    }, {
        'Object URI': 'id'
    }, {
        'ProvenanceTypeURI': 'Accession Number'
    }, {
        'Appellation URI': 'Who'
    }],
    's06-npg.json': [{
        'ArtistAppellation_URI': 'Nahum Ball Onthank'
    }, {
        'Birth_URI': 'ArtistBornDiedDate'
    }, {
        'Death_URI': 'ArtistBornDiedDate'
    }, {
        'ObjectURI': 'Ref'
    }],
    's07-s-13.json': [{
        'Birth_URI': 'birth_and_death_years'
    }, {
        'technique_uri': 'technique'
    }, {
        'Death_URI': 'birth_and_death_years'
    }, {
        'label_type_uri': 'ac_id'
    }, {
        'Object_URI': 'ac_id'
    }, {
        'origin_type_uri': 'ac_id'
    }, {
        'Artist_appellation_uri': 'name'
    }, {
        'Artist_uri': 'name'
    }],
    's08-s-17-edited.json': [{
        'VIDEO_TYPE_URI': 'VIDEO'
    }, {
        'AUTHOR_APPELLATION_URI': 'AUTHOR'
    }],
    's09-s-18-artists.json': [{
        'Death_URI': 'birth_death_date'
    }, {
        'artist_appellation_uri': 'name'
    }, {
        'Birth_URI': 'birth_death_date'
    }, {
        'artist_uri': 'name'
    }],
    's10-s-18-artworks.json': [{
        'auther_uri': 'artist'
    }, {
        'object_uri': 'accession_id'
    }, {
        'material_uri': 'materials'
    }, {
        'author_appellation_uri': 'artist'
    }],
    's11-s-19-artists.json': [{
        'biography_type_uri': 'artist_name' // To mantain clean uri
    }, {
        'occupation_type_uri': 'occupation'
    }],
    's12-s-19-artworks.json': [{
        'artist_uri': 'artist_name'
    }, {
        'object_uri': 'access_id'
    }, {
        'artist_appellation_uri': 'artist_name'
    }],
    's13-s-art-institute-of-chicago.json': [{
        'Death_URI': 'Birthdeathyear'
    }, {
        'Artist_URI': 'Artistname'
    }, {
        'Artist_Appellation_URI': 'Artistname'
    }, {
        'Technique_uri': 'Typeofartwork'
    }, {
        'Birth_URI': 'Birthdeathyear'
    }],
    's14-s-california-african-american.json': [{
        'object_uri': 'accessionId'
    }, {
        'ethnicity_uri': 'enthnicity'
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's15-s-detroit-institute-of-art.json': [{
        'Death_URI': 'death'
    }, {
        'Birth_URI': 'birth'
    }, {
        'artist_uri': 'name'
    }, {
        'artist_appellation_uri': 'name'
    }, {
        'object_uri': 'accession'
    }],
    's16-s-hammer.json': [{
        'artist_uri': 'artist'
    }, {
        'technique_uri': 'description' // Pay attention to this field
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's17-s-houston-museum-of-fine-arts.json': [{
        'Death_URI': 'artistyear'
    }, {
        'artist_appellation_uri': 'artist'
    }, {
        'Birth_URI': 'artistyear'
    }],
    's18-s-indianapolis-artists.json': [{
        'artist_uri': 'name'
    }, {
        'Death_URI': 'birthDeath'
    }, {
        'artist_appellation_uri': 'name'
    }, {
        'Birth_URI': 'birthDeath'
    }],
    's19-s-indianapolis-artworks.json': [{
        'material_URI': 'materials'
    }, {
        'provenance_type_uri': 'creditLine'
    }, {
        'Birth_URI': 'birthDeath'
    }, {
        'Death_URI': 'birthDeath'
    }, {
        'galleryLabel_type_uri': 'title' // Probably it avoid issues in the URI generation
    }, {
        'artist_appellation_uri': 'artist'
    }],
    's20-s-lacma.json': [{
        'Classification_URI': 'Origin' // Pay attention to this field
    }, {
        'Artist_Appellation_URI': 'Artist_Name'
    }, {
        'Death_URI': 'Artist_Birth_and_Death_Details'
    }, {
        'Object_URI': 'ID'
    }, {
        'Birth_URI': 'Artist_Birth_and_Death_Details'
    }, {
        'Artist_URI': 'Artist_Name'
    }],
    's22-s-moca.json': [{
        'person_uri': 'Artist_Name'
    }, {
        'object_uri': 'Assension_Number'
    }, {
        'person_appellation_uri': 'Artist_Name'
    }],
    's23-s-national-portrait-gallery.json': [{
        'Object_URI': 'Ref'
    }, {
        'Death_URI': 'ArtistBornDiedDate'
    }, {
        'Artist_Appellation_URI': 'Artist'
    }, {
        'Birth_URI': 'ArtistBornDiedDate'
    }, {
        'Subclassification_URI': 'Keywords'
    }],
    's24-s-norton-simon.json': [{
        'Death_URI': 'artist_period'
    }, {
        'artist_appellation_uri': 'access'
    }, {
        'object_uri': 'access'
    }, {
        'Birth_URI': 'artist_period'
    }],
    's25-s-oakland-museum-paintings.json': [{
        'Type_URI': 'Type_of_Art'
    }, {
        'Object_uri': 'Accession_id'
    }, {
        'Birth_URI': 'BirthDeathDate'
    }, {
        'Artist_URI': 'ArtistName'
    }, {
        'Subtype_URI': 'Subtype_of_Art'
    }, {
        'Artist_Appellation_URI': 'ArtistName'
    }, {
        'Death_URI': 'BirthDeathDate'
    }],
    's26-s-san-francisco-moma.json': [{
        'artistAppellationURI': 'artistName'
    }, {
        'Death_URI': 'deathYear'
    }, {
        'Type_URI': 'type'
    }, {
        'Birth_URI': 'birthYear'
    }, {
        'artistURI': 'artistName'
    }],
    's27-s-the-huntington.json': [{
        'Death_URI': 'death_date'
    }, {
        'artist_appellation_uri': 'artist'
    }, {
        'object_uri': 'object_no'
    }, {
        'Nationality_URI': 'nationality'
    }, {
        'Birth_URI': 'birth_date'
    }],
    's28-wildlife-art.json': [{
        'Death_URI': 'Date2'
    }, {
        'Object_URI': 'ID Number'
    }, {
        'Collector_Information_typeURI': 'Collector'
    }, {
        'Maker_Appellation_URI': 'Maker'
    }, {
        'Acquisition_URI': 'How Acquired?' // Check if it is valid
    }, {
        'Nationality_URI': 'Place Made'
    }, {
        'Birth_URI': 'Date1'
    }],
    's29-gilcrease.json': [{
        'Object_URI': 'ObjectID'
    }, {
        'Type_URI': 'Classification'
    }, {
        'Attribution_Appellation_URI': 'Attribution'
    }]
}

module.exports.TASK_03_URIS = {
    's01-cb.csv.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Attribution'
        }
    ],
    's02-dma.csv.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Object Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artist Name'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Object Work Type'
        }
    ],
    's03-ima-artists.xml.model.json': [{
        'http://www.americanartcollaborative.org/ontology/Person1': 'name'
    }],
    's04-ima-artworks.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title"'
        },
        {
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject2': 'relatedArtworksTitle'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'keywords'
        },
        {
            'http://xmlns.com/foaf/0.1/Document2': 'relatedArtworksURL'
        },
        {
            'http://xmlns.com/foaf/0.1/Document1': 'sourceURL'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'imageURL'
        }
    ],
    's05-met.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'id'
        },
        {
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject2': 'related-artworks'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Who'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Place1': 'Where'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'What'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'Heilbrunn Timeline of Art History'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image'
        }
    ],
    's06-npg.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artist'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person2': 'John Adams Whipple'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Keywords'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'Classification'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'Image'
        }
    ],
    's07-s-13.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'name'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'category'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'audio_url'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource2': 'image_url'
        }
    ],
    's08-s-17-edited.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'TITLE'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'AUTHOR'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'IMAGESRC'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource2': 'VIDEO'
        }
    ],
    's09-s-18-artists.json.model.json': [{
        'http://www.americanartcollaborative.org/ontology/Person1': 'name'
    }],
    's10-s-18-artworks.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'collection_name'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'materials'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'subject_tags'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image_URL'
        }
    ],
    's11-s-19-artists.json.model.json': [{
        'http://www.americanartcollaborative.org/ontology/Person1': 'artist_name'
    }],
    's12-s-19-artworks.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist_name'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'img_url'
        }
    ],
    's13-s-art-institute-of-chicago.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Titleofartwork'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artistname'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'ImageURL'
        }
    ],
    's14-s-california-african-american.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'technique'
        },
        {
            'http://xmlns.com/foaf/0.1/Document1': 'url' // Pay attention to this field
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'imageUrl'
        }
    ],
    's15-s-detroit-institute-of-art.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'John Mix Stanley'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'classification'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'imageURL'
        }
    ],
    's16-s-hammer.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image'
        }
    ],
    's17-s-houston-museum-of-fine-arts.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://xmlns.com/foaf/0.1/Document1': 'link'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'photo'
        }
    ],
    's18-s-indianapolis-artists.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'name'
        }
    ],
    's19-s-indianapolis-artworks.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject2': 'relatedArtworksTitle'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'materials'
        },
        {
            'http://xmlns.com/foaf/0.1/Document2': 'sourceURL'
        },
        {
            'http://xmlns.com/foaf/0.1/Document1': 'relatedArtworksURL'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'imageURL'
        }
    ],
    's20-s-lacma.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Artwork_Title_and_Dates'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artist_Name'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'Image_URL'
        }
    ],
    's22-s-moca.xml.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Artwork_Name_and_Year'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artist_Name'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image'
        }
    ],
    's23-s-national-portrait-gallery.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Artist'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person2': 'CopyAfter'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Keywords'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'Classification'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'Image'
        }
    ],
    's24-s-norton-simon.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artist'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image_url'
        }
    ],
    's25-s-oakland-museum-paintings.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'ArtistName'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Type_of_Art'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'Subtype_of_Art'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'Pic_URL'
        }
    ],
    's26-s-san-francisco-moma.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'artistName'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'type'
        },
        {
            'http://xmlns.com/foaf/0.1/Document1': 'url'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Place1': 'birthPlaceCity'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Place2': 'deathPlaceCity'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image-URL'
        }
    ],
    's27-s-the-huntington.json.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Artwork_Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'name'
        },
        {
            'http://www.europeana.eu/schemas/edm/EuropeanaAggregation1': 'TODO'
        },
        {
            'http://www.europeana.eu/schemas/edm/WebResource1': 'image_url'
        }
    ],
    's28-wildlife-art.csv.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Maker'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Place1': 'Home Location'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Category'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept2': 'Materials'
        }
    ],
    's29-gilcrease.csv.model.json': [{
            'http://www.americanartcollaborative.org/ontology/CulturalHeritageObject1': 'Title'
        },
        {
            'http://www.americanartcollaborative.org/ontology/Person1': 'Attribution'
        },
        {
            'http://www.w3.org/2008/05/skos#Concept1': 'Classification'
        }
    ]
}
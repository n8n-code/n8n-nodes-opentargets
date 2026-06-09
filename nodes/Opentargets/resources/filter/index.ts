import type { INodeProperties } from 'n8n-workflow';

export const filterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					]
				}
			},
			"options": [
				{
					"name": "Get Association Filter",
					"value": "Get Association Filter",
					"action": "Filter available associations",
					"description": "More complex queries for associations scores and objects can be done using\nthis method, which allows to sort in different order, restrict to a specific class\nof diseases or targets, as well as filtering results by score and associated pathways.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/association/filter"
						}
					}
				},
				{
					"name": "Post Association Filter",
					"value": "Post Association Filter",
					"action": "Batch query available associations",
					"description": "Complex queries and filters for association objects can also be submitted using a JSON\nobject and the equivalent POST method.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/public/association/filter"
						}
					}
				},
				{
					"name": "Get Evidence Filter",
					"value": "Get Evidence Filter",
					"action": "Filter available evidence",
					"description": "The filter method allows to retrieve the specific data that supports a connection between targets and diseases.\nFilters can be used to restrict the results by source and type of data,\nor limit results to targets which are part of a particular pathway.\nMinimum and maximum scores can be specified as well as the type of evidence linking target and disease.\n**Note** that multiple genes and diseases can be specified in the same request.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/evidence/filter"
						}
					}
				},
				{
					"name": "Post Evidence Filter",
					"value": "Post Evidence Filter",
					"action": "Batch filter available evidence",
					"description": "POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).\nFilters can be specified as part of a `json` object in the body, simplifying the submission of queries.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/public/evidence/filter"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/public/association/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"description": "A target identifier listed as target.id.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "target",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Disease",
			"name": "disease",
			"description": "An EFO code listed as disease.id.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disease",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Therapeutic Area",
			"name": "therapeutic_area",
			"description": "An EFO code of a therapeutic area.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "therapeutic_area",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Datasource",
			"name": "datasource",
			"description": "Data source to consider.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "datasource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Datatype",
			"name": "datatype",
			"description": "Data type to consider.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "datatype",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Pathway",
			"name": "pathway",
			"description": "A Reactome pathway identifier (returning only those targets linked to the specified pathway).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pathway",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Target Class",
			"name": "target_class",
			"description": "A ChEMBL target class identifier (returning only those targets belonging to the specified class).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Uniprotkw",
			"name": "uniprotkw",
			"description": "A UniProt keyword (meaning all the targets linked to that keyword).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uniprotkw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Direct",
			"name": "direct",
			"description": "If `true`, it returns associations that have at least one direct evidence connecting the target and the disease. If `false` it only returns associations for which there is no direct evidence connecting the target and the disease, but only evidence connecting the target to a children of the disease in the EFO ontology.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "direct",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Datastructure",
			"name": "datastructure",
			"description": "Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "datastructure",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Fields you want to retrieve. This will get priority over the data structure requested.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Facets",
			"name": "facets",
			"description": "Returns facets",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "facets",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Scorevalue Min",
			"name": "scorevalue_min",
			"description": "Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "scorevalue_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Scorevalue Max",
			"name": "scorevalue_max",
			"description": "Filter by maximum score value.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "scorevalue_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Scorevalue Types",
			"name": "scorevalue_types",
			"description": "Score types to apply the score value min and max filters. The default is `overall`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scorevalue_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Maximum amount of results to return. Defaults to 10, max is 10000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "How many initial results should be skipped. Defaults to 0.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort by the given score type. Defaults to 'overall' and descending order. Use '~' prefix to do ascending\norder e.g. '~overall'. You will call a data type score like: 'datatypes.literature', and a data source as\n'datasources.gwas'. Supports multiple entries.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "search",
			"description": "Restrict the filtered results to those matching the passed string. The matching is done with a\nphrase match prefix.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Association Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/association/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Post Association Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/association/filter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Post Association Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/evidence/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"description": "A target identifier listed as target.id.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "target",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Disease",
			"name": "disease",
			"description": "An EFO code listed as disease.id.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disease",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Data Source",
			"name": "data%20source",
			"description": "Data source to consider.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "data source",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Datatype",
			"name": "datatype",
			"description": "Data type to consider.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "datatype",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Pathway",
			"name": "pathway",
			"description": "A pathway identifier (meaning all the targets linked to that pathway).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pathway",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Uniprotkw",
			"name": "uniprotkw",
			"description": "A UniProt keyword (meaning all the targets linked to that keyword).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uniprotkw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Datastructure",
			"name": "datastructure",
			"description": "Type of data structure to return. Can be 'full', 'simple', 'ids', or 'count'.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "datastructure",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The fields you want to retrieve. This will get priority over the data structure requested.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Scorevalue Min",
			"name": "scorevalue_min",
			"description": "Filter by minimum score value. The default is 0, but using 0.2 is a good trade-off to filter lower quality data points.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "scorevalue_min",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Scorevalue Max",
			"name": "scorevalue_max",
			"description": "Filter by maximum score value.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "scorevalue_max",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Sort by the given field. The default is 'scores.association_score' in descending order. Use '~' prefix to do ascending\norder e.g. '~scores.association_score'. It supports multiple entries.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Maximum amount of results to return. Defaults to 10, max is 10000.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "How many initial results should be skipped. Defaults to 0.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Format to get the data back. Can be 'json', 'xml', 'tab' or 'csv'. **Note** that this option can only be used when calling the API directly and will not work in this page. The response here will always be JSON.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Get Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/evidence/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Post Evidence Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/evidence/filter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter"
					],
					"operation": [
						"Post Evidence Filter"
					]
				}
			}
		},
];

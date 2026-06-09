import type { INodeProperties } from 'n8n-workflow';

export const privateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					]
				}
			},
			"options": [
				{
					"name": "Get Api Docs",
					"value": "Get Api Docs",
					"action": "Browse API documentation",
					"description": "Access api docs as served by Redoc",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/docs"
						}
					}
				},
				{
					"name": "Get Api Swagger UI",
					"value": "Get Api Swagger UI",
					"action": "Browse interactive API documentation",
					"description": "Interactive API docs using swagger-ui",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/docs/swagger-ui"
						}
					}
				},
				{
					"name": "Get Autocomplete",
					"value": "Get Autocomplete",
					"action": "Get `autocomplete` objects.",
					"description": "Search for the closest term to autocomplete in the search box.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/autocomplete"
						}
					}
				},
				{
					"name": "Post Best Hit Search",
					"value": "Post Best Hit Search",
					"action": "Find the best hit",
					"description": "Fire the search method for multiple strings\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/besthitsearch"
						}
					}
				},
				{
					"name": "Post Disease By Id",
					"value": "Post Disease By Id",
					"action": "Find information about a list of diseases",
					"description": "Get `disease` objects.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/disease"
						}
					}
				},
				{
					"name": "Get Disease By Id",
					"value": "Get Disease By Id",
					"action": "Find information about a disease",
					"description": "Get `disease` objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/disease/{{$parameter[\"disease\"]}}"
						}
					}
				},
				{
					"name": "Get Drug By ID",
					"value": "Get Drug By ID",
					"action": "Get drug by ID",
					"description": "Get `drug` objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/drug/{{$parameter[\"DRUG_ID\"]}}"
						}
					}
				},
				{
					"name": "Get EC Oby ID",
					"value": "Get EC Oby ID",
					"action": "Get evidence code by ID",
					"description": "Get `ECO` objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/eco/{{$parameter[\"ECO_ID\"]}}"
						}
					}
				},
				{
					"name": "Post Enrichment Target",
					"value": "Post Enrichment Target",
					"action": "Enrichment analysis",
					"description": "Returns an enrichment analysis for a list of targets passed in the body\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/enrichment/targets"
						}
					}
				},
				{
					"name": "Get Quick Search",
					"value": "Get Quick Search",
					"action": "Search most relevant results",
					"description": "Get `search-result` objects. Enables search bar functionality.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/quicksearch"
						}
					}
				},
				{
					"name": "Post Relation",
					"value": "Post Relation",
					"action": "Find related entities",
					"description": "Get `relation` objects.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/relation"
						}
					}
				},
				{
					"name": "Get Relation By EFOID",
					"value": "Get Relation By EFOID",
					"action": "Find related entities by disease",
					"description": "Get `relation` objects starting from diseases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/relation/disease/{{$parameter[\"disease\"]}}"
						}
					}
				},
				{
					"name": "Get Relation By ENSGID",
					"value": "Get Relation By ENSGID",
					"action": "Find related entities by target",
					"description": "Get `relation` objects starting from diseases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/relation/target/{{$parameter[\"target\"]}}"
						}
					}
				},
				{
					"name": "Post Target By ENSGID",
					"value": "Post Target By ENSGID",
					"action": "Find information about a list of targets",
					"description": "Get `target` objects. Used for the target profile page.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/target"
						}
					}
				},
				{
					"name": "Get Target Expression By ENSGID",
					"value": "Get Target Expression By ENSGID",
					"action": "Query expression levels",
					"description": "Get `gene-expression` objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/target/expression"
						}
					}
				},
				{
					"name": "Post Target Expression By ENSGID",
					"value": "Post Target Expression By ENSGID",
					"action": "Batch query expression levels",
					"description": "Get `gene-expression` objects.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/private/target/expression"
						}
					}
				},
				{
					"name": "Get Target By ENSGID",
					"value": "Get Target By ENSGID",
					"action": "Find information about a target",
					"description": "Get `target` objects.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/private/target/{{$parameter[\"target\"]}}"
						}
					}
				},
				{
					"name": "Get Swagger",
					"value": "Get Swagger",
					"action": "Get OpenAPI schema",
					"description": "Get swagger.yaml specs for the API",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/swagger"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/docs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Api Docs"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/docs/swagger-ui",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Api Swagger UI"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/autocomplete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"required": true,
			"description": "A full text query.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Maximum amount of results to return. Defaults to 5.",
			"default": "",
			"type": "string",
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
						"Private"
					],
					"operation": [
						"Get Autocomplete"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/besthitsearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Best Hit Search"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/besthitsearch<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Best Hit Search"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/disease",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Disease By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/disease<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Disease By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/disease/{disease}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Disease By Id"
					]
				}
			}
		},
		{
			"displayName": "Disease",
			"name": "disease",
			"required": true,
			"description": "An EFO identifier.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Disease By Id"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/drug/{DRUG_ID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Drug By ID"
					]
				}
			}
		},
		{
			"displayName": "Drug Id",
			"name": "drug_id",
			"required": true,
			"description": "An ID in the drug index.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "drug_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Drug By ID"
					]
				}
			}
		},
		{
			"displayName": "DRUG ID",
			"name": "DRUG_ID",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Drug By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/eco/{ECO_ID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get EC Oby ID"
					]
				}
			}
		},
		{
			"displayName": "ECO ID",
			"name": "ECO_ID",
			"required": true,
			"description": "An [evidence code ontology](http://www.ebi.ac.uk/ols/v2/browse.do?ontName=ECO) ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get EC Oby ID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/enrichment/targets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Enrichment Target"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/enrichment/targets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Enrichment Target"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/quicksearch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Quick Search"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"required": true,
			"description": "A full text query.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Quick Search"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Maximum amount of results to return. Defaults to 5.",
			"default": "",
			"type": "string",
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
						"Private"
					],
					"operation": [
						"Get Quick Search"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/relation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Relation"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/relation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Relation"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/relation/disease/{disease}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Relation By EFOID"
					]
				}
			}
		},
		{
			"displayName": "Disease",
			"name": "disease",
			"required": true,
			"description": "An EFO gene identifier.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Relation By EFOID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/relation/target/{target}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Relation By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"required": true,
			"description": "An Ensembl gene identifier.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Relation By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/target",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Target By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/target<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Target By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/target/expression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Target Expression By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "Gene",
			"name": "gene",
			"required": true,
			"description": "An Ensembl gene identifier.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "gene",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Target Expression By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/target/expression",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Target Expression By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/private/target/expression<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Post Target Expression By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/private/target/{target}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Target By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"required": true,
			"description": "An Ensembl gene ID for the target of interest.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Target By ENSGID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/swagger",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Private"
					],
					"operation": [
						"Get Swagger"
					]
				}
			}
		},
];

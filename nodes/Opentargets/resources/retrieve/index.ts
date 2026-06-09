import type { INodeProperties } from 'n8n-workflow';

export const retrieveDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					]
				}
			},
			"options": [
				{
					"name": "Get Association By ID",
					"value": "Get Association By ID",
					"action": "Get association by id",
					"description": "Once we integrate all evidence connecting a target to a specific disease, we\n compute an association score by the means of an harmonic sum. This *association score* provides\n an indication of how strong the evidence behind each connection is and can be\n used to rank genes in order of likelihood as drug targets.\n The association ID is constructed by using the Ensembl ID of the gene and the\n EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).\n The method returns an association object, which contains the data and summary\n on each evidence type included in the calculation of the score, as well as the score itself.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/association"
						}
					}
				},
				{
					"name": "Get Evidence By ID",
					"value": "Get Evidence By ID",
					"action": "Get evidence by ID",
					"description": "We call **evidence** a unit of data that support a connection between a target and a disease.\nThe Open Targets Platform integrates multiple types of evidence including genetic associations,\nsomatic mutations, RNA expression and target-disease associations mined from the literature.\nThis method allows you to retrieve a single evidence item or a list of pieces of evidence by using their\ntargetvalidation.org ID.\n\nEvidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).\nYou can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).\n\n**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/evidence"
						}
					}
				},
				{
					"name": "Post Evidence By ID",
					"value": "Post Evidence By ID",
					"action": "Get evidence for a list of IDs",
					"description": "This is the POST version of [/public/evidence](#!/public/get_public_evidence).\nIt allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/platform/public/evidence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/public/association",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Get Association By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "An association ID usually in the form of `TARGET_ID-DISEASE_ID`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Get Association By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/evidence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Get Evidence By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Internal unique ID of the evidence string to retrieve.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Get Evidence By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/evidence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Post Evidence By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /platform/public/evidence<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Retrieve"
					],
					"operation": [
						"Post Evidence By ID"
					]
				}
			}
		},
];

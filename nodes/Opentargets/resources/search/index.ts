import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "Get Search",
					"value": "Get Search",
					"action": "Search for a disease or a target",
					"description": "This method allows you to look for gene or diseases of interest using a free text search,\nreplicating the functionality of the search box on our homepage. It should be used to identify\nthe best match for a disease or target of interest, rather than gathering a specific set of evidence.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/search"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/public/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search"
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
						"Search"
					],
					"operation": [
						"Get Search"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"description": "Maximum amount of results to return. Defaults to 10, max is 10000.",
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
						"Search"
					],
					"operation": [
						"Get Search"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "How many initial results should be skipped. Defaults to 0.",
			"default": "",
			"type": "string",
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
						"Search"
					],
					"operation": [
						"Get Search"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Restrict the search to the type requested. Eg. `target` or `disease`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"Get Search"
					]
				}
			}
		},
];

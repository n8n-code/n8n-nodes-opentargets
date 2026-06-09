import type { INodeProperties } from 'n8n-workflow';

export const utilsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					]
				}
			},
			"options": [
				{
					"name": "Get Data Metrics",
					"value": "Get Data Metrics",
					"action": "Get metrics about the current data release",
					"description": "Returns the metrics about associations and evidences, divided by datasource, genes and so on.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/utils/metrics"
						}
					}
				},
				{
					"name": "Get Ping",
					"value": "Get Ping",
					"action": "Ping service",
					"description": "Check if the API is up\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/utils/ping"
						}
					}
				},
				{
					"name": "Get Data Stats",
					"value": "Get Data Stats",
					"action": "Get statistics about the current data release",
					"description": "Returns the number of associations and evidences, divided by datasource.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/utils/stats"
						}
					}
				},
				{
					"name": "Get Therapeutic Areas",
					"value": "Get Therapeutic Areas",
					"action": "Get the list of therapeutic areas about the current data release",
					"description": "Returns the list of therapeutic areas for the current data release\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/utils/therapeuticareas"
						}
					}
				},
				{
					"name": "Get Version",
					"value": "Get Version",
					"action": "Get API version",
					"description": "Returns current API version.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/platform/public/utils/version"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /platform/public/utils/metrics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					],
					"operation": [
						"Get Data Metrics"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/utils/ping",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					],
					"operation": [
						"Get Ping"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/utils/stats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					],
					"operation": [
						"Get Data Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/utils/therapeuticareas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					],
					"operation": [
						"Get Therapeutic Areas"
					]
				}
			}
		},
		{
			"displayName": "GET /platform/public/utils/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utils"
					],
					"operation": [
						"Get Version"
					]
				}
			}
		},
];

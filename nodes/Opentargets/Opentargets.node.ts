import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { filterDescription } from './resources/filter';
import { retrieveDescription } from './resources/retrieve';
import { searchDescription } from './resources/search';
import { publicDescription } from './resources/public';
import { privateDescription } from './resources/private';
import { utilsDescription } from './resources/utils';

export class Opentargets implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'opentargets',
		name: 'N8nDevOpentargets',
		icon: { light: 'file:./opentargets.svg', dark: 'file:./opentargets.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Open Targets Platform REST API',
		defaults: { name: 'opentargets' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOpentargetsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Filter",
					"value": "Filter",
					"description": "Methods to filter the available evidence."
				},
				{
					"name": "Retrieve",
					"value": "Retrieve",
					"description": "Methods to get specific evidence."
				},
				{
					"name": "Search",
					"value": "Search",
					"description": "Methods to search for target or diseases."
				},
				{
					"name": "Public",
					"value": "Public",
					"description": "Publicly supported stable API."
				},
				{
					"name": "Private",
					"value": "Private",
					"description": "Unstable API methods. Subject to change without prior notice. Use at your own risk."
				},
				{
					"name": "Utils",
					"value": "Utils",
					"description": "Utility methods."
				}
			],
			"default": ""
		},
		...filterDescription,
		...retrieveDescription,
		...searchDescription,
		...publicDescription,
		...privateDescription,
		...utilsDescription
		],
	};
}

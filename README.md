# @n8n-dev/n8n-nodes-opentargets

![opentargets Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-opentargets.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-opentargets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing opentargets API integrations by hand.**

Every time you connect n8n to opentargets, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to opentargets took 5 minutes, not half a day?**

This node gives you **6+ resources** out of the box: **Filter**, **Retrieve**, **Search**, **Public**, **Private**, and 1 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-opentargets
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-opentargets`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **opentargets API** → paste your API key
3. Drag the **opentargets** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Filter</b> (4 operations)</summary>

- Get Filter available associations
- Post Batch query available associations
- Get Filter available evidence
- Post Batch filter available evidence

</details>

<details>
<summary><b>Retrieve</b> (3 operations)</summary>

- Get association by ID
- Get evidence by ID
- Post Get evidence for a list of IDs

</details>

<details>
<summary><b>Search</b> (1 operations)</summary>

- Get Search for a disease or a target

</details>

<details>
<summary><b>Public</b> (13 operations)</summary>

- Get association by ID
- Get Filter available associations
- Post Batch query available associations
- Get evidence by ID
- Post Get evidence for a list of IDs
- Get Filter available evidence
- Post Batch filter available evidence
- Get Search for a disease or a target
- Get metrics about the current data release
- Get Ping service
- Get statistics about the current data release
- Get the list of therapeutic areas about the current data release
- Get API version

</details>

<details>
<summary><b>Private</b> (18 operations)</summary>

- Get Browse API documentation
- Get Browse interactive API documentation
- Get autocomplete objects
- Post Find the best hit
- Post Find information about a list of diseases
- Get Find information about a disease
- Get drug by ID
- Get evidence code by ID
- Post Enrichment analysis
- Get Search most relevant results
- Post Find related entities
- Get Find related entities by disease
- Get Find related entities by target
- Post Find information about a list of targets
- Get Query expression levels
- Post Batch query expression levels
- Get Find information about a target
- Get OpenAPI schema

</details>

<details>
<summary><b>Utils</b> (5 operations)</summary>

- Get metrics about the current data release
- Get Ping service
- Get statistics about the current data release
- Get the list of therapeutic areas about the current data release
- Get API version

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from opentargets docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official opentargets OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **opentargets** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the opentargets API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)

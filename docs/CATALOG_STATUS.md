# PromptShop Role Catalog Status

## Current seed scope

- 19 organizational functions
- 153 defined roles / positions
- 20 workflow commands per role
- 3,060 initial role-specific Prompt records when materialized

## Core rule

PromptShop does not treat prompts as the primary commercial unit. A **Role Package** is the commercial product and contains 20 role-relevant AI workflows. Individual prompts are the executable components inside the package.

`Function → Role → Role Package → Workflow Command → Prompt Version → Business Outcome`

## Prompt construction

The seed layer uses a reusable master-prompt engine with role and task variables. Every materialized prompt receives a stable Prompt ID and version. The production database stores the rendered prompt content so historical versions never change when the generator changes.

## Occupational taxonomy references

PromptShop's internal IDs are proprietary and intentionally stable. External classification is used only as a reference layer for interoperability and future mappings.

- ILO ISCO-08: https://isco.ilo.org/en/isco-08/
- European Commission ESCO: https://esco.ec.europa.eu/en/

ESCO is especially suitable as an external mapping layer because it represents occupations and associated skills in a machine-readable, multilingual classification and maps occupations to ISCO-08.

## Commercial packaging

Examples:

- `ROLE-FIN-ACCSPEC` → Accountant
- `PS-FIN-ACCSPEC` → AI Workflow Pack — Accountant
- `PS-FIN-ACCSPEC-P01` → first workflow prompt in the Accountant package

The same structure applies to HR Manager, Sales Manager, Data Analyst, Backend Developer, CFO, and the other roles in the catalog.

# PromptShop Role Package Data Model

## Principle

**Role = Product Family. Package = Role-specific AI toolkit. Prompt = reusable workflow command.**

The catalog is intentionally separated into:
`Department → Role → RolePackage → Prompt → PromptVersion → QualityRun`

### Stable IDs

- Department: `DEPT-{FUNCTION_CODE}` (examples: `DEPT-FIN`, `DEPT-HR`, `DEPT-DATA`)
- Role: `ROLE-{FUNCTION_CODE}-{ROLE_KEY}` (example: `ROLE-FIN-ACCSPEC`)
- Role Package: `PS-{FUNCTION_CODE}-{ROLE_KEY}` (example: `PS-FIN-ACCSPEC`)
- Prompt: `{PACKAGE_CODE}-P{01..20}` (example: `PS-FIN-ACCSPEC-P01`)
- Prompt Version: `{PROMPT_CODE}-V{semver}`

**Important:** Package IDs are not row-number based. Reordering the organization chart must never change product identity, purchases, URLs, or analytics history.

External occupational standards are reference mappings only. PromptShop IDs remain proprietary and stable even when ESCO/ISCO releases change.

## Prompt Contract

Each prompt record should contain:

- `promptCode`
- `title`
- `roleId`
- `packageId`
- `goal`
- `masterPrompt`
- `inputSchema`
- `outputSchema`
- `requiredInputs`
- `exampleInput`
- `exampleOutput`
- `recommendedModels`
- `limitations`
- `version`
- `status`
- `qualityScore`
- `lastTestedAt`

The master prompt is designed for direct copy/paste. It asks for missing critical information only when needed, validates input, separates fact from assumption, and ends with a quality check.

## 20-command structure

Every Role Package contains exactly 20 initial commands. Their categories are deliberately workflow-oriented:

1. Diagnose / frame
2. Plan
3. Analyze
4. Compare
5. Forecast / scenario
6. Prioritize
7. Detect risk
8. Find root cause
9. Review quality
10. Prepare communication
11. Produce report
12. Summarize
13. Improve process
14. Design checklist/SOP
15. Prepare meeting
16. Convert data/documents to decisions
17. Validate assumptions
18. Define actions
19. Track execution
20. Run weekly professional review

The task label is specialized by organizational function and the prompt is rendered with the specific Role context before it is persisted to production data.

## Prisma-oriented entity model

```text
Department
  └── Role
       └── RolePackage
            └── Prompt
                 └── PromptVersion
                      └── QualityRun

PromptPurchase
  ├── User
  └── RolePackage

PromptUsage
  ├── User
  ├── Prompt
  └── Outcome

Review
  ├── User
  ├── RolePackage
  └── Prompt (optional)
```

The database must store the rendered role-specific master prompt, not regenerate it at request time. Generation code is a seeding convenience; production content is versioned data.

## Commercial rule

The package page should sell:

> **"20 AI workflows built for your role."**

Not:

> "20 prompts."

The individual prompt page can expose a controlled preview. Full premium content requires verified entitlement.

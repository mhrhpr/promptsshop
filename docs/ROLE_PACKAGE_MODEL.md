# PromptShop Role Package Data Model

## Principle

**Role = Product Family. Package = Role-specific AI toolkit. Prompt = reusable workflow command.**

The catalog is intentionally separated into:
`Department → Role → RolePackage → Prompt → PromptVersion → QualityRun`

### IDs

- Department: `DEPT-{2}` (example `DEPT-FA`)
- Role: `ROLE-{DEPT}-{ROLE_KEY}`
- Role Package: `PS-{DEPT}-{ROLE_KEY}-{NNN}`
- Prompt: `{PACKAGE_CODE}-P{01..20}`
- Prompt Version: `{PROMPT_CODE}-V{semver}`

External occupational standards are reference mappings only. PromptShop IDs remain stable even if ESCO/ISCO releases change.

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

The concrete task for each command is role-specific.

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

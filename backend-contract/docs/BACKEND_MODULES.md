# PromptShop Modular Backend

## Domain modules

| Module | Responsibility |
|---|---|
| identity | Users, sessions, authentication and roles |
| catalog | Departments, roles, aliases, taxonomy and discovery |
| products | Role packages, workflows, pricing and publishing |
| prompts | Prompt content, variables, versions and access control |
| commerce | Orders, payments, entitlements and webhooks |
| library | Purchased/free workflow access and saved items |
| reviews | Ratings, reviews and feedback |
| quality | Evaluation runs, quality scores and release gates |
| search | Role/problem/task discovery and indexing |
| seo | Metadata, canonical URLs and content pages |
| analytics | Usage, conversion and outcome events |
| admin | CMS, moderation, audit and operational controls |

## Request flow

Route/Server Action -> Application Service -> Domain Module -> Repository -> Prisma -> PostgreSQL.

External providers are accessed only through adapters. Premium prompt content is returned only after a server-side entitlement check.

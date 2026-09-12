# PromptShop — AI Workflow Marketplace

> **Don't sell prompts. Sell outcomes.**
>
> PromptShop is a professional marketplace for ready-to-use AI workflows that solve specific work problems. The product is not a generic prompt collection; each premium product is engineered as a small specialized AI tool.

## 1. Product Decision

**Positioning:** Professional AI workflows for real work.

**Core transformation:**

`Expertise + structured workflow + AI → measurable professional outcome`

The marketplace evolves through three stages:

1. Prompt Marketplace
2. AI Workflow Marketplace
3. AI Work Operating System

### Primary customer journey

`Landing → Industry/Role → Problem → Workflow → Preview Result → Unlock/Buy → Library → Reuse → Feedback`

## 2. Five-Stage Agent Review

### Stage 1 — UNDERSTAND

**Mission:** Convert the original vision into an explicit product problem.

- Users: professionals, managers, analysts, HR, sales, marketing, business owners, developers, consultants, students and knowledge workers.
- Pain: generic prompts require users to know prompt engineering and often produce inconsistent outputs.
- Desired outcome: users buy a repeatable workflow that produces useful work output.
- Product promise: the customer should understand the result before purchasing.

### Stage 2 — EXTRACT

Extract the product contract:

| Dimension | Decision |
|---|---|
| Value unit | Professional outcome / workflow |
| Content hierarchy | Industry → Role → Problem → Workflow → Prompt |
| Product levels | Free → Individual → Pack → Role Pack → Professional System |
| Trust mechanism | Preview, examples, versioning, quality signals, reviews |
| Revenue | One-time + packs + role bundles + subscription + teams + enterprise |
| Growth | SEO around professional problems and roles |
| MVP | Marketplace core before advanced playground |

### Stage 3 — RESOLVE CRITICAL AMBIGUITIES

Decisions frozen for MVP:

- **Do not** build a generic prompt directory.
- **Do not** build the advanced AI playground before commerce and library fundamentals work.
- **Do not** expose paid master prompts before entitlement verification.
- Payment must be provider-agnostic at the application boundary.
- Content must be database-driven, not hardcoded into UI pages.
- Product pages must be indexable and outcome-oriented.
- Prompt quality must be measurable and versioned.
- Search must understand role, problem and outcome—not only exact keywords.

### Stage 4 — BUILD CONTRACT

#### MVP Success Criteria

1. A visitor can discover a professional workflow in under 60 seconds.
2. A product page communicates problem, audience, outcome and output before purchase.
3. A customer can authenticate, purchase, and retrieve entitled products.
4. Admin can create/version/publish workflows.
5. Every workflow has a reproducible quality record.
6. Product and role pages are SEO-indexable.
7. Analytics can connect discovery → product view → checkout → purchase → reuse.

#### Quality Contract

`Draft → Test → Evaluate → Optimize → Version → Publish → Feedback → Improve`

### Stage 5 — BUILD / VALIDATE

Implementation priority:

1. Information architecture
2. Database model
3. Storefront
4. Authentication
5. Checkout + entitlement
6. User library
7. Admin
8. SEO
9. Analytics
10. Quality/evaluation system
11. Advanced playground
12. Subscription/team/enterprise expansion

## 3. Information Architecture

```text
PromptShop
├── Home
├── Explore
│   ├── Industries
│   ├── Roles
│   ├── Problems
│   └── Workflows
├── Product
│   └── Workflow detail
├── Packs
│   ├── Prompt Pack
│   ├── Role Pack
│   └── Professional System
├── Pricing
├── Learn
│   ├── Guides
│   ├── Use Cases
│   ├── Comparisons
│   └── Prompt Engineering
├── Auth
├── Dashboard
│   ├── Library
│   ├── Purchases
│   ├── Favorites
│   └── Account
└── Admin
    ├── Products
    ├── Versions
    ├── Taxonomy
    ├── Orders
    ├── Customers
    ├── Reviews
    ├── Analytics
    └── SEO
```

## 4. Product Taxonomy

```text
Industry
  ↓
Role / Job
  ↓
Problem / Task
  ↓
AI Workflow
  ↓
Prompt / Prompt Steps
  ↓
Professional Outcome
```

Example:

```text
HR
→ HR Analyst
→ Employee Turnover Analysis
→ Turnover Risk Analysis Workflow
→ Master Prompt
→ Retention-ready management diagnosis
```

## 5. Product Specification

Every premium workflow must contain:

- Product name
- Problem solved
- Target user
- Expected outcome
- Input requirements
- Master Prompt
- Variables / placeholders
- Usage instructions
- Example input
- Example output
- Recommended AI model
- Advanced usage tips
- Limitations
- Version number
- Update history

Where appropriate, the prompt engine includes:

- Role definition
- Context
- Objective
- Constraints
- Input schema
- Reasoning framework
- Output schema
- Quality-control rules
- Error handling
- Validation
- Follow-up questions
- Iterative refinement

## 6. Product Levels

| Level | Purpose |
|---|---|
| Free | Demonstrate quality and acquire users |
| Individual Prompt | One specialized professional workflow |
| Prompt Pack | Multiple workflows around one objective |
| Role Pack | Complete AI toolkit for one professional role |
| Professional System | Multi-step connected workflow |

## 7. Core Data Model

```text
User
 ├── Purchase ── Product
 ├── Review ──── Product
 └── Library entitlement

Product
 ├── Industry
 ├── Role
 ├── Problem
 ├── ProductVersion
 ├── PromptWorkflow
 ├── SEO metadata
 └── Analytics events

ProductVersion
 ├── Master Prompt
 ├── Variables
 ├── Input Schema
 ├── Output Schema
 ├── Examples
 ├── Model Recommendation
 └── Quality Evaluation
```

## 8. Quality System

Each published workflow receives a measurable quality record.

Suggested metrics:

- Success rate
- User rating
- Reuse rate
- Completion rate
- Output quality score
- Refund rate
- Conversion rate
- Time-to-use
- Failure / clarification rate

Quality gates:

```text
Draft
 ↓
Functional Test
 ↓
Domain Evaluation
 ↓
Output Consistency Test
 ↓
UX Review
 ↓
Version
 ↓
Publish
 ↓
Collect Usage Data
 ↓
Optimize
```

## 9. Search System

Search dimensions:

- Job title
- Industry
- Problem
- Desired outcome
- AI model
- Skill level

Example query:

`HR turnover`

should retrieve:

- Employee Turnover
- Retention
- Exit Analysis
- Attrition Risk
- Workforce Planning

The search index should eventually support synonyms, semantic retrieval and taxonomy-aware ranking.

## 10. SEO Architecture

Indexable URL families:

```text
/industries/[industry]
/roles/[role]
/problems/[problem]
/workflows/[workflow]
/products/[slug]
/guides/[slug]
/use-cases/[slug]
/comparisons/[slug]
```

Target long-tail intent such as:

- AI prompts for HR managers
- ChatGPT prompts for employee turnover analysis
- AI prompt for sales performance analysis
- Best AI prompts for recruiters

Every indexable page should have unique title, description, canonical URL, structured internal links and outcome-focused content.

## 11. Monetization Architecture

```text
Free acquisition
      ↓
Individual workflow
      ↓
Prompt Pack
      ↓
Role Pack
      ↓
Subscription
      ↓
Team License
      ↓
Enterprise
```

Recurring revenue is the strategic priority; one-time purchases validate demand and create the conversion funnel.

## 12. Technical Architecture

### Recommended stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- Auth.js / provider adapter
- Stripe adapter for production checkout
- Server Actions / Route Handlers where appropriate
- Vercel deployment target
- Analytics event layer

### Architectural rule

UI → Application Services → Domain Model → Persistence / External Providers

External providers must remain behind adapters so authentication, payments, email and analytics can be replaced without rewriting domain logic.

## 13. Security / Commerce Rules

- Never trust client-side purchase state.
- Verify payment events server-side.
- Gate premium prompt content by server-side entitlement.
- Keep secrets exclusively in environment variables.
- Use role-based admin authorization.
- Store only the minimum required customer data.
- Log important commerce and entitlement events.

## 14. MVP Boundary

### Build now

- Landing page
- Taxonomy
- Search
- Role pages
- Workflow/product pages
- Authentication
- Checkout
- Purchase entitlement
- User library
- Admin product management
- Reviews
- Basic analytics
- SEO metadata + sitemap

### Defer

- Full interactive AI playground
- Prompt A/B experimentation UI
- Semantic recommendation engine
- Complex team permissions
- Enterprise procurement
- Multi-provider subscription orchestration

## 15. North-Star Metrics

### Primary

**Successful Workflow Reuse Rate**

Percentage of purchased workflows that are successfully used again by the customer.

### Supporting

- Visitor → product conversion
- Product → checkout conversion
- Checkout → purchase conversion
- Purchase → first use
- First use → successful outcome
- 30-day reuse
- Refund rate
- Role-pack attach rate
- Subscription conversion

## 16. Product Principle

For every feature ask:

> **What valuable result does the customer get?**

If a feature does not materially increase **value, conversion, retention, trust or scalability**, it should not be part of the MVP.

## 17. Reference Status

This document is the architectural/product reference for the `mhrhpr/promptsshop` repository.

Any future implementation decision should be checked against this contract before code is added.

# AGENTS.md — Demis Meneghetti (demismeneghetti.com.br)

> Single source of truth for any AI assistant working in this repo
> (Claude Code, GitHub Copilot, OpenCode, etc.) — `CLAUDE.md` and
> `.github/copilot-instructions.md` are both symlinks to this file (standard
> for every project).
> This file must be self-contained: assume the agent reading it has **no**
> access to Demis's personal `~/.claude/CLAUDE.md` and no memory of past
> sessions in this repo.

## Overview

Personal website of **Demis Meneghetti** (SQA Engineer at Planet Payment,
founder of Bee Lab Studio, co-founder of UFlowApp), served at
**demismeneghetti.com.br**. It is a living CV and the hub of his personal
brand: a link-in-bio landing page (`index.html`, `style.css`, `assets/`)
and talk decks under `talks/`, currently *Spec-Driven Development: QA-First
in the Age of AI* (BrowserStack Meetup, 2026), with live demo code in
`talks/qa-first-in-the-age-of-ai/examples/`. Stack: plain HTML5 + CSS3 +
vanilla JS, no framework, no build step. The talk examples are the only
Node code (Jest; run `npm test` inside `examples/`).

- Personal-brand strategy (content pillars, reels in collab with
  @beelabstudiocom, cadence) lives in the second brain, **not** in this repo:
  see "Second Brain" below. Read it before making copy or content decisions;
  don't re-derive strategy from first principles.
- Facts a fresh agent must not get wrong:
  - The domain is `demismeneghetti.com.br` (not `.com`).
  - This is Demis's **personal** brand, not a Bee Lab Studio client site.
    Visual identity comes from the project skill below, never from BLS's own
    identity (no hexagons, bee illustrations, Jost or BLS gradients). The
    yellows are shared with the Bee brands on purpose; that skill explains
    how.
  - Every push to `main` goes live (see "Infrastructure").

## Language & docs convention

- **Code, comments, commit messages, PR descriptions, and this file: English.**
- **User-facing site copy: Brazilian Portuguese (pt-BR).** `index.html` is
  `lang="pt-BR"`; talk decks are bilingual pt-BR/English, switched with
  `data-lang`. Whether content aimed at Portuguese SMEs should switch to
  pt-PT is an open decision recorded in the brand skill. Voice and tone rules
  live in that skill too.
- If you are Claude Code talking to Demis directly in this repo: he prefers
  chat replies in Portuguese even though code/commits stay in English. This
  is a personal preference tied to his account, not something derivable from
  this file — if you're a different tool/session and can't confirm it, ask
  or default to Portuguese for chat, English for anything committed.

## Working with Demis

- Extremely high, perfectionist quality bar — his own words: he'd rather
  "build a cannon to kill an ant" than ship something merely adequate.
  Always designs/chooses for scale, even when the goal is low cost or
  open-source/self-hosted tooling: within that constraint, still pick the
  best-in-class option, not the cheapest one that technically works. When
  there's a quality/effort tradeoff, default to the more rigorous option and
  let him choose to downgrade, rather than deciding "good enough" for him.
  When something is genuinely sloppy or under-specified, name it directly
  rather than softening it. (This fact lives in his personal
  `~/.claude/AGENTS.md` too, but is copied here verbatim because tools other
  than Claude Code/OpenCode — e.g. GitHub Copilot — only ever read this
  project's own file, never his personal one.)

## Infrastructure standard — read before proposing any hosting/deploy

**Bee Lab Studio hosts its institutional client sites on its own shared
infrastructure: Hetzner (VPS) + Coolify (self-hosted PaaS) + Cloudflare
(DNS/CDN/SSL).** This is the default for a typical site — assume it applies
unless this project has a documented reason not to.

- **Do not suggest or configure Vercel, Netlify, Render, Fly.io, or any other
  third-party hosting/PaaS** unless Demis explicitly asks for it. Bee Lab
  Studio already pays for and operates its own stack, and splitting sites
  across random providers creates ops overhead nobody wants.
- Shared server: `bee-lab-studio-shared-01` (Hetzner, Ubuntu 24.04). Coolify
  runs there and manages deploys for sibling repos.
- Deploy pattern for new repos: **Coolify GitHub App integration, auto-deploy
  on push to `main`.** A few older repos still use a legacy FTP + GitHub
  Actions pattern from before the shared Coolify server existed; that's
  historical, not the pattern for new work.
- Full architecture, credentials location (never the values), and the
  `.env` symlink pattern used across shared-infra projects:
  `02-projects/empresa/Credenciais de Infraestrutura — Hosting Partilhado.md` in the
  Bee Lab Studio second brain (path below). Read it before touching
  `.env`/deploy config.

### This repo: legacy FTP deploy

This site predates the shared Coolify server and is one of the legacy
repos:

- `.github/workflows/deploy.yml` deploys **every push to `main`** over FTPS
  to GoDaddy hosting (remote dir `demismeneghetti.com.br/`), using the
  `FTP_SERVER` / `FTP_USERNAME` / `FTP_PASSWORD` / `FTP_PORT` repo secrets.
- It uploads the whole repo except `.git*`, `.github/**`, `node_modules`,
  `README.md`, `.DS_Store` and `*.log`. Anything else committed is
  **published**: never commit drafts, notes or private files outside
  `.github/`.
- Migrating to the Coolify stack is an open decision for Demis. Don't
  migrate unasked, and don't add new FTP workflows.
- Domain/DNS: `demismeneghetti.com.br`, served by the GoDaddy hosting above.
  Registrar and DNS provider are not documented yet; confirm with Demis
  before touching DNS.

## Git & commit workflow

- **Commit messages: Conventional Commits** (`feat:`, `fix:`, `chore:`,
  `docs:`, `refactor:`), per Bee Lab Studio-wide convention.
- **Lightweight tier** (solo-built personal site): commit directly to
  `main`, no feature-branch/PR/CI overhead. Because `main` deploys on push,
  a branch + PR is still worth it for any change Demis should see before it
  goes live.
- Never commit `.env`/secrets. Never skip hooks (`--no-verify`) without
  asking first.

## Skills

### Project-specific

| Skill | Path | Use when |
|---|---|---|
| 🐝 Brand Identity (Demis) | `.github/skills/identidade-marca-demis/SKILL.md` | **Load before any CSS/markup, graphic, slide, thumbnail or social post.** Palette (amber family + companions), typography, marks, graphic devices, formats, voice. Its §10 lists where the site, avatar and talk deck still deviate. |

### Shared (`beelabstudio/ai`)

Bee Lab Studio keeps reusable role-based skills at `~/repos/ai/skills`
(clone with `git clone git@github.com:beelabstudio/ai.git ~/repos/ai` if
missing). Load the relevant one before doing work in its domain — they
contain rules not derivable from the code.

| Skill | Path | Use when |
|---|---|---|
| 💻 Software Engineer | `~/repos/ai/skills/foundation/software-engineer/SKILL.md` | General engineering practice for the HTML5/CSS3/vanilla JS stack and the Jest talk examples. |
| 🖼️ Web Visual Design | `~/repos/ai/skills/design/web-visual-design/SKILL.md` | **Load before writing any layout/CSS.** The bar against a visibly "AI-generated" look. Consumes the brand skill's palette/type instead of inventing one. |
| 🐝 Brand Designer | `~/repos/ai/skills/design/brand-designer/SKILL.md` | Evolving the identity itself, or auditing new material against it. It produced the project brand skill. |
| 🎨 UX/UI Designer | `~/repos/ai/skills/design/ux-ui-designer/SKILL.md` | Not this kind of project, but borrow its WCAG 2.1 AA accessibility floor regardless. |
| 🔌 Integration Specialist | `~/repos/ai/skills/foundation/integration-specialist/SKILL.md` | WhatsApp click-to-chat, analytics, any form or embed. |
| 🔍 SEO Specialist | `~/repos/ai/skills/marketing/seo-specialist/SKILL.md` | Meta tags, Open Graph, structured data, personal-brand search visibility. |

> Full shared skills library and current catalog: `~/repos/ai/INDEX.md`
> (index) and `~/repos/ai/AGENTS.md` (repo rules) — the table above lists
> only the ones this project actually uses.

## Second Brain (Obsidian)

Demis keeps two separate private vaults, and the split matters:

- **`beelabstudio-brain`** (`~/repos/beelabstudio-brain/Bee Lab Studio - Brain`):
  business. Bee Lab Studio, products, clients, and the personal-brand
  content strategy. Relevant notes:
  - `02-projects/empresa/Canais de Aquisição.md`: personal brand + Bee Lab
    Studio collab reels, content pillars, cadence.
  - `02-projects/empresa/Diagnóstico — Portefólio.md`: where this site
    stands in the portfolio.
  - Shared infra:
    `02-projects/empresa/Credenciais de Infraestrutura — Hosting Partilhado.md`.
  - There is no project ficha for this site yet.
- **`demismeneghetti-brain`** (`~/repos/demismeneghetti-brain/Demis Meneghetti - Brain`):
  Demis's personal life, including career (`02-areas/Carreira & Trabalho/`).
  Company, product and client matters never go there.
- **Always read** a vault's own `AGENTS.md`/`CLAUDE.md` before adding or
  editing notes there — follow its conventions and privacy guardrails.
- **Privacy (non-negotiable):** no NIF/NIPC, banking data, tokens/API keys,
  passwords, full signed contracts, or personal data beyond what's already
  public on the site — in this repo or in the vaults.

## Project status (2026-10-17)

- Live: link-in-bio landing page and the QA-First talk deck with its Jest
  demo.
- 2026-10-17: brand identity skill added. The site, avatar and talk deck are
  **not** migrated to it yet; its §10 lists the exact gaps.
- Still on the legacy FTP/GoDaddy deploy; Coolify migration undecided.

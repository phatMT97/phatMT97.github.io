# CV Content Revamp — Design Spec

**Date:** 2026-06-17
**Owner:** Mai Tan Phat
**Goal:** Replace generic, responsibility-style CV content with concrete, results-first content that convinces HR and tech leads. Reposition around the two roles the candidate is actually targeting.

---

## 1. Problem

The current minimal multi-variant CV (`cv/cv-minimal.html` + VI counterpart) is structurally fine but the content is generic: bullets describe responsibilities ("maintained applications", "fixed production issues") rather than achievements with evidence. No scope/scale, no outcomes, and the most differentiating work (AI products) is described too cautiously. The positioning ("Senior COBOL Developer & AI Tinker") also no longer matches reality — the last 2 years have been **Business Analyst on AI/LLM products**, while COBOL is the prior 5 years.

## 2. Positioning decision (Approach A)

Two clean, self-consistent variants — no vague "General" variant:

- **BA-AI** (default): `Business Analyst — AI / LLM Products`
- **COBOL-Dev**: `COBOL / Mainframe Developer`

A through-line runs across both: *the candidate repeatedly understands and documents undocumented legacy systems* — from reverse-engineering CICS screens at Capgemini to serving as the mainframe domain authority on AI projects that document legacy COBOL.

## 3. Accurate experience framing

~7 years total IT experience = **5 years mainframe + 2 years BA on AI products**. (Replaces the inflated "7+ years COBOL".)

Career timeline:
- **FPT Software — 04/2024 – Present** (one employer, two projects)
  - *AI Knowledge-Base Agent — Telecom, Japan* · mid-2025 – Present · role: BA · 11-person team
  - *AI Agent for COBOL Reverse-Engineering — Japan* · 04/2024 – mid-2025 · role: BA / mainframe domain authority · PoC accepted (project later stopped for budget — not mentioned on CV)
- **Dai-ichi Life Vietnam — 05/2023 – 04/2024** · COBOL Developer, Ingenium core (COBOL/Unix/Oracle, Perl batch)
- **Capgemini Vietnam — 04/2019 – 04/2023** · COBOL Developer → Senior Consultant · French non-life insurer (z/OS COBOL/DB2/CICS/JCL)

## 4. Structural changes

1. Reduce 3 variants → **2** (`BA-AI` default, `COBOL-Dev`). Remove "General".
2. New headlines per variant (drop "AI Tinker").
3. FPT split into two projects under one employer.
4. Reorder experience emphasis per variant (BA-AI leads with AI work; COBOL-Dev emphasizes mainframe technical depth).
5. **Remove the Certifications/PSPO line entirely** (candidate does not hold PSPO).
6. Education stays minimal (B.E. Mechatronics, Nong Lam University, 2015–2019); the career-switch-into-COBOL story is told via the summary, not a dedicated section.
7. Contact email: **phatmtp1997@gmail.com** (confirmed). Phone +84 868 226 707, LinkedIn, Ho Chi Minh City.

## 5. Output requirements

- **Two languages: EN + VI**, content mirrored. (VI per CLAUDE.md workflow.)
- **Tone:** professional, concise, results-first. No rambling / over-explaining.
- **Font: clean, highly readable sans (Inter) throughout**, larger size and more line spacing than the current EB-Garamond-serif setup. Must still fit A4 on print/PDF.
- PDFs re-exported via Chrome headless (per CLAUDE.md) after content approval.

## 6. Final content (EN) — VI mirrors this

### Variant BA-AI

**Headline:** Business Analyst — AI / LLM Products

**Summary:**
> Business Analyst focused on AI/LLM products, with 2+ years bridging Japanese clients and engineering teams to ship document-processing and knowledge-base agents. Backed by 5 years as a mainframe developer across life and non-life insurance — rare depth in regulated domains and legacy systems. Owns the full BA cycle: requirement elicitation, functional specs, UI/UX design, and client demos; AI-native in everyday delivery.

**Experience:**

**FPT Software** — Business Analyst · 04/2024 – Present
- *AI Knowledge-Base Agent — Telecom (Japan), mid-2025 – Present:* Sole BA on an 11-person team building an LLM agent that ingests technical documents to auto-generate documentation and power an internal Q&A knowledge base. Run client demos to elicit requirements, author functional specs, and design the UI/UX.
- *AI Agent for COBOL Reverse-Engineering — Japan, 04/2024 – mid-2025:* Acted as the team's mainframe domain authority — defined what "correct" output looks like and validated the agent's business-logic docs, call-graphs and legacy Q&A against real COBOL/JCL/DB2 behavior. PoC accepted by the client.

**Dai-ichi Life Vietnam** — COBOL Developer, Ingenium core · 05/2023 – 04/2024
- Built surrender-charge logic for unit-linked life products; produced customer documents via Crystal Reports; resolved production defects on a COBOL/Unix/Oracle core system.

**Capgemini Vietnam** — COBOL Developer → Senior Consultant · 04/2019 – 04/2023
- 4 years on a French non-life insurer's z/OS platform; promoted to Senior Consultant and mentored junior developers; reverse-engineered undocumented legacy code to deliver new CICS screens; worked directly with the client.

**Skills:**
- BA: Requirement elicitation · Functional specs · Client demos (JP/EU) · Agile/Scrum · Backlog management
- Product/Design: UI/UX design · User flows · Knowledge-base / Q&A product design
- AI/LLM: RAG · Knowledge base · Prompt design · AI-native delivery
- Domain: Insurance (life & non-life) · Telecom
- Foundation: COBOL / Mainframe (z/OS, DB2, CICS) — legacy-systems depth
- Soft: Stakeholder communication · Mentoring · Cross-functional teamwork

### Variant COBOL-Dev

**Headline:** COBOL / Mainframe Developer

**Summary:**
> COBOL/mainframe developer with 5 years on production insurance systems — 4 on IBM z/OS (COBOL, DB2, CICS, JCL) for a French non-life insurer, where I was promoted to Senior Consultant and mentored juniors, plus a year on the Ingenium life-insurance core (Unix/Oracle). Known for reverse-engineering undocumented legacy code to deliver new functionality. Now the domain authority on AI projects that document and modernize legacy COBOL.

**Experience:**

**Capgemini Vietnam** — COBOL Developer → Senior Consultant · 04/2019 – 04/2023
- Maintained and developed large-scale z/OS applications (COBOL, DB2, CICS, JCL batch) for a French non-life insurance client over 4 years — both maintenance and new development.
- Reverse-engineered undocumented legacy code to build new CICS display screens to client specifications, on a platform where new screens are difficult and no documentation existed.
- Handled complex production fixes and batch (JCL) support; tuned DB2 queries and COBOL performance.
- Promoted to Senior Consultant and mentored junior developers; worked directly with the client across two teams.

**Dai-ichi Life Vietnam** — COBOL Developer, Ingenium core · 05/2023 – 04/2024
- Maintained and enhanced the Ingenium life-insurance core (COBOL on Unix, Oracle, Perl batch).
- Built surrender-charge logic for unit-linked products; resolved production defects.
- Generated customer documents and extracted policy data via Crystal Reports.

**FPT Software** — Business Analyst · 04/2024 – Present
- Mainframe domain authority on an AI agent extracting business logic, call-graphs and documentation from a large, decades-old COBOL codebase; defined correctness criteria and validated output against real COBOL/JCL/DB2 behavior. PoC accepted by the client.
- Currently BA on an LLM knowledge-base agent for a Japanese telecom client.

**Skills:**
- Mainframe: COBOL · JCL/Batch · DB2/SQL · CICS · VSAM · z/OS · TSO/ISPF
- DB & Tools: DB2 · Oracle (Ingenium) · Perl batch · Crystal Reports · FileAid
- Debug & Perf: Abend-AID · RDi · Production troubleshooting · Performance tuning
- Domain: Non-life & life insurance (policy lifecycle, surrender charge, batch)
- Modern: AI/LLM for legacy modernization (domain advisor)

### Shared

- **Education:** B.E. in Mechatronics Engineering · Nong Lam University, Ho Chi Minh City · 2015–2019
- **Languages:** English (Professional working proficiency) · French (Basic) · Vietnamese (Native)

## 7. Out of scope

- No new metrics invented — the candidate does not have hard accuracy/throughput numbers for the AI work; keep qualitative and honest.
- Portfolio site (`index.html`) layout is not changed here beyond linking to the updated CVs/PDFs (handled at implementation).

## 8. Files (to be confirmed in the implementation plan)

- `cv/cv-minimal.html` (EN, multi-variant) — content + font + variant reduction
- `cv/cv-vi-minimal.html` (VI) — mirror
- Re-export affected PDFs at repo root
- Verify the portfolio hub (`index.html`) still links correctly

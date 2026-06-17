# Portfolio Redesign — Editorial Minimal — Implementation Plan

**Goal:** Rewrite the root portfolio (`index.html` + `style.css` + `script.js`) as a refined editorial-minimal site with a 3-way lens system (BA/Vice PM · COBOL Dev · General), a CV download hub for the 6 existing PDFs, and a VKey side-project section. Vanilla stack, no build, no GSAP.

**Spec:** `docs/superpowers/specs/2026-06-17-portfolio-redesign-editorial-design.md`

**Architecture:** Single static page. Lens state = a class on `<body>` (`lens-ba` / `lens-cobol` / `lens-general`) plus `data-lens` attributes on per-lens content; CSS shows/hides and reorders. JS handles lens switching + `localStorage`, CV hub role/lang selection, smooth scroll, and IntersectionObserver scroll-reveal. No-JS fallback = General view (default body class in HTML).

**Tech stack:** HTML5, CSS3 (custom properties, grid/flex, `prefers-reduced-motion`), vanilla JS, Google Fonts (display serif + grotesk + mono). Lead skill: `design-taste-frontend` (v2); palette/type from `minimalist-ui`; audit from `redesign-existing-projects`.

**Design tokens (locked):** warm paper bg, near-black ink, single **ink-blue** accent. No gradients/heavy shadows. Email `phatmtp1997@gmail.com`. VKey repo `https://github.com/phatMT97/VKey`.

---

## Reference content (English, per-lens)

### Hero role line
- BA: **Business Analyst · Vice PM** — *from mainframe COBOL to product & delivery*
- COBOL: **Senior COBOL Developer** — *IBM mainframe & AI-assisted legacy modernization*
- General: **Business Analyst · Vice PM · COBOL Developer**

### Summary paragraph
- **BA/PM:** 7+ years on large-scale mainframe programs for international clients (EU, Japan), now moving into business analysis and delivery. Hands-on with Agile/Scrum — sprint planning, client demos, requirement clarification, mentoring. Deep life-insurance domain: policy lifecycle, claims, batch operations, production SLAs.
- **COBOL:** COBOL developer with 7+ years on IBM z/OS — strong in JCL/batch, DB2/SQL, CICS, VSAM. Production-grade delivery under strict SLAs for European insurance (Capgemini, 4 yrs) and the **Ingenium** core at Dai-ichi Life Vietnam (Unix, Oracle). Fluent with Abend-AID, FileAid, RDi.
- **General:** Senior COBOL developer (7+ yrs, IBM mainframe) now pivoting to BA / Vice PM. Currently a **technical advisor** on an AI-Agent legacy-modernization project, pairing deep mainframe knowledge with modern AI/LLM tooling.

### Highlight stats (hero, all lenses)
- 7+ years experience · VN / JP / EU delivery · legacy → product

### Experience (per `CLAUDE.md` corrections)
- **FPT Software – AI Center · 04/2024–Present** — Technical advisor on an AI-Agent project for COBOL legacy modernization (general legacy work, not insurance-specific). Supports DB2 query optimization & COBOL review with ChatGPT/Gemini/custom agents; sprint planning & demos; mentors juniors on COBOL + Agile + AI-assisted dev.
- **Dai-ichi Life Vietnam — Ingenium · 05/2023–04/2024** — Built/maintained insurance business features on the Ingenium core in COBOL (Unix, Oracle). Production fixes, change-driven logic, daily batch; life-insurance domain (policy lifecycle, claims, premiums).
- **Capgemini Vietnam · 04/2019–04/2023** — Maintained/developed large-scale IBM z/OS apps for **European** insurance clients (4 yrs). Complex production fixes, batch JCL under strict SLAs, Abend-AID analysis, DB2/COBOL performance; cross-timezone EU collaboration.

### Toolkit groups
- **BA/PM emphasis:** Requirements & analysis · Stakeholder management · Agile/Scrum (PSPO I) · Documentation · Cross-functional coordination
- **COBOL emphasis:** COBOL · JCL/Batch · DB2/SQL · z/OS · CICS/VSAM · Abend-AID/FileAid/RDi
- **Shared:** AI Agents & LLMs · Legacy modernization · Prompt engineering · English (fluent) · French (basic)

### VKey blurb
> **VKey — Vietnamese Input.** A personal project where I'm learning "vibe coding" — a Vietnamese typing tool I built to get hands-on with modern dev. Code signed for free by SignPath.io.

---

## Tasks

### Phase 1 — Setup & audit
- [ ] Confirm git is clean; the pre-rewrite `index.html`/`style.css`/`script.js` are preserved in history (commit `17add24` and earlier). No separate backup files needed beyond existing `index copy.html`.
- [ ] Pick Google Fonts: display serif (e.g. Fraunces or Instrument Serif), grotesk body (e.g. Inter), mono accent (e.g. JetBrains Mono). Lock in `<head>`.

### Phase 2 — CSS foundation (`style.css`)
- [ ] Define tokens: `--paper`, `--ink`, `--ink-soft`, `--accent` (ink-blue), `--rule`, spacing scale, type scale, max-width container.
- [ ] Base/reset, typography (serif headings, grotesk body, mono accents), hairline rules, link underline style, visible focus states.
- [ ] Lens visibility/order rules: `body.lens-* [data-lens]` show/hide; experience & toolkit reordering via `order`/display per lens.
- [ ] Scroll-reveal base (opacity/translate → visible) gated behind a `.is-in` class; wrap in `@media (prefers-reduced-motion: no-preference)`.
- [ ] Responsive: mobile-first, breakpoints for top bar, hero, CV hub grid, toolkit.

### Phase 3 — HTML (`index.html`)
- [ ] Document head: meta, title/description (dual identity), font links, `style.css`. `<body class="lens-ba">`.
- [ ] Top bar: `MTP` monogram, lens switch (3 real `<button>`s, ARIA), nav anchors.
- [ ] Hero: `<h1>` name, per-lens role line (`data-lens`), per-lens summary sentence, highlight stats, CTAs (`Download CV`, `Contact`), status line.
- [ ] Summary section: per-lens paragraphs.
- [ ] Experience section: typographic timeline, 3 roles, bullets tagged per lens.
- [ ] Toolkit section: grouped skills with per-lens emphasis/order.
- [ ] CV download hub: 3 role cards (pre-selected by lens), EN/VI toggle, download button wired to the 6 PDF filenames.
- [ ] VKey section: blurb, GitHub link, SignPath credit line.
- [ ] Contact + footer: email `phatmtp1997@gmail.com`, LinkedIn, minimal footer (no GSAP credit).
- [ ] Accessibility pass: landmarks, single `<h1>`, alt/aria, skip link, all content present with JS off.

### Phase 4 — JS (`script.js`)
- [ ] Lens switch: click/keyboard (arrow + Enter/Space) sets `body` class, updates `aria-selected`, persists to `localStorage`, restores on load.
- [ ] CV hub: track selected role (synced to lens) + language toggle; compute correct PDF href; download/open on click.
- [ ] Smooth anchor scroll for nav + hero CTAs.
- [ ] IntersectionObserver scroll-reveal adding `.is-in`; skip when `prefers-reduced-motion: reduce`.

### Phase 5 — Verify & polish
- [ ] Manual browser check: all 3 lenses reframe + persist; JS-off shows General with everything readable.
- [ ] Verify all 6 CV download links resolve to existing files.
- [ ] Verify VKey GitHub link + SignPath credit.
- [ ] Confirm zero slop remnants (no blobs/particles/cursor-trail/glow/emoji-headings/GSAP).
- [ ] Responsive check at mobile + desktop widths; contrast AA check.
- [ ] Commit.

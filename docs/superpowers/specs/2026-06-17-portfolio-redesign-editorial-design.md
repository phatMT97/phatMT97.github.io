# Portfolio Redesign — Editorial Minimal — Design Spec

**Date:** 2026-06-17
**Owner:** Mai Tấn Phát
**Status:** Draft (awaiting user review)

## 1. Goal

Re-create the root portfolio page (`index.html`) as a refined **editorial-minimal** site that:

1. Presents a **dual identity** — Business Analyst / Vice PM **and** COBOL Developer — leading with the BA/PM pivot.
2. Acts as a **CV download hub** for the 6 existing PDFs (3 roles × EN/VI).
3. Showcases the **VKey – Vietnamese Input** side project (honest framing: a personal project for learning "vibe coding"), with a GitHub link and a small SignPath code-signing credit.

The page must read as senior and professional (BA/PM credibility) while keeping a quiet nod to the terminal/COBOL roots.

## 2. Design direction

Refined editorial minimal (per `minimalist-ui` + `high-end-visual-design`, built lead by `design-taste-frontend` v2, audited via `redesign-existing-projects`).

- **Palette:** warm paper background, near-black ink, **one** muted accent (**ink-blue** — locked). No gradients, no heavy shadows.
- **Type:** editorial contrast — display serif headlines, clean grotesk body, a touch of mono as a terminal/COBOL nod. Generous whitespace, hairline rules.
- **Motion:** restrained — subtle scroll-reveal fades, link underlines, smooth anchor scroll. Respects `prefers-reduced-motion`.
- **Tone:** humble but capable (per `CLAUDE.md`); no overselling.

## 3. Deliberate slop removal (redesign audit)

Remove from the current page — these are the AI-playful tells that undercut BA/PM seniority:

- SVG background blobs
- Particle canvas
- Cursor trail dot
- Glow-pulse keyframe animation
- Sticker / post-it / hand-drawn "Caveat" accents
- Emoji-in-headings (🦕 🛠️ 🪄 etc.)
- GSAP dependency (replaced by CSS + IntersectionObserver)
- Footer "Made with ☕ and GSAP" line

## 4. The lens system (page spine)

A sticky top switch with three options: **BA / Vice PM · COBOL Dev · General**. Default = **BA / Vice PM**.

Switching the lens reframes, client-side:

- Hero role line + hero summary sentence
- Summary paragraph
- Emphasis/order of experience bullets
- Emphasis/order of toolkit groups
- Pre-selected role card in the CV download hub

Implementation:

- Real `<button>`s in a `role="tablist"`-style group, ARIA-labelled, keyboard-accessible (arrow keys + Enter/Space).
- Content variants live in the DOM via `data-lens="ba|cobol|general"` attributes (or per-lens text nodes toggled by a class on `<body>`, e.g. `body.lens-ba`). No text injected from JS strings where avoidable — keep copy in HTML for SEO + no-JS fallback.
- Active lens persisted in `localStorage`; falls back to default if unset.
- **No-JS fallback:** with JS off, the General framing is shown and all content is present/readable.

## 5. Sections (top → bottom)

1. **Top bar** — `MTP` monogram · lens switch · nav anchors (About · Experience · Toolkit · CV · VKey · Contact).
2. **Hero** — name, lens-driven role line, one-sentence summary, CTAs (`Download CV` → scrolls to hub; `Contact`). Quiet status line ("Open to BA / PM roles"). 2–3 understated highlight stats folded in (e.g. 7+ yrs; VN/JP/EU delivery; legacy → product). No illustration/art.
3. **Summary** — short editorial paragraph, reframes per lens.
4. **Experience** — typographic timeline. Content per `CLAUDE.md` corrections:
   - **FPT Software – AI Center** (04/2024–Present): technical advisor on an AI Agent project for COBOL legacy modernization. *Not* insurance-specific.
   - **Dai-ichi Life VN — Ingenium** (05/2023–04/2024): insurance business features; runs on Unix, DB likely Oracle.
   - **Capgemini Vietnam** (04/2019–04/2023): **EU** insurance market; 24/7 stability, Abend-AID/DB2.
   - Bullets reorder/emphasize per lens.
5. **Toolkit** — grouped skills. BA lens surfaces requirements / stakeholder mgmt / Agile-PSPO / documentation; COBOL lens surfaces COBOL / JCL / DB2 / z/OS; AI/LLM shared across both.
6. **CV download hub** — three role cards (BA-PM, COBOL-Dev, General), pre-selected by current lens → EN/VI toggle → `⬇ Download PDF`. File map:

   | Role | EN | VI |
   |---|---|---|
   | BA / Vice PM | `Mai-Tan-Phat-CV-Minimal-BA-PM.pdf` | `Mai-Tan-Phat-CV-Minimal-BA-PM-VI.pdf` |
   | COBOL Dev | `Mai-Tan-Phat-CV-Minimal-COBOL-Dev.pdf` | `Mai-Tan-Phat-CV-Minimal-COBOL-Dev-VI.pdf` |
   | General | `Mai-Tan-Phat-CV-Minimal-General.pdf` | `Mai-Tan-Phat-CV-Minimal-General-VI.pdf` |

7. **VKey – Vietnamese Input** — honest blurb ("a personal project, learning vibe coding"), GitHub link (`https://github.com/phatMT97/VKey`), and a small **"Code signed for free by SignPath.io"** credit line.
8. **Contact + footer** — email (`phatmtp1997@gmail.com` — locked), LinkedIn. Minimal footer, no GSAP credit.

## 6. File structure

```
index.html        # rewritten from scratch (vanilla, no GSAP)
style.css         # rewritten — editorial tokens + lens classes
script.js         # rewritten — lens switch, CV hub, scroll-reveal, smooth scroll
index copy.html   # existing backup — left untouched
```

Old `index.html` / `style.css` / `script.js` are preserved in git history (commit before rewrite). The `cv/` HTML family and the 6 PDFs are **unchanged**.

## 7. Accessibility & responsive

- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), single `<h1>`.
- Mobile-first; lens switch and CV hub usable on small screens.
- Keyboard navigable; visible focus states; `prefers-reduced-motion` honored.
- Color contrast meets WCAG AA on the paper/ink palette.

## 8. Non-goals

- Changing or regenerating any CV PDF or the `cv/*.html` files.
- A backend, form submission, or analytics.
- Full bilingual translation of the *portfolio page itself* (the lens reframes role emphasis in English; only the CVs are bilingual).
- Dark mode.
- Blog / projects beyond VKey.

## 9. Success criteria

- Page reads as a senior BA/PM portfolio with COBOL depth, not a playful dev page.
- All three lenses reframe correctly and persist; works with JS disabled (General view).
- All 6 CV PDFs downloadable via the hub with correct role+language mapping.
- VKey section links to GitHub and shows the SignPath credit.
- No blobs/particles/cursor-trail/glow/emoji-headings remain.
- Lighthouse-clean: accessible, no layout shift, motion-reduced safe.

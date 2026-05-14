# CV Minimal Multi-Variant Template — Design Spec

**Date:** 2026-05-14
**Owner:** Mai Tấn Phát
**Status:** Draft (awaiting user review)

## 1. Goal

Add a new CV page in the minimalist style of [hieutrungdao.github.io](https://hieutrungdao.github.io) that supports **3 audience-targeted variants** (General / BA-PM / COBOL Dev), in a single self-contained HTML file that prints cleanly to a 1-page A4 PDF.

The existing `index.html` portfolio and the existing `cv/cv-vi.html` family of CV files are **unchanged**.

## 2. Non-goals

- Long scroll resume page (we chose 1-page A4 layout, not hieudao's full-scroll format).
- Dark mode toggle.
- Replacing or modifying existing CV files in `cv/`.
- Linking the new CV from `index.html` navbar.
- Publications, Awards, Competitions, or Certificates sections.

## 3. File structure

```
cv/
├── cv-vi.html              # existing — unchanged
├── cv-vi-hcltech.html      # existing — unchanged
├── cv.html                 # existing — unchanged
├── cv-hcltech.html         # existing — unchanged
├── cv-vi-minimal.html      # NEW — Vietnamese, built first
└── cv-minimal.html         # NEW — English, built after VI is approved
```

Each file is **self-contained**: HTML + inline `<style>` + inline `<script>`. No dependencies on `style.css` or `script.js` of the root portfolio.

## 4. Workflow

Per `CLAUDE.md`:
1. Build `cv-vi-minimal.html` (Vietnamese) first.
2. User reviews content + visual in browser.
3. After approval, create `cv-minimal.html` (English mirror).
4. Export PDFs via Chrome headless (Windows path through `wslpath -w`).

## 5. Variants

### 5.1 The three variants

| Key | Label (VI) | Label (EN) | Target audience | Content emphasis |
|---|---|---|---|---|
| `general` | General | General | Most HR / recruiters | Balanced — mainframe + AI + BA |
| `ba-pm` | BA / PM | BA / PM | Companies hiring BA or PM | Requirements, stakeholders, agile, domain |
| `cobol-dev` | COBOL Dev | COBOL Dev | Traditional mainframe recruiters | Deep technical — COBOL, JCL, DB2, z/OS, debug |

Default variant: `general`.

### 5.2 What changes between variants

Three things change; everything else stays identical:

1. **Summary paragraph** — each variant has its own 4–6 line summary tailored to that audience.
2. **Skills section composition & ordering** — skill groups are *both filtered and reordered* by relevance. Each variant shows 5 groups:
   - `general`: Mainframe · AI / Tools · BA · Soft Skills · Languages
   - `ba-pm`: BA · Soft Skills · Domain (Insurance) · Tools · Languages
   - `cobol-dev`: Mainframe · DB & Tools · Debug · AI · Languages

   Some groups appear only in one variant (e.g. "Domain (Insurance)" only in `ba-pm`, "Debug" only in `cobol-dev`). "Languages" appears in all.
3. **Work Experience bullets** — each role has ~4–5 candidate bullets; each bullet is tagged with one or more variant keys; only bullets matching the active variant are shown (target: 2–3 visible bullets per role per variant).

What does **not** change between variants: header (name, role tagline, contact), Projects, Education, Languages section content.

### 5.3 Switching mechanism

Both UI tabs and URL parameters are supported.

**Tabs** — rendered just below the header:

```
[ General ]   [ BA / PM ]   [ COBOL Dev ]
```

Active tab has the accent color underline; inactive tabs are muted gray.

**URL parameter** — `?role=general|ba-pm|cobol-dev`. Example:
`cv-vi-minimal.html?role=ba-pm`

On page load:
- Read `role` query param.
- If valid, activate that variant.
- If missing or invalid, fall back to `general`.

On tab click:
- Update `body[data-role]` attribute.
- Update URL via `history.replaceState` (no page reload).

### 5.4 Print behavior

Whichever variant is active when the user prints (or runs Chrome headless) is the variant that prints. Inactive variant content is `display: none` and is not rendered to PDF. The variant tabs themselves are hidden via `@media print`.

## 6. Visual design

### 6.1 Typography

| Use | Font stack | Weight |
|---|---|---|
| Name, section titles | `'EB Garamond', 'Source Serif Pro', Georgia, serif` | 500 |
| Body, role tagline | `'Inter', system-ui, sans-serif` | 400, 600 for emphasis |
| Dates, mono tags | `'JetBrains Mono', ui-monospace, monospace` | 400 |

### 6.2 Color palette

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background (white for clean PDF) |
| `--text` | `#1A1A1A` | Primary text |
| `--text-muted` | `#666666` | Dates, meta, role tagline |
| `--accent` | `#1E3A5F` | Links, active tab underline, highlight |
| `--divider` | `#E5E5E5` | Section separator lines (1px) |

Only one accent color; used sparingly.

### 6.3 Layout

- Single column, max-width `720px`, centered.
- Web padding: `64px` top/bottom, `48px` sides.
- Print padding: `16mm` top/bottom, `18mm` sides.
- Section gap: `36px` web, `20px` print.
- Section title: small caps, 12px, letter-spacing `2px`, bottom border `1px solid var(--divider)`.

### 6.4 Visual hierarchy preview

```
Mai Tấn Phát                          ← serif 36px, weight 500
Senior COBOL Developer & AI Tinker    ← sans 16px, color muted

✉ email · ✆ phone · 🌐 site · in linkedin   ← sans 13px, single line

[ General ]   [ BA / PM ]   [ COBOL Dev ]   ← variant tabs

────────────────────────────────────
SUMMARY                              ← small caps tracking 2px
────────────────────────────────────

Variant-specific paragraph here...

────────────────────────────────────
WORK EXPERIENCE
────────────────────────────────────

FPT Software — AI Center             ← serif 18px
Senior COBOL Developer & AI Tinker   ← sans 14px italic
04/2024 – Present · Hồ Chí Minh      ← mono 12px muted

• Bullet visible in current variant
• Bullet visible in current variant
```

## 7. Section structure & order

1. **Header** — name, role tagline, contact line (1 row, separators `·`)
2. **Variant tabs**
3. **Summary** — variant-specific paragraph
4. **Work Experience** — 3 roles (FPT AI Center, Dai-ichi Life, Capgemini), each with 2–3 visible bullets after variant filter
5. **Skills / Tech Stack** — 5 grouped lists per variant; composition and order vary by variant (see §5.2)
6. **Projects / Highlights** — 2–3 short entries (1–2 sentences each)
7. **Education** — 1 line per institution
8. **Languages** — 1 single line: `English (Fluent) · French (Basic) · Vietnamese (Native)`

## 8. Implementation details

### 8.1 HTML / data attributes

Every variant-conditional element carries a `data-variant` attribute listing the variants it appears in:

```html
<p data-variant="general"> ... general summary ... </p>
<p data-variant="ba-pm"> ... BA/PM summary ... </p>
<p data-variant="cobol-dev"> ... COBOL Dev summary ... </p>

<li data-variant="general ba-pm">Bullet shown for general and ba-pm only</li>
<li data-variant="cobol-dev">Bullet shown for cobol-dev only</li>
```

For the Skills section, each skill group is a flex item carrying both:
- `data-variant="..."` — listing which variants the group appears in (filtered the same way as bullets);
- `style="--ord-general:N; --ord-ba-pm:N; --ord-cobol-dev:N"` — per-variant order index. The flex container reads the active variant's `--ord-{role}` via CSS to set the group's `order`.

Example:

```html
<div class="skill-group"
     data-variant="general cobol-dev"
     style="--ord-general:1; --ord-cobol-dev:1">
  <h4>Mainframe</h4>
  <p>COBOL · JCL · DB2 · z/OS</p>
</div>
```

```css
body[data-role="general"]    .skill-group { order: var(--ord-general,    99); }
body[data-role="ba-pm"]      .skill-group { order: var(--ord-ba-pm,      99); }
body[data-role="cobol-dev"]  .skill-group { order: var(--ord-cobol-dev,  99); }
```

### 8.2 CSS visibility rule

```css
body[data-role="general"]  [data-variant]:not([data-variant~="general"])  { display: none; }
body[data-role="ba-pm"]    [data-variant]:not([data-variant~="ba-pm"])    { display: none; }
body[data-role="cobol-dev"][data-variant]:not([data-variant~="cobol-dev"]){ display: none; }
```

### 8.3 JavaScript (~30 lines, inline)

```js
const VARIANTS = ['general', 'ba-pm', 'cobol-dev'];
function setRole(role) {
  if (!VARIANTS.includes(role)) role = 'general';
  document.body.dataset.role = role;
  document.querySelectorAll('.variant-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.role === role);
  });
  const url = new URL(window.location);
  url.searchParams.set('role', role);
  history.replaceState({}, '', url);
}
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  setRole(params.get('role') || 'general');
  document.querySelectorAll('.variant-tab').forEach(tab => {
    tab.addEventListener('click', e => { e.preventDefault(); setRole(tab.dataset.role); });
  });
});
```

### 8.4 Print stylesheet

```css
@media print {
  @page { size: A4; margin: 0; }
  body { padding: 0; background: white; }
  .page { padding: 16mm 18mm; box-shadow: none; }
  .variant-tabs { display: none; }
  a { color: var(--text); text-decoration: none; }
  /* tighten spacing */
  .section { margin-bottom: 20px; }
}
```

## 9. PDF export

Per `CLAUDE.md`:

```bash
"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$(wslpath -w /home/phatmt/code/profile/Mai-Tan-Phat-CV-Minimal-{variant}.pdf)" \
  "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-minimal.html)?role={variant}"
```

Generate one PDF per variant after the English version is approved. (`{variant}` ∈ `general`, `ba-pm`, `cobol-dev`.)

## 10. Content guidelines

Per `CLAUDE.md`:
- **Tone:** modest but capable; don't overstate.
- **Ingenium (Dai-ichi Life VN):** runs on Unix, database is most likely Oracle (not DB2).
- **Capgemini:** EU market, 04/2019 – 04/2023.
- **FPT AI Center:** legacy modernization in general; *not* insurance-specific.
- **AI Agent role:** **technical advisor**, not lead developer.

Each bullet should be one line at body font size (15px web / 13.5px print), in active voice, starting with a verb.

## 11. Success criteria

- [ ] `cv/cv-vi-minimal.html` renders correctly in Chrome.
- [ ] All three variants (`?role=general|ba-pm|cobol-dev`) display correct Summary, Skills order, and filtered bullets.
- [ ] Tab clicks switch variant without page reload and update the URL.
- [ ] Default state (no query param) shows `general` variant.
- [ ] Each variant prints to **exactly 1 A4 page** via Chrome headless.
- [ ] Visual style matches Section 6 (serif headings, sans body, single navy accent, divider lines).
- [ ] User approves Vietnamese version → English version mirror is created → 3 PDFs exported per variant.

## 12. Open questions

None at design stage. Content drafting (the actual Summary text and bullets for each variant) happens during implementation; user reviews content before PDF export per `CLAUDE.md` workflow.

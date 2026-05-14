# CV Minimal Multi-Variant Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single self-contained HTML CV file with 3 audience-targeted variants (General / BA-PM / COBOL Dev) in a minimalist style inspired by hieutrungdao.github.io. Vietnamese first; English mirror after VI approval; 6 PDFs (3 VI + 3 EN) at the end.

**Architecture:** One HTML file per language (`cv/cv-vi-minimal.html`, `cv/cv-minimal.html`), each with inline `<style>` and inline `<script>`. Variant filtering via `data-variant` attributes + `body[data-role]` CSS rules. Skill group ordering via per-variant CSS custom properties (`--ord-{role}`). No build step, no dependencies.

**Tech Stack:** HTML5, CSS3 (flexbox, CSS variables, `@media print`), vanilla JavaScript (~30 lines), Google Fonts (EB Garamond, Inter, JetBrains Mono), Chrome headless for PDF export.

**Spec:** `docs/superpowers/specs/2026-05-14-cv-minimal-multivariant-design.md`

---

## Reference content (drafted, used by tasks below)

These three summary paragraphs and the bullet sets are written here once so later tasks can quote them verbatim without placeholders.

### Summary — General
> Lập trình viên COBOL Senior với hơn **7 năm kinh nghiệm** trên IBM Mainframe (z/OS, COBOL, JCL, DB2). Đã làm việc với khách hàng bảo hiểm tại **châu Âu và Nhật Bản** suốt nhiều dự án production-grade. Hiện đóng vai trò **cố vấn kỹ thuật** cho dự án AI Agent về hiện đại hóa hệ thống legacy — kết hợp kiến thức mainframe sâu với công cụ AI/LLM hiện đại để hỗ trợ trích xuất logic nghiệp vụ và tạo tài liệu kỹ thuật.

### Summary — BA / PM
> Developer với 7+ năm kinh nghiệm phối hợp cross-functional team trên các dự án mainframe quy mô lớn cho **khách hàng quốc tế** (EU, Nhật). Quen với quy trình **Agile / Scrum** — đã trực tiếp tham gia sprint planning, demo khách hàng, requirement clarification và mentoring junior. Hiểu sâu nghiệp vụ **bảo hiểm nhân thọ**: vòng đời hợp đồng, claim processing, batch operations và SLA production.

### Summary — COBOL Dev
> COBOL Developer 7+ năm trên IBM z/OS, mạnh về **JCL/batch, DB2/SQL, CICS, VSAM**. Kinh nghiệm production-grade với SLA nghiêm ngặt cho khách hàng bảo hiểm châu Âu (Capgemini, 4 năm) và hệ thống lõi **Ingenium** tại Dai-ichi Life Việt Nam (chạy trên Unix, database Oracle). Thành thạo **Abend-AID, FileAid, RDi** cho debug và tối ưu hiệu năng.

### Work bullets (with variant tags)

**FPT Software — AI Center · 04/2024 – Present**
- `general ba-pm cobol-dev` — Đóng vai trò **cố vấn kỹ thuật** trong dự án AI Agent phân tích hệ thống COBOL legacy cho khách hàng doanh nghiệp Nhật Bản.
- `general cobol-dev` — Hỗ trợ tối ưu câu truy vấn DB2 và review code COBOL bằng **ChatGPT, Gemini và AI agent tùy chỉnh**.
- `general ba-pm` — Hỗ trợ sprint planning, demo cho khách hàng Nhật; phối hợp với Dev/QA/BA/BrSE để theo dõi tiến độ.
- `ba-pm` — Mentor thành viên junior về COBOL, Agile và quy trình phát triển có hỗ trợ AI.
- `cobol-dev` — Tư vấn triển khai công cụ NLP duy trì nhất quán giữa tài liệu và mã nguồn trên hệ thống mainframe quy mô lớn.

**Dai-ichi Life Insurance Việt Nam · 05/2023 – 04/2024**
- `general ba-pm cobol-dev` — Phát triển và bảo trì tính năng nghiệp vụ trên hệ thống lõi **Ingenium** bằng COBOL (môi trường Unix, database Oracle).
- `general cobol-dev` — Sửa lỗi production, nâng cấp logic theo yêu cầu thay đổi, quản lý lịch batch hàng ngày.
- `general ba-pm` — Hiểu sâu nghiệp vụ **bảo hiểm nhân thọ** — vòng đời hợp đồng, xử lý bồi thường, tính phí.
- `ba-pm` — Phối hợp với team nghiệp vụ để làm rõ yêu cầu và triển khai tính năng đúng tiến độ.
- `cobol-dev` — Truy vấn và kiểm tra dữ liệu hợp đồng bằng **Toad for DB**, bảo trì module sinh báo cáo.

**Capgemini Việt Nam · 04/2019 – 04/2023**
- `general ba-pm cobol-dev` — Bảo trì và phát triển ứng dụng **IBM Mainframe z/OS quy mô lớn** cho khách hàng bảo hiểm châu Âu suốt 4 năm.
- `general cobol-dev` — Xử lý sửa lỗi production phức tạp, hỗ trợ batch JCL với SLA nghiêm ngặt.
- `general cobol-dev` — Sử dụng **Abend-AID** phân tích sự cố production; tối ưu DB2 query và hiệu năng COBOL.
- `ba-pm` — Phối hợp với team châu Âu xuyên múi giờ, đảm bảo bàn giao đúng tiến độ.

### Skill groups (per variant)

**General** (5 groups, order 1-5):
1. Mainframe: COBOL · JCL · DB2/SQL · CICS · VSAM · z/OS
2. AI / Tools: AI Agents · LLMs (GPT, Gemini) · Prompt Engineering · Legacy Modernization
3. BA & Process: Agile/Scrum · Sprint Planning · Requirement Clarification · Stakeholder Comm.
4. Soft Skills: Mentoring · Cross-functional teamwork · Client demo (JP, EU)
5. Languages: Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)

**BA / PM** (5 groups, order 1-5):
1. BA & Process: Agile/Scrum · Sprint Planning · Requirement Clarification · Backlog · PSPO I
2. Soft Skills: Mentoring · Cross-functional teamwork · Stakeholder Comm · Client demo (JP, EU)
3. Domain (Insurance): Vòng đời hợp đồng · Claim processing · Batch operations · Life insurance
4. Tools: Toad for DB · Crystal Reports · JIRA · Confluence · Office suite
5. Languages: Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)

**COBOL Dev** (5 groups, order 1-5):
1. Mainframe: COBOL · JCL/Batch · DB2/SQL · CICS · VSAM · z/OS · TSO/ISPF
2. DB & Tools: DB2 · Oracle (Ingenium) · Toad · FileAid · Crystal Reports
3. Debug: Abend-AID · RDi Debugger · Production troubleshooting · Performance tuning
4. AI: AI Agents · LLMs (GPT, Gemini) · Code review automation · Legacy reverse-engineering
5. Languages: Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)

### Projects / Highlights (same in all variants)
- **AI Agent for COBOL Reverse-Engineering** (FPT AI Center) — Cố vấn kỹ thuật cho dự án dùng LLM trích xuất logic nghiệp vụ từ codebase COBOL 20+ năm tuổi của khách hàng Nhật.
- **Ingenium Maintenance** (Dai-ichi Life VN) — Bảo trì tính năng bảo hiểm nhân thọ trên hệ thống lõi chạy Unix/Oracle.
- **EU Insurance Mainframe** (Capgemini) — 4 năm vận hành ứng dụng z/OS với SLA nghiêm ngặt cho khách hàng châu Âu.

### Education (same in all variants)
- **Kỹ sư Cơ điện tử** — Trường ĐH Nông Lâm TP.HCM · 2015 – 2019

### Contact line
- ✉ phatmtp1997@gmail.com · ✆ (+84) [phone] · in linkedin.com/in/phát-mai-tấn · 📍 TP. Hồ Chí Minh

> **Note:** the phone number is left as `[phone]` in this plan because it doesn't appear in any existing CV file. Task 2 instructs the implementer to ask the user for it before writing the contact line.

---

## File structure

```
cv/
├── cv-vi-minimal.html      # CREATE in Phase 1
└── cv-minimal.html         # CREATE in Phase 2 (after VI approval)
```

Each file is self-contained: HTML + inline `<style>` + inline `<script>`. No external CSS/JS.

PDFs produced in Phase 3:
```
Mai-Tan-Phat-CV-Minimal-General-VI.pdf
Mai-Tan-Phat-CV-Minimal-BA-PM-VI.pdf
Mai-Tan-Phat-CV-Minimal-COBOL-Dev-VI.pdf
Mai-Tan-Phat-CV-Minimal-General.pdf
Mai-Tan-Phat-CV-Minimal-BA-PM.pdf
Mai-Tan-Phat-CV-Minimal-COBOL-Dev.pdf
```

---

# Phase 1 — Vietnamese version

## Task 1: Create file skeleton with CSS tokens

**Files:**
- Create: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Create the file with full skeleton**

```html
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mai Tấn Phát – CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #FFFFFF;
  --text: #1A1A1A;
  --text-muted: #666666;
  --accent: #1E3A5F;
  --divider: #E5E5E5;

  --font-serif: 'EB Garamond', 'Source Serif Pro', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --page-max: 720px;
  --section-gap: 36px;
  --print-section-gap: 20px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { font-size: 15px; }

body {
  font-family: var(--font-sans);
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
  padding: 64px 48px;
  -webkit-font-smoothing: antialiased;
}

.page {
  max-width: var(--page-max);
  margin: 0 auto;
}

a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s;
}
a:hover { border-bottom-color: var(--accent); }

/* tasks 2-9 add more styles below */
</style>
</head>
<body data-role="general">
  <div class="page">
    <!-- tasks 2-7 add sections here -->
  </div>
  <script>
    // task 3 adds JS here
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify skeleton loads**

Run: `"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --dump-dom "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-vi-minimal.html)" 2>/dev/null | grep -c "EB+Garamond"`

Expected: `1` (the Google Fonts link is in the page).

- [ ] **Step 3: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add minimal CV skeleton with typography tokens"
```

---

## Task 2: Build header (name, role, contact)

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Ask user for phone number**

The existing CV files don't contain a phone number. Ask the user: "Cần số điện thoại để hiển thị ở contact line — bạn cho tôi số nào (hoặc bỏ qua nếu không muốn hiển thị)?"

Use the answer in Step 3.

- [ ] **Step 2: Append header CSS to the `<style>` block**

Insert before the closing `</style>` tag:

```css
/* Header */
.cv-header { margin-bottom: 28px; }

.cv-name {
  font-family: var(--font-serif);
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 6px;
}

.cv-role {
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--text-muted);
  font-weight: 400;
  margin-bottom: 14px;
}

.cv-contact {
  font-size: 13px;
  color: var(--text-muted);
  display: flex;
  flex-wrap: wrap;
  gap: 0 14px;
}
.cv-contact span.sep { color: var(--divider); }
.cv-contact a { color: var(--text-muted); }
.cv-contact a:hover { color: var(--accent); }
```

- [ ] **Step 3: Insert the header markup inside `.page`**

Replace `<!-- tasks 2-7 add sections here -->` with:

```html
<header class="cv-header">
  <h1 class="cv-name">Mai Tấn Phát</h1>
  <p class="cv-role">Senior COBOL Developer &amp; AI Tinker</p>
  <p class="cv-contact">
    <a href="mailto:phatmtp1997@gmail.com">✉ phatmtp1997@gmail.com</a>
    <span class="sep">·</span>
    <span>✆ {USER_PHONE_OR_OMIT}</span>
    <span class="sep">·</span>
    <a href="https://www.linkedin.com/in/ph%C3%A1t-mai-t%E1%BA%A5n-4b199a2a2/" target="_blank" rel="noopener">in linkedin</a>
    <span class="sep">·</span>
    <span>📍 TP. Hồ Chí Minh</span>
  </p>
</header>
<!-- tasks 3-7 add sections below -->
```

Replace `{USER_PHONE_OR_OMIT}` with the answer from Step 1. If the user said to omit, delete the whole `✆` span AND the preceding `<span class="sep">·</span>`.

- [ ] **Step 4: Visual verify**

Open `cv/cv-vi-minimal.html` in a browser (or have the user open it). Confirm:
- Name "Mai Tấn Phát" displays in serif font, large.
- Role line displays in lighter gray.
- Contact line displays on one row (or wraps gracefully on narrow widths).

- [ ] **Step 5: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add header with name, role tagline, and contact line"
```

---

## Task 3: Build variant tabs + JavaScript switcher

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Append tabs CSS to the `<style>` block**

```css
/* Variant tabs */
.variant-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 36px;
  border-bottom: 1px solid var(--divider);
}
.variant-tab {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 8px 16px 10px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  margin-bottom: -1px;
  letter-spacing: 0.3px;
  transition: color 0.15s, border-color 0.15s;
}
.variant-tab:hover { color: var(--text); }
.variant-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
```

- [ ] **Step 2: Insert the tabs markup after the header**

Add immediately after `</header>`:

```html
<nav class="variant-tabs" aria-label="CV variant">
  <button class="variant-tab" data-role="general">General</button>
  <button class="variant-tab" data-role="ba-pm">BA / PM</button>
  <button class="variant-tab" data-role="cobol-dev">COBOL Dev</button>
</nav>
```

- [ ] **Step 3: Add the variant-switching JavaScript**

Replace the `// task 3 adds JS here` comment inside `<script>` with:

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
    tab.addEventListener('click', e => {
      e.preventDefault();
      setRole(tab.dataset.role);
    });
  });
});
```

- [ ] **Step 4: Verify the JS works**

Run Chrome headless and confirm `data-role` attribute is set on `<body>` for each URL:

```bash
for ROLE in general ba-pm cobol-dev; do
  echo -n "?role=$ROLE → body[data-role]="
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --virtual-time-budget=2000 --dump-dom \
    "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-vi-minimal.html)?role=$ROLE" 2>/dev/null \
    | grep -oE 'data-role="[^"]*"' | head -1
done
```

Expected output:
```
?role=general → body[data-role="general"]
?role=ba-pm → body[data-role="ba-pm"]
?role=cobol-dev → body[data-role="cobol-dev"]
```

Also have the user open the file in a real browser and click each tab — verify the URL updates and the active tab styling moves.

- [ ] **Step 5: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add variant tabs UI and switcher script"
```

---

## Task 4: Add Summary section with 3 variants

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Append section CSS and variant-filter rule to the `<style>` block**

```css
/* Section primitives */
.section { margin-bottom: var(--section-gap); }
.section-title {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text);
  padding-bottom: 6px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--divider);
}

/* Variant filter — must come AFTER skill-group order rules in later tasks */
body[data-role="general"]   [data-variant]:not([data-variant~="general"])  { display: none; }
body[data-role="ba-pm"]     [data-variant]:not([data-variant~="ba-pm"])    { display: none; }
body[data-role="cobol-dev"] [data-variant]:not([data-variant~="cobol-dev"]){ display: none; }

/* Summary */
.summary p {
  font-size: 15px;
  line-height: 1.65;
}
.summary strong { font-weight: 600; color: var(--text); }
```

- [ ] **Step 2: Insert the Summary section after the tabs**

Add immediately after `</nav>`:

```html
<section class="section summary">
  <h2 class="section-title">Summary</h2>
  <p data-variant="general">
    Lập trình viên COBOL Senior với hơn <strong>7 năm kinh nghiệm</strong> trên IBM Mainframe (z/OS, COBOL, JCL, DB2). Đã làm việc với khách hàng bảo hiểm tại <strong>châu Âu và Nhật Bản</strong> suốt nhiều dự án production-grade. Hiện đóng vai trò <strong>cố vấn kỹ thuật</strong> cho dự án AI Agent về hiện đại hóa hệ thống legacy — kết hợp kiến thức mainframe sâu với công cụ AI/LLM hiện đại để hỗ trợ trích xuất logic nghiệp vụ và tạo tài liệu kỹ thuật.
  </p>
  <p data-variant="ba-pm">
    Developer với 7+ năm kinh nghiệm phối hợp cross-functional team trên các dự án mainframe quy mô lớn cho <strong>khách hàng quốc tế</strong> (EU, Nhật). Quen với quy trình <strong>Agile / Scrum</strong> — đã trực tiếp tham gia sprint planning, demo khách hàng, requirement clarification và mentoring junior. Hiểu sâu nghiệp vụ <strong>bảo hiểm nhân thọ</strong>: vòng đời hợp đồng, claim processing, batch operations và SLA production.
  </p>
  <p data-variant="cobol-dev">
    COBOL Developer 7+ năm trên IBM z/OS, mạnh về <strong>JCL/batch, DB2/SQL, CICS, VSAM</strong>. Kinh nghiệm production-grade với SLA nghiêm ngặt cho khách hàng bảo hiểm châu Âu (Capgemini, 4 năm) và hệ thống lõi <strong>Ingenium</strong> tại Dai-ichi Life Việt Nam (chạy trên Unix, database Oracle). Thành thạo <strong>Abend-AID, FileAid, RDi</strong> cho debug và tối ưu hiệu năng.
  </p>
</section>
<!-- tasks 5-7 add sections below -->
```

- [ ] **Step 3: Verify only the active variant's summary shows**

```bash
for ROLE in general ba-pm cobol-dev; do
  echo "=== ?role=$ROLE ==="
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --virtual-time-budget=2000 --dump-dom \
    "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-vi-minimal.html)?role=$ROLE" 2>/dev/null \
    | grep -oE 'data-variant="[^"]*"[^<]*Lập trình viên|data-variant="[^"]*"[^<]*Developer với|data-variant="[^"]*"[^<]*COBOL Developer' | head -3
done
```

Expected: each role prints the same 3 paragraph markers (since `display:none` doesn't remove from DOM). Better verification: open the file in a real browser, click each tab, confirm only one paragraph is visible at a time.

- [ ] **Step 4: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add Summary section with 3 variant paragraphs"
```

---

## Task 5: Add Work Experience with variant-filtered bullets

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Append Work CSS to the `<style>` block**

```css
/* Work Experience */
.work-entry { margin-bottom: 22px; }
.work-entry:last-child { margin-bottom: 0; }

.work-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 2px;
}
.work-company {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
}
.work-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}
.work-title {
  font-size: 14px;
  font-style: italic;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.work-bullets {
  list-style: none;
  padding: 0;
}
.work-bullets li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.55;
}
.work-bullets li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--text-muted);
}
.work-bullets strong { font-weight: 600; }
```

- [ ] **Step 2: Insert the Work Experience section**

Replace `<!-- tasks 5-7 add sections below -->` with:

```html
<section class="section work">
  <h2 class="section-title">Work Experience</h2>

  <div class="work-entry">
    <div class="work-head">
      <h3 class="work-company">FPT Software — AI Center</h3>
      <span class="work-period">04/2024 – Hiện tại</span>
    </div>
    <p class="work-title">Senior COBOL Developer &amp; AI Tinker</p>
    <ul class="work-bullets">
      <li data-variant="general ba-pm cobol-dev">Đóng vai trò <strong>cố vấn kỹ thuật</strong> trong dự án AI Agent phân tích hệ thống COBOL legacy cho khách hàng doanh nghiệp Nhật Bản.</li>
      <li data-variant="general cobol-dev">Hỗ trợ tối ưu câu truy vấn DB2 và review code COBOL bằng <strong>ChatGPT, Gemini và AI agent tùy chỉnh</strong>.</li>
      <li data-variant="general ba-pm">Hỗ trợ sprint planning, demo cho khách hàng Nhật; phối hợp với Dev/QA/BA/BrSE để theo dõi tiến độ.</li>
      <li data-variant="ba-pm">Mentor thành viên junior về COBOL, Agile và quy trình phát triển có hỗ trợ AI.</li>
      <li data-variant="cobol-dev">Tư vấn triển khai công cụ NLP duy trì nhất quán giữa tài liệu và mã nguồn trên hệ thống mainframe quy mô lớn.</li>
    </ul>
  </div>

  <div class="work-entry">
    <div class="work-head">
      <h3 class="work-company">Dai-ichi Life Insurance Việt Nam</h3>
      <span class="work-period">05/2023 – 04/2024</span>
    </div>
    <p class="work-title">COBOL Developer — Ingenium Core System</p>
    <ul class="work-bullets">
      <li data-variant="general ba-pm cobol-dev">Phát triển và bảo trì tính năng nghiệp vụ trên hệ thống lõi <strong>Ingenium</strong> bằng COBOL (môi trường Unix, database Oracle).</li>
      <li data-variant="general cobol-dev">Sửa lỗi production, nâng cấp logic theo yêu cầu thay đổi, quản lý lịch batch hàng ngày.</li>
      <li data-variant="general ba-pm">Hiểu sâu nghiệp vụ <strong>bảo hiểm nhân thọ</strong> — vòng đời hợp đồng, xử lý bồi thường, tính phí.</li>
      <li data-variant="ba-pm">Phối hợp với team nghiệp vụ để làm rõ yêu cầu và triển khai tính năng đúng tiến độ.</li>
      <li data-variant="cobol-dev">Truy vấn và kiểm tra dữ liệu hợp đồng bằng <strong>Toad for DB</strong>, bảo trì module sinh báo cáo.</li>
    </ul>
  </div>

  <div class="work-entry">
    <div class="work-head">
      <h3 class="work-company">Capgemini Việt Nam</h3>
      <span class="work-period">04/2019 – 04/2023</span>
    </div>
    <p class="work-title">COBOL Developer — EU Insurance Mainframe</p>
    <ul class="work-bullets">
      <li data-variant="general ba-pm cobol-dev">Bảo trì và phát triển ứng dụng <strong>IBM Mainframe z/OS quy mô lớn</strong> cho khách hàng bảo hiểm châu Âu suốt 4 năm.</li>
      <li data-variant="general cobol-dev">Xử lý sửa lỗi production phức tạp, hỗ trợ batch JCL với SLA nghiêm ngặt.</li>
      <li data-variant="general cobol-dev">Sử dụng <strong>Abend-AID</strong> phân tích sự cố production; tối ưu DB2 query và hiệu năng COBOL.</li>
      <li data-variant="ba-pm">Phối hợp với team châu Âu xuyên múi giờ, đảm bảo bàn giao đúng tiến độ.</li>
    </ul>
  </div>
</section>
<!-- tasks 6-7 add sections below -->
```

- [ ] **Step 3: Verify each variant shows the right bullet count**

Open the file in a browser. For each tab, count visible bullets per job. Expected per variant:

| Job | general | ba-pm | cobol-dev |
|---|---|---|---|
| FPT | 3 | 3 | 3 |
| Dai-ichi | 3 | 3 | 3 |
| Capgemini | 3 | 2 | 3 |

- [ ] **Step 4: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add Work Experience with variant-filtered bullets"
```

---

## Task 6: Add Skills section with variant filter + order

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Append Skills CSS to the `<style>` block**

```css
/* Skills */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skill-group h4 {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 2px;
}
.skill-group p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.55;
}

/* Per-variant order */
body[data-role="general"]   .skill-group { order: var(--ord-general,   99); }
body[data-role="ba-pm"]     .skill-group { order: var(--ord-ba-pm,     99); }
body[data-role="cobol-dev"] .skill-group { order: var(--ord-cobol-dev, 99); }
```

- [ ] **Step 2: Insert the Skills section**

Replace `<!-- tasks 6-7 add sections below -->` with:

```html
<section class="section skills">
  <h2 class="section-title">Skills</h2>
  <div class="skills-list">

    <div class="skill-group" data-variant="general cobol-dev"
         style="--ord-general:1; --ord-cobol-dev:1">
      <h4>Mainframe</h4>
      <p>COBOL · JCL/Batch · DB2/SQL · CICS · VSAM · z/OS · TSO/ISPF</p>
    </div>

    <div class="skill-group" data-variant="general cobol-dev"
         style="--ord-general:2; --ord-cobol-dev:4">
      <h4>AI / Tools</h4>
      <p>AI Agents · LLMs (GPT, Gemini) · Prompt Engineering · Legacy Modernization · Code review automation</p>
    </div>

    <div class="skill-group" data-variant="general ba-pm"
         style="--ord-general:3; --ord-ba-pm:1">
      <h4>BA &amp; Process</h4>
      <p>Agile / Scrum · Sprint Planning · Requirement Clarification · Backlog Management · PSPO I</p>
    </div>

    <div class="skill-group" data-variant="general ba-pm"
         style="--ord-general:4; --ord-ba-pm:2">
      <h4>Soft Skills</h4>
      <p>Mentoring · Cross-functional teamwork · Stakeholder Communication · Client demo (JP, EU)</p>
    </div>

    <div class="skill-group" data-variant="ba-pm"
         style="--ord-ba-pm:3">
      <h4>Domain — Insurance</h4>
      <p>Vòng đời hợp đồng · Claim processing · Batch operations · Life insurance</p>
    </div>

    <div class="skill-group" data-variant="ba-pm"
         style="--ord-ba-pm:4">
      <h4>Tools</h4>
      <p>Toad for DB · Crystal Reports · JIRA · Confluence · Office suite</p>
    </div>

    <div class="skill-group" data-variant="cobol-dev"
         style="--ord-cobol-dev:2">
      <h4>DB &amp; Tools</h4>
      <p>DB2 · Oracle (Ingenium) · Toad for DB · FileAid · Crystal Reports</p>
    </div>

    <div class="skill-group" data-variant="cobol-dev"
         style="--ord-cobol-dev:3">
      <h4>Debug</h4>
      <p>Abend-AID · RDi Debugger · Production troubleshooting · Performance tuning</p>
    </div>

    <div class="skill-group" data-variant="general ba-pm cobol-dev"
         style="--ord-general:5; --ord-ba-pm:5; --ord-cobol-dev:5">
      <h4>Languages</h4>
      <p>Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)</p>
    </div>

  </div>
</section>
<!-- task 7 adds sections below -->
```

- [ ] **Step 3: Verify each variant shows 5 groups in correct order**

Open the file in a browser. For each tab, confirm visible skill groups (in order):

- **General:** Mainframe → AI / Tools → BA & Process → Soft Skills → Languages
- **BA / PM:** BA & Process → Soft Skills → Domain — Insurance → Tools → Languages
- **COBOL Dev:** Mainframe → DB & Tools → Debug → AI / Tools → Languages

- [ ] **Step 4: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add Skills section with variant filter and per-variant ordering"
```

---

## Task 7: Add Projects, Education, Languages sections

**Files:**
- Modify: `cv/cv-vi-minimal.html`

These three sections are identical across all variants (no `data-variant` filtering needed).

- [ ] **Step 1: Append CSS to the `<style>` block**

```css
/* Projects */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.project-item {
  font-size: 13px;
  line-height: 1.55;
}
.project-item strong { font-weight: 600; }
.project-item .project-meta {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-left: 4px;
}

/* Education */
.edu-item { font-size: 13px; }
.edu-item .edu-school { color: var(--text-muted); }
.edu-item .edu-year {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
}

/* Languages (single line) */
.languages-line {
  font-size: 13px;
  color: var(--text);
}
```

- [ ] **Step 2: Insert the three sections**

Replace `<!-- task 7 adds sections below -->` with:

```html
<section class="section projects">
  <h2 class="section-title">Projects &amp; Highlights</h2>
  <div class="projects-list">
    <p class="project-item">
      <strong>AI Agent for COBOL Reverse-Engineering</strong>
      <span class="project-meta">FPT AI Center · 2024–present</span><br>
      Cố vấn kỹ thuật cho dự án dùng LLM trích xuất logic nghiệp vụ từ codebase COBOL 20+ năm tuổi của khách hàng Nhật.
    </p>
    <p class="project-item">
      <strong>Ingenium Maintenance</strong>
      <span class="project-meta">Dai-ichi Life VN · 2023–2024</span><br>
      Bảo trì tính năng bảo hiểm nhân thọ trên hệ thống lõi chạy Unix/Oracle.
    </p>
    <p class="project-item">
      <strong>EU Insurance Mainframe</strong>
      <span class="project-meta">Capgemini · 2019–2023</span><br>
      4 năm vận hành ứng dụng z/OS với SLA nghiêm ngặt cho khách hàng châu Âu.
    </p>
  </div>
</section>

<section class="section education">
  <h2 class="section-title">Education</h2>
  <p class="edu-item">
    <strong>Kỹ sư Cơ điện tử</strong> ·
    <span class="edu-school">Trường ĐH Nông Lâm TP.HCM</span> ·
    <span class="edu-year">2015 – 2019</span>
  </p>
</section>

<section class="section languages">
  <h2 class="section-title">Languages</h2>
  <p class="languages-line">
    Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)
  </p>
</section>
```

- [ ] **Step 3: Verify all three sections render**

Open the file in a browser. Confirm:
- Projects section shows 3 entries with bold titles + mono meta + description on next line.
- Education shows 1 line with 3 parts separated by `·`.
- Languages shows 1 line.
- All three sections appear in all 3 variants identically.

- [ ] **Step 4: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add Projects, Education, and Languages sections"
```

---

## Task 8: Add print stylesheet

**Files:**
- Modify: `cv/cv-vi-minimal.html`

- [ ] **Step 1: Append print CSS to the `<style>` block (place at the very end before `</style>`)**

```css
/* Print */
@media print {
  @page { size: A4; margin: 0; }

  html { font-size: 13.5px; }

  body {
    padding: 0;
    background: white;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    max-width: none;
    padding: 16mm 18mm;
  }

  .variant-tabs { display: none; }

  a {
    color: var(--text);
    border-bottom: none;
  }

  .section { margin-bottom: var(--print-section-gap); }
  .section-title { margin-bottom: 12px; }

  .cv-header { margin-bottom: 20px; }
  .cv-name { font-size: 32px; }
  .cv-role { font-size: 14px; margin-bottom: 10px; }
  .cv-contact { font-size: 11px; }

  .summary p { font-size: 13px; line-height: 1.5; }
  .work-entry { margin-bottom: 16px; }
  .work-company { font-size: 15px; }
  .work-period { font-size: 11px; }
  .work-title { font-size: 12px; margin-bottom: 6px; }
  .work-bullets li { font-size: 12px; line-height: 1.45; margin-bottom: 2px; }

  .skill-group h4 { font-size: 12px; }
  .skill-group p { font-size: 12px; line-height: 1.45; }
  .skills-list { gap: 6px; }

  .project-item { font-size: 12px; line-height: 1.45; }
  .project-item .project-meta { font-size: 10px; }
  .projects-list { gap: 6px; }

  .edu-item, .languages-line { font-size: 12px; }
}
```

- [ ] **Step 2: Smoke-test print rendering for one variant**

```bash
"/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$(wslpath -w /tmp/cv-test-general.pdf)" \
  "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-vi-minimal.html)?role=general"
```

Expected: `/tmp/cv-test-general.pdf` is created. Open it (in Windows or via WSL `explorer.exe`) and confirm the file rendered (don't worry about page count yet — that's Task 9).

- [ ] **Step 3: Commit**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Add print stylesheet for A4 PDF export"
```

---

## Task 9: Verify 1-page A4 fit + final visual review

**Files:**
- Verify only.

- [ ] **Step 1: Generate test PDFs for all 3 variants**

```bash
mkdir -p /tmp/cv-test
for ROLE in general ba-pm cobol-dev; do
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$(wslpath -w /tmp/cv-test/${ROLE}.pdf)" \
    "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-vi-minimal.html)?role=${ROLE}"
done
ls -la /tmp/cv-test/
```

Expected: 3 PDF files created.

- [ ] **Step 2: Verify each PDF is exactly 1 page**

```bash
for ROLE in general ba-pm cobol-dev; do
  PAGES=$(pdfinfo /tmp/cv-test/${ROLE}.pdf 2>/dev/null | grep -oE 'Pages:\s+[0-9]+' | grep -oE '[0-9]+')
  echo "${ROLE}: ${PAGES} page(s)"
done
```

(If `pdfinfo` is not installed: `sudo apt install poppler-utils`.)

Expected: each variant prints to exactly 1 page.

**If any variant prints > 1 page:**
- Identify which variant overflowed.
- Read the rendered PDF (or open the variant in Chrome and use print preview) to see what's on page 2.
- Adjust the print stylesheet in `cv-vi-minimal.html` (Task 8 step 1):
  - Tighten `--print-section-gap` further (16-18px).
  - Reduce `html { font-size }` under print to 13px.
  - Reduce `.work-bullets li { margin-bottom }` to 1px.
- Re-run Steps 1 and 2 of this task. Iterate until all 3 variants are 1 page.
- If still overflowing after font/spacing reduction, ask the user whether to trim a bullet from the variant content (do not unilaterally cut content).

- [ ] **Step 3: User visual review checkpoint**

Have the user open `cv/cv-vi-minimal.html` in a browser and:
- Switch through all 3 tabs.
- Confirm content is correct, tone matches `CLAUDE.md` (modest but capable).
- Confirm no factual errors (especially Ingenium = Unix/Oracle, FPT role = advisor).
- Approve the Vietnamese version before proceeding to Phase 2.

If user requests content changes: apply them, re-run Step 1 (regenerate PDFs to check 1-page fit still holds), and commit each change.

- [ ] **Step 4: Commit any adjustments from Steps 2-3**

```bash
git add cv/cv-vi-minimal.html
git commit -m "Tune print spacing to fit all variants on 1 A4 page"
```

(Skip this step if no changes were needed.)

---

# Phase 2 — English version

**Gate:** Do not start Phase 2 until the user explicitly approves the Vietnamese version in Task 9 Step 3.

## Task 10: Create English mirror

**Files:**
- Create: `cv/cv-minimal.html`

- [ ] **Step 1: Copy the Vietnamese file as a starting point**

```bash
cp /home/phatmt/code/profile/cv/cv-vi-minimal.html /home/phatmt/code/profile/cv/cv-minimal.html
```

- [ ] **Step 2: Translate the file to English**

Open `cv/cv-minimal.html` and replace:
- `<html lang="vi">` → `<html lang="en">`
- `<title>Mai Tấn Phát – CV</title>` → `<title>Mai Tan Phat – CV</title>`
- All Vietnamese content text (summaries, bullets, project descriptions, education) to English.

**Translation guide:**

| Vietnamese | English |
|---|---|
| `Mai Tấn Phát` | `Mai Tan Phat` |
| `Hiện tại` | `Present` |
| `Tiếng Anh (Fluent) · Tiếng Pháp (Basic) · Tiếng Việt (Native)` | `English (Fluent) · French (Basic) · Vietnamese (Native)` |
| `Kỹ sư Cơ điện tử` | `B.E. in Mechatronics Engineering` |
| `Trường ĐH Nông Lâm TP.HCM` | `Nong Lam University, Ho Chi Minh City` |
| `TP. Hồ Chí Minh` | `Ho Chi Minh City, Vietnam` |
| `Vòng đời hợp đồng` | `Policy lifecycle` |
| `bảo hiểm nhân thọ` | `life insurance` |
| `cố vấn kỹ thuật` | `technical advisor` |
| `bảo trì` | `maintained` |

**Section titles already in English** — no change needed.

**Summary translations:**

```html
<p data-variant="general">
  Senior COBOL Developer with <strong>7+ years</strong> of experience on IBM Mainframe (z/OS, COBOL, JCL, DB2). Worked with insurance clients in <strong>Europe and Japan</strong> across multiple production-grade engagements. Currently serving as <strong>technical advisor</strong> on an AI Agent project for legacy modernization — combining deep mainframe knowledge with modern AI/LLM tooling to support business logic extraction and technical documentation.
</p>
<p data-variant="ba-pm">
  Developer with 7+ years coordinating cross-functional teams on large-scale mainframe projects for <strong>international clients</strong> (EU, Japan). Familiar with <strong>Agile / Scrum</strong> — directly involved in sprint planning, client demos, requirement clarification, and mentoring juniors. Deep understanding of <strong>life insurance</strong> domain: policy lifecycle, claim processing, batch operations, and production SLAs.
</p>
<p data-variant="cobol-dev">
  COBOL Developer with 7+ years on IBM z/OS, strong in <strong>JCL/batch, DB2/SQL, CICS, VSAM</strong>. Production-grade experience under strict SLAs for European insurance clients (Capgemini, 4 years) and the <strong>Ingenium</strong> core system at Dai-ichi Life Vietnam (running on Unix with an Oracle database). Proficient with <strong>Abend-AID, FileAid, RDi</strong> for debugging and performance tuning.
</p>
```

**Work bullets — full English translation (paste these verbatim, replacing the Vietnamese `<ul class="work-bullets">` blocks):**

FPT Software:
```html
<ul class="work-bullets">
  <li data-variant="general ba-pm cobol-dev">Served as <strong>technical advisor</strong> on an AI Agent project analyzing legacy COBOL systems for Japanese enterprise clients.</li>
  <li data-variant="general cobol-dev">Supported DB2 query tuning and COBOL code review using <strong>ChatGPT, Gemini, and custom AI agents</strong>.</li>
  <li data-variant="general ba-pm">Supported sprint planning and client demos for Japanese stakeholders; coordinated with Dev/QA/BA/BrSE on delivery tracking.</li>
  <li data-variant="ba-pm">Mentored junior engineers on COBOL, Agile process, and AI-assisted development workflows.</li>
  <li data-variant="cobol-dev">Advised on deploying NLP tools to keep documentation and source code in sync across large-scale mainframe systems.</li>
</ul>
```

Dai-ichi Life Insurance Vietnam:
```html
<ul class="work-bullets">
  <li data-variant="general ba-pm cobol-dev">Developed and maintained business features on the <strong>Ingenium</strong> core insurance system in COBOL (Unix environment, Oracle database).</li>
  <li data-variant="general cobol-dev">Fixed production issues, upgraded logic per change requests, managed daily batch schedules.</li>
  <li data-variant="general ba-pm">Built deep understanding of <strong>life insurance</strong> domain — policy lifecycle, claim processing, premium calculations.</li>
  <li data-variant="ba-pm">Coordinated with business teams to clarify requirements and deliver features on schedule.</li>
  <li data-variant="cobol-dev">Queried and validated policy data with <strong>Toad for DB</strong>; maintained the report-generation module.</li>
</ul>
```

Capgemini Vietnam:
```html
<ul class="work-bullets">
  <li data-variant="general ba-pm cobol-dev">Maintained and developed <strong>large-scale IBM Mainframe z/OS applications</strong> for European insurance clients for 4 years.</li>
  <li data-variant="general cobol-dev">Handled complex production fixes and JCL batch support under strict SLAs.</li>
  <li data-variant="general cobol-dev">Used <strong>Abend-AID</strong> for production incident root-cause analysis; tuned DB2 queries and COBOL program performance.</li>
  <li data-variant="ba-pm">Collaborated with European teams across time zones to ensure on-time delivery.</li>
</ul>
```

Also translate the job title lines (`.work-title`) on each entry:
- FPT: `Senior COBOL Developer & AI Tinker` (already English in VI version — no change)
- Dai-ichi: `COBOL Developer — Ingenium Core System` (already English in VI version — no change)
- Capgemini: `COBOL Developer — EU Insurance Mainframe` (already English in VI version — no change)

And translate the `.work-period` line for FPT: `04/2024 – Hiện tại` → `04/2024 – Present`.

**Projects translations:**
```html
<p class="project-item">
  <strong>AI Agent for COBOL Reverse-Engineering</strong>
  <span class="project-meta">FPT AI Center · 2024–present</span><br>
  Technical advisor for an LLM-based project extracting business logic from a 20+ year old COBOL codebase for a Japanese client.
</p>
<p class="project-item">
  <strong>Ingenium Maintenance</strong>
  <span class="project-meta">Dai-ichi Life VN · 2023–2024</span><br>
  Maintained life-insurance features on the core system running on Unix with Oracle.
</p>
<p class="project-item">
  <strong>EU Insurance Mainframe</strong>
  <span class="project-meta">Capgemini · 2019–2023</span><br>
  4 years operating z/OS applications under strict SLAs for European clients.
</p>
```

- [ ] **Step 3: Verify English file renders correctly in all 3 variants**

```bash
for ROLE in general ba-pm cobol-dev; do
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --virtual-time-budget=2000 --dump-dom \
    "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-minimal.html)?role=${ROLE}" 2>/dev/null \
    | grep -c "Mai Tan Phat"
done
```

Expected: each call returns `1` (name renders without Vietnamese diacritics).

Have the user open the file in a browser, switch through tabs, confirm English content reads naturally.

- [ ] **Step 4: Verify 1-page A4 fit for all 3 English variants**

```bash
for ROLE in general ba-pm cobol-dev; do
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$(wslpath -w /tmp/cv-test/${ROLE}-en.pdf)" \
    "file://$(wslpath -w /home/phatmt/code/profile/cv/cv-minimal.html)?role=${ROLE}"
  PAGES=$(pdfinfo /tmp/cv-test/${ROLE}-en.pdf 2>/dev/null | grep -oE 'Pages:\s+[0-9]+' | grep -oE '[0-9]+')
  echo "${ROLE} EN: ${PAGES} page(s)"
done
```

Expected: each variant prints to exactly 1 page. If any overflow, apply the same iteration loop as Task 9 Step 2.

- [ ] **Step 5: Commit**

```bash
git add cv/cv-minimal.html
git commit -m "Add English version of minimal multi-variant CV"
```

---

# Phase 3 — Final PDF export

## Task 11: Generate 6 final PDFs

**Files:**
- Output: 6 PDF files in project root.

- [ ] **Step 1: Generate 3 Vietnamese PDFs**

```bash
cd /home/phatmt/code/profile
for ROLE in general ba-pm cobol-dev; do
  case $ROLE in
    general) LABEL="General" ;;
    ba-pm) LABEL="BA-PM" ;;
    cobol-dev) LABEL="COBOL-Dev" ;;
  esac
  OUTPUT="Mai-Tan-Phat-CV-Minimal-${LABEL}-VI.pdf"
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$(wslpath -w "$(pwd)/${OUTPUT}")" \
    "file://$(wslpath -w "$(pwd)/cv/cv-vi-minimal.html")?role=${ROLE}"
done
ls -la Mai-Tan-Phat-CV-Minimal-*-VI.pdf
```

Expected: 3 VI PDF files in project root.

- [ ] **Step 2: Generate 3 English PDFs**

```bash
cd /home/phatmt/code/profile
for ROLE in general ba-pm cobol-dev; do
  case $ROLE in
    general) LABEL="General" ;;
    ba-pm) LABEL="BA-PM" ;;
    cobol-dev) LABEL="COBOL-Dev" ;;
  esac
  OUTPUT="Mai-Tan-Phat-CV-Minimal-${LABEL}.pdf"
  "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$(wslpath -w "$(pwd)/${OUTPUT}")" \
    "file://$(wslpath -w "$(pwd)/cv/cv-minimal.html")?role=${ROLE}"
done
ls -la Mai-Tan-Phat-CV-Minimal-*.pdf | grep -v VI
```

Expected: 3 EN PDF files in project root.

- [ ] **Step 3: Verify all 6 PDFs are 1 page each**

```bash
cd /home/phatmt/code/profile
for PDF in Mai-Tan-Phat-CV-Minimal-*.pdf; do
  PAGES=$(pdfinfo "$PDF" 2>/dev/null | grep -oE 'Pages:\s+[0-9]+' | grep -oE '[0-9]+')
  echo "${PDF}: ${PAGES} page(s)"
done
```

Expected: all 6 files print `: 1 page(s)`.

- [ ] **Step 4: User final review**

Ask the user to open each PDF and confirm:
- Visual matches the spec (serif headings, sans body, navy accent).
- Content is accurate (especially the variant-specific bullets).
- No layout glitches (cut-off text, broken bullet lists, etc.).

If user requests adjustments, return to the relevant task, fix, re-export the affected PDFs, and commit.

- [ ] **Step 5: Commit the PDFs (or update `.gitignore`)**

Check `.gitignore`:

```bash
cat /home/phatmt/code/profile/.gitignore
```

If the existing CV PDFs (e.g. `Mai-Tan-Phat-COBOL-Developer.pdf`) are tracked in git, commit the new PDFs:

```bash
cd /home/phatmt/code/profile
git add Mai-Tan-Phat-CV-Minimal-*.pdf
git commit -m "Add 6 final PDFs (3 VI + 3 EN) for minimal CV variants"
```

If PDFs are gitignored, skip the commit. Confirm with the user which they prefer.

---

## Done

All tasks complete. The user has:
- `cv/cv-vi-minimal.html` and `cv/cv-minimal.html` — interactive 3-variant CVs.
- 6 PDF exports for sharing with recruiters across different audiences.
- `index.html` and all existing `cv/*.html` files untouched.

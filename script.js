/* =====================================================================
   Mai Tan Phat - Portfolio behaviour (vanilla, no dependencies)
   - Lens switch (BA / COBOL / General), persisted in localStorage
   - CV hub: role + language -> correct PDF
   - Sticky top bar shadow on scroll
   - Scroll-reveal via IntersectionObserver (respects reduced motion)
   ===================================================================== */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var LENS_KEY = 'mtp-lens';
  var LENSES = ['ba', 'cobol'];

  /* ---------------- CV file map ---------------- */
  var CV_FILES = {
    ba:      { en: 'Mai-Tan-Phat-CV-BA-AI.pdf',     vi: 'Mai-Tan-Phat-CV-BA-AI-VI.pdf' },
    cobol:   { en: 'Mai-Tan-Phat-CV-COBOL-Dev.pdf', vi: 'Mai-Tan-Phat-CV-COBOL-Dev-VI.pdf' }
  };
  var CV_LABELS = { ba: 'BA — AI / LLM', cobol: 'COBOL Developer' };

  /* ---------------- state ---------------- */
  function readLens() {
    var l;
    try { l = localStorage.getItem(LENS_KEY); } catch (e) {}
    return LENSES.indexOf(l) === -1 ? 'ba' : l;
  }
  function saveLens(l) { try { localStorage.setItem(LENS_KEY, l); } catch (e) {} }

  var currentLens = readLens();
  var cvRole = currentLens;     // CV selection follows the lens
  var cvLang = 'en';

  /* ---------------- lens switch ---------------- */
  var lensButtons = Array.prototype.slice.call(document.querySelectorAll('[data-lens-btn]'));

  function applyLens(lens, syncCv) {
    currentLens = lens;
    LENSES.forEach(function (l) { docEl.classList.toggle('lens-' + l, l === lens); });
    lensButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lens-btn') === lens));
    });
    saveLens(lens);
    if (syncCv) selectCvRole(lens);
  }

  lensButtons.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      applyLens(btn.getAttribute('data-lens-btn'), true);
    });
    // arrow-key navigation across the segmented control
    btn.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var dir = e.key === 'ArrowRight' ? 1 : -1;
      var next = lensButtons[(i + dir + lensButtons.length) % lensButtons.length];
      next.focus();
      applyLens(next.getAttribute('data-lens-btn'), true);
    });
  });

  /* ---------------- CV hub ---------------- */
  var cvRoleButtons = Array.prototype.slice.call(document.querySelectorAll('[data-cv-role]'));
  var cvLangButtons = Array.prototype.slice.call(document.querySelectorAll('[data-cv-lang]'));
  var cvRoleLabel = document.getElementById('cvPanelRole');
  var cvDownload = document.getElementById('cvDownload');
  var cvFile = document.getElementById('cvFile');

  function refreshCv() {
    var file = CV_FILES[cvRole][cvLang];
    if (cvRoleLabel) cvRoleLabel.textContent = CV_LABELS[cvRole];
    if (cvDownload) {
      cvDownload.setAttribute('href', file);
      cvDownload.setAttribute('download', file);
    }
    if (cvFile) cvFile.textContent = file;
    cvRoleButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-cv-role') === cvRole));
    });
    cvLangButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-cv-lang') === cvLang));
    });
  }
  function selectCvRole(role) { cvRole = CV_FILES[role] ? role : 'ba'; refreshCv(); }

  cvRoleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { selectCvRole(btn.getAttribute('data-cv-role')); });
  });
  cvLangButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { cvLang = btn.getAttribute('data-cv-lang'); refreshCv(); });
  });

  /* ---------------- sticky top bar ---------------- */
  var topbar = document.getElementById('topbar');
  if (topbar && 'IntersectionObserver' in window) {
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      topbar.classList.toggle('is-stuck', !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* ---------------- scroll reveal ---------------- */
  var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(function (el) { revObserver.observe(el); });
  }

  /* ---------------- init ---------------- */
  applyLens(currentLens, false);   // sync buttons to the lens restored in <head>
  selectCvRole(currentLens);       // CV starts matching the lens
})();

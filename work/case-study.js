/**
 * ─── CASE STUDY ENGINE ──────────────────────────────────────
 * Dynamically renders case study pages from projects-data.js
 * Handles scroll reveal, page transitions, and animations
 * ──────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── GET PROJECT ID FROM <body data-project="..."> ──────── */
  const projectId = document.body.getAttribute('data-project');
  if (!projectId || !PROJECTS_DATA[projectId]) {
    console.error('Project not found:', projectId);
    return;
  }
  const P = PROJECTS_DATA[projectId];
  const C = P.categoryColor; // shorthand for color class

  /* ── PAGE TRANSITION ────────────────────────────────────── */
  const overlay = document.getElementById('page-transition');
  if (overlay) {
    const numEl = overlay.querySelector('.transition-num');
    const labelEl = overlay.querySelector('.transition-label');
    if (numEl) numEl.textContent = P.num;
    if (labelEl) labelEl.textContent = P.category;
    setTimeout(() => {
      overlay.classList.add('fade-out');
      setTimeout(() => { overlay.style.display = 'none'; }, 700);
    }, 600);
  }

  /* ── RENDER HERO ────────────────────────────────────────── */
  const heroSection = document.getElementById('cs-hero');
  if (heroSection) {
    // Background blobs
    const heroBg = heroSection.querySelector('.cs-hero-bg');
    if (heroBg) heroBg.classList.add(C);

    // Meta
    const numBadge = document.getElementById('cs-hero-num');
    if (numBadge) { numBadge.textContent = P.num; numBadge.classList.add(C); }

    const catLabel = document.getElementById('cs-hero-cat');
    if (catLabel) { catLabel.textContent = '// ' + P.category; catLabel.classList.add(C); }

    // Title & Tagline
    const titleEl = document.getElementById('cs-hero-title');
    if (titleEl) titleEl.textContent = P.title;

    const taglineEl = document.getElementById('cs-hero-tagline');
    if (taglineEl) taglineEl.textContent = P.tagline;

    // Tech Stack badges
    const stackContainer = document.getElementById('cs-tech-stack');
    if (stackContainer) {
      stackContainer.innerHTML = P.techStack.map(t =>
        `<span class="cs-tech-badge ${C}">${t}</span>`
      ).join('');
    }
  }

  /* ── RENDER COVER ───────────────────────────────────────── */
  const coverInner = document.getElementById('cs-cover-inner');
  if (coverInner) {
    coverInner.classList.add(C);
    const emojiEl = coverInner.querySelector('.cs-cover-emoji');
    if (emojiEl) emojiEl.textContent = P.coverEmoji;
  }

  /* ── RENDER PROBLEM ─────────────────────────────────────── */
  const problemLabel = document.getElementById('cs-problem-label');
  if (problemLabel) problemLabel.classList.add(C);

  const problemTitle = document.getElementById('cs-problem-title');
  if (problemTitle) problemTitle.textContent = P.problem.heading;

  const problemLine = document.getElementById('cs-problem-line');
  if (problemLine) problemLine.classList.add(C);

  const problemText = document.getElementById('cs-problem-text');
  if (problemText) problemText.textContent = P.problem.text;

  /* ── RENDER SOLUTION ────────────────────────────────────── */
  const solutionLabel = document.getElementById('cs-solution-label');
  if (solutionLabel) solutionLabel.classList.add(C);

  const solutionTitle = document.getElementById('cs-solution-title');
  if (solutionTitle) solutionTitle.textContent = P.solution.heading;

  const solutionLine = document.getElementById('cs-solution-line');
  if (solutionLine) solutionLine.classList.add(C);

  const solutionText = document.getElementById('cs-solution-text');
  if (solutionText) solutionText.textContent = P.solution.text;

  /* ── RENDER TOOLS ───────────────────────────────────────── */
  const toolsLabel = document.getElementById('cs-tools-label');
  if (toolsLabel) toolsLabel.classList.add(C);

  const toolsLine = document.getElementById('cs-tools-line');
  if (toolsLine) toolsLine.classList.add(C);

  const toolsGrid = document.getElementById('cs-tools-grid');
  if (toolsGrid) {
    toolsGrid.innerHTML = P.tools.map((t, i) =>
      `<div class="cs-tool-card cs-glass ${C} cs-sr d${(i % 6) + 1}">
        <div class="cs-tool-name">${t.name}</div>
        <div class="cs-tool-desc">${t.desc}</div>
      </div>`
    ).join('');
  }

  /* ── RENDER RESULTS ─────────────────────────────────────── */
  const resultsLabel = document.getElementById('cs-results-label');
  if (resultsLabel) resultsLabel.classList.add(C);

  const resultsLine = document.getElementById('cs-results-line');
  if (resultsLine) resultsLine.classList.add(C);

  const resultsGrid = document.getElementById('cs-results-grid');
  if (resultsGrid) {
    resultsGrid.innerHTML = P.results.map((r, i) =>
      `<div class="cs-result-card cs-glass ${C} cs-sr d${(i % 4) + 1}">
        <div class="cs-result-icon">${r.icon}</div>
        <div class="cs-result-metric">${r.metric}</div>
        <div class="cs-result-values">
          <span class="cs-result-before">${r.before}</span>
          <span class="cs-result-arrow ${C}">→</span>
          <span class="cs-result-after ${C}">${r.after}</span>
        </div>
      </div>`
    ).join('');
  }

  /* ── RENDER GALLERY ─────────────────────────────────────── */
  const galleryContainer = document.getElementById('cs-gallery');
  if (galleryContainer) {
    if (P.screenshots && P.screenshots.length > 0) {
      galleryContainer.innerHTML = P.screenshots.map(src =>
        `<div class="cs-gallery-item ${C} cs-sr">
          <img src="${src}" alt="Project screenshot" loading="lazy"/>
        </div>`
      ).join('');
    } else {
      // Placeholder gallery items
      galleryContainer.innerHTML = [1, 2, 3].map(n =>
        `<div class="cs-gallery-item ${C} cs-sr d${n}">
          <div class="cs-gallery-placeholder ${C}">// Preview ${n}</div>
        </div>`
      ).join('');
    }
  }

  /* ── RENDER CTA BUTTONS ─────────────────────────────────── */
  const ctaRow = document.getElementById('cs-cta-row');
  if (ctaRow) {
    let btns = `<a href="${P.liveDemo}" class="cs-btn cs-btn-primary" target="_blank" rel="noopener">🚀 Live Demo</a>`;
    if (P.isWebProject && P.github) {
      btns += `<a href="${P.github}" class="cs-btn cs-btn-secondary" target="_blank" rel="noopener">💻 GitHub Repository</a>`;
    }
    ctaRow.innerHTML = btns;
  }

  /* ── RENDER NAVIGATION ──────────────────────────────────── */
  if (P.prevProject && PROJECTS_DATA[P.prevProject]) {
    const prev = PROJECTS_DATA[P.prevProject];
    const prevLink = document.getElementById('cs-prev');
    if (prevLink) {
      prevLink.href = P.prevProject + '.html';
      prevLink.querySelector('.cs-nav-title').textContent = prev.title;
    }
  }
  if (P.nextProject && PROJECTS_DATA[P.nextProject]) {
    const next = PROJECTS_DATA[P.nextProject];
    const nextLink = document.getElementById('cs-next');
    if (nextLink) {
      nextLink.href = P.nextProject + '.html';
      nextLink.querySelector('.cs-nav-title').textContent = next.title;
    }
  }

  /* ── SET PAGE TITLE ─────────────────────────────────────── */
  document.title = P.title + ' — Ashish Case Study';

  /* ── SCROLL REVEAL ──────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cs-sr').forEach(el => observer.observe(el));

  /* ── SMOOTH SCROLL ──────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

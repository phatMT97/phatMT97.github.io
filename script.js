document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.fonts.ready.then(() => {
    initAnimations();
    if (!prefersReducedMotion) {
      initParticles();
      initCursorTrail();
      initMouseParallax();
      initMagneticButtons();
      init3DTilt();
    }
    initScrollProgress();
  });

  /* =========================================================================
     1. SCROLL PROGRESS BAR
     ========================================================================= */
  function initScrollProgress() {
    gsap.to('#scrollProgress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }

  /* =========================================================================
     2. FLOATING PARTICLES
     ========================================================================= */
  function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#6B5B95'];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        this.opacity = 0.1 + Math.sin(this.pulse) * 0.15;
        if (this.x < -10 || this.x > canvas.width + 10 ||
            this.y < -10 || this.y > canvas.height + 10) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < 40; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* =========================================================================
     3. CURSOR TRAIL
     ========================================================================= */
  function initCursorTrail() {
    const trail = document.getElementById('cursorTrail');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.set(trail, { xPercent: -50, yPercent: -50 });

    gsap.ticker.add(() => {
      gsap.to(trail, {
        x: mouseX,
        y: mouseY,
        opacity: 0.6,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  }

  /* =========================================================================
     4. MOUSE PARALLAX ON HERO
     ========================================================================= */
  function initMouseParallax() {
    const hero = document.querySelector('.hero-section');
    const layers = [
      { el: '.hero-svg', depth: 0.05 },
      { el: '.fun-box', depth: 0.02 },
      { el: '.greeting', depth: 0.03 },
      { el: '.blob-1', depth: 0.04 },
      { el: '.blob-2', depth: 0.03 },
      { el: '.blob-3', depth: 0.05 }
    ];

    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      layers.forEach(layer => {
        const el = document.querySelector(layer.el);
        if (!el) return;
        gsap.to(el, {
          x: x * layer.depth * 600,
          y: y * layer.depth * 400,
          duration: 1,
          ease: 'power2.out'
        });
      });
    });
  }

  /* =========================================================================
     5. MAGNETIC BUTTONS
     ========================================================================= */
  function initMagneticButtons() {
    document.querySelectorAll('.social-btn, .logo-monogram').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      });
    });
  }

  /* =========================================================================
     6. 3D TILT ON SKILL CARDS
     ========================================================================= */
  function init3DTilt() {
    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(card, {
          rotateY: x * 15,
          rotateX: -y * 15,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });
  }

  /* =========================================================================
     CORE ANIMATIONS
     ========================================================================= */
  function initAnimations() {
    // === HERO TEXT SPLIT ===
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
      const text = heroName.textContent;
      heroName.innerHTML = text.split('').map((char, i) =>
        char === ' '
          ? ' '
          : `<span class="char" style="display:inline-block">${char}</span>`
      ).join('');
    }

    // === 1. HERO LOAD SEQUENCE ===
    const heroTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', duration: 0.8 } });

    heroTl
      .from('.logo-monogram', { y: -80, autoAlpha: 0, rotation: -30, scale: 0.5 })
      .from('.nav-link', {
        y: -30, autoAlpha: 0, stagger: 0.08, ease: 'power3.out', duration: 0.5
      }, '-=0.5')
      .from('.greeting', {
        scale: 0, rotation: 15, autoAlpha: 0, ease: 'elastic.out(1, 0.5)', duration: 1.2
      })
      .from('.hero-name .char', {
        y: 80, autoAlpha: 0, rotation: () => Math.random() * 40 - 20,
        scale: 0, stagger: 0.03, ease: 'back.out(2)', duration: 0.6
      }, '-=0.8')
      .from('.hero-role', {
        x: -80, autoAlpha: 0, skewX: -10, duration: 0.6, ease: 'power3.out'
      }, '-=0.3')
      .from('#hero-box', {
        y: 120, autoAlpha: 0, rotation: 8, scale: 0.8, ease: 'elastic.out(1, 0.6)', duration: 1.2
      }, '-=0.5')
      .from('.sticker-callout', {
        scale: 0, rotation: -10, autoAlpha: 0, ease: 'elastic.out(1.2, 0.4)', duration: 1
      }, '-=0.6')
      .from('.hero-svg', {
        scale: 0.5, y: 60, autoAlpha: 0, ease: 'back.out(1.5)', duration: 1
      }, '-=1');

    // === 2. HERO SVG FLOATING (multi-axis) ===
    gsap.to('.hero-svg', {
      y: -25,
      rotation: 3,
      scale: 1.03,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // === TERMINAL SVG ANIMATIONS ===

    // Blinking cursor
    gsap.to('.art-cursor', {
      autoAlpha: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'steps(1)'
    });

    // Code lines type-in effect on load
    const codeLines = document.querySelectorAll('.art-code-lines text');
    codeLines.forEach((line, i) => {
      gsap.from(line, {
        autoAlpha: 0,
        x: -10,
        duration: 0.4,
        delay: 1.5 + i * 0.2,
        ease: 'power2.out'
      });
    });

    // Screen glow pulse
    gsap.to('.art-screen-glow', {
      opacity: 0.15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // Circuit nodes pulse (left - teal)
    gsap.to('.art-circuit-left circle', {
      scale: 1.3,
      transformOrigin: '50% 50%',
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      ease: 'sine.inOut'
    });

    // Circuit nodes pulse (right - pink squares)
    gsap.to('.art-circuit-right rect', {
      scale: 1.3,
      transformOrigin: '50% 50%',
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      ease: 'sine.inOut'
    });

    // Circuit lines draw-in
    gsap.from('.art-circuit-left line, .art-circuit-right line', {
      scaleX: 0,
      transformOrigin: 'right center',
      duration: 0.6,
      stagger: 0.1,
      delay: 1.8,
      ease: 'power2.out'
    });

    // Brain icon float
    gsap.to('.art-brain', {
      y: -4,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // Brain glow pulse
    gsap.to('.art-brain path', {
      fill: '#FFD700',
      duration: 1.8,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // === 3. BLOB MORPHING + PARALLAX ===
    // Continuous slow rotation on blobs
    gsap.to('.blob-1', { rotation: 360, duration: 30, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
    gsap.to('.blob-2', { rotation: -360, duration: 40, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
    gsap.to('.blob-3', { rotation: 360, duration: 35, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });

    // Scale pulse on blobs
    gsap.to('.blob-1', { scale: 1.15, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.blob-2', { scale: 0.9, duration: 8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.blob-3', { scale: 1.1, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    // Scroll parallax on blobs
    gsap.to('.bg-blob', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    // Section divider parallax
    gsap.utils.toArray('.section-divider svg').forEach(svg => {
      gsap.to(svg, {
        y: 50,
        scaleY: 1.5,
        transformOrigin: 'bottom center',
        ease: 'none',
        scrollTrigger: {
          trigger: svg.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // === 4. SKILLS SECTION ===
    // Cards stagger with spring physics
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 75%'
      },
      y: 120,
      rotation: () => Math.random() * 12 - 6,
      autoAlpha: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.12,
      ease: 'elastic.out(1, 0.5)'
    });

    // Tags stagger within each card
    gsap.utils.toArray('.skill-card').forEach(card => {
      const tags = card.querySelectorAll('.tag, .skill-list li');
      if (tags.length) {
        gsap.from(tags, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          },
          y: 20,
          autoAlpha: 0,
          scale: 0.5,
          stagger: 0.06,
          duration: 0.5,
          delay: 0.3,
          ease: 'back.out(2)'
        });
      }
    });

    // Pills count-up appearance
    gsap.utils.toArray('.pill').forEach(pill => {
      gsap.from(pill, {
        scrollTrigger: { trigger: pill, start: 'top 85%' },
        scale: 0,
        rotation: 20,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      });
    });

    // === 5. TIMELINE ===
    const drawLine = document.querySelector('.draw-line');
    if (drawLine) {
      const length = drawLine.getTotalLength();
      gsap.set(drawLine, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(drawLine, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    }

    // Timeline nodes with 3D flip-in
    gsap.utils.toArray('.timeline-node').forEach(node => {
      const xOffset = node.classList.contains('node-right') ? 150 : -150;
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: xOffset,
        autoAlpha: 0,
        rotateY: node.classList.contains('node-right') ? -30 : 30,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.5)'
      });
    });

    // Exp-period badges pop in
    gsap.utils.toArray('.exp-period').forEach(badge => {
      gsap.from(badge, {
        scrollTrigger: { trigger: badge, start: 'top 85%' },
        scale: 0,
        rotation: -15,
        duration: 0.6,
        delay: 0.2,
        ease: 'elastic.out(1.2, 0.4)'
      });
    });

    // === 6. ACHIEVEMENTS ===
    gsap.set('.post-it', { autoAlpha: 0, scale: 0, rotation: 30, y: 50 });
    gsap.to('.post-it', {
      scrollTrigger: {
        trigger: '.achievements-cluster',
        start: 'top 85%'
      },
      scale: 1,
      y: 0,
      rotation: (index, target) => {
        return target.classList.contains('pink-post') ? -3 :
               target.classList.contains('yellow-post') ? 2 : -1;
      },
      autoAlpha: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'elastic.out(1, 0.4)'
    });

    // Post-it hover wiggle
    document.querySelectorAll('.post-it').forEach(postIt => {
      postIt.addEventListener('mouseenter', () => {
        gsap.to(postIt, {
          scale: 1.08,
          rotation: '+=5',
          y: -10,
          boxShadow: '12px 12px 0px rgba(0,0,0,0.15)',
          duration: 0.3,
          ease: 'back.out(2)'
        });
      });
      postIt.addEventListener('mouseleave', () => {
        const baseRotation = postIt.classList.contains('pink-post') ? -3 :
                             postIt.classList.contains('yellow-post') ? 2 : -1;
        gsap.to(postIt, {
          scale: 1,
          rotation: baseRotation,
          y: 0,
          boxShadow: '8px 8px 0px rgba(0,0,0,0.1)',
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      });
    });

    // === 7. CONTACT BOX ===
    gsap.from('.contact-box', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 85%'
      },
      y: 80,
      scale: 0.85,
      autoAlpha: 0,
      rotation: -3,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    });

    // Contact title letters
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) {
      const words = contactTitle.innerHTML;
      // Animate the handwritten accent
      gsap.from('.contact-title .handwritten-accent', {
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' },
        scale: 0,
        rotation: 20,
        delay: 0.5,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)'
      });
    }

    // Social buttons stagger
    gsap.from('.social-btn', {
      scrollTrigger: { trigger: '.social-links', start: 'top 90%' },
      y: 40,
      autoAlpha: 0,
      scale: 0.5,
      rotation: -10,
      stagger: 0.15,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)'
    });

    // === 8. PAINT POUR REVEAL ===
    const svgNS = 'http://www.w3.org/2000/svg';
    const dripProfiles = [
      [[0,0.03],[0.10,0.01],[0.19,0.07],[0.29,0.01],[0.38,0.09],
       [0.48,0.02],[0.57,0.06],[0.67,0.01],[0.76,0.07],[0.86,0.02],[0.93,0.04],[1.0,0.03]],
      [[0,0.02],[0.09,0.07],[0.20,0.01],[0.31,0.11],[0.41,0.02],
       [0.51,0.08],[0.61,0.01],[0.71,0.10],[0.81,0.03],[0.91,0.06],[1.0,0.02]]
    ];

    ['.skills-section', '.experience-section'].forEach((selector, idx) => {
      const section = document.querySelector(selector);
      if (!section) return;

      const bgColor = getComputedStyle(section).backgroundColor;
      const clipId = 'paint-pour-' + idx;

      const svg = document.createElementNS(svgNS, 'svg');
      svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;top:0;left:0';
      const defs = document.createElementNS(svgNS, 'defs');
      const clip = document.createElementNS(svgNS, 'clipPath');
      clip.setAttribute('id', clipId);
      clip.setAttribute('clipPathUnits', 'objectBoundingBox');
      const pathEl = document.createElementNS(svgNS, 'path');
      clip.appendChild(pathEl);
      defs.appendChild(clip);
      svg.appendChild(defs);
      document.body.appendChild(svg);

      const bgLayer = document.createElement('div');
      bgLayer.style.cssText = [
        'position:absolute','top:0','left:0','right:0','bottom:0',
        'z-index:0','pointer-events:none',
        'background-color:' + bgColor,
        'clip-path:url(#' + clipId + ')'
      ].join(';');

      section.style.position = 'relative';
      section.style.backgroundColor = 'transparent';
      section.insertBefore(bgLayer, section.firstChild);

      Array.from(section.children).forEach(child => {
        if (child !== bgLayer) {
          child.style.position = 'relative';
          child.style.zIndex = '1';
        }
      });

      const drips = dripProfiles[idx];
      function buildPath(f) {
        const last = drips[drips.length - 1];
        let d = `M0,0 L1,0 L${last[0]},${(f + last[1]).toFixed(4)}`;
        for (let i = drips.length - 2; i >= 0; i--) {
          const [x1, dy1] = drips[i];
          const [x2, dy2] = drips[i + 1];
          const cx = ((x1 + x2) / 2).toFixed(4);
          const cy = (f + Math.max(dy1, dy2) + 0.018).toFixed(4);
          d += ` Q${cx},${cy} ${x1},${(f + dy1).toFixed(4)}`;
        }
        return d + ' Z';
      }

      pathEl.setAttribute('d', buildPath(0));

      const state = { f: 0 };
      gsap.to(state, {
        f: 1.12,
        duration: 1.5,
        ease: 'power1.inOut',
        onUpdate() { pathEl.setAttribute('d', buildPath(state.f)); },
        scrollTrigger: {
          trigger: section,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      });
    });

    // === 9. SECTION TITLES REVEAL ===
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
        scrollTrigger: { trigger: title, start: 'top 85%' },
        y: 40,
        autoAlpha: 0,
        skewX: -5,
        duration: 0.8,
        ease: 'power3.out'
      });

      const accent = title.querySelector('.handwritten-accent');
      if (accent) {
        gsap.from(accent, {
          scrollTrigger: { trigger: title, start: 'top 85%' },
          scale: 0,
          rotation: 15,
          autoAlpha: 0,
          delay: 0.3,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)'
        });
      }
    });

    // === 10. FOOTER REVEAL ===
    gsap.from('.footer', {
      scrollTrigger: { trigger: '.footer', start: 'top 95%' },
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  // === SMOOTH SCROLL NAV ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetElement, offsetY: 100 },
          ease: 'power3.inOut'
        });
      }
    });
  });
});

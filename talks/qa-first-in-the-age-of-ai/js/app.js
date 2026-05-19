/* ================================================================
   Spec-Driven Development Presentation
   js/app.js — Pure Vanilla JavaScript, no dependencies
   ================================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------------
     CONSTANTS
     ---------------------------------------------------------------- */
  const TOTAL            = 20;
  const PRESENTATION_URL = 'https://demismeneghetti.com.br/talks/qa-first-in-the-age-of-ai/index.html';
  const QR_API           = 'https://api.qrserver.com/v1/create-qr-code/';
  const TRANSITION       = 450; // ms — matches CSS var(--t-slide)

  /* ----------------------------------------------------------------
     STATE
     ---------------------------------------------------------------- */
  let current       = 1;
  let transitioning = false;
  let lang          = 'pt'; // default — matches <html lang="pt">

  /* ----------------------------------------------------------------
     DOM REFS
     ---------------------------------------------------------------- */
  const btnPrev      = document.getElementById('btn-prev');
  const btnNext      = document.getElementById('btn-next');
  const btnLang      = document.getElementById('btn-lang');
  const elCurrent    = document.getElementById('slide-current');
  const elTotal      = document.getElementById('slide-total');
  const progressFill = document.getElementById('progress-fill');
  const progressBar  = document.querySelector('.progress');

  /* ================================================================
     INIT
     ================================================================ */
  function init () {
    elTotal.textContent = TOTAL;

    // Ensure only slide 1 is active on load
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    const firstSlide = getSlideEl(1);
    if (firstSlide) firstSlide.classList.add('active');

    updateNav();
    generateQR();
    bindEvents();
  }

  /* ================================================================
     SLIDE NAVIGATION
     ================================================================ */
  function goTo (n, animate) {
    animate = animate !== false;
    if (n < 1 || n > TOTAL) return;
    if (transitioning && animate) return;
    if (n === current) return;

    const leaving  = getSlideEl(current);
    const entering = getSlideEl(n);
    if (!entering) return;

    current = n;

    if (leaving) leaving.classList.remove('active');
    entering.classList.add('active');
    entering.scrollTop = 0;

    // Re-trigger the fadeUp content animation
    const content = entering.querySelector('.slide__content');
    if (content && animate) {
      content.style.animation = 'none';
      void content.offsetWidth; // force reflow
      content.style.animation = '';
    }

    if (animate) {
      transitioning = true;
      setTimeout(() => { transitioning = false; }, TRANSITION);
    }

    updateNav();
  }

  function next () { goTo(current + 1); }
  function prev () { goTo(current - 1); }

  /* ================================================================
     NAV STATE
     ================================================================ */
  function updateNav () {
    elCurrent.textContent = current;
    const pct = (current / TOTAL) * 100;
    progressFill.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', current);
    btnPrev.disabled = current === 1;
    btnNext.disabled = current === TOTAL;
  }

  /* ================================================================
     LANGUAGE TOGGLE
     ================================================================ */
  function toggleLang () {
    lang = lang === 'pt' ? 'en' : 'pt';
    document.documentElement.lang = lang;
    btnLang.setAttribute(
      'aria-label',
      lang === 'pt' ? 'Switch to English' : 'Trocar para Português'
    );
  }

  /* ================================================================
     QR CODE
     ================================================================ */
  function generateQR () {
    const img      = document.getElementById('qr-img');
    const offline  = document.getElementById('qr-offline');
    const urlLabel = document.getElementById('qr-url');

    urlLabel.textContent = PRESENTATION_URL;

    const src = QR_API
      + '?size=300x300'
      + '&data='    + encodeURIComponent(PRESENTATION_URL)
      + '&color=1E2761'
      + '&bgcolor=FFFFFF'
      + '&margin=10'
      + '&qzone=1';

    img.src = src;

    img.addEventListener('load', function () {
      img.style.display = 'block';
      offline.hidden = true;
    });

    img.addEventListener('error', function () {
      img.style.display = 'none';
      offline.hidden = false;
    });
  }

  /* ================================================================
     EVENT BINDING
     ================================================================ */
  function bindEvents () {
    btnNext.addEventListener('click', next);
    btnPrev.addEventListener('click', prev);
    btnLang.addEventListener('click', toggleLang);
    document.addEventListener('keydown', onKeyDown);
    bindTouch();
  }

  /* ----------------------------------------------------------------
     KEYBOARD
     ---------------------------------------------------------------- */
  function onKeyDown (e) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        goTo(1);
        break;
      case 'End':
        e.preventDefault();
        goTo(TOTAL);
        break;
      case 'l':
      case 'L':
        // Keyboard shortcut: L = toggle language
        if (!e.ctrlKey && !e.metaKey) toggleLang();
        break;
      default:
        // Number keys 1-9: quick jump
        if (e.key >= '1' && e.key <= '9' && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const n = parseInt(e.key, 10);
          if (n >= 1 && n <= TOTAL) goTo(n);
        }
        break;
    }
  }

  /* ----------------------------------------------------------------
     TOUCH / SWIPE
     ---------------------------------------------------------------- */
  function bindTouch () {
    let startX = 0;
    let startY = 0;
    const MIN_SWIPE = 48;

    document.addEventListener('touchstart', function (e) {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      const dx = e.changedTouches[0].screenX - startX;
      const dy = e.changedTouches[0].screenY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > MIN_SWIPE) {
        if (dx < 0) next();
        else prev();
      }
    }, { passive: true });
  }

  /* ================================================================
     HELPERS
     ================================================================ */
  function getSlideEl (n) {
    return document.querySelector('.slide[data-slide="' + n + '"]');
  }

  /* ================================================================
     BOOT
     ================================================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());

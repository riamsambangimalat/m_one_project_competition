// ===== main.js — Mobile nav toggle + Footer year =====

document.addEventListener('DOMContentLoaded', function () {
  // ---- Mobile nav toggle ----
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var navOverlay = document.querySelector('.nav-overlay');
  var navClose = document.querySelector('.mobile-nav__close');
  var body = document.body;

  function openNav() {
    mobileNav.setAttribute('data-open', 'true');
    navOverlay.setAttribute('data-open', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
  }

  function closeNav() {
    mobileNav.setAttribute('data-open', 'false');
    navOverlay.setAttribute('data-open', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (mobileNav.getAttribute('data-open') === 'true') {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.getAttribute('data-open') === 'true') {
      closeNav();
    }
  });

  // Close on link click
  if (mobileNav) {
    var navLinks = mobileNav.querySelectorAll('.mobile-nav__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  // ---- Footer year auto ----
  var yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Image fallback ----
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      img.classList.add('is-hidden');
      var fallback = img.closest('.img-fallback');
      if (fallback) {
        var icon = fallback.querySelector('.img-fallback__icon');
        if (icon) {
          icon.style.display = 'flex';
        }
      }
    });
  });
});

/* Spoke & Weal — Revamp · Lightweight JS */

(() => {
  // ======== Theme toggle (light/dark) ========
  const root = document.documentElement;
  const safeGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  if (safeGet('sw-theme') === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('click', (e) => {
    const t = e.target.closest('.theme-toggle');
    if (!t) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      safeSet('sw-theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      safeSet('sw-theme', 'dark');
    }
  });

  // ======== Sticky nav state ========
  // Pages WITH .hero use scroll-based toggle (white over hero, scrolled when past it).
  // Pages WITHOUT .hero are always in "scrolled" state (subpages on light background).
  const nav = document.querySelector('.nav');
  const hasHero = !!document.querySelector('.hero, .loc-hero, .portfolio[class*="page-portfolio"]');
  if (nav) {
    if (!hasHero) {
      nav.classList.add('scrolled');
    } else {
      const onScroll = () => {
        if (window.scrollY > 60) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // ======== Mobile drawer ========
  const menuBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const setDrawer = (open) => {
    if (!drawer || !menuBtn) return;
    drawer.setAttribute('data-open', open ? 'true' : 'false');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const open = drawer.getAttribute('data-open') !== 'true';
      setDrawer(open);
    });
    drawer.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') setDrawer(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setDrawer(false);
    });
  }

  // ======== Reveal on scroll ========
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('in'));
  }

  // ======== Newsletter (mock) ========
  const form = document.querySelector('.newsletter form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const btn = form.querySelector('button');
      if (input && input.value.trim()) {
        btn.textContent = 'Thank you ✓';
        input.value = '';
        setTimeout(() => { btn.innerHTML = 'Subscribe <span class="arrow">→</span>'; }, 2400);
      }
    });
  }
})();

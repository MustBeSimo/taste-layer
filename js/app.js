/* TASTE LAYER — Motion & Navigation. Vanilla. No build step. */
(() => {
  'use strict';
  const themeKey = 'taste-layer-theme';
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(themeKey) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', savedTheme);

  const labelBtn = () => {
    const btn = document.querySelector('.theme');
    if (btn) btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☼ Light' : '☾ Dark';
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('.theme')) {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(themeKey, next);
      labelBtn();
    }
  });
  document.addEventListener('DOMContentLoaded', labelBtn);

  const revealClasses = ['.rise', '.reveal', '.line-reveal', '.stagger'];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  document.addEventListener('DOMContentLoaded', () => {
    revealClasses.forEach((sel) =>
      document.querySelectorAll(sel).forEach((el) => io.observe(el))
    );
    document.querySelectorAll('.rise').forEach((el) => {
      if (!el.querySelector(':scope > span')) {
        const inner = document.createElement('span');
        inner.innerHTML = el.innerHTML;
        el.innerHTML = '';
        el.appendChild(inner);
      }
    });
  });

  const progress = () => {
    const bar = document.querySelector('.progress');
    if (!bar) return;
    const h = document.documentElement;
    const pct = (h.scrollTop || document.body.scrollTop) /
                (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  window.addEventListener('scroll', progress, { passive: true });
  window.addEventListener('resize', progress);
  document.addEventListener('DOMContentLoaded', progress);

  const updateDots = () => {
    const sections = document.querySelectorAll('section[id]');
    const dots = document.querySelectorAll('.dots a');
    if (!sections.length || !dots.length) return;
    const mid = window.scrollY + window.innerHeight * 0.35;
    let activeId = null;
    sections.forEach((s) => { if (s.offsetTop <= mid) activeId = s.id; });
    dots.forEach((d) =>
      d.classList.toggle('active', d.getAttribute('href') === `#${activeId}`)
    );
  };
  window.addEventListener('scroll', updateDots, { passive: true });
  document.addEventListener('DOMContentLoaded', updateDots);

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();

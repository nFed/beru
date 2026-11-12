// Leeu Productions — site behaviour
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const pad = n => String(n).padStart(2, '0');

  // nav
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('stuck', scrollY > 12);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  const burger = $('#burger'), menu = $('#menu');
  const setMenu = open => {
    menu.classList.toggle('open', open); document.body.classList.toggle('locked', open);
    burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
  };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // hero: a running timecode under the silhouette
  const tc = $('#s-tc'), FPS = 25, t0 = performance.now();
  if (tc && !reduce) {
    const tick = now => {
      if (!document.hidden) {
        const ms = now - t0, sec = Math.floor(ms / 1000), f = Math.floor((ms % 1000) / (1000 / FPS));
        tc.textContent = `00:${pad(Math.floor(sec / 60) % 60)}:${pad(sec % 60)}:${pad(f)}`;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // nav icon: the silhouette leans gently with the speed of the scroll and settles back when you stop
  const ico = $('#ico');
  if (ico && !reduce) {
    let lastY = scrollY, tilt = 0, raf = 0, idle = 0;
    const settle = () => { tilt *= .86; ico.style.setProperty('--tilt', tilt.toFixed(2) + 'deg'); if (Math.abs(tilt) > .05) raf = requestAnimationFrame(settle); else { ico.style.setProperty('--tilt', '0deg'); raf = 0; } };
    addEventListener('scroll', () => {
      const v = scrollY - lastY; lastY = scrollY;
      tilt = Math.max(-9, Math.min(9, tilt * .6 + v * .12));
      ico.style.setProperty('--tilt', tilt.toFixed(2) + 'deg');
      clearTimeout(idle); idle = setTimeout(() => { if (!raf) raf = requestAnimationFrame(settle); }, 90);
    }, { passive: true });
  }

  // works: on phones the strip scrolls sideways; the bar and counter follow it
  const strip = $('#works'), bar = $('#wbar'), cnt = $('#wcnt');
  if (strip) {
    const items = $$('.work', strip);
    const upd = () => {
      const max = strip.scrollWidth - strip.clientWidth; if (max <= 0) return;
      const q = 1 - Math.min(1, Math.max(0, strip.scrollLeft) / max);
      bar.style.setProperty('--q', q.toFixed(3));
      const mid = strip.getBoundingClientRect(); let best = 0, bd = 1e9;
      items.forEach((it, i) => { const r = it.getBoundingClientRect(), d = Math.abs((r.left + r.right) / 2 - (mid.left + mid.right) / 2); if (d < bd) { bd = d; best = i; } });
      cnt.textContent = `${pad(best + 1)}/${pad(items.length)}`;
    };
    // reverse the visual order (first frame ends up on the right) and open at that end
    items.forEach((it, i) => it.style.setProperty('--o', items.length - i));
    const toStart = () => { const max = strip.scrollWidth - strip.clientWidth; if (max > 0) strip.scrollLeft = max; };
    toStart(); addEventListener('load', () => { toStart(); upd(); });
    strip.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
  }

  // ticker: duplicate the run so the loop is seamless
  const tk = $('#ticker');
  tk.innerHTML += tk.innerHTML.replace(/<span>/g, '<span aria-hidden="true">');

  // reveals, wipes, counters
  const countUp = el => {
    const end = +el.dataset.n, t = performance.now(), dur = 1300;
    const step = now => { const p = Math.min((now - t) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const targets = $$('.rv, .work, .works, .steps');
  if (!('IntersectionObserver' in window)) { targets.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    if (!reduce) $$('[data-n]', e.target).forEach(countUp);
  }), { threshold: .14, rootMargin: '0px 0px -6% 0px' });
  targets.forEach(el => io.observe(el));
})();

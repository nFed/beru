/* Sketches: font pairing (?f=) and logo language (?l=) for every design page */
(function () {
  var F = {
    plex:      { n: 'IBM Plex',   d: 'נוכחי',  g: null },
    frank:     { n: 'Frank Ruhl', d: 'קלאסי',  g: 'Frank+Ruhl+Libre:wght@300;400;500;700;900&family=Assistant:wght@300;400;600;700' },
    karantina: { n: 'Karantina',  d: 'פוסטר',  g: 'Karantina:wght@300;400;700&family=Heebo:wght@300;400;500;600;700' },
    bellefair: { n: 'Bellefair',  d: 'אלגנטי', g: 'Bellefair&family=Assistant:wght@300;400;600;700' },
    suez:      { n: 'Suez One',   d: 'רטרו',   g: 'Suez+One&family=Rubik:wght@300;400;500;600;700' }
  };
  var L = { en: 'Leeu Productions', he: 'ליו הפקות', both: 'דו־לשוני' };
  var q = new URLSearchParams(location.search);
  var f = F[q.get('f')] ? q.get('f') : 'plex';
  var l = L[q.get('l')] ? q.get('l') : 'en';
  var de = document.documentElement;
  de.classList.add('f-' + f, 'lg-' + l);
  if (F[f].g) {
    var k = document.createElement('link');
    k.rel = 'stylesheet';
    k.href = 'https://fonts.googleapis.com/css2?family=' + F[f].g + '&display=swap';
    document.head.appendChild(k);
  }
  var qs = function (ff, ll) {
    var p = [];
    if (ff !== 'plex') p.push('f=' + ff);
    if (ll !== 'en') p.push('l=' + ll);
    return p.length ? '?' + p.join('&') : location.pathname.split('/').pop();
  };
  var NAME = {
    en: '<b>Leeu</b><span>Productions</span>',
    he: '<b>ליו</b><span>הפקות</span>',
    both: '<span class="nm"><span class="r"><b>ליו</b><span>הפקות</span></span><small>LEEU PRODUCTIONS</small></span>'
  };

  document.addEventListener('DOMContentLoaded', function () {
    // the wordmark in the nav and the footer
    if (l !== 'en') {
      var label = 'ליו הפקות, לראש העמוד';
      var nw = document.querySelector('.nav .word');
      if (nw) {
        Array.prototype.slice.call(nw.children).forEach(function (c) { if (!c.classList.contains('ico')) c.remove(); });
        nw.insertAdjacentHTML('beforeend', NAME[l]);
        nw.setAttribute('dir', 'rtl'); nw.setAttribute('aria-label', label);
      }
      var lock = document.querySelector('.foot-brand .lock');
      if (lock) {
        var w = lock.querySelector('.word'); if (w) w.innerHTML = NAME[l];
        lock.setAttribute('dir', 'rtl'); lock.setAttribute('aria-label', label);
      }
    }

    // the switcher: keep the choice when moving between designs, and add the font / logo panel
    var sk = document.querySelector('.sk');
    if (!sk) return;
    sk.querySelectorAll('a').forEach(function (a) {
      var p = qs(f, l); if (p.charAt(0) === '?') a.href = a.getAttribute('href') + p;
    });
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'aa'; btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = 'Aa <span>' + F[f].n + (l !== 'en' ? ' · ' + (l === 'he' ? 'עב׳' : 'דו') : '') + '</span>';
    var pan = document.createElement('div');
    pan.className = 'skp'; pan.hidden = true;
    var row = function (title, items) {
      return '<div><h5>' + title + '</h5><div class="row">' + items + '</div></div>';
    };
    var fonts = Object.keys(F).map(function (key) {
      return '<a href="' + qs(key, l) + '"' + (key === f ? ' aria-current="true"' : '') + '><b>' + F[key].n + '</b><small>' + F[key].d + '</small></a>';
    }).join('');
    var logos = Object.keys(L).map(function (key) {
      return '<a href="' + qs(f, key) + '"' + (key === l ? ' aria-current="true"' : '') + '><b>' + L[key] + '</b></a>';
    }).join('');
    pan.innerHTML = row('גופן', fonts) + row('לוגו', logos) + '<a class="all" href="type.html">השוואת גופנים ולוגו ←</a>';
    sk.appendChild(btn); sk.appendChild(pan);
    var set = function (o) { pan.hidden = !o; btn.setAttribute('aria-expanded', String(o)); sk.classList.toggle('open', o); };
    btn.addEventListener('click', function (e) { e.stopPropagation(); set(pan.hidden); });
    document.addEventListener('click', function (e) { if (!sk.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  });
})();

/* Arma el sitio a partir de content.js y cambia de idioma SIN recargar ni abrir otra pestaña. */
(function () {
  "use strict";

  var SITE = window.SITE;
  var cfg = SITE.config;
  var LANGS = ["en", "es"];
  var IDS = ["about", "how", "why", "background", "projects", "contact"];
  var main = document.getElementById("main");
  var nav = document.getElementById("nav");
  var langBtn = document.getElementById("lang");
  var observer = null, rotTimer = null;

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeUrl(u) { return /^(https?:|mailto:|#)/i.test(u || "") ? u : ""; }

  // Cinta animada: un "medio" repetido + su copia = bucle continuo sin cortes
  function track(items, kind, reverse) {
    var sep = kind === "top" ? "<b>●</b>" : '<span class="dot" aria-hidden="true"></span>';
    var one = items.map(function (t) { return "<span>" + esc(t) + "</span>" + sep; }).join("");
    var half = "", reps = kind === "top" ? 3 : (items.length > 4 ? 2 : 3);
    for (var i = 0; i < reps; i++) half += one;
    return '<div class="track' + (kind === "top" ? " mono" : "") + (reverse ? " rev" : "") + '" aria-hidden="true">' + half + half + "</div>";
  }
  function tags(list) {
    return '<ul class="tags">' + list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }

  /* ---------- idioma ---------- */
  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("lang"); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    return (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }
  var lang = initialLang();

  /* ---------- fragmentos fijos ---------- */
  var GHERKIN =
    '<span class="k">Feature:</span> Online store purchase\n' +
    '  <span class="k">Scenario:</span> Order with stock\n' +
    '    <span class="k">Given</span> a product with stock\n' +
    '    <span class="k">When</span>  the customer confirms payment\n' +
    '    <span class="k">Then</span>  the order is recorded\n' +
    '    <span class="k">And</span>   the stock drops by 1';
  var SQL =
    '<span class="c">-- Which products are out of stock?</span>\n' +
    '<span class="k">SELECT</span> ProductName,\n' +
    '       UnitsInStock,\n' +
    '       UnitPrice\n' +
    '<span class="k">FROM</span>   Products\n' +
    '<span class="k">WHERE</span>  UnitsInStock = <span class="n">0</span>;';
  var ICON_LI = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#60a5fa"/><g fill="#0f172a"><circle cx="7" cy="7" r="1.7"/><path d="M5.5 9.5h3v9h-3z"/><path d="M10.5 9.5h2.9v1.3c.5-.9 1.6-1.5 2.9-1.5 2.4 0 3.2 1.5 3.2 3.8v5.4h-3v-4.8c0-1.1-.3-1.8-1.3-1.8-1.1 0-1.7.8-1.7 1.9v4.7h-3z"/></g></svg>';
  var ICON_GH = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';

  /* ---------- render ---------- */
  function render() {
    var t = SITE[lang];
    var h = t.hero;
    var gh = safeUrl(cfg.github), li = safeUrl(cfg.linkedin);

    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t.metaDescription);

    nav.setAttribute("aria-label", t.menuLabel);
    nav.innerHTML = IDS.map(function (id) {
      return '<a href="#' + id + '" data-id="' + id + '">' + esc(t.nav[id] || t.contact.label) + "</a>";
    }).join("");
    langBtn.textContent = t.switchTo;
    langBtn.setAttribute("aria-label", t.switchLabel);

    var html = "";

    /* franja + hero */
    html += '<div class="band-top">' + track(t.topBand, "top") + "</div>";
    html +=
      '<section class="hero"><div class="wrap">' +
      '<p class="kicker">' + esc(h.kicker) + "</p>" +
      '<p class="hi">' + esc(h.hi) + "</p>" +
      '<h1 class="big-name">' + esc(h.name) + "</h1>" +
      '<p class="tagline">' + esc(h.tagline) + "</p>" +
      '<p class="studying">' + esc(h.studying) + "</p>" +
      '<div class="btns">' +
      '<a class="btn fill" href="#contact">' + esc(h.talk) + "</a>" +
      '<a class="btn" href="' + esc(gh) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
      '<a class="btn" href="' + esc(li) + '" target="_blank" rel="noopener">LinkedIn ↗</a>' +
      "</div>" +
      '<div class="avail">' + esc(h.available) + "</div></div></section>";

    html += '<div class="band-big">' + track(t.toolsBand, "big", true) + "</div>";

    /* frase que rota */
    html +=
      '<section class="say"><div class="wrap"><h2>' + esc(t.say.lead) +
      ' <span class="rot" id="rot" aria-live="off">' + esc(t.say.words[0]) + "</span></h2></div></section>";

    /* sobre mí */
    var a = t.about;
    html +=
      '<section class="sec" id="about"><div class="wrap grid"><p class="mono label">' + esc(a.label) + "</p><div>" +
      '<h2 class="title">' + esc(a.title) + '</h2><div class="prose">' +
      a.paragraphs.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      '</div><div class="facts">' +
      a.facts.map(function (f) {
        return '<div class="fact"><span class="mono">' + esc(f.label) + "</span><span>" + esc(f.value) + "</span></div>";
      }).join("") +
      "</div></div></div></section>";

    /* cómo trabajo */
    var w = t.how;
    html +=
      '<section class="sec soft" id="how"><div class="wrap grid"><p class="mono label">' + esc(w.label) + "</p><div>" +
      '<h2 class="title">' + esc(w.title) + "</h2>" +
      '<div class="codes">' +
      '<figure class="code-card"><pre><code>' + GHERKIN + '</code></pre><figcaption class="mono">' + esc(w.gherkinCaption) + "</figcaption></figure>" +
      '<figure class="code-card"><pre><code>' + SQL + '</code></pre><figcaption class="mono">' + esc(w.sqlCaption) + "</figcaption></figure>" +
      "</div>" +
      '<div class="skills">' +
      w.skills.map(function (s) {
        return '<div class="skill"><h4>' + esc(s.title) + "</h4><p>" + esc(s.text) + "</p></div>";
      }).join("") +
      "</div></div></div></section>";

    /* 6 razones */
    var y = t.why;
    html +=
      '<section class="sec" id="why"><div class="wrap"><p class="mono label" style="margin-bottom:14px">' + esc(y.label) + "</p>" +
      '<h2 class="title">' + esc(y.title) + '</h2><div class="reasons">' +
      y.items.map(function (r) {
        return '<article class="reason"><header><span class="num' + (r.dark ? " dark" : "") + '">' + r.n + "</span><h3>" + esc(r.title) + "</h3></header>" +
          '<div class="lines">' + r.lines.map(function (l) { return "<p><strong>" + esc(l.k) + "</strong> " + esc(l.v) + "</p>"; }).join("") + "</div>" +
          tags(r.tags) + "</article>";
      }).join("") +
      "</div></div></section>";

    /* trayectoria */
    var b = t.background;
    html += '<section class="sec soft" id="background"><div class="wrap grid"><p class="mono label">' + esc(b.label) + "</p><div>";
    html += '<h3 class="sub">' + esc(b.experienceTitle) + "</h3>";
    b.jobs.forEach(function (j) {
      html +=
        '<article class="job"><div class="when mono">' + esc(j.date) +
        "<span>" + esc(j.duration) + "</span><span>" + esc(j.type) + "</span></div><div>" +
        "<h4>" + esc(j.title) + '</h4><p class="org">' + esc(j.org) + "</p><ul>" +
        j.bullets.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        (j.note ? '<p class="note">' + esc(j.note) + "</p>" : "") +
        "</div></article>";
    });
    html += '<h3 class="sub edu-head">' + esc(b.educationTitle) + "</h3>";
    b.education.forEach(function (e) {
      html +=
        '<article class="job"><div class="when mono">' + esc(e.date) +
        (e.status ? "<span>" + esc(e.status) + "</span>" : "") + "</div><div>" +
        "<h4>" + esc(e.title) + '</h4><p class="org">' + esc(e.org) + "</p></div></article>";
    });
    html += "</div></div></section>";

    /* proyectos */
    var p = t.projects;
    html += '<section class="sec" id="projects"><div class="wrap grid"><p class="mono label">' + esc(p.label) + "</p><div>";
    html += '<h2 class="title">' + esc(p.title) + "</h2>";
    p.items.forEach(function (it) {
      var url = safeUrl((cfg.projectLinks && cfg.projectLinks[it.id]) || cfg.github);
      var tg = (it.status ? '<li class="live">' + esc(it.status) + "</li>" : "") +
        it.tags.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      html +=
        '<a class="proj" href="' + esc(url) + '" target="_blank" rel="noopener"><div><h4>' + esc(it.name) +
        '</h4><ul class="tags">' + tg + "</ul></div><p>" + esc(it.text) + '</p><span class="arrow" aria-hidden="true">↗</span></a>';
    });
    var store = safeUrl(cfg.tiendaNube);
    html +=
      '<p class="foot-note">' + esc(p.footPrefix) +
      '<a href="' + esc(gh) + '" target="_blank" rel="noopener">' + esc(p.footGithub) + "</a>" + esc(p.footMiddle) +
      (store ? '<a href="' + esc(store) + '" target="_blank" rel="noopener">' + esc(p.footStore) + "</a>" : esc(p.footStore)) +
      esc(p.footSuffix) + "</p>";
    html += "</div></div></section>";

    /* franja + oportunidad */
    html += '<div class="band-big alt">' + track(t.marquee, "big") + "</div>";
    var o = t.opportunity;
    html +=
      '<section class="opp"><div class="wrap"><h2>' + esc(o.title) + '</h2><p class="p1">' + esc(o.p1) + '</p><p class="p2">' + esc(o.p2) + "</p>" +
      '<div class="facts">' + o.facts.map(function (f) {
        return '<div class="fact"><span class="mono">' + esc(f.label) + "</span><span>" + esc(f.value) + "</span></div>";
      }).join("") + "</div></div></section>";

    /* cierre */
    var c = t.contact;
    html +=
      '<section class="cta" id="contact"><div class="wrap">' +
      '<span class="pill">' + esc(c.pill) + "</span>" +
      "<h2>" + esc(c.title) + '</h2><p class="sub">' + esc(c.sub) + "</p>" +
      '<div class="mailrow"><a class="mail" href="mailto:' + esc(cfg.email) + '">' + esc(cfg.email) + "</a>" +
      '<button class="btn sm" id="copy" type="button">' + esc(c.copy) + "</button></div>" +
      '<div class="btns"><a class="btn fill" href="mailto:' + esc(cfg.email) + '">' + esc(c.send) + "</a>" +
      '<a class="btn" href="' + esc(li) + '" target="_blank" rel="noopener">' + ICON_LI + esc(cfg.linkedinLabel || "LinkedIn") + "</a>" +
      '<a class="btn" href="' + esc(gh) + '" target="_blank" rel="noopener">' + ICON_GH + esc(cfg.githubLabel || "GitHub") + "</a></div>" +
      "</div></section>";

    html +=
      '<footer><div class="wrap foot mono"><span>' + esc(t.footer.left) + "</span><span>" + esc(t.footer.right) + "</span></div></footer>";

    var sy = window.scrollY;
    main.innerHTML = html;
    window.scrollTo(0, sy);   // se queda exactamente donde estaba
    bindCopy(c);
    watchSections();
    startRot(t.say.words);
  }

  /* ---------- frase que rota ---------- */
  function startRot(words) {
    if (rotTimer) { clearInterval(rotTimer); rotTimer = null; }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || words.length < 2) return;
    var i = 0;
    rotTimer = setInterval(function () {
      var r = document.getElementById("rot");
      if (!r) return;
      r.classList.add("out");
      setTimeout(function () {
        i = (i + 1) % words.length;
        r.textContent = words[i];
        r.classList.remove("out");
      }, 360);
    }, 2800);
  }

  /* ---------- copiar email ---------- */
  function bindCopy(c) {
    var btn = document.getElementById("copy");
    if (!btn) return;
    btn.addEventListener("click", function () {
      function done() {
        btn.textContent = c.copied;
        setTimeout(function () { btn.textContent = c.copy; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cfg.email).then(done, fallback);
      } else fallback();
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = cfg.email; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }

  /* ---------- resalta la sección activa en el menú ---------- */
  function watchSections() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        nav.querySelectorAll("a").forEach(function (a) {
          a.classList.toggle("on", a.getAttribute("data-id") === en.target.id);
        });
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    IDS.forEach(function (id) {
      var el = document.getElementById(id); if (el) observer.observe(el);
    });
  }

  /* ---------- cambio de idioma: mismo sitio, misma pestaña ---------- */
  langBtn.addEventListener("click", function () {
    lang = lang === "en" ? "es" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    if (window.history && history.replaceState) {
      var u = new URL(location.href); u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
    render();
  });

  render();
})();

const PROJECTS = {
  "1": {
    title: "Shax Store",
    type: "linked",
    tagline: "Short description of your first project.",
    languages: ["My Sql", "Html", "Css", "JavaScript", "GitIgnore" ,"AutoBot"],
    image: "Screenshot 2026-08-23 235605.png",
    link: "https://shaxstore.fit",
    code: "",
    body: [
      "Write a longer introduction to your first project here. Explain what it does, the problem it solves, and why you built it.",
      "Add more paragraphs as needed — features you are proud of, challenges you solved, and what you learned while building it."
    ],
    features: [],
    // TODO: replace these with real screenshots of the site / admin panel + your own captions
    previews: [
      { image: "Screenshot 2026-08-23 235605.png", desc: "Storefront overview — the public shop page." },
      { image: "project1.png", desc: "Admin panel preview — manage products and orders." }
    ]
  }
};

function initImageFallbacks() {
  document.querySelectorAll("#avatar, .thumb img, .detail-thumb img").forEach((img) => {
    const applyFallback = () => {
      if (img.id === "avatar") {
        const fallback = document.createElement("div");
        fallback.className = "avatar-fallback";
        fallback.textContent = "H";
        img.replaceWith(fallback);
      } else {
        const parent = img.closest(".thumb, .detail-thumb");
        if (parent) {
          parent.style.background =
            "linear-gradient(135deg, #1a1c22 0%, #0d0e12 60%), repeating-linear-gradient(45deg, rgba(199,204,214,.07) 0 12px, transparent 12px 24px)";
          img.remove();
        }
      }
    };

    if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    } else {
      img.addEventListener("error", applyFallback);
    }
  });
}

function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "1";
  const data = PROJECTS[id] || PROJECTS["1"];

  document.title = `${data.title} | Harzheen Hawzheen`;

  const title = document.getElementById("project-title");
  const tagline = document.getElementById("project-tagline");
  const image = document.getElementById("project-image");
  const tags = document.getElementById("project-tags");
  const body = document.getElementById("project-body");
  const features = document.getElementById("project-features");
  const link = document.getElementById("project-link");
  const code = document.getElementById("project-code");

  if (title) title.textContent = data.title;
  if (tagline) tagline.textContent = data.tagline || "";
  if (image) {
    image.src = data.image;
    image.alt = `${data.title} preview`;
  }

  if (tags) {
    (data.languages || []).forEach((lang) => {
      const el = document.createElement("span");
      el.className = "tag";
      el.textContent = lang;
      tags.appendChild(el);
    });
  }

  if (body) {
    (data.body || []).forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      body.appendChild(p);
    });
  }

  if (features) {
    if ((data.features || []).length > 0) {
      const heading = document.createElement("h2");
      heading.className = "features-title";
      heading.textContent = "Key Features";
      features.appendChild(heading);

      const list = document.createElement("ul");
      list.className = "feature-list";
      data.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        list.appendChild(li);
      });
      features.appendChild(list);
    } else {
      features.remove();
    }
  }

  // previews gallery — each screenshot with its own description
  const previewsWrap = document.getElementById("project-previews");
  if (previewsWrap) {
    const previewSection = document.getElementById("preview-section");
    const previews = Array.isArray(data.previews) ? data.previews : [];

    if (!previews.length) {
      if (previewSection) previewSection.style.display = "none";
    } else {
      previews.forEach((pv, index) => {
        const card = document.createElement("figure");
        card.className = "preview-card reveal";

        const img = document.createElement("img");
        img.src = pv.image || "";
        img.alt = pv.desc || `${data.title} preview ${index + 1}`;
        img.loading = "lazy";
        img.addEventListener("error", () => {
          img.remove();
          card.classList.add("preview-fallback");
        });

        const caption = document.createElement("figcaption");
        caption.textContent = pv.desc || "";

        card.appendChild(img);
        card.appendChild(caption);
        previewsWrap.appendChild(card);
      });
    }
  }

  if (link) {
    const hasLink = data.type === "linked" && !!data.link;
    if (hasLink) {
      link.href = data.link;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.style.display = "none";
    }
  }

  if (code) {
    if (data.code) {
      code.href = data.code;
      code.target = "_blank";
      code.rel = "noopener";
    } else {
      code.style.display = "none";
    }
  }
}

const LINK_STORE = {
  adobe: {
    name: "Adobe",
    tagline: "Official Adobe apps and downloads.",
    logo: "OIP.webp",
    items: [
      { name: "Photoshop", url: "https://t.me/+UOVYAqBxOCUyMDFi", desc: "Image editing and digital art.", logo: "Screenshot 2026-08-24 032135.png" },
           { name: "AutoCad", url: "https://t.me/+UOVYAqBxOCUyMDFi", desc: "Image editing and digital art.", logo: "Screenshot 2026-08-24 032634.png" },
      { name: "Premiere Pro", url: "https://t.me/+UOVYAqBxOCUyMDFi", desc: "Professional video editing.", logo: "Screenshot 2026-08-24 032129.png" },
      { name: "After Effects", url: "https://t.me/+UOVYAqBxOCUyMDFi", desc: "Motion graphics and visual effects.", logo: "Screenshot 2026-08-24 032125.png" }
    ]
  },
  microsoft: {
    name: "Microsoft Office",
    tagline: "Essential Microsoft software.",
    logo: "Screenshot 2026-08-24 033224.png",
    items: [
      { name: "Microsoft Office", url: "https://drive.google.com/file/d/1G4Mtc84n_sx5e5xZs-rzcy2w-5HnLVOC/view", desc: "Official Windows 11 downloads.", logo: "Screenshot 2026-08-24 033224.png" },
     

    ]
  },
  blackops: {
    name: "Black Ops",
    tagline: "Call of Duty Black Ops links.",
    logo: "Screenshot 2026-08-24 032859.png",
    items: [
      { name: "Black Ops 1", url: "https://web.archive.org/web/20220607040514/https://plutonium.pw/t5_dlcs.torrent", desc: "Official game page.", logo: "Screenshot 2026-08-24 032248.png" },
      { name: "Black Ops 2", url: "https://web.archive.org/web/20220607040615/https://plutonium.pw/t6_dlcs.torrent", desc: "Official game page.", logo: "Screenshot 2026-08-24 032309.png" },
      { name: "Black Ops 3", url: "https://cbservers.xyz", desc: "Official game page", logo: "Screenshot 2026-08-24 035610.png" },
      { name: "Plutonium", url: "https://plutonium.pw", desc: "Official game page.", logo: "Screenshot 2026-08-24 032337.png" }
    ]
  },
  torrent: {
    name: "Torrent",
    tagline: "Everything you need to download torrents.",
    logo: "Screenshot 2026-08-24 034507.png",
    items: [
      { name: "qBittorrent", url: "https://www.qbittorrent.org", desc: "Free torrent client — opens the torrents above." },
      

    ]
  },
  steamtools: {
    name: "Steam Tools",
    tagline: "Prices, sales and stats for Steam games.",
    logo: "Screenshot 2026-08-24 035032.png",
    items: [
      { name: "SteamDB", url: "https://steamdb.info", desc: "Track prices, sales and player counts.",   logo: "Screenshot 2026-08-24 035032.png", }
    ]
  },
  topaz: {
    name: "Topaz AI",
    tagline: "AI photo and video enhancement.",
    logo: "Screenshot 2026-08-24 032201.png",
    items: [
      { name: "Topaz Video Upscaler AI", url: "https://t.me/+UOVYAqBxOCUyMDFi", desc: "AI video upscaling.", logo: "Screenshot 2026-08-24 032201.png" },
  
    ]
  }
};

function buildLogoTile(logoPath, label, className) {
  const tile = document.createElement("span");
  tile.className = className;
  if (logoPath) {
    const img = document.createElement("img");
    img.src = logoPath;
    img.alt = `${label} logo`;
    img.addEventListener("error", () => {
      img.remove();
      tile.classList.add("logo-fallback");
      tile.textContent = label.charAt(0).toUpperCase();
    });
    tile.appendChild(img);
  } else {
    tile.classList.add("logo-fallback");
    tile.textContent = label.charAt(0).toUpperCase();
  }
  return tile;
}

function renderStoreButtons() {
  const grid = document.getElementById("link-store");
  if (!grid) return;

  Object.keys(LINK_STORE).forEach((key) => {
    const cat = LINK_STORE[key];

    const btn = document.createElement("a");
    btn.className = "store-btn";
    btn.href = `links.html?cat=${key}`;
    btn.target = "_blank";
    btn.rel = "noopener";

    btn.appendChild(buildLogoTile(cat.logo, cat.name, "store-logo"));

    const text = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = cat.name;
    const count = document.createElement("p");
    count.className = "store-count";
    count.textContent = `${cat.items.length} links`;
    text.appendChild(h3);
    text.appendChild(count);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = "&#8599;";

    btn.appendChild(text);
    btn.appendChild(arrow);
    grid.appendChild(btn);
  });
}

function renderLinksPage() {
  const list = document.getElementById("links-list");
  if (!list) return;

  const keys = Object.keys(LINK_STORE);
  const key = new URLSearchParams(window.location.search).get("cat") || keys[0];
  const cat = LINK_STORE[key] || LINK_STORE[keys[0]];

  document.title = `${cat.name} Links | Harzheen Hawzheen`;

  const logoSlot = document.getElementById("category-logo");
  const nameEl = document.getElementById("category-name");
  const taglineEl = document.getElementById("category-tagline");

  if (logoSlot) logoSlot.replaceWith(buildLogoTile(cat.logo, cat.name, "cat-logo"));
  if (nameEl) nameEl.textContent = `${cat.name} Links`;
  if (taglineEl) taglineEl.textContent = cat.tagline || "";

  cat.items.forEach((item) => {
    const card = document.createElement("a");
    card.className = "link-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener";

    card.appendChild(buildLogoTile(item.logo, item.name, "card-logo"));

    const text = document.createElement("div");
    text.className = "card-text";
    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    const p = document.createElement("p");
    p.textContent = item.desc || "";
    text.appendChild(h3);
    text.appendChild(p);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = "&#8599;";

    card.appendChild(text);
    card.appendChild(arrow);
    list.appendChild(card);
  });
}

function initPointerEffects() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduced) return;

  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);

  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 3;
  let x = tx;
  let y = ty;
  let running = true;

  window.addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(loop);
  });

  function loop() {
    if (!running) return;
    x += (tx - x) * 0.07;
    y += (ty - y) * 0.07;
    glow.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  window.addEventListener("pointerdown", (e) => {
    const ripple = document.createElement("span");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, { passive: true });

  document.querySelectorAll(".project, .useful-card, .link-card, .store-btn").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
      const rx = (0.5 - py) * 5;
      const ry = (px - 0.5) * 7;
      card.style.transition = "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease";
      card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-3px)`;
    }, { passive: true });

    card.addEventListener("pointerleave", () => {
      card.style.transition = "";
      card.style.transform = "";
    }, { passive: true });
  });
}

function renderProjectCards() {
  const container = document.getElementById("project-cards");
  if (!container) return;

  Object.keys(PROJECTS).forEach((id) => {
    const data = PROJECTS[id];

    const card = document.createElement("a");
    card.className = "project";
    card.href = `project.html?id=${id}`;

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    const img = document.createElement("img");
    img.src = data.image;
    img.alt = `${data.title} preview`;
    thumb.appendChild(img);

    const text = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = data.title;
    const p = document.createElement("p");
    p.textContent = data.tagline || "";
    text.appendChild(h3);
    text.appendChild(p);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = "&#8599;";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.appendChild(text);
    meta.appendChild(arrow);

    card.appendChild(thumb);
    card.appendChild(meta);
    container.appendChild(card);
  });
}

const EXPERIENCE = [
  {
    period: "2025 — Present",
    title: "Software Engineering Student",
    place: "Salahaddin University \u00B7 Stage 2",
    desc: "Studying Software Engineering at the College of Engineering — Java, databases, data structures and secure software design.",
    ku: {
      title: "قوتابی ئەندازیاری سۆفتوێر",
      place: "زانکۆی صلاحالدین · قۆناغی دووەم",
      desc: "خوێندنی ئەندازیاری سۆفتوێر لە کۆلێژی ئەندازە — جاڤا، داتابەیس، داتا ستراکچەر و دیزاینی سۆفتوێری پارێزراو."
    }
  },
  {
    period: "2024 — Present",
    title: "Freelance Developer & Graphic Designer",
    place: "Self-employed",
    desc: "Building very secure full-stack websites with AI-powered workflows — plus graphic design, video editing and upscaling with Adobe Premiere Pro, After Effects and Topaz.",
    ku: {
      title: "گەشەپێدەر و دیزاینەری گرافیکی ئازاد",
      place: "خۆبەکار",
      desc: "دروستکردنی وێبسایتی فول-ستاکی زۆر پارێزراو بە یارمەتی AI — لەگەڵ دیزاینی گرافیک و مۆنتاژ و بەرزکردنەوەی کوالیتی ڤیدیۆ بە Premiere و After Effects و Topaz."
    }
  },
  {
    period: "2023 — 2024",
    title: "Learning & Building",
    place: "Self-taught developer",
    desc: "Deep-dived into web development and programming fundamentals — HTML, CSS, Java and MySQL — shipping personal projects along the way.",
    ku: {
      title: "فێربوون و دروستکردن",
      place: "خوفێرکاریان",
      desc: "فێربوونی قووڵی گەشەپێدانی وێب و بنەماکانی پرۆگرامسازی — HTML و CSS و جاڤا و MySQL — لەگەڵ دروستکردنی پرۆژەی کەسی."
    }
  }
];

/* ============================================================
   LANGUAGE TOGGLE (EN / Kurdish-Sorani)
   - Static texts carry data-i18n="key" in the HTML files
   - Dynamic data uses `ku` sub-objects (EXPERIENCE above)
   - Choice is saved in localStorage ("hh-lang")
   - Kurdish switches the page to RTL automatically
   ============================================================ */
const langState = { lang: "en" };
try {
  const saved = localStorage.getItem("hh-lang");
  if (saved === "ku" || saved === "en") langState.lang = saved;
} catch (e) { /* private mode etc. */ }

const I18N = {
  en: {
    typedWords: ["Full-Stack Web Developer", "AI-Powered App Builder", "Graphic Designer"],
    badge: "\u2726 Available for work",
    titleOne: "Software",
    titleTwo: "Developer",
    bio: "Software engineering student building fast, very secure full-stack web apps with AI-powered development \u2014 plus graphic design and video editing on the side.",
    hintExplore: "\u2193 explore my work below",
    hintOpen: "\u2198 open to full-time & freelance opportunities",
    scrollLbl: "Scroll",
    showcaseTitle: "Portfolio Showcase",
    showcaseSub: "Explore my journey through projects and technical expertise.",
    tabProjects: "Projects",
    tabStack: "Tech Stack",
    tabCerts: "Certificates",
    previewsTitle: "Project Previews",
    certTag: "Certificate",
    langTag: "Language",
    certEnglishName: "English Language Certificate",
    certEnglishDesc: "Certified English language proficiency.",
    certHtmlName: "HTML Certification",
    certHtmlDesc: "Certified in HTML fundamentals.",
    certCssName: "CSS Certification",
    certCssDesc: "Certified in CSS fundamentals.",
    certJavaName: "Java",
    certJavaDesc: "Studying core Java \u2014 OOP, logic and application building.",
    certJsName: "JavaScript",
    certJsDesc: "Learning modern JavaScript \u2014 DOM, ES6+ and interactive web.",
    certPremiereName: "Adobe Premiere Pro",
    certPremiereDesc: "Studying professional video editing \u2014 cutting, color and sound.",
    certAeName: "After Effects",
    certAeDesc: "Learning motion graphics and visual effects.",
    certProgress: "In Progress",
    langKurdishName: "Kurdish \u2014 Native Speaker",
    langKurdishDesc: "Mother tongue \u2014 fully fluent.",
    toolsTitle: "Tools I use daily",
    chipAI: "AI-Powered Development",
    chipKurdish: "Kurdish",
    
    expTitle: "Experience",
    expSub: "My journey so far \u2014 where I've been and what I've been building.",
    expYears: "Years of Experience",
    contactTitle: "Contact Me",
    contactSub: "Have something in mind? Send a message and let's connect.",
    connectTitle: "Connect With Me",
    connectSub: "Find me on my platforms \u2014 I'm most active on Instagram.",
    ulTitle: "Useful Links & Tools",
    ulSub: "My tools, resources and link store",
    tiktokProfile: "TikTok Profile",
    sayHello: "Say hello",
    copyright: "\u00A9 2026 Harzheen Hawzheen \u2014 All rights reserved.",
    backHome: "Home",
    backUseful: "Useful Content",
    usefulTitle: "Useful Content",
    usefulSub: "resources \u00B7 tools \u00B7 links worth sharing",
    linkStore: "Link Store",
    resources: "Resources",
    mdnDesc: "The best reference for HTML, CSS and JavaScript.",
    mcDesc: "Minecraft website \u2014 download, play and build."
  },
  ku: {
    typedWords: ["گەشەپێدەری وێب", "دروستکەری بەرنامە بە AI", "دیزاینەری گرافیک"],
    badge: "\u2726 ئامادەم بۆ کار",
    titleOne: "گەشەپێدەری",
    titleTwo: "سۆفتوێر",
    bio: "قوتابی ئەندازیاری سۆفتوێر کە بەرنامەی فول-ستاکی پارێزراو دروست دەکات بە یارمەتی AI — لەگەڵ دیزاینی گرافیک و مۆنتاژی ڤیدیۆ.",
    hintExplore: "\u2193 سەیری کارەکانم بکە لە خوارەوە",
    hintOpen: "\u2198 ئامادەم بۆ کاری فولتایم",
    scrollLbl: "بۆ خوارەوە",
    showcaseTitle: "پیشاندانی کارەکانم",
    showcaseSub: "سەیری گەشتەکەم بکە بەپێی پرۆژە و شارەزاییەکانم.",
    tabProjects: "پرۆژەکان",
    tabStack: "تەکنەلۆژیا",
    tabCerts: "بڕوانامەکان",
    previewsTitle: "تایبەتمەندیەکان",
    certTag: "بڕوانامە",
    langTag: "زمان",
    certEnglishName: "بڕوانامەی زمانی ئینگلیزی",
    certEnglishDesc: "شارەزایی زمانی ئینگلیزی",
    certHtmlName: "بڕوانامەی HTML",
    certHtmlDesc: "شارەزا لە بنەماکانی HTML.",
    certCssName: "بڕوانامەی CSS",
    certCssDesc: "شارەزا لە بنەماکانی CSS.",
    langKurdishName: "کوردی — زمانی دایک",
    langKurdishDesc: "زمانی دایکە — تەواو شارەزا.",
    certJavaName: "جاڤا",
    certJavaDesc: "فێربوونی جاڤا — بنەماکانی OOP و لۆجیک و دروستکردنی بەرنامە.",
    certJsName: "JavaScript",
    certJsDesc: "فێربوونی JavaScript — DOM و ES6 و وێبی کارلێکدار.",
    certPremiereName: "ئەدۆبی پریمێر پرۆ",
    certPremiereDesc: "فێربوونی مۆنتاژی پرۆفیشناڵ — برین و ڕەنگ و دەنگ.",
    certAeName: "ئەفتر ئیفێکتس",
    certAeDesc: "فێربوونی موشن گرافیک و ئیفێکتی بینراو.",
    certProgress: "لە بەرەوپێشچووندایە",
    toolsTitle: "ئامرازەکانی ڕۆژانەم",
    expTitle: "ئەزموون",
    expSub: "گەشتەکەم تا ئێستا — کێ بووم و چی دروستکردووە.",
    expYears: "ساڵ ئەزموون",
    contactTitle: "پەیوەندیم پێوە بکە",
    contactSub: "پلانێکت هەیە؟ پەیوەندیم پێوە بکە با قسەمان بکەین.",
    connectTitle: "پەیوەندیم پێوە بکە",
    connectSub: " پلاتفۆرمەکان — زۆرترین چالاکیم لە ئینستاگرامە.",
    ulTitle: "لینک و ئامرازە بەسوودەکانم",
    ulSub: "ئامراز و سەرچاوە و فرۆشگای لینکەکەم",
    tiktokProfile: "پرۆفایلی تیکتۆک",
    sayHello: "سڵاوێک بکە",
    copyright: "\u00A9 ٢٠٢٦ هەرژین هاوژین — هەموو مافەکان پارێزراون.",
    backHome: "سەرەتا",
    backUseful: "ناوەڕۆکی بەسوود",
    usefulTitle: "ناوەڕۆکی بەسوود",
    usefulSub: "سەرچاوە · ئامراز · لینکی بەسوود",
    linkStore: "فرۆشگای لینک",
    resources: "سەرچاوەکان",
    mdnDesc: "باشترین سەرچاوە بۆ HTML و CSS و JavaScript.",
    mcDesc: "ماڵپەڕی ماینکرافت — داگرتن و یاریکردن و بیناسازی."
  }
};

const FLAG_SVG = {
  en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#012169"/><path d="M0 0L60 36M60 0L0 36" stroke="#fff" stroke-width="7"/><path d="M0 0L60 36M60 0L0 36" stroke="#C8102E" stroke-width="4"/><path d="M30 0V36M0 18H60" stroke="#fff" stroke-width="12"/><path d="M30 0V36M0 18H60" stroke="#C8102E" stroke-width="7"/></svg>',
  ku: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 14" aria-hidden="true"><rect width="21" height="14" fill="#fff"/><rect width="21" height="4.67" fill="#EB2E2E"/><rect y="9.33" width="21" height="4.67" fill="#278E43"/><circle cx="10.5" cy="7" r="3.05" fill="none" stroke="#F9C916" stroke-width=".8" stroke-dasharray=".5 .762"/><circle cx="10.5" cy="7" r="2.05" fill="#F9C916"/></svg>'
};

function applyLang(lang) {
  langState.lang = lang;
  try { localStorage.setItem("hh-lang", lang); } catch (e) { /* ignore */ }

  const dict = I18N[lang];
  document.documentElement.lang = lang === "ku" ? "ckb" : "en";
  document.documentElement.dir = lang === "ku" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  // button shows the language you would switch TO
  const other = lang === "ku" ? "en" : "ku";
  const flag = document.getElementById("lang-flag");
  const code = document.getElementById("lang-code");
  if (flag) flag.innerHTML = FLAG_SVG[other];
  if (code) code.textContent = other.toUpperCase();
}

function restartExperience() {
  const container = document.getElementById("timeline");
  if (!container) return;
  container.innerHTML = "";
  renderExperience();
  initReveal();
}

function initLangToggle() {
  const btn = document.getElementById("lang-btn");
  applyLang(langState.lang);
  if (!btn) return;
  btn.addEventListener("click", () => {
    applyLang(langState.lang === "ku" ? "en" : "ku");
    restartExperience();
    if (typeof typeRestart === "function") typeRestart();
  });
}

let typeRestart = null;

function initTypeEffect() {
  const el = document.getElementById("typed");
  if (!el) return;

  const words = () => I18N[langState.lang].typedWords;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let wordIndex = 0;
  let charCount = 0;
  let deleting = false;
  let timer = null;

  function stop() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function tick() {
    const list = words();
    const word = list[wordIndex % list.length];
    charCount += deleting ? -1 : 1;
    el.textContent = word.slice(0, charCount);

    let delay = deleting ? 45 : 85;
    if (!deleting && charCount === word.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charCount === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % list.length;
      delay = 350;
    }
    timer = setTimeout(tick, delay);
  }

  if (reduced) {
    el.textContent = words()[0] || "";
    typeRestart = () => { el.textContent = words()[0] || ""; };
    return;
  }

  stop();
  wordIndex = 0;
  charCount = 0;
  deleting = false;
  tick();

  typeRestart = () => {
    stop();
    wordIndex = 0;
    charCount = 0;
    deleting = false;
    tick();
  };
}

function initReveal() {
  const els = document.querySelectorAll(".reveal, .reveal-stagger, .timeline");
  if (!els.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  els.forEach((el) => observer.observe(el));
}

function renderExperience() {
  const container = document.getElementById("timeline");
  if (!container) return;

  EXPERIENCE.forEach((entry) => {
    const job = langState.lang === "ku" && entry.ku ? entry.ku : entry;
    const item = document.createElement("article");
    item.className = "t-item reveal";

    const period = document.createElement("p");
    period.className = "t-period";
    period.textContent = job.period;

    const title = document.createElement("h3");
    title.textContent = job.title;

    const place = document.createElement("span");
    place.className = "t-place";
    place.textContent = job.place || "";

    const desc = document.createElement("p");
    desc.className = "t-desc";
    desc.textContent = job.desc || "";

    item.appendChild(period);
    item.appendChild(title);
    if (job.place) item.appendChild(place);
    item.appendChild(desc);
    container.appendChild(item);
  });
}

function initParallax() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) return;

  const glows = Array.from(document.querySelectorAll(".backdrop .orb"));
  if (!glows.length) return;

  const factors = [-0.05, 0.04, -0.035, 0.03];
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      glows.forEach((glow, i) => {
        glow.style.marginTop = `${y * factors[i % factors.length]}px`;
      });
      ticking = false;
    });
  }, { passive: true });
}

/* decorative hero code editor — types a snippet on loop */
function initCodeWindow() {
  const codeEl = document.getElementById("cw-code");
  if (!codeEl) return;

  const LINES = [
    [["// harzheen.js \u2014 secure \u00B7 full-stack \u00B7 AI-powered", "cm"]],
    [["const ", "kw"], ["developer", "var"], [" = {", "pl"]],
    [["  name: ", "pl"], ["'Harzheen Hawzheen'", "str"], [",", "pl"]],
    [["  role: ", "pl"], ["'Software Developer'", "str"], [",", "pl"]],
    [["  stack: [", "pl"], ["'Java'", "str"], [", ", "pl"], ["'JavaScript'", "str"], [", ", "pl"], ["'MySQL'", "str"], ["],", "pl"]],
    [["  aiPowered: ", "pl"], ["true", "num"], [",", "pl"]],
    [["  secureByDefault: ", "pl"], ["true", "num"], [",", "pl"]],
    [["};", "pl"]],
    [["while", "kw"], [" (", "pl"], ["alive", "var"], [") {", "pl"]],
    [["  build", "fn"], ["(", "pl"], ["ideas", "var"], [");", "pl"]],
    [["}", "pl"]]
  ];

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderAll() {
    codeEl.innerHTML = "";
    LINES.forEach((tokens, lineIndex) => {
      tokens.forEach(([text, cls]) => {
        const span = document.createElement("span");
        span.className = cls;
        span.textContent = text;
        codeEl.appendChild(span);
      });
      if (lineIndex < LINES.length - 1) {
        codeEl.appendChild(document.createTextNode("\n"));
      }
    });
  }

  if (reduced) { renderAll(); return; }

  let li = 0, ti = 0, ch = 0, timer = null;

  function tick() {
    if (document.hidden) { timer = setTimeout(tick, 300); return; }

    const tokens = LINES[li];

    if (ti >= tokens.length) {
      if (li >= LINES.length - 1) {
        timer = setTimeout(() => { codeEl.innerHTML = ""; li = 0; ti = 0; ch = 0; tick(); }, 4200);
        return;
      }
      codeEl.appendChild(document.createTextNode("\n"));
      li += 1; ti = 0; ch = 0;
      timer = setTimeout(tick, 80);
      return;
    }

    const [text, cls] = tokens[ti];
    if (ch === 0) {
      const span = document.createElement("span");
      span.className = cls;
      codeEl.appendChild(span);
    }
    ch += 1;
    codeEl.lastChild.textContent = text.slice(0, ch);
    if (ch >= text.length) { ti += 1; ch = 0; }
    timer = setTimeout(tick, 16 + Math.random() * 36);
  }

  timer = setTimeout(tick, 900);
}

function initFontLoader() {
  const LOCAL =
    /^(serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-sans-serif|ui-serif|ui-monospace|arial|helvetica|georgia|times new roman|courier new|verdana|tahoma|trebuchet ms|impact)$/i;
  const styles = getComputedStyle(document.documentElement);
  ["--font-body", "--font-heading", "--font-mono", "--font-display", "--font-code"].forEach((variable) => {
    const name = styles
      .getPropertyValue(variable)
      .split(",")[0]
      .replace(/["']/g, "")
      .trim();
    if (!name || LOCAL.test(name)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=" +
      name.replace(/ /g, "+") +
      ":wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
  });
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      const panel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (panel) panel.classList.add("active");
    });
  });
}

function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dots = [];
  let rafId = null;
  let running = false;
  let inView = true;
  const mouse = { x: -9999, y: -9999 };
  const LINK_DIST = 110;
  const MOUSE_DIST = 130;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(90, Math.max(30, Math.floor((width * height) / 16000)));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.6
    }));
  }

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += d.vx;
      d.y += d.vy;

      const mdx = d.x - mouse.x;
      const mdy = d.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < MOUSE_DIST && mdist > 0.01) {
        const force = ((MOUSE_DIST - mdist) / MOUSE_DIST) * 0.4;
        d.x += (mdx / mdist) * force;
        d.y += (mdy / mdist) * force;
      }

      if (d.x < -12) d.x = width + 12;
      else if (d.x > width + 12) d.x = -12;
      if (d.y < -12) d.y = height + 12;
      else if (d.y > height + 12) d.y = -12;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(216, 218, 224, 0.55)";
      ctx.fill();

      for (let j = i + 1; j < dots.length; j++) {
        const o = dots[j];
        const dx = d.x - o.x;
        const dy = d.y - o.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < LINK_DIST * LINK_DIST) {
          const alpha = (1 - Math.sqrt(dist2) / LINK_DIST) * 0.16;
          ctx.strokeStyle = `rgba(212, 216, 224, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(o.x, o.y);
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (!running) {
      running = true;
      rafId = requestAnimationFrame(step);
    }
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  window.addEventListener("resize", resize);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else if (inView) start();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      if (inView && !document.hidden) start();
      else stop();
    }, { threshold: 0 }).observe(canvas);
  }

  resize();
  start();
}

// --- boot (kept at the very bottom so every const above is initialized first) ---
initLangToggle();
renderProjectCards();
renderExperience();
if (document.getElementById("project-title")) {
  renderProject();
}
renderStoreButtons();
if (document.getElementById("links-list")) {
  renderLinksPage();
}

initImageFallbacks();
initPointerEffects();
initFontLoader();
initTypeEffect();
initReveal();
initParallax();
  initTabs();
  initParticles();
  initCodeWindow();

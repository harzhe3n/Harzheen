const PROJECTS = {
  "1": {
    title: "Shax Store",
    type: "linked",
    badge: "Founder",                       // small label on the project card
    role: "Founder & Lead Developer",       // shown on project.html
    tagline: "An online store I founded, designed and built end-to-end — storefront, admin panel and automation.",
    languages: ["MySQL", "HTML", "CSS", "JavaScript", "Git", "AutoBot"],
    image: "Screenshot 2026-09-01 124259.png",
    link: "https://shaxstore.fit",
    code: "",
    // TODO: check these texts and adjust any detail that isn't accurate
    body: [
      "Shax Store is my own e-commerce product. I founded it, decided what it needed to be, and led it from the first idea to a live store at shaxstore.fit — owning the product decisions, design, development and launch.",
      "Technically it's a full-stack build: a fast, responsive storefront for customers, a private admin panel to manage products and orders, a MySQL database behind it, and an automation bot that takes repetitive work off the table. Security was part of the design from day one, not an afterthought."
    ],
    features: [
      "Founded and led the product end-to-end — vision, design, build and launch",
      "Responsive storefront that works on mobile and desktop",
      "Admin panel to manage products and orders",
      "MySQL database with a security-first setup",
      "AutoBot automation for repetitive tasks"
    ],
    // TODO: replace these with real screenshots of the site / admin panel + your own captions
    previews: [
      { 
        image: "Screenshot 2026-09-01 124317.png", 
        desc: "Storefront overview — the public shop page." 
      },
      { 
        image: "Screenshot 2026-09-01 124348.png", 
        desc: "Admin panel preview — manage products and orders." 
      }
    ],
    // Mobile desktop previews for project
    mobilePreviews: [
      {
        image: "mobile-preview-1.png",
        desc: "Mobile view of store homepage"
      },
      {
        image: "mobile-preview-2.png",
        desc: "Mobile product listing page"
      },
      {
        image: "mobile-preview-3.png", 
        desc: "Mobile product detail view"
      },
      {
        image: "mobile-preview-4.png",
        desc: "Mobile cart functionality"
      },
      {
        image: "mobile-preview-5.png",
        desc: "Mobile checkout process"
      },
      {
        image: "mobile-preview-6.png",
        desc: "Mobile user profile section"
      },
      {
        image: "mobile-preview-7.png",
        desc: "Mobile category browsing"
      }
    ],
    desktopPreviews: [
      {
        image: "desktop-preview-1.png",
        desc: "Desktop store homepage"
      },
      {
        image: "desktop-preview-2.png",
        desc: "Desktop product listing grid"
      },
      {
        image: "desktop-preview-3.png",
        desc: "Desktop product detail view" 
      },
      {
        image: "desktop-preview-4.png",
        desc: "Desktop admin dashboard"
      },
      {
        image: "desktop-preview-5.png",
        desc: "Desktop order management"
      },
      {
        image: "desktop-preview-6.png",
        desc: "Desktop user account settings"
      },
      {
        image: "desktop-preview-7.png",
        desc: "Desktop category filter sidebar"
      }
    ]
  },
  "2": {
    title: "XBARBER SHOP",
    type: "case",                           // desktop app — no live link
    badge: "Founder",
    role: "Founder & Lead Developer",
    tagline: "An offline desktop app for barber shops — POS, appointments, inventory and reports in one place.",
    languages: ["Electron", "Node.js", "JavaScript", "HTML", "CSS", "SQLite"],
    image: "xbarber-dashboard.png",
    link: "",
    code: "",
    // TODO: check these texts and adjust any detail that isn't accurate
    body: [
      "XBARBER SHOP is a desktop application I designed and built to run a barber shop from a single screen. It replaces paper books and scattered spreadsheets with one tool for the front desk: taking payments, booking appointments, tracking stock and seeing how the business is doing.",
      "It's built with Electron and Node.js on top of a local SQLite database, so it works completely offline — no internet needed at the shop. It ships as a Windows installer, supports English and Kurdish, and includes backup and restore so the shop's data is never at risk."
    ],
    features: [
      "POS cashier for services and products, with each order credited to a barber",
      "Appointment scheduling with status tracking",
      "Inventory with real-time stock updates and low-stock warnings",
      "Customer profiles with visit history",
      "Barber management — assign customers to one or more barbers",
      "Reports and analytics with charts",
      "Fully offline with a local SQLite database, plus backup & restore",
      "Windows installer (.exe) built with electron-builder",
      "English and Kurdish interface"
    ],
    previews: [
      { image: "xbarber-dashboard.png", desc: "Overview — live totals for customers, appointments, sales and stock." },
      { image: "xbarber-cashier.png", desc: "Cashier — build an order, pick the barber and take payment." }
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

  const meta = document.getElementById("project-meta");
  if (meta) {
    const rows = [
      ["Role", data.role],
      ["Status", data.type === "linked" && data.link ? "Live" : "Case study"],
      ["Stack", (data.languages || []).length ? `${data.languages.length} technologies` : ""]
    ];
    rows.forEach(([label, value]) => {
      if (!value) return;
      const item = document.createElement("div");
      item.className = "meta-item";
      const l = document.createElement("span");
      l.className = "meta-label";
      l.textContent = label;
      const v = document.createElement("strong");
      v.textContent = value;
      item.appendChild(l);
      item.appendChild(v);
      meta.appendChild(item);
    });
  }
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

  // previews gallery — tabs for Overview / Desktop / Mobile.
  // A screenshot that fails to load is removed; a view left empty loses its tab.
  const previewsWrap = document.getElementById("project-previews");
  if (previewsWrap) {
    const previewSection = document.getElementById("preview-section");
    const views = [
      ["overview", "Overview", data.previews],
      ["desktop", "Desktop View", data.desktopPreviews],
      ["mobile", "Mobile View", data.mobilePreviews]
    ].filter(([, , list]) => Array.isArray(list) && list.length);

    if (!views.length) {
      if (previewSection) previewSection.style.display = "none";
    } else {
      const toggle = document.createElement("div");
      toggle.className = "preview-toggle";
      const grids = {};
      const buttons = {};

      const show = (key) => {
        Object.keys(grids).forEach((k) => {
          grids[k].hidden = k !== key;
          buttons[k].classList.toggle("active", k === key);
        });
      };

      const prune = (key) => {
        if (!grids[key] || grids[key].children.length) return;
        grids[key].remove();
        buttons[key].remove();
        delete grids[key];
        delete buttons[key];
        const left = Object.keys(grids);
        if (!left.length) {
          if (previewSection) previewSection.style.display = "none";
          return;
        }
        if (!left.some((k) => buttons[k].classList.contains("active"))) show(left[0]);
        toggle.hidden = left.length < 2;
      };

      views.forEach(([key, label, list]) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "preview-btn";
        btn.textContent = label;
        btn.addEventListener("click", () => show(key));
        toggle.appendChild(btn);
        buttons[key] = btn;

        const grid = document.createElement("div");
        grid.className = "preview-grid";
        list.forEach((pv, index) => {
          const card = document.createElement("figure");
          card.className = "preview-card";
          const img = document.createElement("img");
          img.src = pv.image || "";
          img.alt = pv.desc || `${data.title} preview ${index + 1}`;
          // no lazy-loading: images in a hidden tab must still load (or fail) so empty tabs get removed
          img.addEventListener("error", () => { card.remove(); prune(key); });
          const caption = document.createElement("figcaption");
          caption.textContent = pv.desc || "";
          card.appendChild(img);
          card.appendChild(caption);
          grid.appendChild(card);
        });
        grids[key] = grid;
      });

      toggle.hidden = views.length < 2;
      previewsWrap.appendChild(toggle);
      Object.values(grids).forEach((g) => previewsWrap.appendChild(g));
      show(views[0][0]);
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

  // card tilt + spotlight — delegated, so cards re-rendered on language switch keep it
  const TILT = ".project, .useful-card, .link-card, .store-btn, .role-card, .step-card";
  let active = null;

  const release = (card) => {
    card.style.transition = "";
    card.style.transform = "";
  };

  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(TILT);
    if (active && active !== card) release(active);
    active = card;
    if (!card) return;
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

  document.addEventListener("pointerleave", () => {
    if (active) release(active);
    active = null;
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

    if (data.badge) {
      const badge = document.createElement("span");
      badge.className = "project-badge mono";
      badge.textContent = data.badge;
      thumb.appendChild(badge);
    }

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

/* Experience timeline — newest first. `tag` = small label on the card.
   `ku` holds the Kurdish version (period stays the same). */
const EXPERIENCE = [
  {
    period: "2025 — Present",
    tag: "Leadership",
    title: "Founder & Lead Developer",
    place: "Shax Store · shaxstore.fit",
    desc: "Founded and lead Shax Store — I own the product vision, the roadmap and every build decision. Designed and developed the storefront, admin panel, database and automation end-to-end, then launched it live.",
    ku: {
      tag: "سەرکردایەتی",
      title: "دامەزرێنەر و گەشەپێدەری سەرەکی",
      place: "Shax Store · shaxstore.fit",
      desc: "دامەزرێنەر و بەڕێوەبەری Shax Store — بەرپرسی ئامانج و نەخشەڕێگا و هەموو بڕیارێکی دروستکردنم. فرۆشگا و پانێڵی ئەدمین و داتابەیس و ئۆتۆمەیشنم لە سەرەتاوە تا کۆتایی دیزاین و دروست کرد و بڵاوم کردەوە."
    }
  },
  {
    period: "2024 — Present",
    tag: "AI · Web",
    title: "AI Prompt Engineer & Website Developer",
    place: "Freelance · Self-employed",
    desc: "Engineer prompts and AI workflows that cut development time and raise quality. Build fast, secure, responsive websites for clients — from the first conversation to deployment.",
    ku: {
      tag: "AI · وێب",
      title: "ئەندازیاری پرۆمپتی AI و گەشەپێدەری وێبسایت",
      place: "ئازاد · خۆبەکار",
      desc: "پرۆمپت و ڕێکخستنی AI دروست دەکەم کە کاتی گەشەپێدان کەم دەکەنەوە و کوالیتی بەرز دەکەنەوە. وێبسایتی خێرا و پارێزراو و گونجاو بۆ کڕیاران دروست دەکەم — لە یەکەم گفتوگۆوە تا بڵاوکردنەوە."
    }
  },
  {
    period: "2024 — Present",
    tag: "Creative",
    title: "Creative Lead — Design & Video",
    place: "Freelance",
    desc: "Give products a strong visual identity — graphic design, video editing and AI upscaling with Premiere Pro, After Effects and Topaz Video AI.",
    ku: {
      tag: "داهێنان",
      title: "سەرپەرشتیاری داهێنان — دیزاین و ڤیدیۆ",
      place: "ئازاد",
      desc: "ناسنامەیەکی بینراوی بەهێز بە بەرهەمەکان دەبەخشم — دیزاینی گرافیک، مۆنتاژی ڤیدیۆ و بەرزکردنەوەی کوالیتی بە AI لە Premiere Pro و After Effects و Topaz Video AI."
    }
  },
  {
    period: "2023 — 2024",
    tag: "Problem Solving",
    title: "Self-Taught Developer",
    place: "Independent",
    desc: "Taught myself to program by building — HTML, CSS, Java and MySQL — turning every roadblock into a solved problem and every idea into a working project.",
    ku: {
      tag: "چارەسەری کێشە",
      title: "گەشەپێدەری خۆفێرکراو",
      place: "سەربەخۆ",
      desc: "بە دروستکردن پرۆگرامسازیم فێری خۆم کرد — HTML و CSS و جاڤا و MySQL — هەموو بەربەستێکم کرد بە کێشەیەکی چارەسەرکراو و هەموو بیرۆکەیەک بە پرۆژەیەکی کارا."
    }
  },
  {
    period: "2025 — Present",
    tag: "Education",
    title: "Software Engineering",
    place: "Salahaddin University · College of Engineering",
    desc: "Formal engineering training alongside my own work — data structures, databases and secure software design.",
    ku: {
      tag: "خوێندن",
      title: "ئەندازیاری سۆفتوێر",
      place: "زانکۆی صلاحالدین · کۆلێژی ئەندازیاری",
      desc: "ڕاهێنانی ئەندازیاری فەرمی لەگەڵ کارەکانی خۆم — داتا ستراکچەر، داتابەیس و دیزاینی سۆفتوێری پارێزراو."
    }
  }
];

/* "What I do" cards — icon = key in ROLE_ICONS */
const ROLES = [
  {
    icon: "rocket",
    title: "Founder & Project Leader",
    desc: "I start and lead my own products — setting the vision, planning the roadmap and owning every decision until it ships. Founder of Shax Store.",
    points: ["Product vision & roadmap", "End-to-end ownership", "Launch, feedback & growth"],
    ku: {
      title: "دامەزرێنەر و سەرکردەی پرۆژە",
      desc: "بەرهەمەکانی خۆم دەست پێ دەکەم و بەڕێوەیان دەبەم — دیاریکردنی ئامانج، پلانی ڕێگا و بەرپرسیارێتی هەموو بڕیارێک تا بڵاو دەبێتەوە. دامەزرێنەری Shax Store.",
      points: ["ئامانج و نەخشەڕێگای بەرهەم", "بەرپرسیارێتی تەواو لە سەرەتاوە تا کۆتایی", "بڵاوکردنەوە، فیدباک و گەشەکردن"]
    }
  },
  {
    icon: "puzzle",
    title: "Problem Solver",
    desc: "I break complex problems into clear, logical steps and turn them into solutions that work — in code and in business.",
    points: ["Root-cause debugging", "Logical, clean architecture", "Fast, practical decisions"],
    ku: {
      title: "چارەسەرکەری کێشە",
      desc: "کێشە ئاڵۆزەکان دابەش دەکەم بۆ هەنگاوی ڕوون و لۆجیکی و دەیانکەم بە چارەسەری کارا — لە کۆد و لە بزنسدا.",
      points: ["دۆزینەوەی ڕەگی هەڵەکان", "پێکهاتەی لۆجیکی و پاک", "بڕیاری خێرا و کردەیی"]
    }
  },
  {
    icon: "spark",
    title: "AI Prompt Engineer",
    desc: "I design prompts and AI workflows that turn language models into reliable tools — faster development, smarter automation and better results.",
    points: ["Prompt design & iteration", "AI-powered development", "Bots & automation"],
    ku: {
      title: "ئەندازیاری پرۆمپتی AI",
      desc: "پرۆمپت و ڕێکخستنی AI دیزاین دەکەم کە مۆدێلەکانی زمان دەکەن بە ئامرازی متمانەپێکراو — گەشەپێدانی خێراتر، ئۆتۆمەیشنی زیرەکتر و ئەنجامی باشتر.",
      points: ["دیزاین و باشترکردنی پرۆمپت", "گەشەپێدان بە یارمەتی AI", "بۆت و ئۆتۆمەیشن"]
    }
  },
  {
    icon: "web",
    title: "Website Developer",
    desc: "I build fast, secure and responsive websites — full-stack, from the database to the last animation on screen.",
    points: ["Full-stack: HTML, CSS, JS, MySQL", "Security-first by default", "Responsive, animated UI"],
    ku: {
      title: "گەشەپێدەری وێبسایت",
      desc: "وێبسایتی خێرا و پارێزراو و گونجاو بۆ هەموو شاشەیەک دروست دەکەم — فول-ستاک، لە داتابەیسەوە تا دوایین ئەنیمەیشن لەسەر شاشە.",
      points: ["فول-ستاک: HTML و CSS و JS و MySQL", "پاراستن لە یەکەم هەنگاوەوە", "ڕووکاری گونجاو و ئەنیمەیشندار"]
    }
  }
];

const ROLE_ICONS = {
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  puzzle: '<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3h7z"/>',
  spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  web: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="m9 8-2 2 2 2M15 8l2 2-2 2"/>'
};

/* "How I lead a project" steps */
const PROCESS = [
  {
    title: "Understand",
    desc: "Dig into the real problem, the users and the goal before writing a single line of code.",
    ku: { title: "تێگەیشتن", desc: "پێش نووسینی یەک دێڕ کۆد، لە کێشە ڕاستەقینەکە و بەکارهێنەران و ئامانجەکە تێدەگەم." }
  },
  {
    title: "Plan & Design",
    desc: "Turn the idea into a roadmap, a structure and an interface everyone can follow.",
    ku: { title: "پلان و دیزاین", desc: "بیرۆکەکە دەکەم بە نەخشەڕێگا و پێکهاتە و ڕووکارێک کە هەمووان بتوانن پەیڕەوی بکەن." }
  },
  {
    title: "Build at AI Speed",
    desc: "Develop full-stack with prompt-engineered AI workflows — fast, clean and secure.",
    ku: { title: "دروستکردن بە خێرایی AI", desc: "گەشەپێدانی فول-ستاک بە ڕێکخستنی AI و پرۆمپتی ئەندازیاریکراو — خێرا، پاک و پارێزراو." }
  },
  {
    title: "Launch & Lead",
    desc: "Ship it, gather feedback and keep leading the product forward.",
    ku: { title: "بڵاوکردنەوە و بەڕێوەبردن", desc: "بڵاوی دەکەمەوە، فیدباک کۆدەکەمەوە و بەردەوام بەرهەمەکە بەرەو پێش دەبەم." }
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
    typedWords: ["Founder of Shax Store", "Website Developer", "AI Prompt Engineer", "Problem Solver", "Project Leader"],
    roles: ["Software Developer", "Founder", "Project Leader", "Problem Solver", "AI Prompt Engineer", "Website Developer"],
    badge: "✦ Founder · Available for work",
    titleOne: "Software",
    titleTwo: "Developer",
    bio: "Software developer and founder. I lead my own projects from idea to launch — solving real problems with fast, secure websites and AI workflows I engineer myself.",
    pillPrompt: "Prompt Engineering",
    ctaWork: "View my work",
    ctaTalk: "Let's talk",
    statYears: "Years shipping software",
    statFounderVal: "Founder",
    statAI: "Prompt-engineered workflow",
    scrollLbl: "Scroll",
    aboutEyebrow: "01 — What I do",
    aboutTitle: "More than just code",
    aboutSub: "I combine leadership, engineering and AI to take ideas from a blank page to a working product.",
    processEyebrow: "02 — Leadership",
    processTitle: "How I Lead a Project",
    processSub: "The process I follow on every product — so ideas turn into results, not just plans.",
    stepLbl: "Step",
    showcaseEyebrow: "03 — Selected work",
    showcaseTitle: "Portfolio Showcase",
    showcaseSub: "Products I've founded, built and led — plus the stack and credentials behind them.",
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
    certJavaDesc: "Advancing in core Java — OOP, architecture and real applications.",
    certJsName: "JavaScript",
    certJsDesc: "Deepening modern JavaScript — DOM, ES6+ and interactive web apps.",
    certPremiereName: "Adobe Premiere Pro",
    certPremiereDesc: "Professional video editing — cutting, color and sound.",
    certAeName: "After Effects",
    certAeDesc: "Motion graphics and visual effects.",
    certProgress: "In Progress",
    langKurdishName: "Kurdish — Native Speaker",
    langKurdishDesc: "Mother tongue — fully fluent.",
    toolsTitle: "Tools I use daily",
    toolAI: "AI assistants",
    chipAI: "AI-Powered Development",
    chipPrompt: "Prompt Engineering",
    chipBots: "AI Automation & Bots",
    chipFullstack: "Full-Stack Web Development",
    chipKurdish: "Kurdish",
    expEyebrow: "04 — Experience",
    expTitle: "Experience",
    expSub: "Founding, leading and building — the path that shaped how I work.",
    expYears: "Years of Experience",
    contactEyebrow: "05 — Contact",
    contactTitle: "Let's Build Something",
    contactSub: "Have a project, a problem to solve or an idea that needs a leader? Let's talk.",
    connectTitle: "Connect With Me",
    connectSub: "Find me on my platforms — I'm most active on Instagram.",
    ulTitle: "Useful Links & Tools",
    ulSub: "My tools, resources and link store",
    tiktokProfile: "TikTok Profile",
    sayHello: "Say hello",
    footerRole: "Founder · Software Developer · AI Prompt Engineer",
    copyright: "© 2026 Harzheen Hawzheen — All rights reserved.",
    backHome: "Home",
    backUseful: "Useful Content",
    usefulTitle: "Useful Content",
    usefulSub: "resources · tools · links worth sharing",
    linkStore: "Link Store",
    resources: "Resources",
    mdnDesc: "The best reference for HTML, CSS and JavaScript.",
    mcDesc: "Minecraft website — download, play and build."
  },
  ku: {
    typedWords: ["دامەزرێنەری Shax Store", "گەشەپێدەری وێبسایت", "ئەندازیاری پرۆمپتی AI", "چارەسەرکەری کێشە", "سەرکردەی پرۆژە"],
    roles: ["گەشەپێدەری سۆفتوێر", "دامەزرێنەر", "سەرکردەی پرۆژە", "چارەسەرکەری کێشە", "ئەندازیاری پرۆمپتی AI", "گەشەپێدەری وێبسایت"],
    badge: "✦ دامەزرێنەر · ئامادەم بۆ کار",
    titleOne: "گەشەپێدەری",
    titleTwo: "سۆفتوێر",
    bio: "گەشەپێدەری سۆفتوێر و دامەزرێنەر. پرۆژەکانی خۆم لە بیرۆکەوە تا بڵاوکردنەوە بەڕێوە دەبەم — کێشەی ڕاستەقینە چارەسەر دەکەم بە وێبسایتی خێرا و پارێزراو و ڕێکخستنی AI کە خۆم دیزاینی دەکەم.",
    pillPrompt: "ئەندازیاری پرۆمپت",
    ctaWork: "سەیری کارەکانم بکە",
    ctaTalk: "با قسە بکەین",
    statYears: "ساڵ دروستکردنی سۆفتوێر",
    statFounderVal: "دامەزرێنەر",
    statAI: "کارکردن بە پرۆمپتی ئەندازیاریکراو",
    scrollLbl: "بۆ خوارەوە",
    aboutEyebrow: "٠١ — چی دەکەم",
    aboutTitle: "زیاتر لە تەنها کۆد",
    aboutSub: "سەرکردایەتی و ئەندازیاری و AI تێکەڵ دەکەم بۆ ئەوەی بیرۆکە لە پەڕەیەکی بەتاڵەوە بگەیەنمە بەرهەمێکی کارا.",
    processEyebrow: "٠٢ — سەرکردایەتی",
    processTitle: "چۆن پرۆژەیەک بەڕێوە دەبەم",
    processSub: "ئەو ڕێگایەی لە هەموو بەرهەمێکدا پەیڕەوی دەکەم — بۆ ئەوەی بیرۆکە ببێتە ئەنجام، نەک تەنها پلان.",
    stepLbl: "هەنگاو",
    showcaseEyebrow: "٠٣ — کارە هەڵبژێردراوەکان",
    showcaseTitle: "پیشاندانی کارەکانم",
    showcaseSub: "ئەو بەرهەمانەی دامەزراندووم و دروستم کردوون و بەڕێوەم بردوون — لەگەڵ تەکنەلۆژیا و بڕوانامەکانی پشتیان.",
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
    certJavaDesc: "پێشکەوتن لە جاڤا — OOP و پێکهاتە و دروستکردنی بەرنامەی ڕاستەقینە.",
    certJsName: "JavaScript",
    certJsDesc: "قووڵکردنەوەی JavaScript — DOM و ES6 و بەرنامەی وێبی کارلێکدار.",
    certPremiereName: "ئەدۆبی پریمێر پرۆ",
    certPremiereDesc: "مۆنتاژی پرۆفیشناڵ — برین و ڕەنگ و دەنگ.",
    certAeName: "ئەفتر ئیفێکتس",
    certAeDesc: "موشن گرافیک و ئیفێکتی بینراو.",
    certProgress: "لە بەرەوپێشچووندایە",
    toolsTitle: "ئامرازەکانی ڕۆژانەم",
    toolAI: "یاریدەدەرەکانی AI",
    chipAI: "گەشەپێدان بە یارمەتی AI",
    chipPrompt: "ئەندازیاری پرۆمپت",
    chipBots: "ئۆتۆمەیشن و بۆتی AI",
    chipFullstack: "گەشەپێدانی وێبی فول-ستاک",
    chipKurdish: "کوردی",
    expEyebrow: "٠٤ — ئەزموون",
    expTitle: "ئەزموون",
    expSub: "دامەزراندن، سەرکردایەتی و دروستکردن — ئەو ڕێگایەی شێوازی کارکردنمی دروست کرد.",
    expYears: "ساڵ ئەزموون",
    contactEyebrow: "٠٥ — پەیوەندی",
    contactTitle: "با شتێک پێکەوە دروست بکەین",
    contactSub: "پرۆژەیەکت هەیە، کێشەیەک بۆ چارەسەر، یان بیرۆکەیەک کە پێویستی بە سەرکردەیە؟ با قسە بکەین.",
    connectTitle: "پەیوەندیم پێوە بکە",
    connectSub: "پلاتفۆرمەکانم — زۆرترین چالاکیم لە ئینستاگرامە.",
    ulTitle: "لینک و ئامرازە بەسوودەکانم",
    ulSub: "ئامراز و سەرچاوە و فرۆشگای لینکەکەم",
    tiktokProfile: "پرۆفایلی تیکتۆک",
    sayHello: "سڵاوێک بکە",
    footerRole: "دامەزرێنەر · گەشەپێدەری سۆفتوێر · ئەندازیاری پرۆمپتی AI",
    copyright: "© ٢٠٢٦ هەرژین هاوژین — هەموو مافەکان پارێزراون.",
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

// re-render every language-dependent block after a language switch
function restartExperience() {
  ["timeline", "role-grid", "steps", "marquee-track"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });
  renderExperience();
  renderRoles();
  renderProcess();
  renderMarquee();
  initReveal();
}

function renderRoles() {
  const grid = document.getElementById("role-grid");
  if (!grid) return;

  ROLES.forEach((entry, i) => {
    const role = langState.lang === "ku" && entry.ku ? entry.ku : entry;
    const card = document.createElement("article");
    card.className = `role-card reveal${i === 0 ? " featured" : ""}`;

    const top = document.createElement("div");
    top.className = "role-top";
    const icon = document.createElement("span");
    icon.className = "role-icon";
    icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ROLE_ICONS[entry.icon] || ""}</svg>`;
    const num = document.createElement("span");
    num.className = "role-num mono";
    num.textContent = String(i + 1).padStart(2, "0");
    top.appendChild(icon);
    top.appendChild(num);

    const h3 = document.createElement("h3");
    h3.textContent = role.title;
    const p = document.createElement("p");
    p.textContent = role.desc;

    const ul = document.createElement("ul");
    ul.className = "role-points";
    (role.points || []).forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      ul.appendChild(li);
    });

    card.appendChild(top);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(ul);
    grid.appendChild(card);
  });
}

function renderProcess() {
  const list = document.getElementById("steps");
  if (!list) return;
  const stepLbl = I18N[langState.lang].stepLbl;

  PROCESS.forEach((entry, i) => {
    const step = langState.lang === "ku" && entry.ku ? entry.ku : entry;
    const li = document.createElement("li");
    li.className = "step-card";

    const num = document.createElement("span");
    num.className = "step-num mono";
    num.textContent = `${stepLbl} ${String(i + 1).padStart(2, "0")}`;
    const h3 = document.createElement("h3");
    h3.textContent = step.title;
    const p = document.createElement("p");
    p.textContent = step.desc;

    li.appendChild(num);
    li.appendChild(h3);
    li.appendChild(p);
    list.appendChild(li);
  });
}

function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;
  const roles = I18N[langState.lang].roles || [];
  // two copies so the loop is seamless
  for (let copy = 0; copy < 2; copy++) {
    roles.forEach((role) => {
      const word = document.createElement("span");
      word.className = "m-word";
      word.textContent = role;
      const star = document.createElement("span");
      star.className = "m-star";
      star.textContent = "✦";
      track.appendChild(word);
      track.appendChild(star);
    });
  }
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

    const head = document.createElement("div");
    head.className = "t-head";
    const period = document.createElement("p");
    period.className = "t-period";
    period.textContent = entry.period;
    head.appendChild(period);
    if (job.tag) {
      const tag = document.createElement("span");
      tag.className = "t-tag mono";
      tag.textContent = job.tag;
      head.appendChild(tag);
    }

    const title = document.createElement("h3");
    title.textContent = job.title;

    const place = document.createElement("span");
    place.className = "t-place";
    place.textContent = job.place || "";

    const desc = document.createElement("p");
    desc.className = "t-desc";
    desc.textContent = job.desc || "";

    item.appendChild(head);
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
    [["// harzheen.js \u2014 founder \u00B7 builder \u00B7 problem solver", "cm"]],
    [["const ", "kw"], ["harzheen", "var"], [" = {", "pl"]],
    [["  role: ", "pl"], ["'Software Developer'", "str"], [",", "pl"]],
    [["  founderOf: ", "pl"], ["'Shax Store'", "str"], [",", "pl"]],
    [["  skills: [", "pl"], ["'Leadership'", "str"], [", ", "pl"], ["'Prompt Engineering'", "str"], [",", "pl"]],
    [["           ", "pl"], ["'Web Development'", "str"], ["],", "pl"]],
    [["  secureByDefault: ", "pl"], ["true", "num"], [",", "pl"]],
    [["};", "pl"]],
    [["for", "kw"], [" (", "pl"], ["const ", "kw"], ["problem ", "var"], ["of ", "kw"], ["world", "var"], [") {", "pl"]],
    [["  harzheen.", "pl"], ["solve", "fn"], ["(", "pl"], ["problem", "var"], [");", "pl"]],
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
renderRoles();
renderProcess();
renderMarquee();
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

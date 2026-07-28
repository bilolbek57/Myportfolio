/* ==========================================
   Bilolbek Yoqubjanov — Portfolio App JS
========================================== */

// ==========================================
// TRANSLATIONS (i18n)
// ==========================================
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.contact": "Contact",
    "hero.badge": "Available for work",
    "hero.title": "Frontend Web Developer",
    "hero.typing_prefix": "I am a ",
    "hero.btn_projects": "View Projects",
    "hero.btn_contact": "Contact Me",
    "hero.scroll": "Scroll down",
    "about.tag": "About Me",
    "about.title": "Who I Am",
    "about.p1": "Hey! I'm Bilolbek — a passionate frontend web developer born on August 19, 2009. At just 16, I've already fallen deeply in love with the art of building modern, visually striking web experiences.",
    "about.p2": "I thrive on crafting clean, elegant interfaces that not only look stunning but feel intuitive and alive. Every line of code is an opportunity to create something meaningful.",
    "about.p3": "I'm a continuous learner — constantly exploring new technologies, pushing boundaries, and turning ideas into polished digital realities. The web is my canvas, and code is my brush.",
    "about.float1_title": "16 y.o.",
    "about.float1_sub": "Young Developer",
    "about.float2_title": "Creative",
    "about.float2_sub": "Problem Solver",
    "about.float3_title": "Web First",
    "about.float3_sub": "Modern Interfaces",
    "about.stat1": "Years Coding",
    "about.stat2": "Projects Built",
    "about.stat3": "Technologies",
    "skills.tag": "My Stack",
    "skills.title": "Skills & Expertise",
    "skills.html_desc": "Semantic markup, accessibility, modern HTML5 features",
    "skills.css_desc": "Animations, Flexbox, Grid, glassmorphism effects",
    "skills.js_desc": "DOM manipulation, ES6+, async/await, APIs",
    "skills.react_desc": "Components, hooks, state management, SPA routing",
    "skills.node_desc": "REST APIs, Express, server-side JavaScript",
    "projects.tag": "Portfolio",
    "projects.title": "Featured Projects",
    "projects.live": "Live Preview",
    "projects.p1_title": "Samsung Galaxy Website",
    "projects.p1_desc": "A premium product showcase website inspired by Samsung Galaxy's design language — sleek animations and modern UI.",
    "projects.p2_title": "Portfolio Website",
    "projects.p2_desc": "A polished developer portfolio with smooth transitions, beautiful typography and a dark luxury aesthetic.",
    "projects.p3_title": "Logo Craf",
    "projects.p3_desc": "An online logo crafting tool that lets users design beautiful, professional logos directly in the browser.",
    "journey.tag": "My Story",
    "journey.title": "Developer Journey",
    "journey.t1_title": "The Beginning",
    "journey.t1_desc": "Wrote my very first line of HTML at age 12. A simple 'Hello World' page that sparked an unstoppable passion for the web.",
    "journey.t2_title": "CSS Mastery",
    "journey.t2_desc": "Dived deep into CSS — animations, Flexbox, Grid, and the art of making things beautiful. Fell in love with design.",
    "journey.t3_title": "JavaScript & Interactivity",
    "journey.t3_desc": "Unlocked the power of JavaScript — DOM manipulation, APIs, and dynamic web experiences. Built my first real project.",
    "journey.t4_title": "React & Modern Dev",
    "journey.t4_desc": "Embraced React and the modern JavaScript ecosystem. Component-based thinking transformed how I build UIs.",
    "journey.t5_title": "Full Stack Exploration",
    "journey.t5_desc": "Exploring Node.js and backend development. Building complete, production-quality web applications end-to-end.",
    "contact.tag": "Get In Touch",
    "contact.title": "Let's Connect",
    "contact.subtitle": "I'm always open to new opportunities and collaborations. Let's build something amazing together.",
    "contact.name": "Your Name",
    "contact.email_label": "Your Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent! I'll get back to you soon.",
    "footer.copy": "© 2026 Bilolbek — Designed with passion",
    "typing": ["HTML Developer", "Creative Coder", "Frontend Developer", "UI Designer"],
    "projects.p4_desc": ["A premium IELTS Vocabulary website featuring interactive learning, advanced word collections, smart quizzes, smooth animations, and a modern, minimalist UI."]
  },
  ru: {
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.journey": "Путь",
    "nav.contact": "Контакт",
    "hero.badge": "Открыт к работе",
    "hero.title": "Фронтенд-разработчик",
    "hero.typing_prefix": "Я — ",
    "hero.btn_projects": "Мои проекты",
    "hero.btn_contact": "Связаться",
    "hero.scroll": "Прокрутить вниз",
    "about.tag": "Обо мне",
    "about.title": "Кто я?",
    "about.p1": "Привет! Я Билолбек — страстный фронтенд-разработчик, родившийся 19 августа 2009 года. В свои 16 лет я уже по-настоящему влюблён в искусство создания современных, визуально впечатляющих веб-приложений.",
    "about.p2": "Я нахожу вдохновение в создании чистых, элегантных интерфейсов, которые не только выглядят великолепно, но и ощущаются интуитивно живыми. Каждая строка кода — это возможность создать что-то значимое.",
    "about.p3": "Я постоянно обучаюсь — изучаю новые технологии, раздвигаю границы и превращаю идеи в отполированную цифровую реальность. Веб — мой холст, а код — моя кисть.",
    "about.float1_title": "16 лет",
    "about.float1_sub": "Молодой разработчик",
    "about.float2_title": "Творческий",
    "about.float2_sub": "Решатель задач",
    "about.float3_title": "Веб прежде всего",
    "about.float3_sub": "Современные интерфейсы",
    "about.stat1": "Лет кодинга",
    "about.stat2": "Проектов",
    "about.stat3": "Технологий",
    "skills.tag": "Мой стек",
    "skills.title": "Навыки и экспертиза",
    "skills.html_desc": "Семантическая разметка, доступность, современный HTML5",
    "skills.css_desc": "Анимации, Flexbox, Grid, эффекты стекла",
    "skills.js_desc": "DOM, ES6+, async/await, работа с API",
    "skills.react_desc": "Компоненты, хуки, управление состоянием, роутинг",
    "skills.node_desc": "REST API, Express, серверный JavaScript",
    "projects.tag": "Портфолио",
    "projects.title": "Избранные проекты",
    "projects.live": "Открыть сайт",
    "projects.p1_title": "Сайт Samsung Galaxy",
    "projects.p1_desc": "Премиум витрина продуктов в стиле Samsung Galaxy — плавные анимации и современный интерфейс.",
    "projects.p2_title": "Портфолио-сайт",
    "projects.p2_desc": "Отполированное портфолио разработчика с плавными переходами, красивой типографикой и тёмной эстетикой.",
    "projects.p3_title": "Logo Craf",
    "projects.p3_desc": "Онлайн-инструмент для создания логотипов прямо в браузере — красивые профессиональные логотипы за минуты.",
    "journey.tag": "Моя история",
    "journey.title": "Путь разработчика",
    "journey.t1_title": "Начало",
    "journey.t1_desc": "Написал первую строку HTML в 12 лет. Простая страница 'Hello World' зажгла неугасимую страсть к вебу.",
    "journey.t2_title": "Мастерство CSS",
    "journey.t2_desc": "Углубился в CSS — анимации, Flexbox, Grid и искусство делать вещи красивыми. Влюбился в дизайн.",
    "journey.t3_title": "JavaScript и интерактивность",
    "journey.t3_desc": "Открыл силу JavaScript — работу с DOM, API и динамические веб-приложения. Создал первый настоящий проект.",
    "journey.t4_title": "React и современная разработка",
    "journey.t4_desc": "Освоил React и экосистему современного JavaScript. Компонентное мышление изменило подход к разработке.",
    "journey.t5_title": "Full Stack исследование",
    "journey.t5_desc": "Изучаю Node.js и бэкенд-разработку. Строю полноценные продакшн-приложения от начала до конца.",
    "contact.tag": "Написать мне",
    "contact.title": "Давайте свяжемся",
    "contact.subtitle": "Я всегда открыт для новых возможностей и сотрудничества. Давайте создадим что-то удивительное вместе.",
    "contact.name": "Ваше имя",
    "contact.email_label": "Ваш Email",
    "contact.message": "Сообщение",
    "contact.send": "Отправить",
    "contact.success": "Сообщение отправлено! Скоро свяжусь с вами.",
    "footer.copy": "© 2026 Bilolbek — Создано с душой",
    "typing": ["HTML-разработчик", "Творческий кодер", "Фронтенд-разработчик", "UI-дизайнер"],
    "projects.p4_desc":["Премиальный сайт для изучения словаря IELTS с современным дизайном и интерактивным обучением."]
  }
};

let currentLang = "en";
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

// ==========================================
// LOADER
// ==========================================
(function initLoader() {
  const loader = document.getElementById("loader");
  const progress = document.getElementById("loader-progress");
  const loaderText = document.getElementById("loader-text");
  const messages = ["Loading...", "Initializing...", "Almost ready...", "Welcome!"];
  let pct = 0;
  let msgIdx = 0;

  const interval = setInterval(() => {
    pct += Math.random() * 18 + 5;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    progress.style.width = pct + "%";
    const mIdx = Math.floor((pct / 100) * (messages.length - 1));
    if (mIdx !== msgIdx) { msgIdx = mIdx; loaderText.textContent = messages[msgIdx]; }
    if (pct >= 100) {
      setTimeout(() => {
        loader.classList.add("hidden");
        document.body.style.overflow = "";
        startTyping();
        initReveal();
        initCountUp();
        initSkillBars();
      }, 400);
    }
  }, 60);

  document.body.style.overflow = "hidden";
})();

// ==========================================
// PARTICLES
// ==========================================
(function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animFrame;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.15,
      color: Math.random() > 0.6 ? "#D4AF37" : Math.random() > 0.5 ? "#7C3AED" : "#F8F8F8"
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, createParticle);
  }

  function drawLine(p1, p2, dist) {
    const alpha = (1 - dist / 150) * 0.12;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
    ctx.lineWidth = 0.5;
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Mouse interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) {
        const force = (120 - d) / 120;
        p.vx -= dx * force * 0.003;
        p.vy -= dy * force * 0.003;
      }

      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist < 150) drawLine(p, p2, dist);
      }
    });

    animFrame = requestAnimationFrame(animate);
  }

  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("resize", () => { resize(); init(); });
  init();
  animate();
})();

// ==========================================
// CUSTOM CURSOR
// ==========================================
(function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;

  let fx = 0, fy = 0;
  let cx = 0, cy = 0;

  window.addEventListener("mousemove", e => {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
  });

  function animateFollower() {
    fx += (cx - fx) * 0.12;
    fy += (cy - fy) * 0.12;
    follower.style.left = fx + "px";
    follower.style.top = fy + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
})();

// ==========================================
// SCROLL PROGRESS
// ==========================================
window.addEventListener("scroll", () => {
  const el = document.getElementById("scroll-progress");
  if (!el) return;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  el.style.width = Math.round((scrollTop / scrollH) * 100) + "%";

  // Nav scroll state
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("scrolled", scrollTop > 50);

  // Back to top
  const btn = document.getElementById("back-top");
  if (btn) btn.classList.toggle("visible", scrollTop > 400);

  // Active nav link
  updateActiveNav();
}, { passive: true });

// ==========================================
// ACTIVE NAV
// ==========================================
function updateActiveNav() {
  const sections = ["hero", "about", "skills", "projects", "journey", "contact"];
  const links = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.scrollY >= el.offsetTop - 120) current = id;
  });

  links.forEach(link => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === current);
  });
}

// ==========================================
// NAV BURGER
// ==========================================
(function initNav() {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");

  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    links.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      links.classList.remove("open");
    });
  });
})();

// ==========================================
// BACK TO TOP
// ==========================================
const backTopBtn = document.getElementById("back-top");
if (backTopBtn) {
  backTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================
// REVEAL ON SCROLL
// ==========================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || "0");
      setTimeout(() => el.classList.add("visible"), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ==========================================
// SKILL BARS (with count-up)
// ==========================================
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;
      if (card.classList.contains("animated")) return;
      card.classList.add("animated");

      const fill = card.querySelector(".skill-fill");
      const pctEl = card.querySelector(".skill-pct");
      const width = parseInt(fill?.dataset.width || "0");
      const target = parseInt(pctEl?.dataset.target || "0");

      if (fill) setTimeout(() => { fill.style.width = width + "%"; }, 200);

      if (pctEl) {
        let current = 0;
        const step = target / 60;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          pctEl.textContent = Math.round(current) + "%";
        }, 20);
      }

      observer.unobserve(card);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".skill-card").forEach(card => observer.observe(card));
}

// ==========================================
// COUNT-UP (stats)
// ==========================================
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count || "0");
      let current = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        el.textContent = Math.round(current) + "+";
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".stat-num[data-count]").forEach(el => observer.observe(el));
}

// ==========================================
// TYPING EFFECT
// ==========================================
function startTyping() {
  const typingEl = document.getElementById("typing-text");
  if (!typingEl) return;

  const words = translations[currentLang].typing || translations.en.typing;

  function type() {
    const word = words[typingIndex % words.length];
    if (isDeleting) {
      typingEl.textContent = word.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = word.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 55 : 120;

    if (!isDeleting && charIndex === word.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex++;
      delay = 400;
    }

    typingTimeout = setTimeout(type, delay);
  }

  type();
}

// ==========================================
// LANGUAGE TOGGLE
// ==========================================
(function initLang() {
  const btn = document.getElementById("lang-toggle");
  const enFlag = document.getElementById("lang-en-flag");
  const ruFlag = document.getElementById("lang-ru-flag");

  function applyLang(lang) {
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const t = translations[lang];
      if (t[key] !== undefined) el.textContent = t[key];
    });

    if (lang === "en") {
      enFlag.classList.add("active");
      ruFlag.classList.remove("active");
    } else {
      ruFlag.classList.add("active");
      enFlag.classList.remove("active");
    }

    // Restart typing with new language
    clearTimeout(typingTimeout);
    typingIndex = 0;
    charIndex = 0;
    isDeleting = false;
    const typingEl = document.getElementById("typing-text");
    if (typingEl) typingEl.textContent = "";
    startTyping();

    // Update placeholder text in form
    const nameInput = document.getElementById("form-name");
    const emailInput = document.getElementById("form-email");
    const msgInput = document.getElementById("form-message");
    if (nameInput) nameInput.placeholder = lang === "ru" ? "Полное имя" : "Full name";
    if (emailInput) emailInput.placeholder = lang === "ru" ? "ivan@example.com" : "john@example.com";
    if (msgInput) msgInput.placeholder = lang === "ru" ? "Давайте создадим что-то вместе..." : "Let's build something together...";
  }

  if (btn) {
    btn.addEventListener("click", () => {
      applyLang(currentLang === "en" ? "ru" : "en");
    });
  }
})();

// ==========================================
// PARALLAX ON HERO
// ==========================================
window.addEventListener("mousemove", e => {
  const hero = document.querySelector(".hero-content");
  if (!hero) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  hero.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;

  const orbs = document.querySelectorAll(".hero-orb");
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 0.5;
    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
}, { passive: true });

// ==========================================
// COPY EMAIL
// ==========================================
const copyBtn = document.getElementById("copy-email");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const email = copyBtn.dataset.email;
    navigator.clipboard.writeText(email).then(() => {
      copyBtn.classList.add("copied");
      const icon = copyBtn.innerHTML;
      copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        copyBtn.innerHTML = icon;
      }, 2000);
    }).catch(() => {
      // Fallback
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
  });
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  const nameField = document.getElementById("form-name");
  const emailField = document.getElementById("form-email");
  const msgField = document.getElementById("form-message");
  const errName = document.getElementById("err-name");
  const errEmail = document.getElementById("err-email");
  const errMsg = document.getElementById("err-message");
  const successEl = document.getElementById("form-success");

  function validate(field, errEl, fn) {
    const err = fn(field.value.trim());
    errEl.textContent = err || "";
    field.classList.toggle("error", !!err);
    return !err;
  }

  function validateName(v) {
    if (!v) return currentLang === "ru" ? "Введите имя" : "Name is required";
    if (v.length < 2) return currentLang === "ru" ? "Имя слишком короткое" : "Name is too short";
    return null;
  }

  function validateEmail(v) {
    if (!v) return currentLang === "ru" ? "Введите email" : "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return currentLang === "ru" ? "Некорректный email" : "Invalid email address";
    return null;
  }

  function validateMsg(v) {
    if (!v) return currentLang === "ru" ? "Введите сообщение" : "Message is required";
    if (v.length < 10) return currentLang === "ru" ? "Сообщение слишком короткое" : "Message is too short";
    return null;
  }

  nameField.addEventListener("blur", () => validate(nameField, errName, validateName));
  emailField.addEventListener("blur", () => validate(emailField, errEmail, validateEmail));
  msgField.addEventListener("blur", () => validate(msgField, errMsg, validateMsg));

  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const ok = [
      validate(nameField, errName, validateName),
      validate(emailField, errEmail, validateEmail),
      validate(msgField, errMsg, validateMsg)
    ].every(Boolean);

    if (!ok) return;

    const btn = contactForm.querySelector("button[type=submit]");
    btn.textContent = currentLang === "ru" ? "Отправка..." : "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      successEl.classList.add("show");
      contactForm.reset();
      btn.textContent = translations[currentLang]["contact.send"];
      btn.disabled = false;
      setTimeout(() => successEl.classList.remove("show"), 5000);
    }, 1200);
  });
}

// ==========================================
// PROJECT CARD TILT
// ==========================================
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// ==========================================
// SMOOTH SCROLL for anchor links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


document.addEventListener("DOMContentLoaded", ()=>{
  updateActiveNav();
})
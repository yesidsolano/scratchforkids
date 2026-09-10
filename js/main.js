document.addEventListener('DOMContentLoaded', () => {
  // ===== LANGUAGE SWITCHER =====
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('scratch-lang') || 'es';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('scratch-lang', lang);
    document.documentElement.lang = lang;

    // Update active button
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Initialize language
  setLanguage(currentLang);

  // ===== HEADER SCROLL =====
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== MOBILE MENU (simple) =====
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      if (nav.style.display === 'flex') {
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(26,26,46,0.98)';
        nav.style.padding = '24px';
        nav.style.gap = '16px';
        nav.style.alignItems = 'center';
      }
    });
  }

  // Close menu on link click (mobile)
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        nav.style.display = 'none';
      }
    });
  });
});

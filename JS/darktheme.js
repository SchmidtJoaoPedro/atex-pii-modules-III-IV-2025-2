// lista de seletores que recebem .dark-mode
const darkContent = [
  '.main-content', '.progress-card', '.chapter-card',
  '.course-info-card', '.certification-info', '.reviews-card',
  '.card-header', '.card-content', '.review-card', '.review-form',
  '.review-textarea', '.creators-section', '.section-title',
  '.creator-card', '.title-avaliation', '.creator-header', '.creator-main',
  '.profile-section', '.back-button', '.skill-item', '.contact-item',
  '.experience-item'
];

// reaplica dark mode aos elementos e ao switch
function applyDarkTheme() {
  const themeSwitch = document.getElementById('theme-switch');
  if (themeSwitch) themeSwitch.classList.add('active');

  darkContent.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('dark-mode');
    });
  });
}

// inicializa listener do switch (sua função darkMode ajustada)
function initDarkToggle() {
  const themeSwitch = document.getElementById('theme-switch');
  if (!themeSwitch) return;

  themeSwitch.addEventListener('click', () => {
    const isActive = themeSwitch.classList.toggle('active');

    darkContent.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.toggle('dark-mode');
      });
    });

    localStorage.setItem('theme', isActive ? 'dark' : 'light');
    localStorage.setItem('status', isActive);
  });
}

// roda no carregamento de cada página
window.addEventListener('DOMContentLoaded', () => {
  // 1) se status for true, reaplica dark mode
  if (localStorage.getItem('status') === 'true') {
    applyDarkTheme();
  }

  // 2) instancia o listener do switch
  initDarkToggle();
});

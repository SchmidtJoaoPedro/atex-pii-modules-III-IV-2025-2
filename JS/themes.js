function openSettings() {
  const openLink = document.getElementById('openModal');
  const modal    = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');

  // Abre o modal
  openLink.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  // Fecha o modal ao clicar no “×”
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Fecha o modal ao clicar fora do conteúdo
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

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

(function darkMode() {

  // altera o href do <link class="styling-link"> se existir
  function setLinkHref(theme) {
    const link = document.querySelector('.styling-link');
    if (!link) return;
    link.setAttribute('href', theme === 'dark' ? 'styles.css' : 'neostyles.css');
  }

  // aplica ou remove classes em todos os seletores do array
  function applyThemeToElements(theme) {
    const isDark = (theme === 'dark');
    darkContent.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.toggle('dark-mode', isDark);
      });
    });
  }

  // faz todo o trabalho de aplicar o tema e salvar no localStorage
  function applyTheme(theme) {
    const switchBtn = document.getElementById('theme-switch');
    if (switchBtn) switchBtn.classList.toggle('active', theme === 'dark');

    applyThemeToElements(theme);
    setLinkHref(theme);
    localStorage.setItem('theme', theme);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // 1) aplica o tema salvo (ou 'light' por padrão)
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // 2) inicializa o listener do botão
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeSwitch) return;

    themeSwitch.addEventListener('click', () => {
      // se tiver active => troca pra light, senão dark
      const newTheme = themeSwitch.classList.contains('active') ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });
})();

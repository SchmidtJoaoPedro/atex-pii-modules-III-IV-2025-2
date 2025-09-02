function darkMode() {
    const themeSwitch = document.getElementById('theme-switch');
    const darkContent = ['.main-content', '.progress-card', '.chapter-card', '.course-info-card', '.certification-info', '.stat-label', '.course-description'];

    themeSwitch.addEventListener('click', () => {
        themeSwitch.classList.toggle('active');

        // percorre todos os seletores
        darkContent.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.toggle('dark-mode');
            });
        });
    });
}


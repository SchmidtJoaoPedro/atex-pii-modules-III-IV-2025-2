function darkMode() {
    const themeSwitch = document.getElementById('theme-switch');
    const darkContent = [
        '.main-content', '.progress-card', '.chapter-card', 
        '.course-info-card', '.certification-info', 'reviews-card',
        '.card-header', '.card-content', '.review-card', '.review-form',
        '.review-textarea', '.creators-section', '.section-title', '.creator-card',
        '.title-avaliation'
    ];

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


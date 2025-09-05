function darkMode() {
    const themeSwitch = document.getElementById('theme-switch');
    const darkContent = [
        '.main-content', '.progress-card', '.chapter-card',
        '.course-info-card', '.certification-info', 'reviews-card',
        '.card-header', '.card-content', '.review-card', '.review-form',
        '.review-textarea', '.creators-section', '.section-title', '.creator-card',
        '.title-avaliation', '.chapter-card', '.'
    ];

    // aplica tema salvo ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        themeSwitch.classList.add('active');
        darkContent.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.add('dark-mode');
            });
        });
    }

    themeSwitch.addEventListener('click', () => {
        themeSwitch.classList.toggle('active');
        setStatusTrue();

        // alterna classes
        darkContent.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.toggle('dark-mode');
            });
        });

        // salva no localStorage
        if (themeSwitch.classList.contains('active')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}
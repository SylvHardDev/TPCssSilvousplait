const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Vérifier si le contenu est actuellement ouvert
        if (content.classList.contains('open')) {
            // Masquer le contenu actuel
            content.classList.remove('open');
            header.querySelector('.icon').src = './assets/images/icon-plus.svg';
        } else {
            // Masquer tous les autres contenus
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.classList.remove('open');
                content.previousElementSibling.querySelector('.icon').src = './assets/images/icon-plus.svg';
            });

            // Afficher le contenu actuel
            content.classList.add('open');
            header.querySelector('.icon').src = './assets/images/icon-minus.svg';
        }
    });
});

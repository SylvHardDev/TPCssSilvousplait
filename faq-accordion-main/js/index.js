// Sélectionner tous les en-têtes d'accordéon
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Vérifier si le contenu est actuellement caché
        if (content.style.display === 'block') {
            // Masquer le contenu actuel
            content.style.display = 'none';
            header.querySelector('.icon').src = './assets/images/icon-plus.svg';
        } else {
            // Masquer tous les autres contenus
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.display = 'none';
                content.previousElementSibling.querySelector('.icon').src = './assets/images/icon-plus.svg';
            });

            // Afficher le contenu actuel
            content.style.display = 'block';
            header.querySelector('.icon').src = './assets/images/icon-minus.svg';
        }
    });
});

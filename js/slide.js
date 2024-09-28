document.addEventListener('DOMContentLoaded', function() {
    const testimonios = document.querySelectorAll('.testimony_body');
    const antesBtn = document.getElementById('before');
    const siguienteBtn = document.getElementById('next');
    const scrollButton = document.getElementById('scrollToBottom');
    const moreWordsBtn = document.getElementById('moreWords'); // Botón "Más palabras"
    let indexTestimonio = 0;

    function mostrarTestimonio(index) {
        testimonios.forEach((testimonio, i) => {
            testimonio.classList.toggle('testimony_body--show', i === index);
        });
    }

    mostrarTestimonio(indexTestimonio);

    antesBtn.addEventListener('click', () => {
        indexTestimonio = (indexTestimonio > 0) ? indexTestimonio - 1 : testimonios.length - 1;
        mostrarTestimonio(indexTestimonio);
    });

    siguienteBtn.addEventListener('click', () => {
        indexTestimonio = (indexTestimonio < testimonios.length - 1) ? indexTestimonio + 1 : 0;
        mostrarTestimonio(indexTestimonio);
    });

    // Funcionalidad para el botón "Más palabras"
    moreWordsBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        const sectionPosition = wordsSection.getBoundingClientRect().top + window.scrollY;
        
        // Desplazarte un poco más abajo
        window.scrollTo({
            top: sectionPosition + 50, // Ajusta este valor según sea necesario
            behavior: 'smooth'
        });
    });

    // Muestra el botón cuando se desplaza hacia abajo
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    };

    // Desplazamiento suave al hacer clic en el botón de scroll
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

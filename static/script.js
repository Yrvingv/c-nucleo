function openWhatsApp() {
    const phoneNumber = "+5491128390182"; // Reemplaza con tu número de WhatsApp en formato internacional
    const message = "¡Hola! Me gustaría obtener más información sobre c-Núcleo😊."; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtener el destino del enlace
        const target = document.querySelector(this.getAttribute('href'));
        
        // Calcular el desplazamiento con un margen adicional (por ejemplo, 50px más arriba)
        const offset = -120; // Ajusta el valor según lo necesites
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect + offset;

        // Desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Ocultar el menú después de seleccionar una opción en modo responsivo
        const navLinks = document.querySelector('.nav-links'); // Contenedor del menú
        const menuToggle = document.querySelector('.menu-toggle'); // Botón hamburguesa

        if (menuToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Cerrar el menú
        }
    });
});

// Alternar visibilidad del menú en modo responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}


// Seleccionar el botón de ir al inicio.
const backToTopButton = document.getElementById('back-to-top');

// Mostrar/ocultar el botón según la posición de scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Mostrar el botón después de hacer scroll 300px
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Desplazamiento suave al hacer clic en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// ticker
document.addEventListener("DOMContentLoaded", function () {
    const tickerContent = document.querySelector('.ticker-content');
    const images = tickerContent.innerHTML;
  
    // Duplica dinámicamente las imágenes
    tickerContent.innerHTML += images;
  
    // Calcula el ancho total del contenido para ajustar el ciclo
    const totalWidth = tickerContent.scrollWidth;
  
    // Aplica duración dinámica de la animación basada en el ancho
    tickerContent.style.animationDuration = `${totalWidth / 100}px`;
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const tickerContent = document.querySelector('.ticker-content');
  
    // Duplica el contenido para el bucle continuo
    const images = tickerContent.innerHTML;
    tickerContent.innerHTML += images;
  
    // Calcula el ancho total del contenido
    const totalWidth = tickerContent.scrollWidth;
    tickerContent.style.animationDuration = `${totalWidth / 100}px`;
  
    // Detiene la animación al pasar el cursor
    tickerContent.addEventListener("mouseover", function () {
      tickerContent.style.animationPlayState = "paused";
    });
  
    // Reanuda la animación al quitar el cursor
    tickerContent.addEventListener("mouseout", function () {
      tickerContent.style.animationPlayState = "running";
    });
  });
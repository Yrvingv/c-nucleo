function openWhatsApp() {
  try {
    gtag('event', 'lead_whatsapp_click', {location: 'floating_button'});
  } catch(e) {}
  const phoneNumber = "+543813594194";
  const message = "¡Hola! Me gustaría obtener más información sobre c-Núcleo😊.";
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

  document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.calendar-button');
  if (!target) return;

  const obs = new MutationObserver(() => {
    const btn = target.querySelector('a,button');
    if (btn && !btn.dataset._tracked) {
      btn.dataset._tracked = '1';
      btn.addEventListener('click', () => {
        try { gtag('event','sesion_cero_click',{location:'calendar_section'}); } catch(e){}
      });
    }
  });
  obs.observe(target, { childList: true, subtree: true });
});


document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="mailto:"]');
  if (a) {
    try { gtag('event','contact_email_click',{href:a.href}); } catch(e){}
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const ctaHero = document.getElementById('cta-hero');
  if (ctaHero) {
    ctaHero.addEventListener('click', () => {
      try { gtag('event','cta_hero_click',{destination:'#date'}); } catch(e){}
    });
  }
});




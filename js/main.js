
// ===============================
// INICIALIZACIÓN DE SWIPER
// ===============================

// Creamos una nueva instancia de Swiper para el carrusel de servicios
const swiper = new Swiper(".services__swiper", {
  // Espacio entre las diapositivas
  spaceBetween: 30,

  // Hace que el carrusel se repita infinitamente
  loop: true,

  // Botones de navegación (siguiente y anterior)
  navigation: {
    nextEl: ".swiper-button-next", // Botón siguiente
    prevEl: ".swiper-button-prev", // Botón anterior
  },

  // Configuraciones según el tamaño de pantalla (responsive)
  breakpoints: {
    768: {
      slidesPerView: 2, // Muestra 2 tarjetas en pantallas medianas (tablet)
    },
    1024: {
      slidesPerView: 3, // Muestra 3 tarjetas en pantallas grandes (escritorio)
    },
  },
});
// ===============================
// ANIMACIONES CON SCROLLREVEAL
// ===============================

// Inicializamos ScrollReveal con configuraciones generales
ScrollReveal({
  origin: "top",       // Dirección desde donde aparece el elemento
  distance: "40px",    // Distancia que recorre el elemento al aparecer
  duration: 1000,      // Duración de la animación en milisegundos
  reset: true          // La animación se repite cada vez que se hace scroll
}).reveal(`
  .section__title, 
  .section__subtitle,
  .about__data, 
  .about__images,
  .services__data, 
  .services__card,
  .projects__card, 
  .contact__container,
  .footer__container
`, {
  interval: 100, // Retraso entre la animación de cada elemento
});


ScrollReveal().reveal('.footer__social-link', {
  interval: 100,
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  reset: false,
});

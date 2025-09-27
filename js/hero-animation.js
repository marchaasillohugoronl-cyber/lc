document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    document.querySelector('.hero__title'),
    ...document.querySelectorAll('.hero__subtitle'),
    document.querySelector('.hero__description')
  ];

  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 600); // 600ms de diferencia entre cada animación
  });
});

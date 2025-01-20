const slider = document.getElementById('slider');
const leftArrow = document.getElementById('flecha-izquierda');
const rightArrow = document.getElementById('flecha-derecha');

let currentScrollPosition = 0;
const cardWidth = document.querySelector('.cardp').offsetWidth + 20; // Incluye el margen de 10px a ambos lados
const visibleCards = 3; 
const totalCards = document.querySelectorAll('.cardp').length;
const maxScrollPosition = (totalCards - visibleCards) * cardWidth;

// Evento para mover hacia la izquierda
leftArrow.addEventListener('click', () => {
  if (currentScrollPosition > 0) {
    currentScrollPosition -= cardWidth;
    slider.style.transform = `translateX(-${currentScrollPosition}px)`;
  }
});

// Evento para mover hacia la derecha
rightArrow.addEventListener('click', () => {
  if (currentScrollPosition < maxScrollPosition) {
    currentScrollPosition += cardWidth;
    slider.style.transform = `translateX(-${currentScrollPosition}px)`;
  }
});

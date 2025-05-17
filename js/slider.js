document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById('slider');
  const leftArrow = document.getElementById('flecha-izquierda');
  const rightArrow = document.getElementById('flecha-derecha');
  const leftArrowM = document.getElementById('flecha-izquierda-mobile');
  const rightArrowM = document.getElementById('flecha-derecha-mobile');

  let currentIndex = 0;

  function updateSlider() {
    const isMobile = window.innerWidth <= 1214;
    const card = document.querySelector('.cardp');
    const totalCards = document.querySelectorAll('.cardp').length;

    if (!card) return;

    const cardWidth = card.offsetWidth + 20;
    const visibleCards = isMobile ? 1 : 3;
    const maxIndex = totalCards - visibleCards;

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Habilita o deshabilita flechas según el caso
    const updateArrows = (left, right) => {
      left.disabled = currentIndex === 0;
      right.disabled = currentIndex === maxIndex;
    };

    if (isMobile) {
      updateArrows(leftArrowM, rightArrowM);
    } else {
      updateArrows(leftArrow, rightArrow);
    }
  }

  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  function moveRight() {
    const totalCards = document.querySelectorAll('.cardp').length;
    const visibleCards = window.innerWidth <= 1214 ? 1 : 3;
    const maxIndex = totalCards - visibleCards;

    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  leftArrow.addEventListener('click', moveLeft);
  rightArrow.addEventListener('click', moveRight);
  leftArrowM.addEventListener('click', moveLeft);
  rightArrowM.addEventListener('click', moveRight);

  window.addEventListener("resize", () => {
    updateSlider(); // Recalcular al redimensionar
  });

  updateSlider(); // Inicial
});

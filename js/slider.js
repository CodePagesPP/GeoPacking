


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById('slider');
  const leftArrow = document.getElementById('flecha-izquierda');
  const rightArrow = document.getElementById('flecha-derecha');
  const leftArrowM = document.getElementById('flecha-izquierda-mobile');
  const rightArrowM = document.getElementById('flecha-derecha-mobile');


  let currentScrollPosition = 0;
const cardWidth = document.querySelector('.cardp').offsetWidth + 22; 
const visibleCards = 3; 
const totalCards = document.querySelectorAll('.cardp').length;
const maxScrollPosition = (totalCards - visibleCards) * cardWidth;
  


  function updateImages() {
      const isMobile = window.innerWidth <= 540;
  
        if (isMobile) {
          const cardWidth = document.querySelector('.cardp').offsetWidth + 18; 
          // Evento para mover hacia la izquierda
          leftArrow.remove();
          rightArrow.remove();


        leftArrowM.addEventListener('click', () => {
          if (currentScrollPosition > 0) {
            currentScrollPosition -= cardWidth;
            slider.style.transform = `translateX(-${currentScrollPosition}px)`;
          }
        });

        // Evento para mover hacia la derecha
        rightArrowM.addEventListener('click', () => {
          if (currentScrollPosition < maxScrollPosition) {
            currentScrollPosition += cardWidth;
            slider.style.transform = `translateX(-${currentScrollPosition}px)`;
          }
        });


        } 
        
        
        
        else {
          const cardWidth = document.querySelector('.cardp').offsetWidth + 22; 
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

            leftArrowM.addEventListener('click', () => {
              if (currentScrollPosition > 0) {
                currentScrollPosition -= cardWidth;
                slider.style.transform = `translateX(-${currentScrollPosition}px)`;
              }
            });
    
            // Evento para mover hacia la derecha
            rightArrowM.addEventListener('click', () => {
              if (currentScrollPosition < maxScrollPosition) {
                currentScrollPosition += cardWidth;
                slider.style.transform = `translateX(-${currentScrollPosition}px)`;
              }
            });

        }

    }
  
  
    updateImages();
    window.addEventListener("resize", updateImages);

  images[0].classList.add("active"); 
  setInterval(changeSlide, 3500); 
});

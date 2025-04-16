document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images img");

    function updateImages() {
        const isMobile = window.innerWidth <= 540;
    
        images.forEach((image) => {
          if (isMobile) {
            image.src = `./assets/04.02.25(BANNNER)GP2.png`;
          } else {
            image.src = `./assets/bannergp.png`;
          }
        });
      }
    
      // Llama a la función al cargar la página y al redimensionar
      updateImages();
      window.addEventListener("resize", updateImages);

    images[0].classList.add("active"); 
    setInterval(changeSlide, 3500); 
});
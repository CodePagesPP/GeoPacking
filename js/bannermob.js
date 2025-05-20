document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".images img");

  function updateImages() {
    const isMobile = window.innerWidth <= 540;

    // Detectar si la URL tiene "en" (por ejemplo en.html, /en/index.html, etc)
    const currentPath = window.location.pathname.toLowerCase();
    const isEnglish = currentPath.includes("/en") || currentPath.includes("en.html");

    images.forEach((image) => {
      if (isMobile) {
        image.src = isEnglish
          ? "./assets/04.02.25(BANNNER)GP2i.png"
          : "./assets/04.02.25(BANNNER)GP2.png";
      } else {
        image.src = isEnglish
          ? "./assets/04.02.25(BANNNER)GPI.png"
          : "./assets/bannergp.png";
      }
    });
  }

  updateImages();
  window.addEventListener("resize", updateImages);

  images[0].classList.add("active");
  setInterval(changeSlide, 3500);
});

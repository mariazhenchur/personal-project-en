 /* document.addEventListener("partialsLoaded", async () => {
    await import("./burger-menu.js");
    await import('./about-us-card.js');
  }); 
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".falling-image");

    setTimeout(function () {
        image.classList.add("fallen");
    }, 1000); // Adjust the time (in milliseconds) as needed
});
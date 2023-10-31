document.addEventListener("partialsLoaded", async () => {
  await import("./burger-menu.js");
  await import('./home-our-menu.js');
  await import('./blog.js');
  await import('./section-carousel-price.js');
});

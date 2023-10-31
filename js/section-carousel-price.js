const buttonIcecreamAlignmentLeft = document.querySelector(".carousel__button_icecream_alignment--left");
const buttonIcecreamAlignmentRight = document.querySelector(".carousel__button_icecream_alignment--right");

const icecreamAlignmentSlides = [
  '<div class="carousel__icecream_alignment"><img class="alignment__image" src="images/blue.png" alt="Blue-Paradise"><h3 class="alignment__title">Blue Paradise</h3><p class="alignment__description">sour and fruity </p> <p class="alignment_price"> <span> $ 5 </span> / ball </p></div>',
  '<div class="carousel__icecream_alignment"><img class="alignment__image" src="images/mango.png" alt="Mango-Dreams"><h3 class="alignment__title">Mango Dreams</h3><p class="alignment__description">classic tropic taste </p> <p class="alignment_price"> <span>$ 5 </span> / ball </p></div>',
  '<div class="carousel__icecream_alignment"><img class="alignment__image" src="images/phistachio.png" alt="Pistachio-Heaven"><h3 class="alignment__title">Pistachio Heaven</h3><p class="alignment__description">creamy nutty flavor </p> <p class="alignment_price"> <span>$ 5 </span> / ball </p></div>',
  '<div class="carousel__icecream_alignment"><img class="alignment__image" src="images/strawberry.png" alt="Strawberry-Gem"><h3 class="alignment__title">Strawberry Gem</h3><p class="alignment__description">fruity and fresh </p> <p class="alignment_price"> <span>$ 5 </span>/ ball </p></div>',
  '<div class="carousel__icecream_alignment"><img class="alignment__image" src="images/choco.png" alt="Choco-Hazelnut"><h3 class="alignment__title">Choco Hazelnut</h3><p class="alignment__description">rich sweet taste </p> <p class="alignment_price"> <span>$ 5</span> / ball </p></div>'
]

let icecreamAlignmentSlidesIdx = 0;

function icecreamAlignmenRenderSlide() {
  const icecreamAlignmentContainer = document.querySelector('.carousel__icecream_alignment_conteiner');
  icecreamAlignmentContainer.innerHTML = icecreamAlignmentSlides[icecreamAlignmentSlidesIdx];
  if (window.matchMedia('(min-width: 768px)').matches) {
    const secondIcecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : icecreamAlignmentSlidesIdx + 1;
    icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[secondIcecreamAlignmentSlidesIdx];
    if (window.matchMedia('(min-width: 1024px)').matches) {
      const thirdIcecreamAlignmentSlidesIdx = secondIcecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : secondIcecreamAlignmentSlidesIdx + 1;
      icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[thirdIcecreamAlignmentSlidesIdx];
      if (window.matchMedia('(min-width: 1198px)').matches){
        const fourthIcecreamAlignmentSlidesIdx = thirdIcecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : thirdIcecreamAlignmentSlidesIdx + 1;
        icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[fourthIcecreamAlignmentSlidesIdx];
      }
    }
  }
}

function icecreamAlignmenNextSlide() {
    icecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : icecreamAlignmentSlidesIdx + 1;
    icecreamAlignmenRenderSlide();
}

function icecreamAlignmenPrevSlide() {
    icecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx - 1 < 0 ? icecreamAlignmentSlides.length - 1 : icecreamAlignmentSlidesIdx - 1;
    icecreamAlignmenRenderSlide();
}

icecreamAlignmenRenderSlide()

buttonIcecreamAlignmentLeft.addEventListener("click", icecreamAlignmenPrevSlide);
buttonIcecreamAlignmentRight.addEventListener("click", icecreamAlignmenNextSlide);

window.addEventListener('resize', icecreamAlignmenRenderSlide);
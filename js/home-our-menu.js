const desserts = [
    {
      id: "1",
      name: "Sweet Joy",
      image: "images/dessert1.png",
      price: "$15",
    },
    {
      id: "2",
      name: "Gentle Cloud",
      image: "images/dessert2.png",
      price: "$12",
    },
    {
      id: "3",
      name: "Rose Sparkle",
      image: "images/dessert3.png",
      price: "$15",
    },
    {
      id: "4",
      name: "Tropical Day",
      image: "images/dessert4.png",
      price: "$18",
    },
    {
      id: "5",
      name: "Hazelnut",
      image: "images/dessert5.png",
      price: "$12",
    },
    {
      id: "6",
      name: "Berry Mix",
      image: "images/dessert6.png",
      price: "$13",
    },
    {
      id: "7",
      name: "Siesta",
      image: "images/dessert7.png",
      price: "$15",
    },
    {
      id: "8",
      name: "Choco Cream",
      image: "images/dessert8.png",
      price: "$11",
    },
  ];
  
  const iceCream = [
    {
      id: "1",
      name: "Lemon & Lime",
      image: "images/icecream1.png",
      price: "$6",
    },
    {
      id: "2",
      name: "Blackberry",
      image: "images/icecream2.png",
      price: "$7",
    },
    {
      id: "3",
      name: "Mango",
      image: "images/icecream3.png",
      price: "$5",
    },
    {
      id: "4",
      name: "Lavender",
      image: "images/icecream4.png",
      price: "$8",
    },
    {
      id: "5",
      name: "Vanilla",
      image: "images/icecream5.png",
      price: "$4",
    },
    {
      id: "6",
      name: "Chocolate",
      image: "images/icecream6.png",
      price: "$5",
    },
    {
      id: "7",
      name: "Strawberry",
      image: "images/icecream7.png",
      price: "$5",
    },
    {
      id: "8",
      name: "Pistachio",
      image: "images/icecream8.png",
      price: "$5",
    },
  ];
  
  const drinks = [
    {
      id: "1",
      name: "Strawberry",
      image: "images/drink1.png",
      price: "$10",
    },
    {
      id: "2",
      name: "Caramel",
      image: "images/drink2.png",
      price: "$8",
    },
    {
      id: "3",
      name: "Berry Shake",
      image: "images/drink3.png",
      price: "$12",
    },
    {
      id: "4",
      name: "Choco-Choco",
      image: "images/drink4.png",
      price: "$9",
    },
    {
      id: "5",
      name: "Mango Shake",
      image: "images/drink5.png",
      price: "$8",
    },
    {
      id: "6",
      name: "Orange Shake",
      image: "images/drink6.png",
      price: "$9",
    },
    {
      id: "7",
      name: "Banana Shake",
      image: "images/drink7.png",
      price: "$8",
    },
    {
      id: "8",
      name: "Ice Latte",
      image: "images/drink8.png",
      price: "$10",
    },
];
  
const menuPages = [desserts, iceCream, drinks];
  
function renderMenuPosition(positions) {
    let menuPositionsDomString = "";
    for (const position of positions) {
      menuPositionsDomString += `
          <div class="menu-position">
              <div class="menu-position-img">
                  <img src="${position.image}" alt="${position.name}">
              </div>
              <div class="menu-position-text">
                  <h3 class="menu-position-name">${position.name} /<span class="menu-position-price">${position.price}</span></h3>
              </div>
          </div>
          `;
    }
    const menuPageContainer = document.querySelector(".menu-pages");
    menuPageContainer.innerHTML = menuPositionsDomString;
}
  
renderMenuPosition(menuPages[0]);
  
let menuNavSectionsButton = document.querySelectorAll(
    ".menu-nav-sections-button",
);
  
menuNavSectionsButton.forEach((button) => {
    button.addEventListener("click", (_) => {
      menuNavSectionsButton.forEach((button) => {
        button.classList.remove("menu-nav-sections-button-active")
      });
      button.classList.toggle("menu-nav-sections-button-active");
      renderMenuPosition(menuPages[`${button.dataset.id}`]);
    });
});
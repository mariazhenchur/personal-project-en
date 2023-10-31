const articles = [
    {
        id: "1",
        name: "-15% Discount on 10 Tastes!",
        description: "Hurry up to use your discount! We offer special prices on top spring tastes until 10 June.",
        imageDescription: "Ice Cream Tastes",
        image: "images/blog-card-discount.png"
    },
    {
        id: "2",
        name: "The History of Ice Cream",
        description: "Many people know that the original ice cream comes from Italy. Here is the whole story...",
        imageDescription: "A couple with ice cream",
        image: "images/blog-card-history.png"
    },
    {
        id: "3",
        name: "Celebrate Birthdays with Us!",
        description: "Mr. Snowman's Birthday Parties are great for kids of all ages. We have lots of sweet treats.",
        imageDescription: "Ice cream for birthday parties",
        image: "images/blog-card-birthday.png"
    },
];

renderBlogArticles(articles);

function renderBlogArticles(articles) {
    let articlesDomString = '';
    for (const article of articles) {
        articlesDomString += `
        <div class="blog__article article">
            <img class="article__image" src="${article.image}" alt="${article.imageDescription}">
            <h4 class="article__title">${article.name}</h4>
            <p class="article__description">${article.description}</p>
            <a class="blog__button" href="#">Learn More</a>
        </div>
        `;
    }
    const articlesContainer = document.querySelector('.blog__articles');
    articlesContainer.innerHTML = articlesDomString;
}
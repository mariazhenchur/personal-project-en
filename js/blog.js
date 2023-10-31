const articles = [
    {
        id: "1",
        name: "Anne With An E",
        description: "Description",
        imageDescription: "Ice Cream Tastes",
        image: "images/article-anne-w.png"
    },
    {
        id: "2",
        name: "Lockwood & Co.",
        description: "Description",
        imageDescription: "A couple with ice cream",
        image: "images/article-lockwood.png"
    },
    {
        id: "3",
        name: "The Queen's Gambit",
        description: "Description",
        imageDescription: "Ice cream for birthday parties",
        image: "images/article-queen.png"
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
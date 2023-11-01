const articles = [
    {
        id: "1",
        name: "Anne With An E",
        description: "Step into Anne's enchanting world in 'Anne with an E.' Immerse in English with interactive subtitles and vocabulary tools while following Anne's heartwarming journey in Green Gables. It's not just a series; it's your gateway to learn English through Anne's magic.",
        imageDescription: "Ice Cream Tastes",
        image: "images/article-anne-w.png"
    },
    {
        id: "2",
        name: "Lockwood & Co.",
        description: "Unlock the supernatural with 'Lockwood & Co.' Explore ghostly London, join young investigators, and sharpen your English with interactive subtitles. It's more than a series; it's your key to mastering English through enigmatic adventures.",
        imageDescription: "A couple with ice cream",
        image: "images/article-lockwood.png"
    },
    {
        id: "3",
        name: "The Queen's Gambit",
        description: "Master English with 'The Queen's Gambit.' Join Beth's chess journey, enhance your language skills with interactive subtitles, and dive into the world of grandmaster-level competition. It's your chance to make a winning move for language proficiency.",
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
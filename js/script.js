AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
});

let currentArticle = 1;

function showArticle(index) {
    const articles = document.querySelectorAll('.row.d-flex.align-items-start');
    articles.forEach((article, i) => {
        article.style.display = i === index ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.row.d-flex.align-items-start');
    let currentArticleIndex = 0;

    document.getElementById('prev-article').addEventListener('click', function () {
        if (currentArticleIndex > 0) {
            currentArticleIndex--;
            showArticle(currentArticleIndex);
        }
    });

    document.getElementById('next-article').addEventListener('click', function () {
        if (currentArticleIndex < articles.length - 1) {
            currentArticleIndex++;
            showArticle(currentArticleIndex);
        }
    });

    showArticle(currentArticleIndex);
});

window.addEventListener('load', () => {
    const url = new URL(window.location.href);
    const articleNumber = parseInt(url.pathname.replace('/news', '')) || 1;
    currentArticle = articleNumber;
    showArticle(currentArticle - 1);
});

let scrollpos = window.scrollY;
const header = document.querySelector(".navbar");
const header_height = header.offsetHeight;

const add_class_on_scroll = () =>
    header.classList.add("scrolled", "shadow-sm");
const remove_class_on_scroll = () =>
    header.classList.remove("scrolled", "shadow-sm");

window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});
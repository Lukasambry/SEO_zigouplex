AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
});

let currentArticle = 1;

function navigateArticle(direction) {
    const totalArticles = document.querySelectorAll('.article').length;
    document.getElementById(`article${currentArticle}`).style.display = 'none';
    currentArticle += direction;

    if (currentArticle < 1) {
        currentArticle = totalArticles;
    } else if (currentArticle > totalArticles) {
        currentArticle = 1;
    }

    document.getElementById(`article${currentArticle}`).style.display = 'block';
    history.pushState(null, '', `/news${currentArticle > 1 ? currentArticle : ''}`);
}

window.addEventListener('load', () => {
    const url = new URL(window.location.href);
    const articleNumber = parseInt(url.pathname.replace('/news', '')) || 1;
    currentArticle = articleNumber;
    document.getElementById(`article${currentArticle}`).style.display = 'block';
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
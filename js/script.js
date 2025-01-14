document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true
    });

    const getCurrentArticleNumber = () => {
        const path = window.location.pathname;
        if (path === '/news') return 1;
        const match = path.match(/\/news(\d)/);
        return match ? parseInt(match[1]) : 1;
    };

    const currentArticle = getCurrentArticleNumber();

    const prevButton = document.getElementById('prev-article');
    const nextButton = document.getElementById('next-article');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentArticle > 1) {
                const prevUrl = currentArticle === 2 ? '/news' : `/news${currentArticle - 1}`;
                window.location.href = prevUrl;
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = `/news${currentArticle + 1}`;
        });
    }

    const updateNavigationButtons = () => {
        if (prevButton) {
            prevButton.style.display = currentArticle === 1 ? 'none' : 'block';
        }
    };

    updateNavigationButtons();
});

// Navbar scroll effect
let scrollpos = window.scrollY;
const header = document.querySelector(".navbar");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm");
const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm");

window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});
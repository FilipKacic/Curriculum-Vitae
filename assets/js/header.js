// Variables to track scroll behavior
let lastScrollTop = 0;
const header = document.querySelector("header");

// Hide and show header on scroll
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop)  {
        // Scroll up - show entire header
        header.style.transform = "translateY(0)";
    } else {
        // Scroll down - hide entire header
        header.style.transform = "translateY(-100%)";
    }

    lastScrollTop = scrollTop;
});

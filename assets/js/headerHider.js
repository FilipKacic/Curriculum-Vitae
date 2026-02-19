// Select the header element
const header = document.querySelector('header');

let lastScroll = 0; // keeps track of last scroll position

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

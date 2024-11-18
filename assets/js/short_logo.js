function changeLogoText() {
    const logo = document.getElementById('logo');
    if (window.matchMedia('(max-width: 810px)').matches) {
        logo.textContent = 'CV'; // Change the text when the screen width is <= 810px
    } else {
        logo.textContent = 'Curriculum Vitae'; // Revert back when the screen width is > 810px
    }
}

// Listen for changes in screen width
window.addEventListener('resize', changeLogoText);

// Initial check when the page loads
changeLogoText();

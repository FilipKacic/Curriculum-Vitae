function adjustNavPosition() {
    const bannerHeight = document.getElementById('banner').offsetHeight;
    const nav = document.querySelector('nav');
    
    // Set the top of the nav to be the height of the banner
    nav.style.top = `${bannerHeight}px`;
}

// Adjust the position on page load
window.addEventListener('load', adjustNavPosition);

// Adjust the position on window resize (this also covers zoom in/out)
window.addEventListener('resize', adjustNavPosition);

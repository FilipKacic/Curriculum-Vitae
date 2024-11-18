document.getElementById("styleSwitcher").addEventListener("click", function() {
    const elements = document.querySelectorAll("body, body *");
    elements.forEach(element => {
        element.classList.toggle("night");
    });
});

document.getElementById("navSwitcher").addEventListener("click", function() {
    const navbar = document.querySelector("nav");
    const navSwitcher = document.getElementById("navSwitcher");

    navbar.classList.toggle("visible");
    
    navSwitcher.classList.toggle("active", navbar.classList.contains("visible"));

    const isNavbarVisible = navbar.classList.contains("visible");
    if (isNavbarVisible) {
        navSwitcher.alt = "Hide navigation!";
    } else {
        navSwitcher.alt = "Show navigation!";
    }
});


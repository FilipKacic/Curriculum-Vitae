document.addEventListener("DOMContentLoaded", function() {
    // calculates the height of the header and sets the top of the dropdown menu
    function setDropdownMenuTop() {
        const headerHeight = document.querySelector('header').offsetHeight;
        const icon = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--icon'));
        const space = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--space'));
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.top = `calc(${headerHeight}px - ${icon} + ${space} + ${space})`;
    }
    setDropdownMenuTop();

    // reveals the dropdown menu and makes the dropdown menu button active
    const button = document.querySelector('.dropdown-menu-button');
    const menu = document.querySelector('.dropdown-menu');

    button.addEventListener('click', function() {
        menu.classList.toggle('show');
        button.classList.toggle('active');
    });

    // closes the dropdown menu when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.remove('show');
            button.classList.remove('active');
        }
    });

    // prevent clicks inside the menu from closing it
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // adds a 'currentSection' class to the first link by default
    const firstLink = menu.querySelector('a');
    firstLink.classList.add('currentSection');

    // makes internal links smooth scroll and updates the current section class
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = document.querySelectorAll('.dropdown-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetOffset = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });

            // remove the 'currentSection' class from all links
            navLinks.forEach(link => {
                link.classList.remove('currentSection');
            });

            // add the 'currentSection' class to clicked link with a smooth transition
            this.classList.add('currentSection');
        });
    });

    // changes the current section based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // loops through each section and check if it's in the viewport
        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement.offsetTop - headerHeight <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight > scrollPosition) {
                // removes the 'currentSection' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('currentSection');
                });
                // adds the 'currentSection' class to current section
                link.classList.add('currentSection');
            }
        });
    });
});

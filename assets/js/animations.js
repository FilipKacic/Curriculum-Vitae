const sections = document.querySelectorAll("section");

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in"); // Add fade-in class when the section enters the viewport
            observer.unobserve(entry.target); // Stop observing once the section has been animated
        }
    });
}, { threshold: 0.1 }); // Trigger animation when 10% of the section is in the viewport

// Observe each section
sections.forEach((section) => observer.observe(section));

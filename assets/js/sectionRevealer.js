document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // If you want animation only once:
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1 // trigger when 10% of section is visible
        }
    );

    sections.forEach(section => {
        section.classList.add('section'); // ensure each has the starting style
        observer.observe(section);
    });
});

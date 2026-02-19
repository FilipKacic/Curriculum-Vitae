const typewriters = document.querySelectorAll('.typewriter');

typewriters.forEach(el => {
    const text = el.getAttribute('data-text');
    let index = 0;
    function type() {
        if (index <= text.length) {
            el.textContent = text.substring(0, index);
            index++;
            setTimeout(type, 150);
        }
    }
    type();
});

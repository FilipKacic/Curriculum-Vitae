// script.js or main.js (defer loaded)
document.addEventListener("DOMContentLoaded", () => {
    // --- Update current year ---
    const yearSpan = document.getElementById("current_year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // --- Update age ---
    const ageSpan = document.getElementById("age");
    if (ageSpan) {
        // Replace with your birthdate (YYYY, MM-1, DD)
        const birthDate = new Date(1999, 10, 19); // Example: April 15, 2001
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        // Adjust age if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        ageSpan.textContent = age;
    }
});

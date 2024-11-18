// Get current date once
const today = new Date();
const currentYear = today.getFullYear();
document.getElementById("current_year").textContent = currentYear;

// Function to calculate age based on birth date
function calculateAge(year, month, day) {
    let age = currentYear - year;
    
    // Adjust age if birthday hasn't occurred yet this year
    if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
        age--;
    }
    return age;
}

// Update age in the HTML
document.getElementById("age").textContent = calculateAge(1999, 9, 19);  // 19th of October, 1999 years after Jesus Christ our lord and savior

// download.js
document.addEventListener("DOMContentLoaded", () => {
    // Button 1 - Diploma PDF
    const btn1 = document.getElementById("download_btn_1");
    if (btn1) {
        btn1.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "assets/docs/diploma.pdf";
            link.download = "Diploma.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Button 2 - Final Work PDF
    const btn2 = document.getElementById("download_btn_2");
    if (btn2) {
        btn2.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = "assets/docs/zavrsni_rad.pdf";
            link.download = "Zavrsni_rad.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

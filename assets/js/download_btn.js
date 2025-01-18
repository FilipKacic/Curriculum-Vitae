function setupDownload(buttonId, filePath, fileName) {
    document.getElementById(buttonId).addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = filePath;
        link.download = fileName;
        link.click();
    });
}

setupDownload("download_btn", "assets/docs/degree.pdf", "degree.pdf");
setupDownload("download_btn_2", "assets/docs/kacic_filip_zavrsni_rad.pdf", "final_work.pdf");

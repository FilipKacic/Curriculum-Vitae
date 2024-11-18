document.getElementById("download_btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "/assets/docs/degree.pdf";
    link.download = "degree.pdf";
    link.click();
});
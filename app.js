(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function setDownloadLink(elementId, filePath) {
    var linkElement = document.getElementById(elementId);
    if (linkElement) {
        linkElement.href = filePath;
    }
}

const cv = "./Ikemdinachi Resume $.pdf";
setDownloadLink("download-link", cv);
setDownloadLink("download-links", cv);
setDownloadLink("download-link3", cv);
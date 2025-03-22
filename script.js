document.getElementById("menu-toggle").addEventListener("click", function () {
    let menu = document.getElementById("nav-links");
    
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".platform-tab span").forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from the previously selected tab
            document.querySelector(".platform-tab .active").classList.remove("active");
            this.classList.add("active");

            // Get the correct image based on the selected tab
            let platform = this.dataset.platform;
            let screenshot = document.getElementById("showcase-image");

            if (screenshot) {
                if (platform === "Instagram") {
                    screenshot.src = "1.jpg";  
                } else if (platform === "TikTok") {
                    screenshot.src = "2.jpg";
                } else if (platform === "YouTube") {
                    screenshot.src = "3.jpg";
                }
            }
        });
    });
});
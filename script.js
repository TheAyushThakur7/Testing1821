document.getElementById("menu-toggle").addEventListener("click", function () {
    let menu = document.getElementById("nav-links");
    
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
});
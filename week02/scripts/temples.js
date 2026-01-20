document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Hamburger toggle
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        if (navMenu.classList.contains("open")) {
            menuButton.textContent = "✖"; // close icon
        } else {
            menuButton.textContent = "≡"; // hamburger icon
        }
    });
});
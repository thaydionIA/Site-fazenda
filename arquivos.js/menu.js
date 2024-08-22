document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    closeMenu.addEventListener("click", function() {
        sidebar.classList.remove("active");
    });
});

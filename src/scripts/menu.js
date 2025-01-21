// Declaration of element objects.
const menuNAV = document.getElementById("menu"); // <----------------- The navigation menu.
const openMenuBTN = document.getElementById("open-menu-btn"); // <---- The button to open the menu.
const closeMenuBTN = document.getElementById("close-menu-btn"); // <-- The button to close the menu.

// Eventlisteners:
openMenuBTN.addEventListener("click", toggleMenu);
closeMenuBTN.addEventListener("click", toggleMenu);

// Toggles the display of the elements depending on the current display of the navigation menu.
function toggleMenu() {
    if (window.getComputedStyle(menuNAV).display === "none") {
        menuNAV.style.display = "block";
        closeMenuBTN.style.display = "block";
        openMenuBTN.style.display = "none";
    } else {
        menuNAV.style.display = "none";
        closeMenuBTN.style.display = "none";
        openMenuBTN.style.display = "block";
    }
}
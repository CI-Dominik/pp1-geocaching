// Initiate variables to get dropdown icon and navigation menu

const dropdownIcon = document.querySelector("#dropdown-icon");
const navMenu = document.querySelector("#mobile-nav");

// Add nav-active class once dropdownIcon is clicked

dropdownIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
})

// Remove navigation menu once the window is resized

addEventListener("resize", () => {
    navMenu.classList.remove("nav-active");
})
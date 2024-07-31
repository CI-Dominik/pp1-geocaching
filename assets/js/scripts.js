const dropdownIcon = document.querySelector("#dropdown-icon");
const navMenu = document.querySelector("#mobile-nav");

dropdownIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
})
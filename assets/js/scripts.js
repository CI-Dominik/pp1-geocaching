// Initiate variables to get dropdown icon and navigation menu

const dropdownIcon = document.querySelector("#dropdown-icon");
const navMenu = document.querySelector("#mobile-nav");

// Add nav-active class once dropdownIcon is clicked

dropdownIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
});

// Remove navigation menu once the window is resized

addEventListener("resize", () => {
    navMenu.classList.remove("nav-active");
});

// Adventure dropdown menu

function openDropdown(dropdownMenu) {

    const clickedAdventure = dropdownMenu.dataset.adventure;
    const clickedButton = dropdownMenu.dataset.button;
    const dropdownElements = document.querySelectorAll(".adventure-dropdown");
    const dropdownArrow = document.querySelectorAll(".adventure-dropdown-buttons");
    
    for (let i = 0; i < dropdownElements.length; i++) {
        if (dropdownElements[i].dataset.button == clickedButton && dropdownElements[i].dataset.adventure == clickedAdventure) {
            dropdownElements[i].classList.toggle("adventure-dropdown-shown");

            // Add button class to rotate arrow

            dropdownArrow[i].classList.toggle("button-clicked");
        }
    }

}
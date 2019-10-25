navIcon = document.querySelector("#nav");
navMenu = document.querySelector("#mobile-menu");

const toggleNav = () => {
    navMenu.classList.toggle("hide-element");
    navIcon.classList.toggle("nav-icon");
    navIcon.classList.toggle("cross");
}
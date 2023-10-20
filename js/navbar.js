const header = document.querySelector("nav .container");
const headerImg = document.querySelector(".logo img");
const links = document.querySelectorAll(".links a");

// window.addEventListener("scroll", () => {});

const hamburger_menu = document.querySelector(".hamburger-menu");
const bars = document.querySelector(".hamburger-menu .bar");
const navbar = document.querySelector("header nav");

function closeMenu() {
  document.body.classList.remove("stop-scrolling");
  navbar.classList.remove("open");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

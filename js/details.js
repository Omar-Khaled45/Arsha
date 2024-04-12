// Scroll To Top On Click
const scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = () => {
  if (window.scrollY >= 100) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
};

scrollToTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Toggle Menu Show & Toggle Menu Icon Change On Click
const toggleBtn = document.querySelector(".toggle-menu");
const toggleMenu = document.querySelector("#header ul.nav");

// Create Overlay On Mobile
let overlay = document.createElement("div");
header.parentNode.insertBefore(overlay, header);

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("clicked");
  toggleMenu.classList.toggle("show");
  if (
    toggleBtn.classList.contains("clicked") &&
    toggleMenu.classList.contains("show")
  ) {
    setTimeout(() => {
      toggleMenu.classList.add("visible");
    }, 300);
  } else {
    toggleMenu.classList.remove("visible");
    dropdownMenu.classList.remove("show");
    dropEndMenu.classList.remove("show");
    dropdown.classList.remove("active");
    dropEnd.classList.remove("active");
  }

  overlay.classList.toggle("overlay-mobile");
});

// Dropdown Menus
const dropdown = document.querySelector(
  "#header .navbar .nav-item.dropdown .nav-link"
);
const dropEnd = document.querySelector(
  "#header .navbar .nav-item.dropdown ul.menu .drop-end  > .dropdown-item"
);
const dropdownMenu = document.querySelector(
  "#header .navbar .nav-item.dropdown ul.menu"
);
const dropEndMenu = document.querySelector(
  "#header .navbar .nav-item.dropdown ul.menu .drop-end .deep-menu"
);

dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
  dropdown.classList.toggle("active");
  if (dropEndMenu.classList.contains("show")) {
    dropEndMenu.classList.remove("show");
    dropEnd.classList.remove("active");
  }
});

dropEnd.addEventListener("click", () => {
  dropEndMenu.classList.toggle("show");
  dropEnd.classList.toggle("active");
});

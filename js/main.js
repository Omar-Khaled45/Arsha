// Add Class To Nav Bar & Scroll To Top Button on Scroll
const header = document.getElementById("header");
const scrollToTop = document.querySelector(".scroll-to-top");

// Nav Link Active On Scroll to The Section
const navLinks = document.querySelectorAll("#header .navbar ul.nav .nav-link");
const sections = document.querySelectorAll(".section");

window.onscroll = () => {
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
    scrollToTop.classList.add("active");
  } else {
    header.classList.remove("scrolled");
    scrollToTop.classList.remove("active");
  }

  // Nav Link Active On Scroll to The Section
  sections.forEach((sec) => {
    if (
      window.scrollY >= sec.offsetTop - 200 &&
      window.scrollY < sec.offsetTop + sec.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sec.getAttribute("id")}`) {
          link.classList.add("active");
        }
      });
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("dropdown-link")) {
      toggleBtn.classList.remove("clicked");
      toggleMenu.classList.remove("show");
      toggleMenu.classList.remove("visible");
      overlay.classList.remove("overlay-mobile");
      dropdownMenu.classList.remove("show");
      dropEndMenu.classList.remove("show");
      dropdown.classList.remove("active");
      dropEnd.classList.remove("active");
    }
  });
});

// Toggle Menu Show & Toggle Menu Icon Change On Click
const toggleBtn = document.querySelector(".toggle-menu");
const toggleMenu = document.querySelector("#header ul.nav");

// Create Overlay On Mobile
let overlay = document.createElement("div");
header.parentNode.insertBefore(overlay, header);

toggleBtn.addEventListener("touchstart", () => {
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

dropdown.addEventListener("touchstart", () => {
  dropdownMenu.classList.toggle("show");
  dropdown.classList.toggle("active");
  if (dropEndMenu.classList.contains("show")) {
    dropEndMenu.classList.remove("show");
    dropEnd.classList.remove("active");
  }
});

dropEnd.addEventListener("touchstart", () => {
  dropEndMenu.classList.toggle("show");
  dropEnd.classList.toggle("active");
});

// Scroll To Top On Click
scrollToTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Skill Progress
const skillSec = document.querySelector(".skills");
const progressBars = document.querySelectorAll(
  ".skills .progress .progress-bar "
);

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillSec.offsetTop - 200) {
    progressBars.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});

// Put Active Class on Filter Menu
handleActive(document.querySelectorAll(".filter-list li"));

// Handle Active Function
function handleActive(el) {
  el.forEach((e) => {
    e.addEventListener("click", (e) => {
      el.forEach((e) => {
        e.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
}

// Filter Images
const filterList = document.querySelectorAll(".portfolio .filter-list li");
const imgsContainer = document.querySelectorAll(".portfolio .row .item");
const portfolioContainer = document.querySelector(
  ".portfolio .portfolio-container"
);

filterList.forEach((li) => {
  li.addEventListener("click", () => {
    imgsContainer.forEach((img) => {
      img.classList.add("img-hide");
      if (
        img.classList.contains(li.dataset.filter) ||
        li.dataset.filter === "all"
      ) {
        img.classList.remove("img-hide");
      }
    });
  });
});

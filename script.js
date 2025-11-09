const sections = document.querySelectorAll("main > section");
const navLinks = document.querySelectorAll(".nav-link");

const headerHeight = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--header-height')
);

// Highlight tab on scroll
function highlightNavOnScroll() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 10;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", highlightNavOnScroll);

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: "smooth"
      });
    }
  });
});

highlightNavOnScroll();

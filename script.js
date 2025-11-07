// === Single-page navigation highlight ===
const sections = document.querySelectorAll("main > section"); // only top-level sections
const navLinks = document.querySelectorAll(".nav-link");

// Get header height dynamically
const headerHeight = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--header-height')
);

// Highlight nav link on scroll
function highlightNavOnScroll() {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 5; // small buffer
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

// Scroll listener
window.addEventListener("scroll", highlightNavOnScroll);

// Smooth scroll on nav link click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Initialize nav highlight
highlightNavOnScroll();

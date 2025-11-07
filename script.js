// === Single-page navigation highlight ===
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

// Get header height dynamically from CSS variable
const headerHeight = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--header-height')
);

// Function to highlight nav link based on scroll position
function highlightNavOnScroll() {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 10; // 10px buffer
    if (window.scrollY >= sectionTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    // Match href ending with section id
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active");
    }
  });
}

// Add scroll listener
window.addEventListener("scroll", highlightNavOnScroll);

// Smooth scroll on nav link click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

// Initialize highlight on page load
highlightNavOnScroll();

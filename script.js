// === Single-page navigation highlight ===

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to highlight nav link based on scroll position
function highlightNavOnScroll() {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160; // slightly above header
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

// Optional: smooth scroll on nav link click (if not handled by CSS scroll-behavior)
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 130, // adjust for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Initialize highlight on page load
highlightNavOnScroll();

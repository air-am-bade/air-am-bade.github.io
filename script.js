// Highlight active nav link on scroll (for index.html)
// and keep correct highlight on other pages

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to set active link based on scroll position (for index.html)
function highlightOnScroll() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}` || link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

// Function to set active link based on current page (for other HTML files)
function highlightCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === path || href === `${path}#home`);
  });
}

// Run correct highlight logic depending on page type
if (sections.length > 0) {
  // We're likely on index.html
  window.addEventListener("scroll", highlightOnScroll);
} else {
  // We're on another page (why-join.html, how-it-works.html, about.html)
  highlightCurrentPage();
}

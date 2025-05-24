document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastUpdatedSpan = document.getElementById("last-updated");
  const date = new Date();

  // Set the current year dynamically
  yearSpan.textContent = date.getFullYear();

  // Set the last modified date dynamically
  lastUpdatedSpan.textContent = document.lastModified;

  // Handle mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});



// JavaScript to handle year and last updated date

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastUpdatedSpan = document.getElementById("last-updated");
  const date = new Date();

  yearSpan.textContent = date.getFullYear();
  lastUpdatedSpan.textContent = document.lastModified;

  // Handle mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


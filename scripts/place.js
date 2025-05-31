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

  // Calculate wind chill factor
  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
  const windChillElement = document.getElementById("wind-chill");

  function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
  }

  if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed) + "°C";
  } else {
    windChillElement.textContent = "N/A";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastUpdatedSpan = document.getElementById("last-updated");
  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
  const windChillSpan = document.getElementById("wind-chill");

  // Set year and last updated
  yearSpan.textContent = new Date().getFullYear();
  lastUpdatedSpan.textContent = document.lastModified;

  // Responsive menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Wind Chill Function (used only if conditions are met)
  const calculateWindChill = (t, v) =>
    13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

  if (temp <= 10 && windSpeed > 4.8) {
    const chill = Math.round(calculateWindChill(temp, windSpeed));
    windChillSpan.textContent = `${chill} °C`;
  } else {
    windChillSpan.textContent = "N/A";
  }
});


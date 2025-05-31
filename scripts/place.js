document.addEventListener("DOMContentLoaded", () => {
  // Footer dates
  const yearSpan = document.getElementById("year");
  const lastUpdatedSpan = document.getElementById("last-updated");
  yearSpan.textContent = new Date().getFullYear();
  lastUpdatedSpan.textContent = document.lastModified;

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("show");
  });

  // Wind chill calculation
  const calculateWindChill = (temp, windSpeed) => {
    return (13.12 +
      (0.6215 * temp) -
      (11.37 * Math.pow(windSpeed, 0.16)) +
      (0.3965 * temp * Math.pow(windSpeed, 0.16))
    ).toFixed(1);
  };

  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
  const windChillElement = document.getElementById("wind-chill");

  if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
  } else {
    windChillElement.textContent = "N/A";
  }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/rome-italy.jpg"
  },
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake-city.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 21500,
    imageUrl: "images/kyiv-ukraine.jpg"
  }
];

// Function to display temples in the gallery
function displayTemples(templesArray) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  templesArray.forEach((temple) => {
    const card = document.createElement("figure");

    const imgLink = document.createElement("a");
    imgLink.href = temple.imageUrl;
    imgLink.target = "_blank";
    imgLink.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    imgLink.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(imgLink);
    card.appendChild(caption);
    gallery.appendChild(card);
  });
}

// Filter temples by selected criteria
function filterTemples(filter) {
  const filtered = {
    old: temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900),
    new: temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000),
    large: temples.filter((t) => t.area > 90000),
    small: temples.filter((t) => t.area < 10000),
    home: temples
  };

  displayTemples(filtered[filter] || temples);
}

// Add event listeners to nav menu items
document.querySelectorAll("#navMenu a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.textContent.trim().toLowerCase();
    filterTemples(filter);
  });
});

// Dark mode toggle & state persistence
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// On DOM content loaded
window.addEventListener("DOMContentLoaded", () => {
  // Apply dark mode if previously set
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
  displayTemples(temples);

  // Set footer info
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});






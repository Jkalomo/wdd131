const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedication: "1893-04-06",
        area: 253015,
        imageUrl: "images/salt-lake-temple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedication: "2019-03-10",
        area: 41010,
        imageUrl: "images/rome-temple.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedication: "2017-05-21",
        area: 44000,
        imageUrl: "images/paris-temple.jpg"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah",
        dedication: "2016-03-20",
        area: 85000,
        imageUrl: "images/provo-temple.jpg"
    },
    {
        templeName: "Tegucigalpa Honduras Temple",
        location: "Tegucigalpa, Honduras",
        dedication: "2013-03-17",
        area: 28000,
        imageUrl: "images/tegucigalpa-temple.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");

// 🧹 Clear gallery
function clearGallery() {
    gallery.innerHTML = "";
}

// 🏗️ Build a card
function buildCard(temple) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    const content = document.createElement("div");
    content.className = "card-content";
    content.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedication}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    card.appendChild(img);
    card.appendChild(content);
    gallery.appendChild(card);
}

// 🧠 Filter logic
function filterTemples(filter) {
    clearGallery();
    let filtered = [];

    switch (filter.toLowerCase()) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedication) < new Date("1900-01-01"));
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedication) > new Date("2000-01-01"));
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }

    filtered.forEach(buildCard);
}

// 🧭 Event listeners
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.textContent.trim().toLowerCase();
        filterTemples(filter);
    });
});

// 🕓 Footer metadata
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// 🌙 Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ☰ Menu Toggle (optional functionality)
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// 🔁 Initial load
filterTemples("home");
  
  
  
  
  
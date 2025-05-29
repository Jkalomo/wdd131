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
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19830,
        imageUrl: "images/durban.jpg"
    },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/salt-lake.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 44171,
        imageUrl: "images/bangkok.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const modeToggle = document.getElementById("modeToggle");

function displayTemples(filteredTemples) {
    gallery.innerHTML = "";
    filteredTemples.forEach(t => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" />
        <div class="card-content">
          <h3>${t.templeName}</h3>
          <p><strong>Location:</strong> ${t.location}</p>
          <p><strong>Dedicated:</strong> ${t.dedicated}</p>
          <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
        </div>
      `;
        gallery.appendChild(card);
    });
}

function filterTemples(criteria) {
    const filter = criteria.toUpperCase();
    let filtered = temples;

    switch (filter) {
        case "OLD":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "NEW":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "LARGE":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "SMALL":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }

    displayTemples(filtered);
}

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const label = link.textContent.trim();
        filterTemples(label);
        navMenu.classList.remove("open");
    });
});

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    displayTemples(temples);
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
  
  
  
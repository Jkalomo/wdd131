const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "images/Aba-Nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "images/Manti-Utah.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "images/Payson-Utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "images/Yigo-Guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "images/Washington-DC.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "images/Lima-Peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "images/Mexico-City-Mexico.jpg"
  },
  // Added three new temples
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2000, March, 15",
    area: 102000,
    imageUrl: "images/Rome-Italy.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "2010, July, 23",
    area: 8750,
    imageUrl: "images/Tokyo-Japan.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1995, October, 12",
    area: 54000,
    imageUrl: "images/Sydney-Australia.jpg"
  }
];

// Elements
const templeGallery = document.getElementById('templeGallery');
const navMenu = document.getElementById('navMenu');
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');
const modeToggle = document.getElementById('modeToggle');

// Function to parse date string into Date object
function parseDate(dateStr) {
  // dateStr example: "2005, August, 7"
  return new Date(dateStr);
}

// Create temple card element
function createTempleCard(temple) {
  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  figure.appendChild(img);

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = temple.templeName;
  figure.appendChild(figcaption);

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  location.classList.add('temple-info');
  figure.appendChild(location);

  const dedicatedDate = document.createElement('p');
  dedicatedDate.textContent = `Dedicated: ${temple.dedicated}`;
  dedicatedDate.classList.add('temple-info');
  figure.appendChild(dedicatedDate);

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  area.classList.add('temple-info');
  figure.appendChild(area);

  return figure;
}

// Render temples based on a filter function
function renderTemples(filterFn = () => true) {
  templeGallery.innerHTML = '';
  const filteredTemples = temples.filter(filterFn);

  if (filteredTemples.length === 0) {
    templeGallery.textContent = "No temples match this filter.";
    return;
  }

  filteredTemples.forEach(temple => {
    templeGallery.appendChild(createTempleCard(temple));
  });
}

// Filters
const filters = {
  all: () => true,
  old: (temple) => parseDate(temple.dedicated).getFullYear() < 1900,
  new: (temple) => parseDate(temple.dedicated).getFullYear() > 2000,
  large: (temple) => temple.area > 90000,
  small: (temple) => temple.area < 10000
};

// Event listeners for nav menu filters
navMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    renderTemples(filters[filter]);
  }
});

// Dark mode toggle
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Initialize footer
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

// Initial render with all temples
renderTemples(filters.all);

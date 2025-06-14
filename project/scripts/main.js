// Sample products array
const products = [
  {
    id: 1,
    name: "Organic Cotton Onesie",
    category: "Clothing",
    price: "$19.99",
    image: "images/onesie.jpg",
    description: "Soft, breathable, and perfect for sensitive baby skin."
  },
  {
    id: 2,
    name: "Infant Car Seat",
    category: "Travel",
    price: "$129.99",
    image: "images/carseat.jpg",
    description: "Safety-tested and comfortable for all trips."
  }
];

// Load products dynamically
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("product-container");
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
    </div>
  `).join('');
});

// Wishlist using localStorage
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist.");
  }
}

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
    },
    {
        id: 3,
        name: "Organic Cotton Hat",
        category: "Clothing",
        price: "$9.99",
        image: "images/hat.jpg",
        description: "Keep your baby warm and cozy."
    },
    {
        id: 4,
        name: "Travel Stroller",
        category: "Travel",
        price: "$199.99",
        image: "images/stroller.jpg",
        description: "Lightweight and easy to fold."
    }
];

const productList = document.getElementById('product-list');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayProducts(filter = "All") {
    let filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

    productList.innerHTML = filteredProducts.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      </div>
    `).join('');
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProducts(button.dataset.category);
    });
});

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

// Initial load
displayProducts();
  
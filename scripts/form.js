// Product array
const products = [
    { id: "prod1", name: "Wireless Mouse" },
    { id: "prod2", name: "Gaming Keyboard" },
    { id: "prod3", name: "4K Monitor" },
    { id: "prod4", name: "USB-C Hub" },
    { id: "prod5", name: "Noise Cancelling Headphones" }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
    if (select) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.name;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }

    const now = new Date();
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    const timestamp = now.toLocaleString(undefined, options);
    const dateSpan = document.getElementById("lastModified");
    if (dateSpan) {
        dateSpan.textContent = timestamp;
    }
});
  
  
  

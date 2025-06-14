const form = document.getElementById('contact-form');

// Load saved form data if any
window.addEventListener('load', () => {
    const saved = JSON.parse(localStorage.getItem('contactForm'));
    if (saved) {
        form.name.value = saved.name || '';
        form.email.value = saved.email || '';
        form.message.value = saved.message || '';
    }
});

form.addEventListener('input', () => {
    // Save form data on input
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    localStorage.setItem('contactForm', JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        alert("Please fill out the form correctly.");
        return;
    }
    alert(`Thank you for contacting Baby Santy Boutique, ${form.name.value}!`);
    localStorage.removeItem('contactForm');
    form.reset();
});

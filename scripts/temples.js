const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  // Toggle symbol
  menuBtn.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Dark mode toggle
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('mode', mode);
});

// Footer updates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;



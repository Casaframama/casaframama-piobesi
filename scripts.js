// Carousel Script
const carousel = document.querySelector('.carousel-inner');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show Next Image
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

// Show Previous Image
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

// Optional Automatic Carousel Scroll
//setInterval(() => {
//  currentIndex = (currentIndex + 1) % carousel.children.length;
//  updateCarousel();
//}, 3000);

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Set initial mode based on user preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
} else {
  document.body.classList.add('light-mode');
  darkModeToggle.textContent = '🌙';
}


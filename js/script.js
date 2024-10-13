// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Seafood-menu di klik
document.querySelector("#seafood-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik di luar sidebar untuk menghilangkan nav
const seafood = document.querySelector("#seafood-menu");

document.addEventListener("click", function (e) {
  if (!seafood.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// flip otomatis di hero img
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Menjalankan slide secara otomatis setiap 3 detik
setInterval(nextSlide, 3000);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

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
const flipCards = document.querySelectorAll(".flip-card-inner");
let imagesFront = ["image1.jpg", "image3.jpg", "image5.jpg"];
let imagesBack = ["image2.jpg", "image4.jpg", "image6.jpg"];

function flipCard(card, delay) {
  setTimeout(() => {
    card.style.transform =
      card.style.transform === "rotateY(180deg)"
        ? "rotateY(0deg)"
        : "rotateY(180deg)";

    // Setelah flip, tukar gambar
    setTimeout(() => {
      const frontImage = card.querySelector(".flip-card-front img");
      const backImage = card.querySelector(".flip-card-back img");
      [frontImage.src, backImage.src] = [backImage.src, frontImage.src];
    }, 1000); // Sesuaikan waktu animasi flip
  }, delay);
}

function startFlipSequence() {
  flipCards.forEach((card, index) => {
    flipCard(card, index * 2000); // Tambahkan delay untuk flip bergantian
  });
}

setInterval(startFlipSequence, 4000); // Jalankan setiap 6 detik

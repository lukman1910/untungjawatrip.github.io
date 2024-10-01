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
// Fungsi untuk membuka modal dan menampilkan gambar besar
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgModal");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src; // Mengambil gambar dari thumbnail yang diklik
  captionText.innerHTML = imgElement.alt; // Menampilkan deskripsi dari atribut alt
}

// Fungsi untuk menutup modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Menutup modal jika pengguna mengklik di luar gambar
var modal = document.getElementById("myModal");
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

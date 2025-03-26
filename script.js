document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const modalImage = document.getElementById("modalImage");
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modalImage.src = this.src; // Ganti gambar di modal
      imageModal.show(); // Tampilkan modal
    });
  });
});

document.addEventListener("click", function (event) {
  let navbar = document.querySelector(".navbar-collapse"); // Ambil navbar
  let toggleButton = document.querySelector(".navbar-toggler"); // Ambil tombol toggler

  // Cek apakah navbar terbuka dan apakah yang diklik bukan navbar atau tombolnya
  if (
    navbar.classList.contains("show") &&
    !navbar.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    toggleButton.click(); // Tutup navbar
  }
});

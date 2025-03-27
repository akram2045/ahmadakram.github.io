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



// document.addEventListener("DOMContentLoaded", function () {
//   let link = document.querySelectorAll(".nav-link");

//   link.forEach(function (link) {
//     link.addEventListener("mouseover", function () {
//       link.style.backgroundColor = "#cfe4f5";
//       link.style.color = "#324fe4";
//       link.style.fontSize = "17px";
//     });
//     link.addEventListener("mouseout", function () {
//       link.style.backgroundColor = "#324fe4";
//       link.style.color = "#ffffff8c";
//       link.style.fontSize = "16px";
//     });
//   });
// });


    document.addEventListener("DOMContentLoaded", function () {
      const galleryImages = document.querySelectorAll(".gallery-img");
      const modalImage = document.getElementById("modalImage");
      const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  
      galleryImages.forEach(img => {
        img.addEventListener("click", function () {
          modalImage.src = this.src; // Ganti gambar di modal
          imageModal.show(); // Tampilkan modal
        });
      });
    });

    jQuery(document).ready(function($) {
        "use strict";
        //  TESTIMONIALS CAROUSEL HOOK
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1170: {
                items: 3
              }
            }
        });
    });
  
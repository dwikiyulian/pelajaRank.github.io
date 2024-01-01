document.addEventListener("DOMContentLoaded", function () {
  // Dapatkan elemen yang ingin dibuat sticky
  let sticky = document.querySelector(".sticky-sec1-top");

  // Dapatkan posisi awal elemen
  let stickyPos = sticky.getBoundingClientRect().top;

  // Buat fungsi untuk mengecek posisi elemen saat menggulir
  function checkSticky() {
    // Jika posisi elemen kurang dari atau sama dengan 0, tambahkan kelas sticky
    if (window.scrollY >= stickyPos) {
      sticky.classList.add("sticky-sec1-top");
      // Jika tidak, hapus kelas sticky
    } else {
      sticky.classList.remove("sticky-sec1-top");
    }
  }

  // Tambahkan event listener untuk scroll
  window.addEventListener("scroll", checkSticky);
});

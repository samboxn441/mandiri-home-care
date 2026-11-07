// Navigasi dan formulir booking Mandiri Home Care Medan
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuBtn");
  const menu = document.getElementById("menuNav") || document.getElementById("nav");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("active");
      menu.classList.toggle("open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active", "open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const bookingForm = document.getElementById("bookingForm") || document.getElementById("bokingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;
      const value = (id) => document.getElementById(id)?.value?.trim() || "-";
      const message = [
        "Halo Mandiri Home Care Medan, saya ingin booking layanan.",
        "",
        `Nama: ${value("nama")}`,
        `WhatsApp: ${value("telepon")}`,
        `Layanan: ${value("layananForm")}`,
        `Tanggal: ${value("tanggal")}`,
        "",
        "Mohon informasi ketersediaan dan biaya. Terima kasih."
      ].join("\n");
      const url = "https://wa.me/6282168186754?text=" + encodeURIComponent(message);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
});

// Navbar cambia color al hacer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.7)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.05)";
  }
});

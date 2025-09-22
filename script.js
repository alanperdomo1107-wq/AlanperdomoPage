// Datos básicos (cambia el número por el del carrito)
const PHONE = "+59892693512"; // remplaza por el número real (formato internacional sin espacios)
const PHONE_TEXT = "+598  92 693 512"; // para mostrar en la página

document.addEventListener("DOMContentLoaded", () => {
  // Actualizo el año en el footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mostrar teléfono visible
  const phoneElem = document.getElementById("phoneText");
  if (phoneElem) phoneElem.textContent = PHONE_TEXT;

  // WhatsApp buttons
  const waMessage = encodeURIComponent("Hola! Quiero hacer un pedido.");
  const waUrl = `https://wa.me/59892693512?text=${waMessage}`;

  const waBtns = [document.getElementById("whatsappBtn"), document.getElementById("whatsappBtn2")];
  waBtns.forEach(btn => {
    if (!btn) return;
    btn.setAttribute("href", waUrl);
    btn.addEventListener("click", (e) => {
      // en móviles abre WhatsApp, en escritorio abre web.whatsapp
      // dejamos el enlace normal para que el usuario pueda abrirlo.
    });
  });

  // Menu toggle (mobile)
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      if (!expanded) {
        mainNav.style.display = "flex";
        mainNav.style.flexDirection = "column";
      } else {
        mainNav.style.display = "none";
      }
    });
    // cerrar nav al cambiar a desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        mainNav.style.display = "flex";
        mainNav.style.flexDirection = "row";
      } else {
        mainNav.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
      }

    });
  }

const images = document.querySelectorAll(".slideshow img");
let index = 0;

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length; // pasa a la siguiente
  images[index].classList.add("active");
}, 2000); // cambia cada 3 segundos

// Botón del menú destacado
const btnDestacado = document.getElementById('menuDestacadoBtn');
const contDestacado = document.getElementById('menuDestacado');

btnDestacado.addEventListener('click', () => {
  contDestacado.style.display = 
    contDestacado.style.display === 'block' ? 'none' : 'block';
  btnDestacado.classList.toggle('active');
});

});

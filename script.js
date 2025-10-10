// Navegación entre secciones con animaciones
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section")

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    // Remover clase active de todos los links
    navLinks.forEach((l) => l.classList.remove("active"))

    // Agregar clase active al link clickeado
    link.classList.add("active")

    // Obtener la sección objetivo
    const targetSection = link.getAttribute("data-section")

    // Ocultar todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active")
    })

    // Mostrar la sección objetivo con animación
    const targetElement = document.getElementById(targetSection)
    setTimeout(() => {
      targetElement.classList.add("active")
    }, 100)

    // Scroll suave al inicio
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
})

// Animación del botón CTA
const ctaButton = document.querySelector(".cta-button")
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    // Cambiar a la sección de flores
    const floresLink = document.querySelector('[data-section="flores"]')
    floresLink.click()
  })
}

// Formulario de contacto
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Animación de éxito
    const submitButton = contactForm.querySelector(".submit-button")
    const originalText = submitButton.textContent

    submitButton.textContent = "¡Mensaje Enviado! ✓"
    submitButton.style.background = "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"

    setTimeout(() => {
      submitButton.textContent = originalText
      submitButton.style.background = ""
      contactForm.reset()
    }, 3000)
  })
}

// Efecto parallax suave en las flores decorativas
window.addEventListener("scroll", () => {
  const flowers = document.querySelectorAll(".flower-decoration")
  const scrolled = window.pageYOffset

  flowers.forEach((flower, index) => {
    const speed = 0.5 + index * 0.1
    flower.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`
  })
})

// Animación de entrada para las tarjetas cuando son visibles
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observar todas las tarjetas
document.querySelectorAll(".flower-card, .feature-card, .info-card").forEach((card) => {
  observer.observe(card)
})

// Efecto hover mejorado para las tarjetas de flores
document.querySelectorAll(".flower-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const emoji = this.querySelector(".flower-emoji")
    emoji.style.transform = "scale(1.2) rotate(15deg)"
  })

  card.addEventListener("mouseleave", function () {
    const emoji = this.querySelector(".flower-emoji")
    emoji.style.transform = "scale(1) rotate(0deg)"
  })
})

// Animación de números en las estadísticas
function animateNumbers() {
  const stats = document.querySelectorAll(".stat-number")

  stats.forEach((stat) => {
    const target = stat.textContent
    const isPercentage = target.includes("%")
    const number = Number.parseInt(target.replace(/\D/g, ""))
    const suffix = target.replace(/[0-9]/g, "")
    let current = 0
    const increment = number / 50

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        stat.textContent = target
        clearInterval(timer)
      } else {
        stat.textContent = Math.floor(current) + suffix
      }
    }, 30)
  })
}

// Observar la sección de estadísticas
const statsSection = document.querySelector(".stats")
if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers()
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  statsObserver.observe(statsSection)
}

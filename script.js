// // DOM Elements
// const header = document.getElementById("header")
// const mobileMenuBtn = document.getElementById("mobile-menu-btn")
// const nav = document.getElementById("nav")
// const navLinks = document.querySelectorAll(".nav-link")
// const serviceCards = document.querySelectorAll(".service-card")

// // Header scroll effect
// // window.addEventListener("scroll", () => {
// //   if (window.scrollY > 50) {
// //     header.classList.add("scrolled")
// //   } else {
// //     header.classList.remove("scrolled")
// //   }
// // })

// // Mobile menu toggle
// let mobileMenuOpen = false

// mobileMenuBtn.addEventListener("click", () => {
//   mobileMenuOpen = !mobileMenuOpen

//   if (mobileMenuOpen) {
//     nav.style.display = "block"
//     nav.style.position = "absolute"
//     nav.style.top = "100%"
//     nav.style.left = "0"
//     nav.style.right = "0"
//     nav.style.background = "white"
//     nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
//     nav.style.padding = "2rem"
//     nav.style.zIndex = "1000"

//     const navList = nav.querySelector(".nav-list")
//     navList.style.flexDirection = "column"
//     navList.style.gap = "1rem"

//     // Animate menu button
//     const spans = mobileMenuBtn.querySelectorAll("span")
//     spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
//     spans[1].style.opacity = "0"
//     spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
//   } else {
//     nav.style.display = "none"

//     // Reset menu button
//     const spans = mobileMenuBtn.querySelectorAll("span")
//     spans[0].style.transform = "none"
//     spans[1].style.opacity = "1"
//     spans[2].style.transform = "none"
//   }
// })

// // Close mobile menu when clicking nav links
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (window.innerWidth <= 768) {
//       mobileMenuOpen = false
//       nav.style.display = "none"

//       const spans = mobileMenuBtn.querySelectorAll("span")
//       spans[0].style.transform = "none"
//       spans[1].style.opacity = "1"
//       spans[2].style.transform = "none"
//     }
//   })
// })

// // Smooth scrolling for navigation links
// navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     const targetId = link.getAttribute("href")
//     const targetSection = document.querySelector(targetId)

//     if (targetSection) {
//       const headerHeight = header.offsetHeight
//       const targetPosition = targetSection.offsetTop - headerHeight

//       window.scrollTo({
//         top: targetPosition,
//         behavior: "smooth",
//       })
//     }
//   })
// })

// // Service card click handlers
// serviceCards.forEach((card) => {
//   if (!card.closest(".no-click"))
//   card.addEventListener("click", () => {
//     const serviceId = card.getAttribute("data-service")
//     window.open(`servico-${serviceId}.html`, "_blank")
//   })
// })

// // Intersection Observer for scroll animations
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// }

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible")
//     }
//   })
// }, observerOptions)

// // Add animation classes and observe elements
// document.addEventListener("DOMContentLoaded", () => {
//   // Animate sections on scroll
//   const animatedElements = [
//     ".service-card",
//     ".specialty-card",
//     ".stat-card",
//     ".professional-card",
//     ".testimonial-card",
//     ".social-card",
//     ".contact-item",
//   ]

//   animatedElements.forEach((selector) => {
//     const elements = document.querySelectorAll(selector)
//     elements.forEach((element, index) => {
//       element.classList.add("fade-in")
//       element.style.transitionDelay = `${index * 0.1}s`
//       observer.observe(element)
//     })
//   })

//   // Animate about section elements
//   const aboutText = document.querySelector(".about-text")
//   const statsGrid = document.querySelector(".stats-grid")

//   if (aboutText) {
//     aboutText.classList.add("slide-in-left")
//     observer.observe(aboutText)
//   }

//   if (statsGrid) {
//     statsGrid.classList.add("slide-in-right")
//     observer.observe(statsGrid)
//   }
// })

// // Counter animation for stats
// const animateCounters = () => {
//   const counters = document.querySelectorAll(".stat-number")

//   counters.forEach((counter) => {
//     const target = counter.textContent
//     const numericTarget = Number.parseInt(target.replace(/\D/g, ""))
//     const suffix = target.replace(/[\d,.]/g, "")

//     if (numericTarget) {
//       let current = 0
//       const increment = numericTarget / 50
//       const timer = setInterval(() => {
//         current += increment
//         if (current >= numericTarget) {
//           counter.textContent = target
//           clearInterval(timer)
//         } else {
//           counter.textContent = Math.floor(current) + suffix
//         }
//       }, 30)
//     }
//   })
// }

// // Trigger counter animation when stats section is visible
// const statsSection = document.querySelector(".stats-grid")
// if (statsSection) {
//   const statsObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           animateCounters()
//           statsObserver.unobserve(entry.target)
//         }
//       })
//     },
//     { threshold: 0.5 },
//   )

//   statsObserver.observe(statsSection)
// }

// // Parallax effect for background images
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset
//   const parallaxElements = document.querySelectorAll(".hero-bg, .about-bg, .contact-bg")

//   parallaxElements.forEach((element) => {
//     const speed = 0.5
//     element.style.transform = `translateY(${scrolled * speed}px)`
//   })
// })

// // Loading animation
// window.addEventListener("load", () => {
//   document.body.classList.add("loading")

//   // Animate hero content
//   const heroContent = document.querySelector(".hero-content")
//   if (heroContent) {
//     const children = heroContent.children
//     Array.from(children).forEach((child, index) => {
//       child.style.animationDelay = `${index * 0.2}s`
//       child.classList.add("animate-fade-up")
//     })
//   }
// })

// // Resize handler
// window.addEventListener("resize", () => {
//   if (window.innerWidth > 768) {
//     nav.style.display = "flex"
//     nav.style.position = "static"
//     nav.style.background = "none"
//     nav.style.boxShadow = "none"
//     nav.style.padding = "0"

//     const navList = nav.querySelector(".nav-list")
//     navList.style.flexDirection = "row"
//     navList.style.gap = "2rem"

//     mobileMenuOpen = false
//     const spans = mobileMenuBtn.querySelectorAll("span")
//     spans[0].style.transform = "none"
//     spans[1].style.opacity = "1"
//     spans[2].style.transform = "none"
//   } else {
//     nav.style.display = "none"
//   }
// })

// // Utility functions
// const debounce = (func, wait) => {
//   let timeout
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout)
//       func(...args)
//     }
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//   }
// }

// const throttle = (func, limit) => {
//   let inThrottle
//   return function () {
//     const args = arguments

//     if (!inThrottle) {
//       func.apply(this, args)
//       inThrottle = true
//       setTimeout(() => (inThrottle = false), limit)
//     }
//   }
// }

// // Optimized scroll handler
// const handleScroll = throttle(() => {
//   const scrolled = window.pageYOffset

//   // Header effect
//   if (scrolled > 50) {
//     header.classList.add("scrolled")
//   } else {
//     header.classList.remove("scrolled")
//   }

//   // Parallax effect
//   const parallaxElements = document.querySelectorAll(".hero-bg, .about-bg, .contact-bg")
//   parallaxElements.forEach((element) => {
//     const speed = 0.5
//     element.style.transform = `translateY(${scrolled * speed}px)`
//   })
// }, 16)

// window.addEventListener("scroll", handleScroll)

// // HERO CAROUSEL
// let currentSlideIndex = 0
// const slides = document.querySelectorAll(".carousel-slide")
// const indicators = document.querySelectorAll(".indicator")
// const totalSlides = slides.length

// function showSlide(index) {
//   // Remove active de todos os slides e indicadores
//   slides.forEach((slide) => slide.classList.remove("active"))
//   indicators.forEach((indicator) => indicator.classList.remove("active"))

//   // Adiciona active ao slide e indicador atual
//   if (slides[index]) {
//     slides[index].classList.add("active")
//   }
//   if (indicators[index]) {
//     indicators[index].classList.add("active")
//   }
// }

// function changeSlide(direction) {
//   currentSlideIndex += direction

//   if (currentSlideIndex >= totalSlides) {
//     currentSlideIndex = 0
//   } else if (currentSlideIndex < 0) {
//     currentSlideIndex = totalSlides - 1
//   }

//   showSlide(currentSlideIndex)
// }

// function currentSlide(index) {
//   currentSlideIndex = index - 1
//   showSlide(currentSlideIndex)
// }

// // Auto-play do carrossel hero
// function autoSlide() {
//   changeSlide(1)
// }

// // ABOUT CAROUSEL
// let currentAboutSlideIndex = 0
// const aboutSlides = document.querySelectorAll(".about-carousel-slide")
// const aboutIndicators = document.querySelectorAll(".about-indicator")
// const totalAboutSlides = aboutSlides.length

// function showAboutSlide(index) {
//   // Remove active de todos os slides e indicadores
//   aboutSlides.forEach((slide) => slide.classList.remove("active"))
//   aboutIndicators.forEach((indicator) => indicator.classList.remove("active"))

//   // Adiciona active ao slide e indicador atual
//   if (aboutSlides[index]) {
//     aboutSlides[index].classList.add("active")
//   }
//   if (aboutIndicators[index]) {
//     aboutIndicators[index].classList.add("active")
//   }
// }

// function changeAboutSlide(direction) {
//   currentAboutSlideIndex += direction

//   if (currentAboutSlideIndex >= totalAboutSlides) {
//     currentAboutSlideIndex = 0
//   } else if (currentAboutSlideIndex < 0) {
//     currentAboutSlideIndex = totalAboutSlides - 1
//   }

//   showAboutSlide(currentAboutSlideIndex)
// }

// function currentAboutSlide(index) {
//   currentAboutSlideIndex = index - 1
//   showAboutSlide(currentAboutSlideIndex)
// }
// // Botões do carrossel About
// const aboutPrevBtn = document.querySelector(".about-carousel-prev")
// const aboutNextBtn = document.querySelector(".about-carousel-next")

// if (aboutPrevBtn && aboutNextBtn) {
//   aboutPrevBtn.addEventListener("click", () => changeAboutSlide(-1))
//   aboutNextBtn.addEventListener("click", () => changeAboutSlide(1))
// }


// // Auto-play do carrossel about
// function autoAboutSlide() {
//   changeAboutSlide(1)
// }

// // Inicia os auto-plays quando a página carrega
// document.addEventListener("DOMContentLoaded", () => {
//   // Hero carousel
//   if (slides.length > 0) {
//     let heroAutoPlayInterval = setInterval(autoSlide, 3000)

//     const heroSection = document.querySelector(".hero")
//     if (heroSection) {
//       heroSection.addEventListener("mouseenter", () => {
//         clearInterval(heroAutoPlayInterval)
//       })

//       heroSection.addEventListener("mouseleave", () => {
//         heroAutoPlayInterval = setInterval(autoSlide, 3000)
//       })
//     }
//   }

//   // About carousel
//   if (aboutSlides.length > 0) {
//     let aboutAutoPlayInterval = setInterval(autoAboutSlide, 3000)

//     const aboutSection = document.querySelector(".about-carousel")
//     if (aboutSection) {
//       aboutSection.addEventListener("mouseenter", () => {
//         clearInterval(aboutAutoPlayInterval)
//       })

//       aboutSection.addEventListener("mouseleave", () => {
//         aboutAutoPlayInterval = setInterval(autoAboutSlide, 3000)
//       })
//     }
//   }
// })

// // Controle por teclado
// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowLeft") {
//     changeSlide(-1)
//   } else if (e.key === "ArrowRight") {
//     changeSlide(1)
//   }
// })

// // Initialize
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Odontogalerie website loaded successfully!")
// })

// // Função para abrir Google Maps
// function openGoogleMaps() {
//   // OPÇÃO 1: Substitua pelo endereço real da clínica
//   const address = "https://maps.app.goo.gl/T2EoHgxNc7oAPD7J8"
//   const encodedAddress = encodeURIComponent(address)
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

//   // OPÇÃO 2: Ou use um link direto do Google Maps (mais preciso)
//   // const googleMapsUrl = "https://maps.google.com/maps?q=-23.550520,-46.633308" // Coordenadas

//   // OPÇÃO 3: Ou use um link compartilhado do Google Maps
//   // const googleMapsUrl = "https://goo.gl/maps/SeuLinkCompartilhado"

//   // Abre em nova aba
//   window.open(googleMapsUrl, "_blank")
// }

// // Adiciona evento de teclado para acessibilidade
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" || e.key === " ") {
//     const mapContainer = document.querySelector(".map-container")
//     if (document.activeElement === mapContainer) {
//       e.preventDefault()
//       openGoogleMaps()
//     }
//   }
// })

// // Torna o mapa focável para acessibilidade
// document.addEventListener("DOMContentLoaded", () => {
//   const mapContainer = document.querySelector(".map-container")
//   if (mapContainer) {
//     mapContainer.setAttribute("tabindex", "0")
//     mapContainer.setAttribute("role", "button")
//     mapContainer.setAttribute("aria-label", "Abrir localização no Google Maps")
//   }
// })

// DOM Elements
const header = document.getElementById("header") || document.querySelector(".header");
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const nav = document.getElementById("nav")
const navLinks = document.querySelectorAll(".nav-link")
const serviceCards = document.querySelectorAll(".service-card")

// MOBILE MENU TOGGLE
let mobileMenuOpen = false
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen

  if (mobileMenuOpen) {
    nav.style.display = "block"
    nav.style.position = "absolute"
    nav.style.top = "100%"
    nav.style.left = "0"
    nav.style.right = "0"
    nav.style.background = "white"
    nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
    nav.style.padding = "2rem"
    nav.style.zIndex = "1000"

    const navList = nav.querySelector(".nav-list")
    navList.style.flexDirection = "column"
    navList.style.gap = "1rem"

    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    nav.style.display = "none"

    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
}

// CLOSE MOBILE MENU ON NAV LINK CLICK (mobile only)
function closeMobileMenu() {
  if (window.innerWidth <= 768) {
    mobileMenuOpen = false
    nav.style.display = "none"

    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
}

// SMOOTH SCROLL FUNCTION
function smoothScroll(e) {
  const targetId = e.currentTarget.getAttribute("href")
  const targetSection = document.querySelector(targetId)
  if (targetSection) {
    e.preventDefault()
    const headerHeight = header.offsetHeight
    const targetPosition = targetSection.offsetTop - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}

// SERVICE CARD CLICK HANDLER
function handleServiceCardClick(card) {
  const serviceId = card.getAttribute("data-service")
  if(serviceId) {
    window.open(`servico-${serviceId}.html`, "_blank")
  }
}

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// ANIMATE COUNTERS
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")
  counters.forEach((counter) => {
    const target = counter.textContent
    const numericTarget = Number.parseInt(target.replace(/\D/g, ""))
    const suffix = target.replace(/[\d,.]/g, "")

    if (numericTarget) {
      let current = 0
      const increment = numericTarget / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= numericTarget) {
          counter.textContent = target
          clearInterval(timer)
        } else {
          counter.textContent = Math.floor(current) + suffix
        }
      }, 30)
    }
  })
}

// SCROLL HANDLER (throttled)
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

const handleScroll = throttle(() => {
  const scrolled = window.pageYOffset

  // Header scroll effect
  if (scrolled > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  // Parallax effect
  const parallaxElements = document.querySelectorAll(".hero-bg, .about-bg, .contact-bg")
  parallaxElements.forEach((element) => {
    const speed = 0.5
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
}, 16)

// HERO CAROUSEL
let currentSlideIndex = 0
const slides = document.querySelectorAll(".carousel-slide")
const indicators = document.querySelectorAll(".indicator")
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))
  if (slides[index]) slides[index].classList.add("active")
  if (indicators[index]) indicators[index].classList.add("active")
}

function changeSlide(direction) {
  currentSlideIndex += direction
  if (currentSlideIndex >= totalSlides) currentSlideIndex = 0
  else if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1
  showSlide(currentSlideIndex)
}

// ABOUT CAROUSEL
let currentAboutSlideIndex = 0
const aboutSlides = document.querySelectorAll(".about-carousel-slide")
const aboutIndicators = document.querySelectorAll(".about-indicator")
const totalAboutSlides = aboutSlides.length

function showAboutSlide(index) {
  aboutSlides.forEach((slide) => slide.classList.remove("active"))
  aboutIndicators.forEach((indicator) => indicator.classList.remove("active"))
  if (aboutSlides[index]) aboutSlides[index].classList.add("active")
  if (aboutIndicators[index]) aboutIndicators[index].classList.add("active")
}

function changeAboutSlide(direction) {
  currentAboutSlideIndex += direction
  if (currentAboutSlideIndex >= totalAboutSlides) currentAboutSlideIndex = 0
  else if (currentAboutSlideIndex < 0) currentAboutSlideIndex = totalAboutSlides - 1
  showAboutSlide(currentAboutSlideIndex)
}

// EVENT LISTENERS SETUP (called once on DOMContentLoaded)
function setupEventListeners() {
  // Mobile menu toggle
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  // Close mobile menu on nav link click (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu()
    })
  })

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll)
  })

  // Service card clicks (skip cards inside .no-click)
  serviceCards.forEach((card) => {
    if (!card.closest(".no-click")) {
      card.addEventListener("click", () => handleServiceCardClick(card))
    }
  })

  // About carousel buttons
  const aboutPrevBtn = document.querySelector(".about-carousel-prev")
  const aboutNextBtn = document.querySelector(".about-carousel-next")

  if (aboutPrevBtn && aboutNextBtn) {
    aboutPrevBtn.addEventListener("click", () => changeAboutSlide(-1))
    aboutNextBtn.addEventListener("click", () => changeAboutSlide(1))
  }

  // Keyboard controls for hero carousel
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") changeSlide(-1)
    else if (e.key === "ArrowRight") changeSlide(1)
  })

  // Keyboard accessibility for Google Maps container
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const mapContainer = document.querySelector(".map-container")
      if (document.activeElement === mapContainer) {
        e.preventDefault()
        openGoogleMaps()
      }
    }
  })

  // Window resize to handle nav styles
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.style.display = "flex"
      nav.style.position = "static"
      nav.style.background = "none"
      nav.style.boxShadow = "none"
      nav.style.padding = "0"

      const navList = nav.querySelector(".nav-list")
      navList.style.flexDirection = "row"
      navList.style.gap = "2rem"

      mobileMenuOpen = false
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    } else {
      nav.style.display = "none"
    }
  })

  // Scroll event handler throttled
  window.addEventListener("scroll", handleScroll)
}

// OPEN GOOGLE MAPS (called from keyboard event)
function openGoogleMaps() {
  const address = "https://maps.app.goo.gl/T2EoHgxNc7oAPD7J8"
  const encodedAddress = encodeURIComponent(address)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  window.open(googleMapsUrl, "_blank")
}

// ADD ACCESSIBILITY ATTRIBUTES TO MAP CONTAINER
function setupMapAccessibility() {
  const mapContainer = document.querySelector(".map-container")
  if (mapContainer) {
    mapContainer.setAttribute("tabindex", "0")
    mapContainer.setAttribute("role", "button")
    mapContainer.setAttribute("aria-label", "Abrir localização no Google Maps")
  }
}

// ANIMATE ON SCROLL SETUP
function setupScrollAnimations() {
  const animatedElements = [
    ".service-card",
    ".specialty-card",
    ".stat-card",
    ".professional-card",
    ".testimonial-card",
    ".social-card",
    ".contact-item",
  ]

  animatedElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      element.classList.add("fade-in")
      element.style.transitionDelay = `${index * 0.1}s`
      observer.observe(element)
    })
  })

  const aboutText = document.querySelector(".about-text")
  const statsGrid = document.querySelector(".stats-grid")

  if (aboutText) {
    aboutText.classList.add("slide-in-left")
    observer.observe(aboutText)
  }

  if (statsGrid) {
    statsGrid.classList.add("slide-in-right")
    observer.observe(statsGrid)
  }
}

// STATS COUNTER OBSERVER
function setupStatsCounterObserver() {
  const statsSection = document.querySelector(".stats-grid")
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    statsObserver.observe(statsSection)
  }
}

// AUTO-PLAY HERO CAROUSEL
function setupHeroCarouselAutoPlay() {
  if (slides.length > 0) {
    let heroAutoPlayInterval = setInterval(() => changeSlide(1), 3000)

    const heroSection = document.querySelector(".hero")
    if (heroSection) {
      heroSection.addEventListener("mouseenter", () => clearInterval(heroAutoPlayInterval))
      heroSection.addEventListener("mouseleave", () => {
        heroAutoPlayInterval = setInterval(() => changeSlide(1), 3000)
      })
    }
  }
}

// AUTO-PLAY ABOUT CAROUSEL
function setupAboutCarouselAutoPlay() {
  if (aboutSlides.length > 0) {
    let aboutAutoPlayInterval = setInterval(() => changeAboutSlide(1), 3000)

    const aboutSection = document.querySelector(".about-carousel")
    if (aboutSection) {
      aboutSection.addEventListener("mouseenter", () => clearInterval(aboutAutoPlayInterval))
      aboutSection.addEventListener("mouseleave", () => {
        aboutAutoPlayInterval = setInterval(() => changeAboutSlide(1), 3000)
      })
    }
  }
}

// PAGE LOAD INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  console.log("Odontogalerie website loaded successfully!")

  setupEventListeners()
  setupMapAccessibility()
  setupScrollAnimations()
  setupStatsCounterObserver()
  setupHeroCarouselAutoPlay()
  setupAboutCarouselAutoPlay()

  // Animate hero content
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    Array.from(heroContent.children).forEach((child, index) => {
      child.style.animationDelay = `${index * 0.2}s`
      child.classList.add("animate-fade-up")
    })
  }
})




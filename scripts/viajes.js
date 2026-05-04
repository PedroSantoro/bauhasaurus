// ============================================================
// BAUHASAURUS — Viajes listing JS
// ============================================================

// ── Nav ──────────────────────────────────────────────────────
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40)
}, { passive: true })

// ── Mobile menu ──────────────────────────────────────────────
const hamburger      = document.getElementById('hamburger')
const hamburgerClose = document.getElementById('hamburgerClose')
const mobileMenu     = document.getElementById('mobileMenu')

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.add('open')
  document.body.style.overflow = 'hidden'
})
hamburgerClose?.addEventListener('click', () => {
  mobileMenu.classList.remove('open')
  document.body.style.overflow = ''
})

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      revealObserver.unobserve(e.target)
    }
  }),
  { threshold: 0.1 }
)
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

// ── Photo reel ───────────────────────────────────────────────
document.querySelectorAll('.photo-reel').forEach(reel => {
  const slides = reel.querySelectorAll('.photo-reel__slide')
  if (slides.length < 2) return
  let current = 0
  setInterval(() => {
    slides[current].classList.remove('photo-reel__slide--active')
    current = (current + 1) % slides.length
    slides[current].classList.add('photo-reel__slide--active')
  }, 3500)
})

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

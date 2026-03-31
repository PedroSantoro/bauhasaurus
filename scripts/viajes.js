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

// ── Filters ──────────────────────────────────────────────────
const filterBar  = document.getElementById('filterBar')
const viajesGrid = document.getElementById('viajesGrid')

if (filterBar && viajesGrid) {
  const cards   = Array.from(viajesGrid.querySelectorAll('.trip-card'))
  const buttons = Array.from(filterBar.querySelectorAll('.filter-btn'))

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn')
    if (!btn) return

    const filter = btn.dataset.filter

    // Update active button
    buttons.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    // Filter cards with fade
    cards.forEach(card => {
      const cardFilter = card.dataset.filter
      const show = filter === 'todos' || cardFilter === filter

      if (show) {
        card.classList.remove('trip-card--hidden')
        card.style.animation = 'fadeInUp 0.4s ease forwards'
      } else {
        card.classList.add('trip-card--hidden')
      }
    })
  })
}

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

// Inject card animation keyframes
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)

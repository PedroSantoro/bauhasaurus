// ============================================================
// BAUHASAURUS — Trip detail JS
// ============================================================

import logoGreen from '../assets/img/LogoBauhasaurusWordmark_green.png'
import logoLightblue from '../assets/img/LogoBauhasaurusWordmark_lightblue.png'
import logoRed from '../assets/img/LogoBauhasaurusWordmark_red.png'
import logoPurple from '../assets/img/LogoBauhasaurusWordmark_purple.png'

// ── Logo swap por tema de país ────────────────────────────────
const THEME_LOGOS = {
  'theme-br': logoGreen,
  'theme-uy': logoLightblue,
  'theme-py': logoRed,
  'theme-uypy': logoPurple,
}

;(function swapLogo() {
  const body = document.body
  const logoSrc = Object.entries(THEME_LOGOS).find(([cls]) => body.classList.contains(cls))?.[1]
  if (!logoSrc) return
  document.querySelectorAll('.nav__logo-img, .footer__logo-img').forEach(img => {
    img.src = logoSrc
  })
})()


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

// ── Accordion ────────────────────────────────────────────────
document.querySelectorAll('.accordion-item').forEach(item => {
  const btn  = item.querySelector('.accordion-btn')
  const body = item.querySelector('.accordion-body')

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')

    // Close all
    document.querySelectorAll('.accordion-item.open').forEach(openItem => {
      openItem.classList.remove('open')
      openItem.querySelector('.accordion-body').style.height = '0'
    })

    // Open clicked (if was closed)
    if (!isOpen) {
      item.classList.add('open')
      body.style.height = body.scrollHeight + 'px'
    }
  })
})

// ── Expand block ─────────────────────────────────────────────
const expandBlock  = document.getElementById('expandBlock')
const expandHeader = document.getElementById('expandHeader')
const expandBody   = document.getElementById('expandBody')

if (expandHeader && expandBody) {
  expandHeader.addEventListener('click', () => {
    const isOpen = expandBlock.classList.contains('open')
    expandBlock.classList.toggle('open')
    expandBody.style.height = isOpen ? '0' : expandBody.scrollHeight + 'px'
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

// ── Smooth scroll to package anchors ─────────────────────────
const hash = window.location.hash
if (hash) {
  setTimeout(() => {
    const target = document.querySelector(hash)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 300)
}

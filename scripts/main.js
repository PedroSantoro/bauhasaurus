// ============================================================
// BAUHASAURUS — Home JS
// ============================================================

import gsap from 'gsap'

// ── Nav scroll ──────────────────────────────────────────────
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40)
}, { passive: true })

// ── Mobile menu ─────────────────────────────────────────────
const hamburger      = document.getElementById('hamburger')
const hamburgerClose = document.getElementById('hamburgerClose')
const mobileMenu     = document.getElementById('mobileMenu')
const mobileNosotros = document.getElementById('mobileNosotros')

function openMenu() {
  mobileMenu.classList.add('open')
  document.body.style.overflow = 'hidden'
}
function closeMenu() {
  mobileMenu.classList.remove('open')
  document.body.style.overflow = ''
}

hamburger?.addEventListener('click', openMenu)
hamburgerClose?.addEventListener('click', closeMenu)
mobileNosotros?.addEventListener('click', closeMenu)

// Hero entrance is handled via CSS animations (heroFadeUp keyframes)

// ── Loader ───────────────────────────────────────────────────
const loader = document.getElementById('loader')
if (loader) {
  // Mínimo 2s, luego fade out
  const hideLoader = () => loader.classList.add('hidden')
  const minDelay = new Promise(res => setTimeout(res, 2000))
  const pageReady = new Promise(res => {
    if (document.readyState === 'complete') res()
    else window.addEventListener('load', res)
  })
  Promise.all([minDelay, pageReady]).then(hideLoader)
}

// ── Video hero ───────────────────────────────────────────────
const heroVideo = document.getElementById('heroVideo')
if (heroVideo) {
  const showVideo = () => heroVideo.classList.add('loaded')
  if (heroVideo.readyState >= 3) {
    showVideo()
  } else {
    heroVideo.addEventListener('canplay', showVideo, { once: true })
  }
}

// ── Carousel ────────────────────────────────────────────────
const track     = document.getElementById('carouselTrack')
const btnPrev   = document.getElementById('carouselPrev')
const btnNext   = document.getElementById('carouselNext')

if (track && btnPrev && btnNext) {
  const cards       = Array.from(track.children)
  const gap         = 24
  let currentIndex  = 0

  function getVisibleCount() {
    const w = window.innerWidth
    if (w < 640) return 1
    if (w < 1024) return 2
    return 3
  }

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width
  }

  function goTo(index) {
    const visible = getVisibleCount()
    const max     = Math.max(0, cards.length - visible)
    currentIndex  = Math.max(0, Math.min(index, max))
    const offset  = currentIndex * (getCardWidth() + gap)
    gsap.to(track, { x: -offset, duration: 0.55, ease: 'power3.inOut' })
    btnPrev.style.opacity = currentIndex === 0 ? '0.3' : '1'
    btnNext.style.opacity = currentIndex >= max ? '0.3' : '1'
  }

  btnPrev.addEventListener('click', () => goTo(currentIndex - 1))
  btnNext.addEventListener('click', () => goTo(currentIndex + 1))

  // Init
  goTo(0)

  // Recalculate on resize
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => goTo(currentIndex), 100)
  })
}

// ── Smooth scroll for anchor links ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1)
    const target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      closeMenu()
    }
  })
})

// ── Scroll reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

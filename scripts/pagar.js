// ============================================================
// BAUHASAURUS — Checkout (pagar.html)
// ============================================================

const TRIPS = {
  'brasil-rio':       { title: 'Tramo Río de Janeiro', dates: '23/07 — 28/07/2026',  single: 1850, doble: 1580 },
  'brasil-brasilia':  { title: 'Tramo Brasilia',       dates: '29/07 — 01/08/2026',  single: 1460, doble: 1360 },
  'brasil-saopaulo':  { title: 'Tramo São Paulo',      dates: '02/08 — 07/08/2026',  single: 1860, doble: 1620 },
  'brasil-completo':  { title: 'Brasil completo',       dates: '23/07 — 07/08/2026',  single: 5170, doble: 4560 },
}

// Stackable promocodes (case-insensitive)
const PROMOCODES = {
  EXVIAJANTE:    { label: 'Ex viajante (–USD 50)',     amount: 50  },
  SEGUNDOTRAMO:  { label: 'Segundo tramo (–USD 50)',   amount: 50  },
  BAUHA50:       { label: 'Bauhasaurus 50 (–USD 50)',  amount: 50  },
}

const state = {
  trip: null,
  room: 'doble',
  payment: 'card',
  appliedCodes: [],
}

// ── Pre-select trip from URL (?trip=brasil-rio) ──────────────
const params = new URLSearchParams(window.location.search)
const initialTrip = params.get('trip')
if (initialTrip && TRIPS[initialTrip]) {
  const radio = document.querySelector(`input[name="trip"][value="${initialTrip}"]`)
  if (radio) radio.checked = true
  state.trip = initialTrip
}

// ── DOM refs ─────────────────────────────────────────────────
const summaryTitle = document.getElementById('summaryTitle')
const summaryDates = document.getElementById('summaryDates')
const rowSubtotal  = document.getElementById('rowSubtotal')
const rowPromo     = document.getElementById('rowPromo')
const rowPromoLine = document.getElementById('rowPromoLine')
const rowPromoLabel = document.getElementById('rowPromoLabel')
const rowCrypto    = document.getElementById('rowCrypto')
const rowCryptoLine = document.getElementById('rowCryptoLine')
const rowTotal     = document.getElementById('rowTotal')
const payBtn       = document.getElementById('payBtn')
const promoInput   = document.getElementById('promocode')
const applyBtn     = document.getElementById('applyPromo')
const promoList    = document.getElementById('promoList')

// ── Update summary ───────────────────────────────────────────
function fmt(n) {
  return 'USD ' + n.toLocaleString('es-AR')
}

function recalc() {
  const trip = state.trip ? TRIPS[state.trip] : null

  if (!trip) {
    summaryTitle.textContent = 'Elegí tu expedición'
    summaryDates.textContent = '—'
    rowSubtotal.textContent  = fmt(0)
    rowPromoLine.hidden      = true
    rowCryptoLine.hidden     = true
    rowTotal.textContent     = fmt(0)
    payBtn.disabled          = true
    payBtn.querySelector('span').textContent = 'Pagar y reservar'
    return
  }

  const subtotal = state.room === 'single' ? trip.single : trip.doble
  const roomLabel = state.room === 'single' ? 'Single' : 'Doble'
  summaryTitle.textContent = `${trip.title} · ${roomLabel}`
  summaryDates.textContent = trip.dates
  rowSubtotal.textContent  = fmt(subtotal)

  // Promocodes
  const promoTotal = state.appliedCodes.reduce((sum, code) => sum + PROMOCODES[code].amount, 0)
  if (promoTotal > 0) {
    rowPromoLine.hidden = false
    rowPromoLabel.textContent = state.appliedCodes.length === 1
      ? PROMOCODES[state.appliedCodes[0]].label.split(' (')[0]
      : `${state.appliedCodes.length} promocodes`
    rowPromo.textContent = '– ' + fmt(promoTotal)
  } else {
    rowPromoLine.hidden = true
  }

  let total = Math.max(0, subtotal - promoTotal)

  // Cripto 3% off (sobre el subtotal ya con promos aplicadas)
  if (state.payment === 'crypto') {
    const cryptoOff = Math.round(total * 0.03)
    rowCryptoLine.hidden = false
    rowCrypto.textContent = '– ' + fmt(cryptoOff)
    total = total - cryptoOff
  } else {
    rowCryptoLine.hidden = true
  }

  rowTotal.textContent  = fmt(total)
  payBtn.disabled       = false
  payBtn.querySelector('span').textContent = `Pagar ${fmt(total)}`
}

// ── Render applied promocodes chips ─────────────────────────
function renderPromos() {
  promoList.innerHTML = ''
  state.appliedCodes.forEach(code => {
    const chip = document.createElement('span')
    chip.className = 'checkout__promo-chip'
    chip.innerHTML = `${PROMOCODES[code].label} <button type="button" aria-label="Quitar">×</button>`
    chip.querySelector('button').addEventListener('click', () => {
      state.appliedCodes = state.appliedCodes.filter(c => c !== code)
      renderPromos()
      recalc()
    })
    promoList.appendChild(chip)
  })
}

// ── Listeners ────────────────────────────────────────────────
document.querySelectorAll('input[name="trip"]').forEach(r => {
  r.addEventListener('change', e => {
    state.trip = e.target.value
    recalc()
  })
})

document.querySelectorAll('input[name="room"]').forEach(r => {
  r.addEventListener('change', e => {
    state.room = e.target.value
    recalc()
  })
})

document.querySelectorAll('input[name="payment"]').forEach(r => {
  r.addEventListener('change', e => {
    state.payment = e.target.value
    recalc()
  })
})

applyBtn.addEventListener('click', applyPromo)
promoInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    applyPromo()
  }
})

function applyPromo() {
  const code = promoInput.value.trim().toUpperCase()
  if (!code) return
  if (!PROMOCODES[code]) {
    promoInput.classList.add('is-invalid')
    setTimeout(() => promoInput.classList.remove('is-invalid'), 1200)
    return
  }
  if (state.appliedCodes.includes(code)) {
    promoInput.value = ''
    return
  }
  state.appliedCodes.push(code)
  promoInput.value = ''
  renderPromos()
  recalc()
}

payBtn.addEventListener('click', () => {
  // Placeholder: in production this would open Stripe Checkout (or similar)
  // and pass the selected trip, room, payment method and promocodes.
  const trip = TRIPS[state.trip]
  const params = new URLSearchParams({
    trip:    state.trip,
    room:    state.room,
    payment: state.payment,
    promos:  state.appliedCodes.join(','),
  })
  alert(`Reserva: ${trip.title} (${state.room})\nForma de pago: ${state.payment}\n\nProcesando con Stripe... (demo)\n\nParámetros: ${params.toString()}`)
})

// ── Mobile menu ──────────────────────────────────────────────
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open')
  document.body.style.overflow = 'hidden'
})
document.getElementById('hamburgerClose')?.addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('open')
  document.body.style.overflow = ''
})

// Init
recalc()

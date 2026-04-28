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

// ── Brasil FAQ ───────────────────────────────────────────────
const BRASIL_FAQ = [
  {
    label: '01',
    title: 'Itinerario y actividades',
    items: [
      {
        question: '¿Qué vamos a hacer durante el viaje?',
        answer: 'Exploraremos más de 20 edificios por tramo, caminaremos unos 10 km diarios por ciudad, tendremos accesos exclusivos a espacios públicos y privados, visitas a museos y galerías, actividades culturales y académicas, y un vlog del viaje para revivir la experiencia.',
      },
      {
        question: '¿El itinerario puede cambiar?',
        answer: 'Sí. Puede haber ajustes por clima, accesos o fuerza mayor. Siempre buscamos ofrecer alternativas equivalentes para que la experiencia siga siendo única.',
      },
    ],
  },
  {
    label: '02',
    title: 'Reservas y pagos',
    items: [
      {
        question: '¿Cómo reservo mi lugar?',
        answer: 'Con el pago de la seña del 50% del tramo elegido.',
      },
      {
        question: '¿La seña se devuelve si cancelo?',
        answer: 'No. La seña no es reembolsable. Solo se reintegra si el viaje no se realiza por no alcanzar el mínimo de 15 participantes.',
      },
      {
        question: '¿Qué pasa si ya compré mi pasaje y el viaje no se hace?',
        answer: 'Se devuelve el 100% de lo abonado al paquete Bauhasaurus. Los vuelos internacionales no están incluidos en el precio, por lo que cada viajante gestiona directamente con la aerolínea cualquier cambio o reembolso.',
      },
      {
        question: '¿Cuándo pago el resto?',
        answer: 'El saldo se completa en dos cuotas de 25% cada una, hasta 15 días antes del inicio del tramo.',
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Efectivo con cita previa o transferencia bancaria a OMG Travel. Te compartimos los datos una vez que confirmes tu interés.',
      },
      {
        question: '¿Recibo comprobante de pago?',
        answer: 'Sí. OMG Travel S.A. emite comprobante oficial de todos los pagos realizados.',
      },
      {
        question: '¿Puedo pagar en otra moneda?',
        answer: 'Los pagos se realizan únicamente en dólares estadounidenses.',
      },
    ],
  },
  {
    label: '03',
    title: 'Transporte interno',
    items: [
      {
        question: '¿Cómo nos movemos dentro de cada ciudad?',
        answer: 'Todo el transporte durante el itinerario está incluido: buses privados, traslados a actividades y movilidad dentro de las visitas programadas.',
      },
      {
        question: '¿Los traslados desde y hacia el aeropuerto están incluidos?',
        answer: 'No. Cada viajante gestiona su llegada y salida del hotel. Te recomendamos horarios de vuelos para que coincidan con el inicio y cierre del itinerario.',
      },
    ],
  },
  {
    label: '04',
    title: 'Participantes',
    items: [
      {
        question: '¿Cuántas personas viajan en el grupo?',
        answer: 'El viaje requiere un mínimo de 15 pasajeros y admite un máximo de 30.',
      },
      {
        question: '¿Qué pasa si no se llega al mínimo?',
        answer: 'Si no se alcanza el mínimo de 15 inscriptos, el viaje no se realiza y se devuelve el total de lo abonado.',
      },
      {
        question: '¿El viaje es solo para arquitectos?',
        answer: 'No. Está abierto a cualquier persona interesada en arquitectura, cultura y ciudades.',
      },
    ],
  },
  {
    label: '05',
    title: 'Idioma y guías',
    items: [
      {
        question: '¿En qué idioma se realizan las visitas?',
        answer: 'Las actividades se desarrollan en español. Contaremos con guías brasileiros en determinados locales, con traductor en español si es necesario.',
      },
      {
        question: '¿Quiénes guían el viaje?',
        answer: 'El arquitecto Alejandro Csome y un coordinador con portugués nativo.',
      },
    ],
  },
  {
    label: '06',
    title: 'Actividades culturales',
    items: [
      {
        question: '¿Hay tiempo libre?',
        answer: 'Sí. Cada día incluye momentos para recorrer por cuenta propia, descansar o disfrutar de la ciudad.',
      },
      {
        question: '¿Se incluyen entradas a museos y exhibiciones?',
        answer: 'Sí. Todas las entradas previstas en el itinerario están incluidas en el precio.',
      },
    ],
  },
  {
    label: '07',
    title: 'Hoteles y servicios',
    items: [
      {
        question: '¿Qué categoría de hotel está incluida?',
        answer: 'Hoteles 3 y 4 estrellas con desayuno incluido, sujetos a disponibilidad y con estándares de calidad según normativa vigente.',
      },
      {
        question: '¿Puedo pedir early check-in o late check-out?',
        answer: 'Sí. Depende de la disponibilidad del hotel y el costo lo asume el pasajero.',
      },
      {
        question: '¿Qué comidas están incluidas?',
        answer: 'Desayunos y cena de bienvenida. Almuerzos y cenas personales no están incluidos.',
      },
    ],
  },
  {
    label: '08',
    title: 'Aspectos prácticos',
    items: [
      {
        question: '¿Qué debo llevar?',
        answer: 'Ropa cómoda para caminar, calzado adecuado, mochila para objetos personales, protector solar y documentación vigente.',
      },
      {
        question: '¿Qué pasa si tengo restricciones alimentarias?',
        answer: 'Podés informar al momento de la inscripción y la organización hará lo posible por adaptar la comida incluida, además de compartir recomendaciones para las demás comidas.',
      },
    ],
  },
  {
    label: '09',
    title: 'Viaje y documentación',
    items: [
      {
        question: '¿El precio incluye vuelos internacionales?',
        answer: 'No. Cada viajante gestiona sus aéreos bajo la recomendación de Bauhasaurus para poder participar del itinerario de forma completa.',
      },
      {
        question: '¿Qué documentación necesito?',
        answer: 'DNI o pasaporte vigente para ingresar a Brasil.',
      },
      {
        question: '¿El viaje incluye seguro?',
        answer: 'Sí, seguro de asistencia al viajero. Aun así, recomendamos contar con cobertura médica adicional.',
      },
    ],
  },
  {
    label: '10',
    title: 'Condiciones generales',
    items: [
      {
        question: '¿Qué pasa si la organización cancela el viaje?',
        answer: 'Si es por causas atribuibles a Bauhasaurus, se devuelve el 100%. Si es por fuerza mayor, se ofrece reprogramación o crédito.',
      },
      {
        question: '¿Quién es la agencia responsable?',
        answer: 'La agencia operadora responsable es OMG Travel S.A.',
      },
      {
        question: '¿Qué pasa si alguien tiene mala conducta?',
        answer: 'La organización puede apartarlo del grupo para cuidar la experiencia de todos, sin derecho a reembolso.',
      },
    ],
  },
]

function renderBrasilFaq() {
  document.querySelectorAll('[data-faq="brasil"]').forEach(container => {
    container.innerHTML = BRASIL_FAQ.map(section => `
      <div class="accordion-item faq-item">
        <button class="accordion-btn" type="button">
          <div class="accordion-btn__left">
            <span class="accordion-btn__day">${section.label}</span>
            <span class="accordion-btn__title">${section.title}</span>
          </div>
          <div class="accordion-btn__icon">
            <svg viewBox="0 0 12 12" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="6" y1="1" x2="6" y2="11"/><line x1="1" y1="6" x2="11" y2="6"/>
            </svg>
          </div>
        </button>
        <div class="accordion-body">
          <div class="accordion-body__inner faq-body">
            ${section.items.map(item => `
              <div class="faq-qa">
                <p class="faq-question">${item.question}</p>
                <p>${item.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('')
  })
}

renderBrasilFaq()

// ── Accordion ────────────────────────────────────────────────
document.querySelectorAll('.accordion-item').forEach(item => {
  const btn  = item.querySelector('.accordion-btn')
  const body = item.querySelector('.accordion-body')

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    const accordion = item.closest('.accordion')

    accordion?.querySelectorAll('.accordion-item.open').forEach(openItem => {
      openItem.classList.remove('open')
      openItem.querySelector('.accordion-body').style.height = '0'
    })

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

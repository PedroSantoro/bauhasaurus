// ============================================================
// BAUHASAURUS — Datos de expediciones
// Reemplazar placeholders con contenido real de Ale
// ============================================================

export const trips = [
  {
    id: 'uruguay',
    slug: 'uruguay-paraguay',
    title: 'Uruguay',
    fullTitle: 'Uruguay + Paraguay',
    subtitle: 'Arquitectura moderna y territorio',
    tagline: 'Dos países, una mirada común sobre el espacio construido.',
    description: `Un recorrido por la arquitectura moderna latinoamericana en dos destinos únicos. Uruguay, con su herencia de modernismo europeo adaptado al trópico. Paraguay, con su arquitectura jesuítica y sus experimentos contemporáneos en el medio del continente.`,
    longDescription: `La arquitectura moderna latinoamericana tiene en Uruguay y Paraguay dos expresiones singulares. En Uruguay, el modernismo llegó temprano y se asentó profundamente: Montevideo guarda joyas que el mundo académico todavía redescubre. En Paraguay, la misión jesuítica del siglo XVII sentó las bases de una forma de habitar el territorio que resuena hasta hoy en las obras más contemporáneas. Este viaje propone una lectura cruzada de ambas tradiciones.`,
    region: 'latam',
    countries: ['Uruguay', 'Paraguay'],
    startDate: '2026-08-10',
    endDate: '2026-08-22',
    displayDates: ['10/08/2026', '22/08/2026'],
    duration: '13 días',
    destination: 'Montevideo · Colonia · Asunción',
    price: {
      from: 1800,
      currency: 'USD',
      displayFrom: 'USD 1.800',
      note: 'Precio por persona. Consultar paquetes por tramo.',
    },
    status: 'available',
    leader: {
      name: 'Ale',
      initials: 'A',
    },
    packages: [
      { id: 'completo', label: 'Completo (UY + PY)', discount: 0 },
      { id: 'uruguay', label: 'Solo Uruguay', discount: 0 },
      { id: 'paraguay', label: 'Solo Paraguay', discount: 0 },
    ],
    whatsappTravel: 'https://wa.me/XXXXXXXXXXX',
    whatsappInfo: 'https://wa.me/XXXXXXXXXXX',
    filter: ['todos', 'uruguay-paraguay'],
    itinerary: [
      {
        day: 'Día 1',
        title: 'Llegada a Montevideo',
        content: 'Llegada, instalación y primera caminata por el Centro Histórico. Primera lectura de la ciudad desde el Cerro de Montevideo.',
      },
      {
        day: 'Días 2-3',
        title: 'Arquitectura moderna montevideana',
        content: 'Recorrido por las obras más representativas del movimiento moderno: Palacio Salvo, Estudio Arquitectura del período 1930-1960, visita a barrio Pocitos y Carrasco. Charla con arquitecto local (a confirmar).',
      },
      {
        day: 'Día 4',
        title: 'Colonia del Sacramento',
        content: 'Excursión de día completo a Colonia. Arquitectura colonial portuguesa e hibridaciones. Territorio, paisaje y el río como frontera construida.',
      },
      {
        day: 'Días 5-6',
        title: 'Ciudad de la Costa y periferia',
        content: 'Lectura de la suburbanización montevideana. Arquitectura de vivienda social del siglo XX. Visita a obra contemporánea (a confirmar según obras disponibles).',
      },
      {
        day: 'Día 7',
        title: 'Traslado a Asunción',
        content: 'Vuelo Montevideo → Asunción. Instalación y primera lectura de la capital paraguaya.',
      },
      {
        day: 'Días 8-9',
        title: 'Centro histórico y modernismo paraguayo',
        content: 'Recorrido por el casco histórico, el Palacio de los López, la Catedral Metropolitana. Arquitectura institucional del Estado. Modernismo tardío en Paraguay.',
      },
      {
        day: 'Días 10-11',
        title: 'Misiones jesuíticas',
        content: 'Excursión de dos días a las Misiones Jesuíticas del Paraguay. Trinidad y Jesús, Patrimonio de la Humanidad. Lectura del territorio y el urbanismo colonial-religioso.',
      },
      {
        day: 'Día 12',
        title: 'Arquitectura contemporánea',
        content: 'Visita a obras de arquitectura contemporánea paraguaya. Encuentro con arquitectos locales (a confirmar). Reflexión sobre continuidades y rupturas.',
      },
      {
        day: 'Día 13',
        title: 'Cierre y regreso',
        content: 'Mañana libre. Vuelo de regreso a Buenos Aires.',
      },
    ],
    included: [
      'Alojamiento en hoteles boutique seleccionados',
      'Desayunos incluidos todos los días',
      'Traslados internos (excursiones y visitas)',
      'Vuelo interno Montevideo → Asunción',
      'Guía especializada en arquitectura durante todo el recorrido',
      'Entradas a museos y sitios de interés del itinerario',
      'Materiales de estudio (guía impresa del viaje)',
    ],
    notIncluded: [
      'Vuelo internacional de llegada/salida (Buenos Aires – Montevideo)',
      'Almuerzos y cenas (salvo indicación)',
      'Gastos personales y extras',
      'Seguro de viaje (recomendado)',
      'Visas (verificar requisito según pasaporte)',
    ],
  },

  {
    id: 'brasil-rio',
    slug: 'brasil',
    title: 'Brasil',
    fullTitle: 'Brasil — Río · Brasilia · São Paulo',
    subtitle: 'El laboratorio moderno de América',
    tagline: 'Tres ciudades. Tres formas de imaginar una nación a través de la arquitectura.',
    description: `Brasil inventó su propia modernidad. Río de Janeiro condensó la vanguardia europea en el trópico. Brasilia la proyectó hacia el futuro como capital construida desde cero. São Paulo la metabolizó en brutalismo, escala y densidad. Este viaje recorre los tres laboratorios.`,
    longDescription: `Ningún país latinoamericano tuvo una relación tan intensa y consciente con la arquitectura moderna como Brasil. Oscar Niemeyer, Lúcio Costa, Paulo Mendes da Rocha, Vilanova Artigas —la lista de figuras de escala mundial es única. Pero más allá de los nombres, es la forma en que la arquitectura se convirtió en proyecto político y cultural lo que hace de Brasil un destino extraordinario para entender cómo se construye una identidad nacional a través del espacio.`,
    region: 'latam',
    countries: ['Brasil'],
    startDate: '2026-09-05',
    endDate: '2026-09-19',
    displayDates: ['05/09/2026', '19/09/2026'],
    duration: '15 días',
    destination: 'Río de Janeiro · Brasilia · São Paulo',
    price: {
      from: 2200,
      currency: 'USD',
      displayFrom: 'USD 2.200',
      note: 'Precio por persona. Disponible por tramo.',
    },
    status: 'available',
    leader: {
      name: 'Ale',
      initials: 'A',
    },
    packages: [
      { id: 'completo', label: 'Completo (3 ciudades)', discount: 0 },
      { id: 'rio', label: 'Solo Río de Janeiro', discount: 0 },
      { id: 'brasilia', label: 'Solo Brasilia', discount: 0 },
      { id: 'sao-paulo', label: 'Solo São Paulo', discount: 0 },
    ],
    whatsappTravel: 'https://wa.me/XXXXXXXXXXX',
    whatsappInfo: 'https://wa.me/XXXXXXXXXXX',
    filter: ['todos', 'brasil'],
    itinerary: [
      {
        day: 'Días 1-4',
        title: 'Río de Janeiro',
        content: 'Llegada a Río. Recorrido por el centro histórico y la arquitectura ecléctica. Visita al Museu de Arte Moderna (Affonso Eduardo Reidy), al Aterro do Flamengo, al Museu Nacional de Belas Artes. Arquitectura colonial en el Centro. Charla sobre modernismo carioca.',
      },
      {
        day: 'Día 5',
        title: 'Traslado a Brasilia',
        content: 'Vuelo Río → Brasilia. Llegada y primera lectura desde el avión de la planta piloto de Lúcio Costa.',
      },
      {
        day: 'Días 6-8',
        title: 'Brasilia — La utopía construida',
        content: 'Tres días completos para explorar la capital. Eje Monumental: Praça dos Três Poderes, Congresso Nacional, Palácio do Planalto, Supremo Tribunal Federal (Niemeyer). Superquadras residenciales. Catedral Metropolitana. Palácio da Alvorada. Visita al Museu Nacional de Brasília.',
      },
      {
        day: 'Día 9',
        title: 'Traslado a São Paulo',
        content: 'Vuelo Brasilia → São Paulo. Instalación en Vila Madalena o Pinheiros.',
      },
      {
        day: 'Días 10-13',
        title: 'São Paulo — Brutalismo y metrópolis',
        content: 'MASP (Lina Bo Bardi), SESC Pompeia (Lina Bo Bardi), Faculdade de Arquitetura e Urbanismo (Vilanova Artigas), Museu Brasileiro da Escultura (Paulo Mendes da Rocha). Arquitectura paulista: el brutalismo como programa ético. Visita a barrio de arquitectura contemporánea.',
      },
      {
        day: 'Días 14-15',
        title: 'Cierre en São Paulo',
        content: 'Recorrido por arquitectura doméstica y residencial moderna. Tiempo libre para profundizar lo visto. Vuelo de regreso.',
      },
    ],
    included: [
      'Alojamiento en hoteles boutique y pousadas seleccionadas',
      'Desayunos incluidos todos los días',
      'Traslados y excursiones según itinerario',
      'Vuelos internos (Río → Brasilia → São Paulo)',
      'Guía especializada durante todo el recorrido',
      'Entradas a museos y sitios indicados en el programa',
      'Materiales de estudio (guía impresa del viaje)',
    ],
    notIncluded: [
      'Vuelo internacional de llegada (Buenos Aires – Río)',
      'Vuelo de regreso (São Paulo – Buenos Aires)',
      'Almuerzos y cenas (salvo indicación)',
      'Gastos personales y extras',
      'Seguro de viaje (recomendado)',
    ],
  },
]

export function getTripBySlug(slug) {
  return trips.find(t => t.slug === slug)
}

export function getTripsByFilter(filter) {
  if (filter === 'todos') return trips
  return trips.filter(t => t.filter.includes(filter))
}

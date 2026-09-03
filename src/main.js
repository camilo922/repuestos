// Repuestos Colombia — selector de vehículo, menú móvil y tracking.
import { MARCAS } from './data/vehiculos.js'

// Número de WhatsApp del negocio (sin "+"). Se usa en todos los enlaces
// data-wa y en el formulario de cotización.
const WHATSAPP = document.body.dataset.whatsapp || '573245843313'

// --- Selector de vehículo ------------------------------------
// Marca → Modelo → Año → mensaje de WhatsApp prellenado.

function fillSelect(select, items, placeholder) {
  select.innerHTML = ''
  const opt = document.createElement('option')
  opt.value = ''
  opt.textContent = placeholder
  select.appendChild(opt)
  items.forEach((item) => {
    const o = document.createElement('option')
    o.value = item.value
    o.textContent = item.label
    select.appendChild(o)
  })
  select.disabled = items.length === 0
}

function initSelector() {
  const form = document.getElementById('cotizador')
  if (!form) return

  const marcaSel = form.querySelector('#marca')
  const modeloSel = form.querySelector('#modelo')
  const anioSel = form.querySelector('#anio')
  const repuesto = form.querySelector('#repuesto')

  fillSelect(
    marcaSel,
    MARCAS.map((m) => ({ value: m.id, label: m.nombre })),
    'Elija la marca'
  )
  fillSelect(modeloSel, [], 'Elija el modelo')
  fillSelect(anioSel, [], 'Elija el año')

  // Permite preseleccionar una marca desde los enlaces "#cotizador?marca=kia"
  // o desde los botones de las tarjetas de marca (data-marca).
  function selectMarca(id) {
    if (!id) return
    marcaSel.value = id
    marcaSel.dispatchEvent(new Event('change'))
  }

  marcaSel.addEventListener('change', () => {
    const marca = MARCAS.find((m) => m.id === marcaSel.value)
    fillSelect(
      modeloSel,
      marca ? marca.modelos.map((mod) => ({ value: mod.nombre, label: mod.nombre })) : [],
      'Elija el modelo'
    )
    fillSelect(anioSel, [], 'Elija el año')
  })

  modeloSel.addEventListener('change', () => {
    const marca = MARCAS.find((m) => m.id === marcaSel.value)
    const modelo = marca && marca.modelos.find((mod) => mod.nombre === modeloSel.value)
    const anios = []
    if (modelo) {
      for (let y = modelo.hasta; y >= modelo.desde; y--) anios.push({ value: String(y), label: String(y) })
    }
    fillSelect(anioSel, anios, 'Elija el año')
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const marca = MARCAS.find((m) => m.id === marcaSel.value)
    const partes = []
    if (marca) partes.push(marca.nombre)
    if (modeloSel.value) partes.push(modeloSel.value)
    if (anioSel.value) partes.push(anioSel.value)
    const carro = partes.join(' ')
    const pieza = repuesto.value.trim()

    let msg = 'Hola, quiero cotizar un repuesto.'
    if (carro) msg += `\nVehículo: ${carro}`
    if (pieza) msg += `\nRepuesto: ${pieza}`
    track('Contact', 'cotizador')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  })

  document.querySelectorAll('[data-marca]').forEach((el) => {
    el.addEventListener('click', () => {
      selectMarca(el.dataset.marca)
      repuesto.focus()
    })
  })

  const params = new URLSearchParams(location.hash.split('?')[1] || '')
  selectMarca(params.get('marca'))
}

// --- Enlaces de WhatsApp genéricos ----------------------------
// Cualquier <a data-wa="texto"> se convierte en un enlace wa.me con
// el número del negocio y el texto prellenado.
function initWaLinks() {
  document.querySelectorAll('a[data-wa]').forEach((a) => {
    const text = a.dataset.wa
    a.href = text
      ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
      : `https://wa.me/${WHATSAPP}`
    a.target = '_blank'
    a.rel = 'noopener'
  })
  document.querySelectorAll('[data-wa-number]').forEach((el) => {
    el.textContent = formatNumber(WHATSAPP)
  })
}

function formatNumber(n) {
  // 573001234567 → +57 300 123 4567
  const m = n.match(/^(57)(\d{3})(\d{3})(\d{4})$/)
  return m ? `+${m[1]} ${m[2]} ${m[3]} ${m[4]}` : `+${n}`
}

// --- Menú móvil -------------------------------------------------
function initNav() {
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.site-nav')
  if (!toggle || !nav) return
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(open))
  })
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('is-open')))
}

// --- Banner de textos rotativos ---------------------------------
function initAnnounceBar() {
  const items = document.querySelectorAll('.announce-item')
  if (items.length < 2) return
  let index = 0
  setInterval(() => {
    items[index].classList.remove('is-active')
    index = (index + 1) % items.length
    items[index].classList.add('is-active')
  }, 4500)
}

// --- Logos que alternan (ej. Kia: logo anterior / actual) ------
function initLogoFade() {
  document.querySelectorAll('.logo-fade').forEach((wrap) => {
    const items = wrap.querySelectorAll('.logo-fade-item')
    if (items.length < 2) return
    let index = 0
    setInterval(() => {
      items[index].classList.remove('is-active')
      index = (index + 1) % items.length
      items[index].classList.add('is-active')
    }, 3000)
  })
}

// --- Tracking (Meta Pixel + Google Ads) ------------------------
// Los pixeles solo se cargan si los IDs placeholder fueron
// reemplazados por valores reales en index.html.

function pixelConfigured() {
  return window.META_PIXEL_ID && window.META_PIXEL_ID !== 'TU_PIXEL_ID'
}

function adsConfigured() {
  return window.GOOGLE_ADS_ID && window.GOOGLE_ADS_ID !== 'AW-XXXXXXXXX'
}

function adsLabelConfigured() {
  return window.GOOGLE_ADS_CONVERSION_LABEL && window.GOOGLE_ADS_CONVERSION_LABEL !== 'TU_LABEL'
}

// Con ?track=1 en la URL (o localStorage.track = "1") los eventos se
// imprimen en consola, útil para verificar el cableado sin IDs reales.
function debugEnabled() {
  try {
    return /[?&]track=1/.test(location.search) || localStorage.getItem('track') === '1'
  } catch (e) {
    return false
  }
}

function loadMetaPixel() {
  if (!pixelConfigured() || window.fbq) return
  const n = (window.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  })
  if (!window._fbq) window._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []
  const t = document.createElement('script')
  t.async = true
  t.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(t)
  window.fbq('init', window.META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

function loadGoogleAds() {
  if (!adsConfigured() || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GOOGLE_ADS_ID
  document.head.appendChild(s)
  window.gtag('js', new Date())
  window.gtag('config', window.GOOGLE_ADS_ID)
}

// name: "Contact" (particulares) o "Lead" (talleres / flotas).
// label: identifica el botón (header, hero, cotizador, categoria-frenos…).
function track(name, label) {
  const event = name === 'Lead' ? 'Lead' : 'Contact'
  if (debugEnabled()) {
    console.log('[track]', event, label, {
      meta: pixelConfigured(),
      ads: adsConfigured(),
      adsLabel: adsLabelConfigured(),
    })
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', event, { content_name: label, content_category: 'whatsapp' })
  }
  if (typeof window.gtag === 'function' && adsConfigured()) {
    if (adsLabelConfigured()) {
      window.gtag('event', 'conversion', {
        send_to: window.GOOGLE_ADS_ID + '/' + window.GOOGLE_ADS_CONVERSION_LABEL,
        value: 1.0,
        currency: 'COP',
        event_category: 'contacto',
        event_label: label,
      })
    } else {
      window.gtag('event', 'whatsapp_click', { event_category: 'contacto', event_label: label })
    }
  }
}

function initTracking() {
  loadMetaPixel()
  loadGoogleAds()
  document.querySelectorAll('[data-track="whatsapp"]').forEach((el) => {
    el.addEventListener('click', () => {
      track(el.dataset.trackEvent || 'Contact', el.dataset.trackLabel || 'whatsapp')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initWaLinks()
  initSelector()
  initNav()
  initAnnounceBar()
  initLogoFade()
  initTracking()
})

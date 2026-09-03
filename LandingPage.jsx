// LandingPage.jsx
//
// Landing page de conversión móvil para MiRepuestoCarro.com.
// Requiere en el proyecto destino: react, react-dom, tailwindcss (configurado)
// y lucide-react (`npm install lucide-react`).
// Si el entorno es Next.js App Router, agrega "use client" como primera línea
// del archivo (usa useState para el acordeón de FAQ).
// El logo se referencia como /img/logo.jpeg (mismo asset que src/repuestos/public/img/logo.jpeg);
// copia ese archivo a public/img/logo.jpeg en el proyecto destino o ajusta la ruta.

import { useState } from 'react'
import { ShieldCheck, Truck, Wallet, ChevronDown } from 'lucide-react'

// Reemplazar por el número real de WhatsApp de la bodega (formato: 57 + número, sin "+").
const WHATSAPP_NUMBER = '573000000000'

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const COTIZAR_MESSAGE =
  'Hola Bodega MiRepuestoCarro, me choqué y necesito cotizar una pieza. Mi carro es Marca [], Modelo [] y Año [_____].'

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 5.2 5.2 0 0 0 3.2.7 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="bg-slate-50 px-4 pb-14 pt-10 sm:pt-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <img
          src="/img/logo.jpeg"
          alt="MiRepuestoCarro.com"
          className="mb-8 h-32 w-auto sm:h-40"
        />

        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          Repuestos de Choque Originales en Colombia: Encuentra tu Pieza Hoy, con Legalidad 100% Garantizada
        </h1>

        <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
          Piezas de colisión de salvamento legal, verificadas y con procedencia lícita de aseguradora.
          Cotiza en minutos y olvídate de los repuestos homologados que no encajan.
        </p>

        <a
          href={buildWhatsAppLink(COTIZAR_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-bold text-white shadow-lg shadow-green-900/10 transition-transform active:scale-[0.98] sm:w-auto sm:text-xl"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Cotizar mi repuesto ahora
        </a>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Origen Legal Garantizado',
      description: 'Piezas de salvamento adquiridas legalmente a través de aseguradoras, con procedencia lícita.',
    },
    {
      icon: Truck,
      title: 'Envío a todo el país',
      description: 'Despachamos tu repuesto a cualquier ciudad de Colombia en 24 a 72 horas.',
    },
    {
      icon: Wallet,
      title: 'Precios de Bodega',
      description: 'Hasta un 60% más barato que un repuesto nuevo, sin sacrificar calidad ni ajuste.',
    },
  ]

  return (
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Por qué elegirnos</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#25D366]">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 70% de las tarjetas "DISPONIBLE" (verde), 30% "VENDIDO / SIN STOCK" (rojo).
const INVENTORY = [
  { name: 'Puerta Delantera Izquierda Mazda 2', image: '/img/inventario/puerta-mazda-2.jpg', status: 'DISPONIBLE' },
  { name: 'Capó Chevrolet Tracker', image: '/img/inventario/capo-chevrolet-tracker.jpg', status: 'DISPONIBLE' },
  { name: 'Bumper Trasero Kia Rio', image: '/img/inventario/bumper-kia-rio.jpg', status: 'VENDIDO / SIN STOCK' },
  { name: 'Guardabarros Renault Sandero', image: '/img/inventario/guardabarros-renault-sandero.jpg', status: 'DISPONIBLE' },
  { name: 'Espejo Lateral Ford Fiesta', image: '/img/inventario/espejo-ford-fiesta.jpg', status: 'DISPONIBLE' },
  { name: 'Farola Derecha Nissan Versa', image: '/img/inventario/farola-nissan-versa.jpg', status: 'VENDIDO / SIN STOCK' },
  { name: 'Compuerta de Maletero Hyundai Tucson', image: '/img/inventario/compuerta-hyundai-tucson.jpg', status: 'DISPONIBLE' },
  { name: 'Puerta Trasera Toyota Corolla', image: '/img/inventario/puerta-toyota-corolla.jpg', status: 'DISPONIBLE' },
  { name: 'Bumper Delantero Volkswagen Gol', image: '/img/inventario/bumper-volkswagen-gol.jpg', status: 'VENDIDO / SIN STOCK' },
  { name: 'Capó Chevrolet Spark', image: '/img/inventario/capo-chevrolet-spark.jpg', status: 'DISPONIBLE' },
]

function InventoryGallery() {
  return (
    <section className="bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Inventario disponible ahora</h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Nuestro stock rota rápido. Si ves la pieza que necesitas, cotízala antes de que se agote.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {INVENTORY.map((item) => {
            const isAvailable = item.status === 'DISPONIBLE'
            return (
              <div key={item.name} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-square bg-slate-200">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
                  <span
                    className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs ${
                      isAvailable ? 'bg-[#25D366]' : 'bg-red-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-slate-900">{item.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TransparencyBanner() {
  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border-l-4 border-amber-400 bg-slate-100 p-6">
        <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
          Nota de bodega: Nuestras piezas son de segunda mano. Pueden presentar raspones leves de almacenamiento
          que tu latonero solucionará al preparar la pintura. Garantizamos piezas estructuralmente perfectas: cero
          masilla, cero dobleces, cero reconstrucciones.
        </p>
      </div>
    </section>
  )
}

const FAQ_ITEMS = [
  {
    question: '¿Es legal comprar repuestos de segunda?',
    answer:
      'Sí. Todas nuestras piezas provienen de vehículos de salvamento adquiridos legalmente a través de aseguradoras. Te entregamos un repuesto con procedencia lícita, sin dolores de cabeza.',
  },
  {
    question: '¿Por qué es mejor un repuesto original usado que uno homologado?',
    answer:
      'El repuesto homologado nuevo (chino) es más delgado, se deforma fácil y casi nunca encaja perfecto. Nuestro repuesto es original de fábrica: el metal es del calibre correcto, encaja perfecto, la pintura se adhiere mejor y conserva la seguridad estructural de tu vehículo.',
  },
  {
    question: '¿Cómo sé cuál es el lado izquierdo o derecho de mi carro?',
    answer:
      'Regla de oro del mecánico: Siéntate en el puesto del conductor mirando hacia el frente. Piloto = Lado Izquierdo. Copiloto = Lado Derecho.',
  },
]

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Preguntas frecuentes</h2>

        <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-10 text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center text-sm">
        <img
          src="/img/logo.jpeg"
          alt="MiRepuestoCarro.com"
          className="h-24 w-auto rounded-xl bg-white p-2 sm:h-32"
        />
        <span className="text-base font-bold text-white">MiRepuestoCarro.com</span>
        <p>Repuestos de colisión de salvamento legal, envíos a toda Colombia.</p>
        <a
          href={buildWhatsAppLink(COTIZAR_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-4"
        >
          Escríbenos por WhatsApp
        </a>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} MiRepuestoCarro.com. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(COTIZAR_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <WhyChooseUs />
      <InventoryGallery />
      <TransparencyBanner />
      <FaqAccordion />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  )
}

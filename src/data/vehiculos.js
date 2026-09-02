// Catálogo de marcas y modelos que se venden en Colombia.
// Cada modelo tiene el rango de años que atendemos.
// Para agregar una marca o un modelo basta con editar este archivo.

export const MARCAS = [
  {
    id: 'mazda',
    nombre: 'Mazda',
    descripcion: 'Repuestos originales y homologados para toda la línea Mazda vendida en Colombia.',
    modelos: [
      { nombre: 'Mazda 2', desde: 2008, hasta: 2026 },
      { nombre: 'Mazda 3', desde: 2004, hasta: 2026 },
      { nombre: 'Mazda 6', desde: 2003, hasta: 2024 },
      { nombre: 'CX-3', desde: 2016, hasta: 2024 },
      { nombre: 'CX-30', desde: 2020, hasta: 2026 },
      { nombre: 'CX-5', desde: 2013, hasta: 2026 },
      { nombre: 'CX-50', desde: 2023, hasta: 2026 },
      { nombre: 'CX-9', desde: 2008, hasta: 2023 },
      { nombre: 'BT-50', desde: 2007, hasta: 2026 },
      { nombre: 'Allegro', desde: 1995, hasta: 2007 },
      { nombre: '323', desde: 1990, hasta: 2003 },
    ],
  },
  {
    id: 'ford',
    nombre: 'Ford',
    descripcion: 'Motor, frenos, suspensión y eléctricos para los Ford más comunes en el país.',
    modelos: [
      { nombre: 'Fiesta', desde: 2004, hasta: 2019 },
      { nombre: 'Focus', desde: 2005, hasta: 2018 },
      { nombre: 'EcoSport', desde: 2004, hasta: 2022 },
      { nombre: 'Escape', desde: 2008, hasta: 2026 },
      { nombre: 'Explorer', desde: 2006, hasta: 2026 },
      { nombre: 'Edge', desde: 2011, hasta: 2023 },
      { nombre: 'Territory', desde: 2021, hasta: 2026 },
      { nombre: 'Bronco', desde: 2021, hasta: 2026 },
      { nombre: 'Ranger', desde: 2000, hasta: 2026 },
      { nombre: 'F-150', desde: 2004, hasta: 2026 },
      { nombre: 'Mustang', desde: 2010, hasta: 2026 },
    ],
  },
  {
    id: 'kia',
    nombre: 'Kia',
    descripcion: 'Desde el Picanto hasta la Sportage: repuestos con garantía y entrega rápida.',
    modelos: [
      { nombre: 'Picanto', desde: 2005, hasta: 2026 },
      { nombre: 'Rio', desde: 2006, hasta: 2026 },
      { nombre: 'Cerato', desde: 2005, hasta: 2024 },
      { nombre: 'K3', desde: 2024, hasta: 2026 },
      { nombre: 'Soul', desde: 2010, hasta: 2023 },
      { nombre: 'Stonic', desde: 2019, hasta: 2026 },
      { nombre: 'Sonet', desde: 2022, hasta: 2026 },
      { nombre: 'Seltos', desde: 2020, hasta: 2026 },
      { nombre: 'Sportage', desde: 2005, hasta: 2026 },
      { nombre: 'Sorento', desde: 2006, hasta: 2026 },
      { nombre: 'Carens', desde: 2007, hasta: 2026 },
      { nombre: 'Carnival', desde: 2007, hasta: 2026 },
      { nombre: 'Niro', desde: 2018, hasta: 2026 },
    ],
  },
]

// Categorías de repuestos que mostramos en la página.
export const CATEGORIAS = [
  { id: 'frenos', nombre: 'Frenos', detalle: 'Pastillas, discos, campanas, bombas y líquido de frenos.' },
  { id: 'filtros', nombre: 'Filtros', detalle: 'Filtro de aceite, aire de motor, aire de cabina y combustible.' },
  { id: 'motor', nombre: 'Motor', detalle: 'Kit de distribución, correas, bujías, bobinas y empaques.' },
  { id: 'suspension', nombre: 'Suspensión', detalle: 'Amortiguadores, tijeras, rótulas, bujes y terminales.' },
  { id: 'electrico', nombre: 'Eléctrico', detalle: 'Baterías, alternadores, motores de arranque y sensores.' },
  { id: 'refrigeracion', nombre: 'Refrigeración', detalle: 'Radiadores, bombas de agua, termostatos y mangueras.' },
  { id: 'luces', nombre: 'Luces', detalle: 'Farolas, stops, exploradoras y bombillos.' },
  { id: 'carroceria', nombre: 'Carrocería', detalle: 'Bumpers, espejos, guardafangos, capós y manijas.' },
  { id: 'embrague', nombre: 'Embrague y caja', detalle: 'Kit de clutch, volante, bombas y aceite de transmisión.' },
  { id: 'lubricantes', nombre: 'Aceites y lubricantes', detalle: 'Aceite de motor, refrigerante, líquido de dirección.' },
]

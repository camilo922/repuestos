# Repuestos Colombia

Landing page estática de **Repuestos Colombia** (repuestos para Mazda, Ford y Kia), construida con [Vite](https://vitejs.dev/) (HTML, CSS y JavaScript vanilla) y desplegada en GitHub Pages. La estética está tomada de [carcarekiosk.com](https://es.carcarekiosk.com/): navbar oscura, fondo blanco, azul primario, tarjetas con borde suave y selector Marca → Modelo → Año.

## Estructura

```
.
├── index.html              # Página principal (SEO, JSON-LD y todas las secciones)
├── src/
│   ├── main.js             # Selector de vehículo, enlaces de WhatsApp, menú móvil y tracking
│   ├── data/
│   │   └── vehiculos.js    # Marcas, modelos y años que atendemos + categorías de repuestos
│   └── styles/
│       └── main.css        # Tokens de diseño, componentes y responsive
├── public/                 # Assets estáticos (imágenes, favicon…) copiados tal cual al build
├── vite.config.js          # Config de Vite (base: /)
└── .github/workflows/deploy.yml  # CI: build y deploy automático a GitHub Pages
```

## Datos del negocio (pendientes de reemplazar)

- **WhatsApp**: el número vive en `index.html`, en el atributo `data-whatsapp` del `<body>` (sin `+`). Todos los enlaces con `data-wa` y los textos con `data-wa-number` lo toman de ahí. También hay que cambiarlo en el JSON-LD (`telephone`).
- **Dirección, horario y mapa**: en la sección `#contacto` y en el JSON-LD. El iframe del mapa apunta a Medellín en general; cambiar la URL por la dirección real.
- **Dominio**: `repuestoscolombia.com` es un placeholder en `canonical`, `og:url` y JSON-LD. Si el sitio va a tener dominio propio, agregar `public/CNAME` con el dominio y configurarlo en GitHub Pages.
- **Fotos**: las imágenes de `public/img/` son placeholders SVG (`mazda.svg`, `ford.svg`, `kia.svg`, `og-repuestos.svg`). Reemplazarlas por fotos reales conservando los nombres (o cambiar las rutas en `index.html`).
- **Reseñas y cifras**: las reseñas y el "+5.000 referencias" son texto de ejemplo.

## Funcionalidades

- **Selector de vehículo**: Marca → Modelo → Año se llena desde `src/data/vehiculos.js`. Al enviar el formulario se abre WhatsApp con el vehículo y el repuesto ya escritos. Los botones de las tarjetas de marca (`data-marca`) preseleccionan la marca en el formulario.
- **Enlaces de WhatsApp**: cualquier `<a data-wa="texto">` se convierte en `https://wa.me/<numero>?text=<texto>`. Las tarjetas de categoría abren WhatsApp con la consulta de esa categoría.
- **Tracking de conversiones** (Meta Pixel y Google Ads): la config vive en `index.html` (`META_PIXEL_ID`, `GOOGLE_ADS_ID`, `GOOGLE_ADS_CONVERSION_LABEL`). Cada script solo se carga cuando su ID dejó de ser el placeholder. La conversión es el clic en cualquier enlace de WhatsApp (`data-track="whatsapp"`):
  - `data-track-label` identifica el botón (`header`, `hero`, `cotizador`, `categoria-frenos`, `talleres`, `cta-final`…).
  - `data-track-event="Lead"` marca los botones B2B (talleres y flotas); el resto envía `Contact`.
  - Para verificar el cableado sin IDs reales, abre la página con `?track=1`: cada clic imprime `[track] <evento> <label>` en la consola.
- **Responsive**: breakpoints en 992px (menú hamburguesa) y 640px.

## Desarrollo

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo en http://localhost:5173
npm run build   # build de producción en dist/
npm run preview # previsualizar el build localmente
```

## Deploy a GitHub Pages

El deploy es automático: cada push a la rama `main` ejecuta el workflow de GitHub Actions, que hace el build con Vite y publica `dist/` en GitHub Pages.

Configuración inicial (una sola vez):

1. En el repo: **Settings → Pages → Source → GitHub Actions**.
2. Si el sitio se sirve desde `<usuario>.github.io/<repo>/`, cambiar `base` en `vite.config.js` a `'/<repo>/'`. Si tiene dominio propio, dejar `base: '/'` y agregar `public/CNAME`.
3. Hacer push a `main`.

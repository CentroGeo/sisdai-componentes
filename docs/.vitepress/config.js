import { createRequire } from 'module'
import * as dotenv from 'dotenv'

const { VITE_CDN_ARCHIVOS, VITE_DOMINIO, VITE_URL_BASE, VITE_DESCRIPCION } = dotenv.config({
  path: 'docs/.env',
}).parsed

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

// https://vitepress.dev/reference/site-config
export default {
  lang: 'es-mx',
  title: 'sisdai-componentes',
  description: pkg.description,

  // appearance: false,
  lastUpdated: true,

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: '',
      },
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
    ['meta', { property: 'og:title', content: 'sisdai-componentes' }],
    ['meta', { property: 'og:description', content: `${VITE_DESCRIPCION}` }],
    [
      'meta',
      {
        property: 'og:image',
        content: `${VITE_CDN_ARCHIVOS}redes/miniatura-sisdaicomponentes.png`,
      },
    ],
    ['meta', { property: 'og:url', content: `${VITE_DOMINIO}${VITE_URL_BASE}` }],
    ['meta', { name: 'twitter:title', content: 'sisdai-componentes' }],
    ['meta', { name: 'twitter:description', content: `${VITE_DESCRIPCION}` }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${VITE_CDN_ARCHIVOS}redes/miniatura-sisdaicomponentes.png`,
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/comienza/': sidebarComienza('comienza'),
      '/componentes/': sidebarComponentes('componentes'),
    },

    socialLinks: [
      {
        // icon: 'github',
        // link: pkg.repository.url || '',
        // ariaLabel: 'github',
      },
    ],

    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'America/Mexico_City',
      },
      text: 'Última actualización',
    },
  },
}

function nav() {
  return [
    {
      text: 'Inicio',
      link: '/',
      activeMatch: '',
    },
    {
      text: 'Comienza',
      link: '/comienza/',
      activeMatch: 'comienza',
    },
    {
      text: 'Componentes',
      link: '/componentes/area-texto/',
      activeMatch: 'componentes',
    }
    // {
    //   text: `v${pkg.version}`,
    //   link: pkg.repository.url,
    //   rel: 'noopener noreferrer',
    //   target: '_blank',
    //   img: 'https://cdn.conahcyt.mx/sisdai-archivos/gitlab-logo-500.png',
    // },
  ]
}

function sidebarComponentes(path) {
  // Agrega aquí las rutas de los nuevos componentes
  return [
    {
      text: 'Área de texto',
      link: `/${path}/area-texto/`,
    },
    {
      text: 'Audio',
      link: `/${path}/audio/`,
    },
    {
      text: 'Botón flotante',
      link: `/${path}/boton-flotante/`,
      pre: true,
    },
    {
      text: 'Botón de radio',
      link: `/${path}/boton-radio/`,
    },
    {
      text: 'Campo base',
      link: `/${path}/campo-base/`,
    },
    {
      text: 'Campo de búsqueda',
      link: `/${path}/campo-busqueda/`,
    },
    {
      text: 'Casilla de verificación',
      link: `/${path}/casilla-verificacion/`,
    },
    {
      text: 'Colapsable de navegación',
      link: `/${path}/colapsable-navegacion/`,
      pre: true,
    },
    {
      text: 'Control para acercar y alejar',
      link: `/${path}/control-acercar-alejar/`,
    },
    {
      text: 'Control deslizante',
      link: `/${path}/control-deslizante/`,
    },
    {
      text: 'Directivas',
      link: `/${path}/directivas/`,
    },
    {
      text: 'Enlace externo',
      link: `/${path}/enlace-externo/`,
    },
    {
      text: 'ImagenPngWebp',
      link: `/${path}/imagen-png-webp/`,
    },
    {
      text: 'Índice de contenido',
      link: `/${path}/indice-de-contenido/`,
      pre: true,
    },
    {
      text: 'Información de despliegue',
      link: `/${path}/info-de-despliegue/`,
    },
    {
      text: 'Menú de accesibilidad',
      link: `/${path}/menu-accesibilidad/`,
    },
    {
      text: 'Menú lateral',
      link: `/${path}/menu-lateral/`,
      pre: true,
    },
    {
      text: 'Modal',
      link: `/${path}/modal/`,
    },
    {
      text: 'Narrativa',
      link: `/${path}/narrativa/`,
    },
    {
      text: 'Navegación GobMx',
      link: `/${path}/navegacion-gob-mx/`,
    },
    {
      text: 'Navegación principal',
      link: `/${path}/navegacion-principal/`,
    },
    {
      text: 'Pestañas',
      link: `/${path}/pestanias/`,
    },
    {
      text: 'Pie de página Conahcyt',
      link: `/${path}/pie-pagina-conahcyt/`,
    },
    {
      text: 'Pie de página GobMx',
      link: `/${path}/pie-pagina-gob-mx/`,
    },
    {
      text: 'Selector',
      link: `/${path}/selector/`,
    },
  ]
}

function sidebarComienza(path) {
  // Agrega aquí las rutas de los nuevos componentes
  return [
    {
      text: 'Comienza',
      link: `/${path}/`,
    },
    {
      text: 'Instalación',
      link: `/${path}/instalacion/`,
    },
    {
      text: 'Uso de los componentes',
      link: `/${path}/uso/`,
    },
  ]
}

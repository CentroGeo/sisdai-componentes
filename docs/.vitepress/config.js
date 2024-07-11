import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

// https://vitepress.dev/reference/site-config
export default {
  lang: 'es-mx',
  title: 'SISDAI-COMPONENTES',
  description: pkg.description,

  // appearance: false,
  lastUpdated: true,

  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://file.myfontastic.com/JS4TgqY9L4s8WsKQDkt5qA/icons.css',
  //     },
  //   ],
  // ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/': sidebarDocumentacion('documentacion'),
      '/documentacion/': sidebarDocumentacion('documentacion'),
    },

    socialLinks: [
      {
        icon: 'github',
        link: pkg.repository.url || '',
        ariaLabel: 'github',
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
      text: 'Documentación',
      link: '/',
      activeMatch: '/',
    },
    {
      text: `v${pkg.version}`,
      link: pkg.repository.url,
      rel: 'noopener noreferrer',
      target: '_blank',
      img: 'https://cdn.conahcyt.mx/sisdai-archivos/gitlab-logo-500.png',
    },
  ]
}

function sidebarDocumentacion(path) {
  // Agrega aquí las rutas de los nuevos componentes
  return [
    {
      text: 'Audio',
      link: `/${path}/audio/`,
    },
    {
      text: 'Boton flotante',
      link: `/${path}/boton-flotante/`,
      pre: true,
    },
    // {
    //   text: 'Campo de búsqueda',
    //   link: `/${path}/campo-busqueda/`,
    // },
    // {
    //   text: 'Colapsable navegación',
    //   link: `/${path}/colapsable-navegacion/`,
    // },
    // {
    //   text: 'Control de acercar y alejar',
    //   link: `/${path}/control-acercar-alejar/`,
    // },
    // {
    //   text: 'Control deslizante',
    //   link: `/${path}/control-deslizante/`,
    // },
    // {
    //   text: 'Directivas',
    //   link: `/${path}/directivas/`,
    // },
    // {
    //   text: 'Enlace externo',
    //   link: `/${path}/enlace-externo/`,
    // },
    // {
    //   text: 'Imagen png webp',
    //   link: `/${path}/imagen-png-webp/`,
    // },
    // {
    //   text: 'Índice de contenido',
    //   link: `/${path}/indice-de-contenido/`,
    // },
    // {
    //   text: 'Info de despliegue',
    //   link: `/${path}/info-de-despliegue/`,
    // },
    // {
    //   text: 'Menú de accesibilidad',
    //   link: `/${path}/menu-accesibilidad/`,
    // },
    // {
    //   text: 'Menú lateral',
    //   link: `/${path}/menu-lateral/`,
    // },
    // {
    //   text: 'Modal',
    //   link: `/${path}/modal/`,
    // },
    // {
    //   text: 'Narrativa',
    //   link: `/${path}/narrativa/`,
    // },
    // {
    //   text: 'Navegación gob mx',
    //   link: `/${path}/navegacion-gob-mx/`,
    // },
    // {
    //   text: 'Navegación principal',
    //   link: `/${path}/navegacion-principal/`,
    // },
    // {
    //   text: 'Pie de página Conahcyt',
    //   link: `/${path}/pie-pagina-conahcyt/`,
    // },
    // {
    //   text: 'Pie de página gob mx',
    //   link: `/${path}/pie-pagina-gob-mx/`,
    // },
  ]
}

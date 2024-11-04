import { createRequire } from 'module'

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
    ...(process.env.VITE_MATOMO_ID !== '0' ? [
      [
        'script',
        {},
        `
        var _paq = window._paq = window._paq || [];
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://retru.conacyt.mx/";
          _paq.push(['setTrackerUrl', u + 'matomo.php']);
          _paq.push(['setSiteId', '${process.env.VITE_MATOMO_ID}']);
          var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
          g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
        })();
        `
      ]
    ] : [])
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/': sidebarDocumentacion('documentacion'),
      '/documentacion/': sidebarDocumentacion('documentacion'),
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
      text: 'Botón Flotante',
      link: `/${path}/boton-flotante/`,
      pre: true,
    },
    {
      text: 'Campo Búsqueda',
      link: `/${path}/campo-busqueda/`,
    },
    {
      text: 'Colapsable Navegación',
      link: `/${path}/colapsable-navegacion/`,
      pre: true,
    },
    {
      text: 'Control Acercar Alejar',
      link: `/${path}/control-acercar-alejar/`,
    },
    {
      text: 'Control Deslizante',
      link: `/${path}/control-deslizante/`,
    },
    {
      text: 'Directivas',
      link: `/${path}/directivas/`,
    },
    {
      text: 'Enlace Externo',
      link: `/${path}/enlace-externo/`,
    },
    {
      text: 'ImagenPngWebp',
      link: `/${path}/imagen-png-webp/`,
    },
    {
      text: 'Índice de Contenido',
      link: `/${path}/indice-de-contenido/`,
      pre: true,
    },
    {
      text: 'Info de Despliegue',
      link: `/${path}/info-de-despliegue/`,
    },
    {
      text: 'Menú de Accesibilidad',
      link: `/${path}/menu-accesibilidad/`,
    },
    {
      text: 'Menú Lateral',
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
      text: 'Navegación Principal',
      link: `/${path}/navegacion-principal/`,
    },
    {
      text: 'Pie Página Conahcyt',
      link: `/${path}/pie-pagina-conahcyt/`,
    },
    {
      text: 'Pie Página GobMx',
      link: `/${path}/pie-pagina-gob-mx/`,
    },
  ]
}

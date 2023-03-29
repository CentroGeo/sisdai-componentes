import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  MenuAccesibilidad,
  NavegacionPrincipal,
  NavegacionGobMx,
  PiePaginaGobMx,
  PiePaginaConacyt,
} from './components'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(MenuAccesibilidad)
    Vue.use(NavegacionPrincipal)
    Vue.use(NavegacionGobMx)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
  },
}

export default plugin

import {
  NarrativaScroll,
  ComponenteVacio,
  ColapsableNavegacion,
  MenuLateral,
  MenuAccesibilidad,
  NavegacionPrincipal,
  IndiceDeContenido,
  NavegacionGobMx,
  PiePaginaGobMx,
  PiePaginaConacyt,
  InfoDeDespliegue,
} from './componentes'

const plugin = {
  install: function (Vue) {
    Vue.use(NarrativaScroll)
    Vue.use(ComponenteVacio)
    Vue.use(ColapsableNavegacion)
    Vue.use(MenuLateral)
    Vue.use(MenuAccesibilidad)
    Vue.use(NavegacionPrincipal)
    Vue.use(IndiceDeContenido)
    Vue.use(NavegacionGobMx)
    Vue.use(PiePaginaGobMx)
    Vue.use(PiePaginaConacyt)
    Vue.use(InfoDeDespliegue)
  },
}

export default plugin

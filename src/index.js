import {
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaGobMx,
  SisdaiPiePaginaConahcyt,
  SisdaiColapsableNavegacion,
  SisdaiMenuLateral,
  SisdaiIndiceDeContenido,
  SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  SisdaiNarrativaScroll,
  SisdaiBotonFlotante,
  SisdaiModal,
} from './componentes'

import { GlobosInformacion } from './directivas'

const plugin = {
  install: function (Vue) {
    //UI base
    Vue.use(SisdaiNavegacionGobMx)
    Vue.use(SisdaiNavegacionPrincipal)
    Vue.use(SisdaiPiePaginaGobMx)
    Vue.use(SisdaiPiePaginaConahcyt)
    Vue.use(SisdaiColapsableNavegacion)
    Vue.use(SisdaiMenuLateral)
    Vue.use(SisdaiIndiceDeContenido)
    Vue.use(SisdaiInfoDeDespliegue)
    //accesibilidad
    Vue.use(SisdaiMenuAccesibilidad)
    //auxiliares
    Vue.use(GlobosInformacion)
    //otros
    Vue.use(SisdaiNarrativaScroll)
    Vue.use(SisdaiBotonFlotante)
    Vue.use(SisdaiModal)
  },
}

export {
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaGobMx,
  SisdaiPiePaginaConahcyt,
  SisdaiColapsableNavegacion,
  SisdaiMenuLateral,
  SisdaiIndiceDeContenido,
  SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  GlobosInformacion,
  SisdaiNarrativaScroll,
  SisdaiBotonFlotante,
  SisdaiModal,
}

export default plugin

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
  SisdaiEnlaceExterno,
  SisdaiImagenPngWebp,
  SisdaiAudio,
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
    Vue.use(SisdaiEnlaceExterno)
    Vue.use(SisdaiAudio)

    //accesibilidad
    Vue.use(SisdaiMenuAccesibilidad)
    Vue.use(SisdaiImagenPngWebp)

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
  SisdaiEnlaceExterno,
  SisdaiImagenPngWebp,
  SisdaiAudio,
}

export default plugin

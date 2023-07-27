import SisdaiNavegacionGobMx from './navegacion-gob-mx/SisdaiNavegacionGobMx.vue'
import SisdaiNavegacionPrincipal from './navegacion-principal/SisdaiNavegacionPrincipal.vue'
import SisdaiPiePaginaGobMx from './pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue'
import SisdaiPiePaginaConahcyt from './pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue'
import SisdaiColapsableNavegacion from './colapsable-navegacion/SisdaiColapsableNavegacion.vue'
import SisdaiMenuLateral from './menu-lateral/SisdaiMenuLateral.vue'
import SisdaiIndiceDeContenido from './indice-de-contenido/SisdaiIndiceDeContenido.vue'
import SisdaiInfoDeDespliegue from './info-de-despliegue/SisdaiInfoDeDespliegue.vue'
import SisdaiMenuAccesibilidad from './menu-accesibilidad/SisdaiMenuAccesibilidad.vue'
import SisdaiNarrativaScroll from './narrativa-scroll/SisdaiNarrativaScroll.vue'
import SisdaiBotonFlotante from './boton-flotante/SisdaiBotonFlotante.vue'

// import { GlobosInformacion } from './directivas'

export default {
  install: Vue => {
    //UI base
    Vue.component('SisdaiNavegacionGobMx', SisdaiNavegacionGobMx)
    Vue.component('SisdaiNavegacionPrincipal', SisdaiNavegacionPrincipal)
    Vue.component('SisdaiPiePaginaGobMx', SisdaiPiePaginaGobMx)
    Vue.component('SisdaiPiePaginaConahcyt', SisdaiPiePaginaConahcyt)
    Vue.component('SisdaiColapsableNavegacion', SisdaiColapsableNavegacion)
    Vue.component('SisdaiMenuLateral', SisdaiMenuLateral)
    Vue.component('SisdaiIndiceDeContenido', SisdaiIndiceDeContenido)
    Vue.component('SisdaiInfoDeDespliegue', SisdaiInfoDeDespliegue)
    //accesibilidad
    Vue.component('SisdaiMenuAccesibilidad', SisdaiMenuAccesibilidad)
    //auxiliares
    // Vue.component('GlobosInformacion', GlobosInformacion)
    //otros
    Vue.component('SisdaiNarrativaScroll', SisdaiNarrativaScroll)
    Vue.component('SisdaiBotonFlotante', SisdaiBotonFlotante)
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
  // GlobosInformacion,
  SisdaiNarrativaScroll,
}

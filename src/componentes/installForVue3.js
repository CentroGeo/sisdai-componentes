// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
//   Public License for more details.
//
//   You should have received a copy of the GNU General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.

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

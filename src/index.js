// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.

import {
  SisdaiAudio,
  SisdaiBotonFlotante,
  SisdaiCampoBusqueda,
  SisdaiColapsableNavegacion,
  SisdaiControlAcercarAlejar,
  SisdaiControlDeslizante,
  SisdaiEnlaceExterno,
  SisdaiImagenPngWebp,
  SisdaiIndiceDeContenido,
  // SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  SisdaiMenuLateral,
  // SisdaiModal,
  // SisdaiNarrativa,
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaConahcyt,
  SisdaiPiePaginaGobMx,
} from './componentes'

import { GlobosInformacion } from './directivas'

const plugin = {
  install: function (Vue) {
    // //UI base
    Vue.use(SisdaiNavegacionGobMx)
    Vue.use(SisdaiNavegacionPrincipal)
    Vue.use(SisdaiPiePaginaGobMx)
    Vue.use(SisdaiPiePaginaConahcyt)
    Vue.use(SisdaiColapsableNavegacion)
    Vue.use(SisdaiMenuLateral)
    Vue.use(SisdaiIndiceDeContenido)
    // Vue.use(SisdaiInfoDeDespliegue)
    Vue.use(SisdaiEnlaceExterno)
    Vue.use(SisdaiAudio)
    Vue.use(SisdaiControlDeslizante)

    // //accesibilidad
    Vue.use(SisdaiMenuAccesibilidad)
    Vue.use(SisdaiImagenPngWebp)

    // //auxiliares
    Vue.use(GlobosInformacion)
    // //otros
    // Vue.use(SisdaiNarrativa)

    Vue.use(SisdaiBotonFlotante)
    // Vue.use(SisdaiModal)
    Vue.use(SisdaiCampoBusqueda)
    Vue.use(SisdaiControlAcercarAlejar)
  },
}

export {
  SisdaiAudio,
  GlobosInformacion,
  SisdaiBotonFlotante,
  SisdaiCampoBusqueda,
  SisdaiColapsableNavegacion,
  SisdaiControlAcercarAlejar,
  SisdaiControlDeslizante,
  SisdaiEnlaceExterno,
  SisdaiImagenPngWebp,
  SisdaiIndiceDeContenido,
  // SisdaiInfoDeDespliegue,
  SisdaiMenuAccesibilidad,
  SisdaiMenuLateral,
  // SisdaiModal,
  // SisdaiNarrativa,
  SisdaiNavegacionGobMx,
  SisdaiNavegacionPrincipal,
  SisdaiPiePaginaConahcyt,
  SisdaiPiePaginaGobMx,
}

export default plugin

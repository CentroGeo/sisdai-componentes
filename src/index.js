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

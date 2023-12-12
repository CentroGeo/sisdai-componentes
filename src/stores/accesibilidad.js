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

export default {
  namespaced: true,
  state: {
    // menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
    vista_oscura: false,
    tema: 'claro', // 'claro' | 'auto' | 'oscuro'
    perfil: 'eni', // 'eni' | 'sisdai' | 'gema'
  },
  getters: {
    clasesAccesibles: state => ({
      'a11y-oscura': state.vista_oscura,
      'a11y-tipografia': state.tipografia_accesible,
      'a11y-simplificada': state.vista_simplificada,
      'a11y-hipervinculos': state.enlaces_subrayados,
    }),
  },
  mutations: {
    alternarVistaOscura(state) {
      //rotar entre estos 3 valores
      const temas = ['claro', 'auto', 'oscuro']
      state.tema = temas[(temas.indexOf(state.tema) + 1) % 3]

      //setear el tema del localStorage
      localStorage.setItem('tema', state.tema)

      //prender y apagar la vista oscura
      state.vista_oscura = !state.vista_oscura
    },
    alternarTipografiaAccesible(state) {
      state.tipografia_accesible = !state.tipografia_accesible
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados
    },
    restablecer(state) {
      state.tipografia_accesible = false
      state.vista_simplificada = false
      state.enlaces_subrayados = false
      state.vista_oscura = false
      state.tema = 'claro'
    },
  },
}

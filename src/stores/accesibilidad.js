export default {
  namespaced: true,
  state: {
    // menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
    vista_oscura: false,
    tema: 'claro', // 'claro' | 'auto' | 'oscuro'
    perfil: null, // 'neutro' | 'sisdai' | 'gema'
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
      console.log('state.tema', state.tema)

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

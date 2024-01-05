export default {
  namespaced: true,
  state: {
    clasesAccesibles: [],
    // menu_accesibilidad_abierto: false,
    // tipografia_accesible: false,
    // vista_simplificada: false,
    // enlaces_subrayados: false,
    // vista_oscura: false,
    // tema: 'claro', // 'claro' | 'auto' | 'oscuro'
    // perfil: 'eni', // 'eni' | 'sisdai' | 'gema'
  },
  getters: {
    // clasesAccesibles: state => ({
    //   'a11y-oscura': state.vista_oscura,
    //   'a11y-tipografia': state.tipografia_accesible,
    //   'a11y-simplificada': state.vista_simplificada,
    //   'a11y-hipervinculos': state.enlaces_subrayados,
    // }),
  },
  mutations: {
    modificarClasesAccesibles(state, valor) {
      state.clasesAccesibles = valor
    },
    restablecer(state) {
      state.clasesAccesibles = []
      // state.tipografia_accesible = false
      // state.vista_simplificada = false
      // state.enlaces_subrayados = false
      // state.vista_oscura = false
      // state.tema = 'claro'
    },
    // alternarVistaOscura(state) {
    //   //rotar entre estos 3 valores
    //   // const temas = ['claro', 'oscuro']
    //   // state.tema = temas[(temas.indexOf(state.tema) + 1) % 2]
    //   // //setear el tema del localStorage
    //   // localStorage.setItem('tema', state.tema)
    //   //prender y apagar la vista oscura
    //   // state.vista_oscura = !state.vista_oscura
    // },
    // alternarTipografiaAccesible(state) {
    //   state.tipografia_accesible = !state.tipografia_accesible
    // },
    // alternarVistaSimplificada(state) {
    //   state.vista_simplificada = !state.vista_simplificada
    // },
    // alternarEnlacesSubrayados(state) {
    //   state.enlaces_subrayados = !state.enlaces_subrayados
    // },
  },
}

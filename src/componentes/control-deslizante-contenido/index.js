import SisdaiControlDeslizanteContenido from './SisdaiControlDeslizanteContenido.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(
      'SisdaiControlDeslizanteContenido',
      SisdaiControlDeslizanteContenido
    )
  },
}

export default plugin

import SisdaiAudio from './SisdaiAudio.vue'

const plugin = {
  install: function (Vue) {
    Vue.component('SisdaiAudio', SisdaiAudio)
  },
}

export default plugin

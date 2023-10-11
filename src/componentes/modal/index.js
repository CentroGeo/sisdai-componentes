import SisdaiModal from './SisdaiModal.vue'

const plugin = {
  install: function (Vue) {
    Vue.component('SisdaiModal', SisdaiModal)
  },
}

export default plugin

import SisdaiComponentes from './../../src'
import pageComponents from '@internal/page-components'
import Vuex from 'vuex'
import store from './store'

export default ({
  Vue,
  // options, // the options for the root Vue instance
  // router, // the router instance for the app
  // siteData // site metadata
}) => {
  // ...apply enhancements to the app
  // import styles
  require('./theme/styles/index.scss')
  require('../../node_modules/sisdai-css/src/sisdai.scss')
  require('../../node_modules/sisdai-css/src/_variables.scss')
  require('../../node_modules/sisdai-css/src/_mixins.scss')

  Vue.use(Vuex)
  Vue.mixin({ store: store })

  Vue.use(SisdaiComponentes)

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}

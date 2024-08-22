import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiControlDeslizante from '../../../src/componentes/control-deslizante/SisdaiControlDeslizante.vue'
import indexJS from '../../../src/componentes/control-deslizante/index.js'

describe('SisdaiControlDeslizante.vue', () => {
  const wrapper = shallowMount(SisdaiControlDeslizante, {
    props: {},
  })
  it('props', () => {
    // val_min
    // val_max
    // val_entrada
    // --
    // simular el cambio de valores de input range
  })
})

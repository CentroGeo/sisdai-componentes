import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiNarrativa from '../../../src/componentes/narrativa/SisdaiNarrativa.vue'
import indexJS from '../../../src/componentes/narrativa/index.js'

describe('SisdaiNarrativa.vue', () => {
  // TODO
  // id
  // depurador
  // altura_sensor
  // separacion
  // posicion_inicial
  const wrapper = shallowMount(SisdaiNarrativa, {
    props: {},
  })
  it('props', () => {
    console.log(wrapper.vm)
  })
  it('slots', () => {
    // contenido-fondo-sticky
    // default
  })
})

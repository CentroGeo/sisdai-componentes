import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiControlAcercarAlejar from '../../../src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue'
// import indexJS from '../../../src/componentes/control-acercar-alejar/index.js'

describe('SisdaiControlAcercarAlejar.vue', () => {
  const wrapper = shallowMount(SisdaiControlAcercarAlejar, {
    props: {},
  })
  it('props', () => {
    // min
    // max
    // step
    // --
    // simular el incremento y decremento del control
    // click en alejar
    // confirmar que disminuyó el inputValue
    // click en acercar
    // confirmar que aumentó el inputValue
    // modficar setValue el campo de texto
    // confirmar si cambió el valor del rango
  })
  it('emits', () => {})
})

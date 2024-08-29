import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiIndiceDeContenido from '../../../src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue'

describe('SisdaiIndiceDeContenido.vue', () => {
  const wrapper = shallowMount(SisdaiIndiceDeContenido, {
    props: {},
  })
  it('props', () => {
    // TODO ❌
    // titulo
    // altura
    // id_indice
    // --
    // simular el texto del titulo
  })
  it('slots', () => {
    // contenido-indice-contenido
  })
})

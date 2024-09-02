import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiIndiceDeContenido from '../../../src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue'
import indexJs from '../../../src/componentes/indice-de-contenido/index.js'

describe('SisdaiIndiceDeContenido.vue', () => {
  // TODO ❌
  const wrapper = shallowMount(SisdaiIndiceDeContenido)
  it('props', () => {
    // titulo
    // altura
    // id_indice
  })
  it('slots', () => {
    // contenido-indice-contenido
  })
})

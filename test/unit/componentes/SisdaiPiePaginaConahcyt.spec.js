import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiPiePaginaGobMx from '../../../src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue'

describe('SisdaiPiePaginaGobMx.vue', () => {
  const wrapper = shallowMount(SisdaiPiePaginaGobMx, {
    props: {},
  })
  it('instancias de variables', () => {
    // anioActual
    // --
    // simular que el año sea el correcto de hoy
  })
})

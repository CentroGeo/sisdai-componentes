import { mount, shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiImagenPngWebp from '../../../src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue'

import indexJS from '../../../src/componentes/imagen-png-webp/index.js'

describe('SisdaiImagenPngWebp.vue', () => {
  const index = mount(indexJS)
  const wrapper = shallowMount(SisdaiImagenPngWebp, {
    props: {},
  })

  it('props', () => {
    // dominio
    // ruta
    // textoAlternativo
    // leyenda
    // ancho_maximo
    // --
    // simular los textos de la imagen
  })
})

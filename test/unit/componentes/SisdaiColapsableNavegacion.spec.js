import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiColapsableNavegacion from '../../../src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue'
import indexJS from '../../../src/componentes/colapsable-navegacion/index.js'

describe('SisdaiColapsableNavegacion.vue', () => {
  const wrapper = shallowMount(SisdaiColapsableNavegacion, {
    props: {},
  })
  it('props', () => {
    // TODO 🛠
    // colapsado
    // avisarMenuLateral
    // --
    // simular el colapse y descolapse de la navegación
    // click en colapsar
    // confirmar si está colapsado
    // click en descolapsar
    // confirmar si está descolapsado
  })
  it('slots', () => {
    // contenido
  })
  it('emits', () => {
    // alAlternarColapsable
  })
})

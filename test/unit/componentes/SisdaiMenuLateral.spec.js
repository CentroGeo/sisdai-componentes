import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiMenuLateral from '../../../src/componentes/menu-lateral/SisdaiMenuLateral.vue'
import indexJs from '../../../src/componentes/menu-lateral/index.js'

describe('SisdaiMenuLateral.vue', () => {
  // TODO ❌
  const wrapper = mount(SisdaiMenuLateral)
  it('instancias de propiedades y variables', () => {
    // menu_abierto
    // contenidoMenuLateral
    // id_aleatorio
  })
  it('emits', () => {
    // alAlternarMenu
  })
  it('slots', () => {
    // contenido-menu-lateral
  })
})

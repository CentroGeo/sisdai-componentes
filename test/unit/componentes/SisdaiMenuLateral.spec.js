import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiMenuLateral from '../../../src/componentes/menu-lateral/SisdaiMenuLateral.vue'

describe('SisdaiMenuLateral.vue', () => {
  const wrapper = mount(SisdaiMenuLateral, {
    props: {},
  })
  it('instancias de propiedades y variables', () => {
    // menu_abierto
    // contenidoMenuLateral
    // id_aleatorio
    // --
    // simular que de descolpasa y colpasa el menú en versión móvil
  })
  it('emits', () => {
    // alAlternarMenu
  })
  it('slots', () => {
    // contenido-menu-lateral
  })
})

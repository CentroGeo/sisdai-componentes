import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiModal from '../../../src/componentes/modal/SisdaiModal.vue'

describe('SisdaiModal.vue', () => {
  const wrapper = mount(SisdaiModal, {
    props: {},
  })
  it('props', () => {
    // tamanioModal
    // --
    // simular que abren el modal
    // simular que cierran el modal con la tecla ESC
    // simular que cierran el modal haciendo click afuera de este
    // simular que cierran el modal haciendo click en el botón de cerrar
  })
  it('slots', () => {
    // encabezado
    // cuerpo
    // pie
  })
})

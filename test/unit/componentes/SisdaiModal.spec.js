import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import SisdaiModal from '../../../src/componentes/modal/SisdaiModal.vue'
import indexJs from '../../../src/componentes/modal/index.js'

const dialogModalSelector = '[testid="dialog-modal"]'
const slotCabeceraSelector = '[testid="slot-modal-cabecera"]'
const slotCuerpoSelector = '[testid="slot-modal-cuerpo"]'
const slotPieSelector = '[testid="slot-modal-pie"]'
const buttonCerrarSelector = '[testid="button-cerrar-modal"]'

const props = {
  tamanioModal: '',
}

const slots = {
  encabezado:
    '<div testid="slot-modal-cabecera" class="modal-cabecera">\n  <h1>Título del modal</h1>\n</div>',
  cuerpo: '<div testid="slot-modal-cuerpo" class="modal-cuerpo"></div>',
  pie: '<div testid="slot-modal-pie" class="modal-pie"></div>',
}

describe('SisdaiModal.vue', () => {
  // TODO ✅
  // simular que abren el modal
  // simular que cierran el modal con la tecla ESC ?
  // simular que cierran el modal haciendo click afuera de este ?
  // simular que cierran el modal haciendo click en el botón de cerrar ?

  it('props', async () => {
    const wrapper = mount(SisdaiModal, {
      props: {
        tamanioModal: props.tamanioModal,
      },
    })
    const dialogElement = wrapper.get(dialogModalSelector)
    const modalGrande = 'modal-grande'

    expect(wrapper.props('tamanioModal')).toBe('')
    expect(dialogElement.attributes('class')).toEqual('modal')

    await wrapper.setProps({ tamanioModal: modalGrande })

    expect(wrapper.props('tamanioModal')).toBe(modalGrande)
    expect(dialogElement.attributes('class')).toContain(modalGrande)
  })

  it('button Cerrar', async () => {
    const wrapper = mount(SisdaiModal)

    const buttonCerrarElement = wrapper.get(buttonCerrarSelector)

    const cerrarModalSpy = vi.spyOn(wrapper.vm, 'cerrarModal')

    await buttonCerrarElement.trigger('click')

    expect(cerrarModalSpy).toHaveBeenCalledTimes(1)
  })

  it('slots', () => {
    const wrapper = mount(SisdaiModal, {
      props: {
        encabezado: slots.encabezado,
        cuerpo: slots.cuerpo,
        pie: slots.pie,
      },
    })
    const slotCabeceraElement = wrapper.find(slotCabeceraSelector)
    const slotCuerpoElement = wrapper.find(slotCuerpoSelector)
    const slotPieElement = wrapper.find(slotPieSelector)

    expect(slotCabeceraElement.html()).toBe(slots.encabezado)
    expect(slotCuerpoElement.html()).toContain(slots.cuerpo)
    expect(slotPieElement.html()).toContain(slots.pie)
  })
})

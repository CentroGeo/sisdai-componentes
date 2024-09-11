import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SisdaiNarrativa from '../../../src/componentes/narrativa/SisdaiNarrativa.vue'
import indexJS from '../../../src/componentes/narrativa/index.js'

const props = {
  depurador: false,
  altura_sensor: 0.5,
  separacion: 1,
  posicion_inicial: 1,
}

const slotDefaultSelector = '[testid="slot-default"]'
const slotContenidoFondoStickySelector =
  '[testid="slot-contenido-fondo-sticky"]'

const slots = {
  default: '',
  sticky:
    '<div data-v-a4744731="" testid="slot-contenido-fondo-sticky" class="contenido-fondo-sticky"></div>',
}

describe('SisdaiNarrativa.vue', () => {
  const wrapper = shallowMount(SisdaiNarrativa, {
    props: {
      depurador: props.depurador,
      altura_sensor: props.altura_sensor,
      separacion: props.separacion,
      posicion_inicial: props.posicion_inicial,
    },
    slots: {
      default: '',
      identidad: slots.sticky,
    },
  })
  it('props', () => {
    expect(wrapper.vm.depurador).toBe(props.depurador)
    wrapper.vm.depurador = true
    expect(wrapper.vm.depurador).toBe(true)

    expect(wrapper.vm.altura_sensor).toBe(props.altura_sensor)
    wrapper.vm.altura_sensor = 0.6
    expect(wrapper.vm.altura_sensor).toBe(0.6)

    expect(wrapper.vm.separacion).toBe(props.separacion)
    wrapper.vm.separacion = 0.9
    expect(wrapper.vm.separacion).toBe(0.9)

    expect(wrapper.vm.posicion_inicial).toBe(props.posicion_inicial)
    wrapper.vm.posicion_inicial = 0.8
    expect(wrapper.vm.posicion_inicial).toBe(0.8)
  })
  it('slots', () => {
    const slotDefaultElemento = wrapper.find(slotDefaultSelector)
    const slotContenidoFondoStickyElement = wrapper.find(
      slotContenidoFondoStickySelector
    )

    expect(slotDefaultElemento.html()).toContain(slots.default)
    expect(slotContenidoFondoStickyElement.html()).toContain(slots.sticky)
  })
})

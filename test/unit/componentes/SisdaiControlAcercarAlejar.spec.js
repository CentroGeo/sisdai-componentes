import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import SisdaiControlAcercarAlejar from '../../../src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue'
import indexJS from '../../../src/componentes/control-acercar-alejar/index.js'

const props = {
  min: 20,
  max: 100,
  step: 10,
}

const controlAcercarAlejarRangoSelector =
  '[testid="control-acercar-alejar-rango"]'
const botonAlejarSelector = '[testid="boton-alejar"]'
const botonAcercarSelector = '[testid="boton-acercar"]'

describe('SisdaiControlAcercarAlejar.vue', () => {
  it('props', async () => {
    const wrapper = shallowMount(SisdaiControlAcercarAlejar, {
      props: {
        min: 0,
        max: 100,
        step: 5,
      },
    })
    const inputRangoElement = wrapper.get(controlAcercarAlejarRangoSelector)

    expect(wrapper.props('min')).toBe(0)
    await wrapper.setProps({ min: props.min })
    expect(wrapper.props('min')).toBe(props.min)
    expect(+inputRangoElement.wrapperElement.min).toBe(props.min)

    expect(wrapper.props('max')).toBe(100)
    await wrapper.setProps({ max: props.max })
    expect(wrapper.props('max')).toBe(props.max)
    expect(+inputRangoElement.wrapperElement.max).toBe(props.max)

    expect(wrapper.props('step')).toBe(5)
    await wrapper.setProps({ step: props.step })
    expect(wrapper.props('step')).toBe(props.step)
    expect(+inputRangoElement.wrapperElement.step).toBe(props.step)
  })
  it('botones y métodos', async () => {
    const wrapper = shallowMount(SisdaiControlAcercarAlejar)

    const botonAlejarElement = wrapper.get(botonAlejarSelector)
    const botonAcercarElement = wrapper.get(botonAcercarSelector)

    const disminuirSpy = vi.spyOn(wrapper.vm, 'disminuir')
    const aumentarSpy = vi.spyOn(wrapper.vm, 'aumentar')

    await botonAlejarElement.trigger('click')
    expect(disminuirSpy).toHaveBeenCalledTimes(1)
    // expect(wrapper.html()).toContain('45')
    wrapper.vm.disminuir()
    expect(disminuirSpy).toHaveBeenCalledTimes(2)

    await botonAcercarElement.trigger('click')
    expect(aumentarSpy).toHaveBeenCalledTimes(1)
    wrapper.vm.aumentar()
    expect(aumentarSpy).toHaveBeenCalledTimes(2)
  })
  it('emits', async () => {
    const wrapper = shallowMount(SisdaiControlAcercarAlejar, {
      props: {
        min: 0,
        max: 100,
        step: 5,
        'update:modelValue': e =>
          (wrapper.get(controlAcercarAlejarRangoSelector).wrapperElement.value =
            +e),
      },
    })
    const inputRangoElement = wrapper.get(controlAcercarAlejarRangoSelector)

    const inputValue = 40

    expect(+inputRangoElement.wrapperElement.value).toBe(50)

    await inputRangoElement.setValue(inputValue)

    expect(+inputRangoElement.wrapperElement.value).toBe(inputValue)

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    const emitted = wrapper.emitted('update:modelValue')

    expect(emitted).toHaveLength(1)
    expect(emitted.length).toBe(1)
    expect(emitted[0][0]).toStrictEqual(inputValue)

    wrapper.vm.$emit('update:modelValue', 30)
    await wrapper.vm.$nextTick()

    // afirmando que el evento se ha emitido
    expect(emitted).toBeTruthy()
    // afirmando el conteo de eventos
    expect(emitted).toHaveLength(2)
    expect(emitted[1]).toEqual([30])

    wrapper.vm.$emit('update:modelValue', 20)
    await wrapper.vm.$nextTick()

    expect(emitted).toHaveLength(3)
    expect(emitted[2]).toEqual([20])
  })
})

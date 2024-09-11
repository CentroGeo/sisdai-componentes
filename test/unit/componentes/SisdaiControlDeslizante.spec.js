import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SisdaiControlDeslizante from '../../../src/componentes/control-deslizante/SisdaiControlDeslizante.vue'
import indexJS from '../../../src/componentes/control-deslizante/index.js'

const props = {
  val_min: 20,
  val_max: 100,
  val_entrada: 90,
}

const controlDeslizanteSelector = '[testid="control-deslizante-input"]'

describe('SisdaiControlDeslizante.vue', () => {
  it('props', async () => {
    const wrapper = shallowMount(SisdaiControlDeslizante, {
      props: {
        val_min: 0,
        val_max: 100,
        val_entrada: 50,
      },
    })
    // afirmando y modificando props
    expect(wrapper.vm.val_min).toBe(0)
    expect(wrapper.props('val_min')).toBe(0)

    wrapper.vm.val_min = props.val_min
    await wrapper.setProps({ val_min: props.val_min })

    expect(wrapper.vm.val_min).toBe(props.val_min)
    expect(wrapper.props('val_min')).toBe(props.val_min)

    expect(wrapper.vm.val_max).toBe(100)
    expect(wrapper.props('val_max')).toBe(100)

    wrapper.vm.val_max = props.val_max
    await wrapper.setProps({ val_max: props.val_max })

    expect(wrapper.vm.val_max).toBe(props.val_max)
    expect(wrapper.props('val_max')).toBe(props.val_max)

    expect(wrapper.vm.val_entrada).toBe(50)
    expect(wrapper.props('val_entrada')).toBe(50)

    wrapper.vm.val_entrada = props.val_entrada
    await wrapper.setProps({ val_entrada: props.val_entrada })

    expect(wrapper.vm.val_entrada).toBe(props.val_entrada)
    expect(wrapper.props('val_entrada')).toBe(props.val_entrada)
  })
  it('actualizando val_entrada del input range', async () => {
    const wrapper = shallowMount(SisdaiControlDeslizante, {
      props: {
        val_entrada: 50,
        'onUpdate:val_entrada': e => wrapper.setProps({ val_entrada: +e }),
      },
    })
    // obteniendo elemento de prueba
    const controlDeslizanteElement = wrapper.get(controlDeslizanteSelector)

    // cambiando el atributo valor del input
    await controlDeslizanteElement.setValue(40)

    expect(wrapper.props('val_entrada')).toBe(wrapper.vm.valor_seleccionado)
  })
})

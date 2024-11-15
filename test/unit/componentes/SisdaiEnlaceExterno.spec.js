import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SisdaiEnlaceExterno from '../../../src/componentes/enlace-externo/SisdaiEnlaceExterno.vue'
import indexJS from '../../../src/componentes/enlace-externo/index.js'

const props = {
  enlace: 'https://sisdai.conahcyt.mx',
  texto: 'Sisdai',
}

describe('SisdaiEnlaceExterno.vue', () => {
  const hrefASelector = '[testid="enlace-externo"]'

  const wrapper = shallowMount(SisdaiEnlaceExterno, {
    props: {
      enlace: props.enlace,
      texto: props.texto,
    },
  })

  const component = wrapper.get('a')
  const AElement = wrapper.get(hrefASelector)

  it('props', () => {
    // TODO ✅
    // simular el texto que va en el enlace
    expect(component.text('Sisdai'))
    expect(component.text()).toBe(props.texto)
    expect(component.text()).toContain('Sisdai')

    expect(wrapper.text(props.enlace))
    expect(component.attributes().href).toBe(props.enlace)
    expect(AElement.attributes().href).toBe(props.enlace)
  })
})

import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SisdaiEnlaceExterno from '../../../src/componentes/enlace-externo/SisdaiEnlaceExterno.vue'

describe('SisdaiEnlaceExterno.vue', () => {
  const wrapper = shallowMount(SisdaiEnlaceExterno, {
    props: {
      enlace: 'https://sisdai.conahcyt.mx',
      texto: 'Sisdai',
    },
  })
  const component = wrapper.get('a')
  it('props', () => {
    // enlace
    // texto
    // --
    // simular el texto que va en el enlace
    expect(component.text('Sisdai'))
    expect(component.text()).toBe('Sisdai')
    expect(component.text()).toContain('Sisdai')

    expect(wrapper.text('https://sisdai.conahcyt.mx'))
  })
})

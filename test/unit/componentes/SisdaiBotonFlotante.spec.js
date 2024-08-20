import { describe, expect, it } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

import SisdaiBotonFlotante from '../../../src/componentes/boton-flotante/SisdaiBotonFlotante.vue'

const enlaces = [
  {
    clasesCss: 'sisdai',
    contenido: 'Ir a Sisdai',
    enlace: 'https://sisdai.conacyt.mx/',
  },
]

describe('SisdaiBotonFlotante.vue', () => {
  const wrapper = shallowMount(SisdaiBotonFlotante, {
    props: {
      enlaces: enlaces,
    },
  })

  const componentButton = wrapper.get('[test="menu-flotante-boton"]')
  const componentAnchor = wrapper.get('[test="menu-flotante-hipervinculo"]')

  it('props', () => {
    // enlaces
    // botonFlotanteAbierto
    // --
    // simular que se abre y cierra el menú
    // simular el contenido de los enlaces
    // simular que el elemento tiene el atributo class correspondiente

    // console.log('hola', wrapper.get('[test="menu-flotante"]'))
    // afirmar el contenido
    expect(componentAnchor.text()).toBe('Ir a Sisdai')
    expect(wrapper.text()).toContain('Ir a Sisdai')
    expect(wrapper.text()).toContain(enlaces[0].contenido)
    // afirmar las clases css
    expect(componentAnchor.classes()).toContain(enlaces[0].clasesCss)
    expect(componentAnchor.attributes('class')).toContain(enlaces[0].clasesCss)
    // afirmar el enlace
    // console.log(enlaces[0].enlace)
    // expect(componentAnchor.attributes('src')).toBe(enlaces[0].enlace)
  })

  it('Probando instancias de métodos y propiedades', () => {
    // accediendo a las variables
    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(false)

    // accediendo al método
    wrapper.vm.alternarEstado()

    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(true)
  })
})

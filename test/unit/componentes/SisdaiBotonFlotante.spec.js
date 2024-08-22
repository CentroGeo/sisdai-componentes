import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import SisdaiBotonFlotante from '../../../src/componentes/boton-flotante/SisdaiBotonFlotante.vue'
import indexJS from '../../../src/componentes/boton-flotante/index.js'

const props = {
  enlaces: [
    {
      clasesCss: 'sisdai',
      contenido: 'Ir a Sisdai',
      enlace: 'https://sisdai.conacyt.mx/',
    },
  ],
}

describe('SisdaiBotonFlotante.vue', () => {
  const buttonSelector = '[test=menu-flotante-boton]'
  const hipervinculoSelector = '[test=menu-flotante-hipervinculo]'

  const wrapper = shallowMount(SisdaiBotonFlotante, {
    props: {
      enlaces: props.enlaces,
    },
  })

  const buttonElement = wrapper.get(buttonSelector)
  const anchorElement = wrapper.get(hipervinculoSelector)

  it('props', () => {
    // enlaces
    // botonFlotanteAbierto
    // --
    // TODO ✅
    // simular el contenido de los enlaces
    // simular que el elemento tiene el atributo class correspondiente
    // TODO
    // simular que se abre y cierra el menú

    // afirmando el contenido
    expect(anchorElement.text()).toContain(props.enlaces.map(d => d.contenido))

    // expect(anchorElement.text()).toBe('Ir a Sisdai')
    // expect(wrapper.text()).toContain('Ir a Sisdai')
    // expect(wrapper.text()).toContain(props.enlaces.map(d => d.contenido))

    // afirmar las clases css
    expect(anchorElement.attributes('class')).toContain(
      props.enlaces.map(d => d.clasesCss)
    )

    // expect(anchorElement.classes()).toContain(props.enlaces[0].clasesCss)

    // afirmar el enlace
    expect(anchorElement.attributes('href')).toContain(
      props.enlaces.map(d => d.enlace)
    )
  })

  it('Probando instancias de métodos y propiedades', () => {
    // accediendo a las variables
    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(false)

    // accediendo al método
    wrapper.vm.alternarEstado()

    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(true)
  })
})

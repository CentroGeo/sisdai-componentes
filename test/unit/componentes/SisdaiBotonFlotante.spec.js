import { describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import SisdaiBotonFlotante from '../../../src/componentes/boton-flotante/SisdaiBotonFlotante.vue'
import indexJS from '../../../src/componentes/boton-flotante/index.js'

// selectores de elemento html por atributo
const menuFlotanteSelector = '[testid="menu-flotante"]'
const buttonSelector = '[testid="menu-flotante-boton"]'
const hipervinculoSelector = '[testid="menu-flotante-hipervinculo"]'

const props = {
  enlaces: [
    {
      clasesCss: 'sisdai',
      contenido: 'Ir a Sisdai',
      enlace: 'https://sisdai.conacyt.mx/',
      icono: 'pictograma-flecha-arriba-derecha',
    },
  ],
  botonFlotanteAbiertos: false,
}

describe('SisdaiBotonFlotante.vue', () => {
  // TODO ✅
  // simular el contenido de los enlaces
  // simular que el elemento <a> tiene el atributo class y href con los valores correspondiente
  // simular que se dispara el evento alternarEstado provando las propiedades del componente
  // simular que se abre y cierra el menú disparando un click
  // simular que se agrega la clase css 'abierto' al menu flotante
  // simular que los tabindex cambien de valor
  describe('props', () => {
    // montar el componente individualmente
    const wrapper = shallowMount(SisdaiBotonFlotante, {
      // configura las props del componente al montarse
      props: {
        enlaces: props.enlaces,
        botonFlotanteAbiertos: props.botonFlotanteAbiertos,
      },
    })
    // obteniendo los elementos de prueba
    // retorna un DOMWrapper si lo encuentra. Si no, lanza un error
    const menuFlotanteElement = wrapper.get(menuFlotanteSelector)
    const anchorElement = wrapper.get(hipervinculoSelector)

    it('afirmando los valores de las props con los atributos de los elementos html', () => {
      // afirmando el contenido
      expect(anchorElement.text()).toContain(
        props.enlaces.map(d => d.contenido)
      )
      // afirmar las clases css
      expect(anchorElement.attributes('class')).toContain(
        props.enlaces.map(d => d.clasesCss)
      )
      // afirmar el enlace
      expect(anchorElement.attributes('href')).toContain(
        props.enlaces.map(d => d.enlace)
      )
      // afirmar el icono
      expect(anchorElement.get('span').attributes().class).toContain(
        props.enlaces.map(d => d.icono)
      )

      // afirmar valores de atributos de tabindex y class por determinado
      expect(menuFlotanteElement.attributes('class')).not.toContain('abierto')
      expect(anchorElement.attributes('tabindex')).toContain(-1)
    })

    it('probando instancias de métodos y propiedades', () => {
      // accediendo a las variables
      expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(false)

      // esto no tiene sentido porque solo está invocando el método o no sé
      // expect(menuFlotanteElement.attributes('class')).not.toContain('abierto')
      // expect(anchorElement.attributes('tabindex')).toContain(-1)

      // accediendo al método
      wrapper.vm.alternarEstado()

      // afirmando el valor de la variable que cambia el método
      expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(true)
    })
  })

  it('prueba asincrona', async () => {
    // montar el componente individualmente
    const wrapper = shallowMount(SisdaiBotonFlotante)

    // obteniendo los elementos de prueba
    const menuFlotanteElement = wrapper.get(menuFlotanteSelector)
    const buttonElement = wrapper.get(buttonSelector)
    const anchorElement = wrapper.get(hipervinculoSelector)
    // obteniendo array
    const anchorElementArray = wrapper.findAll(hipervinculoSelector)

    // afirmando que el largo del array es de 1
    expect(anchorElementArray).toHaveLength(1)

    // interceptando funciones
    // https://stackoverflow.com/questions/76036737/how-to-use-vi-spyon-on-a-function-with-the-vue-3-composition-api
    // https://vitest.dev/api/vi.html#vi-spyon
    const alternarEstadoSpy = vi.spyOn(wrapper.vm, 'alternarEstado')

    // afirmando que el botón flotante está cerrado
    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(false)
    // afirmando que no existe la clase abierto en el menú flotante
    expect(menuFlotanteElement.classes()).not.toContain('abierto')
    // afirmando que el tabindex está desactivo
    expect(anchorElement.attributes('tabindex')).toContain(-1)

    // simulando el evento click
    await buttonElement.trigger('click')

    // afirmando si la función alternarEstado se disparó 1 vez
    expect(alternarEstadoSpy).toHaveBeenCalledTimes(1)

    // afirmando que el botón flotante se abrió
    expect(wrapper.vm.botonFlotanteEstaAbierto).toBe(true)
    // afirmando que se agregó la clase abierto
    expect(menuFlotanteElement.classes()).toContain('abierto')
    // afirmando que el tabindex se activo
    expect(anchorElement.attributes('tabindex')).toContain(0)
  })
})

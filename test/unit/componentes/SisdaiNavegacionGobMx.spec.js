import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import SisdaiNavegacionGobMx from '../../../src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue'
import indexJS from '../../../src/componentes/navegacion-gob-mx/index.js'

const navMenuContenedorSelector = '[testid="nav-menu-contenedor"]'
const navHipervinculoSelector = '[testid="nav-hipervinculo"]'
const navBotonMenuSelector = '[testid="nav-boton-menu"]'

describe('SisdaiNavegacionGobMx.vue', () => {
  // TODO ✅
  // simular si los elementos <a> tiene o no el atributo tabindex
  // simular si el menú está abierto o cerrado
  // simular que se agrega la clase css abierto
  it('probando atributo tabindex', () => {
    const wrapper = shallowMount(SisdaiNavegacionGobMx, {
      props: {},
    })

    // obteniendo elementos de prueba
    const navHipervinculoElement = wrapper.get(navHipervinculoSelector)
    const navMenuGobMxRef = wrapper.vm.navMenuGobMx
    // interceptando funciones
    const agregarTabIndexSpy = vi.spyOn(wrapper.vm, 'agregarTabIndex')
    const removerTabIndexSpy = vi.spyOn(wrapper.vm, 'removerTabIndex')

    // afirmar que no tiene la propiedad tabindex
    expect(navHipervinculoElement.attributes()).not.toHaveProperty('tabindex')

    // disparar el evento
    wrapper.vm.agregarTabIndex(navMenuGobMxRef)
    expect(agregarTabIndexSpy).toHaveBeenCalledTimes(1)
    // afirmando que se agrega el atributo tabindex
    expect(navHipervinculoElement.attributes('tabindex')).toBe('-1')

    // disparando evento
    wrapper.vm.removerTabIndex(navMenuGobMxRef)
    expect(removerTabIndexSpy).toHaveBeenCalledTimes(1)
    // afirmando que se remueve el atributo
    expect(navHipervinculoElement.attributes()).not.toHaveProperty('tabindex')
  })
  it('prueba asíncrona', async () => {
    // montando componente
    const wrapper = shallowMount(SisdaiNavegacionGobMx)

    // interceptando funciones
    const alternarMenuSpy = vi.spyOn(wrapper.vm, 'alternarMenu')
    // obteniendo elementos de prueba
    const navBotonMenuElement = wrapper.get(navBotonMenuSelector)
    const navMenuContenedorElement = wrapper.get(navMenuContenedorSelector)

    // afirmando que el menú está cerraro y no tiene la clase abierto
    expect(wrapper.vm.menuEstaAbierto).toBe(false)
    expect(navMenuContenedorElement.classes()).not.toContain('abierto')

    // disparando el evento de click
    await navBotonMenuElement.trigger('click')

    // afirmando que se llamó la función y el menú está abierto
    expect(alternarMenuSpy).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.menuEstaAbierto).toBe(true)
    expect(navMenuContenedorElement.classes()).toContain('abierto')
  })
})

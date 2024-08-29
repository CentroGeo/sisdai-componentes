import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import SisdaiNavegacionPrincipal from '../../../src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue'
import indexJS from '../../../src/componentes/navegacion-principal/index.js'

const navMenuContenedorSelector = '[testid="nav-menu-contenedor-principal"]'
const navHipervinculoSelector = '[testid="nav-hipervinculo-principal"]'
const navBotonMenuSelector = '[testid="nav-boton-menu-principal"]'
const slotIdentidadSlector = '[testid="slot-identidad"]'
const slotComplementarioSlector = '[testid="slot-complementario"]'

const slots = {
  identidad:
    '<div testid="slot-identidad"><a href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer" class="nav-hiperviculo-logo"><img class="nav-logo color-invertir" src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-azul.svg" alt="Conahcyt." width="130" height="38"></a></div>',
  complementario:
    '<a href="#" target="_blank" rel="noopener noreferrer" class="nav-hipervinculo"><b>IR A ENLACE EXTERNO</b></a>',
}

describe('SisdaiNavegacionPrincipal.vue', () => {
  // TODO ✅
  // simular que está desenfocado el menú
  // simular que se abre y cierra en versión móvil
  // simular si los elementos <a> tiene o no el atributo tabindex

  it('probando atributo tabindex', () => {
    const wrapper = shallowMount(SisdaiNavegacionPrincipal)

    // obteniendo elementos de prueba
    const navHipervinculoElement = wrapper.get(navHipervinculoSelector)
    const navMenuRef = wrapper.vm.navMenu
    // interceptando funciones
    const agregarTabIndexSpy = vi.spyOn(wrapper.vm, 'agregarTabIndex')
    const removerTabIndexSpy = vi.spyOn(wrapper.vm, 'removerTabIndex')

    // afirmar que no tiene la propiedad tabindex
    expect(navHipervinculoElement.attributes()).not.toHaveProperty('tabindex')

    // disparar el evento
    wrapper.vm.agregarTabIndex(navMenuRef)
    expect(agregarTabIndexSpy).toHaveBeenCalledTimes(1)
    // afirmando que se agrega el atributo tabindex
    expect(navHipervinculoElement.attributes('tabindex')).toBe('-1')

    // disparando evento
    wrapper.vm.removerTabIndex(navMenuRef)
    expect(removerTabIndexSpy).toHaveBeenCalledTimes(1)
    // afirmando que se remueve el atributo
    expect(navHipervinculoElement.attributes()).not.toHaveProperty('tabindex')
  })

  it('prueba asíncrona', async () => {
    // montando componente
    const wrapper = shallowMount(SisdaiNavegacionPrincipal)

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

  it('prueba de slots', () => {
    const wrapper = shallowMount(SisdaiNavegacionPrincipal, {
      slots: {
        default: '',
        identidad: slots.identidad,
        complementario: slots.complementario,
      },
    })
    const slotIdentidadElement = wrapper.find(slotIdentidadSlector)
    const slotComplementarioElement = wrapper.find(slotComplementarioSlector)

    expect(slotIdentidadElement.html()).toContain(slots.identidad)
    expect(slotComplementarioElement.html()).toContain(slots.complementario)
  })
})

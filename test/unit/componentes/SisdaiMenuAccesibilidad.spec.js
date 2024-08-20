import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiMenuAccesibilidad from '../../../src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue'

describe('SisdaiMenuAccesibilidad.vue', () => {
  const wrapper = shallowMount(SisdaiMenuAccesibilidad, {
    props: {},
  })
  it('props', () => {
    // agregarOpciones
    // objetoStore
    // nombreModuleStore
    // id
    // perfilColor
    // --
    // simular que abren y cierran el menú
    // simular que los inputs tienen un valor que correspode a la opcion seleccionada
    // simular el restablecer todos los valor de input a false
    // simular que el objetoStore tiene opciones
  })
  it('emits', () => {
    // alSeleccionarOpcion
    // alRestablecer
  })
})

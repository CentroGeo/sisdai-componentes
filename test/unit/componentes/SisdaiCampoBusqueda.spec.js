import { shallowMount } from '@vue/test-utils'
import { describe, it } from 'vitest'
import SisdaiCampoBusqueda from '../../../src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue'
import indexJS from '../../../src/componentes/campo-busqueda/index.js'

describe('SisdaiCampoBusqueda.vue', () => {
  const wrapper = shallowMount(SisdaiCampoBusqueda, {
    props: {},
  })
  it('props', () => {
    // TODO v-model
    // catalogo
    // catalogoAnidado
    // catalogoAnidadoPropiedadElementos
    // propiedadBusqueda
    // etiqueta
    // --
    // simular una búsqueda de un catalogo
    // ingresar texto
    // confirmar que ese texto esté en el input
    // click buscar
    // confirmar que ese texto esté en el filtrado
    // click en limpiar
    // confirma que no hay texto en el input
    // confirmar que estén todo el catalogo sin filtrar
  })
  it('emits', () => {})
})

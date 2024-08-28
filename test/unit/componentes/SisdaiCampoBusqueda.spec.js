import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import SisdaiCampoBusqueda from '../../../src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue'
import indexJS from '../../../src/componentes/campo-busqueda/index.js'

import { ref } from 'vue'

const listaLenguajes = ref([
  { id: 'bash', nombre: 'Bash' },
  { id: 'c', nombre: 'C' },
  { id: 'cpp', nombre: 'C++' },
  { id: 'csharp', nombre: 'C#' },
  { id: 'css', nombre: 'CSS' },
  { id: 'dart', nombre: 'Dart' },
  { id: 'docker', nombre: 'Docker' },
  { id: 'elixir', nombre: 'Elixir' },
  { id: 'go', nombre: 'Go' },
  { id: 'graphql', nombre: 'GraphQL' },
  { id: 'html', nombre: 'HTML' },
  { id: 'java', nombre: 'Java' },
  { id: 'javascript', nombre: 'JavaScript' },
  { id: 'json', nombre: 'JSON' },
  { id: 'kotlin', nombre: 'Kotlin' },
  { id: 'markdown', nombre: 'Markdown' },
  { id: 'php', nombre: 'PHP' },
  { id: 'python', nombre: 'Python' },
  { id: 'r', nombre: 'R' },
  { id: 'ruby', nombre: 'Ruby' },
  { id: 'rust', nombre: 'Rust' },
  { id: 'scss', nombre: 'SCSS' },
  { id: 'shell', nombre: 'Shell' },
  { id: 'sql', nombre: 'SQL' },
  { id: 'swift', nombre: 'Swift' },
  { id: 'typescript', nombre: 'TypeScript' },
  { id: 'xml', nombre: 'XML' },
  { id: 'yaml', nombre: 'YAML' },
])

// selector de elemento html
const inputSelector = '[testid="input-campo-busqueda"]'
const btnLimpiarSelector = '[testid="btn-limpiar-busqueda"]'

describe('SisdaiCampoBusqueda.vue', () => {
  // TODO ✅
  // simular una búsqueda de un catalogo
  // confirmar que ese texto esté en el filtrado
  // simular limpiar la búsqueda con click en el botón
  // confirmar que estén todo el catalogo sin filtrar

  it('probando funciones', () => {
    // motando componente en wrapper
    const wrapper = shallowMount(SisdaiCampoBusqueda, {
      props: {
        catalogo: listaLenguajes.value,
      },
    })
    expect(typeof wrapper.vm.filtro).toBe('function')
    wrapper.vm.filtro('Python')
  })

  it('probando props', () => {
    // motando componente en wrapper
    const wrapper = shallowMount(SisdaiCampoBusqueda, {
      props: {
        catalogo: listaLenguajes.value,
      },
    })
    // asignando lista a props catalogo
    wrapper.vm.catalogo = listaLenguajes

    // obteniendo elemento input a probar
    const inputElement = wrapper.get(inputSelector)
    // const inputElement = wrapper.find(inputSelector)

    // afirmando que el valor del elemento está vacío
    expect(inputElement.element.value).toBe('')
    // afirmando que la instancia de textoBusqueda está vacía
    expect(wrapper.vm.textoBusqueda).toBe('')

    // cambia el valor del input
    inputElement.setValue('Python')

    // afirmando que el nuevo valor del elemento
    expect(inputElement.element.value).toBe('Python')

    // interceptando funciones
    // https://stackoverflow.com/questions/76036737/how-to-use-vi-spyon-on-a-function-with-the-vue-3-composition-api
    // https://vitest.dev/api/vi.html#vi-spyon
    const spyIncrement = vi.spyOn(wrapper.vm, 'filtro')
    // afirmando que la propiedad alFiltrar existe
    expect(wrapper.emitted()).toHaveProperty('alFiltrar')
    expect(wrapper.emitted('alFiltrar')).toHaveLength(1)

    // Dispara un evento personalizado en la instancia actual
    // Cualquiera argumento adicional se pasará a la función listener
    wrapper.vm.$emit('alFiltrar', wrapper.vm.filtro(inputElement.element.value))
    // afirmando que la función fue llamada
    expect(spyIncrement).toHaveBeenCalledTimes(1)

    // afirmando que la instancia de textoBusqueda cambió
    expect(wrapper.vm.textoBusqueda).toBe('Python')

    const alFiltrarEvent = wrapper.emitted('alFiltrar')
    expect(alFiltrarEvent).toHaveLength(2)
    expect(alFiltrarEvent[0]).toEqual([
      [
        {
          id: 'python',
          nombre: 'Python',
        },
      ],
    ])
    expect(wrapper.emitted().alFiltrar[0][0]).toStrictEqual([
      {
        id: 'python',
        nombre: 'Python',
      },
    ])
  })

  describe('pruebas asíncronas', () => {
    it('probando limpiar búsqueda', async () => {
      const wrapper = shallowMount(SisdaiCampoBusqueda)

      const limpiarBusquedaSpy = vi.spyOn(wrapper.vm, 'limpiarBusqueda')

      // obteniendo elemento input a probar
      const inputElement = wrapper.get(inputSelector)
      const buttonElement = wrapper.get(btnLimpiarSelector)

      expect(wrapper.vm.textoBusqueda).toBe('')
      expect(inputElement.element.value).toBe('')

      inputElement.setValue('Python')

      expect(wrapper.vm.textoBusqueda).toBe('Python')
      expect(inputElement.element.value).toBe('Python')

      await buttonElement.trigger('click')

      expect(wrapper.vm.textoBusqueda).toBe('')
      expect(inputElement.element.value).toBe('')

      wrapper.vm.limpiarBusqueda()
      expect(limpiarBusquedaSpy).toHaveBeenCalledTimes(1)
    })
    it('probando eventos emits', async () => {
      const wrapper = shallowMount(SisdaiCampoBusqueda, {
        props: {
          catalogo: listaLenguajes.value,
        },
      })

      wrapper.vm.$emit('alFiltrar', 'Python')
      // espera hasta que $emits se haya manejado
      await wrapper.vm.$nextTick()

      /*
      wrapper.emitted() regresa el siguiente objeto:
      {
        alFiltrar: [ [ 'Python' ] ]
      }
      */

      const emitted = wrapper.emitted()

      // afirmando que el evento se ha emitido
      expect(emitted.alFiltrar).toBeTruthy()
      // afirmando el conteo de eventos
      expect(emitted.alFiltrar.length).toBe(1)
      // afirmando la carga del evento
      expect(emitted.alFiltrar[0]).toEqual(['Python'])
      expect(emitted.alFiltrar[0]).toStrictEqual(['Python'])

      wrapper.vm.$emit('alFiltrar', 'Docker')
      await wrapper.vm.$nextTick()
      expect(emitted.alFiltrar.length).toBe(2)
    })
  })
})

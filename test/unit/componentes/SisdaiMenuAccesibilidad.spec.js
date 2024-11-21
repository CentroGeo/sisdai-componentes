import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import SisdaiMenuAccesibilidad from '../../../src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue'
import indexJs from '../../../src/componentes/menu-accesibilidad/index.js'

import { setActivePinia, defineStore, createPinia } from 'pinia'
import { useAccesibilidadStore } from '../../../src/stores/accesibilidad.js'

const opcionCursiva = {
  accion: 'alternarCursivaDestacada',
  claseCss: 'a11y-cursiva-destacada',
  icono: 'pictograma-estrella',
  titulo: 'Cursiva destacada',
}

const menuFlotanteSelector = '[testid="menu-flotante"]'
const botonSelector = '[testid="menu-flotante-boton"]'
const opcionesSelector = '[testid="menu-flotante-opciones"]'
const inputSelector = '[testid="menu-flotante-input"]'
const labelSelector = '[testid="menu-flotante-label"]'
const botonRestalecer = '[testid="boton-restablecer"]'

const useStorePinia = defineStore('useStorePinia', {
  state: () => {
    return { clasesAccesibles: [] }
  },
  actions: {
    modificarClasesAccesibles(valor) {
      this.clasesAccesibles = valor
    },
    restablecer() {
      this.clasesAccesibles = []
    },
  },
})

describe('SisdaiMenuAccesibilidad.vue', () => {
  // TODO ✅
  // simular que abren y cierran el menú
  // simular que los inputs tienen un valor que correspode a la opcion seleccionada
  // simular el restablecer todos los valor de input a false
  // simular que el objetoStore tiene opciones

  beforeEach(() => {
    // crea un nuevo pinia y lo activa para que pueda
    // ser utilizada por cualquier llamada useStore()
    // sin tener que pasársela: `useStore(pinia)`
    // https://pinia.vuejs.org/cookbook/testing.html#Unit-testing-a-store
    setActivePinia(createPinia())
  })

  describe('pruebas de props asíncronas', () => {
    it('props agregarOpciones y propiedad opciones', async () => {
      const wrapper = shallowMount(SisdaiMenuAccesibilidad)
      expect(wrapper.findAll(opcionesSelector)).toHaveLength(4)
      // agregando opción cursiva
      await wrapper.setProps({ agregarOpciones: [opcionCursiva] })
      expect(wrapper.findAll(opcionesSelector)).toHaveLength(5)
    })
    it('props objetostore, propiedad clasesSelecciondas y attributo checked', async () => {
      const store = useAccesibilidadStore()
      const storePinia = useStorePinia()

      const wrapper = shallowMount(SisdaiMenuAccesibilidad, {
        props: {
          agregarOpciones: [],
          objetoStore: storePinia,
          nombreModuloStore: 'accesibilidad',
          id: 'menu_accesibilidad',
          perfilColor: 'predeterminado',
        },
        global: { plugin: [store] },
      })
      // obteniendo elementos de prueba
      const inputElement = wrapper.get(inputSelector)
      const botonRestablecerElement = wrapper.get(botonRestalecer)
      const opciones = wrapper.findAll(opcionesSelector)
      // interceptando métodos
      const ejecutarEnStoreSpy = vi.spyOn(wrapper.vm, 'ejecutarEnStore')
      const restablecerSpy = vi.spyOn(wrapper.vm, 'restablecer')

      await wrapper.setProps({ objetoStore: storePinia })

      // afirmando que está vacío el estado de clasesAccesible del
      // store y el arreglo de claseSeleccionadas de propiedad
      expect(
        storePinia.clasesAccesibles && wrapper.vm.clasesSelecciondas
      ).toMatchObject([])
      expect(
        storePinia.clasesAccesibles && wrapper.vm.clasesSelecciondas
      ).toHaveLength(0)
      // antes de checkear
      expect(inputElement.wrapperElement.checked).toBe(false)

      // chekeando en true el input
      await inputElement.setValue(true)
      // afirmando que se agregó una clase accesible
      expect(wrapper.vm.clasesSelecciondas).toMatchObject([
        inputElement.element.value,
      ])

      // disparando el método para modificar
      wrapper.vm.ejecutarEnStore(
        'modificarClasesAccesibles',
        wrapper.vm.clasesSelecciondas
      )
      // afirmando que se ejecutó
      expect(ejecutarEnStoreSpy).toBeCalledTimes(1)
      // afirmando que se hizo la copia en el store
      expect(storePinia.clasesAccesibles).toHaveLength(1)
      expect(storePinia.clasesAccesibles).toMatchObject(
        wrapper.vm.clasesSelecciondas
      )
      // agregando clase mediante patch en el store
      storePinia.$patch({
        clasesAccesibles: [
          ...storePinia.clasesAccesibles,
          ...['a11y-hipervinculos'],
        ],
      })

      // afirmando la agregación de la nueva clase
      expect(storePinia.clasesAccesibles).toHaveLength(2)
      expect(storePinia.clasesAccesibles).toMatchObject([
        'a11y-tipografia',
        'a11y-hipervinculos',
      ])

      // restableciendo clases
      await botonRestablecerElement.trigger('click')
      expect(restablecerSpy).toHaveBeenCalledTimes(1)
      expect(storePinia.clasesAccesibles).toMatchObject([])
      expect(storePinia.clasesAccesibles).toHaveLength(0)

      // afirmando que cada opción no está checkeada
      opciones.forEach((opcion, i) => {
        // value
        let opcionWrapper = opcion.wrapperElement.children[0].value
        let opcionWrapperValue = opcionWrapper
        // claseCss
        let opcionComputada = wrapper.vm.opciones[i].claseCss
        // checked
        let opcionWrapperChecked = opcion.wrapperElement.children[0].checked

        if (opcionWrapper === opcionComputada) {
          expect(opcionWrapperValue).toBe(opcionComputada)
          expect(opcionWrapperChecked).toBe(false)
        }
      })
    })
    it('props perfilColor', async () => {
      const wrapper = shallowMount(SisdaiMenuAccesibilidad)
      const perfilColor = wrapper.vm.props.perfilColor
      // props perfilColor
      expect(wrapper.vm.perfilColor).toContain(perfilColor)
      await wrapper.setProps({ perfilColor: 'sisdai' })
      // afirmando el cambio
      expect(wrapper.vm.perfilColor).toContain('sisdai')
    })
    it('propiedad menuAccesibilidadEstaAbierto y atributo tabindex', async () => {
      const wrapper = shallowMount(SisdaiMenuAccesibilidad)
      // elementos de prueba
      const menuFlotanteElement = wrapper.get(menuFlotanteSelector)
      const botonMenuFlotanteElement = wrapper.get(botonSelector)
      const inputElement = wrapper.get(inputSelector)
      // interceptando método
      const alternarAbiertoCerradoSpy = vi.spyOn(
        wrapper.vm,
        'alternarAbiertoCerrado'
      )
      // afirmando que al estar cerrado no tiene la clase abierto
      // y el atributo tabindex es -1
      expect(wrapper.vm.menuAccesibilidadEstaAbierto).toBe(false)
      expect(menuFlotanteElement.attributes('class')).not.toContain('abierto')
      expect(inputElement.attributes('tabindex')).toContain('-1')

      await botonMenuFlotanteElement.trigger('click')
      expect(alternarAbiertoCerradoSpy).toHaveBeenCalledTimes(1)
      // afirmando que se abrió, que tiene la clase abierto y no el tabindex
      expect(wrapper.vm.menuAccesibilidadEstaAbierto).toBe(true)
      expect(menuFlotanteElement.attributes('class')).toContain('abierto')
      expect(inputElement.attributes()).not.toHaveProperty('tabindex')
    })
  })
  it('interpolación', () => {
    const wrapper = shallowMount(SisdaiMenuAccesibilidad)
    const labelElement = wrapper.get(labelSelector)
    // afirmando que la interpolación se realice en el label
    expect(labelElement.text()).toContain('Cambio de fuente')
  })
  describe('prueba de input y clasesSelecciondas', () => {
    it('hacer input:checkbox true en alguna de las opciones y agregarla a clasesSelecciondas', async () => {
      const wrapper = shallowMount(SisdaiMenuAccesibilidad)
      const inputElement = wrapper.get(inputSelector)

      // afirmando que el campo de verificación no está chequeado
      // por predeterminado y que clasesSelecciondas esté vacío
      expect(inputElement.wrapperElement.checked).toBe(false)
      expect(wrapper.vm.clasesSelecciondas).toMatchObject([])

      // cambiando el valor del input
      await inputElement.setValue(true)

      // afirmando el nuevo valor del input
      expect(inputElement.wrapperElement.checked).toBe(true)
      // afirmando que se agregó un valor a clasesSelecciondas
      expect(wrapper.vm.clasesSelecciondas).toMatchObject(['a11y-tipografia'])
    })
  })
  it('emits', () => {
    // alSeleccionarOpcion
    // alRestablecer
  })
})

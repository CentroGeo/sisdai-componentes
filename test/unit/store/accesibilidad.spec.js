import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { setActivePinia, createPinia, defineStore } from 'pinia'

import { useAccesibilidadStore } from '../../../src/stores/accesibilidad.js'
import indexJS from '../../../src/stores/index.js'

// import { createApp } from 'vue'
// const app = createApp({})

// const AppComponent = {
//   template: '<div id="app" class="">Hola</div>',
//   props: ['msg'],
// }

// const storePinia = defineStore('useStorePinia', {
//   state: () => {
//     return { clasesAccesibles: [] }
//   },
//   actions: {
//     modificarClasesAccesibles(valor) {
//       this.clasesAccesibles = valor
//     },
//     restablecer() {
//       this.clasesAccesibles = []
//     },
//   },
// })

describe('useAccesibilidadStore', () => {
  // TODO ✅
  // simular que se le agregan valores al estado de `clasesSeleccionadas`
  // simular que se modifican los valores de `clasesSeleccionadas`
  // mediante la acción `modificarClasesAccesibles`
  // simular que se restablecen los valores de `clasesSeleccionadas`
  // mediante la acción `restablecer`
  // ---
  // simular que hace un store interno y lo comparas con el global
  // simular interacciones en un app local con el atributo class="" y
  // botones, montarla, asginarle el global: plugin [store]

  // Registrando una llamada antes de realizar las
  // pruebas en el contexto actual
  beforeEach(() => {
    // crea un nuevo pinia y lo activa para que pueda
    // ser utilizada por cualquier llamada useStore()
    // sin tener que pasársela: `useStore(pinia)`
    // https://pinia.vuejs.org/cookbook/testing.html#Unit-testing-a-store
    setActivePinia(createPinia())

    // const pinia = createPinia().use(storePinias)
    // const pinia = createPinia()
    // app.use(pinia)
    // setActivePinia(pinia)
  })

  // montando el componente con el store
  // const wrapper = shallowMount(AppComponent, {
  //   global: { plugin: [storePinia] },
  // })

  it('estados del store', () => {
    // instanciando módulo del store
    const store = useAccesibilidadStore()
    const clasesAccesibles = store.clasesAccesibles
    const clasesObjeto = ['a11y-oscura', 'a11y-tipografia']

    // afirmando que el objeto está vacío
    expect(clasesAccesibles).toBeTypeOf('object')
    expect(clasesAccesibles).toHaveLength(0)
    // console.log('store.clasesAccesibles', store.clasesAccesibles)

    // manipulando el estado directamente desde el store
    store.clasesAccesibles = [...store.clasesAccesibles, ...['a11y-oscura']]
    // afirmando que se agregó un valor
    expect(store.clasesAccesibles).toHaveLength(1)
    expect(store.clasesAccesibles).toStrictEqual(['a11y-oscura'])
    // console.log('store.clasesAccesibles', store.clasesAccesibles)

    // agregando valor mediante patch
    store.$patch({
      clasesAccesibles: [...store.clasesAccesibles, ...['a11y-tipografia']],
    })
    // afirmando que tiene dos valores y hace match
    expect(store.clasesAccesibles).toHaveLength(2)
    expect(store.clasesAccesibles).toStrictEqual(clasesObjeto)
    expect(store.clasesAccesibles).toMatchObject([
      'a11y-oscura',
      'a11y-tipografia',
    ])
  })

  it('acciones del store', () => {
    const store = useAccesibilidadStore()
    const clasesAccesibles = ['a11y-oscura']

    // afirmando que aún no tiene nada
    expect(store.clasesAccesibles).toHaveLength(0)

    // mandando a llamar las acciones
    store.modificarClasesAccesibles(['a11y-oscura'])
    // afirmando que se agregó la opción
    expect(store.clasesAccesibles).toMatchObject(clasesAccesibles)
    expect(store.clasesAccesibles).toHaveLength(1)

    store.restablecer()
    // afirmando que se restableció el valor por determinando
    expect(store.clasesAccesibles).toMatchObject([])
    expect(store.clasesAccesibles).toHaveLength(0)
  })
})

import { beforeEach, describe, expect, it } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'

import { useAccesibilidadStore } from '../../../src/stores/accesibilidad.js'
import indexJS from '../../../src/stores/index.js'

describe('useAccesibilidadStore', () => {
  // TODO ✅
  // simular que se le agregan valores al estado de `clasesSeleccionadas`
  // simular que se modifican los valores de `clasesSeleccionadas`
  // mediante la acción `modificarClasesAccesibles`
  // simular que se restablecen los valores de `clasesSeleccionadas`
  // mediante la acción `restablecer`
  // ---
  // TODO 🛠
  // simular que hace un store interno y lo comparas con el global
  // simular interacciones en un app local con el atributo class="" y
  // botones, montarla, asginarle el global: plugin [store]

  // Registro de llamada antes de las pruebas 
  // en el contexto actual
  beforeEach(() => {
    // crea un nuevo pinia y lo activa para ser utilizada 
    // por useStore() sin tener que pasársela: `useStore(pinia)`
    // https://pinia.vuejs.org/cookbook/testing.html#Unit-testing-a-store
    setActivePinia(createPinia())
  })

  it('estados del store', () => {
    // instanciando módulo del store
    const store = useAccesibilidadStore()
    const clasesAccesibles = store.clasesAccesibles
    const clasesObjeto = ['a11y-oscura', 'a11y-tipografia']

    // afirmando que el objeto está vacío
    expect(clasesAccesibles).toBeTypeOf('object')
    expect(clasesAccesibles).toHaveLength(0)

    // manipulando el estado directamente desde el store
    store.clasesAccesibles = [...store.clasesAccesibles, ...['a11y-oscura']]
    // afirmando que se agregó un valor
    expect(store.clasesAccesibles).toHaveLength(1)
    expect(store.clasesAccesibles).toStrictEqual(['a11y-oscura'])

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

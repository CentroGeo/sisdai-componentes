import { expect, describe, it } from 'vitest'
import { useMenuDesenfocable } from '../../../src/composables/useMenuDesenfocable.js'

import { createApp, ref } from 'vue'

function mockLoadComposableInApp(composable) {
  let result
  const app = createApp({
    setup() {
      result = composable()
      // removiendo advertencia de template faltante
      return () => {}
    },
  })
  app.mount(document.createElement('div'))
  return [result, app]
}

const cuadroElementosMenuRef = ref(null)

describe('useMenuDesenfocable', () => {
  it('instancias de propiedades y métodos', () => {
    const [result] = mockLoadComposableInApp(() =>
      useMenuDesenfocable(cuadroElementosMenuRef)
    )

    expect(result.menuEstaAbierto.value).toBe(false)
    result.abrirMenu()
    expect(result.menuEstaAbierto.value).toBe(true)
    result.cerrarMenu()
    expect(result.menuEstaAbierto.value).toBe(false)

    expect(result.submenuEstaAbierto.value).toBe(false)
    result.alternarSubmenu()
    expect(result.submenuEstaAbierto.value).toBe(true)
    result.alternarSubmenu()
    expect(result.submenuEstaAbierto.value).toBe(false)
  })
})

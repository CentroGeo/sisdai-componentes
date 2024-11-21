import { expect, describe, it } from 'vitest'
import useFocusTrap from '../../../src/composables/useFocusTrap.js'

import { createApp } from 'vue'

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

describe('useFocusTrap', () => {
  it('instancias de propiedades y métodos', () => {
    const result = mockLoadComposableInApp(() => useFocusTrap())

    expect(result[0]).toBeTypeOf('object')
    result[0].iniciaFocusTrap()
    result[0].terminaFocusTrap()
    
    expect(result[0].trapRef.value).toBe(null)
  })
})

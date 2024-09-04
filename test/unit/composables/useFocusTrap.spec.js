import { expect, describe, it } from 'vitest'
import useFocusTrap from '../../../src/composables/useFocusTrap.js'
import { mount } from '@vue/test-utils'

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

// const trapRef = ref(null)
// const TestComponent = {
//   template: `<dialog class="modal" ref="${trapRef.value}"><div class="modal-contenedor"><button type="button" class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar" value="cerrar" @click=""><span class="pictograma-cerrar" aria-hidden="true"></span></button></div></dialog>`,
// }

describe('useFocusTrap', () => {
  it('instancias de propiedades y métodos', () => {
    // const wrapper = mount(TestComponent)
    // console.log(wrapper.vm)

    const result = mockLoadComposableInApp(() => useFocusTrap())

    // console.log('result =', result[0])
    expect(result[0]).toBeTypeOf('object')
    result[0].iniciaFocusTrap()
    result[0].terminaFocusTrap()
    // console.log('trapRef =', result[0].trapRef.value)
    expect(result[0].trapRef.value).toBe(null)
  })
})

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

// const TestComponent = {
//   template: `<div class="nav-menu-principal" ref="${cuadroElementosMenuRef.value}" tabindex="0"><slot><ul class="nav-menu"><li><a href="#" class="nav-hipervinculo" exact @mouseover="" @click="">Menú</a></li><li class="nav-contenedor-submenu"><button class="nav-boton-submenu" @mouseover="" @click="">Menú con submenu</button><ul class="nav-submenu"><li><button class="nav-boton-regresar" @click="">Submenu</button></li><li><a href="#eje" class="nav-hipervinculo" @click="">Submenu uno</a></li><li><a href="#aja" class="nav-hipervinculo" @click="">Submenu dos</a></li></ul></li></ul></slot></div>`,
// }

describe('useMenuDesenfocable', () => {
  it('instancias de propiedades y métodos', () => {
    const [result] = mockLoadComposableInApp(() =>
      useMenuDesenfocable(cuadroElementosMenuRef)
    )
    // console.log(result)
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

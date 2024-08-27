import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SisdaiPiePaginaConahcyt from '../../../src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue'
import indexJs from '../../../src/componentes/pie-pagina-conahcyt/index.js'

const anioActualSelector = '[testid="anio-actual-span"]'

describe('SisdaiPiePaginaConahcyt.vue', () => {
  // TODO ✅
  // simular que el año sea el correcto de hoy

  // motando componente y obteniendo elemento a probar
  const wrapper = shallowMount(SisdaiPiePaginaConahcyt)
  const anioActualElement = wrapper.get(anioActualSelector)

  it('instancias de variables', () => {
    // obteniendo instancias
    const fechaReciente = new Date().getFullYear()
    const anioActualInstancia = wrapper.vm.anioActual

    // afirmando anioActual
    // expect(anioActualInstancia).toBe(2024)
    expect(anioActualInstancia).toBe(fechaReciente)

    // afirmando que está en el html
    expect(wrapper.html()).toContain(fechaReciente)
    expect(anioActualElement.text()).toContain(fechaReciente)
  })
})

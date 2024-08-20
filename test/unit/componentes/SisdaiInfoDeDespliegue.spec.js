import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SisdaiInfoDeDespliegue from '../../../src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue'

describe('SisdaiInfoDeDespliegue.vue', () => {
  const wrapper = shallowMount(SisdaiInfoDeDespliegue, {
    props: {
      versionProyecto: '1.0.0',
      entornoProyecto: 'desarrollo',
      actualizacionProyecto: '00/00/0000 00:00:00',
    },
  })
  const componente = wrapper.get('[test="version"]')
  it('props', () => {
    // versionProyecto
    // entornoProyecto
    // actualizacionProyecto
    // --
    // simular los textos del proyecto
    expect(componente.text('1.0.0'))
    expect(componente.text('desarrollo'))
    expect(componente.text('00/00/0000 00:00:00'))
  })
})

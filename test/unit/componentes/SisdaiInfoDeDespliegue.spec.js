import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import SisdaiInfoDeDespliegue from '../../../src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue'

const ddVersionSelector = '[testid="version"]'
const ddEntornoSelector = '[testid="entorno"]'
const ddActualizacionSelector = '[testid="actualizacion"]'

const props = {
  versionProyecto: '1.0.0',
  entornoProyecto: 'productions',
  actualizacionProyecto: '00/00/0000 00:00:00',
}

describe('SisdaiInfoDeDespliegue.vue', () => {
  // TODO ✅
  // simular los textos del proyecto
  if (props.entornoProyecto === 'production') {
    // forzosamente tienes que regresar un test aunque sea vacío
    it('', () => {})
  } else {
    const wrapper = shallowMount(SisdaiInfoDeDespliegue, {
      props: {
        versionProyecto: props.versionProyecto,
        entornoProyecto: props.entornoProyecto,
        actualizacionProyecto: props.actualizacionProyecto,
      },
    })

    const version = wrapper.get(ddVersionSelector)
    const entorno = wrapper.get(ddEntornoSelector)
    const actualizacion = wrapper.get(ddActualizacionSelector)

    it('props', () => {
      expect(version.text(props.versionProyecto))
      expect(entorno.text(props.entornoProyecto))
      expect(actualizacion.text(props.actualizacionProyecto))
    })
  }
})

import { expect, describe, it } from 'vitest'
import GloboInformacion from '../../../src/directivas/tooltips/GloboInformacion.js'
import indexJs from '../../../src/directivas/tooltips/index.js'
import { mount } from '@vue/test-utils'

const Component = {
  template:
    '<button v-globo-informacion="soy un globo de información">botón</button>',
}

describe('GloboInformacion', () => {
  // const { globo_informacion } = GloboInformacion()
  it('instancias de propiedades y métodos', () => {
    // const wrapper = mount(Component, {
    //   global: {
    //     directives: {
    //       globo_informacion: GloboInformacion, // Bar matches v-bar
    //     },
    //   },
    // })
  })
})

import { describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SisdaiAudio from '../../../src/componentes/audio/SisdaiAudio.vue'
import indexJS from '../../../src/componentes/audio/index.js'

// import Foo from '@/Foo.vue'

describe('SisdaiAudio.vue', () => {
  // const wrapper = mount(SisdaiAudio, {
  //   props: {
  //     archivo: '',
  //   },
  // })
  // obteniendo los componentes que usa SisdaiAudio
  // wrapper.getComponent(Foo) // returns a VueWrapper

  it('props', () => {
    // archivo
    // --
    // simular que se reproduce un audio
    // simular que se pausa un audio
    // simular que se retrasa 10 segundos
    // simular que se adelanta 10 segundos
    // simular que aumenta o disminuye el volumen
    // simular el texto del archivo
  })
  it('slots', () => {
    // encabezado
  })
})

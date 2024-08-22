import { mount, shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import SisdaiImagenPngWebp from '../../../src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue'
import indexJS from '../../../src/componentes/imagen-png-webp/index.js'

// selectores de elemento html por atributo
const sourceWebpSelector = '[testid=source-webp]'
const sourcePngSelector = '[testid=source-png]'
const srcImgSelector = '[testid=src-img]'
const ficaptionSelector = '[testid=figcaption]'

const props = {
  dominio: 'https://cdn.conahcyt.mx/',
  ruta: 'ruta/archivo/imagen',
  textoAlternativo: 'texto alternativo de la imagen',
  leyenda: 'leyenda de la imagen',
  ancho_maximo: '100%',
}

describe('SisdaiImagenPngWebp.vue', () => {
  // montar el componente individualmente
  const wrapper = shallowMount(SisdaiImagenPngWebp, {
    // configura las props del componente al montarse
    props: {
      dominio: props.dominio,
      ruta: props.ruta,
      textoAlternativo: props.textoAlternativo,
      leyenda: props.leyenda,
      ancho_maximo: props.ancho_maximo,
    },
  })
  // const index = mount(indexJS)

  // obteniendo los elementos de prueba
  // retorna un DOMWrapper si lo encuentra. Si no, lanza un error
  const sourceWebpElement = wrapper.get(sourceWebpSelector)
  const sourcePngElement = wrapper.get(sourcePngSelector)
  const srcImgElement = wrapper.get(srcImgSelector)
  const figcaptionElement = wrapper.get(ficaptionSelector)

  // describe('props', () => {
  //   it('afirmando las props con los valores de los atributos de los elementos html', () => {})
  // })
  // Define el conjunto de relaciones esperadas
  it('props', () => {
    // TODO ✅
    // simular el contenido del html en el componente
    // expect(wrapper.html()).toContain('leyenda de la imagen')
    // TODO ✅
    // simular los textos de la imagen
    // expect(wrapper.text('https://cdn.conahcyt.mx/'))
    // expect(wrapper.text('ruta/archivo/imagen'))
    // expect(wrapper.text('texto alternativo de la imagen'))

    // TODO: organizar elementos en array de objetos
    // expect(elements.sourceWebp.attributes())

    // afirmando que el srcset del source tenga el valor del props
    expect(sourceWebpElement.attributes('srcset')).toBe(
      props.dominio + props.ruta + '.webp'
    )
    expect(sourcePngElement.attributes().srcset).toBe(
      props.dominio + props.ruta + '.png'
    )
    // afirmando el src, alt y style del img
    expect(srcImgElement.attributes('src')).toBe(
      props.dominio + props.ruta + '.png'
    )
    expect(srcImgElement.attributes('alt')).toBe(props.textoAlternativo)
    expect(srcImgElement.attributes('style')).toContain(
      'max-width:',
      props.ancho_maximo + '; width: 100%;'
    )
    // afirmando el texto del figcaption
    expect(figcaptionElement.text()).toBe(props.leyenda)
  })
})

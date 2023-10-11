---
layout: LayoutDocumentacion
---

# Directivas

<section id="globos-informacion">

## Globos información

Comunmente conocidos como Tooltips , estas directivas funcionan para cualquier elemento html o componente de vue, agregando la directiva `v-globo-informacion` o `v-globo-informacion-extendido`.

Uso

**Globo informacion**

```html
<HTMLElement v-globo-informacion:[posicion]="contenido | opciones" />
```

**Globo de informacion extendido** (para contenido mas largo)

```html
<HTMLElement
  v-globo-informacion-extendido:[posicion].[interactivo]="contenido | opciones"
/>
```

### Cosas que debes saber al usar esta directiva

- Para el posicionamiento de los tooltips se utiliza la dependencia [Popper js](https://www.npmjs.com/package/@popperjs/core), no es necesario instalarla, se instala junto con las dependencias de esta biblioteca
- La posicion del tooltip es definida por el parametro `posicion` (top,left,bottom, etc.). Pero al final, la asignación de la misma, dependera de la disponibilidad de espacio en pantalla y de la posicion del scroll.
- Cuando un elemento de formulario, como por ejemplo un `button`, tiene activado el atributo `disabled` algunos eventos de tipo `mouseenter` y `mouseleave` dejan de ser detectados por javascript, por tal motivo la directiva podria no funcionar correctamente. Se recomienda no cambiar el atributo `disabled` mientras el tooltip este pasando por el ciclo de aparecer/desaparecer.

### API

#### Parámetros

La estructura de los parámetros es la siguiente

```
v-globo-informacion:[posicion] = [contenido | opciones]

v-globo-informacion-extendido:[posicion].[interactivo] = [contenido | opciones]
```

Donde:

- **posicion** Posición del globo de información respecto al elemento

  - **Valores aceptados:** arriba-inicio | arriba | arriba-final | abajo-inicio | abajo | abajo-final | derecha-inicio | derecha | derecha-final | izquierda-inicio | izquierda | izquierda-final
  - **Valor por default:** derecha

- **interactivo** Indica si el globo de información tiene algun elemento para interactuar, util cuando se agregan enlaces al globo de información

  - **Valores aceptados:** Si existe es `true`, si no existe es `false`
  - **Valor por default:** `false`

- **contenido** El contenido del globo de información, acepta html

  - **Tipo:** `string`
  - **Valor por default:** `""`

- **opciones** Opciones que modifican al globo de información

  - **Tipo:** Object - `{contenido:string, desfase:[number,number], asignadoAElemento:string}`
  - **Valor por default:**
    - contenido: `''`
    - desfase: `[0,12]`
    - asignadoAElemento: `undefined`

  Donde **contenido** es el contenido del globo de información (acepta html), **desfase** es el desplazamiento que el globo de información puede tener respecto al elemento origen, siempre en valores positivos, esta es lo equivalente a la propiedad [offset en Popper js](https://popper.js.org/docs/v2/modifiers/offset/). Y **asignadoAElemento** es el [selector css](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) del elemento origen al que se le puede asignar el globo de información, regularmente es un elemento padre del elemento al que se le aplica la directiva, si no se especifica , por default se usara el elemento al que se le aplico la directiva

### Ejemplos

<utils-ejemplo-doc ruta="directivas/globo-informacion-basico.vue"/>

<utils-ejemplo-doc ruta="directivas/globo-informacion-elemento-padre.vue"/>

<utils-ejemplo-doc ruta="directivas/globo-informacion-dinamico.vue"/>

</section>

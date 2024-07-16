<script setup>
import EjemploGloboInformacionBasico from "../../.vitepress/components/directivas/globo-informacion-basico.vue";
import EjemploGloboInformacionElementoPadre from "../../.vitepress/components/directivas/globo-informacion-elemento-padre.vue";
import EjemploGloboInformacionDinamico from "../../.vitepress/components/directivas/globo-informacion-dinamico.vue";
</script>

# Directivas

<section id="globos-informacion">

## Globos información

Comúnmente conocidos como Tooltips, estas directivas funcionan para cualquier elemento html o componente de vue, agregando la directiva `v-globo-informacion` o `v-globo-informacion-extendido`.

Uso:

**Globo información**

```html
<HTMLElement v-globo-informacion:[posicion]="contenido | opciones" />
```

**Globo de información extendido** (para contenido más largo)

```html
<HTMLElement
  v-globo-informacion-extendido:[posicion].[interactivo]="contenido | opciones"
/>
```

### Cosas que debes saber al usar esta directiva

- Para el posicionamiento de los tooltips se utiliza la dependencia [Popper js](https://www.npmjs.com/package/@popperjs/core), no es necesario instalarla, se instala junto con las dependencias de esta biblioteca.
- La posición del tooltip es definida por el parámetro `posicion` (top, left, bottom, etc.). Pero al final, la asignación de la misma, dependerá de la disponibilidad de espacio en pantalla y de la posición del scroll.
- Cuando un elemento de formulario, como por ejemplo un `button`, tiene activado el atributo `disabled` algunos eventos de tipo `mouseenter` y `mouseleave` dejan de ser detectados por javascript, por tal motivo la directiva podria no funcionar correctamente. Se recomienda no cambiar el atributo `disabled` mientras el tooltip esté pasando por el ciclo de aparecer/desaparecer.

## API

### Parámetros

La estructura de los parámetros es la siguiente:

```
v-globo-informacion:[posicion] = [contenido | opciones]

v-globo-informacion-extendido:[posicion].[interactivo] = [contenido | opciones]
```

Donde:

- `posicion`: Posición del globo de información respecto al elemento.
  - **Valores aceptados:** arriba-inicio | arriba | arriba-final | abajo-inicio | abajo | abajo-final | derecha-inicio | derecha | derecha-final | izquierda-inicio | izquierda | izquierda-final
  - **Valor predeterminado:** derecha
- `interactivo`: Indica si el globo de información tiene algun elemento para interactuar, util cuando se agregan enlaces al globo de información.
  - **Valores aceptados:** Si existe es `true`, si no existe es `false`
  - **Valor predeterminado:** `false`
- `contenido`: El contenido del globo de información, acepta html.
  - **Tipo de dato:** `String`
  - **Valor predeterminado:** `""`
- `opciones`: Opciones que modifican al globo de información.
  - **Tipo de dato:** `Object`
  ```js
  {
    contenido: String,
    desfase: Array<Number>,
    asignadoAElemento: String
  }
  ```
  - **Valor predeterminada:**
  ```js
  {
    contenido: '',
    desfase: [0, 12],
    asignadoAElemento: undefined
  }
  ```

Donde **contenido** es el contenido del globo de información (acepta html), **desfase** es el desplazamiento que el globo de información puede tener respecto al elemento origen, siempre en valores positivos, esta es lo equivalente a la propiedad [offset en Popper js](https://popper.js.org/docs/v2/modifiers/offset/).

Y **asignadoAElemento** es el [selector css](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) del elemento origen al que se le puede asignar el globo de información, regularmente es un elemento padre del elemento al que se le aplica la directiva, si no se especifica, usará de manera predeterminada el elemento al que se le aplicó la directiva.

## Ejemplos

<!-- <utils-ejemplo-doc ruta="directivas/globo-informacion-basico.vue"/> -->
<EjemploGloboInformacionBasico />
<<< @/.vitepress/components/directivas/globo-informacion-basico.vue

<!-- <utils-ejemplo-doc ruta="directivas/globo-informacion-elemento-padre.vue"/> -->
<EjemploGloboInformacionElementoPadre />
<<< @/.vitepress/components/directivas/globo-informacion-elemento-padre.vue

<!-- <utils-ejemplo-doc ruta="directivas/globo-informacion-dinamico.vue"/> -->
<EjemploGloboInformacionDinamico />
<<< @/.vitepress/components/directivas/globo-informacion-dinamico.vue

</section>

<script setup>
import EjemploGloboInformacionBasico from "../../.vitepress/components/directivas/globo-informacion-basico.vue";
import EjemploGloboInformacionElementoPadre from "../../.vitepress/components/directivas/globo-informacion-elemento-padre.vue";
import EjemploGloboInformacionDinamico from "../../.vitepress/components/directivas/globo-informacion-dinamico.vue";
</script>

# Directivas

<section id="globos-informacion">

## Globos información

Comúnmente conocidos como Tooltips, estas directivas funcionan para cualquier elemento HTML o componente de Vue, agregando la directiva `v-globo-informacion` o `v-globo-informacion-extendido`.

</section>

<section id="uso">

## Uso

Para usar un globo de información básico en un elemento HTML, agrega la directiva `v-globo-informacion` especificando la posición y el contenido u opciones.

**Globo información:**

```html
<HTMLElement v-globo-informacion:[posicion]="contenido | opciones" />
```

**Globo de información extendido** (para contenido más largo):

```html
<HTMLElement
  v-globo-informacion-extendido:[posicion].[interactivo]="contenido | opciones"
/>
```

### Antes de usar

- Dependencia: para el posicionamiento de los tooltips se utiliza la dependencia [Popper js](https://www.npmjs.com/package/@popperjs/core). No es necesario instalarla por separado, ya que se incluye con las dependencias de esta biblioteca.
- Posicionamiento: la posición del tooltip es definida por el parámetro `posicion` (top, left, bottom, etc.). Sin embargo, la asignación final dependerá de la disponibilidad de espacio en pantalla y de la posición del scroll.
- Compatibilidad con elementos deshabilitados: cuando un elemento de formulario, como un `button`, tiene activado el atributo `disabled` algunos eventos de tipo `mouseenter` y `mouseleave` dejan de ser detectados por JavaScript. Por tal motivo, la directiva podría no funcionar correctamente. Se recomienda no cambiar el atributo `disabled` mientras el tooltip esté pasando por el ciclo de aparecer/desaparecer.

Vista simplificada

En la vista simplificada el directiva `v-globo-informacion` o `v-globo-informacion-extendido` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

### Parámetros

La estructura de los parámetros es la siguiente:

```
v-globo-informacion:[posicion] = [contenido | opciones]

v-globo-informacion-extendido:[posicion].[interactivo] = [contenido | opciones]
```

Donde:

- `posicion`: posición del globo de información respecto al elemento.
  - **Valores aceptados:** arriba-inicio | arriba | arriba-final | abajo-inicio | abajo | abajo-final | derecha-inicio | derecha | derecha-final | izquierda-inicio | izquierda | izquierda-final
  - **Valor predeterminado:** derecha
- `interactivo`: indica si el globo de información tiene algún elemento para interactuar, útil cuando se agregan enlaces al globo de información.
  - **Valores aceptados:** Si existe es `true`, si no existe es `false`
  - **Valor predeterminado:** `false`
- `contenido`: el contenido del globo de información, acepta html.
  - **Tipo de dato:** `String`
  - **Valor predeterminado:** `""`
- `opciones`: opciones que modifican al globo de información.
  - **Tipo de dato:** `Object`
  - **Estructura:**
  ```js
  {
    contenido: String,
    desfase: Array<Number>,
    asignadoAElemento: String
  }
  ```
  - **Valor predeterminado:**
  ```js
  {
    contenido: '',
    desfase: [0, 12],
    asignadoAElemento: undefined
  }
  ```

**Descripción:**

- **contenido**: es el contenido del globo de información (acepta HTML).
- **desfase**: es el desplazamiento que el globo de información puede tener respecto al elemento origen, siempre en valores positivos. Equivale a la propiedad [offset en Popper js](https://popper.js.org/docs/v2/modifiers/offset/).
- **asignadoAElemento**: es el [selector CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) del elemento origen al que se le puede asignar el globo de información. Regularmente es un elemento padre del elemento al que se le aplica la directiva. Si no se especifica, usará de manera predeterminada el elemento al que se le aplicó la directiva.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

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

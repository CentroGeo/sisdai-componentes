<script setup>
import EjemploDefault from "../../.vitepress/components/colapsable-navegacion/default.vue";
import EjemploSlot from "../../.vitepress/components/colapsable-navegacion/slot.vue";
</script>

# Colapsable de navegación <span class="etiqueta">preliminar</span>

El componente `SisdaiColapsableNavegacion` consiste en un elemento `<div class="colapsable"></div>` que contiene en su interior un botón y una lista no ordenada `<ul></ul>`, que usualmente contendrá enlaces `<a></a>` en sus elementos de lista `<li></li>`. Al dar clic en el botón, se agrega una clase `.activo` al elemento `div.colapsable`, haciendo visible la lista ordenada.

Los estilos de las clases mencionadas anteriormente provienen de la biblioteca de estilos [sisdai-css](https://codigo.conahcyt.mx/sisdai/sisdai-css), por lo cual es una dependencia de este componente. Los elementos de lista se especifican mediante `slots`.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiColapsableNavegacion`, incorpora el componente en tu plantilla y define los elementos de la lista a través de slots. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiColapsableNavegacion> ...contenido </SisdaiColapsableNavegacion>
```

Vista simplificada

En la vista simplificada el componente `SisdaiColapsableNavegacion` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite propiedades y slots:

### Propiedades

#### Opcionales

- `colapsado`: corresponde al estado del componente. Si se elige `true` el componente se mostrará desplegado.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: opcional
- `avisarMenuLateral`: avisa al menú lateral si se puede hacer tabindex.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `true`
  - Requerido: opcional

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'encabezado'`: en este se indica el título del encabezado de la lista con una etiqueta `<p></p>`. Tiene el siguiente `html` predeterminado dentro del slot:

```html
<slot name="encabezado">
  <p>Encabezado colapsable</p>
</slot>
```

- `'contenido'`: en este se indican los elementos de lista `<li></li>` que contendrá el elemento. Tiene el siguiente `html` predeterminado dentro del slot:

```html
<ul :id="id_aleatorio">
  <li>
    <a
      href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
      target="_blank"
      rel="noopener noreferrer"
      exact
      :tabindex="_colapsado ? undefined : -1"
    >
      Elemento desplegado</a
    >
  </li>
</ul>
```

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté seleccionada.

Se debe agregar el atributo `tabindex` a cada uno de los elementos de la lista de navegación, para que cuando se requiera navegar por teclado éste los identifique y los enfoque dependiendo si el menú está colapsado o no.

En caso de que el menú esté desplegado por defecto, el atributo se puede omitir, puesto que las etiquetas `<a>` con atributo `href` son enfocables y tienen un valor predeterminado del `tabindex` en 0.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

Así se renderiza el componente sin especificar nada en los slots:

<!-- <utils-ejemplo-doc ruta="colapsable-navegacion/default.vue"/> -->
<EjemploDefault />
<<< @/.vitepress/components/colapsable-navegacion/default.vue

Ejemplo con título en el slot de encabezado y contenido

<!-- <utils-ejemplo-doc ruta="colapsable-navegacion/slot.vue"/> -->
<EjemploSlot />
<<< @/.vitepress/components/colapsable-navegacion/slot.vue

**Observaciónes**

Este componente `<SisdaiColapsableNavegacion/>` tiene un estilo definido para el componente `<SisdaiMenuLateral/>`. Puedes consultar la [sección](../menu-lateral/index.md) dicho componente para ver cómo pueden convivir.

</section>

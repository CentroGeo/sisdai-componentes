---
layout: LayoutDocumentacion
sectionName: colapsable-navegacion
---

# Colapsable de navegación <span class="etiqueta">preliminar</span>

Este componente consiste en un elemento `<div class="colapsable"></div>` que contiene en su interior un botón y una lista no ordenada `<ul></ul>` que usualmente contendrá enlaces `<a></a>` en sus elementos de lista `<li></li>`.

Su funcionalidad consiste en que al dar click al botón se pude agregar una clase `.activo` al elemento `div.colapsable`, lo cual hará que la lista no ordenada se vuelva visible.

Los estilos de las clases mencionadas anteriormente provienen de la biblioteca de estilos [sisdai-css](https://codigo.conahcyt.mx/sisdai/sisdai-css), por lo cual es una dependencia de este componente.

Los elementos de lista se especifican mediante `slots`.

<section id="api">

## API

Este componente admite propiedades y slots.

### Propiedades

A continuación se enlistan las propiedades que admite el componente.

#### Opcionales

- `colapsado`: (_Boolean_) Corresponde al estado del componente. Por _default_ es `false` y corresponde al componente colapsado. Si se elige `true` el componente se mostrará desplegado.

### Slots

- `'encabezado'`: En este se indica el título del encabezado de la lista con una etiqueta `<p></p>`. Por defecto tiene el siguiente `html` dentro del slot.

```html
<slot name="encabezado">
  <p>Encabezado colapsable</p>
</slot>
```

- `'contenido'`: En este se indican los elementos de lista `<li></li>` que contendrá el elemento. Por defecto tiene el siguiente `html` dentro del slot.

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

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté selecionada.

Se debe agregar el atributo `tabindex` a cada uno de los elementos de la lista de navegación, para que cuando se requiera navegar por teclado éste los identifique y los enfoque dependiendo si el menú está colapsado o no.

En caso que de que el menú esté desplegado por defecto el atributo se puede omitir, puesto que las etiquetas `<a>` con atributo `href` son enfocables y tienen un valor predeterminado del `tabindex` en 0.

</section>

<section id="ejemplos">

## Ejemplos

**_Default_**

Así se renderiza el componente sin especificar nada en los slots.

<utils-ejemplo-doc ruta="colapsable-navegacion/default.vue"/>

**Titulo y slot**

Así se renderiza cuando especificamos un título en el slot de encabezado y contenido.

<utils-ejemplo-doc ruta="colapsable-navegacion/slot.vue"/>

**Observación:** Este componente `<SisdaiColapsableNavegacion/>` tiene un estilo definido para el componente `<SisdaiMenuLateral/>`. Puedes consultar la [sección](/documentacion/menu-lateral) de dicho componente para ver cómo pueden convivir.

</section>

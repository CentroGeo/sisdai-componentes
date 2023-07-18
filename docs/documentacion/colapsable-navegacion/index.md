---
layout: LayoutDocumentacion
---

# Colapsable de navegacion

Este componente consiste en un elemento `<li class="colapsable-navegacion"></li>` que contiene en su interior un botón y una lista no ordenada `<ul></ul>` que usualmente contendrá enlaces `<a></a>` en sus elementos de lista `<li></li>`,

Su funcionalidad consiste en que al dar click al botón se pude agregar una clase `.activo` al elemento `li.colapsable-navegacion`, lo cual hará que la lista no ordenada sea vuelva visible. Los estilos de las clases mencionadas anteriormente provienen de la biblioteca de estilos [sisdai-css](https://github.com/salsa-community/sisdai-css), por lo cual es una dependencia de este componente.

Los elementos de lista se especifican mediante `slots`.

<section id="api">

## API

Este componente admite propiedades y slots.

### Propiedades

A continuación se enlistan las propiedades que admite el componente

#### Obligatorios

- `titulo`: (_String_) Corresponde al texto que deberá tener el botón del colapsable. Por _default_ tiene el valor 'Titulo de colapsable', sin embargo su valor se debe especificar siempre que se use.

#### Opcionales

- `activo`: (_Boolean_) Corresponde al estado del componente. Por _default_ es `false` y corresponde al componente colapsado. Si se elige `true` el componente se mostrará desplegado

### Slots

- `'listado-contenido'`: Este es el único slot que contiene el componente, en él se deben indicar los elementos de lista `<li></li>` que contendrá el elemento. Por _default_ tiene el siguiente `html` dentro del slot

```html
<li>
  <a
    tabindex="-1"
    href="#"
    exact
  >
    Elemento desplegado</a
  >
</li>
```

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté selecionada.

Se debe agregar el atributo `tabindex` a cada uno de los elementos de la lista de navegación, para que cuando se requiera navegar por teclado éste los identifique y los enfoque dependiendo si el menú está colapsado o no.

En caso que de que el menú esté desplegado por defecto el atributo se puede omitir, puesto que las etiquetas `<a>` con atributo `href` son enfocables y tienen un valor predeterminado del `tabindex` en 0.

</section>

<section id="api">

## Ejemplos

**_Default_**

Así se renderiza el componente sin especificar `:titulo` ni slot

<utils-ejemplo-doc ruta="colapsable-navegacion/default.vue"/>

**Titulo y slot**

Así se renderiza cuando especificamos un `:titulo` y su slot

<utils-ejemplo-doc ruta="colapsable-navegacion/slot.vue"/>

**Observación:** Este componente `<SisdaiColapsableNavegacion/>` tiene un estilo definido para el componente `<SisdaiMenuLateral/>`. Puedes consultar la [sección](/documentacion/menu-lateral) de dicho componente para ver como pueden convivir.

</section>

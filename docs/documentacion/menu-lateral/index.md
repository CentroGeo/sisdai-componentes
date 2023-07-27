---
layout: LayoutDocumentacion
---

# Menú lateral

Este componente consiste en un elemento `menu.menu-lateral-contenedor` que usualmente contiene enlaces de navegación. Sus estilos provienen de la biblioteca de estilos [sisdai-css](https://github.com/salsa-community/sisdai-css). En version de celular tiene un botón que muestra el contenido o lo colapsa.

<menu-lateral-basico/>

<section id="api">

## API

### Propiedades

- `elemento_enfocable`: String, por default es `'#navegacion-secundaria-con-contenido-principal'` y su valor corresponde a un texto querySelector que especifica a qué elemento del DOM harán focus los enlaces del menú después de hacer click. En el Sistema de diseño se ha determinado que cuando se hace click en un enlace de este menú, el focus se debe ir hacia el contenedor del índice de contenido más su texto principal, de ahí el valor por default.

### Slots

-`'contenido-menu-lateral'`: Este es el único slot que contiene el componente. En el se pueden incluir elementos de navegación como `<a></a>` o `<router-link>  </router-link>` en el caso de que que el proyecto esté usando [Vue Router](https://router.vuejs.org/). También se pueden agregar dichos enlaces contenidos en los elementos de lista `<li>` de una lista no ordenada `<ul/>`, así como incluir el componente `<SisdaiColapsableNavegacion/>`

Para este componente, el uso de [Vue Router](https://router.vuejs.org/) es altamente recomendado, entre otras cosas, por los estilos que asigna a los enlaces dentro de este componente.

Por _default_ el contenido del slot es el siguiente:

```html
<ul>
  <li>
    <router-link
      to="#routerlink"
      exact
    >
      router link prueba
    </router-link>
  </li>
  <li><a href="#anchore"> anchore link prueba </a></li>
  <li>
    <a
      href="https://github.com/salsa-community/sisdai-componentes"
      rel="noopener"
      target="_blank"
    >
      <span
        class="icono-social-github"
        aria-hidden="true"
      ></span>
      ejemplo github
    </a>
  </li>
</ul>
```

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté selecionada.

</section>

<section id="ejemplos">

## Ejemplos

**_Default_**

Así se renderiza el componente sin especificar su slot

<utils-ejemplo-doc ruta="menu-lateral/default.vue"/>

**Usando slot simple**

En el siguiente ejemplo usamos `router-link` y un `<a></a>` para ilustrar algunos dejemplos de enlaces dentro de esta mísma documentación. Observe como los primeros 3 modifican su estilo cuando la ruta se actualiza, mientras que el cuarto elemento solo se modifica en el estaod :active. Es esta una de las razones por las que se recomienda el uso de [Vue Router](https://router.vuejs.org/)

<utils-ejemplo-doc ruta="menu-lateral/basico.vue"/>

**Slot como lista no ordenada y colapsable**

El siguiente ejemplo contiene los mismos enlaces que el anterior, sin embargo, su estructura es un poco más ordenada pues los enlaces están dentro de los elementos de lista de una lista no ordenada. Además se integró el componente `<SisdaiColapsableNavegacion/>`, que a su vez tiene otros enlaces que se introducen mediante un slot propio.

<utils-ejemplo-doc ruta="menu-lateral/colapsable.vue"/>

</section>

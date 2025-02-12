<script setup>
import EjemploDefault from "../../.vitepress/components/menu-lateral/default.vue";
import EjemploBasico from "../../.vitepress/components/menu-lateral/basico.vue";
import EjemploColapsable from "../../.vitepress/components/menu-lateral/ejemplo-colapsable.vue";
</script>

# Menú lateral <span class="etiqueta">preliminar</span>

El componente `SisdaiMenuLateral` consiste en un elemento `nav.menu-lateral` que usualmente contiene enlaces de navegación. Sus estilos provienen de la biblioteca de estilos [sisdai-css](https://github.com/CentroGeo/sisdai-css). En la versión de celular tiene un botón que muestra el contenido o lo colapsa.

<section id="uso">

## Uso

```html
<SisdaiMenuLateral />
```

<!-- <menu-lateral-basico/> -->
<EjemploBasico />

Vista simplificada

En la vista simplificada el componente `SisdaiMenuLateral` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite los siguientes slots:

### Propiedades

Este componente no contiene propiedades.

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'contenido-menu-lateral'`: este es el único slot que contiene el componente. En este se pueden incluir elementos de navegación como `<a></a>` o `<router-link></router-link>` en el caso de que el proyecto esté usando [Vue Router](https://router.vuejs.org/).

También se pueden agregar dichos enlaces contenidos en los elementos de lista `<li>` de una lista no ordenada `<ul/>`, así como incluir el componente `<SisdaiColapsableNavegacion/>`

Para este componente, el uso de
[Vue Router](https://router.vuejs.org/) es altamente recomendado, entre otras cosas, por los estilos que asigna a los enlaces dentro de este componente.

El contenido predeterminado del slot es el siguiente:

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
      href="https://github.com/CentroGeo/sisdai-componentes"
      aria-label=""
      rel="noopener noreferrer"
      target="_blank"
    >
      <span
        class="pictograma-social-github"
        aria-hidden="true"
      ></span>
      ejemplo github
    </a>
  </li>
</ul>
```

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté seleccionada.

</section>

<section id="ejemplos">

## Ejemplos de uso

Así se renderiza el componente sin especificar su slot.

<!-- <utils-ejemplo-doc ruta="menu-lateral/default.vue"/> -->
<EjemploDefault />
<<< @/.vitepress/components/menu-lateral/default.vue

**Usando slot simple**

En el siguiente ejemplo usamos `<router-link>` y un `<a></a>` para ilustrar algunos ejemplos de enlaces dentro de esta misma documentación.

Observa como los primeros 3 modifican su estilo cuando la ruta se actualiza, mientras que el cuarto elemento solo se modifica en el estado: active. Es esta una de las razones por las que se recomienda el uso de
[Vue Router](https://router.vuejs.org/)

<!-- <utils-ejemplo-doc ruta="menu-lateral/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/menu-lateral/basico.vue

**Slot como lista no ordenada y colapsable**

El siguiente ejemplo contiene los mismos enlaces que el anterior, sin embargo, su estructura es un poco más ordenada pues los enlaces están dentro de los elementos de una lista no ordenada. Además se integró el componente `<SisdaiColapsableNavegacion/>`, que a su vez tiene otros enlaces que se introducen mediante un slot propio.

<!-- <utils-ejemplo-doc ruta="menu-lateral/colapsable.vue"/> -->
<EjemploColapsable />
<<< @/.vitepress/components/menu-lateral/ejemplo-colapsable.vue

</section>

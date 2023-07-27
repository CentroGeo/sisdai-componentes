---
layout: LayoutDocumentacion
---

# Navegacion principal

Se trata del componente de barra de navegacion principal del sitio, generalmente contiene la lista de enlaces a las secciones del sitio, identidad, etc.

Uso:

```html
<SisdaiNavegacionPrincipal> ...contenido </SisdaiNavegacionPrincipal>
```

<section id="api">

## API

### Propiedades

- **elemento_enfocable**
  String, por default es `'#indice-con-contenido-principal'` y su valor corresponde a un texto querySelector que especifica a qué elemento del DOM harán focus los enlaces del menú después de hacer click. En el Sistema de diseño se ha determinado que cuando se hace click en un enlace de este menú, el focus se debe ir hacia el contenedor del índice de contenido más su texto principal, de ahí el valor por default.

- **navInformacion**
  Para la version mobile es el contenido que se muestra debajo de la barra de navegacion, se usa generalmente para mostrar el nombre de la seccion actual del sitio.

  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no

- **fija**
  Define si esta barra de navegacion se queda fija en la parte superior al hacer scroll en la vista actual
  - Tipo: `Boolean`
  - Valor predeterminado `true`
  - Requerido: no

### Metodos

Este componente no cuenta con metodos publicos

### Eventos

Este componente no dispara eventos externos

### Slots

##### default

- Requerido: si
- Contenido predeterminado: contenido de prueba

Slot para el contenido de navegacion, son los links a las secciones disponibles en el sitio.

```html
<SisdaiNavegacionPrincipal>
  <ul class="nav-menu">
    <li>
      <a
        class="nav-hipervinculo"
        href="#"
        exact
      >
        Enlace sección</a
      >
    </li>
  </ul>
</SisdaiNavegacionPrincipal>
```

De acuerdo a la semantica de html y las reglas de css definidas en Sisdaicss, los links deberan estar contenidos en un [elemento lista desordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

En caso de tener un [router](https://router.vuejs.org/), el elemento `<a>` podria ser remplazado por el componente `<RouterLink>` conservando las clases de estilo necesarias.

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté selecionada.

##### identidad

- Requerido: no
- Contenido predeterminado: Logotipo de Conacyt

Slot para el contenido de identidad del sitio, donde se despliegan los logos del mismo.

Se recomienda usar las clases css de Sisdaicss

```html
<SisdaiNavegacionPrincipal>
  <template #identidad>
    <a
      href="https://conacyt.mx/"
      target="_blank"
      class="nav-hiperviculo-logo"
    >
      <img
        class="nav-logo"
        width="130"
        height="38"
        src="https://cdn.conacyt.mx/sisdai-archivos/conahcyt-azul.svg"
        alt="Conacyt."
      />
    </a>
  </template>
</SisdaiNavegacionPrincipal>
```

</section>

<section id="ejemplos">

## Ejemplos

Usando el contenido por default

<utils-ejemplo-doc ruta="navegacion-principal/basico.vue"/>

Agregando contenido personalizado

<utils-ejemplo-doc ruta="navegacion-principal/contenido-personalizado.vue"/>

Para que la subnavegación en la móvil versión se abra y cierre, se deberá agregar la lógica que alterne la clase dinámica css `abierto` del elemento de lista `ul` con el selector `nav-submenu`.

Dicha alternancia se puede lograr mediante un evento de clic en los elementos `button` con los selectores `nav-boton-submenu` y `nav-boton-regresar` para llamar a la función `alternarSubmenu` del `_setupState` de la referencia o instancia del componente.

</section>

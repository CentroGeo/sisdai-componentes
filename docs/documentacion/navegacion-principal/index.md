---
layout: LayoutDocumentacion
sectionName: navegacion-principal
---

# Navegación principal

Se trata del componente de barra de navegación principal del sitio, generalmente contiene la lista de enlaces a las secciones del sitio, identidad, etc.

Uso:

```html
<SisdaiNavegacionPrincipal> ...contenido </SisdaiNavegacionPrincipal>
```

<section id="api">

## API

### Propiedades

- `navInformacion` Para la versión mobile es el contenido que se muestra debajo de la barra de navegación, se usa generalmente para mostrar el nombre de la sección actual del sitio.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `ref` Referencia del componente que sirve como instancia para acceder a las variables o métodos expuestos de abrir o cerrar menús.
  - Tipo: `String`
  - Requerido: sí

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

##### default

- Requerido: si
- Contenido predeterminado: contenido de prueba

Slot para el contenido de navegación, son los links a las secciones disponibles en el sitio.

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

De acuerdo a la semántica de html y las reglas de css definidas en Sisdai Css, los links deberán estar contenidos en un [elemento lista desordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

En caso de tener un [router](https://router.vuejs.org/), el elemento `<a>` podria ser remplazado por el componente `<RouterLink>` conservando las clases de estilo necesarias.

Cuando se agregue contenido personalizado **es importante incluir** la clase css `nav-menu` al elemento `<ul>` y `nav-submenu` al otro elemento `<ul>` que maneja la subnavegación de 'abierto' para que la funcionalidad de enfocar con el teclado opere correctamente.

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté selecionada.

##### identidad

- Requerido: no
- Contenido predeterminado: Logotipo de Conahcyt

Slot para el contenido de identidad del sitio, donde se despliegan los logos del mismo.

Se recomienda usar las clases css de Sisdai Css. Por ejemplo, la clase **color-invertir** ayuda a que en la función vista oscura del menú de accesibilidad los colores del logo o imagen en formato svg se inviertan y contrasten en blanco con el fondo de la barra de navegación principal.

```html
<SisdaiNavegacionPrincipal>
  <template #identidad>
    <a
      href="https://conacyt.mx/"
      target="_blank"
      rel="noopener noreferrer"
      class="nav-hiperviculo-logo"
    >
      <img
        class="nav-logo invertir"
        width="130"
        height="38"
        src="https://cdn.conacyt.mx/sisdai-archivos/conahcyt-azul.svg"
        alt="Conahcyt."
      />
    </a>
  </template>
</SisdaiNavegacionPrincipal>
```

##### complementario

- Requerido: no
- Contenido predeterminado: Vacío

Slot para el contenido complementario del sitio, donde se colocan enlaces externos por ejemplo.

```html
<SisdaiNavegacionPrincipal>
  <template #complementario>
    <a
      class="nav-hipervinculo"
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <b>IR A ENLACE EXTERNO</b>
    </a>
  </template>
</SisdaiNavegacionPrincipal>
```

</section>

<section id="ejemplos">

## Ejemplos

Usando el contenido predeterminado.

<utils-ejemplo-doc ruta="navegacion-principal/basico.vue"/>

Agregando contenido personalizado.

<utils-ejemplo-doc ruta="navegacion-principal/contenido-personalizado.vue"/>

Para que la subnavegación en la versión móvil se abra y cierre, se deberá agregar al elemento de lista `ul` con el selector `nav-submenu` la clase dinámica css `abierto` con la condición de que la variable `submenuEstaAbierta`.

Dicha alternancia se puede lograr mediante un evento de clic en los elementos `button` con los selectores `nav-boton-submenu` y `nav-boton-regresar` para llamar a la función `alternarSubmenu` y `regresarMenu` de la referencia o instancias expuestas del componente.

</section>

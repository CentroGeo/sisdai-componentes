<script setup>
import EjemploBasico from "../../.vitepress/components/navegacion-principal/basico.vue";
import EjemploContenidoPersonalizado from "../../.vitepress/components/navegacion-principal/contenido-personalizado.vue";
</script>

# Navegación principal

El componente `SisdaiNavegacionPrincipal` generalmente contiene la lista de enlaces a las secciones del sitio, identidad y otros enlaces relevantes.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiNavegacionPrincipal`, incorpora en tu plantilla. A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiNavegacionPrincipal> ...contenido </SisdaiNavegacionPrincipal>
```

</section>

<section id="api">

## API

### Propiedades

- `navInformacion`: para la versión móvil, es el contenido que se muestra debajo de la barra de navegación. Se usa generalmente para mostrar el nombre de la sección actual del sitio.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `ref`: referencia del componente que sirve como instancia para acceder a las variables o métodos expuestos de abrir o cerrar menús.
  - Tipo: `String`
  - Requerido: sí

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

#### predeterminado

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

De acuerdo a la semántica de HTML y las reglas de CSS definidas en Sisdai Css, los enlaces deberán estar contenidos en un [elemento lista desordenada](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul).En caso de tener un router, el elemento `<a>` podría ser reemplazado por el componente `<RouterLink>`, conservando las clases de estilo necesarias.

Cuando se agregue contenido personalizado, **es importante incluir** la clase CSS `nav-menu` al elemento `<ul>` y `nav-submenu` al otro elemento `<ul>` que maneja la subnavegación. Esto asegura que la funcionalidad de enfocar con el teclado opere correctamente.

Se debe agregar el atributo `exact` al primer elemento de la lista de navegación para que el estilo de la sección actual en el menú se active exactamente cuando la ruta esté seleccionada.

##### identidad

- Requerido: no
- Contenido predeterminado: Logotipo de Conahcyt

Slot para el contenido de identidad del sitio, donde se despliegan los logos del mismo.Se recomienda usar las clases CSS de Sisdai Css. Por ejemplo, la clase `color-invertir` ayuda a que en la función vista oscura del menú de accesibilidad, los colores del logo o imagen en formato SVG se inviertan y contrasten en blanco con el fondo de la barra de navegación principal.

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

Slot para contenido adicional del sitio, ideal para incluir enlaces externos u otros recursos complementarios.

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

## Ejemplos de uso

### Ejemplo básico

Usando el contenido predeterminado:

<!-- <utils-ejemplo-doc ruta="navegacion-principal/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/navegacion-principal/basico.vue

Agregando contenido personalizado.

<!-- <utils-ejemplo-doc ruta="navegacion-principal/contenido-personalizado.vue"/> -->
<EjemploContenidoPersonalizado />
<<< @/.vitepress/components/navegacion-principal/contenido-personalizado.vue

Subnavegación en versión móvil

Para que la subnavegación en la versión móvil se abra y cierre, se deberá agregar al elemento de lista `ul` con el selector `nav-submenu` la clase dinámica CSS `abierto`, basada en la condición de que la variable `submenuEstaAbierta` esté activa.

Dicha alternancia se puede lograr mediante un evento de clic en los elementos `button` con los selectores `nav-boton-submenu` y `nav-boton-regresa`r para llamar a la función `alternarSubmenu` y `regresarMenu` de la referencia o instancias expuestas del componente.

</section>

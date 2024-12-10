<script setup>
import EjemploBasico from "../../.vitepress/components/pestanias/basico.vue";
import EjemploVis from "../../.vitepress/components/pestanias/ejemplo-visualizacion.vue";
</script>

# Pestañas

El componente `SisdaiPestanias` controla de forma interactiva la visibilidad de un
conjunto de elementos por sección en diferentes paneles. Cada panel con
el contenido asociado a la etiqueta de la pestaña se muestra conforme a
esta está activada.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiPestanias` es
necesario seguir los siguientes lineamientos:

<ul>
  <li>
    Asociar el nombre del <code>aria-labelledby</code> del elemento con el
    atributo <code>role="tablist"</code> al id del título de la
    visualización o indicar <code>arial-label</code> para que las
    tecnologías de asistencia lo reconozcan.
  </li>
  <li>
    Es importante que solo el primer botón o pestaña del
    <code>tablist</code> contenga el estado
    <code>aria-selected="true"</code> y lo demás en
    <code>false</code> para que al iniciar el componente sea la primera
    opción mostrada y enfocada/activa.
  </li>
  <li>
    Es necesario que los botones que no estén activos al iniciar deberán
    tener el atributo <code>tabindex="-1"</code> para enfocar el elemento,
    pero no ser accesible a través de la navegación secuencial del
    teclado.
  </li>
  <li>
    Es importante que cada botón del <code>tablist</code> tenga su id
    porque cada elemento con el atributo <code>role="tabpanel"</code> lo
    necesitará para su nombre de etiqueta <code>aria-labelledby</code>.
  </li>
  <li>
    Del mismo modo, cada elemento <code>tabpanel</code> deberá tener un id
    para que apunte desde el <code>aria-controls</code> de cada elemento
    <code>tab</code> o botón del <code>tablist</code>.
  </li>
  <li>
    Recomendamos agregar el atributo <code>tabindex="0"</code> a cada uno
    de los elementos <code>tabpanel</code> para que la usuaria logre
    enfocar el panel de la pestaña con la navegación secuencial del
    teclado en caso de que el contenido del panel no tenga elementos
    enfocables.
  </li>
</ul>
<p>
  El enfoque por teclado funciona manualmente, es decir, hay que presiona
  la tecla enter o barra espaciadora para activar la pestaña enfocada al
  presionar las flechas izquierda/derecha y mostrar el panel.
</p>

A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiPestanias />
```

Vista simplificada

En la vista simplificada el componente `SisdaiPestanias` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

### Propiedades

- `idAriaLabelledby`: id con el nombre de la etiqueta para que las tecnologías de asistenia reconozcan el título del tablist.
  - Tipo de dato: `String`
  - Valor predeterminado: `'id-unico-titulo'`
  - Requerido: recomendado

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'contenido-pestanias'`: en este se indican los botones o pestañas con el `role="tab"` que van dentro del `tablist`. Tiene el siguiente `html` predeterminado dentro del slot:

```html
<slot name="contenido-pestanias">
  <button
    id="idpestania-uno"
    type="button"
    role="tab"
    aria-selected="true"
    aria-controls="idpestaniapanel-uno"
  >
    Pestaña 1
  </button>
  <button
    id="idpestania-dos"
    type="button"
    role="tab"
    aria-selected="false"
    aria-controls="idpestaniapanel-dos"
    tabindex="-1"
  >
    Pestaña 2
  </button>
  <button
    id="idpestania-tres"
    type="button"
    role="tab"
    aria-selected="false"
    aria-controls="idpestaniapanel-tres"
    tabindex="-1"
  >
    Pestaña 3
  </button>
  <button
    id="idpestania-cuatro"
    type="button"
    role="tab"
    aria-selected="false"
    aria-controls="idpestaniapanel-cuatro"
    tabindex="-1"
    disabled
  >
    Pestaña Deshabilitada
  </button>
</slot>
```

- `'contenido-paneles'`: en este se indican los paneles de contenido con el `role="tabpanel"` que están asociados al botón o pestaña/tab del `tablist`. Tiene el siguiente `html` predeterminado dentro del slot:

```html
<slot name="contenido-paneles">
  <div
    id="idpestaniapanel-uno"
    role="tabpanel"
    aria-labelledby="idpestania-uno"
  >
    <p>Contenido de la pestaña 1</p>
  </div>
  <div
    id="idpestaniapanel-dos"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="idpestania-dos"
    hidden
  >
    <p>Contenido de la pestaña 2</p>
  </div>
  <div
    id="idpestaniapanel-tres"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="idpestania-tres"
    hidden
  >
    <p>Contenido de la pestaña 3</p>
  </div>
  <div
    id="idpestaniapanel-cuatro"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="idpestania-cuatro"
    hidden
  >
    <p>Contenido de la pestaña 4</p>
  </div>
</slot>
```

</section>
<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

<utils-ejemplo-doc ruta="pie-pagina-conahcyt/basico.vue"/>
<EjemploBasico />
<<< @/.vitepress/components/pestanias/basico.vue

### Ejemplo en contenedor de visualización

<EjemploVis />
<<< @/.vitepress/components/pestanias/ejemplo-visualizacion.vue

</section>

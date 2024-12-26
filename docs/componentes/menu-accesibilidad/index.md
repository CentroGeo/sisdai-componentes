<script setup>
import EjemploBasico from "../../.vitepress/components/menu-accesibilidad/basico.vue";
import EjemploAgregandoOpciones from "../../.vitepress/components/menu-accesibilidad/agregando-opciones.vue";
</script>

# Menu de accesibilidad

El componente `SisdaiMenuAccesibilidad` permite ejecutar las funciones que agregan reglas de accesibilidad al sitio web. Consulte la [sección de accesibilidad del Sisdai](https://sisdai.conahcyt.mx/accesibilidad/) para más información.

El componente cuenta con cuatro opciones de accesibilidad predeterminadas:

- Cambio de fuente
- Enlaces subrayados
- Mostrar solo texto
- Vista oscura

<section id="uso">

## Uso

Para utilizar el componente `SisdaiMenuAccesibilidad`, incorpora el componente en tu plantilla. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiMenuAccesibilidad />
```

La función de “Vista oscura” transita entre el tema claro y el oscuro. De manera predeterminada al entrar a la aplicación la vista muestra la función automática. Esto significa que, dependiendo de los ajustes del navegador para la apariencia web, se muestra el tema elegido. Una vez que se interactúa con el menú, se puede cambiar entre clara u oscura.

También se cuenta con perfiles o paletas de color para los estilos de las etiquetas básicas HTML y componentes del Sisdai. Estos perfiles se actualizan desde las variables de la biblioteca
[Sisdai CSS](https://github.com/CentroGeo/sisdai-css).

Al utilizar el Menú de accesibilidad, el perfil de color predeterminado es el de la paleta `sisdai`. Esta se puede modificar mediante la propiedad `perfilColor` del componente con los valores disponibles de `sisdai`, `gema` o `eni`. Como se muestra a continuación:

```html
<SisdaiMenuAccesibilidad perfilColor="eni" />
```

Vista simplificada

En la vista simplificada el componente `SisdaiMenuAccesibilidad` responde a la regla de adaptar todos los elementos botón en forma e interacción de hipervínculos.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades, métodos y eventos:

### Propiedades

- `agregarOpciones`: lista de opciones que se agrega al Menú de accesibilidad.
  - Tipo: `Array<Object>`
  - Valor predeterminado: `[]`
  - Requerido: no

Cada opción debe ser un objeto con los siguientes atributos:

```js
{
  accion: <String> 'Nombre de la acción al dar click en la opción.',
  claseCss: <String> 'Nombre de la clase css de la opción.',
  icono: <String> 'Visible a un costado del titulo.',
  titulo: <String> 'Visible en la lista del menú abierto.',
}
```

- `objetoStore`: objeto store completo del proyecto.
  - Tipo de dato: `Object`
  - Valor predeterminado: `{}`
  - Requerido: no
- `perfilColor`: seleciona el perfil o paleta de color desde la biblioteca de estilos. Los perfiles disponibles son: `predeterminada`, `gema`, `eni`.
  - Tipo de dato: `String`
  - Valor predeterminado: `predeterminada`
  - Requerido: no

#### Variables expuestas

- `clasesSelecciondas`: arreglo de clases que se mantienen activas con el menú de accesibilidad. Use esta variable para facilitar la relación de interacción del menú de accesibilidad con la vista.
  - Tipo de dato: `Array<String>`
  - Valor predeterminado: `[]`

### Métodos

- **alternarEstado:** cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Menú de accesibilidad.

### Eventos

- **@alSeleccionarOpcion**
  - Descripción: se ejecuta al dar clic en una opción del menú de accesibilidad.
  - Parámetros: `Object`: objeto que contiene los atributos de la opción seleccionada al dar clic.
- **@alRestablecer**
  - Descripción: se ejecuta cuando se ha dado clic en el botón "Restablecer".

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

<!-- <utils-ejemplo-doc ruta="menu-accesibilidad/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/menu-accesibilidad/basico.vue

### Agregando opciones de accesibilidad

Junto con el uso de la propiedad `agregarOpciones` para añadir reglas de accesibilidad, también es necesario declarar las reglas CSS de los elementos HTML que se deseen afectar:

<!-- <utils-ejemplo-doc ruta="menu-accesibilidad/agregando-opciones.vue"/> -->
<EjemploAgregandoOpciones />
<<< @/.vitepress/components/menu-accesibilidad/agregando-opciones.vue

</section>

<section id="store">

## Store

Este componente puede o no contar con un módulo de store en estructura de [Pinia](https://pinia.vuejs.org/) con variables de estado y acciones para cada una de las opciones predeterminadas:

- Módulo: `useAccesibilidadStore`
  - Variable: `clasesAccesibles` (de tipo Array en `[]` predeterminado).
  - Acción: `modificarClasesAccesibles` (con parámetro `valor` para el Array que modifica).

Además de una acción extra que restablece los valores de todas las variables:

- `restablecer`:
  Cambia el valor de todas la variables de `clasesAccesibles` a `[]` (sin parámetros).

### Propiedades de store

- `objetoStore`: objeto store completo del proyecto.
  - Tipo: `Object`
  - Valor predeterminado: `{}`
  - Requerido: no

</section>

<section id="ejemplos-con-store">

## Ejemplos de uso

### Ejemplo con uso de store

**Conectar con store**

Guardar el estado de las variables de accesibilidad en el store permite que interactúen con la reactividad de componentes complejos que estén a un nivel profundo en la organización del proyecto.

Por ejemplo, si en una visualización se requiere que la vista muestre una configuración definida cuando se active la funcionalidad de "Mostrar solo texto", se puede acceder al estado de esa variable importando el módulo de accesibilidad en el store:

```html
<script setup>
  import { useAccesibilidadStore } from '@/store'
  const store = useAccesibilidadStore()
</script>

<SisdaiVisualizacion>
  <SisdaiGrafico
    v-show="!store.clasesAccesibles.includes('a11y-simplificada')"
  />

  <table v-show="store.clasesAccesibles.includes('a11y-simplificada')" />
</SisdaiVisualizacion>
```

**Accesibilidad en el store**

Para hacer uso del módulo de accesibilidad en el store [Pinia](https://pinia.vuejs.org/), se necesita la siguiente configuración en el archivo `@/store/index`:

```js
import { useAccesibilidadStore } from 'sisdai-componentes/src/stores'
```

**Conectar componente con store**

Para conectar los eventos del Menú de accesibilidad con el store [Pinia](https://pinia.vuejs.org/) , se puede usar la siguiente configuración:

```html
<script setup>
  import { useAccesibilidadStore } from '@/store'
  const store = useAccesibilidadStore()
</script>

<template>
  <div :class="store.clasesAccesibles">
    <SisdaiSisdaiMenuAccesibilidad
      @alSeleccionarOpcion="
        ({ claseCss }) => store.modificarClasesAccesibles(claseCss)
      "
      @restablecer="store.restablecer"
    />
    ...
  </div>
</template>
```

**Propiedad objetoStore**

```html
<script setup>
  import { useAccesibilidadStore } from '@/store'
  const store = useAccesibilidadStore()
</script>

<template>
  <div :class="store.clasesAccesibles">
    <SisdaiSisdaiMenuAccesibilidad :objetoStore="store" />
    ...
  </div>
</template>
```

</section>

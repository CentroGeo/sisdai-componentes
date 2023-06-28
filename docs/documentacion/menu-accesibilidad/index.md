---
layout: LayoutDocumentacion
---

# MenuAccesibilidad

El Menú de accesibilidad permite ejecutar a las funciones que agregan reglas de accesibilidad al sitio web. Consulte la [sección de accesibilidad del Sisdai](https://sisdai.conacyt.mx/accesibilidad/introduccion) para más información.

El componente cuenta con cuatro opciones de accesibilidad predeterminadas:

- Tipografía accesible
- Vista simplificada
- Enlaces subrayados
- Vista oscura

Uso:

```html
<SisdaiMenuAccesibilidad />
```

<section id="api">

## API

### Propiedades

- **agregarOpciones**
  Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto con los siguientes atributos:

  ```js
  {
    accion: <String> 'Nombre de la acción al dar click en la opción.',
    claseCss: <String> 'Nombre de la clase css de la opción.',
    icono: <String> 'Visible a un costado del titulo.',
    titulo: <String> 'Visible en la lista del menú abierto.',
  }
  ```

  - Tipo: `Array`
  - Valor predeterminado: `[]`
  - Requerido: no

### Metodos

- **alternarEstado**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Menú de accesibilidad.

### Eventos

- **@alSeleccionarOpcion**
  Se ejecuta al dar click en una opción del menú de accesibilidad.

  Parametros:

  - `String`: Objeto que contiene los atributos de la opción seleccionada al dar click.

- **@restablecer**
  Se ejecuta cuanso se ha dado click en el botón "Restablecer".

### Slots

Este componente no permite contenido con slots

</section>

<section id="ejemplos">

## Ejemplos

#### Opciones por default

Para que se apliquen las reglas de accesibilidad definidas por la biblioteca sisdai-css, es necesario agregar las clases a11y en el contenedor de las vistas. Para proyectos con [Vue](https://vuejs.org/) se sugiere hacerlo en el archivo `src/App.vue` de la siguiente manera:

<utils-ejemplo-doc ruta="menu-accesibilidad/basico.vue"/>

#### Agregando opciones de accesibilidad

Junto con el uso de la propiedad `agregarOpciones` para añadir reglas de accesibilidad, también es necesario declarar las reglas css de los elementos html que se deseen afectar:

<utils-ejemplo-doc ruta="menu-accesibilidad/agregando-opciones.vue"/>

</section>

<section id="store">

## Store

Este componente cuenta con un módulo de store en estructura de [Vuex](https://vuex.vuejs.org/) con variables y mutaciones para cada una de las opciones predeterminadas:

- Tipografía accesible
  - Variable: `tipografia_accesible` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarTipografiaAccesible` (sin parámetros).
- Vista simplificada
  - Variable: `vista_simplificada` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarVistaSimplificada` (sin parámetros).
- Enlaces subrayados
  - Variable: `enlaces_subrayados` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarEnlacesSubrayados` (sin parámetros).
- Vista Oscura
  - Variable: `vista_oscura` (de tipo boleano en `false` por defecto).
  - Mutación: `alternarVistaOscura` (sin parámetros).

Además de una mutación extra que restablece los valores de todas las variables:

- `restablecer`:
  Cambia el valor de todas las variables de accesibilidad a `false` (sin parámetros).

### Propiedades de store

- **objetoStore**
  Objeto store completo del proytecto.

  - Tipo: `Object`
  - Valor predeterminado: `{}`
  - Requerido: no

- **nombreModuloStore**
  Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de `accesibilidad`, se debe introducir el nombre del modulo en esta propiedad.

  - Tipo: `String`
  - Valor predeterminado: `accesibilidad`
  - Requerido: no

</section>

<section id="ejemplos-con-store">

## Ejemplos con store

#### Conectar con store

Guardar el estado de las variables de accesibilidad en el store, permite que interactúen con la reactividad de componentes complejos que estén a un nivel profundo en la organización del proyecto.

Por ejemplo, si en una visualización se requiere que la vista muestre una configuración definida cuando se active la "Vista simplificada", se puede acceder al estado de esa variable importando el modulo de accesibilidad en el store:

```html
<script setup>
  import store from '@/store'
</script>

<SisdaiVisualizacion>
  <SisdaiGrafico v-show="!store.state.accesibilidad.vista_simplificada" />

  <table v-show="store.state.accesibilidad.vista_simplificada" />
</SisdaiVisualizacion>
```

<br />

**Accesibilidad en el store**

Para hacer uso del módulo de accesivilidad en el store [Vuex](https://vuex.vuejs.org/), se necesita la siguiente configuración en el archivo `@/store/index`:

```js
import accesibilidad from 'sisdai-componentes/src/stores'

export default new Vuex.Store({
  modules: {
    accesibilidad,
    ...
  },
  ...
})
```

<br />

**Conectar componente con store**

Para conectar los métodos de el menú de accesibilidad con el store [Vuex](https://vuex.vuejs.org/), se puede usar la siguiente configuración:

```html
<script setup>
  import store from '@/store'
</script>

<template>
  <div :class="store.getters['accesibilidad/clasesAccesibles']">
    <SisdaiSisdaiMenuAccesibilidad
      @alSeleccionarOpcion="
        ({ accion }) => store.commit(`accesibilidad/${accion}`)
      "
      @restablecer="store.commit('accesibilidad/restablecer')"
    />
    ...
  </div>
</template>
```

<br />

**Propiedad objetoStore**

Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de **accesibilidad** de debe usar la propiedad `nombreModuloStore` para que funcione correctamente.

```html
<script setup>
  import store from '@/store'
</script>

<template>
  <div :class="store.getters['accesibilidad/clasesAccesibles']">
    <SisdaiSisdaiMenuAccesibilidad :objetoStore="store" />
    ...
  </div>
</template>
```

</section>

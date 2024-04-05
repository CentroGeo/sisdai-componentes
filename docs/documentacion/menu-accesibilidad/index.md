---
layout: LayoutDocumentacion
---

# MenuAccesibilidad

El Menú de accesibilidad permite ejecutar a las funciones que agregan reglas de accesibilidad al sitio web. Consulte la [sección de accesibilidad del Sisdai](https://sisdai.conahcyt.mx/accesibilidad/) para más información.

El componente cuenta con cuatro opciones de accesibilidad predeterminadas:

- Cambio de fuente
- Enlaces subrayados
- Mostrar solo texto
- Vista oscura

Uso:

```html
<SisdaiMenuAccesibilidad />
```

La función de Vista oscura transita entre el tema claro y el oscuro. Por defecto al entrar a la aplicación la vista muestra la función automática, esto es, dependiendo de los ajustes de tu navegador para la apariencia web se muestra el tema elegido. Una vez que se interactúa con el menú puedes cambiar entre clara u oscura.

También se cuenta con perfiles o paletas de color para los estilos de las etiquetas básicas html y componentes del Sisdai. Estos perfiles se actualizan desde las variables de la biblioteca [Sisdai Css](https://codigo.conahcyt.mx/sisdai/sisdai-css).

Al utilizar el Menú de accesibilidad, el perfil de color por defecto es el de la paleta de `eni`. Esta se puede modificar mediante la propiedad `perfilColor` del componente con los valores disponibles de `gema` o `sisdai`. Como se muestra a continuación:

```html
<SisdaiMenuAccesibilidad perfilColor="sisdai" />
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

- **objetoStore**
  Objeto store completo del proyecto.

  - Tipo: `Object`
  - Valor predeterminado: `{}`
  - Requerido: no

- **nombreModuloStore**
  Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de `accesibilidad`, se debe introducir el nombre del modulo en esta propiedad.

  - Tipo: `String`
  - Valor predeterminado: `accesibilidad`
  - Requerido: no

- **perfilColor**
  Seleciona el perfil o paleta de color desde la biblioteca de estilos. Los perfiles disponibles son: `eni`, `gema`, `sisdai`.

  - Tipo: `String`
  - Valor predeterminado: `eni`
  - Requerido: no

### Métodos

- **alternarEstado**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Menú de accesibilidad.

### Variables

- **clasesSelecciondas**
  Arreglo de clases que se mantienen activas con el menú de accesibilidad, use esta variable para facilitar la relación de interacción del menú de accesibilidad con la vista.

  - Tipo: `Array<String>`
  - Valor inicial: `[]`

- **tema**
  Tema o modo de color con el que inicializa la aplicación. Los temas disponibles son: `auto`, `clara`, `oscura`.
  - Tipo: `String`
  - Valor inicial: `auto`

### Eventos

- **@alSeleccionarOpcion**
  Se ejecuta al dar click en una opción del menú de accesibilidad.

  Parametros:

  - `Object`: Objeto que contiene los atributos de la opción seleccionada al dar click.

- **@alRestablecer**
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

Este componente puede o no contar con un módulo de store en estructura de [Vuex](https://vuex.vuejs.org/) con variables y mutaciones para cada una de las opciones predeterminadas:

- Clases accesibles
  - Variable: `clasesAccesibles` (de tipo Array en `[]` por defecto).
  - Mutación: `modificarClasesAccesibles` (con parámetro `valor` para el Array que modifica).

Además de una mutación extra que restablece los valores de todas las variables:

- `restablecer`:
  Cambia el valor de todas la variables de `clasesAccesibles` a `[]` (sin parámetros).

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

Por ejemplo, si en una visualización se requiere que la vista muestre una configuración definida cuando se active la funcionalidad de "Mostrar solo texto", se puede acceder al estado de esa variable importando el módulo de accesibilidad en el store:

```html
<script setup>
  import store from '@/store'
</script>

<SisdaiVisualizacion>
  <SisdaiGrafico
    v-show="!store.state.accesibilidad.clasesAccesibles.includes('a11y-simplificada')"
  />

  <table
    v-show="store.state.accesibilidad.clasesAccesibles.includes('a11y-simplificada')"
  />
</SisdaiVisualizacion>
```

<br />

**Accesibilidad en el store**

Para hacer uso del módulo de accesibilidad en el store [Vuex](https://vuex.vuejs.org/), se necesita la siguiente configuración en el archivo `@/store/index`:

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

Para conectar los eventos del Menú de accesibilidad con el store [Vuex](https://vuex.vuejs.org/), se puede usar la siguiente configuración:

```html
<script setup>
  import store from '@/store'
</script>

<template>
  <div :class="store.state.accesibilidad.clasesAccesibles">
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

Si el nombre del módulo de accesibilidad en el store del proyecto es diferente de **accesibilidad** de debe usar la propiedad `nombreModuloStore` para que funcione correctamente.

```html
<script setup>
  import store from '@/store'
</script>

<template>
  <div :class="store.state.accesibilidad.clasesAccesibles">
    <SisdaiSisdaiMenuAccesibilidad :objetoStore="store" />
    ...
  </div>
</template>
```

</section>

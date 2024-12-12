---
home: false
title: Uso de los componentes
---
# Uso de los componentes

Una vez instalada la biblioteca y los estilos, hay varias maneras de empezar a usar los componentes en tu proyecto:

## Opción 1: Registro global de componentes

En el archivo de inicialización del proyecto de Vue, puedes registrar globalmente los componentes que desees utilizar. Esta es la opción recomendada, ya que asegura que solo se registren los componentes que estás usando.

Generalmente, el archivo es ‘src/main.js’:

```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { SisdaiNavegacionPrincipal } from 'sisdai-componentes/src/componentes'

app.use(SisdaiNavegacionPrincipal)

app.mount('#app')
```

## Opción 2: Registro local de componentes

En el componente o vista `.vue` donde desees usar el componente, puedes registrarlo localmente utilizando [Composition API](https://vuejs.org/api/composition-api-setup.html) o [Options API](https://vuejs.org/api/options-state.html).

Composition API:

```html
<script setup>
import SisdaiNavegacionGobMx from 'sisdai-componentes/src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue'
<script>

<template>
  <SisdaiNavegacionGobMx/>
</template>
```

Options API:

```html
<template>
  <SisdaiNavegacionGobMx/>
</template>

<script>
import SisdaiNavegacionGobMx from 'sisdai-componentes/src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue'

export default {
  components:{
    SisdaiNavegacionGobMx
  }
}
<script>
```

## Opción 3: Registro global de todos los componentes

Es posible dar de alta de manera global todos los componentes y directivas de la biblioteca. Esta opción es la más limpia en el código, pero solo es recomendable si se usarán todos los componentes y directivas de la biblioteca en tu proyecto.

Generalmente, el archivo es ‘src/main.js’:

```js
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import SisdaiComponentes from 'sisdai-componentes'

Vue.use(SisdaiComponentes)

app.mount('#app')
```

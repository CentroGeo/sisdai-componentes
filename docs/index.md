---
home: true
title: Documentación
---

# Documentación

El proyecto sisdai-componentes es una biblioteca de componentes reutilizables de Vue alineada al Sistema de Diseño y Accesibilidad para la Investigación [Sisdai](https://sisdai.conahcyt.mx/).

Para el uso se recomienda utilizar Vue **3.4.30** y el soporte para [Composition Api](https://vuejs.org/api/composition-api-setup.html).

<section id="instalacion">

## Instalación

En la carpeta principal de tu proyecto Vue, instala la biblioteca en las dependencias de tu proyecto con el paquete de instalación npm de la siguiente manera:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

Dependiendo de la versión de la biblioteca a instalar, la instrucción anterior puede cambiar a:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

en donde N.N.N indica el número de versión, por ejemplo v1.0.0

**Instalacion de estilos**

Puesto que el estilo de los componentes está ligado a las reglas de [Sisdai](https://sisdai.conahcyt.mx/. Lo siguiente es dar de alta los estilos de [Sisdai Css](https://codigo.conahcyt.mx/sisdai/sisdai-css) en el archivo de inicialización del proyecto.

Si su proyecto tiene configurado el preprocesador `sass` o `scss`

```js
//generalmente es el archivo src/main.js

import 'sisdai-css/src/sisdai.scss'
```

Adicionalmente deberán agregarse las tipografías de Montserrat y Atkinson Hyperlegible de Google fonts en el encabezado `<head></head>` del documento html base de su proyecto:

```html
<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
/>
<link
  href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

**Uso de los componentes**

Una vez instalada la biblioteca y los estilos hay varias maneras de empezar a usar los componentes en su proyecto:

**Opción 1**

En el archivo de inicialización del proyecto de Vue se podrá dar de alta de manera global el componente que desees utilizar.

Esta es la opción recomendada, así se asegura que el proyecto solo esté dando de alta lo que esté ocupando.

```js
//generalmente es el arhivo src/main.js

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { SisdaiNavegacionPrincipal } from 'sisdai-componentes/src/componentes'

app.use(SisdaiNavegacionPrincipal)

app.mount('#app')
```

**Opción 2**

En el componente o vista `.vue` en donde desees ocupar el componente, podrás darlos de alta de manera local en [Composition API](https://vuejs.org/api/composition-api-setup.html).:

```html
<script setup>
import SisdaiNavegacionGobMx from 'sisdai-componentes/src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue'
<script>

<template>
  <SisdaiNavegacionGobMx/>
</template>
```

ó en [Options API](https://vuejs.org/api/options-state.html):

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

**Opción 3**

También es posible dar de alta de manera global todos los componentes y directivas de la biblioteca.

```js
//generalmente es el arhivo src/main.js

import SisdaiComponentes from 'sisdai-componentes'

Vue.use(SisdaiComponentes)
```

Aunque esta forma es la más limpia en el código (porque se ahorra dar de alta cada componente), solo es recomendable si se tiene claro que se están usando todos los componentes y directivas de la biblioteca en su proyecto.

</section>

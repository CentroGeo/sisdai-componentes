---
home: true
title: Documentación
---

# Sisdai Componentes

El proyecto sisdai-componentes es una biblioteca de componentes reutilizables de Vue alineada al Sistema de Diseño y Accesibilidad para la Investigación ([Sisdai](https://sisdai.conahcyt.mx/)). Esta biblioteca tiene como objetivo simplificar y acelerar el desarrollo de aplicaciones Vue, proporcionando componentes predefinidos que cumplen con los estándares de accesibilidad y diseño establecidos por Sisdai.

**Requisitos para uso**

Se recomienda utilizar Vue **3.4** y asegurarse de contar con el soporte para [Composition Api](https://vuejs.org/api/composition-api-setup.html).

<section id="instalacion">

## Instalación

Para instalar la biblioteca en el proyecto Vue, sigue estos pasos:

1. En la carpeta principal de tu proyecto Vue, abre una terminal.
2. Instala la biblioteca en las dependencias de tu proyecto con el siguiente comando npm:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

Dependiendo de la versión de la biblioteca que se desee instalar, el comando puede variar. Por ejemplo, para instalar una versión específica, usa el siguiente comando:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

en donde N.N.N representa el número de versión, por ejemplo v1.0.0

**Instalación de estilos**

Debido a que el estilo de los componentes está ligado a las reglas de [Sisdai](https://sisdai.conahcyt.mx/) es necesario incluir los estilos de [Sisdai Css](https://codigo.conahcyt.mx/sisdai/sisdai-css) en el archivo de inicialización de tu proyecto.

Si tu proyecto tiene configurado el preprocesador `sass` o `scss`, generalmente el archivo es ‘src/main.js’. Añade la siguiente línea para importar los estilos:

```js
import 'sisdai-css/src/sisdai.scss'
```

Adicionalmente, debes agregar las tipografías de Montserrat y Atkinson Hyperlegible de Google Fonts en el encabezado `<head></head>` del documento HTML base de tu proyecto:

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

Una vez instalada la biblioteca y los estilos, hay varias maneras de empezar a usar los componentes en tu proyecto:

**Opción 1: Registro global de componentes**

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

**Opción 2: Registro local de componentes**

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

**Opción 3: Registro global de todos los componentes**

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

</section>

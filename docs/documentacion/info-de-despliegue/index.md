---
layout: LayoutDocumentacion
---

# Información de despliegue

La información de despliegue es un componente que sirve para presentar la información acerca del versionamiento, el ambiente y la fecha de despliegue.

Uso:

La información de despliegue se coloca al final de cada página del sitio encima del último elemento de esta como por ejemplo el Pie de página del Conahcyt.

La información de despliegue sirve principalmente para:

- Dar certeza de la versión en la que se está desplegando actualmente el proyecto

- Brindar información del ambiente ya sea de pruebas, desarrollo o producción

```html
<SisdaiInfoDeDespliegue />
```

Vista simplificada

En la vista simplificada la información de despliegue no se modifica en diseño ni en comportamiento, puesto que solo sirve como de referencia en los ambientes de desarrollo y pruebas.

Es importante mencionar que el componente solo se mostrará cuando se despliegue únicamente en el ambiente de desarrollo y pruebas, no en producción.

<section id="api">

## API

### Propiedades

- **versionProyecto**
  Identificador de versionamiento semántico del proyecto. Este valor se encuentra en el archivo package.json en la propiedad version. Ejemplo: '0.0.1'

  - Tipo: `String`
  - Requerido: sí

- **entornoProyecto**
  Define el entorno o ambiente de programación en el que se encuentre desplegado actualmente el proyecto. Este valor se obtiene de los archivos `.env` con las variables de entorno. Ejemplo: 'desarrollo'

  - Tipo: `String`
  - Requerido: sí

- **actualizacionProyecto**
  Se trata de la fecha en que el proyecto está siendo desplegado. Es decir, toma el momento actual del día, mes, año y hora centrada en América y Ciudad de México. Ejemplo: '1/01/2023, 12:00:00'

  - Tipo: `String`
  - Requerido: sí

Para el proyecto en donde se instale este componente es necesario crear archivos `.env` con las variables de entorno para el ambiente de pruebas, desarrollo y producción según sea el caso. Estos deben contar al menos con la siguiente variable:

```bash
NODE_ENV = ambiente
```

De esta manera la obtenemos por medio del `process.env.NODE_ENV` y la configuramos en el plugin del webpack en el archivo `vue.config.js`, así como la versión del package y la fecha de despliegue de la siguiente manera:

```js
const webpack = require('webpack')
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0
const now = new Date()
/**
 * Configuración de compilación de vue
 * @see https://cli.vuejs.org/config/
 */
module.exports = defineConfig({
  /**
   * @property {object} [] Si el valor es un Objeto, se fusionará en la configuración final usando
   * webpack-merge.
   *
   * @see https://cli.vuejs.org/config/#configurewebpack
   */
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_VERSION': `"${version}"`,
        'process.env.DATE_DEPLOY': `"${now.toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City',
        })}"`,
        'process.env.ENV_DEPLOY': `"${process.env.NODE_ENV}"`,
      }),
    ],
  },
})
```

Finalmente estas variables de entorno, se pueden utilizar al momento de asignar las props del componente de manera computada:

```js
const versionProyecto = computed(() => {
  return process.env.PACKAGE_VERSION
})

const actualizacionProyecto = computed(() => {
  return process.env.DATE_DEPLOY
})

const entornoProyecto = computed(() => {
  return process.env.ENV_DEPLOY
})
```

### Métodos

Este componente no cuenta con métodos publicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no utiliza slots.

</section>

<section id="ejemplos">

## Ejemplos

A continuación se presenta el componente usando las propiedades computadas de manera local, sin embargo es recomendable que esas propiedades se obtengan de las variables de entorno como se mencionó anteriormente.

<utils-ejemplo-doc ruta="info-de-despliegue/basico.vue"/>

</section>

# sisdai-componentes

El proyecto sisdai-componentes es una biblioteca de componentes reutilizables de
Vue alineada al Sistema de Diseño y Accesibilidad para la Investigación
([Sisdai](https://sisdai.conahcyt.mx)).

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla
en su equipo a través del **protocolo HTTPS**.

## Utilidades

- Homologa los estilos utilizando el sistema de diseño [Sisdai](https://sisdai.conahcyt.mx).
- Mejora la accesibilidad mediante el uso de html semántico y aplicando las reglas establecidad en [Sisdai](https://sisdai.conahcyt.mx).
- Facilita la actualización de elementos institucionales requeridos como cabeceras y pies de páginas que se editan cada año.
- Facilita y reduce el código de elementos de uso común como barras de navegación, menús, tarjetas, etc.

## Instalación y uso

Si tu proyecto esta creado con [sisdai-proyecto-base](https://codigo.conahcyt.mx/sisdai/sisdai-proyecto-base) tiene incluida una versión estable de sisdai-componentes y no requiere ningún paso de instalación ni importación.

### Instala la biblioteca

En la carpeta principal de tu proyecto Vue, instala la biblioteca a las dependencias de tu proyecto con:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

Dependiendo de la versión de la biblioteca a instalar, la instrucción anterior puede cambiar a:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

### Importa la biblioteca

En el archivo `main.js` de tu proyecto Vue, importa todos los componentes de la biblioteca con:

```js
// src/main.js

import SisdaiComponentes from 'sisdai-componentes/src/index'

Vue.use(SisdaiComponentes)
```

### Uso

En cualquier vista en la sección `<template>` de tu proyecto puedes utilizar cualquier componente de la biblioteca, sin necesidad de importarlo en el script. Por ejemplo:

```js
<template>

  <SisdaiBotonFlotante :enlaces="[{...}]" />

</template>
```

## Actualizarion de la biblioteca

Si actualmente utilizas la biblioteca y necesitas utilizar otra version de los componentes, en la carpeta del proyecto en donde necesitas la actualización instala la version que requieres nuevamente

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

## Listado de componentes

| Componente                 | Descripcion                                                                                                                                                                             | Propiedades                                                                                                                                    | Secciones (v-slot)                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| SisdaiBotonFlotante        | Botón circular fijo en la pantalla que se expande para mostrar multiples enlaces                                                                                                        | :enlaces="`[{arreglo de objetos}]`"                                                                                                            | NA                                                |
| SisdaiColapsableNavegacion | Botón para mostrar/ocultar secciones de la navegacion en el menú lateral                                                                                                                | titulo="`texto`" :activo="`boleano`"                                                                                                           | `<template v-slot:listado-contenido>`             |
| SisdaiIndiceDeContenido    | Menú de navegación para el contenido de una vista                                                                                                                                       | titulo="`texo`" :altura="`número entero`" id_indice="`texto`"                                                                                  | `<template slot="contenido-indice-de-contenido">` |
| SisdaiInfoDeDespliegue     | Información acerca del versionamiento, el ambiente y la fecha de despliegue                                                                                                             | versionProyecto="`texto`" entornoProyecto="`text`" actualizacionProyecto="`texto`"                                                             | NA                                                |
| SisdaiMenuAccesibilidad    | El Menú de accesibilidad para activar/desactivar funciones de accesibilidad en el sitio web. Este componente requiere de las variables globales del store `src/stores/accesibilidad.js` | :agregarOpciones="`[arreglo]`" nombreModuloStore="`texto`" :objetoStore="`{objeto}`"                                                           | NA                                                |
| SisdaiMenuLateral          | Menú fijo lateralmente que se colapsa en dispositivos pequeños                                                                                                                          | NA                                                                                                                                             | `<template slot="contenido-menu-lateral">`        |
| SisdaiNarrativaScroll      | Sección que muestra contenido y cambia la imagen de fondo, dependiendo de la posición del scroll                                                                                        | id_scroll="`texto`" bullets="`[{arreglo de objetos}]`" :depurador="`boleano`" :altura_sensor="`número decimal`" :degradado_inicial="`boleano`" | NA                                                |
| SisdaiNavegacionGobMx      | Barra de navegación del Gobierno de México                                                                                                                                              | NA                                                                                                                                             | NA                                                |
| SisdaiNavegacionPrincipal  | Barra de navegacion principal del sitio. Dentro de sus etiquetas se agrega el menú principal del sitio.                                                                                 | navInformacion="`html`" :fija="`boleano`"                                                                                                      | `<template v-slot:identidad>`                     |
| SisdaiPiePaginaConahcyt    | El pie de página del Conahcyt es un componente compartido en todos los Ecosistemas Nacionales de Información                                                                            | NA                                                                                                                                             | NA                                                |
| SisdaiPiePaginaGobMx       | El pie de página del Gobierno de México es uno de los elementos específicos que deben de cumplir Dependencias y Organismos de la Administración Pública Federal                         | NA                                                                                                                                             | NA                                                |

## Uso local del proyecto

### Pasos previos recomendados

Para desarrollar este proyecto se usó [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Dado lo anterior las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^18)](https://nodejs.org/en/download/)
- [npm (^9)](https://www.npmjs.com/get-npm)

### Instalación

Se puede clonar e instalar este proyecto en tu equipo
utilizando **solo el protocolo HTTPS**, es decir:

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-componentes.git
```

Establece la versión adecuada de npm y nvm (previamente instaladas).

```bash
nvm use 18
```

Instala las dependencias de la biblioteca.

```bash
npm install
```

En cambio si se quiere instalar esta biblioteca para su uso en otro proyecto se puede hacer:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

Dependiendo de la versión de la biblioteca a instalar, la instrucción anterior puede cambiar a:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

Así mismo también se puede agregar la biblioteca en el archio `package.json` de otro
proyecto.

### Documentación

Este proyecto cuenta con una documentación más extensa que aún está
en proceso de desarrollo. Es posible levantarla en un ambiente local con la
instrucción:

```bash
npm run docs
```

## Licencia

**SOFTWARE LIBRE Y ESTÁNDARES ABIERTOS**

Sisdai y sisdai-componentes están alineadas a las disposiciones establecidas por
la Coordinación de Estrategia Digital Nacional (
DOF:06/09/2021) en donde se estipula que las "políticas y disposiciones tienen
como objetivo fortalecer el uso del software
libre y los estándares abiertos, fomentar el desarrollo de aplicaciones
institucionales con utilidad pública, lograr la
autonomía, soberanía e independencia tecnológicas dentro de la APF". En el
artículo 63 se explicita que "cuando se trate
de desarrollos basados en software libre, se respetarán las condiciones de su
licenciamiento original [...]".

Considerando lo anterior sisdai-componentes se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio. Mientras que el equipo del sistema de diseño [Sisdai](https://sisdai.conahcyt.mx/acerca-de) se encargará de mantenerlo.

---

### ¿Como agregar nuevos componentes?

#### Estructura

- Los nuevos componentes se agregan en la carpeta `src/componentes`.
- Cada componente se agrega en su propio
  directorio `src/componentes/nuevo-componente`.
- Dentro la carpeta de cada componente deberan existir todos los archivos
  necesarios para dar funcionalidad a ese componente.
- El archivo con extensión `.vue` y un `index.js` son necesarios

Ejemplo de estructura

```bash
sisdai-componentes/
└── src
    └── componentes
        └── componente-nuevo    #carpeta del componente
            ├── ComponenteNuevo.vue
            └── index.js
```

#### Componente .vue

- Para el desarrollo se
  usa [Composition API](https://vuejs.org/guide/introduction.html#composition-api)
- Se evita el uso de preprocesadores de estilos, se usa css en vez de scss o
  sass
- En la medida de lo posible se evita la llamada de métodos al router de vue, si
  un componente por su funcionalidad requiere de esta dependencia o de otra
  similar debera especificarlo en la documentación de uso del componente.
- Apegarse a los estilos de código definidos en las configuraciones del
  proyecto: _eslint, prettier,editorconfig y vscode-settings_.

#### Script de instalación en index.js

Dentro del archivo `index.js` que acompaña al componente se agregara un código
de instalación como el siguiente:

```javascript
// /src/componentes/componente-nuevo/index.js

import ComponenteNuevo from './ComponenteNuevo.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(ComponenteNuevo.__name, ComponenteNuevo)
  },
}

export default plugin
```

Para que funcione el archivo anterior debera integrarse con los
archivos `src/index.js` y `src/componentes/index.js`. Cuando se agregue un nuevo
componente también deberán de modificarse estos mismos.

```bash
sisdai-componentes/
└── src
    ├── componentes
    │   ├── componente-nuevo
    │   │   ├── ComponenteNuevo.vue
    │   │   └── index.js   #index de componente-nuevo/
    │   └── index.js    #index de componentes/
    └── index.js     #index de src/


```

En el siguiente archivo se indexan todos los componentes para que sean
accesibles a nivel `src/componentes`

```javascript
// /src/componentes.js
import ComponenteNuevo from './componente-nuevo'

export {
...
ComponenteNuevo, // agregar al final de las exportaciones
}

```

Finalmente en el siguiente archivo se agrega el nuevo componente al script
global de instalación

```js
// /src/index.js

import {

...
ComponenteNuevo, //se importa el componente
}
from
'./components'

const plugin = {
  install: function (Vue) {
  ...
    Vue.use(ComponenteNuevo) // y se agrega el vue.use al final de este bloque
  },
}

export default plugin
```

#### Uso del store en componentes

Los componentes que hagan uso de variables de estado globales podrán hacerlo,
pero sin comprometer o condicionar el funcionamiento de la biblioteca en general
a tener un _store_ de requisito, es decir, si la aplicación no ocupa estos
componentes (que usan el store) el usuario de la biblioteca no debería necesitar
instalar un store. Por el contrario, si desea ocuparlos si es un requisito.

Las variables y métodos del store que usen los componentes de esta biblioteca se
implementaran de tal manera que solo se ofrezca la estructura del mismo, sin
tener dependencia directa con la biblioteca de _store_.

**Ejemplo, teniendo estos componentes**

- ComponenteA usa store
- ComponenteB no usa store
- ComponenteC no usa store

  Pensando en una aplicación muy sencilla que **no requiere** usar _ComponenteA_
  , la persona usuaria de la biblioteca no se ve obligada a instalar un store, y dado
  que solo usa _ComponenteB_ y _ComponenteC_ estos deberían funcionar
  perfectamente sin ninguna instalación adicional.

  En caso contrario, que el _ComponenteA_ sea utilizado, entonces es requisito
  instalar un store (en este momento [VUEX](https://vuex.vuejs.org/)) y en la
  definición del mismo dar de alta la estructura que esta misma biblioteca
  ofrece.

La ubicación de la estructura de los stores que ofrezca esta biblioteca
es `/src/stores/nombre-del-nuevo-store.js`

**NOTA**

En la primera version el único módulo que ocupa esta biblioteca es el de **
Accesibilidad**

#### Agregando el componente a la documentacion vuepress

Cada componente ofrecido por la presente biblioteca debera contar con 3
secciones de documentación indispensables:

- Breve descripción del componente
- API
- Ejemplos de uso

#### Ubicación de archivos

En la carpeta `docs` existe un proyecto
de [VuePress](https://vuepress.vuejs.org/) para desplegar la documentación.

Cada componente agregado en la biblioteca también debe ser agregado en la
carpeta `docs`.

- **1.-** Se creara una carpeta `docs/documentacion/nombre-nuevo-componente` y
  dentro de la misma se agregara un archivo index.md en donde se agregara toda la
  documentación necesaria del componente y sus ejemplos.

- **2.-** Dentro del archivo `docs/.vuepress/theme/LayoutDocumentacion.vue` debe
  agregarse el enlace a la página de documentación del componente que se esté
  trabajando. Lo anterior dentro del componente `SisdaiMenuLateral`

  ```html
  <SisdaiMenuLateral>
    <template slot="contenido-menu-lateral">
      <ul>
        ... enlaces ya existentes de documentacion de componentes
        <li>
          <router-link to="/documentacion/nombre-nuevo-componente">
            NuevoComponente
          </router-link>
        </li>
      </ul>
    </template>
  </SisdaiMenuLateral>
  ```

- **3.-** Los ejemplos del componente se realizarán en archivos `.vue` y
  depositarán en una carpeta
  nueva: `docs/.vuepress/components/nombre-nuevo-componente/`. Se agregarán todos
  los que se considere necesarios.

  Para la integración de los ejemplos en los archivos _markdown_, se hace via el
  componente `utils-ejemplo-doc`, dentro de la sección para este mismo propósito

  ```md
  ... contenido del archivo markdown

  <utils-ejemplo-doc ruta="nombre-nuevo-componente/nombre-ejemplo.vue"/>
  ```

#### Compilación y actualización

Para las personas colaboradoras de este proyecto, la documentación se puede
compilar para su despliegue en desarrollo usando:

```bash
npm run docs:build
```

Y para su despliegue en producción:

```bash
npm run build
```

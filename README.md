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

### Listado de componentes

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

## Requerimientos

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

## Documentación

Este proyecto cuenta con una documentación más extensa que aún está
en proceso de desarrollo. Es posible levantarla en un ambiente local con la
instrucción:

```bash
npm run docs
```

Para las personas colaboradoras de este proyecto, la documentación se puede
compilar para su despliegue en desarrollo usando:

```bash
npm run docs:build
```

Y para su despliegue en producción:

```bash
npm run build
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
podrán levantar issues en este repositorio.

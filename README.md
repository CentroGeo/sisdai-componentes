# sisdai-componentes

El proyecto sisdai-componentes es una biblioteca de componentes reutilizables de
Vue alineada al Sistema de Diseño y Accesibilidad para la
Investigación ([Sisdai](https://sisdai.conahcyt.mx/)). El Sisdai es un proyecto
de investigación desarrollado por el
Centro de Investigación en Ciencias de Información Geoespacial, A.C.
([CentroGeo](https://www.centrogeo.org.mx/)) y coordinado por el Consejo
Nacional de Humanidades, Ciencias y Tecnologías
([Conahcyt](https://conahcyt.mx)) del Gobierno de México.

Para leer la documentación de la biblioteca, puedes visitar el sitio
[sisdai-componentes.conahcyt.mx](https://sisdai-componentes.conahcyt.mx)
o levantar la documentación localmente siguiendo las instrucciones escritas en
la sección [Uso local del proyecto](#uso-local-del-proyecto) de este
documento.

Cualquier persona puede hacer uso de esta biblioteca al clonarla e instalarla en su equipo a través del
**protocolo HTTPS** o bien instalándola mediante [npm](https://www.npmjs.com/~centrogeomx).

## Utilidades

- Homologa los estilos utilizando el sistema de diseño [Sisdai](https://sisdai.conahcyt.mx).
- Mejora la accesibilidad mediante el uso de html semántico y aplicando las reglas establecidas en [Sisdai](https://sisdai.conahcyt.mx).
- Facilita la actualización de elementos institucionales requeridos como cabeceras y pies de páginas que se editan cada año.
- Facilita y reduce el código de elementos de uso común como barras de navegación, menús, tarjetas, etc.

## Instalación y uso

Si tu proyecto está creado con el [proyecto-base](https://codigo.conahcyt.mx/eni/proyecto-base), tiene incluida una versión estable de sisdai-componentes y no requiere ningún paso de instalación ni importación.

### Instala la biblioteca

En la carpeta principal de tu proyecto Vue puedes instalar la última versión de sisdai-componentes mediante dos opciones:

**Opción A.** Desde el repositorio del [sisdai-componentes en npm](https://www.npmjs.com/package/sisdai-componentes).

En la línea de comando escribe
```bash
npm i @centrogeomx/sisdai-componentes
```

**Opción B.** Desde el repositorio de [sisdai-componentes en código.conahcyt.mx](https://codigo.conahcyt.mx/sisdai/sisdai-componentes).

En la línea de comando escribe
```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

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

_Para un uso avanzado revisa la documentación._

## Actualización de la biblioteca

Si necesitas utilizar otra versión, ubícate en la carpeta del proyecto en donde necesitas la actualización e instala la versión que requieres nuevamente usando una de estas dos opciones

**Opción A.** Para versiones publicadas en el repositorio de [sisdai-componentes en npm](https://www.npmjs.com/package/sisdai-componentes).

```bash
npm i @centrogeomx/sisdai-componentes@vN.N.N
```

**Opción B.** Para cualquier versión desde el repositorio de [sisdai-componentes en código.conahcyt.mx](https://codigo.conahcyt.mx/sisdai/sisdai-componentes).
```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

donde N.N.N indica el número de versión, por ejemplo v1.0.0

Consulta el archivo `CHANGELOG.md` del repositorio de [sisdai-componentes en código.conahcyt.mx](https://codigo.conahcyt.mx/sisdai/sisdai-componentes) para conocer las nuevas características y cambios que sufre la biblioteca en cada una de sus versiones.


## Listado de componentes

| Componente                 | Descripción                                                                                                                                                     | Propiedades                                                                                                                                     | Secciones (v-slot)                                               |
| -------------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| SisdaiAudio                | Permite reproducir audios en el navegador.                                                                                                                      | archivo="`texto`"                                                                                                                               | `<template v-slot:encabezado>`                                   |
| SisdaiBotonFlotante        | Botón circular fijo en la pantalla que se expande para mostrar múltiples enlaces.                                                                               | :enlaces="`[{arreglo de objetos}]`"                                                                                                             | NA                                                               |
| SisdaiCampoBusqueda        | Permite a las personas usuarias encontrar rápidamente contenido específico.                                                                                     | :catalogo="`[arreglo]`" :catalogoAnidado="`boleano`" catalogoAnidadoPropiedadElementos="`texto`" propiedadBusqueda="`texto`" etiqueta="`texto`" | NA                                                               |
| SisdaiColapsableNavegacion | Lista de enlaces, y/o sublistas de enlaces con título.                                                                                                          | titulo="`texto`" :colapsado="`boleano`" :avisarMenuLateral="`boleano`"                                                                          | `<template v-slot:encabezado>` `<template v-slot:contenido>`     |
| SisdaiControlAcercarAlejar | Se utiliza para manipular la escala visual de un elemento o área dentro de una aplicación o sitio web.                                                          | value="`número entero`" min="`número entero`" max="`número entero`" step="`número entero`"                                                      | NA                                                               |
| SisdaiControlDeslizante    | Consiste en un elemento `<input type="range">` con el que la usuaria puede estableer un valor dentro de un rango moviendo un indicador a lo largo de una barra. | val_min="`número entero`" val_max="`número entero`" val_entrada="`número entero`"                                                               | NA                                                               |
| SisdaiEnlaceExterno        | Funciona para crear enlaces externos dentro de párrafos u otros elementos.                                                                                      | enlace="`texto`" texto="`texto`"                                                                                                                | NA                                                               |
| SisdaiImagenPngWebp        | Permite indicar el nombre de dos archivos existentes como insumos del proyecto en formato png y webp.                                                           | dominio="`texto`" ruta="`texto`" textoAlternativo="`texto`" leyenda="`texto`" ancho_maximo="`porcentaje%`"                                      | NA                                                               |
| SisdaiIndiceDeContenido    | Menú de navegación para el contenido de una vista.                                                                                                              | titulo="`texo`" :altura="`número entero`" id_indice="`texto`"                                                                                   | `<template slot="contenido-indice-contenido">`                   |
| SisdaiInfoDeDespliegue     | Información acerca del versionamiento, el ambiente y la fecha de despliegue.                                                                                    | versionProyecto="`texto`" entornoProyecto="`texto`" actualizacionProyecto="`texto`"                                                             | NA                                                               |
| SisdaiMenuAccesibilidad    | El Menú de accesibilidad para activar/desactivar funciones de accesibilidad en el sitio web.                                                                    | :agregarOpciones="`[arreglo]`" nombreModuloStore="`texto`" :objetoStore="`{objeto} `" perfilColor="`texto`"                                     | NA                                                               |
| SisdaiMenuLateral          | Menú lateral fijo que se colapsa en dispositivos pequeños.                                                                                                      | NA                                                                                                                                              | `<template slot="contenido-menu-lateral">`                       |
| SisdaiModal                | Ventana emergente con información variada que bloquea el resto del contenido de la vista hasta que se cierre.                                                   | tituloModal="`texto`" (puede ser con elementos html) tamanioModal="`nombre de clase`" (el nombre de la clase puede modal-grande)                | `<template v-slot:cuerpo>` `<template v-slot:pie>`               |
| SisdaiNarrativa            | Sección que muestra contenido y cambia la imagen de fondo y/o textos, dependiendo de la posición del scroll.                                                    | id="`texto`" :depurador="`boleano`" :altura_sensor="`número decimal`" :separacion="`número entero`" :posicion_inicial="`número entero`"         | NA                                                               |
| SisdaiNavegacionGobMx      | Barra de navegación del Gobierno de México.                                                                                                                     | NA                                                                                                                                              | NA                                                               |
| SisdaiNavegacionPrincipal  | Barra de navegación principal del sitio. Dentro de sus etiquetas se agrega el menú principal del sitio.                                                         | navInformacion="`html`" :fija="`boleano`"                                                                                                       | `<template v-slot:identidad>` `<template v-slot:complementario>` |
| SisdaiPiePaginaConahcyt    | El pie de página del Conahcyt                                                                                                                                   | NA                                                                                                                                              | NA                                                               |
| SisdaiPiePaginaGobMx       | El pie de página del Gobierno de México.                                                                                                                        | NA                                                                                                                                              | NA                                                               |

## Uso local del proyecto

### Pasos previos recomendados

Para desarrollar este proyecto se usa [node.js](https://nodejs.org/en) como
entorno de ejecución de JavaScript. La opción recomendada para instalarlo es
[vía nvm](https://github.com/nvm-sh/nvm) que es el manejador de versiones de
node. Siguiendo este camino, también se instalará el manejador de paquetes
[npm](https://www.npmjs.com/). Las instrucciones de instalación
y dependencias del proyecto se muestran aquí usando tanto npm, como nvm.

### Dependencias

- [node.js (^18)](https://nodejs.org/en/download/)
- [npm (^9)](https://www.npmjs.com/get-npm)

### Instalación

Se puede clonar e instalar este proyecto en tu equipo
utilizando **sólo el protocolo HTTPS**, es decir:

```bash
git clone https://codigo.conahcyt.mx/sisdai/sisdai-componentes.git
```

Establece la versión adecuada de npm y nvm (previamente instaladas).

```bash
nvm use 22
```

Instala las dependencias de la biblioteca.

```bash
npm install
```

Opcionalmente levanta en local la documentación.

```bash
npm run docs
```
## Testing

Si deseas correr el testing puedes ejecutar el siguiente comando, el cual implementará las pruebas unitarias:

```bash
npm run test
```

Adicionalmente puedes ejecutar el siguiente comando para evaluar el porcentaje de código que se ha testeado y visualizar el avance en un servidor local.
```bash
npm run coverage
```

Hasta la versión v4.2.2, las pruebas unitarias que se han implementado son las siguientes:

Las pruebas realizadas en los **componentes** son:

- Renderizado del componente
- Manejo de props
- Renderizado de slots
- Interacciones de la usuaria (click)
- Emisión de eventos
- Afirmación de atributos, valores y texto
- Manejo de propiedades y métodos
- Intercepción de funciones
- Creación de selectores html por atributo `testid=""`

Las pruebas realizadas en los **composables** son:

- Renderizado de mock en app
- Manejo de instancias en propiedades y métodos

Las pruebas realizadas en el **store** son:

- Instanciado del módulo de accesibilidad
- Manejo de estados y acciones

Si deseas conocer más acerca de [TEST.md](./TEST.md)

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

Considerando lo anterior, sisdai-componentes se publica bajo la licencia
[LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.html). Dicha licencia se puede
consultar en el archivo _LICENSE_ de este repositorio.
Esta licencia se encuentra disponible en inglés porque aunque el Sisdai privilegia
el idioma español se respeta la versión original de acuerdo al proyecto
[GNU](https://www.gnu.org/licenses/licenses.html).

## Contribuir

Por el momento sólo quienes sean
parte de un equipo de investigación del capítulo de un [ENI](https://eni.conahcyt.mx)
podrán levantar issues en este repositorio. El equipo del [Sisdai](https://sisdai.conahcyt.mx/acerca-de) se encargará de mantenerlo.

---

### ¿Cómo agregar nuevos componentes?

#### Estructura

- Los nuevos componentes se agregan en la carpeta `src/componentes`.
- Cada componente se agrega en su propio
  directorio `src/componentes/nuevo-componente`.
- Dentro la carpeta de cada componente deberán existir todos los archivos
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

- Usa [Composition API](https://vuejs.org/guide/introduction.html#composition-api) para el desarrollo
- Evita el uso de preprocesadores de estilos, usa css en vez de scss o
  sass
- En la medida de lo posible se evita la llamada de métodos al router de vue, si
  un componente por su funcionalidad requiere de esta dependencia o de otra
  similar deberás especificarlo en la documentación de uso del componente
- Apégate a los estilos de código definidos en las configuraciones del
  proyecto: _eslint, prettier,editorconfig y vscode-settings_

#### Script de instalación en index.js

Dentro del archivo `index.js` que acompaña al componente, agrega un código
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

Para que funcione el archivo anterior, deberá integrarse con los
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

Finalmente, en el siguiente archivo se agrega el nuevo componente al script
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
al tener un _store_ como requisito. Es decir, si la aplicación no ocupa estos
componentes que usan el store, la persona usuaria de la biblioteca no debería necesitar
instalar un store.

Las variables y métodos del store que usen los componentes de esta biblioteca se
implementarán de tal manera que solo se ofrezca la estructura del mismo, sin
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
  instalar un store ([VUEX](https://vuex.vuejs.org/)) y en la
  definición del mismo dar de alta la estructura que esta misma biblioteca
  ofrece.

La ubicación de la estructura de los stores que ofrezca esta biblioteca
es `/src/stores/nombre-del-nuevo-store.js`

**NOTA**

En la primera versión el único módulo que ocupa esta biblioteca es el de **
Accesibilidad**

#### Agregando el componente a la documentación vuepress

Cada componente ofrecido por la presente biblioteca deberá contar con 3
secciones de documentación indispensables:

- Breve descripción del componente
- API
- Ejemplos de uso

#### Ubicación de archivos

En la carpeta `docs` existe un proyecto
de [VuePress](https://vuepress.vuejs.org/) para desplegar la documentación.

Cada componente agregado en la biblioteca también debe ser agregado en la
carpeta `docs`.

- **1.-** Crea una carpeta `docs/documentacion/nombre-nuevo-componente` y
  dentro de la misma agrega un archivo index.md en donde se integre toda la
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

- **3.-** Crea los ejemplos del componente en archivos `.vue` y
  deposítalos en una carpeta
  nueva: `docs/.vuepress/components/nombre-nuevo-componente/`. Agrega todos
  los que se considere necesarios.

  Para la integración de los ejemplos en los archivos _markdown_, se hace vía el
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

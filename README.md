# sisdai-componentes

El proyecto sisdai-componentes es una biblioteca de componentes reutilizables de
Vue alineada al Sistema de diseño y accesibilidad para la investigación
([Sisdai](https://sisdai.conahcyt.mx)).

> **_Limitación de responsabilidad_**
> El presente es un proyecto en construcción, por tanto el equipo del Sisdai
> no es responsable del uso y contenido del presente recurso,
> toda vez que se trata de una versión en su modalidad prueba, y no de una
> versión liberada al público, por lo que una vez que sea lanzada la versión
> final,
> se invita a la persona usuaria a consultarla y validar sus requisitos.

## Instalación

Para instalar las dependencias de la biblioteca:

```
npm install
```

### Compilar ambiente de desarrollo en local

Este comando levanta para que quien desarrolle pueda hacer pruebas

```
npm run docs
```

### Compilar biblioteca para producción

```
npm run build
```

### Compilar ambiente de desarrollo para visualizar en línea

```
npm run docs:build
```

## ¿Como agregar nuevos componentes?

### Estructura

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

### Componente .vue

- Para el desarrollo se
  usa [Composition API](https://vuejs.org/guide/introduction.html#composition-api)
- Se evita el uso de preprocesadores de estilos, se usa css en vez de scss o
  sass
- En la medida de lo posible se evita la llamada de metodos al router de vue, si
  un componente por su funcionalidad requiere de esta dependencia o de otra
  similar debera especificarlo en la documentacion de uso del componente.
- Apegarse a los estilos de codigo definidos en las configuraciones del
  proyecto: _eslint, prettier,editorconfig y vscode-settings_.

### Script de instalacion en index.js

Dentro del archivo `index.js` que acompaña al componente se agregara un codigo
de instalación como el siguiente:

```js
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
componente tambien deberan de modificarse estos mismos.

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

```js
// /src/componentes.js
import ComponenteNuevo from './componente-nuevo'

export {
...
ComponenteNuevo, // agregar al final de las exportaciones
}

```

Finalmente en el siguiente archivo se agrega el nuevo componente al script
global de instalacion

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

### Uso del store en componentes

Los componentes que hagan uso de variables de estado globales podran hacerlo,
pero sin comprometer o condicionar el funcionamiento de la biblioteca en general
a tener un _store_ de requisito, es decir, si la aplicacion no ocupa estos
componentes (que usan el store) el usuario de la biblioteca no deberia necesitar
instalar un store. Por el contrario, si desea ocuparlos si es un requisito.

Las variables y metodos del store que usen los componentes de esta biblioteca se
implementaran de tal manera que solo se ofrezca la estructura del mismo, sin
tener dependencia directa con la libreria de _store_.

**Ejemplo, teniendo estos componentes**

- ComponenteA usa store
- ComponenteB no usa store
- ComponenteC no usa store

  Pensando en una aplicacion muy sencilla que **no requiere** usar _ComponenteA_
  , el usuarix de la biblioteca no se ve obligadx a instalar un store, y dado
  que solo usa _ComponenteB_ y _ComponenteC_ estos deberian funcionar
  perfectamente sin ninguna instalacion adicional.

  En caso contrario, que el _ComponenteA_ sea utilizado, entonces es requisito
  instalar un store (en este momento [VUEX](https://vuex.vuejs.org/)) y en la
  definicion del mismo dar de alta la estructura que esta misma biblioteca
  ofrece.

La ubicación de la estructura de los stores que ofrezca esta biblioteca
es `/src/stores/nombre-del-nuevo-store.js`

**NOTA**

En la primera version el unico modulo que ocupa esta biblioteca es el de **
Accesibilidad**

### Agregando el componente a la documentacion vuepress

Cada componente ofrecido por la presente biblioteca debera contar con 3
secciones de documentacion indispensables:

- Breve descripcion del componente
- API
- Ejemplos de uso

#### Ubicación de archivos

En la carpeta `docs` existe un proyecto
de [VuePress](https://vuepress.vuejs.org/) para dedplegar la documentacion.

Cada componente agregado en la libreria tambien debe ser agregado en la
carpeta `docs`.

**1.-** Se creara una carpeta `docs/documentacion/nombre-nuevo-componente` y
dentro de la misma se agregara un archivo index.md en donde se agregara toda la
documentacion necesaria del componente y sus ejemplos.

**2.-** Dentro del archivo `docs/.vuepress/theme/LayoutDocumentacion.vue` debe
agregarse el enlace a la pagina de documentacion del componente que se este
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

**3.-** Los ejemplos del componente se realizaran en archivos `.vue` y
depositaran en una carpeta
nueva: `docs/.vuepress/components/nombre-nuevo-componente/`. Se agregaran todos
los que se considere necesarios.

Para la integracion de los ejemplos en los archivos _markdown_, se hace via el
componente `utils-ejemplo-doc`, dentro de la seccion para este mismo proposito

```md
... contenido del archivo markdown

<utils-ejemplo-doc ruta="nombre-nuevo-componente/nombre-ejemplo.vue"/>
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

## Contribuir

Para contribuir al proyecto, se pide que se haga tomando en cuenta la guía de
contribución
de [git](https://git-scm.com/book/es/v2/Git-en-entornos-distribuidos-Contribuyendo-a-un-Proyecto)
.

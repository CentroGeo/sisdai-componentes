<script setup>
import EjemploBasico from "../../.vitepress/components/campo-busqueda/basico.vue";
import EjemploCatalogoAnidado from "../../.vitepress/components/campo-busqueda/catalogo-anidado.vue";
</script>

# Campo de búsqueda

El componente `SisdaiCampoBusqueda` permite a las personas usuarias encontrar rápidamente contenido específico dentro de una aplicación o un sitio web. Al proporcionar un campo de búsqueda, las personas usuarias pueden escribir términos o frases relevantes y obtener resultados que coincidan con la consulta.

Uso

Para utilizar el componente `SisdaiCampoBusqueda`, se debe proporcionar una lista de elementos a través de la propiedad `catalogo`. Además, se puede manejar el resultado de la búsqueda mediante el evento `alFiltrar`, que devuelve una lista filtrada con los resultados de la búsqueda.

A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiCampoBusqueda
  :catalogo="listaElementos"
  @alFiltrar="listaFiltrada => {
    /*Aqui se obtiene y manipula el resultado de la búsqueda */
   listaElementos2 = listaFiltrada
  }"
/>
```

Mostrando los resultados de búsqueda:

```html
<ul>
  <li v-for="elemento in listaElementos2">{{ elemento.nombre }}</li>
</ul>
```

Donde `listaElementos` es la lista de elementos sobre los que se realiza la búsqueda y `listaElementos2` es la variable que recibe el resultado de la búsqueda.

<section id="api">

## API

Este componente admite las siguientes propiedades y eventos:

### Propiedades

- `catalogo`: corresponde a la lista de elementos sobre los que se desea aplicar la búsqueda.
  - Tipo de dato: `Array<Object>`
  - Valor predeterminado: `[]`
  - Requerido: sí
- `propiedadBusqueda`: corresponde al nombre de la propiedad de cada objeto en donde se aplicará la búsqueda.
  - Tipo de dato: `String`
  - Valor predeterminado: `'nombre'`
  - Requerido: opcional
- `catalogoAnidado`: indica si el catálogo tiene anidación o agrupación.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: opcional
- `catalogoAnidadoPropiedadElementos`: el nombre de la propiedad que contiene la lista de elementos de cada grupo.
  - Tipo de dato: `String`
  - Valor predeterminado: `'elementos'`
  - Requerido: opcional
- `etiqueta`: corresponde a la etiqueta de búsqueda, comúnmente conocida como _placeholder_.
  - Tipo de dato: `String`
  - Valor predeterminado: `'Buscar...'`
  - Requerido: opcional

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

- **alFiltrar**: evento que se dispara al momento de ejecutar la búsqueda. Como parámetro se obtiene la lista de elementos filtrada.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

El siguiente ejemplo muestra cómo utilizar el campo de búsqueda de forma básica:

<!-- <utils-ejemplo-doc ruta="campo-busqueda/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/campo-busqueda/basico.vue

### Ejemplo con lista anidada

<!-- <utils-ejemplo-doc ruta="campo-busqueda/catalogo-anidado.vue"/> -->
<EjemploCatalogoAnidado />
<<< @/.vitepress/components/campo-busqueda/catalogo-anidado.vue

</section>

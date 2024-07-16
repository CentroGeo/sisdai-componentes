<script setup>
import EjemploBasico from "../../.vitepress/components/campo-busqueda/basico.vue";
import EjemploCatalogoAnidado from "../../.vitepress/components/campo-busqueda/catalogo-anidado.vue";
</script>

# Campo de búsqueda

El campo de búsqueda permite a las personas usuarias encontrar rápidamente contenido específico dentro de una aplicación o un sitio web.

Al proporcionar un campo de búsqueda, las personas usuarias pueden escribir términos o frases relevantes y obtener resultados que coincidan con la consulta.

Uso:

```html
<SisdaiCampoBusqueda
  :catalogo="listaElementos"
  @alFiltrar="listaFiltrada => {
    /*Aqui se obtiene y manipula el resultado de la búsqueda */
   listaElementos2 = listaFiltrada
  }"
/>
...
<!--mostrando los resultados de busqueda-->
<ul>
  <li v-for="elemento in listaElementos2">{{ elemento.nombre }}</li>
</ul>
```

Donde `listaElementos` es la lista de elementos sobre los que se realiza la búsqueda y `listaElementos2` es la variable que recibe el resultado de la búsqueda.

<section id="api">

## API

Este componente admite las siguientes propiedades.

### Propiedades

- `catalogo`: Corresponde a la lista de elementos sobre los que se desea aplicar la búsqueda.
  - Tipo de dato: `Array<Object>`
  - Valor predeterminado: `[]`
  - Requerido: sí
- `propiedadBusqueda`: corresponde al nombre de la propiedad de cada objeto en donde se aplicará la búsqueda.
  - Tipo de dato: `String`
  - Valor predeterminado: `'nombre'`
  - Requerido: opcional
- `catalogoAnidado`: Indica si el catálogo tiene anidación o agrupación.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: opcional
- `catalogoAnidadoPropiedadElementos`: El nombre de la propiedad que contiene la lista de elementos de cada grupo.
  - Tipo de dato: `String`
  - Valor predeterminado: `'elementos'`
  - Requerido: opcional
- `etiqueta`: Corresponde a la etiqueta de búsqueda, comúnmente conocida como _placeholder_.
  - Tipo de dato: `String`
  - Valor predeterminado: `'Buscar...'`
  - Requerido: opcional

### Eventos

- **alFiltrar**: Evento que se dispara al momento de ejecutar la búsqueda. Como parámetro se obtiene la lista de elementos filtrada.

</section>

<section id="ejemplos">

## Ejemplos de uso

</section>

A continuación se presentan algunos ejemplos de uso del campo de búsqueda:

### Ejemplo básico

El siguiente ejemplo muestra cómo utilizar el campo de búsqueda de forma básica:

<!-- <utils-ejemplo-doc ruta="campo-busqueda/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/campo-busqueda/basico.vue

### Ejemplo con lista anidada

<!-- <utils-ejemplo-doc ruta="campo-busqueda/catalogo-anidado.vue"/> -->
<EjemploCatalogoAnidado />
<<< @/.vitepress/components/campo-busqueda/catalogo-anidado.vue

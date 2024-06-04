---
layout: LayoutDocumentacion
sectionName: campo-busqueda
---

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

_Donde `listaElementos` es la lista de elementos sobre los que se realiza la búsqueda y `listaElementos2` es la variable que recibe el resultado de la búsqueda._

<section id="api">

## API

Este componente admite las siguientes propiedades

### Propiedades

- `catalogo`: (_Array_) Propiedad requerida. Corresponde a la lista de elementos sobre los que se desea aplicar la busqueda. Por _default_ tiene el valor `[]`
- `propiedadBusqueda`: (_String_) Propiedad opcional. corresponde al nombre de la propiedad de cada objeto en donde se aplicara la busqueda. Por _default_ tiene el valor `'nombre'`
- `catalogoAnidado`: Propiedad opcional. (_Boolean_) Indica si el catalogo tiene anidación o agrupacion. Por _default_ tiene el valor `false`
- `catalogoAnidadoPropiedadElementos`: Propiedad opcional. (_String_) El nombre de la propiedad que contiene la lista de elementos de cada grupo. por default tiene el valor `'elementos'`
- `etiqueta`: (_String_) Propiedad opcional. Corresponde a la etiqueta de busqueda, comunmente conocida como _placeholder_. Por _default_ tiene el valor `'Buscar...'`

### Eventos

- `alFiltrar`: Evento que se dispara al momento de ejecutar la busqueda. Como parametro se obtiene la lista de elementos filtrada.

</section>

<section id="ejemplos">

## Ejemplos de uso

</section>

A continuación se presentan algunos ejemplos de uso del campo de búsqueda:

### Ejemplo básico

El siguiente ejemplo muestra cómo utilizar el campo de búsqueda de forma básica:

<utils-ejemplo-doc ruta="campo-busqueda/basico.vue"/>

### Ejemplo con lista anidada

<utils-ejemplo-doc ruta="campo-busqueda/catalogo-anidado.vue"/>

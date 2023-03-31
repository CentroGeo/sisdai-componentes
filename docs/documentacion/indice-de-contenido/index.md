---
layout: LayoutDocumentacion
---

# Índice de contenido

Este componente se utiliza como un menú de navegación para el contenido de una vista. Mediante slots se introducen enlaces, ya sean `<router-link/>` o `<a/>` cuya ruta sea simplmente un id de algún elemento que exista dentro de la vista en la que se muestra el componente.

Uso:

```html
<IndiceDeContenido> ...contenido </IndiceDeContenido>
```

## API

### Propiedades

#### Opcionales

- `titulo`: (_String_) Corresponde al texto que se muestra como encabezado del componente. Por _default_ tiene el valor 'Contenido'.
- `altura`: (_Number_) Este valor corresponde al la distancia en pixeles entre la orilla superior de la ventana y el inicio de un elemento de la página a los cuales hacen referencia los enlaces del índice. Al hacer click en uno de los enlaces del índice, el contenido se desplaza de forma que el elemento referenciado coindida con el borde superior de la ventana más esta cantidad `altura`. Si no se tomara en cuenta esta propiedad, la barra de navegación superior quedaría encima del inicio del elemento seleccionado. Su valor por _default_ es 50

### Slots

- `'contenido-indice-de-contenido'`: Este es el único slot que tiene este componente. En él se deben introducir elementos de enlaces como `<a></a>` o `<router-link>`. Los enlaces que se introducen deben contener el id del elemento al que se quiere navegar, y a su vez, este elemento debe existir en el documento.

## Ejemplos

Este ejemplo usa enlaces a elementos existentes en el documento. Se ejemplifica usando un elemento `<router-link>` y un elemento`<a></a>`. Al dar click en los enlaces, puedes observar como la vista se desplaza a dichos elementos

<utils-ejemplo-doc ruta="indice-de-contenido/basico.vue"/>

Este ejemplo es análogo al anterior. La diferencia es que los enlaces se ingresan mediante una lista no ordenada
<utils-ejemplo-doc ruta="indice-de-contenido/lista.vue"/>

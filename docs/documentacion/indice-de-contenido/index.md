<script setup>
import EjemploBasico from "../../.vitepress/components/indice-de-contenido/basico.vue";
import EjemploLista from "../../.vitepress/components/indice-de-contenido/lista.vue";
</script>

# Índice de contenido <span class="etiqueta">preliminar</span>

Este componente se utiliza como un menú de navegación para el contenido de una vista. Mediante slots se introducen enlaces, ya sean `<router-link/>` o `<a/>` cuya ruta sea simplmente un id de algún elemento que exista dentro de la vista en la que se muestra el componente.

Uso:

```html
<SisdaiIndiceDeContenido> ...contenido </SisdaiIndiceDeContenido>
```

<section id="api">

## API

### Propiedades

#### Opcionales

- `titulo`: Corresponde al texto que se muestra como encabezado del componente.
  - Tipo de dato: `String`
  - Valor predeterminado: `'Índice'`
  - Requerido: opcional
- `altura`: Este valor corresponde a la distancia en píxeles entre la orilla superior de la ventana y el inicio de un elemento de la página a los cuales hacen referencia los enlaces del índice. Al hacer click en uno de los enlaces del índice, el contenido se desplaza de forma que el elemento referenciado coincida con el borde superior de la ventana más esta cantidad de `altura`. Si no se tomará en cuenta esta propiedad, la barra de navegación superior quedaría encima del inicio del elemento seleccionado.
  - Tipo de dato: `Number`
  - Valor predeterminado: `50`
  - Requerido: opcional

### Métodos

- `autoScrollSuave` Este metodo selecciona los enlaces del componente y les especifica a que posición se debe mover el documento cuando se clickea un enlace, que es la posición del elemento referenciado menos `props.altura`.
- `scroleando` Cada que se scrolea el documento, se verifica si el límite superior e inferior de algún elemento referenciado coincide con la posición superior de la ventana más `props.altura`. En caso verdadero, se añade la clase. `link-activo` al índice asociado al elemento referenciado.
- `obtenerRutas` Obtiene la lista de `href`s en el índice.

### Slots

- `'contenido-indice-contenido'`: Este es el único slot que tiene este componente. En éste se deben introducir elementos de enlaces como `<a></a>` o `<router-link>`. Los enlaces que se introducen deben contener el id del elemento al que se quiere navegar, y a su vez, este elemento debe existir en el documento.

</section>

<section id="ejemplos">

## Ejemplos

Este ejemplo usa enlaces a elementos existentes en el documento. Se ejemplifica usando un elemento `<router-link>` y un elemento`<a></a>`. Al dar click en los enlaces, puedes observar como la vista se desplaza a dichos elementos.

<!-- <utils-ejemplo-doc ruta="indice-de-contenido/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/indice-de-contenido/basico.vue

Este ejemplo es análogo al anterior. La diferencia es que los enlaces se ingresan mediante una lista no ordenada.

<!-- <utils-ejemplo-doc ruta="indice-de-contenido/lista.vue"/> -->
<EjemploLista />
<<< @/.vitepress/components/indice-de-contenido/lista.vue

</section>

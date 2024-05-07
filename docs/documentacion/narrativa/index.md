---
layout: LayoutDocumentacion
---

# Narrativa

Esta sección explica el uso del componente `SisdaiNarrativa` el cual detecta cuando en una sección se scrolea y devuelve propiedades con la posición del cursor y la viñeta o bullet activo
Uso:

```html
<SisdaiNarrativa></SisdaiNarrativa>
```

<section id="api">

## API

- `id`: (_String_) Identificar único del componente

- `depurador`: (_Boolean_) Cuando el valor es `true`, se muestra una línea roja que ayuda a visualizar en qué posición de las secciones se disparan las transiciones de las imágenes de fondo. Cuando es `false`, no se muestra. El valor por default es `false`.
- `altura_sensor`: (_Number_) Número entre 0 y 1 que determina la altura de la pantalla a la cual se dispara la transición. si es 0, las transiciones se disparan cuando sale una viñeta de pantalla. Si es 1, las transiciones se ejecutan cuando entra la viñeta a pantalla

- `separacion`: (_Boolean_) Número entre 0 y 1 que indica la separación entre viñetas. Cuando el valor es 1 corresponde a una altura del 100% del alto de la pantalla, cuando es 0 es el 0% de la pantalla.

-`posicion_inicial`: (_Number_) Número entre 0 y 1 que indica la posición inicial en la que aparecen las viñetas. Si es 1, entonces las viñetas tendrán una posición desplazada una altura de pantalla abajo. Si es 0, entonces las viñetas empiezan hasta arriba del contenedor que tiene la narrativa.

### Variables expuestas

-`seccion_visible` Esta propiedad devuelve la sección que está "activa" o "visible", cuando el la primer viñeta está por debajo del depurador toma un valor de -1. Cuando está entre el primer y segundo bullet, toma el valor de 0 y así sucesivamente.

-`posicion_normalizada` Esta propiedad devuelve un número normalizado según las secciones que se han escroleado. -`lista_elementos`: Es un querySelectorAlll de todas las viñetas dentro del componente.

### Slots

- El slot por default deberá llevar las viñetas, cada uno con la clase `.vineta`. Estos elementos son los que determinarán los cambios de `seccion_visible`.
- `contenido-fondo-sticky`: Este slot lleva se mantiene en posición ´sticky´, es decir se mantiene fija mientras se scrolean las viñetas.

</section>

<section id="ejemplos">

## Ejemplos

A continuación podrás observar un ejemplo que permite explorar todas las propiedades que admite el componente, así como sus combinaciones. Podrás observar que los bullets no tienen estilo predeterminado, sino que este tendrá que ser definido por la persona usuaria.
<utils-ejemplo-doc ruta="narrativa/basico.vue"/>

</section>

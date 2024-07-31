<script setup>
import EjemploBasico from "../../.vitepress/components/narrativa/basico.vue";
</script>

# Narrativa

El componente `SisdaiNarrativa` detecta cuando se desplaza (scroll) en una sección y devuelve propiedades con la posición del cursor y la viñeta o bullet activo. Esto permite identificar y reaccionar a la posición actual de la persona usuaria dentro de una narrativa o contenido específico.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiNarrativa`, incorporalo en tu plantilla. A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiNarrativa> ...contenido </SisdaiNarrativa>
```

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y slots:

### Propiedades

- `id`: identificador único del componente.
  - Tipo de dato: `String`
  - Requerido: no
- `depurador`: cuando el valor es `true`, se muestra una línea roja que ayuda a visualizar en qué posición de las secciones se disparan las transiciones de las imágenes de fondo. Cuando es `false`, no se muestra.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no
- `altura_sensor`: número entre 0 y 1 que determina la altura de la pantalla a la cual se dispara la transición. Si es 0, las transiciones se disparan cuando sale una viñeta de pantalla. Si es 1, las transiciones se ejecutan cuando entra la viñeta a pantalla.
  - Tipo de dato: `Number`
  - Valor predeterminado: `0.5`
  - Requerido: no
- `separacion`: número entre 0 y 1 que indica la separación entre viñetas. Cuando el valor es 1 corresponde a una altura del 100% del alto de la pantalla; cuando es 0 es el 0% de la pantalla.
  - Tipo de dato: `Number`
  - Valor predeterminado: `1`
  - Requerido: no
- `posicion_inicial`: número entre 0 y 1 que indica la posición inicial en la que aparecen las viñetas. Si es 1, entonces las viñetas tendrán una posición desplazada a una altura de pantalla abajo. Si es 0, entonces las viñetas empiezan hasta arriba del contenedor que tiene la narrativa.
  - Tipo de dato: `Number`
  - Valor predeterminado: `1`
  - Requerido: no

#### Expuestas

- `seccion_visible`: esta propiedad devuelve la sección que está "activa" o "visible". Cuando la primera viñeta está por debajo del depurador toma un valor de -1. Cuando está entre el primer y segundo bullet, toma el valor de 0 y así sucesivamente.
- `posicion_normalizada`: esta propiedad devuelve un número normalizado según las secciones que se han desplazado.
- `lista_elementos`: es un querySelectorAll de todas las viñetas dentro del componente.

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `default`: este slot deberá contener las viñetas, cada una con la clase `.vineta`. Estos elementos son los que determinarán los cambios de `seccion_visible`.
- `contenido-fondo-sticky`: este slot lleva se mantiene en posición ´sticky´, es decir se mantiene fija mientras se scrolean las viñetas.

</section>

<section id="ejemplos">

## Ejemplos de uso

A continuación se presenta un ejemplo que permite explorar todas las propiedades que admite el componente, así como sus combinaciones. Observa que los bullets no tienen estilo predeterminado, por lo que este tendrá que ser definido por la persona usuaria.

<!-- <utils-ejemplo-doc ruta="narrativa/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/narrativa/basico.vue

</section>

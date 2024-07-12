<script setup>
import EjemploDefault from "../../.vitepress/components/control-deslizante/default.vue";
</script>

# Control deslizante

Este componente consiste en un elemento `<input type="range">` al cual se le agrega una función de estilo en el cual el lado derecho del valor seleccionado queda de color gris.

<section id="api">

## API

Este componente admite propiedades y se expone el valor asociado al control.

### Propiedades

A continuación se enlistan las propiedades que admite el componente

- `val_min`: Corresponde al valor mínimo que puede tomar el control y se asigna al atributo `min` del `input[range]`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `0`
  - Requerido: opcional
- `val_max`: Corresponde al valor máximo que puede tomar el control y se asigna al atributo `max` del `input[range]`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `100`
  - Requerido: opcional
- `val_entrada`: Es el valor inicial que tomará el input y debe ser un valor entre `val_min` y `val_max`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `50`
  - Requerido: opcional

### Propiedades expuestas

- `valor_seleccionado`: (_Number_) Devuelve el valor que está seleccionado en el control deslizante.

</section>

<section id="ejemplos">

## Ejemplos

Este es un ejemplo básico del control deslizante.

<!-- <utils-ejemplo-doc ruta="control-deslizante/default.vue"/> -->
<EjemploDefault />
<<< @/.vitepress/components/control-deslizante/default.vue

</section>

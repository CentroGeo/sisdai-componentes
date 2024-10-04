<script setup>
import EjemploDefault from "../../.vitepress/components/control-deslizante/default.vue";
</script>

# Control deslizante

El componente `SisdaiControlDeslizante` consiste en un elemento `<input type="range">` al cual se le agrega una función de estilo en el cual el lado derecho del valor seleccionado queda de color gris.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiControlDeslizante`, incorpora el componente en tu plantilla y configura las propiedades como el valor mínimo y máximo, entrada inicial y el paso del deslizador. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiControlDeslizante />
```

Vista simplificada

En la vista simplificada el componente `SisdaiControlDeslizante` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades:

### Propiedades

- `val_min`: corresponde al valor mínimo que puede tomar el control y se asigna al atributo `min` del `input[range]`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `0`
- `val_max`: corresponde al valor máximo que puede tomar el control y se asigna al atributo `max` del `input[range]`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `100`
- `val_entrada`: es el valor inicial que tomará el input y debe ser un valor entre `val_min` y `val_max`.
  - Tipo de dato: `Number`
  - Valor predeterminado: `50`

### Propiedades expuestas

- `valor_seleccionado`: (_Number_) devuelve el valor que está seleccionado en el control deslizante.

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no utiliza slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

Este es un ejemplo básico del control deslizante.

<!-- <utils-ejemplo-doc ruta="control-deslizante/default.vue"/> -->
<EjemploDefault />
<<< @/.vitepress/components/control-deslizante/default.vue

</section>

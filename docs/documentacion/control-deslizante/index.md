---
layout: LayoutDocumentacion
---

# Control deslizante

Este componente consiste en un elemento `<input type="range">` al cual se le agrega una función de estilo en el cual el lado derecho del valor seleccionado queda de color gris.

<section id="api">

## API

Este componente admite propiedades y se expone el valor asociado al control.

### Propiedades

A continuación se enlistan las propiedades que admite el componente

- `val_min`: (_Number_) Corresponde al valor mínimo que puede tomar el control y se asigna al atributo `min` del `input[range]`.Su valor por _default_ es 0.

- `val_max`: (_Number_) Corresponde al valor máximo que puede tomar el control y se asigna al atributo `max` del `input[range]`. Su valor por _default_ es 100.
- `val_default`: (_Number_) Es el valor inicial que tomará el input y debe ser un valor entre `val_min` y `val_max`. Por _default_ es 50.

### Propiedades expuestas

- `valor_seleccionado`: (_Number_) Devuelve el valor que está seleccionado en el control deslizante.

</section>

<section id="ejemplos">

## Ejemplos

Este es un ejemplo básico del control deslizante.

<utils-ejemplo-doc ruta="control-deslizante/default.vue"/>

</section>

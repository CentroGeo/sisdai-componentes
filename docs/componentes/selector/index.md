<script setup>
import EjemploBasico from "../../.vitepress/components/selector/basico.vue";
</script>

# Selector

El componente `SisdaiSelector` permite tener los selectores de formulario siempre ligados a una etiqueta corrigiendo así el error más común de accesibilidad. Opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo. 

<section id="uso">

## Uso

Para utilizar el componente `SisdaiSelector`, se necesita proporcionar el texto que aparecerá en la `etiqueta` y sus opciones `<option>` escritas dentro de las etiquetas de apertura y cierre del componente.

A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiSelector
  etiqueta="Selector de ejemplo"
  v-model="seleccionEjemplo"
  texto_ayuda="Texto de ayuda."
>
  <option value="1">
    Opcion Uno
  </option>
  <option value="2">
    Opcion Dos
  </option>
  <option value="3">
    Opcion Tres
  </option>
</SisdaiSelector>
```

## Accesibilidad

Al utilizar el componente `SisdaiSelector` nos aseguramos que la etiqueta y el selector siempre estén vinculados, ya sea visible su etiqueta o no. 

### Validaciones

Actualmente el componente `SisdaiSelector` valida automáticamente cuando es requerido, mostrando el mensaje de error `'Este campo no puede quedar vacío. '`. Las implementaciones de otros tipos de error deberán crearse en el momento de su uso. 

### Vista simplificada

En la vista simplificada el componente `SisdaiSelector` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y eventos:

### Propiedades

- `etiqueta`: texto de la etiqueta del campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `instruccional`: corresponde al mensaje que aparece en el selector cuando no esta seleccionada ninguna opción y el valor del modelo esta vacío.
  - Tipo de dato: `String`
  - Valor predeterminado: `'Selecciona una opción'`
  - Requerido: opcional
- `texto_ayuda`: texto que aparece debajo del campo para proporcionar ayuda de llenado para la persona usuaria.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: opcional
- `es_etiqueta_visible`: para declarar si la etiqueta es visible o no en la vista.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `true`
  - Requerido: opcional
- `es_instruccional_visible`: para declarar el instruccional existe o no.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `true`
  - Requerido: opcional
- `es_obligatorio`: para declarar si el campo es obligatorio u opcional.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: opcional

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente cuenta con un `<slot>` predeterminado, es decir, no se necesita agregar la etiqueta `template`.
Se utliza para agregar el listado de opciones que utilizará el selector.
Simplemente introduzca las opciones `<option>` dentro de la etiqueta del componente `<SisdaiSelector> ... </SisdaiSelector>`.

</section>

<section id="ejemplos">

## Ejemplos de uso

El siguiente ejemplo muestra cómo utilizar el campo base:

<EjemploBasico />
<<< @/.vitepress/components/selector/basico.vue
</section>
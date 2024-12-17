<script setup>
import EjemploGrupo from "../../.vitepress/components/boton-radio/radio-grupo.vue";
</script>

# Botón de radio

El componente `SisdaiBotonRadio` permite tener botones de radio vinculados siempre a una etiqueta corrigiendo así el error más común de accesibilidad. Opcionalmente podemos definir si es obligatorio u opcional.

Este campo require mantenerse agrupado, por lo que siempre debe incluirse dentro del componente `SisdaiBotonesRadioGrupo`. Al utilizar éste componente también estamos mejorando la accesibilidad al utilizar las etiquetas semánticas para éste propósito.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiBotonRadio`, es necesario proporcionar el texto que aparecerá en la `etiqueta` del elemento. Y para el componente `SisdaiBotonesRadioGrupo` se necesita agregar la `leyenda` que es el título que mostrará la agrupación de campos.

A continuación, se muestra un ejemplo de uso:

```html
<SisdaiBotonesRadioGrupo
  leyenda="Grupo de botones de radio"
>
  <SisdaiBotonRadio
    etiqueta="boton radio uno"
    v-model="botonRadio"
    value="Uno"
    name="nombredelgrupo"
  />
  <SisdaiBotonRadio
    etiqueta="boton radio dos"
    v-model="botonRadio"
    value="Dos"
    name="nombredelgrupo"
  />
</SisdaiBotonesRadioGrupo>
```

## Accesibilidad

Al utilizar el componente `SisdaiBotonRadio` nos aseguramos que la etiqueta y el botón de radio estén vinculados automáticamente. Para agrupar se utiliza el `fielset role="radiogroup"` y la `legend` para dar título al grupo.

### Validaciones

El componente `SisdaiBotonesRadioGrupo` valida automáticamente cuando tiene elementos requeridos, mostrando el mensaje de error `'Un botón de radio necesita estar seleccionado. '`. Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.

### Vista simplificada

En la vista simplificada los componentes `SisdaiBotonRadio` y `SisdaiBotonesRadioGrupo` no se modifican en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y eventos:

### Propiedades

#### SisdaiBotonRadio

- `etiqueta`: texto de la etiqueta del campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `es_obligatorio`: para declarar si el campo es obligatorio u opcional.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no
- `v-model`: variable de modelo de datos de entrada.
  - Tipo de dato: `String` o `Number`
  - Valor predeterminado: `''`
  - Requerido: sí
- `value`: valor del boton de radio en particular.
  - Tipo de dato: `String` o `Number`
  - Valor predeterminado: `''`
  - Requerido: sí
- `name`: nombre que comparten todos los botones de radio del grupo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: sí

#### SisdaiBotonesRadioGrupo

- `leyenda`: texto de la etiqueta del campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `texto_ayuda`: texto de ayuda para la persona usuaria.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `es_obligatorio`: para declarar si el grupo es obligatorio u opcional.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no
- `es_vertical`: para acomodar los botones de radio de manera vertical.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

El siguiente ejemplo muestra cómo utilizar un grupo de botones de radio:

<EjemploGrupo />
<<< @/.vitepress/components/boton-radio/radio-grupo.vue
</section>

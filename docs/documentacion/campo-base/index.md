<script setup>
import EjemploBasico from "../../.vitepress/components/campo-base/basico.vue";
</script>

# Campo base

El componente `SisdaiCampoBase` permite tener campos de entrada vinculados siempre a una etiqueta corrigiendo así el error más común de accesibilidad. Opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo. 

<section id="uso">

## Uso

Para utilizar el componente `SisdaiCampoBase`, se necesita proporcionar el texto que aparecerá en la `etiqueta`, 

A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiCampoBase 
  etiqueta="Nombre de la etiqueta"
  ejemplo="Ejemplo"
  tipo="text"
  texto_ayuda="Texto de ayuda."
  :es_obligatorio="false"
  :es_etiqueta_visible="true"
  v-model="campoEjemplo"
/>
```

Vista simplificada

En la vista simplificada el componente `SisdaiCampoBase` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y eventos:

### Propiedades

- `etiqueta`: texto de la etiqueta del campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `tipo`: corresponde al tipo de campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `'text'`
  - Requerido: sí
- `ejemplo`: texto de ejemplo del campo que se muestra dentro del campo cuando está vacío.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: opcional
- `texto_ayuda`: texto que aparece debajo del campo para proporcionar ayuda de llenado para la persona usuaria.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
  - Requerido: opcional
- `es_etiqueta_visible`: para declarar si la etiqueta es visible o no en la vista.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `true`
  - Requerido: sí
- `es_obligatorio`: para declarar si el campo es obligatorio u opcional.
  - Tipo de dato: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: sí

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

El siguiente ejemplo muestra cómo utilizar el campo base:

<EjemploBasico />
<<< @/.vitepress/components/campo-base/basico.vue
</section>
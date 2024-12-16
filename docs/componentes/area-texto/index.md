<script setup>
import EjemploBasico from "../../.vitepress/components/area-texto/basico.vue";
</script>

# Area de Texto

El componente `SisdaiAreaTexto` permite tener campos de entrada multilínea vinculados siempre a una etiqueta corrigiendo así el error más común de accesibilidad. Opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo y un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo. 

<section id="uso">

## Uso

Para utilizar el componente `SisdaiAreaTexto`, se necesita proporcionar el texto que aparecerá en la `etiqueta`, 

A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiAreaTexto 
  etiqueta="Nombre de la etiqueta"
  ejemplo="Ejemplo"
  texto_ayuda="Texto de ayuda."
  :es_obligatorio="false"
  :es_etiqueta_visible="true"
  v-model="areaEjemplo"
/>
```
## Accesibilidad

Al utilizar el componente `SisdaiAreaTexto` nos aseguramos que la etiqueta y el área de texto siempre estén vinculados, ya sea visible su etiqueta o no. 

### Validaciones

Actualmente el componente `SisdaiAreaTexto` valida automáticamente cuando es requerido, mostrando el mensaje de error `'Este campo no puede quedar vacío. '`. Las implementaciones de otros tipos de error deberán crearse en el momento de su uso. 

### Vista simplificada

En la vista simplificada el componente `SisdaiAreaTexto` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y eventos:

### Propiedades

- `etiqueta`: texto de la etiqueta del campo.
  - Tipo de dato: `String`
  - Valor predeterminado: `''`
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

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

El siguiente ejemplo muestra cómo utilizar el area de texto:

<EjemploBasico />
<<< @/.vitepress/components/area-texto/basico.vue
</section>
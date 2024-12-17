<script setup>
import EjemploBasico from "../../.vitepress/components/casilla-verificacion/casilla-basica.vue";
import EjemploCompleto from "../../.vitepress/components/casilla-verificacion/casilla-completa.vue";
import EjemploAgrupado from "../../.vitepress/components/casilla-verificacion/casilla-agrupada.vue";
</script>

# Casilla de verificación

  El componente `SisdaiCasillaVerificacion` permite tener casillas de verificación vinculadas siempre a una etiqueta corrigiendo así el error más común de accesibilidad. Opcionalmente podemos definir si es obligatorio, agregar un texto de ejemplo, un mensaje de ayuda para que la persona usuaria comprenda como debe llenarse el campo y un título independiente de la etiqueta.

<section id="uso">

  ## Uso

  Para utilizar el componente `SisdaiCasillaVerificacion`, se necesita proporcionar el texto que aparecerá en la `etiqueta` y el `model_value` con una variable booleana; el `id` se genera automáticamente.

  A continuación, se muestra un ejemplo de uso de etiqueta simple:

  ```html
  <SisdaiCasillaVerificacion
    etiqueta="Nombre de la etiqueta"
    v-model="campoEjemplo"
  />
  ```

  ## Accesibilidad

  Al utilizar el componente `SisdaiCasillaVerificacion` nos aseguramos que la etiqueta y el área de texto siempre estén vinculados.

  ### Validaciones

  El componente `SisdaiCasillaVerificacion` valida automáticamente cuando es requerido, mostrando el mensaje de error `'Esta casilla necesita estar verificada. '`. Las implementaciones de otros tipos de error deberán crearse en el momento de su uso.

  ### Vista simplificada

  En la vista simplificada el componente `SisdaiCasillaVerificacion` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

  Este componente admite las siguientes propiedades y eventos:

  ### Propiedades

  - `titulo`: titulo del campo.
    - Tipo de dato: `String`
    - Valor predeterminado: `''`
    - Requerido: no
  - `etiqueta`: texto de la etiqueta del campo.
    - Tipo de dato: `String`
    - Valor predeterminado: `''`
    - Requerido: sí
  - `texto_ayuda`: texto que aparece debajo del campo para proporcionar ayuda de llenado para la persona usuaria.
    - Tipo de dato: `String`
    - Valor predeterminado: `''`
    - Requerido: opcional
  - `es_obligatorio`: para declarar si el campo es obligatorio u opcional.
    - Tipo de dato: `Boolean`
    - Valor predeterminado: `false`
    - Requerido: opcional
  - `es_ayuda_visible`: para declarar si el mensaje de ayuda es visible por casilla.
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

  ### Casilla única de verificación

  El siguiente ejemplo muestra cómo utilizar la casilla de verificación de la manera más sencilla cuando es un campo único.

  <EjemploBasico />
  <<< @/.vitepress/components/casilla-verificacion/casilla-basica.vue

  Adicionalmente se pueden utilizar más elementos del componente para dar más detalle.

  <EjemploCompleto />
  <<< @/.vitepress/components/casilla-verificacion/casilla-completa.vue

  ### Casillas agrupadas de verificación

  Para agrupar multiples casillas de verificación en un solo grupo, se utiliza el componente `SisdaiCasillasVerificacionGrupo`.

  Este componente admite las propiedades de:
  - `leyenda`: titulo del grupo.
    - Tipo de dato: `String`
    - Valor predeterminado: `''`
    - Requerido: si
  - `texto_ayuda`: texto de ayuda para la persona usuaria.
    - Tipo de dato: `String`
    - Valor predeterminado: `''`
    - Requerido: no
  - `es_obligatorio`: para poner la etiqueta de obligatoriedad.
    - Tipo de dato: `Boolean`
    - Valor predeterminado: `false`
    - Requerido: no
  - `es_vertical`: para acomodar las casillas de verificacion de manera vertical.
    - Tipo de dato: `Boolean`
    - Valor predeterminado: `false`
    - Requerido: no

  <EjemploAgrupado />
  <<< @/.vitepress/components/casilla-verificacion/casilla-agrupada.vue
</section>

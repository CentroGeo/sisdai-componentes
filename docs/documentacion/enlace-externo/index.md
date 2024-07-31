<script setup>
import EjemploBasico from "../../.vitepress/components/enlace-externo/basico.vue";
</script>

# Enlace externo

El componente `SisdaiEnlaceExterno` funciona para crear enlaces externos dentro de párrafos u otros elementos. Incluye los atributos `target="_blank"` y `rel="noopener noreferrer"`para asegurar que los enlaces se abran de una nueva pestaña y mantengan la seguridad del navegador.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiEnlaceExterno`, incorpora el componente en tu plantilla y proporciona los atributos `enlace` y `texto` para definir el URL y el texto del enlace, respectivamente. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiEnlaceExterno
  :enlace="'...'"
  :texto="'...'"
/>
```

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades:

### Propiedades

- `enlace`: indica la ruta o el enlace al que se dirige el componente.
  - Tipo: `String`
  - Valor predeterminado: `'#'`
  - Requerido: sí
- `texto`: indica el texto que se debe pulsar para acceder al enlace.
  - Tipo: `String`
  - Valor predeterminado: `'Enlace externo'`
  - Requerido: sí

### Métodos

Este componente no tiene métodos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

#### Enlace

El color del enlace se hereda de Sisdai Css y el pictograma que lo acompaña viene de la fuente de pictogramas sisdai-pictogramas.

<!-- <utils-ejemplo-doc ruta="enlace-externo/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/enlace-externo/basico.vue

</section>

<script setup>
import EjemploBasico from "../../.vitepress/components/enlace-externo/basico.vue";
</script>

# Enlace externo

Este pequeño componente funciona para crear enlaces externos dentro de párrafos u otros elementos, el cual incluye los atributos `target="_blank" rel="noopener noreferrer"`.

Uso:

```html
<SisdaiEnlaceExterno
  :enlace="'...'"
  :texto="'...'"
/>
```

<section id="api">

## API

### Propiedades

- `enlace`: Indica la ruta o el enlace al que dirige el componente.
  - Tipo: `String`
  - Valor predeterminado: `'#'`
  - Requerido: si
- `texto`: Indica el texto clickeable para acceder al enlace
  - Tipo: `String`
  - Valor predeterminado: `'Enlace externo'`
  - Requerido: si

### Métodos

Este componente no tiene métodos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplo

#### Enlace

El color del enlace se hereda de Sisdai Css y el pictograma que lo acompaña viene de la fuente de pictogramas sisdai-pictogramas.

<!-- <utils-ejemplo-doc ruta="enlace-externo/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/enlace-externo/basico.vue

</section>

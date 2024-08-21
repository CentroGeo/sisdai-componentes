<script setup>
import EjemploBasico from "../../.vitepress/components/control-acercar-alejar/basico.vue";
</script>

# Control para acercar y alejar

El componente `SisdaiControlAcercarAlejar` es un elemento que se utiliza para manipular la escala visual de un elemento o área dentro de una aplicación o sitio web. Esta funcionalidad se emplea en el [Sisdai](https://sisdai.conahcyt.mx/) en aplicaciones de mapas, visualizadores de imágenes, visualizaciones de datos y otras interfaces donde se manejan objetos o contenido visual.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiControlAcercarAlejar`, incorpora el componente en tu plantilla y enlaza la propiedad `v-model` a una variable que controle el nivel de zoom. A continuación, se muestra una ejemplo de etiqueta simple:

```html
<SisdaiControlAcercarAlejar v-model="valor" />
```

Vista simplificada

En la vista simplificada el componente `SisdaiControlAcercarAlejar` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades:

### Propiedades

- `v-model`: el valor numérico del control.
  - Tipo de dato: `Number`
  - Requerido: sí
- `min`: el valor mínimo del componente.
  - Tipo de dato: `Number`
  - Valor predeterminado: `0`
  - Requerido: no
- `max`: el valor máximo del componente.
  - Tipo de dato: `Number`
  - Valor predeterminado: `100`
  - Requerido: no

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

A continuación, se presenta un ejemplo de uso del control para acercar y alejar:

<!-- <utils-ejemplo-doc ruta="control-acercar-alejar/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/control-acercar-alejar/basico.vue

</section>

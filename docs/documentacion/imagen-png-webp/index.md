<script setup>
import EjemploBasico from "../../.vitepress/components/imagen-png-webp/basico.vue";
</script>

# ImagenPngWebp

El componente `SisdaiImagenPngWebp` permite indicar el nombre de dos archivos existentes como insumos del proyecto en formato PNG y WebP.

<section id="uso">

## Uso

Para utilizar el componente `SisdaiImagenPngWebp`, incorpora en tu plantilla y proporciona los atributos `dominio`, `ruta`, `textoAlternativo`, `leyenda` y `ancho_maximo` para definir los detalles de la imagen. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiImagenPngWebp
  :dominio="'..'"
  :ruta="'..'"
  :textoAlternativo="'..'"
  :leyenda="'..'"
  :ancho_maximo="'..'"
/>
```

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades:

### Propiedades

- `dominio`: propiedad que indica el dominio en el cual se encuentran las imágenes. Este se concatena con la ruta del archivo, descrita a continuación.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `ruta`: ruta del archivo, incluyendo el nombre de este, que se concatena con el dominio.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: sí
- `textoAlternativo`: este texto se puede especificar como atributo `alt` para describir la imagen. Es una buena práctica de accesibilidad y de desarrollo indicarlo cuando la imagen lo requiere.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `leyenda`: este texto descriptivo se inserta como `figcaption` de la imagen. Sirve para agregar un pie de imagen.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `ancho_maximo`: indica el ancho máximo que puede ocupar la imagen. Es de ayuda cuando la imagen no debe superar una cantidad de píxeles de ancho.
  - Tipo: `String`
  - Valor predeterminado: `'100%'`
  - Requerido: no

### Métodos

Este componente no tiene métodos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Imagen con leyenda y ancho máximo

En este caso se muestra una ímagen cuyo nombre es `'reticula_03'`. En la ruta resultante deben existir los archivos `'reticula_03.png'` y `'reticula_03.webp'`.

<!-- <utils-ejemplo-doc ruta="imagen-png-webp/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/imagen-png-webp/basico.vue

</section>

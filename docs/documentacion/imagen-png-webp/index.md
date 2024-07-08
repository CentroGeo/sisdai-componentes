---
layout: LayoutDocumentacion
sectionName: imagen-png-webp
---

# ImagenPngWebp

Este componente permite indicar el nombre de dos archivos existentes como insumos del proyecto en formato png y webp.

Uso:

```html
<SisdaiImagenPngWebp
  :dominio="'..'"
  :ruta="'..'"
  :textoAlternativo="'..'"
  :leyenda="'..'"
  :ancho_maximo="'..'"
/>
```

<section id="api">

## API

### Propiedades

- `dominio` Propiedad que indica el dominio en el cual se encuntran las imágenes. Este se concatenará con la ruta del archivo, descrita a continuación.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: si
- `ruta` Ruta del archivo, incluyendo el nombre de este, que se concatena con el dominio.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: si
- `textoAlternativo` Este texto se puede especificar como atributo `alt` para describir la ímagen. Es una buena práctica de accesibilidad y de desarrollo indicarlo cuando la imagen lo requiere.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `leyenda` Este texto descriptivo se inserta como `figcaption` de la imagen. Sirve para agregar un pie de imagen.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: no
- `ancho_maximo` Esta propieda indica el ancho máximo que puede ocupar la imagen. Es de ayuda cuando, por ejemplo, la imagen no debe superar una cantidad de pixeles de ancho.
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

## Ejemplos

#### Imagen con leyenda y ancho máximo

En este caso se muestra una ímagen cuyo nombre es `'reticula_03'`. En la ruta resultante deben existir los archivos `'reticula_03.png'` y `'reticula_03.webp'`.

<utils-ejemplo-doc ruta="imagen-png-webp/basico.vue"/>

</section>

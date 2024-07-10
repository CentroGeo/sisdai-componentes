<script setup>
import EjemploBasico from "../../.vitepress/components/narrativa-scroll/basico.vue";
import EjemploElaborado from "../../.vitepress/components/narrativa-scroll/ejemplo-elaborado.vue";
</script>

# Narrativa scroll

Esta sección explica el uso del componente `SisdaiNarrativaScroll` el cual cambia imágenes de fondo conforme se escrolean algunos bullets.

Uso:

```html
<SisdaiNarrativaScroll></SisdaiNarrativaScroll>
```

<section id="api">

## API

- `id_scroll`: (_String_) Identificar único del componente
- `bullets`: (_Array_) Arreglo de objetos, que genera el contenido de los bullets asociadoes a su imagen, en donde cada objeto tiene los siguientes valores:

  - `html`: (_String_) texto que irá en cada bullet, acepta html.
  - `imagen`: (_String_) ruta de la imagen
    por default tiene el siguiente valor, que ayuda a ejemplificar su estructura:

    ```js
    ;[
      {
        html: `<div class="contenedor-portada">
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <div class="contenedor ancho-lectura p-1">
                <h1 class="texto-centrado texto-color-1">
                  Sistema de Diseño y Accesibilidad para la Investigación
                </h1>
              </div>
            </div>
          </div>
        </div>`,
        imagen: 'https://placekitten.com/1920/1080',
      },
      {
        html: '<p>bullet 1</p>',
        imagen: 'https://placekitten.com/1920/1082',
      },
      {
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1042',
      },
    ]
    ```

- `depurador`: (_Boolean_) Cuando el valor es `true`, se muestra una línea roja que ayuda a visualizar en qué posición de las secciones se disparan las transiciones de las imágenes de fondo. Cuando es `false`, no se muestra. El valor por default es `false`
- `altura_sensor`: (_Number_) Número entre 0 y 1 que determina la altura de la pantalla a la cual se dispara la transición. si es 0, las transiciones se disparan cuando sale un bullet de pantalla. Si es 1, las transiciones se ejecutan cuando entra el bullet a pantalla

- `degradado_inicial`: (_Boolean_) Por default es `true`, y significa que hará una transición continua en los degradados de fondo de los primeros dos bullets, ya que este efecto suele usarse en las portadas de sisdai. Si es `false`, no coloca degradados extras

### Métodos

-`obtenerElementos` Este método asigna a `lista_elementos` los elementos html que se generaron mediante el listado de bullets

-`scroleando` Es la función que se ejecuta cada que se hace un scroll para detectar la posición de la narrativa y ejecutar transiciones según se indique

</section>

<section id="ejemplos">

## Ejemplos

A continuación podrás observar un ejemplo muy básico del uso por default. Podrás observar que los bullets no tienen estilo predeterminado, sino que este tendrá que ser definido por la persona usuaria, tal como se muestra en el segundo ejemplo

<!-- <utils-ejemplo-doc ruta="narrativa-scroll/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/narrativa-scroll/basico.vue

El siguiente ejemplo es algo más elaborado, pero combina de manera ilustrativa la mayoría de las propiedades. Mueve el slider para modificar la altura del depurador. Se agregaron bordes verdes a las secciones para ilustrar los momentos de la transición de imágenes y estilos a los bullets

<!-- <utils-ejemplo-doc ruta="narrativa-scroll/ejemplo-elaborado.vue"/> -->
<EjemploElaborado />
<<< @/.vitepress/components/narrativa-scroll/ejemplo-elaborado.vue

</section>

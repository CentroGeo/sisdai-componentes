<script setup>
import EjemploBasico from "../../.vitepress/components/control-acercar-alejar/basico.vue";
</script>

# Control Acercar Alejar

El control para acercar y alejar es un elemento que se utiliza para manipular la escala visual de un elemento o área dentro de una aplicación o sitio web. Esta funcionalidad se emplea en el Sisdai en aplicaciones de mapas, visualizadores de imágenes, visualizaciones de datos y otras interfaces donde se manejan objetos o contenido visual.

Uso:

```html
<SisdaiControlAcercarAlejar v-model="valor" />
```

<section id="api">

## API

### Propiedades

- **v-model**
  El valor numerico del control.
  - Tipo: `Number`
  - Requerido: si
- **min**
  El valor minimo del componente

  - Tipo: `Number`
  - Valor predeterminado: `0`
  - Requerido: no

- **max**
  El valor maximo del componente
  - Tipo: `Number`
  - Valor predeterminado: `100`
  - Requerido: no

</section>

<section id="ejemplos">

## Ejemplos

<!-- <utils-ejemplo-doc ruta="control-acercar-alejar/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/control-acercar-alejar/basico.vue

</section>

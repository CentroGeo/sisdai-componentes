<script setup>
import { ref } from 'vue'
const altura = ref(0.2)
</script>
<template>
  <div class="contenedor-ejemplo-basico-narrativa-scroll">
    <div class="controles">
      depurador: {{ altura }}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="altura"
      />
    </div>
    <SisdaiNarrativaScroll
      :id_scroll="'ejemplo-elaborado-narrativa-scroll'"
      :depurador="true"
      :altura_sensor="altura"
      :bullets="[
        {
          html: `<div class=&quot;contenedor-portada&quot;>
          <div class=&quot;degradado-negro-abajo&quot;>
            <div class=&quot;contenido-abajo&quot;>
              <div class=&quot;contenedor ancho-lectura p-1&quot;>
                <h1 class=&quot;texto-centrado texto-color-1&quot;>
                  Sistema de Diseño y Accesibilidad para la Investigación
                </h1>
              </div>
            </div>
          </div>
        </div>`,
          imagen:
            'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/persi.jpg',
        },
        {
          html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit.</p>',
          imagen:
            'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/nilo.jpg',
        },
        {
          html: '<p>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Ultrices in iaculis nunc sed augue.</p>',
          imagen:
            'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/shuri-nezzie.jpg',
        },
        {
          html: '<p>bullet 3</p>',
          imagen:
            'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/guiza.jpg',
        },
      ]"
    ></SisdaiNarrativaScroll>
  </div>
</template>

<style>
#ejemplo-elaborado-narrativa-scroll article div.bullet {
  border: 1px solid rgb(0, 255, 0);
}
#ejemplo-elaborado-narrativa-scroll article div.bullet p {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin: auto;
  max-width: 300px;
  padding: 16px;
}
</style>

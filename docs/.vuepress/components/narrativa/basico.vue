<script setup>
import { ref, watch, computed } from 'vue'
const miNarrativa = ref()
const depurador = ref(true)
const altura_sensor = ref(0.5)
const separacion = ref(1)
const posicion_inicial = ref(1)

// cuando se cambia a una viñeta par, se colorean de azul
watch(
  d => miNarrativa.value?.seccion_visible,
  nv => {
    if (nv % 2 == 0) {
      miNarrativa.value?.lista_elementos.forEach(element => {
        element.style.backgroundColor = '#8889ff'
      })
    } else {
      miNarrativa.value?.lista_elementos.forEach(element => {
        element.style.backgroundColor = ''
      })
    }
  }
)
</script>

<template>
  <SisdaiNarrativa
    ref="miNarrativa"
    :depurador="depurador"
    :altura_sensor="+altura_sensor"
    :separacion="+separacion"
    :posicion_inicial="+posicion_inicial"
    class="contenedor ancho-lectura"
  >
    <template #contenido-fondo-sticky>
      <div
        class="contenedor"
        id="fondo"
        :style="{
          backgroundColor: `rgb(255,${150 + 20 * miNarrativa?.posicion_normalizada},${255 - 10 * miNarrativa?.posicion_normalizada})`,
        }"
      >
        <div class="p-2 p-y-10">
          <input
            type="checkbox"
            id="depurador"
            name="depurador"
            v-model="depurador"
          />
          <label for="depurador"> Depurador: {{ depurador }}</label>
          <br />

          <label for="altura_sensor"> altura_sensor: {{ altura_sensor }}</label>

          <input
            type="range"
            id="altura_sensor"
            name="altura_sensor"
            v-model="altura_sensor"
            min="0"
            max="1"
            step=".01"
          />
          <label for="separacion">separacion: {{ separacion }}</label>

          <input
            type="range"
            id="separacion"
            name="separacion"
            v-model="separacion"
            min="0"
            max="1"
            step=".01"
          />
          <label for="posicion_inicial">
            posicion_inicial: {{ posicion_inicial }}</label
          >

          <input
            type="range"
            id="posicion_inicial"
            name="posicion_inicial"
            v-model="posicion_inicial"
            min="0"
            max="1"
            step=".01"
          />
        </div>
      </div>
    </template>
    <p
      class="vineta p-1 conahcyt-fondo-claro-1 contenedor ancho-lectura contenedor-izq borde-redondeado-4"
    >
      Viñeta 0
    </p>
    <div class="vineta p-1 conahcyt-fondo-claro-1">Viñeta 1</div>
    <div class="vineta p-1 conahcyt-fondo-claro-1">Viñeta 2</div>
    <div class="vineta p-1 conahcyt-fondo-claro-1">Viñeta 3</div>
  </SisdaiNarrativa>
</template>
<style scoped>
#fondo {
  height: 100vh;
  position: relative;
}
</style>

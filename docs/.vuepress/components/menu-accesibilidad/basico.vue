<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const menuAccesibilidad = ref(null)

function alSeleccionarOpcion(opcion) {
  alert(`Accesibilidad: ${opcion}`)
}
</script>

<template>
  <div
    class="contenerdor-panttalla-simulada"
    :class="menuAccesibilidad?.clasesSelecciondas"
  >
    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      :id="'xBasico'"
      @alSeleccionarOpcion="alSeleccionarOpcion"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>

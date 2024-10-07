<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const menuAccesibilidad = ref(null)

function alSeleccionarOpcion(opcion) {
  alert(`Accesibilidad: ${opcion}`)
}
</script>
<template>
  <div class="contenerdor-panttalla-simulada">
    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      :id="'basico'"
      @alSeleccionarOpcion="alSeleccionarOpcion"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>

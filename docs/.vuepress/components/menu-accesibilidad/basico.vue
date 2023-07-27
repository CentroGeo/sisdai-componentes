<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const menuAccesibilidad = ref(null)

function alSeleccionarOpcion(opcion) {
  alert(`Accesibilidad: ${opcion.titulo}`)
}
</script>

<template>
  <div
    class="contenerdor-panttalla-simulada"
    :class="menuAccesibilidad?.clasesSelecciondas"
  >
    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      @alSeleccionarOpcion="alSeleccionarOpcion"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>

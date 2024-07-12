<script setup>
import ElementosParaVerAccesibilidad from './elementos-para-ver-accesibilidad.vue'
import { ref } from 'vue'

const menuAccesibilidad = ref(null)

const opcionCursiva = {
  accion: 'alternarCursivaDestacada',
  claseCss: 'a11y-cursiva-destacada',
  icono: 'pictograma-estrella',
  titulo: 'Cursiva destacada',
}
</script>

<template>
  <div
    class="contenerdor-panttalla-simulada agregando-opcion"
    :class="menuAccesibilidad?.clasesSelecciondas"
  >
    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      :id="'agregando-opciones'"
      :agregarOpciones="[opcionCursiva]"
    />

    <ElementosParaVerAccesibilidad />
  </div>
</template>

<style>
.contenerdor-panttalla-simulada.agregando-opcion.a11y-cursiva-destacada i {
  background-color: tomato;
}
</style>

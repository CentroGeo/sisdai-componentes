<script setup>
import store from './../../store'
import { onMounted } from 'vue'
onMounted(() => {
  window.location.href = './documentacion'
})
</script>

<template>
  <div
    class="theme-container"
    :class="store.getters['accesibilidad/clasesAccesibles']"
  >
    <SisdaiNavegacionGobMx />

    <nav-navegacion-principal />

    <main
      role="main"
      class="contenedor m-y-maximo"
    >
      <Content />
    </main>

    <SisdaiPiePaginaConahcyt />

    <SisdaiPiePaginaGobMx />

    <SisdaiMenuAccesibilidad :objetoStore="store" />
  </div>
</template>

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
    :class="store.state.accesibilidad.clasesAccesibles"
  >
    <!-- <SisdaiNavegacionGobMx /> -->

    <!-- <nav-navegacion-principal /> -->

    <!-- <SisdaiMenuAccesibilidad :objetoStore="store" /> -->

    <!-- <main
      role="main"
      class="contenedor m-y-maximo"
    >
      <Content />
    </main> -->

    <!-- <SisdaiPiePaginaConahcyt /> -->

    <!-- <SisdaiPiePaginaGobMx /> -->
  </div>
</template>

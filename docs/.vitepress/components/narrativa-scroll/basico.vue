<script setup>
import { ref } from 'vue'
const altura = ref(0.2)
</script>
<template>
  <div class="contenedor-ejemplo-basico-narrativa-scroll">
    <SisdaiNarrativaScroll
      :id_scroll="'ejemplo-basico-narrativa-scroll'"
      :depurador="false"
    ></SisdaiNarrativaScroll>
  </div>
</template>

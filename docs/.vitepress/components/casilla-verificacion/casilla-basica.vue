<script setup>
import { ref } from 'vue'
const campoEjemplo = ref(false)
</script>
<template>
  <SisdaiCasillaVerificacion 
    etiqueta="Nombre de la etiqueta"
    v-model="campoEjemplo"
  />
</template>

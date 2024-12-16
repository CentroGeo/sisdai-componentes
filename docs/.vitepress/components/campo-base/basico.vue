<script setup>
import { ref } from 'vue'
const campoEjemplo = ref('')
</script>
<template>
  <SisdaiCampoBase 
    etiqueta="Nombre de la etiqueta"
    ejemplo="Ejemplo"
    :es_obligatorio="false"
    :es_etiqueta_visible="true"
    v-model="campoEjemplo"
    texto_ayuda="Texto de ayuda."
  />
</template>

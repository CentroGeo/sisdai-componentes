<script setup>
import { ref } from 'vue'
const areaEjemplo = ref('')
</script>
<template>
  <SisdaiAreaTexto 
    etiqueta="Nombre de la etiqueta"
    ejemplo="Ejemplo"
    :es_obligatorio="false"
    :es_etiqueta_visible="true"
    v-model="areaEjemplo"
    texto_ayuda="Texto de ayuda."
  />
</template>

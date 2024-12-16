<script setup>
  import { ref } from 'vue'
  const campoEjemplo = ref(false)
</script>
<template>
  <SisdaiCasillaVerificacion 
    titulo="Título del campo"
    etiqueta="Nombre de la etiqueta"
    v-model="campoEjemplo"
    texto_ayuda="Mensaje de ayuda"
    :es_obligatorio="true"
    :es_ayuda_visible="true"
  />
</template>

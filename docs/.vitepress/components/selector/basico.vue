<script setup>
import { ref } from 'vue'
const seleccionEjemplo = ref('')
</script>
<template>
  <SisdaiSelector
    etiqueta="Selector de ejemplo"
    v-model="seleccionEjemplo"
    texto_ayuda="Texto de ayuda."
  >
    <option value="1">
      Opcion Uno
    </option>
    <option value="2">
      Opcion Dos
    </option>
    <option value="3">
      Opcion Tres
    </option>
  </SisdaiSelector>
</template>

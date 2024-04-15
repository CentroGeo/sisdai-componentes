<script setup>
import { ref } from 'vue'

const valor = ref(50)
</script>

<template>
  <SisdaiControlAcercarAlejar
    v-model.number="valor"
    min="0"
    max="100"
  />
</template>

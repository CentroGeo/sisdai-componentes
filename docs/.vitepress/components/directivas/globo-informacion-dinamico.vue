<script setup>
import { ref } from 'vue'
const contenido = ref('<b>Hola</b> editame!')
</script>

<template>
  <div>
    <client-only>
      <p>Edita el texto para ver como se actualiza el globo de información</p>
      <button v-globo-informacion="contenido">pasa el cursor sobre mi</button>
      <input
        type="text"
        v-model="contenido"
      />
    </client-only>
  </div>
</template>

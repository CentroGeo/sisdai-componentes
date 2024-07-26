<script setup>
import { ref } from 'vue'

const contenido = ref('<b>Hola</b> edítame!')
</script>
<template>
  <div>
    <client-only>
      <p>Edita el texto para ver cómo se actualiza el globo de información</p>
      <button v-globo-informacion="contenido">pasa el cursor sobre mí</button>
      <input
        type="text"
        v-model="contenido"
      />
    </client-only>
  </div>
</template>

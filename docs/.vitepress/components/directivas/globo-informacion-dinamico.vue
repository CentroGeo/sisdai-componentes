<script setup>
import { ref } from 'vue'

const contenido = ref('<b>Hola</b> edítame!')
</script>
<template>
  <div>
    <client-only>
      <p>Edita el texto para ver cómo se actualiza el globo de información</p>
      <button
        v-globo-informacion="contenido"
        class="boton-primario m-b-2"
      >
        pasa el cursor o haz foco aquí
      </button>
      <input
        type="text"
        v-model="contenido"
      />
    </client-only>
  </div>
</template>

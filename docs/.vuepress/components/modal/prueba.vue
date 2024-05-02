<script setup>
import { ref } from 'vue'
const sisdaiModal = ref(null)
</script>

<template>
  <div>
    <SisdaiModal ref="sisdaiModal">
      <div class="modal-contenido"></div>
    </SisdaiModal>

    <button @click="sisdaiModal?.abrirModal()">Abrir Modal</button>
  </div>
</template>

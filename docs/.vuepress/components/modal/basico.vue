<script setup>
import { ref } from 'vue'

const nombre_modal = ref(null)

function abreModal() {
  nombre_modal.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal ref="nombre_modal">
      <template v-slot:encabezado> encabezado </template>
      <template v-slot:cuerpo> cuerpo </template>
      <template v-slot:pie> pie </template>
    </SisdaiModal>
    <button @click="abreModal()">Abrir Modal</button>
  </div>
</template>

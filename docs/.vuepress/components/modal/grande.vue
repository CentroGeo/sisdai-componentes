<script setup>
import { ref } from 'vue'
const sisdaiModal = ref(null)
</script>

<template>
  <div>
    <SisdaiModal
      ref="sisdaiModal"
      tamanioModal="grande"
    >
      <div class="modal-contenido">
        <h1>Título de modal</h1>
        <div class="flex flex-contenido-equidistante">
          <div class="columna-5-esc"></div>
          <div class="columna-6-esc"></div>
          <div class="columna-5-esc"></div>
        </div>
      </div>
    </SisdaiModal>

    <button @click="sisdaiModal?.abrirModal()">Modal Grande</button>
  </div>
</template>

<style lang="scss" scoped>
.modal-contenido {
  .flex {
    row-gap: 24px;
    div {
      background-color: var(--detalle-fondo);
      height: 600px;
      border-radius: 20px;
      @media (max-width: 768px) {
        height: 50px;
      }
    }
  }
}
</style>

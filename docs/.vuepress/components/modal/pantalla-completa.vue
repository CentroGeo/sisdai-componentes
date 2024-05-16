<script setup>
import { ref } from 'vue'
const sisdaiModal = ref(null)
</script>

<template>
  <div>
    <SisdaiModal
      ref="sisdaiModal"
      tamanioModal="pantalla-completa"
    >
      <div class="modal-contenido">
        <img
          src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/par.jpg"
          alt=""
        />
      </div>
    </SisdaiModal>

    <button @click="sisdaiModal?.abrirModal()">Modal Pantalla Completa</button>
  </div>
</template>

<style lang="scss" scoped>
.modal-contenido {
  padding: 40px 96px;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
}
</style>

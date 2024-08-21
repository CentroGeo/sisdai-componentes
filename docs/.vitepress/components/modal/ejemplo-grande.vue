<script setup>
import { ref } from 'vue'

const sisdaiModal = ref(null)
</script>
<template>
  <div>
    <SisdaiModal
      ref="sisdaiModal"
      tamanioModal="modal-grande"
    >
      <template #encabezado>
        <h1 class="m-t-0">Título de modal grande</h1>
      </template>

      <template #cuerpo>
        <div class="flex flex-contenido-equidistante">
          <div class="columna-5-esc"></div>
          <div class="columna-6-esc"></div>
          <div class="columna-5-esc"></div>
        </div>
      </template>

      <template #pie>
        <button
          type="button"
          class="boton-primario"
          @click="sisdaiModal?.cerrarModal()"
          value="acepta"
        >
          Aceptar
        </button>
      </template>
    </SisdaiModal>

    <button
      type="button"
      @click="sisdaiModal?.abrirModal()"
    >
      Modal Grande
    </button>
  </div>
</template>

<style lang="scss" scoped>
.modal-cuerpo {
  .flex {
    row-gap: 24px;
    div {
      background-color: var(--fondo-neutro);
      height: 600px;
      border-radius: 20px;
      @media (max-width: 768px) {
        height: 50px;
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'
const sisdaiModal = ref(null)

const salida = ref()
function descargaAlgo() {
  sisdaiModal.value.cerrarModal()
  salida.value = 'descargando...'
}
</script>

<template>
  <div>
    <SisdaiModal
      ref="sisdaiModal"
      tamanioModal="chico"
    >
      <div class="modal-contenido">
        <!-- TODO:columas -->
        <h1>
          <span class="icono-archivo-descargar icono-3 m-r-1"></span>Descargar
          datos con más de una línea
        </h1>

        <div>
          <p><b>Selección de datos</b></p>
          <input
            id="radio1"
            type="radio"
            name="radioses1"
          />
          <label for="radio1">Todos los datos</label>
          <br />
          <input
            id="radio2"
            type="radio"
            name="radioses1"
          />
          <label for="radio2">Mi selección de datos</label>

          <p><b>Formato de archivo</b></p>
          <input
            id="radio3"
            type="radio"
            name="radioses3"
          />
          <label for="radio3">.csv (Valores separados por comas)</label>
          <br />
          <input
            id="radio4"
            type="radio"
            name="radioses4"
          />
          <label for="radio4">.xls (Archivo de Excel)</label>
        </div>

        <button
          class="boton-primario m-t-5"
          value="descarga"
          @click="descargaAlgo()"
        >
          Descargar
        </button>
      </div>
    </SisdaiModal>

    <button @click="sisdaiModal?.abrirModal()">Modal Básico</button>
    <p>{{ salida }}</p>
  </div>
</template>

<style lang="scss" scoped>
.modal-contenido {
  h1 {
    font-size: 1.5rem;
    margin-top: 0;
  }
  button.boton-primario {
    display: block;
    margin-left: auto;
    margin-right: 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>

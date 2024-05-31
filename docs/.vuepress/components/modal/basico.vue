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
      :tituloModal="` <span
            class='icono-archivo-descargar icono-3 m-r-1'
            aria-hidden='true'
          ></span
          >Descargar datos con más de una línea`"
      tamanioModal="chico"
    >
      <div class="modal-contenido">
        <div class="grid">
          <div class="columna-16">
            <p><b>Selección de datos</b></p>
            <input
              id="radio1"
              type="radio"
              name="radioses1"
            />
            <label for="radio1">Todos los datos</label>
            <input
              id="radio2"
              type="radio"
              name="radioses2"
            />
            <label for="radio2">Mi selección de datos</label>

            <p><b>Formato de archivo</b></p>
            <input
              id="radio3"
              type="radio"
              name="radioses3"
            />
            <label for="radio3">.csv (Valores separados por comas)</label>
            <input
              id="radio4"
              type="radio"
              name="radioses4"
            />
            <label for="radio4">.xls (Archivo de Excel)</label>
          </div>
        </div>

        <p class="modal-pie">
          <button
            class="boton-primario"
            value="descarga"
            @click="descargaAlgo()"
          >
            Descargar
          </button>
        </p>
      </div>
    </SisdaiModal>

    <button @click="sisdaiModal?.abrirModal()">Modal Básico</button>
    <p>{{ salida }}</p>
  </div>
</template>

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
    <SisdaiModal ref="sisdaiModal">
      <template #encabezado>
        <h1 class="m-t-0 texto-tamanio-6">
          <span
            class="pictograma-archivo-descargar p-l-0 p-t-0"
            aria-hidden="true"
          ></span
          >Descargar datos con más de una línea
        </h1>
      </template>

      <template #cuerpo>
        <div class="grid">
          <div class="columna-16">
            <p class="m-t-0"><b>Selección de datos</b></p>
            <input
              id="radio1"
              type="radio"
              name="datos"
            />
            <label for="radio1">Todos los datos</label>
            <br />
            <input
              id="radio2"
              type="radio"
              name="datos"
            />
            <label for="radio2">Mi selección de datos</label>

            <p><b>Formato de archivo</b></p>
            <input
              id="radio3"
              type="radio"
              name="archivo"
            />
            <label for="radio3">.csv (Valores separados por comas)</label>
            <br />
            <input
              id="radio4"
              type="radio"
              name="archivo"
            />
            <label for="radio4">.xls (Archivo de Excel)</label>
          </div>
        </div>
      </template>

      <template #pie>
        <button
          type="button"
          class="boton-primario"
          value="descarga"
          @click="descargaAlgo()"
        >
          Descargar
        </button>
        <button
          type="button"
          class="boton-secundario"
          value="cancela"
          @click="sisdaiModal.cerrarModal()"
        >
          Cancelar
        </button>
      </template>
    </SisdaiModal>

    <button
      type="button"
      @click="sisdaiModal?.abrirModal()"
    >
      Modal Básico
    </button>
    <p>{{ salida }}</p>
  </div>
</template>

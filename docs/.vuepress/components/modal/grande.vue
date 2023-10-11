<script setup>
import { ref } from 'vue'

const nombre_modal_3 = ref(null)

function abreModal() {
  nombre_modal_3.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal
      ref="nombre_modal_3"
      tamanio="grande"
    >
      <template v-slot:encabezado>
        <div class="encabezado-cuerpo">
          <span class="icono-archivo-descargar"></span>
          <p class="titulo-modal">Descargar datos 3</p>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal m-t-3">
          <div>
            <p class="subtitulo-modal m-t-0">Selección datos</p>
            <div>
              <input
                id="radio1"
                type="radio"
                name="radioses1"
              />
              <label for="radio1">Todos los datos</label>
            </div>
            <div>
              <input
                id="radio2"
                type="radio"
                name="radioses1"
              />
              <label for="radio2">Mi selección de datos</label>
            </div>
          </div>
          <div>
            <p class="subtitulo-modal">Formato de archivo</p>
            <div>
              <input
                id="radio3"
                type="radio"
                name="radioses2"
              />
              <label for="radio3">.csv (Valores separados por comas)</label>
            </div>
            <div>
              <input
                id="radio4"
                type="radio"
                name="radioses2"
              />
              <label for="radio4">.xls (Archivo de Excel)</label>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <div class="pie-modal m-t-5">
          <button
            type="button"
            class="boton-primario"
          >
            Descargar
          </button>
        </div>
      </template>
    </SisdaiModal>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="abreModal()"
    >
      Modal Grande
    </button>
  </div>
</template>

<style lang="scss" scoped>
.encabezado-cuerpo {
  display: flex;
  .titulo-modal {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0px;
  }
  .icono-archivo-descargar {
    margin-right: 8px;
    font-size: 24px;
  }
}
.cuerpo-modal {
  .subtitulo-modal {
    font-weight: 600;
  }
}
.pie-modal {
  margin-left: auto;
  @media (max-width: 768px) {
    width: 100%;
    .boton-primario {
      width: 100%;
      justify-content: center;
    }
  }
}
.text-bold {
  font-weight: 500;
}
.text-regular {
  font-weight: 400;
}
</style>

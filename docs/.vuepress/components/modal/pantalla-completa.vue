<script setup>
import { ref } from 'vue'

const nombre_modal_5 = ref(null)

function abreModal() {
  nombre_modal_5.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal
      class="modal-5"
      ref="nombre_modal_5"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado>
        <div class="carrusel-encabezado">
          <div class="carrusel-indice">
            <span>2 de 3</span>
          </div>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-cuerpo">
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
          </div>
          <div class="imagen-info">
            <p class="nombre-imagen m-0">
              Grupos de suelos de erosión eólica de acuerdo a WB
            </p>
            <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <button class="boton-primario boton-chico">
          Descargar
          <span class="icono-archivo-descargar"></span>
        </button>
      </template>
    </SisdaiModal>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="abreModal()"
    >
      Modal Pantalla Completa 2
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
.modal-5 {
  .carrusel-encabezado {
    .carrusel-indice {
      background: #f6f6f6;
      font-size: 0.875rem;
      border-radius: 20px;
      padding: 8px;
    }
  }
  .cuerpo-modal {
    margin-top: 32px;
    .imagen-info {
      margin-top: 16px;
      .nombre-imagen {
        font-size: 0.875rem;
        font-weight: 500;
      }
      .formato-peso-imagen {
        font-size: 0.875rem;
        font-weight: 400;
        margin-top: 4px;
        margin-bottom: 0px;
      }
    }
  }
  .boton-primario {
    margin: 48px auto 0;
  }
}
.text-bold {
  font-weight: 500;
}
.text-regular {
  font-weight: 400;
}
</style>

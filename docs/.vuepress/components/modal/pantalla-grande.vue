<script setup>
import { ref } from 'vue'

const nombre_modal_4 = ref(null)

function abreModal() {
  nombre_modal_4.value._setupState.abrirModal()
}
</script>

<template>
  <div>
    <SisdaiModal
      class="modal-4"
      ref="nombre_modal_4"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado></template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-encabezado">
            <div class="carrusel-info">
              <div class="carrusel-indice">
                <span>2 de 3</span>
              </div>
              <div>
                <p class="nombre-imagen m-0">
                  Grupos de suelos de erosión eólica de acuerdo a WB
                </p>
                <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
              </div>
            </div>
            <button class="boton-primario boton-chico">
              Descargar
              <span class="icono-archivo-descargar"></span>
            </button>
          </div>
          <div class="carrusel-cuerpo">
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-izquierdo"></span>
            </button>
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-derecho"></span>
            </button>
          </div>
        </div>
      </template>
      <template v-slot:pie></template>
    </SisdaiModal>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="abreModal()"
    >
      Modal Pantalla Completa 1
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
.modal-4 {
  .cuerpo-modal {
    .carrusel-encabezado {
      padding: 0px 89.5px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .carrusel-info {
        display: flex;
        align-items: flex-start;
        gap: 33px;
        .carrusel-indice {
          background: #f6f6f6;
          border-radius: 20px;
          font-size: 0.875rem;
          padding: 8px;
        }
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
      .boton-primario {
        margin-left: auto;
      }
    }
    .carrusel-cuerpo {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .imagen {
        background: #f6f6f6;
        width: 100%;
        height: 100%;
        .imagen-prueba {
          width: 792px;
          display: block;
          margin: 0 auto;
        }
      }
      .boton-terciario {
        padding: 0px 28px;
        margin: 0px;
        .icono-angulo-izquierdo,
        .icono-angulo-derecho {
          font-size: 24px;
          padding: 4px;
        }
      }
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

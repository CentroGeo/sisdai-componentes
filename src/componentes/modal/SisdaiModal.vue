<script>
const propiedades = {
  tamanio: {
    type: String,
    default: 'chico',
  },
}
</script>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount, ref, toRefs } from 'vue'

const esta_abierto = ref(false)

const props = defineProps(propiedades)
const { tamanio } = toRefs(props)

function cerrarModal() {
  esta_abierto.value = false
  document.querySelector('body').classList.remove('overflow-hidden')
}
/* eslint-disable */
function abrirModal() {
  esta_abierto.value = true
  document.querySelector('body').classList.add('overflow-hidden')
}

function onEscapeKeyUp(event) {
  if (event.which === 27) {
    cerrarModal()
  }
}

onBeforeMount(() => {
  window.addEventListener('keyup', onEscapeKeyUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', onEscapeKeyUp)
})

const overflowYX = computed(() => {
  if (tamanio.value === 'pantalla-completa') {
    return 'overflow-x-y'
  }
  return ''
})
</script>

<template>
  <transition name="fade">
    <div
      class="modal"
      :class="overflowYX"
      v-if="esta_abierto"
    >
      <div
        class="modal-fondo-trasero"
        @click="cerrarModal()"
      />
      <div
        class="modal-contenedor"
        :class="tamanio"
      >
        <div class="modal-encabezado">
          <slot name="encabezado" />
          <button
            class="btn-icono icono-cerrar modal-cerrar"
            @click="cerrarModal()"
          ></button>
        </div>
        <div class="modal-cuerpo">
          <slot name="cuerpo" />
        </div>
        <div class="modal-pie">
          <slot name="pie" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  @media (max-width: 768px) {
    top: inherit;
  }
  &.overflow-x-y {
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-fondo-trasero {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &-contenedor {
    background-color: #fff;
    position: relative;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 24px;
    z-index: 2;
    @media (max-width: 768px) {
      margin: inherit;
      padding: 24px 24px 40px;
    }
    &.chico {
      width: 462px;
      @media (max-width: 768px) {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.mediano {
      width: 616px;
      @media (max-width: 768px) {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.grande {
      width: 924px;
      @media (max-width: 768px) {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.pantalla-completa {
      width: 100%;
      height: auto;
      margin: 0px;
      border-radius: 0px;
    }
  }
  button.modal-cerrar {
    background: none;
    box-shadow: none;
    border: none;
    padding: 8px;
    color: #000;
    font-weight: 700;
    margin-left: auto;
    font-size: 16px;
    &:hover {
      color: #000;
    }
  }
  &-encabezado {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &-cuerpo {
  }
  &-pie {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

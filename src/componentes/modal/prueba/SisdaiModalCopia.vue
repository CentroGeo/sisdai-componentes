<script>
const propiedades = {
  tamanioModal: {
    type: String,
    default: 'chico',
  },
}
</script>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount, ref, toRefs } from 'vue'

const esta_abierto = ref(false)

const props = defineProps(propiedades)
const { tamanioModal } = toRefs(props)

const overflowYX = computed(() => {
  if (tamanioModal.value === 'pantalla-completa') {
    return 'overflow-x-y'
  }
  return ''
})

/**
 * Método para cerrar el modal
 */
function cerrarModal() {
  esta_abierto.value = false
  document.querySelector('body').classList.remove('overflow-hidden')
}
/**
 * Método para abrir el modal
 */
function abrirModal() {
  esta_abierto.value = true
  document.querySelector('body').classList.add('overflow-hidden')
}
/**
 * Método que detecta si la tecla esc
 * es presionada para cerrar el modal
 */
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

defineExpose({
  abrirModal,
  cerrarModal,
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
      ></div>

      <div
        class="modal-contenedor"
        :class="tamanioModal"
      >
        <button
          class="boton-icono boton-sin-borde icono-3 modal-cerrar"
          @click="cerrarModal()"
        >
          <span class="icono-cerrar" />
          <span class="a11y-solo-lectura">Cerrar.</span>
        </button>

        <div class="modal-cuerpo">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>

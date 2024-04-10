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

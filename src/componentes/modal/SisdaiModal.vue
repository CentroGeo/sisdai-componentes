<script>
const propiedades = {
  tituloModal: { type: String, default: '' },
  tamanioModal: {
    type: String,
    default: '',
  },
}
</script>

<script setup>
import { onBeforeMount, onBeforeUnmount, ref, toRefs } from 'vue'

const modal = ref()
const idModal = idAleatorio()

const props = defineProps(propiedades)
const { tamanioModal } = toRefs(props)

/**
 * Esta función nos sirve para obtener un id aleatorio para el componente
 * @returns {String} Cadena con prefijo "modal-" contatenado con un string aleatorio
 */
function idAleatorio() {
  return 'modal-' + Math.random().toString(36).substring(2)
}

/**
 * Método para cerrar el modal y remover la clase overflow-hidden del body
 */
function cerrarModal() {
  document.querySelector('body').classList.remove('overflow-hidden')

  modal.value = document.getElementById(idModal)
  modal.value.close()
}
/**
 * Método para abrir el modal y agregar la clase overflow-hidden al body
 */
function abrirModal() {
  document.querySelector('body').classList.add('overflow-hidden')

  modal.value = document.getElementById(idModal)
  modal.value.showModal()
}

/**
 * Método que detecta si la tecla esc es presionada para cerrar el modal
 */
function siPresionaTeclaEscape(event) {
  if (event.which === 27) {
    document.querySelector('body').classList.remove('overflow-hidden')
  }
}
/**
 * Método para cerrar el Modal si se da click fuera de este o en el :backdrop
 * mientras esté abierto
 * @param {Object} event
 */
function clickFueraDelModal(event) {
  modal.value = document.getElementById(idModal)
  if (event.target === modal.value) {
    cerrarModal()
  }
}

onBeforeMount(() => {
  window.addEventListener('keyup', siPresionaTeclaEscape)
  window.addEventListener('click', function (event) {
    clickFueraDelModal(event)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', siPresionaTeclaEscape)
  window.addEventListener('click', function (event) {
    clickFueraDelModal(event)
  })
})

defineExpose({
  abrirModal,
  cerrarModal,
  idModal,
})
</script>

<template>
  <dialog
    role="dialog"
    :id="idModal"
    :class="tamanioModal"
    class="modal"
    aria-modal="true"
    autofocus
  >
    <!-- TODO: que itere entre las opciones de tab dentro del modal -->
    <div class="modal-contenedor">
      <div class="modal-cuerpo">
        <h1
          class="titulo-modal"
          v-html="tituloModal"
        ></h1>
        <slot />
      </div>

      <button
        class="boton-icono boton-sin-borde icono-3 modal-cerrar"
        value="cerrar"
        @click="cerrarModal()"
      >
        <span
          class="icono-cerrar"
          aria-hidden="true"
        />
        <span class="a11y-solo-lectura">Cerrar.</span>
      </button>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.modal-contenedor {
  // TODO: este no puede estar acá, sino desde sisdai-css
  h1 {
    font-size: 1.5rem;
    margin-top: 0;
  }
}
</style>

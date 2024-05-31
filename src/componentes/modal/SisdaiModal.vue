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
import useFocusTrap from '../../composables/useFocusTrap'

const { trapRef } = useFocusTrap()

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

/** Cierra el modal y remover la clase overflow-hidden del body */
function cerrarModal() {
  document.querySelector('body').classList.remove('overflow-hidden')

  modal.value = document.getElementById(idModal)
  modal.value.close()
}
/** Abre el modal y agregar la clase overflow-hidden al body */
function abrirModal() {
  document.querySelector('body').classList.add('overflow-hidden')

  modal.value = document.getElementById(idModal)
  modal.value.showModal()
}

/** Revisa si la tecla Esc fue presionada para cerrar el modal */
function siPresionaTeclaEscape(event) {
  if (event.which === 27) {
    document.querySelector('body').classList.remove('overflow-hidden')
  }
}
/**
 * Revisa si se da click fuera del modal o en el :backdrop
 * mientras esté abierto para cerrarlo
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
  window.addEventListener('click', clickFueraDelModal)
})

onBeforeUnmount(() => {
  window.removeEventListener('keyup', siPresionaTeclaEscape)
  window.addEventListener('click', clickFueraDelModal)
})

defineExpose({
  abrirModal,
  cerrarModal,
  idModal,
})
</script>

<template>
  <dialog
    :id="idModal"
    class="modal"
    ref="trapRef"
    role="dialog"
    :class="tamanioModal"
    aria-labelledby="titulo_modal"
    aria-modal="true"
  >
    <div class="modal-contenedor">
      <div class="modal-cuerpo">
        <h1
          id="titulo_modal"
          class="titulo-modal"
          v-html="tituloModal"
        ></h1>

        <slot />
      </div>

      <button
        class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar"
        value="cerrar"
        @click="cerrarModal()"
      >
        <span
          class="pictograma-cerrar"
          aria-hidden="true"
        />
        <span class="a11y-solo-lectura"> Cerrar Modal. </span>
      </button>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.modal-contenedor {
  h1.titulo-modal {
    font-size: 1.5rem;
    margin-top: 0;
  }
}
</style>

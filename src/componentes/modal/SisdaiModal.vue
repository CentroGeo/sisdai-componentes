<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<script>
const propiedades = {
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
const id_aleatorio = idAleatorio()

const props = defineProps(propiedades)
const { tamanioModal } = toRefs(props)

/**
 * Esta función nos sirve para obtener un id aleatorio para el componente
 * @returns {String} Cadena con prefijo "modal-" concatenado con un string aleatorio
 */
function idAleatorio() {
  return 'modal-' + Math.random().toString(36).substring(2)
}

/** Cierra el modal y remover la clase overflow-hidden del body */
function cerrarModal() {
  document.querySelector('body').classList.remove('overflow-hidden')

  modal.value = document.getElementById(id_aleatorio)
  modal.value.close()
}
/** Abre el modal y agregar la clase overflow-hidden al body */
function abrirModal() {
  document.querySelector('body').classList.add('overflow-hidden')

  modal.value = document.getElementById(id_aleatorio)
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
  modal.value = document.getElementById(id_aleatorio)
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
  id_aleatorio,
})
</script>

<template>
  <dialog
    :id="id_aleatorio"
    class="modal"
    :class="tamanioModal"
    aria-labelledby="titulo_modal"
    ref="trapRef"
  >
    <div class="modal-contenedor">
      <div class="modal-cabecera">
        <slot name="encabezado">
          <h1>Título del modal</h1>
        </slot>
      </div>

      <div class="modal-cuerpo">
        <slot name="cuerpo"></slot>
      </div>

      <div class="modal-pie">
        <slot name="pie"></slot>
      </div>

      <button
        type="button"
        role="button"
        class="boton-pictograma boton-sin-contenedor-secundario modal-cerrar"
        aria-label="Cerrar modal"
        value="cerrar"
        @click="cerrarModal()"
      >
        <span
          class="pictograma-cerrar"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </dialog>
</template>

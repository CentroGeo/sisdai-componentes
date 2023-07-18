<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  activo: { type: Boolean, default: false },
})
const esta_activo = ref(props.activo)

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const listadoContenido = ref({})

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está cerrado
 */
function agregaAtributoTabIndex() {
  if (esta_activo.value === false) {
    for (let index = 0; index < listadoContenido.value.length; index++) {
      const elemento = listadoContenido.value[index]['children'][0]
      elemento.tabIndex = '-1'
    }
  }
}

/**
 * Si el menú está desplegado, remueve el atributo tabIndex.
 * Si está colapsado, agrega el atributo tabIndex en -1 para
 * saltarse los enlaces con el teclado secuencial.
 */
function actualizaAtributoTabIndex(estaAbierto) {
  if (estaAbierto) {
    for (let index = 0; index < listadoContenido.value.length; index++) {
      const elemento = listadoContenido.value[index]['children'][0]
      elemento.removeAttribute('tabIndex')
    }
  } else {
    for (let index = 0; index < listadoContenido.value.length; index++) {
      const elemento = listadoContenido.value[index]['children'][0]
      elemento.tabIndex = '-1'
    }
  }
}

onMounted(() => {
  listadoContenido.value = document.getElementById(id_aleatorio)['children']
  agregaAtributoTabIndex()
})

watch(esta_activo, () => {
  actualizaAtributoTabIndex(esta_activo.value)
})
</script>

<template>
  <li
    :class="{ activo: esta_activo }"
    class="colapsable-navegacion"
  >
    <button
      :aria-expanded="esta_activo ? 'true' : 'false'"
      class="colapsable-boton-submenu"
      @click="esta_activo = !esta_activo"
    >
      {{ props.titulo }}
      <span
        aria-hidden="true"
        class="nav-boton-submenu"
      ></span>
    </button>
    <ul
      :id="id_aleatorio"
      class="colapsable-submenu"
    >
      <slot name="listado-contenido">
        <li>
          <a
            href="https://github.com/salsa-community/sisdai-componentes/"
            target="_blank"
            tabindex="-1"
          >
            Elemento desplegado</a
          >
        </li>
      </slot>
    </ul>
  </li>
</template>

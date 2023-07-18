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
    <ul class="colapsable-submenu">
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

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  activo: { type: Boolean, default: false },
})
const esta_activo = ref(props.activo)

/**
 * Si el menú está desplegado, remueve el atributo tabIndex.
 * Si está colapsado, agrega el atributo tabIndex en -1 para
 * saltarse los enlaces con el teclado secuencial.
 */
watch(esta_activo, () => {
  const contenidoLista = document.getElementsByTagName('a')

  if (esta_activo.value) {
    for (var i = 0; i < contenidoLista.length; i++) {
      contenidoLista[i].removeAttribute('tabIndex')
    }
  } else {
    for (var j = 0; j < contenidoLista.length; j++) {
      contenidoLista[j].tabIndex = '-1'
    }
  }
})
</script>

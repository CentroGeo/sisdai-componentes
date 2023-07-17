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
          >
            Elemento desplegado</a
          >
        </li>
      </slot>
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  activo: { type: Boolean, default: false },
})
const esta_activo = ref(props.activo)
</script>

<template>
  <li
    :class="{ activo: esta_activo }"
    class="colapsable-navegacion"
  >
    <button
      class="colapsable-boton-submenu nav-boton-submenu"
      @click="esta_activo = !esta_activo"
      aria-hidden="true"
    >
      {{ props.titulo }}
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

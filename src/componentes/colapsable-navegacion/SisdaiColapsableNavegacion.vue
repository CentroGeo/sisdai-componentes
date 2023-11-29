<script setup>
import { ref, toRefs, watch } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  activo: { type: Boolean, default: false },
  avisarMenuLateral: { type: Boolean, default: true },
})
// eslint-disable-next-line
const esta_activo = ref(props.activo)
const { avisarMenuLateral } = toRefs(props)

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const emits = defineEmits(['alAlternarColapsable'])

watch(esta_activo, () => {
  emits('alAlternarColapsable', esta_activo.value)
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
      :tabindex="avisarMenuLateral ? undefined : -1"
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
            href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
            target="_blank"
            :tabindex="esta_activo ? undefined : -1"
          >
            Elemento desplegado</a
          >
        </li>
      </slot>
    </ul>
  </li>
</template>

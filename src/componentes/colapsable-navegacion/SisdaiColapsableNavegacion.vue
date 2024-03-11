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

<script setup>
import { ref, toRefs, watch } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Titulo de colapsable' },
  colapsado: { type: Boolean, default: false },
  avisarMenuLateral: { type: Boolean, default: true },
})
// eslint-disable-next-line
const { colapsado, avisarMenuLateral } = toRefs(props)
const _colapsado = ref(colapsado.value)
watch(colapsado, nv => (_colapsado.value = nv))

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

//const emits = defineEmits(['alAlternarColapsable'])

/*watch(esta_activo, () => {
  emits('alAlternarColapsable', esta_activo.value)
})*/
</script>

<template>
  <div
    :class="{ activo: _colapsado }"
    class="contenedor-colapsable"
  >
    <button
      :aria-expanded="_colapsado"
      class="colapsable-boton p-x-5-esc p-x-3-mov p-y-1"
      @click="_colapsado = !_colapsado"
      :tabindex="avisarMenuLateral ? undefined : -1"
    >
      <div class="contenedor-encabezado-colapsable">
        <slot name="encabezado">
          <p class="m-0">Encabezado colapsable</p>
        </slot>
      </div>
      <div class="p-t-1">
        <span
          aria-hidden="true"
          class="nav-boton-submenu"
        ></span>
      </div>
    </button>
    <div class="contenedor-colapsable-contenido">
      <slot name="contenido">
        <ul :id="id_aleatorio">
          <li>
            <a
              href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
              target="_blank"
              class="p-x-5-esc p-x-3-mov p-y-1"
              :tabindex="_colapsado ? undefined : -1"
            >
              Elemento desplegado</a
            >
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

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
import { computed, ref, toRefs, watch } from 'vue'

import { useAccesibilidadStore } from '../../stores'
const store = useAccesibilidadStore()

const props = defineProps({
  colapsado: { type: Boolean, default: false },
  avisarMenuLateral: { type: Boolean, default: true },
})

// eslint-disable-next-line
const { colapsado, avisarMenuLateral } = toRefs(props)
const _colapsado = ref(colapsado.value)

watch(colapsado, nv => (_colapsado.value = nv))

function idAleatorio() {
  return 'colapsable-navegacion-' + Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const clasesAccesibles = computed(() => {
  return store.clasesAccesibles
})

const emits = defineEmits(['alAlternarColapsable'])

watch(_colapsado, () => {
  emits('alAlternarColapsable', _colapsado.value)
})

watch(clasesAccesibles, (nv, ov) => {
  // Descolapsa la navegación si la vista simplificada está activada
  if (clasesAccesibles.value.includes('a11y-simplificada')) {
    _colapsado.value = true
  } else {
    if (ov.includes('a11y-simplificada')) {
      _colapsado.value = false
    }
  }
})
</script>

<template>
  <div
    class="colapsable"
    :class="{ abierto: _colapsado }"
  >
    <button
      class="colapsable-boton"
      aria-controls="colapsableboton"
      :aria-expanded="_colapsado"
      @click="_colapsado = !_colapsado"
      :tabindex="avisarMenuLateral ? undefined : -1"
    >
      <slot name="encabezado">
        <p>Encabezado colapsable</p>
      </slot>

      <span
        aria-hidden="true"
        class="pictograma-angulo-derecho"
      ></span>
      <span class="a11y-solo-lectura">Abrir o cerrar colapsable</span>
    </button>

    <div
      class="colapsable-contenedor"
      id="colapsablecontenedor"
      :aria-hidden="!_colapsado"
    >
      <slot name="contenido">
        <ul :id="id_aleatorio">
          <li>
            <a
              href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
              target="_blank"
              rel="noopener noreferrer"
              exact
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

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
import { onMounted, ref, toRefs, watch } from 'vue'

const props = defineProps({
  colapsado: { type: Boolean, default: false },
  avisarMenuLateral: { type: Boolean, default: true },
})

// eslint-disable-next-line
const { colapsado, avisarMenuLateral } = toRefs(props)
const _colapsado = ref(colapsado.value)

const colapsablecontenedor = ref(null)
onMounted(() => {
  alternarTabIndex(colapsado.value)
})

watch(colapsado, nv => (_colapsado.value = nv))

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const emits = defineEmits(['alAlternarColapsable'])

watch(_colapsado, nv => {
  emits('alAlternarColapsable', nv)
  alternarTabIndex(nv)
})

function alternarTabIndex(val) {
  // _ver(colapsablecontenedor?.value)
  // _ver(colapsablecontenedor?.value.children[0])
  // _ver(colapsablecontenedor?.value.children[0].children)

  Array.from(colapsablecontenedor?.value.children[0].children).forEach(e => {
    // _ver(e)
    // _ver(e.children[0])

    if (Array.from(e.children[0].classList).includes('colapsable')) {
      // _ver('tab al botón')
      e.children[0].firstChild.tabIndex = val ? 0 : -1
      // _ver(e.children[0].firstChild)
      // return
    } else {
      // _ver('tab al index')
      e.children[0].tabIndex = val ? 0 : -1
      // _ver(e.children[0])
    }
  })

  // obtener los elementos interactivos hijos que no estén dentro de un class="colapsable" hijo de este componente
  // const elementosInteractivos = [
  //   ...Array.from(colapsablecontenedor?.value.getElementsByTagName('a')),
  //   ...Array.from(colapsablecontenedor?.value.getElementsByTagName('button')),
  // ]

  // elementosInteractivos.forEach(elemento => {
  //   elemento.tabIndex = val ? 0 : -1
  //   // console.log(elemento)
  // })

  // for (let i = 0; i < enlaces.length; i++) {
  //   enlaces[i].tabIndex = val ? 0 : -1
  // }
}

// function _ver(msg) {
//   if (props.ver) {
//     console.log(msg)
//   }
// }
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
      <slot name="encabezado"> Encabezado colapsable </slot>

      <span
        aria-hidden="true"
        class="pictograma-angulo-derecho"
      ></span>
      <!-- <span class="a11y-solo-lectura">Abrir o cerrar colapsable</span> -->
    </button>

    <div
      class="colapsable-contenedor"
      ref="colapsablecontenedor"
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
              Elemento desplegado
            </a>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>

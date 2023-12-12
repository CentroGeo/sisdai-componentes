<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<script setup>
import { onMounted, ref, watch } from 'vue'

const menu_abierto = ref(false)

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const elementosLista = ref({})

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está en versión móvil
 */
function agregaAtributoTabIndex() {
  if (window.innerWidth < 768) {
    for (let index = 0; index < elementosLista.value.length; index++) {
      const elemento = elementosLista.value[index]['children'][0]
      elemento.tabIndex = '-1'
    }
  }
}

/**
 * Si el menú está abierto en móvil, remueve el atributo tabIndex.
 * Si está cerrado, agrega el atributo tabIndex en -1 para
 * saltarse los enlaces con el teclado secuencial.
 */
function actualizaAtributoTabIndex(estaAbierto) {
  if (window.innerWidth < 768) {
    if (estaAbierto) {
      for (let i = 0; i < elementosLista.value.length; i++) {
        const elemento = elementosLista.value[i]['children'][0]
        elemento.removeAttribute('tabIndex')
      }
    } else {
      for (let j = 0; j < elementosLista.value.length; j++) {
        const elemento = elementosLista.value[j]['children'][0]
        elemento.tabIndex = '-1'
      }
    }
  }
}
const contenidoMenuLateral = ref(null)
onMounted(() => {
  elementosLista.value =
    document.getElementById(id_aleatorio)['children'][0]['children'][0][
      'children'
    ]
  agregaAtributoTabIndex()
})

watch(menu_abierto, () => {
  actualizaAtributoTabIndex(menu_abierto.value)
})
</script>

<template>
  <nav
    class="menu-lateral-contenedor"
    aria-label="Menú secundario"
  >
    <div
      class="menu-mov"
      @click="menu_abierto = !menu_abierto"
      :class="{ abierto: menu_abierto }"
    >
      <button
        :aria-expanded="menu_abierto ? 'true' : 'false'"
        class="boton-icono boton-menu"
      >
        <span
          v-if="menu_abierto"
          class="icono-angulo-doble-izquierda"
          aria-hidden="true"
        ></span>
        <span
          v-else
          class="icono-angulo-doble-derecha"
          aria-hidden="true"
        ></span>
        <span class="a11y-solo-lectura"> Expandir o colapsar navegación</span>
      </button>
    </div>
    <div
      :id="id_aleatorio"
      class="menu-colapsable"
      :class="{ abierto: menu_abierto }"
    >
      <div
        class="menu-max-height"
        ref="contenidoMenuLateral"
      >
        <slot name="contenido-menu-lateral">
          <ul>
            <li><a href="#anchore"> anchore link prueba </a></li>
            <li>
              <a
                href="https://github.com/salsa-community/sisdai-componentes"
                rel="noopener"
                target="_blank"
              >
                <span
                  class="icono-social-github"
                  aria-hidden="true"
                ></span>
                ejemplo github
              </a>
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </nav>
</template>

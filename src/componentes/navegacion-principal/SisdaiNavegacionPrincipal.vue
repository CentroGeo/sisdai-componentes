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
import { defineProps, onMounted, ref, watch } from 'vue'
import { useMenuDesenfocable } from '../../composables/useMenuDesenfocable'

defineProps({
  navInformacion: {
    default: '',
    type: String,
  },
  fija: {
    default: true,
    type: Boolean,
  },
})

//Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenu = ref(null)
const navegacionPrincipal = ref(null)

const {
  menuEstaAbierto,
  alternarMenu,
  // eslint-disable-next-line
  alternarSubmenu,
} = useMenuDesenfocable(cuadroElementosMenu)

const navMenuConahcyt = ref({})

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está en versión móvil
 */
function agregaAtributoTabIndex() {
  if (window.innerWidth < 768) {
    for (let index = 0; index < navMenuConahcyt.value.length; index++) {
      const elemento = navMenuConahcyt.value[index]['children'][0]
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
      for (let i = 0; i < navMenuConahcyt.value.length; i++) {
        const elemento = navMenuConahcyt.value[i]['children'][0]
        elemento.removeAttribute('tabIndex')
      }
    } else {
      for (let j = 0; j < navMenuConahcyt.value.length; j++) {
        const elemento = navMenuConahcyt.value[j]['children'][0]
        elemento.tabIndex = '-1'
      }
    }
  }
}

onMounted(() => {
  navMenuConahcyt.value =
    document.getElementsByClassName('nav-menu')[1]['children']
  agregaAtributoTabIndex()
})

watch(menuEstaAbierto, () => {
  actualizaAtributoTabIndex(menuEstaAbierto.value)
})
</script>

<template>
  <nav
    class="navegacion navegacion-conahcyt"
    :class="{ 'navegacion-pegada': fija }"
    aria-label="Menú principal"
    ref="navegacionPrincipal"
  >
    <div class="nav-contenedor-identidad">
      <slot name="identidad">
        <a
          href="https://conahcyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo invertir"
            width="130"
            height="38"
            src="https://cdn.conacyt.mx/sisdai-archivos/conahcyt-azul.svg"
            alt="Conahcyt."
          />
        </a>
      </slot>
      <button
        @click="alternarMenu"
        :aria-expanded="menuEstaAbierto ? 'true' : 'false'"
        class="nav-boton-menu"
        :class="{ abierto: menuEstaAbierto }"
      >
        <span
          class="nav-icono-menu"
          aria-hidden="true"
        ></span>
        <span class="a11y-solo-lectura"
          >abrir y cerrar navegacion principal</span
        >
      </button>
      <div
        class="nav-informacion"
        v-html="navInformacion"
      ></div>
    </div>
    <div
      class="nav-menu-contedor"
      :class="{ abierto: menuEstaAbierto }"
    >
      <div
        class="nav-menu-principal"
        ref="cuadroElementosMenu"
        @click="alternarMenu"
      >
        <slot>
          <ul class="nav-menu">
            <li>
              <a
                class="nav-hipervinculo"
                href="/"
                >Inicio</a
              >
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="/acerca-de"
                >Acerca de</a
              >
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </nav>
</template>

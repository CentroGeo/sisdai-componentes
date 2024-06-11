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
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useMenuDesenfocable } from '../../composables/useMenuDesenfocable'

//Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenu = ref(null)
const { menuEstaAbierto, alternarMenu } =
  useMenuDesenfocable(cuadroElementosMenu)

const navMenuGobMx = ref({})

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está en versión móvil
 */
function agregaAtributoTabIndex() {
  if (window.innerWidth < 768) {
    for (let index = 0; index < navMenuGobMx.value.length; index++) {
      const elemento = navMenuGobMx.value[index]['children'][0]
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
      for (let i = 0; i < navMenuGobMx.value.length; i++) {
        const elemento = navMenuGobMx.value[i]['children'][0]
        elemento.removeAttribute('tabIndex')
      }
    } else {
      for (let j = 0; j < navMenuGobMx.value.length; j++) {
        const elemento = navMenuGobMx.value[j]['children'][0]
        elemento.tabIndex = '-1'
      }
    }
  }
}

const anchoNavegacion = ref(768)
const esColapsable = ref(false)

function validarNavegacionColapsable() {
  esColapsable.value = anchoNavegacion.value > window.innerWidth ? true : false
}

onMounted(() => {
  navMenuGobMx.value =
    document.getElementsByClassName('nav-menu')[0]['children']
  agregaAtributoTabIndex()

  validarNavegacionColapsable()
  window.addEventListener('resize', validarNavegacionColapsable)
})

onUnmounted(() => {
  window.removeEventListener('resize', validarNavegacionColapsable)
})

watch(menuEstaAbierto, () => {
  actualizaAtributoTabIndex(menuEstaAbierto.value)
})
</script>

<template>
  <nav
    class="navegacion navegacion-gobmx"
    :class="{ 'navegacion-extendida': !esColapsable }"
    aria-label="Menú Gobierno de México"
  >
    <div class="nav-contenedor-identidad">
      <a
        href="https://www.gob.mx/"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-hiperviculo-logo"
      >
        <img
          class="nav-logo"
          src="https://cdn.conacyt.mx/sisdai/recursos/gobmx.svg"
          alt="Gobierno de México."
          width="128"
          height="38"
        />
      </a>

      <button
        type="button"
        @click="alternarMenu"
        class="nav-boton-menu"
        :class="{ abierto: menuEstaAbierto }"
        :aria-expanded="menuEstaAbierto ? 'true' : 'false'"
        aria-label="Abrir/Cerrar menú de gobierno de México"
        aria-controls="menugobiernomexico"
      >
        <span class="nav-icono-menu"></span>
        <span class="a11y-solo-lectura"
          >abrir y cerrar navegacion del gobierno de México</span
        >
      </button>
    </div>

    <div
      id="menugobiernomexico"
      class="nav-menu-contenedor"
      :class="{ abierto: menuEstaAbierto }"
    >
      <div
        class="nav-menu-principal"
        ref="cuadroElementosMenu"
        tabindex="0"
        @click="alternarMenu"
      >
        <ul
          id="nav_menu_gobmx"
          class="nav-menu"
        >
          <li>
            <a
              href="https://coronavirus.gob.mx/"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Información sobre COVID-19</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/tramites"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Trámites</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/gobierno"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Gobierno</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/busqueda"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
            >
              <span
                class="pictograma-buscar"
                aria-hidden="true"
              ></span>
              <span class="a11y-solo-lectura">ir al buscador</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

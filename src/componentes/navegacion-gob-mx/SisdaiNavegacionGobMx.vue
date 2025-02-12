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
import { onMounted, ref, watch } from 'vue'
import { useMenuDesenfocable } from '../../composables/useMenuDesenfocable'

const props = defineProps({
  anchoNavegacion: {
    default: 768,
    type: Number,
  },
})

//Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenuRef = ref(null)

const {
  menuEstaAbierto,
  submenuEstaAbierto,
  esColapsable,

  alternarMenu,
  cerrarSubmenu,

  cerrarMenuSubmenu,
} = useMenuDesenfocable(cuadroElementosMenuRef)

const navMenuGobMx = ref({})

/**
 * Remueve el atributo tabindex a los elementos de lista para que enfoque.
 */
function removerTabIndex(menu) {
  for (let i = 0; i < menu.length; i++) {
    const elemento = menu[i]['children'][0]
    elemento.removeAttribute('tabIndex')
  }
}
/**
 * Agrega el atributo tabindex a los elementos de lista para que no enfoque.
 */
function agregarTabIndex(menu) {
  for (let j = 0; j < menu.length; j++) {
    const elemento = menu[j]['children'][0]
    elemento.tabIndex = '-1'
  }
}
/**
 * Alterna el atributo tabindex a los elementos lista según el tipo de menú
 * y la disposición del tamaño de pantalla: movil o escritorio.
 */
function alternarTabIndex() {
  if (props.anchoNavegacion > window.innerWidth) {
    // movil
    if (menuEstaAbierto.value) {
      removerTabIndex(navMenuGobMx.value)
    } else {
      agregarTabIndex(navMenuGobMx.value)
    }
  } else {
    // escritorio
    removerTabIndex(navMenuGobMx.value)
  }
}

onMounted(() => {
  // navMenuGobMx.value = document?.querySelectorAll(
  //   '#menugobiernomexico .nav-menu'
  // )[0]['children']
  navMenuGobMx.value =
    cuadroElementosMenuRef.value.querySelectorAll('.nav-menu')[0]['children']
  alternarTabIndex()
})

watch([menuEstaAbierto, submenuEstaAbierto], () => {
  alternarTabIndex()
})

const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>

<template>
  <nav
    class="navegacion navegacion-gobmx"
    :class="{ 'navegacion-extendida': !esColapsable }"
    aria-label="Menú de Gobierno de México"
    @mouseleave="cerrarSubmenu()"
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
          src="https://cdn.conahcyt.mx/sisdai-archivos/gobmx-2024.svg"
          alt="Gobierno de México."
          width="104.8"
          height="38"
        />
      </a>

      <button
        testid="nav-boton-menu"
        type="button"
        @click="alternarMenu"
        class="nav-boton-menu"
        :class="{ abierto: menuEstaAbierto || submenuEstaAbierto }"
        :aria-expanded="menuEstaAbierto || submenuEstaAbierto"
        aria-label="Menú de Gobierno"
        aria-controls="menugobiernomexico"
      >
        <span
          class="nav-icono-menu"
          aria-hidden="true"
        ></span>
      </button>
    </div>

    <div
      testid="nav-menu-contenedor"
      id="menugobiernomexico"
      class="nav-menu-contenedor"
      :class="{ abierto: menuEstaAbierto }"
    >
      <div
        class="nav-menu-principal"
        ref="cuadroElementosMenuRef"
        :tabindex="esColapsable ? 0 : -1"
      >
        <ul class="nav-menu">
          <li>
            <a
              testid="nav-hipervinculo"
              href="https://www.gob.mx/tramites"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              @mouseover="cerrarSubmenu()"
              @click="cerrarMenuSubmenu()"
              >Trámites</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/gobierno"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              @mouseover="cerrarSubmenu()"
              @click="cerrarMenuSubmenu()"
              >Gobierno</a
            >
          </li>
          <li>
            <a
              href="https://www.gob.mx/busqueda"
              class="nav-hipervinculo"
              aria-label="Ir a búsqueda"
              target="_blank"
              rel="noopener"
              @mouseover="cerrarSubmenu()"
              @click="cerrarMenuSubmenu()"
            >
              <span
                class="pictograma-buscar"
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

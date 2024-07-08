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
  navInformacion: {
    default: '',
    type: String,
  },
  anchoNavegacion: {
    default: 768,
    type: Number,
  },
})

// Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenuRef = ref(null)

const {
  menuEstaAbierto,
  submenuEstaAbierto,
  esColapsable,

  alternarMenu,
  abrirSubmenu,
  cerrarSubmenu,
  alternarSubmenu,

  cerrarMenuSubmenu,
  regresarMenu,
} = useMenuDesenfocable(cuadroElementosMenuRef, props.anchoNavegacion)

// Que el menu enfoque las secciones cuando esté abierto y cuando no no
const navMenu = ref({})
const navSubmenu = ref({})

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
  if (window.innerWidth < props.anchoNavegacion) {
    // movil
    if (menuEstaAbierto.value) {
      if (submenuEstaAbierto.value) {
        agregarTabIndex(navMenu.value)
        removerTabIndex(navSubmenu.value)
      } else {
        removerTabIndex(navMenu.value)
        agregarTabIndex(navSubmenu.value)
      }
    } else {
      agregarTabIndex(navMenu.value)
      agregarTabIndex(navSubmenu.value)
    }
  } else {
    // escritorio
    if (submenuEstaAbierto.value) {
      removerTabIndex(navSubmenu.value)
    } else {
      agregarTabIndex(navSubmenu.value)
    }
  }
}

onMounted(() => {
  navMenu.value = document.querySelectorAll(
    '#navegacionprincipal .nav-menu'
  )[0]['children']

  if (document.getElementsByClassName('nav-submenu')[0] !== undefined)
    navSubmenu.value =
      document.getElementsByClassName('nav-submenu')[0]['children']

  alternarTabIndex()
})

watch([menuEstaAbierto, submenuEstaAbierto], () => {
  alternarTabIndex()
})

defineExpose({
  submenuEstaAbierto,
  abrirSubmenu,
  alternarSubmenu,

  esColapsable,
  regresarMenu,

  cerrarSubmenu,
  cerrarMenuSubmenu,
})
</script>

<template>
  <nav
    class="navegacion navegacion-conahcyt navegacion-pegada"
    :class="{ 'navegacion-extendida': !esColapsable }"
    aria-label="Navegación principal"
    @mouseleave="cerrarSubmenu()"
  >
    <div class="nav-contenedor-identidad">
      <slot name="identidad">
        <a
          href="https://conahcyt.mx/"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo color-invertir"
            src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-azul.svg"
            alt="Conahcyt."
            width="130"
            height="38"
          />
        </a>
      </slot>

      <button
        type="button"
        @click="alternarMenu"
        class="nav-boton-menu"
        :class="{ abierto: menuEstaAbierto || submenuEstaAbierto }"
        :aria-expanded="menuEstaAbierto || submenuEstaAbierto"
        aria-label="Abrir/Cerrar navegación principal"
        aria-controls="navegacionprincipal"
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
        v-if="esColapsable"
        class="nav-informacion"
        v-html="navInformacion"
      ></div>
    </div>

    <div
      id="navegacionprincipal"
      class="nav-menu-contenedor"
      :class="{
        abierto: menuEstaAbierto,
        'submenu-abierto': submenuEstaAbierto,
      }"
    >
      <div class="nav-menu-complementario">
        <slot name="complementario"></slot>
      </div>

      <div
        class="nav-menu-principal"
        ref="cuadroElementosMenuRef"
        tabindex="0"
      >
        <slot>
          <ul class="nav-menu">
            <li>
              <a
                href="#"
                class="nav-hipervinculo"
                exact
                @mouseover="cerrarSubmenu()"
                @click="cerrarMenuSubmenu()"
                >Menú</a
              >
            </li>
            <li class="nav-contenedor-submenu">
              <button
                class="nav-boton-submenu"
                aria-haspopup="true"
                aria-controls="submenuEjemplo"
                :aria-expanded="submenuEstaAbierto"
                @mouseover="abrirSubmenu()"
                @click="alternarSubmenu"
              >
                Menú con submenu
              </button>
              <ul
                class="nav-submenu"
                :aria-hidden="!submenuEstaAbierto"
                :class="{ abierto: submenuEstaAbierto }"
              >
                <li v-if="esColapsable">
                  <button
                    class="nav-boton-regresar"
                    @click="regresarMenu()"
                  >
                    Submenu
                  </button>
                </li>
                <li>
                  <a
                    href="#eje"
                    class="nav-hipervinculo"
                    @click="cerrarMenuSubmenu()"
                    >Submenu uno</a
                  >
                </li>
                <li>
                  <a
                    href="#aja"
                    class="nav-hipervinculo"
                    @click="cerrarMenuSubmenu()"
                    >Submenu dos</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </nav>
</template>

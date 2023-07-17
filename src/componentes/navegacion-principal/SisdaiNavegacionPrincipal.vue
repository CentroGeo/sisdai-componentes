<script setup>
import { defineProps, ref } from 'vue'
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
const {
  menuEstaAbierto,
  alternarMenu,
  // eslint-disable-next-line
  alternarSubmenu,
} = useMenuDesenfocable(cuadroElementosMenu)
</script>

<template>
  <nav
    class="navegacion navegacion-conacyt"
    :class="{ 'navegacion-pegada': fija }"
    aria-label="navegación principal"
  >
    <div class="nav-contenedor-identidad">
      <slot name="identidad">
        <a
          href="https://conahcyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
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

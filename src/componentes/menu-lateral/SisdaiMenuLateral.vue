<template>
  <nav
    class="menu-lateral-contenedor"
    aria-label="navegación secundaria"
  >
    <div
      class="menu-mov"
      @click="menu_abierto = !menu_abierto"
      :class="{ abierto: menu_abierto }"
    >
      <button class="boton-icono boton-menu">
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
      class="menu-colapsable"
      :class="{ abierto: menu_abierto }"
    >
      <div class="menu-max-height">
        <slot name="contenido-menu-lateral">
          <router-link
            to="#routerlink"
            exact
          >
            router link prueba
          </router-link>
          <a href="#anchore"> anchore link prueba </a>
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
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menu_abierto = ref(false)
</script>

<script setup>
import { ref } from 'vue'

const pkg = require('../../../../package.json')
const navegacionPrincipal = ref(null)
</script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$frontmatter.sectionName || ''}</b>`"
    ref="navegacionPrincipal"
  >
    <ul class="nav-menu">
      <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/documentacion/"
        >
          Documentación
        </RouterLink>
      </li>
      <li class="nav-contenedor-submenu">
        <button
          class="nav-boton-submenu"
          @click="navegacionPrincipal?.alternarSubmenu()"
        >
          Menú con submenu
        </button>
        <ul
          class="nav-submenu"
          :class="{ abierto: navegacionPrincipal?.submenuEstaAbierto }"
        >
          <li>
            <button class="nav-boton-regresar">Menú con submenu</button>
          </li>
          <li>
            <a
              href="#"
              class="nav-hipervinculo"
              >Submenu</a
            >
          </li>
        </ul>
      </li>

      <li>
        <a
          :href="pkg.repository.url"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-hipervinculo"
        >
          v{{ pkg.version }}
        </a>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>

<script setup>
import { useRoute } from 'vitepress'
import { ref } from 'vue'
// https://router.vuejs.org/
const route = useRoute()
const SisdaiNavPpal = ref('')
</script>
<template>
  <div class="contenedor">
    <SisdaiNavegacionPrincipal
      :nav-informacion="`Sección: <b>${route.name}</b>`"
      ref="SisdaiNavPpal"
    >
      <!--Definiendo el logo del sitio-->
      <template #identidad>
        <a
          href="https://gema.conacyt.mx/"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-hiperviculo-logo"
        >
          <img
            src="https://cdn.conacyt.mx/sisdai-archivos/to-examples/logo-conacyt-gema.svg"
            class="nav-logo color-invertir"
            alt="Gema."
            width="232"
            height="38"
          />
        </a>
      </template>

      <!--Definiendo el contenido complementario del sitio-->
      <template #complementario>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-hipervinculo"
        >
          <b>IR A ENLACE EXTERNO</b>
        </a>
      </template>

      <!--Definiendo las secciones del sitio-->
      <ul class="nav-menu">
        <li>
          <a
            href="#"
            class="nav-hipervinculo"
            exact
            @mouseover="SisdaiNavPpal.cerrarSubmenu()"
            @click="SisdaiNavPpal.cerrarMenuSubmenu()"
            >Sección 1</a
          >
        </li>
        <li class="nav-contenedor-submenu">
          <button
            class="nav-boton-submenu"
            aria-haspopup="true"
            aria-controls="submenuEjemplo"
            :aria-expanded="SisdaiNavPpal.submenuEstaAbierto"
            @mouseover="SisdaiNavPpal.abrirSubmenu()"
            @click="SisdaiNavPpal.alternarSubmenu()"
          >
            Submenu
          </button>
          <ul
            class="nav-submenu"
            :aria-hidden="!SisdaiNavPpal.submenuEstaAbierto"
            :class="{ abierto: SisdaiNavPpal.submenuEstaAbierto }"
          >
            <li v-if="SisdaiNavPpal.esColapsable">
              <button
                class="nav-boton-regresar"
                @click="SisdaiNavPpal.regresarMenu()"
              >
                Submenu
              </button>
            </li>
            <li>
              <a
                href="#ejem"
                class="nav-hipervinculo"
                @click="SisdaiNavPpal.cerrarMenuSubmenu()"
                >Subsección 1</a
              >
            </li>
            <li>
              <a
                href="#ajam"
                class="nav-hipervinculo"
                @click="SisdaiNavPpal.cerrarMenuSubmenu()"
                >Subsección 2</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </SisdaiNavegacionPrincipal>
  </div>
</template>

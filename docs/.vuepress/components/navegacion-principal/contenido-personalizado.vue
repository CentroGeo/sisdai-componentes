<script setup>
import { ref } from 'vue'

const sisdai_nav_ppal = ref('')
function alternarSubmenu() {
  sisdai_nav_ppal.value._setupState.alternarSubmenu()
}

const aria_expanded = ref(false)
</script>
<template>
  <div class="contenedor">
    <SisdaiNavegacionPrincipal ref="sisdai_nav_ppal">
      <!--Definiendo el logo del sitio-->
      <template #identidad>
        <a
          href="https://gema.conacyt.mx/"
          target="_blank"
          class="nav-hiperviculo-logo"
        >
          <img
            class="nav-logo"
            style="width: 232px; height: 38px"
            src="https://cdn.conacyt.mx/sisdai-archivos/to-examples/logo-conacyt-gema.svg"
            alt="gema."
          />
        </a>
      </template>
      <!--Definiendo las secciones del sitio-->
      <ul class="nav-menu">
        <li>
          <a
            class="nav-hipervinculo"
            href="#"
            exact
            >Sección 1</a
          >
        </li>
        <li class="nav-contenedor-submenu">
          <button
            class="nav-boton-submenu"
            aria-haspopup="true"
            @click="alternarSubmenu"
            :aria-expanded="'' + aria_expanded"
            @focus="aria_expanded = true"
            @focusout="aria_expanded = false"
          >
            Submenu
          </button>
          <ul class="nav-submenu">
            <li>
              <button
                class="nav-boton-regresar"
                @click="alternarSubmenu"
              >
                Submenu
              </button>
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="/ejem"
                @focus="aria_expanded = true"
                @focusout="aria_expanded = false"
                >Subsección 1</a
              >
            </li>
            <li>
              <a
                class="nav-hipervinculo"
                href="/ejem"
                @focus="aria_expanded = true"
                @focusout="aria_expanded = false"
                >Subsección 2</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            class="nav-hipervinculo"
            href="/creditos"
            >Sección 2</a
          >
        </li>
      </ul>
    </SisdaiNavegacionPrincipal>
  </div>
</template>

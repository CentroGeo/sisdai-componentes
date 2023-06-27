<template>
  <nav
    class="navegacion navegacion-gobmx"
    aria-label="barra de navegación del gobierno de México"
  >
    <div class="nav-contenedor-identidad">
      <a
        href="https://www.gob.mx/"
        class="nav-hiperviculo-logo"
        target="_blank"
        rel="noopener"
      >
        <img
          width="128"
          height="38"
          class="nav-logo"
          src="https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg"
          alt="Gobierno de México."
        />
      </a>
      <button
        @click="alternarMenu"
        class="nav-boton-menu"
        :class="{ abierto: menuEstaAbierto }"
      >
        <span class="nav-icono-menu"></span>
        <span class="a11y-solo-lectura"
          >abrir y cerrar navegacion del gobierno de México</span
        >
      </button>
    </div>
    <div
      class="nav-menu-contedor"
      :class="{ abierto: menuEstaAbierto }"
    >
      <div
        class="nav-menu-principal"
        tabindex="0"
        ref="cuadroElementosMenu"
        @click="alternarMenu"
      >
        <ul class="nav-menu">
          <li>
            <a
              href="https://mivacuna.salud.gob.mx/index.php"
              class="nav-hipervinculo"
              target="_blank"
              rel="noopener"
              >Registro para vacunación</a
            >
          </li>
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
              <span class="a11y-solo-lectura">ir al buscador</span>
              <span
                class="icono-buscar"
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useMenuDesenfocable } from '../../composables/useMenuDesenfocable'

//Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenu = ref(null)
const { menuEstaAbierto, alternarMenu } =
  useMenuDesenfocable(cuadroElementosMenu)
</script>

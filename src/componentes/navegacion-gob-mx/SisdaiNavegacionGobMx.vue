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
        :aria-expanded="menuEstaAbierto ? 'true' : 'false'"
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
import { onMounted, ref, watch } from 'vue'
import { useMenuDesenfocable } from '../../composables/useMenuDesenfocable'

//Que el menu se pueda cerrar automaticamente al enfocar otra cosa
const cuadroElementosMenu = ref(null)
const { menuEstaAbierto, alternarMenu } =
  useMenuDesenfocable(cuadroElementosMenu)

const navMenu = document.getElementsByClassName('nav-menu')

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está en versión móvil
 */
function agregaAtributoTabIndex() {
  if (window.innerWidth < 768) {
    for (let index = 0; index < navMenu[0]['children'].length; index++) {
      const element = navMenu[0]['children'][index]['children'][0]
      element.tabIndex = '-1'
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
      for (let i = 0; i < navMenu[0]['children'].length; i++) {
        const element = navMenu[0]['children'][i]['children'][0]
        element.removeAttribute('tabIndex')
      }
    } else {
      for (let j = 0; j < navMenu[0]['children'].length; j++) {
        const element = navMenu[0]['children'][j]['children'][0]
        element.tabIndex = '-1'
      }
    }
  }
}

onMounted(() => {
  agregaAtributoTabIndex()
})

watch(menuEstaAbierto, () => {
  actualizaAtributoTabIndex(menuEstaAbierto.value)
})
</script>

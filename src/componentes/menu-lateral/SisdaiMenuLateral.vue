<script setup>
import { onMounted, ref, watch } from 'vue'
const menu_abierto = ref(false)

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

// const menuColapsable = document.getElementsByClassName('menu-colapsable')
const elementosLista = ref({})

/**
 * Agrega el atributo tabindex a los elementos de lista,
 * si está en versión móvil
 */
function agregaAtributoTabIndex() {
  if (window.innerWidth < 768) {
    for (let index = 0; index < elementosLista.value.length; index++) {
      const elemento = elementosLista.value[index]['children'][0]
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
      for (let i = 0; i < elementosLista.value.length; i++) {
        const elemento = elementosLista.value[i]['children'][0]
        elemento.removeAttribute('tabIndex')
      }
    } else {
      for (let j = 0; j < elementosLista.value.length; j++) {
        const elemento = elementosLista.value[j]['children'][0]
        elemento.tabIndex = '-1'
      }
    }
  }
}

onMounted(() => {
  elementosLista.value =
    document.getElementById(id_aleatorio)['children'][0]['children'][0][
      'children'
    ]
  agregaAtributoTabIndex()
})

watch(menu_abierto, () => {
  actualizaAtributoTabIndex(menu_abierto.value)
})
</script>

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
      <button
        :aria-expanded="menu_abierto ? 'true' : 'false'"
        class="boton-icono boton-menu"
      >
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
      :id="id_aleatorio"
      class="menu-colapsable"
      :class="{ abierto: menu_abierto }"
    >
      <div class="menu-max-height">
        <slot name="contenido-menu-lateral">
          <ul>
            <li>
              <router-link
                to="#routerlink"
                exact
              >
                router link prueba
              </router-link>
            </li>
            <li><a href="#anchore"> anchore link prueba </a></li>
            <li>
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
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup>
import NavegacionPrincipal from './NavegacionPrincipal.vue'

import { useData, useRoute } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared'
import { onMounted, ref, watch } from 'vue'

import { useAccesibilidadStore } from '../../../src/stores'
const store = useAccesibilidadStore()

// https://vitepress.dev/reference/runtime-api#usedata
const { theme, page, frontmatter } = useData()
// https://router.vuejs.org/
const route = useRoute()

const lista_elementos = ref([])

const componenteIndice = ref(null)
const menuLateralAbierto = ref()

const menuAccesibilidad = ref(null)

onMounted(() => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})

watch(route, () => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})

function actualizaContenidoIndice() {
  let elementos = []
  document.querySelectorAll('div h2').forEach(el => {
    if (el.id) {
      elementos.push({
        id: el.id,
        texto: el.innerText.replace('#', ''),
      })
    }
  })
  lista_elementos.value = elementos
  /**
   * Apuramos al componente para que su lista de elementos se actualice y
   * obtenemos las rutas
   */
  componenteIndice.value.lista_elementos.value = lista_elementos.value
  componenteIndice.value.seccion_visible = ''
  componenteIndice.value.autoScrollSuave()
}

if (typeof window !== 'undefined') {
  menuLateralAbierto.value = window.innerWidth < 768 ? false : true
}

function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
}

function listaSidebar({ sidebar }, { relativePath }) {
  return sidebar[
    Object.keys(sidebar).find(side => isActive(relativePath, side, !!side))
  ]
}
</script>

<template>
  <div>
    <SisdaiNavegacionGobMx />
    <NavegacionPrincipal />

    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      :objetoStore="store"
    />

    <div
      id="contenido-todo"
      class="flex"
    >
      <div class="columna-4-esc columna-1-mov menu-lateral-fondo">
        <SisdaiMenuLateral @alAlternarMenu="alAlternarMenuLateral">
          <template #contenido-menu-lateral>
            <ul>
              <li>
                <a
                  href="/"
                  exact
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  <b>SisdaiComponentes</b>
                </a>
              </li>

              <li
                v-for="item in listaSidebar(theme, page)"
                :key="item.text"
              >
                <a
                  :href="item.link"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  {{ item.text }}
                  <span
                    v-if="item.pre"
                    class="etiqueta m-l-1"
                    >pre</span
                  >
                </a>
              </li>
            </ul>
          </template>
        </SisdaiMenuLateral>
      </div>

      <div class="columna-12-esc columna-7-mov">
        <div
          id="contenido-documento"
          class="flex"
        >
          <div class="columna-4-esc columna-8-mov columna-orden-3-esc">
            <SisdaiIndiceDeContenido
              :id_indice="'indice-template'"
              class="m-l-3-mov"
              ref="componenteIndice"
            >
              <template #contenido-indice-contenido>
                <ul>
                  <li
                    v-for="elemento in lista_elementos"
                    :key="elemento.texto"
                  >
                    <a :href="'#' + elemento.id"> {{ elemento.texto }}</a>
                  </li>
                </ul>
              </template>
            </SisdaiIndiceDeContenido>
          </div>

          <div
            class="columna-12-esc columna-8-mov"
            tabindex="-1"
          >
            <div class="contenedor m-y-maximo-esc">
              <div class="ancho-lectura">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SisdaiPiePaginaConahcyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>

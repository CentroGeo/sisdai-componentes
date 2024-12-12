<script setup>
import NavegacionPrincipal from './NavegacionPrincipal.vue'

import { useData, useRoute } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared'
import { onMounted, ref, watch, computed} from 'vue'

import { useAccesibilidadStore } from '../../../src/stores'
const store = useAccesibilidadStore()

// https://vitepress.dev/reference/runtime-api#usedata
const { theme, page } = useData()
// https://router.vuejs.org/
const route = useRoute()
// Identificar si se encuentra en la vista inicio para desactivar menú lateral e indice
const esInicio = computed(() => route.path === '/')
const esComienzo = computed(() => route.path === '/comienza/')
esComienzo
const lista_elementos = ref([])

const componenteIndice = ref(null)
const menuLateralAbierto = ref()

const menuAccesibilidad = ref(null)

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
//Error 404 page not found
//  function listaSidebar({ sidebar }, { relativePath }) {
//    return sidebar[
//     Object.keys(sidebar).find(side => isActive(relativePath, side, !!side))
//    ]
// }
function listaSidebar({ sidebar }, { relativePath }) {
  let ruta_inicial = `/${relativePath.split('/')[0]}/` 
  ruta_inicial = ruta_inicial || '/'
  return sidebar[ruta_inicial]
}

onMounted(() => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})

watch(route, () => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})
</script>

<template>
  <div>
    <a
      href="#principal"
      class="ir-contenido-principal"
    >
      Ir a contenido principal
    </a>

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
      <div class="columna-4-esc columna-1-mov menu-lateral-fondo"
      :class="{ 'inactivo': esInicio }"
      >
        <SisdaiMenuLateral @alAlternarMenu="alAlternarMenuLateral">
          <template #contenido-menu-lateral>
            <ul>
              <li
                v-for="item in listaSidebar(theme, page)"
                :key="item.text"
              >
                <a
                  :href="item.link"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                  :class="{
                    'router-link-exact-active router-link-active': isActive(
                      page.relativePath,
                      item.link
                    ),
                  }"
                >
                  {{ item.text }}
                  <span
                    v-if="item.pre"
                    class="etiqueta"
                  >
                    pre
                  </span>
                </a>
              </li>
            </ul>
          </template>
        </SisdaiMenuLateral>
      </div>

      <div 
      :class="{ 'columna-12-esc columna-7-mov': !esInicio, 'columna-16-esc': esInicio }">
        <div
          id="contenido-documento"
          class="flex"
        >
          <div class="columna-4-esc columna-8-mov columna-orden-3-esc"
          :class="{ 'inactivo': esInicio || esComienzo}"
          >
            <SisdaiIndiceDeContenido
              id_indice="indice-template"
              class="m-l-3-mov"
              ref="componenteIndice"
            >
              <template #contenido-indice-contenido>
                <ul>
                  <li
                    v-for="elemento in lista_elementos"
                    :key="elemento.texto"
                  >
                    <a :href="'#' + elemento.id"
                    :class="{
                    'router-link-exact-active router-link-active': isActive(
                      page.relativePath,
                      item?.link
                    ),
                  }"> {{ elemento.texto }}</a>
                  </li>
                </ul>
              </template>
            </SisdaiIndiceDeContenido>
          </div>

          <div
            
            tabindex="-1"
            :class="{ 'columna-12-esc columna-8-mov': !esInicio, 'columna-16-esc': esInicio }"
          >
            <div class="contenedor m-y-maximo-esc">
              <div 
              :class="{ 'ancho-lectura': !esInicio, 'ancho-fijo': esInicio }">
                <main
                  role="main"
                  id="principal"
                >
                  <Content />
                </main>
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

<style scoped>
.inactivo {
  display: none; /* O usa opacity: 0 y pointer-events: none para mantener espacio */
}
</style>
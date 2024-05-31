<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router/composables'
import store from './../../store'

const lista_elementos = ref([])

const route = useRoute()
const componenteIndice = ref()
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
  document.querySelectorAll('div.content__default h2').forEach(el => {
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
  componenteIndice.value._setupState.lista_elementos.value =
    lista_elementos.value
  componenteIndice.value._setupState.seccion_visible.value = ''
  componenteIndice.value._setupState.autoScrollSuave()
}

if (typeof window !== 'undefined') {
  menuLateralAbierto.value = window.innerWidth < 768 ? false : true
}

function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
}
</script>

<template>
  <div class="theme-container">
    <SisdaiNavegacionGobMx />

    <nav-navegacion-principal />

    <SisdaiMenuAccesibilidad
      ref="menuAccesibilidad"
      :objetoStore="store"
    />

    <div
      id="contenido-todo"
      class="flex"
    >
      <div class="columna-4 menu-lateral-fondo">
        <SisdaiMenuLateral @alAlternarMenu="alAlternarMenuLateral">
          <template slot="contenido-menu-lateral">
            <ul>
              <li>
                <router-link
                  to="/documentacion"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  <b>Sisdai Componentes</b>
                </router-link>
              </li>

              <li>
                <router-link
                  to="/documentacion/audio"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Audio</router-link
                >
              </li>
              <li>
                <router-link
                  to="/documentacion/boton-flotante"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Boton Flotante
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/campo-busqueda"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Campo Búsqueda
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/colapsable-navegacion"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Colapsable Navegación
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/control-acercar-alejar"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Control Acercar Alejar
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/control-deslizante"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Control Deslizante
                </router-link>
              </li>
              <!-- <li>
                <router-link
                  to="/documentacion/directivas"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Directivas
                </router-link>
              </li> -->
              <li>
                <router-link
                  to="/documentacion/enlace-externo"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Enlace Externo
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/imagen-png-webp"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  ImagenPngWebp
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/indice-de-contenido"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Índice de Contenido
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/info-de-despliegue"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Información de Despliegue
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/menu-accesibilidad"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Menu de Accesibilidad
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/menu-lateral"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Menu Lateral
                </router-link>
              </li>
              <!-- <li>
                <router-link
                  to="/documentacion/modal"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Modal</router-link
                >
              </li>
              <li>
                <router-link
                  to="/documentacion/narrativa"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Narrativa
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/narrativa-scroll"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Narrativa Scroll
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/navegacion-gob-mx"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Navegacion GobMx
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/navegacion-principal"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Navegacion Principal
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/pie-pagina-conahcyt"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Pie Pagina Conahcyt
                </router-link>
              </li>
              <li>
                <router-link
                  to="/documentacion/pie-pagina-gob-mx"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Pie Pagina GobMx
                </router-link>
              </li>

              <li>
                <a
                  href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="pictograma-social-github pictograma-48"
                    aria-hidden="true"
                  >
                    ir a github</span
                  >
                </a>
              </li> -->
            </ul>
          </template>
        </SisdaiMenuLateral>
      </div>

      <div class="columna-12">
        <div
          id="contenido-documento"
          class="flex"
        >
          <div class="columna-4 columna-orden-3-esc">
            <SisdaiIndiceDeContenido
              :id_indice="'indice-template'"
              ref="componenteIndice"
            >
              <template slot="contenido-indice-de-contenido">
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
            class="columna-12"
            tabindex="-1"
          >
            <div class="m-y-maximo contenedor">
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

<style src="prismjs/themes/prism-tomorrow.css" />

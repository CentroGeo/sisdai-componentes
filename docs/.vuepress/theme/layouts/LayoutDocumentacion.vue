<script setup>
import { useRoute } from 'vue-router/composables'
import store from './../../store'

import { ref, onMounted, watch } from 'vue'
const lista_elementos = ref([])

const route = useRoute()
const componenteIndice = ref()

onMounted(() => {
  setTimeout(() => actualizaContenidoIndice(), 200)
})

watch(route, () => {
  let elementos = []
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
// const menuLateralAbierto = ref(window.innerWidth < 768 ? false : true)
const menuLateralAbierto = ref()
if (typeof window !== 'undefined') {
  menuLateralAbierto.value = window.innerWidth < 768 ? false : true
}
function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
}

const menuAccesibilidad = ref(null)
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
      class="flex"
      id="contenido-todo"
    >
      <div class="columna-4 columna-1-mov menu-fondo">
        <SisdaiMenuLateral @alAlternarMenu="alAlternarMenuLateral">
          <template slot="contenido-menu-lateral">
            <ul>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  <b>SisdaiComponentes</b>
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/audio"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Audio</router-link
                >
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/modal"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Modal</router-link
                >
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/boton-flotante"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Botonflotante
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/colapsable-navegacion"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Colapsable navegación
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/control-deslizante"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Control deslizante
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/directivas"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Directivas
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/enlace-externo"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  EnlaceExterno
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/imagen-png-webp"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  ImagenPngWebp
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/indice-de-contenido"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  IndiceDeContenido
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/info-de-despliegue"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  InfoDeDespliegue
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/menu-accesibilidad"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  MenuAccesibilidad
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/menu-lateral"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  MenuLateral
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/narrativa"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  Narrativa
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/narrativa-scroll"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  NarrativaScroll
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/navegacion-gob-mx"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  NavegacionGobMx
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/navegacion-principal"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  NavegacionPrincipal
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/pie-pagina-conahcyt"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  PiePaginaConahcyt
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/pie-pagina-gob-mx"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  PiePaginaGobMx
                </router-link>
              </li>
              <li>
                <router-link
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  to="/documentacion/campo-busqueda"
                  :tabindex="menuLateralAbierto ? undefined : -1"
                >
                  CampoBusqueda
                </router-link>
              </li>

              <li>
                <a
                  href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
                  target="_blank"
                  class="p-x-5-esc p-x-3-mov p-y-1"
                  rel="noopener"
                  style="display: grid"
                >
                  <span
                    class="icono-social-github titulo-eni"
                    aria-hidden="true"
                  ></span>
                  <span> ir a github</span>
                </a>
              </li>
            </ul>
          </template>
        </SisdaiMenuLateral>
      </div>
      <div class="columna-12 columna-7-mov">
        <div
          class="flex contenedor-indice-y-content"
          id="contenido-documento"
        >
          <div class="columna-4 columna-8-mov">
            <SisdaiIndiceDeContenido
              class="indice-contenido-documentacion"
              :id_indice="'indice-template'"
              ref="componenteIndice"
            >
              <template slot="contenido-indice-de-contenido">
                <ul>
                  <li
                    v-for="(elemento, i) in lista_elementos"
                    :key="i"
                  >
                    <a :href="'#' + elemento.id"> {{ elemento.texto }}</a>
                  </li>
                </ul>
              </template>
            </SisdaiIndiceDeContenido>
          </div>
          <div
            class="columna-12 contenedor ancho-fijo"
            tabindex="-1"
          >
            <Content />
          </div>
        </div>
      </div>
    </div>

    <SisdaiPiePaginaConahcyt />

    <SisdaiPiePaginaGobMx />
  </div>
</template>

<style src="prismjs/themes/prism-tomorrow.css" />
<style>
.indice-contenido-documentacion {
  position: sticky;
  top: 50px;
  padding: 28px 0;
}
@media (min-width: 768px) {
  .contenedor-indice-y-content {
    flex-direction: row-reverse;
  }
}
</style>

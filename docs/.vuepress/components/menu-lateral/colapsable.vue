<script setup>
import { ref } from 'vue'
const menuLateralAbierto = ref(window.innerWidth < 768 ? false : true)
function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
}
const colapsableNavegacionAbierta = ref(false)
function alAlternarColapsableNavegacion(d) {
  colapsableNavegacionAbierta.value = d
}
</script>
<template>
  <div>
    <SisdaiMenuLateral @alAlternarMenu="alAlternarMenuLateral">
      <template slot="contenido-menu-lateral">
        <ul>
          <li>
            <router-link
              to="#api"
              exact
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              API</router-link
            >
          </li>
          <li>
            <router-link
              to="#slots"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              Slots</router-link
            >
          </li>
          <SisdaiColapsableNavegacion
            :titulo="'<SisdaiColapsableNavegacion> :D'"
            :avisarMenuLateral="menuLateralAbierto"
            @alAlternarColapsable="alAlternarColapsableNavegacion"
          >
            <template v-slot:listado-contenido>
              <li>
                <router-link
                  to="#ejemplos"
                  :tabindex="
                    colapsableNavegacionAbierta && menuLateralAbierto
                      ? undefined
                      : -1
                  "
                >
                  Ejemplos
                </router-link>
              </li>
              <li>
                <a
                  href="#menu-lateral"
                  :tabindex="
                    colapsableNavegacionAbierta && menuLateralAbierto
                      ? undefined
                      : -1
                  "
                >
                  El mero inicio
                </a>
              </li>
            </template>
          </SisdaiColapsableNavegacion>
          <li>
            <a
              href="##"
              rel="noopener"
              style="display: grid"
              :tabindex="menuLateralAbierto ? undefined : -1"
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
</template>

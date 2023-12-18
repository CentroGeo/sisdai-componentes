<script setup>
import { ref } from 'vue'

const menuLateralAbierto = ref()
const colapsableNavegacionAbierta = ref(false)

if (typeof window !== 'undefined') {
  menuLateralAbierto.value = window.innerWidth < 768 ? false : true
}

function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
}

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
              class="p-x-5-esc p-x-3-mov p-y-1"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              API</router-link
            >
          </li>
          <li>
            <router-link
              class="p-x-5-esc p-x-3-mov p-y-1"
              to="#slots"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              Slots</router-link
            >
          </li>
          <li>
            <SisdaiColapsableNavegacion
              :avisarMenuLateral="menuLateralAbierto"
              @alAlternarColapsable="alAlternarColapsableNavegacion"
            >
              <template v-slot:encabezado>
                <span>Este es un colapsable</span>
              </template>
              <template v-slot:contenido>
                <ul>
                  <li>
                    <router-link
                      class="p-x-6-esc p-x-4-mov p-y-1"
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
                      class="p-x-6-esc p-x-4-mov p-y-1"
                      :tabindex="
                        colapsableNavegacionAbierta && menuLateralAbierto
                          ? undefined
                          : -1
                      "
                    >
                      El mero inicio
                    </a>
                  </li>
                </ul>
              </template>
            </SisdaiColapsableNavegacion>
          </li>

          <li>
            <a
              href="##"
              class="p-x-5-esc p-x-3-mov p-y-1"
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

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
      <template #contenido-menu-lateral>
        <ul>
          <li>
            <a
              href="#api"
              exact
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              API</a
            >
          </li>
          <li>
            <a
              href="#slots"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              Slots</a
            >
          </li>
          <li>
            <SisdaiColapsableNavegacion
              :avisarMenuLateral="menuLateralAbierto"
              @alAlternarColapsable="alAlternarColapsableNavegacion"
            >
              <template #encabezado>
                <span>Este es un colapsable</span>
              </template>
              <template #contenido>
                <ul>
                  <li>
                    <a
                      href="#ejemplos"
                      :tabindex="
                        colapsableNavegacionAbierta && menuLateralAbierto
                          ? undefined
                          : -1
                      "
                    >
                      Ejemplos
                    </a>
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
                  <li>
                    <SisdaiColapsableNavegacion>
                      <template #encabezado>
                        <span>Este es un colapsable anidado</span>
                      </template>
                      <template #contenido>
                        <ul>
                          <li>
                            <a
                              href="#ejemplos"
                              :tabindex="
                                colapsableNavegacionAbierta &&
                                menuLateralAbierto
                                  ? undefined
                                  : -1
                              "
                            >
                              Ejemplos
                            </a>
                          </li>
                          <li>
                            <a
                              href="#menu-lateral"
                              :tabindex="
                                colapsableNavegacionAbierta &&
                                menuLateralAbierto
                                  ? undefined
                                  : -1
                              "
                            >
                              Opcion anidada
                            </a>
                          </li>
                        </ul>
                      </template>
                    </SisdaiColapsableNavegacion>
                  </li>
                </ul>
              </template>
            </SisdaiColapsableNavegacion>
          </li>

          <li>
            <a
              href="##"
              target="_blank"
              rel="noopener noreferrer"
              style="display: grid"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              <span
                style="font-size: 2rem"
                class="pictograma-social-github pictograma-48"
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

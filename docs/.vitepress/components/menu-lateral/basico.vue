<script setup>
import { ref } from 'vue'

const menuLateralAbierto = ref()

if (typeof window !== 'undefined') {
  menuLateralAbierto.value = window.innerWidth < 768 ? false : true
}

function alAlternarMenuLateral(navSecundariaAbierta) {
  menuLateralAbierto.value = navSecundariaAbierta
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
            <a
              href="#ejemplos"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              Ejemplos
            </a>
          </li>
          <li>
            <a
              href="#menu-lateral"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              El mero inicio
            </a>
          </li>
        </ul>
      </template>
    </SisdaiMenuLateral>
  </div>
</template>

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
          <li>
            <router-link
              to="#ejemplos"
              :tabindex="menuLateralAbierto ? undefined : -1"
            >
              Ejemplos
            </router-link>
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

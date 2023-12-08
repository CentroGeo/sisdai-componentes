<script setup>
import { ref } from 'vue'

const colapsableNavegacionAbierta = ref(false)

function alAlternarColapsableNavegacion(d) {
  colapsableNavegacionAbierta.value = d
}
</script>
<template>
  <SisdaiColapsableNavegacion
    :titulo="'Este es el título del colapsable'"
    @alAlternarColapsable="alAlternarColapsableNavegacion"
  >
    <template v-slot:listado-contenido>
      <li>
        <a
          href="#"
          exact
          :tabindex="colapsableNavegacionAbierta ? undefined : -1"
          >Opción 1 desplegable</a
        >
      </li>
      <li>
        <a
          href="#"
          :tabindex="colapsableNavegacionAbierta ? undefined : -1"
          >Opción 2 desplegable</a
        >
      </li>
    </template>
  </SisdaiColapsableNavegacion>
</template>

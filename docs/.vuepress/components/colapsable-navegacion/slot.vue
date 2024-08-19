<script setup>
import { ref } from 'vue'

const colapsableNavegacionAbierta = ref(false)

function alAlternarColapsableNavegacion(d) {
  colapsableNavegacionAbierta.value = d
}
</script>
<template>
  <SisdaiColapsableNavegacion
    @alAlternarColapsable="alAlternarColapsableNavegacion"
  >
    <template #encabezado>
      <p>Este es el título del colapsable</p>
    </template>
    <template #contenido>
      <ul>
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
      </ul>
    </template>
  </SisdaiColapsableNavegacion>
</template>

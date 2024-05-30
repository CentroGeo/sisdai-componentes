<script setup>
import { ref } from 'vue'

const colapsableNavegacionAbierta = ref(false)

function alAlternarColapsableNavegacion(d) {
  colapsableNavegacionAbierta.value = d
}
</script>
<template>
  <SisdaiColapsableNavegacion>
    <template v-slot:encabezado>
      <p>Este es el título del colapsable</p>
    </template>
    <template v-slot:contenido>
      <ul>
        <li>
          <a
            href="#"
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

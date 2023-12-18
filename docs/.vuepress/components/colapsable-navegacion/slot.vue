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
      <p class="m-0">Este es el título del colapsable</p>
    </template>
    <template v-slot:contenido>
      <ul class="colapsable-submenu">
        <li>
          <a
            href="#"
            exact
            class="p-x-5-esc p-x-3-mov p-y-1"
            :tabindex="colapsableNavegacionAbierta ? undefined : -1"
            >Opción 1 desplegable</a
          >
        </li>
        <li>
          <a
            href="#"
            class="p-x-5-esc p-x-3-mov p-y-1"
            :tabindex="colapsableNavegacionAbierta ? undefined : -1"
            >Opción 2 desplegable</a
          >
        </li>
      </ul>
    </template>
  </SisdaiColapsableNavegacion>
</template>

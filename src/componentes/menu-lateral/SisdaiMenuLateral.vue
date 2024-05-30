<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<script setup>
import { ref, watch } from 'vue'

const menu_abierto = ref()

const contenidoMenuLateral = ref(null)

if (typeof window !== 'undefined') {
  menu_abierto.value = window.innerWidth < 768 ? false : true
}

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const emits = defineEmits(['alAlternarMenu'])

watch(menu_abierto, () => {
  emits('alAlternarMenu', menu_abierto.value)
})
</script>

<template>
  <nav
    class="menu-lateral"
    :class="{ abierto: menu_abierto }"
    aria-label="Menú secundario"
  >
    <button
      class="menu-lateral-boton"
      aria-controls="menulateral"
      :aria-expanded="menu_abierto ? 'true' : 'false'"
      aria-label="Abrir/Cerrar navegación secundaria"
      @click="menu_abierto = !menu_abierto"
    >
      <span
        v-if="menu_abierto"
        class="pictograma-angulo-izquierdo"
        aria-hidden="true"
      ></span>
      <span
        v-else
        class="pictograma-angulo-derecho"
        aria-hidden="true"
      ></span>
      <span class="a11y-solo-lectura"> Expandir o colapsar navegación</span>
    </button>

    <div
      :id="id_aleatorio"
      class="menu-lateral-contenedor"
      ref="contenidoMenuLateral"
    >
      <slot name="contenido-menu-lateral">
        <ul>
          <li>
            <a
              href="#anchore"
              :tabindex="menu_abierto ? undefined : -1"
            >
              anchore link prueba
            </a>
          </li>
          <li>
            <a
              href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
              target="_blank"
              rel="noopener noreferrer"
              :tabindex="menu_abierto ? undefined : -1"
            >
              <span
                class="icono-social-github"
                aria-hidden="true"
              ></span>
              ejemplo github
            </a>
          </li>
        </ul>
      </slot>
    </div>
  </nav>
</template>

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
  return 'menu-lateral-' + Math.random().toString(36).substring(2)
}

const id_aleatorio = 'menulateral' + idAleatorio()

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
      type="button"
      class="menu-lateral-boton"
      aria-label="Navegación secundaria"
      :aria-controls="id_aleatorio"
      :aria-expanded="menu_abierto ? 'true' : 'false'"
      @click="menu_abierto = !menu_abierto"
    >
      <span
        class="pictograma-angulo-derecho"
        aria-hidden="true"
      ></span>
    </button>

    <div
      :id="id_aleatorio"
      class="menu-lateral-contenedor"
      :aria-hidden="menu_abierto ? 'false' : 'true'"
      ref="contenidoMenuLateral"
    >
      <slot name="contenido-menu-lateral">
        <ul>
          <li>
            <a
              href="#anchore"
              exact
              :tabindex="menu_abierto ? undefined : -1"
            >
              anchore link prueba
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CentroGeo/sisdai-componentes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label=""
              :tabindex="menu_abierto ? undefined : -1"
            >
              <span
                class="pictograma-social-github"
                aria-hidden="true"
              >
                ejemplo github
              </span>
            </a>
          </li>
        </ul>
      </slot>
    </div>
  </nav>
</template>

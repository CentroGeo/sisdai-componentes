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
    class="menu-lateral-contenedor"
    aria-label="Menú secundario"
  >
    <div
      class="menu-mov"
      @click="menu_abierto = !menu_abierto"
      :class="{ abierto: menu_abierto }"
    >
      <button
        :aria-expanded="menu_abierto ? 'true' : 'false'"
        class="boton-icono boton-menu"
      >
        <span
          v-if="menu_abierto"
          class="icono-angulo-doble-izquierda"
          aria-hidden="true"
        ></span>
        <span
          v-else
          class="icono-angulo-doble-derecha"
          aria-hidden="true"
        ></span>
        <span class="a11y-solo-lectura"> Expandir o colapsar navegación</span>
      </button>
    </div>
    <div
      :id="id_aleatorio"
      class="menu-colapsable"
      :class="{ abierto: menu_abierto }"
    >
      <div
        class="menu-max-height"
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
                rel="noopener"
                target="_blank"
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
    </div>
  </nav>
</template>

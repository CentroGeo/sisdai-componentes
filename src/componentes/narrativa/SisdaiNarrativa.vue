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
import { onMounted, onUnmounted, ref, watch } from 'vue'

const lista_elementos = ref([])
const seccion_visible = ref(-1)
const posicion_depurador = ref(0)
const narrativa = ref()
let posicion_actual = -1
const posicion_normalizada = ref(0)

const props = defineProps({
  id: {
    type: String,
    default: () => {
      return 'id-' + Math.random().toString(36).substring(2)
    },
  },
  depurador: { type: Boolean, default: false },
  altura_sensor: {
    type: Number,
    default: 0.5,
  },
  separacion: {
    type: Number,
    default: 1,
  },
  posicion_inicial: {
    type: Number,
    default: 1,
  },
})

const obtenerElementos = () => {
  narrativa.value = document.querySelector(
    `section#${props.id}.narrativa-graficas `
  )

  lista_elementos.value = [...narrativa.value.querySelectorAll(` .vineta`)]

  narrativa.value.style.height =
    (lista_elementos.value.length + 1) * props.separacion * 100 + 'vh'

  lista_elementos.value.forEach((el, i) => {
    el.style.top = (props.posicion_inicial + i * props.separacion) * 100 + 'vh'
  })
}

function scroleando() {
  posicion_depurador.value = document
    .querySelector(`section#${props.id}.narrativa-graficas div.depurador`)
    .getBoundingClientRect().top

  posicion_normalizada.value =
    (posicion_depurador.value -
      lista_elementos.value[0].getBoundingClientRect().bottom) /
    (lista_elementos.value[1].getBoundingClientRect().top -
      lista_elementos.value[0].getBoundingClientRect().top)

  // Checando elementos activos
  lista_elementos.value.forEach((el, i) => {
    if (i < lista_elementos.value.length - 1) {
      if (
        el.getBoundingClientRect().top < posicion_depurador.value &&
        posicion_depurador.value <
          lista_elementos.value[i + 1].getBoundingClientRect().top
      ) {
        posicion_actual = i
      }
    } else if (
      posicion_depurador.value <
      lista_elementos.value[0].getBoundingClientRect().top
    ) {
      posicion_actual = -1
    } else if (i === lista_elementos.value.length - 1) {
      if (
        posicion_depurador.value >
        lista_elementos.value[i].getBoundingClientRect().top
      ) {
        posicion_actual = i
      }
    }
  })

  if (posicion_actual !== seccion_visible.value) {
    seccion_visible.value = posicion_actual
  }
}

onMounted(() => {
  obtenerElementos()

  window.addEventListener('scroll', scroleando)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroleando)
})

watch(() => props.posicion_inicial, obtenerElementos)
watch(() => props.separacion, obtenerElementos)

defineExpose({ seccion_visible, posicion_normalizada, lista_elementos })
</script>

<template>
  <section
    class="narrativa-graficas"
    :id="id"
  >
    <div
      :style="{ opacity: depurador ? 1 : 0, top: altura_sensor * 100 + 'vh' }"
      class="depurador"
    >
      <span
        >Seccion activa: {{ seccion_visible }} <br />
        Posicion depurador: {{ posicion_normalizada }}</span
      >
    </div>
    <div class="contenido-fondo-sticky">
      <slot name="contenido-fondo-sticky"> </slot>
    </div>

    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.narrativa-graficas {
  position: relative;
  .contenido-fondo-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  .depurador {
    position: sticky;
    border-top: solid 2px crimson;
    z-index: 1;
    height: 2px;
    width: auto;
  }
  .vineta {
    position: absolute;
    z-index: 2;
    top: 0;
    height: auto;
  }
}
</style>

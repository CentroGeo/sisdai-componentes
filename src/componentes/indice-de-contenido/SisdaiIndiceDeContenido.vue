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
import { onUnmounted, onMounted, ref, watch } from 'vue'

const lista_elementos = ref([])
const seccion_visible = ref()

const props = defineProps({
  titulo: { type: String, default: 'Índice' },
  altura: { type: Number, default: 50 },
  id_indice: { type: String, defaul: 'id-del-indice-de-contenido' },
})

/**
 * Esta funcion selecciona todos los ementos a, extrae de los href
 * el último elemento al separar por el caracter '#', es decir
 * los id
 */
const obtenerRutas = () => {
  lista_elementos.value = [
    ...document.querySelectorAll(`div#${props.id_indice}.indice-contenido a`),
  ].map(d => {
    return { id: d.href.split('#').slice(-1).pop() }
  })
}

/**
 * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
 * la sección activa.
 */
function scroleando() {
  lista_elementos.value.forEach(d => {
    if (document.getElementById(d.id)) {
      d.elemento = document.getElementById(d.id)
      d.y_min = d.elemento.offsetTop
      d.y_max = d.elemento.offsetTop + d.elemento.offsetHeight
    } else {
      // eslint-disable-next-line
      console.warn(
        'Los href que introdujiste en el slot "contenido-indice-contenido" no hacen referencia a ningún id de esta vista'
      )
    }
  })

  let posicion_scroll_y = window.pageYOffset + 100

  lista_elementos.value.map(d => {
    if (
      d.y_min + props.altura <= posicion_scroll_y &&
      posicion_scroll_y <= d.y_max + props.altura
    ) {
      seccion_visible.value = d.id
    }
  })
}

/**
 * Caracteristicas del autoscroll suave al clickear un link. Además modifica el focus
 */
function autoScrollSuave() {
  document
    .querySelectorAll(`div#${props.id_indice}.indice-contenido a`)
    .forEach(anchor => {
      anchor.addEventListener('click', () => {
        seccion_visible.value = anchor.href.split('#').slice(-1).pop()
        document.querySelector('#' + seccion_visible.value).focus()
        //e.preventDefault()

        window.scrollTo({
          top:
            document.querySelector('#' + seccion_visible.value).offsetTop -
            props.altura,
          behavior: 'smooth',
        })
      })
    })
}

watch(seccion_visible, () => {
  document
    .querySelectorAll(`div#${props.id_indice}.indice-contenido a`)
    .forEach(d => {
      if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
        d.classList.add('link-activo')
      } else {
        d.classList.remove('link-activo')
        d.classList.remove('router-link-exact-active')
      }
    })
})

onMounted(() => {
  obtenerRutas()
  autoScrollSuave()

  window.addEventListener('scroll', scroleando)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroleando)
})
</script>

<template>
  <div
    :id="id_indice"
    class="indice-contenido"
  >
    <div
      id="indicecontenido"
      class="indice-contenido-titulo"
      aria-level="2"
      role="heading"
    >
      {{ titulo }}
    </div>

    <nav class="indice-contenido-contenedor">
      <slot name="contenido-indice-contenido">
        <router-link to="#routerlink"> router link prueba </router-link>
        <a href="#anchore"> anchore link prueba </a>
      </slot>
    </nav>
  </div>
</template>

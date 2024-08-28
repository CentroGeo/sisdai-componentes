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

<script>
const eventos = {
  /**
   * Evento que se emite al empezar a escribir en el campo de búsqueda.
   */
  alFiltrar: 'alFiltrar',
}
</script>

<script setup>
import { computed, ref, toRefs, watch } from 'vue'

const emits = defineEmits(Object.values(eventos))
const props = defineProps({
  catalogo: {
    type: Array,
    default: () => [],
  },
  catalogoAnidado: {
    type: Boolean,
    default: false,
  },
  catalogoAnidadoPropiedadElementos: {
    type: String,
    default: 'elementos',
  },
  propiedadBusqueda: {
    type: String,
    default: 'nombre',
  },
  etiqueta: {
    type: String,
    default: 'Buscar...',
  },
})

function idAleatorio() {
  return 'campo-busqueda-' + Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const { catalogo } = toRefs(props)
const textoBusqueda = ref('')
const inputBusquedaRef = ref(null)

function filtroAnidado(texto) {
  if (texto.trim().length >= 1) {
    return catalogo.value
      .map(grupo => {
        const elementosFiltrados = {}
        elementosFiltrados[props.catalogoAnidadoPropiedadElementos] = grupo[
          props.catalogoAnidadoPropiedadElementos
        ].filter(elemento => {
          const propiedadBusquedaNormalizada = elemento[props.propiedadBusqueda]
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
          const textoNormalizado = texto
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
          return propiedadBusquedaNormalizada
            .toLowerCase()
            .includes(textoNormalizado.trim().toLowerCase())
        })

        return {
          ...grupo,
          ...elementosFiltrados,
        }
      })
      .filter(grupo => grupo[props.catalogoAnidadoPropiedadElementos].length)
  }
  return catalogo.value
}

function filtro(texto) {
  if (props.catalogoAnidado) {
    return filtroAnidado(texto)
  }
  if (texto.trim().length >= 1) {
    return catalogo.value.filter(elemento => {
      const propiedadBusquedaNormalizada = elemento[props.propiedadBusqueda]
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
      const textoNormalizado = texto
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
      return propiedadBusquedaNormalizada
        .toLowerCase()
        .includes(textoNormalizado.trim().toLowerCase())
    })
  }

  return catalogo.value
}

watch(textoBusqueda, nv => emits(eventos.alFiltrar, filtro(nv)))

const botonLimpiarBusquedaActivo = computed(
  () => textoBusqueda.value.trim().length > 0
)

function limpiarBusqueda() {
  textoBusqueda.value = ''
  inputBusquedaRef.value.focus()
}
</script>

<template>
  <form
    class="campo-busqueda"
    @submit.prevent
  >
    <label
      :for="id_aleatorio"
      class="a11y-solo-lectura"
      >Campo de búsqueda</label
    >
    <!-- <input
      testid="input-campo-busqueda"
      :id="id_aleatorio"
      type="search"
      class="campo-busqueda-entrada"
      ref="inputBusquedaRef"
      :placeholder="props.etiqueta"
      v-model="textoBusqueda"
    /> -->
    <!-- <input
      testid="input-campo-busqueda"
      :id="id_aleatorio"
      type="search"
      class="campo-busqueda-entrada"
      ref="inputBusquedaRef"
      :placeholder="props.etiqueta"
      v-model="textoBusqueda"
      @input="emits(eventos.alFiltrar, filtro(textoBusqueda))"
    /> -->
    <input
      testid="input-campo-busqueda"
      :id="id_aleatorio"
      type="search"
      class="campo-busqueda-entrada"
      ref="inputBusquedaRef"
      :placeholder="props.etiqueta"
      v-model="textoBusqueda"
      @input="emits(eventos.alFiltrar, filtro($event.target.value))"
    />

    <button
      testid="btn-limpiar-busqueda"
      type="button"
      class="boton-pictograma boton-sin-contenedor-secundario campo-busqueda-borrar"
      aria-label="Borrar"
      v-show="botonLimpiarBusquedaActivo"
      @click="limpiarBusqueda"
    >
      <span
        class="pictograma-cerrar"
        aria-hidden="true"
      ></span>
    </button>

    <button
      type="button"
      class="boton-primario boton-pictograma campo-busqueda-buscar"
      aria-label="Buscar"
    >
      <span
        class="pictograma-buscar"
        aria-hidden="true"
      ></span>
    </button>
  </form>
</template>

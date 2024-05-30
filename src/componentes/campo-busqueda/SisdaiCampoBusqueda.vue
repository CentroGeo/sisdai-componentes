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

const { catalogo } = toRefs(props)
const textoBusqueda = ref('')
const inputBusquedaRef = ref(null)

function filtroAnidado(texto) {
  // grupo[catalogoAnidadoPropiedadElementos]: [
  //    { [propiedadBusqueda], descripcion, nombre, ... }
  // ]
  if (texto.trim().length >= 1) {
    return catalogo.value
      .map(grupo => {
        const elementosFiltrados = {}
        elementosFiltrados[props.catalogoAnidadoPropiedadElementos] = grupo[
          props.catalogoAnidadoPropiedadElementos
        ].filter(elemento =>
          elemento[props.propiedadBusqueda]
            .toLowerCase()
            .includes(texto.trim().toLowerCase())
        )

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
    return catalogo.value.filter(elemento =>
      elemento[props.propiedadBusqueda]
        .toLowerCase()
        .includes(texto.trim().toLowerCase())
    )
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
  <div class="campo-busqueda">
    <input
      type="search"
      class="campo-busqueda-entrada"
      ref="inputBusquedaRef"
      :placeholder="props.etiqueta"
      v-model="textoBusqueda"
    />

    <button
      class="boton-pictograma boton-sin-contenedor-secundario campo-busqueda-borrar"
      v-show="botonLimpiarBusquedaActivo"
      @click="limpiarBusqueda"
    >
      <span
        class="pictograma-cerrar"
        aria-hidden="true"
      ></span>
      <span class="a11y-solo-lectura">Limpiar campo de búsqueda</span>
    </button>

    <button class="boton-primario boton-pictograma campo-busqueda-buscar">
      <span
        class="pictograma-buscar"
        aria-hidden="true"
      ></span>
      <span class="a11y-solo-lectura">Buscar</span>
    </button>
  </div>
</template>

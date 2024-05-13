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
      class="input-busqueda"
      type="search"
      :placeholder="props.etiqueta"
      v-model="textoBusqueda"
      ref="inputBusquedaRef"
    />
    <button
      class="boton-borrar"
      v-show="botonLimpiarBusquedaActivo"
      @click="limpiarBusqueda"
    >
      <span class="icono-cerrar" />
    </button>
    <button class="boton-buscar">
      <span class="icono-buscar" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
$alturaBase: 3.5em;

.campo-busqueda {
  //css vars
  --campo-busqueda-borde: #5e7392;

  display: flex;
  gap: 0;
  height: $alturaBase;
  margin: 0;
  padding: 0;
  position: relative;

  button.boton-borrar {
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    position: absolute;
    right: $alturaBase;
    width: $alturaBase;
    height: $alturaBase;
    font-size: inherit;
    span.icono-cerrar {
      font-size: inherit;
      width: 100%;
      height: 100%;
      text-align: center;
      justify-content: center;
      color: var(--visualizador-placeholder-cuadro-busqueda);
      padding: 0;
      &::before {
        font-size: 1.5em;
      }
    }
  }
  button.boton-buscar {
    border: none;
    padding: 0;
    margin: 0;
    background-color: var(--input-borde);
    position: absolute;
    right: 0px;
    width: $alturaBase;
    height: $alturaBase;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: inherit;
    span.icono-buscar {
      font-size: inherit;
      //background-color: var(--visualizador-icono-cuadro-busqueda);
      //TODO:variable desde sisdai
      color: #ffff;
      width: 100%;
      height: 100%;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;

      text-align: center;
      justify-content: center;
      padding: 0;
      &::before {
        font-size: 1.5em;
      }
    }
  }

  input[type='search'].input-busqueda {
    font-size: inherit !important;
    margin: 0 !important;
    //TODO:variable desde sisdai
    //background-color: var(--visualizador-fondo-cuadro-busqueda) !important;
    //border: none !important;
    //padding-left: $alturaBase + 0.5em !important;
    padding-right: ($alturaBase * 2) + 0.5em !important;
    border-radius: 10px !important;
    &::placeholder {
      font-size: inherit;
      font-style: italic;
      color: var(--visualizador-placeholder-cuadro-busqueda) !important;
    }

    &:focus {
      background-color: #fff !important;
      color: #000 !important;
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
}
</style>

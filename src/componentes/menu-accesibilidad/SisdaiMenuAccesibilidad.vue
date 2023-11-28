<script>
const propiedades = {
  /**
   * Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  agregarOpciones: {
    type: Array,
    default: () => [],
  },

  /**
   * Objeto store completo del proyecto.
   */
  objetoStore: {
    type: Object,
    default: () => {},
  },

  /**
   * Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de
   * `accesibilidad`, se debe introducir el nombre del modulo en esta propiedad.
   */
  nombreModuloStore: {
    type: String,
    default: 'accesibilidad',
  },

  /**
   * id Aleatorio.
   */
  id: {
    type: String,
    default: idAleatorio(),
  },
}

const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',

  /**
   * Se ejecuta cuando se ha dado click en el botón "Restablecer".
   */
  alRestablecer: 'alRestablecer',
}

/**
 * Devuelve una cadena de texto aleatoreo.
 * @returns {String}
 */
function idAleatorio() {
  return Math.random().toString(36).substring(2)
}
</script>

<script setup>
import { computed, ref, toRefs, onBeforeMount, onMounted, watch } from 'vue'
import opcionesDefault from './opcionesDefault'
import store from '../../stores/accesibilidad'

const props = defineProps(propiedades)
const emits = defineEmits(Object.values(eventos))
const { agregarOpciones, id, objetoStore, nombreModuloStore } = toRefs(props)

/**
 * Opciones que se mostrarán en el menú de accesibilidad.
 */
const opciones = computed(() => [...opcionesDefault, ...agregarOpciones.value])

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type {Boolean}
 */
const menuAccesibilidadEstaAbierto = ref(false)

/**
 * Arreglo de clases que se mantienen activas con el menú de accesibilidad, use esta variable
 * para facilitar la relación de interacción del menú de accesibilidad con la vista.
 * @type {Array<String>}
 */
const clasesSelecciondas = ref([])

/**
 * Ejecuta un cambio en el store si dicho objeto permite hacer commits (si se esta usando la
 * pripiedad `objetoStore`).
 * @param {String} accion nombre del mutation en el modulo del store.
 * @param {Array<String>} valor es decir las clases seleccionadas.
 */
function ejecutarEnStore(accion, valor) {
  if (
    objetoStore.value !== undefined &&
    Object.prototype.hasOwnProperty.call(objetoStore.value, 'commit')
  ) {
    objetoStore.value.commit(`${nombreModuloStore.value}/${accion}`, valor)
  }
}

/**
 * Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú.
 */
function restablecer() {
  clasesSelecciondas.value = []
  emits(eventos.alRestablecer)
  ejecutarEnStore('restablecer')
}

watch(clasesSelecciondas, (nv, ov) => {
  ejecutarEnStore('modificarClasesAccesibles', nv)
  if (
    nv.find(clase => clase === 'a11y-oscura') &&
    !ov.find(clase => clase === 'a11y-oscura')
  ) {
    ejecutarEnStore('alternarVistaOscura', nv)
  }
  if (
    !nv.find(clase => clase === 'a11y-oscura') &&
    ov.find(clase => clase === 'a11y-oscura')
  ) {
    ejecutarEnStore('alternarVistaOscura', nv)
  }
})

/**
 * Módulo de vista oscura.
 */
const tema = computed(() => store.state.tema)
const perfil = computed(() => store.state.perfil)

/**
 * Elige el tema en el documento en modo oscuro,
 * si la variable del query es dark y el tema del store es auto
 * ó si el tema del store es oscuro.
 */
function elegirTemaEnDocumento() {
  const modoOscuro = ref(
    (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      tema.value === 'auto') ||
      tema.value === 'oscuro'
  )

  // Asignar el perfil de color para el atributo css del query.
  if (perfil.value !== null)
    document.documentElement.setAttribute(
      // se puede nombrar como quieras.
      `data-dark-theme-${perfil.value}`,
      modoOscuro.value
    )
}

onBeforeMount(() => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', elegirTemaEnDocumento)
})

onMounted(() => {
  elegirTemaEnDocumento()
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', elegirTemaEnDocumento)
})

watch(tema, () => {
  elegirTemaEnDocumento()
})

// if (localStorage.getItem('theme')) {
//   store.state.tema = localStorage.getItem('theme')
// }

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarAbiertoCerrado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}
defineExpose({ alternarAbiertoCerrado, clasesSelecciondas })

/**
 * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
 * opción de restablecer y el titulo del menú.
 */
const alturaMenuAbierto = computed(
  () => `${(opciones.value.length + 1) * 48 + 145}px`
)
</script>

<template>
  <div
    class="contenedor-menu-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
  >
    <button
      class="icono-boton-accesibilidad"
      :aria-expanded="menuAccesibilidadEstaAbierto ? 'true' : 'false'"
      @click="alternarAbiertoCerrado"
    >
      <span
        class="icono-accesibilidad icono-5"
        aria-hidden="true"
      />
      <span class="a11y-solo-lectura">
        abrir y cerrar menú de accesibilidad
      </span>
    </button>

    <menu class="menu-accesibilidad">
      <p class="titulo">Herramientas de accesibilidad</p>
      <hr />

      <div
        class="controlador-vis m-y-1"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
      >
        <input
          :id="`${opcion.claseCss}_css_${id}`"
          type="checkbox"
          :value="opcion.claseCss"
          v-model="clasesSelecciondas"
          :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        />
        <label :for="`${opcion.claseCss}_css_${id}`">
          <span
            class="figura-variable icono-4"
            :class="opcion.icono"
            aria-hidden="true"
          ></span>
          <span class="nombre-variable">
            <b>
              {{ opcion.titulo }}
            </b>
          </span>
        </label>
      </div>
      <button
        class="hipervinculo"
        :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        @click="restablecer"
        :disabled="!clasesSelecciondas.length"
      >
        <b>Restablecer</b>
      </button>
    </menu>
  </div>
</template>

<style lang="scss">
.contenedor-menu-accesibilidad.abierto .menu-accesibilidad {
  max-height: v-bind('alturaMenuAbierto') !important;

  // width: 262px !important;
  width: 282px !important;
  .titulo {
    width: 170px;
  }
  .controlador-vis {
    margin-left: 16px !important;
    margin-right: 16px !important;
    label {
      width: 100%;
      padding-left: 6px !important;
      padding-top: 8px !important;
      padding-bottom: 8px !important;
      &:hover {
        background: var(--boton-secundario-hover-fondo);
        border: 1px solid transparent;
        box-shadow: none;
        color: var(--tipografia-color);
        .nombre-variable {
          color: var(--tipografia-color);
        }
      }
      .figura-variable {
        max-width: inherit;
      }
      .nombre-variable {
        font-size: 16px;
      }
    }
    input[type='checkbox'],
    input[type='radio'] {
      &:hover {
        + label {
          &:before {
            box-shadow: inset 0 0 0 1px var(--tipografia-color);
          }
        }
      }
      &:focus {
        + label {
          background: var(--boton-secundario-hover-fondo);
        }
      }
      &:checked {
        &:not(:hover) + label {
          &:before {
            background: var(--input-controles-color);
          }
        }
      }
    }
    input[type='checkbox']:checked {
      + label:after {
        color: var(--tipografia-color-1);
      }
      &:hover:checked:not(:disabled) + label:after {
        color: var(--tipografia-color-1);
      }
    }
    input[type='checkbox']:checked + label:before {
      background: var(--input-controles-color);
    }
  }
  .hipervinculo {
    margin-left: 20px !important;
    padding: 4px !important;
    text-decoration: none !important;
    border: 1px solid transparent;
    &:hover {
      color: var(--hipervinculo-color);
      background: var(--boton-secundario-hover-fondo);
      box-shadow: none !important;
      border: 1px solid transparent !important;
    }
    &:focus {
      background: var(--boton-secundario-hover-fondo);
      box-shadow: 0 0 8px var(--input-focus);
      border: 1px solid var(--hipervinculo-focus-sombra);
      outline: none;
    }
  }
}
</style>

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
   * Objeto store completo del proytecto.
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
}

const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',

  /**
   * Se ejecuta cuanso se ha dado click en el botón "Restablecer".
   */
  restablecer: 'restablecer',
}
</script>

<script setup>
import { computed, ref, toRefs, onBeforeMount, onMounted, watch } from 'vue'
import opcionesDefault from './opcionesDefault'
import store from '../../stores/accesibilidad'

const props = defineProps(propiedades)
const emits = defineEmits(Object.values(eventos))
const { agregarOpciones, nombreModuloStore, objetoStore } = toRefs(props)

/**
 * Opciones que se mostrarán en el menú de accesibilidad.
 */
const opciones = computed(() => [...opcionesDefault, ...agregarOpciones.value])

/**
 * Indica si el Menú de accesibilidad está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const menuAccesibilidadEstaAbierto = ref(false)

/**
 * Ejecuta un cambio en el store si dicho objeto permite hacer commits (si se esta usando la
 * pripiedad `objetoStore`).
 * @param {String} accion nombre del mutation en el modulo del store.
 */
function ejecutarEnStore(accion) {
  if (
    objetoStore.value !== undefined &&
    Object.prototype.hasOwnProperty.call(objetoStore.value, 'commit')
  ) {
    objetoStore.value.commit(`${nombreModuloStore.value}/${accion}`)
  }
}

/**
 * Desencadena el emit 'alSeleccionarOpcion' al mismo tiempo que cierra el menú.
 * @param {Object} Opcion seleccionada.
 */
function seleccionarOpcion(opcion) {
  emits(eventos.alSeleccionarOpcion, opcion)
  menuAccesibilidadEstaAbierto.value = false
  ejecutarEnStore(opcion.accion)
}

/**
 * Desencadena el emit 'restablecer' al mismo tiempo que cierra el menú.
 */
function restablecer() {
  emits(eventos.restablecer)
  menuAccesibilidadEstaAbierto.value = false
  ejecutarEnStore('restablecer')
}

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarEstado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

defineExpose({ alternarEstado })

/**
 * Módulo de vista oscura
 */
const tema = computed(() => store.state.theme)

const perfil = ref('neutro') // 'neutro' | 'sisdai' | 'gema'
// const perfil = computed(() => store.state.perfil)

function setThemeInDocument() {
  // Si la variable del query es dark
  // y el tema del store es auto
  // o el tema del store es dark
  const modoOscuro = ref(
    (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      tema.value === 'auto') ||
      tema.value === 'dark'
  )

  // Asignar el perfil para el atributo css del query
  document.documentElement.setAttribute(
    `data-dark-theme-${perfil.value}`,
    modoOscuro.value
  )

  // Reasignando la variable del store
  // si es que cambia automáticamente con
  // el perfil del OSystem
  modoOscuro.value === true
    ? (store.state.vista_oscura = true)
    : (store.state.vista_oscura = false)
}

// Hooks ciclos de vue
onBeforeMount(() => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', setThemeInDocument)
})
onMounted(() => {
  setThemeInDocument()

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setThemeInDocument)
})
watch(tema, () => {
  console.log('tema.value', tema.value)
  setThemeInDocument()
})
if (localStorage.getItem('theme')) {
  store.state.theme = localStorage.getItem('theme')
}

/**
 * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
 * opción de restablecer y el titulo del menú.
 */
const alturaMenuAbierto = computed(
  () => `${(opciones.value.length + 1) * 50 + 60}px`
)
</script>

<template>
  <div
    class="contenedor-menu-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
  >
    <button
      class="icono-boton-accesibilidad"
      @click="alternarEstado"
    >
      <span class="icono-accesibilidad icono-5" />
    </button>

    <menu class="menu-accesibilidad">
      <h6 class="titulo">Herramientas de accesibilidad</h6>

      <button
        class="opcion-accesibilidad"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
        @click="seleccionarOpcion(opcion)"
      >
        <span
          class="icono-4"
          :class="opcion.icono"
        />
        {{ opcion.titulo }}
      </button>

      <button
        class="opcion-accesibilidad"
        @click="restablecer"
      >
        <span class="icono-4 icono-restablecer" />
        Restablecer
      </button>
    </menu>
  </div>
</template>

<style>
.contenedor-menu-accesibilidad.abierto .menu-accesibilidad {
  max-height: v-bind('alturaMenuAbierto') !important;
}
</style>

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
 * @type {Boolean}
 */
const menuAccesibilidadEstaAbierto = ref(false)

/**
 *
 * @type {Array<String>}
 */
const clasesSelecciondas = ref([])

/**
 *
 * @param {String} claseCss
 */
function agregarQuitarClaseSeleccionda(claseCss) {
  if (!clasesSelecciondas.value.includes(claseCss)) {
    clasesSelecciondas.value.push(claseCss)
  } else {
    clasesSelecciondas.value = clasesSelecciondas.value.filter(
      clase => clase !== claseCss
    )
  }
}

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
  alternarAbiertoCerrado()
  agregarQuitarClaseSeleccionda(opcion.claseCss)
  emits(eventos.alSeleccionarOpcion, opcion)
  ejecutarEnStore(opcion.accion)
}

/**
 * Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú.
 */
function restablecer() {
  alternarAbiertoCerrado()
  clasesSelecciondas.value = []
  emits(eventos.alRestablecer)
  ejecutarEnStore('restablecer')
}

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarAbiertoCerrado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

defineExpose({ alternarAbiertoCerrado, clasesSelecciondas })

/**
 * Módulo de vista oscura.
 */
const tema = computed(() => store.state.tema)
const perfil = computed(() => store.state.perfil)

/**
 * Muestra el nombre actual según el tema seleccionado.
 */
const nombreTemaActual = computed(() => {
  const nombres = {
    claro: 'Clara',
    oscuro: 'Oscura',
    auto: 'Automática',
  }
  return nombres[tema.value]
})

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

  // Reasignando la variable del store.
  modoOscuro.value === true
    ? (store.state.vista_oscura = true)
    : (store.state.vista_oscura = false)
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
 * Si el menú está abierto, remueve el atributo tabIndex.
 * Si está cerrado, agrega el atributo tabIndex en -1 para
 * saltarse las opciones con el teclado secuencial.
 */
function actualizaAtributoTabIndex(estaAbierto) {
  if (estaAbierto) {
    opciones.value.forEach((_, idx) => {
      document
        .getElementById(`opcion_accesibilidad_${idx}`)
        .removeAttribute('tabIndex')
    })
    document
      .getElementById('opcion_accesibilidad_restablecer')
      .removeAttribute('tabIndex')
  } else {
    opciones.value.forEach((_, idx) => {
      document.getElementById(`opcion_accesibilidad_${idx}`).tabIndex = '-1'
    })
    document.getElementById('opcion_accesibilidad_restablecer').tabIndex = '-1'
  }
}

watch(menuAccesibilidadEstaAbierto, actualizaAtributoTabIndex)

/**
 * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
 * opción de restablecer y el titulo del menú.
 */
const alturaMenuAbierto = computed(
  () => `${(opciones.value.length + 1) * 40 + 84}px`
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

      <!-- :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1" Esto también sirve sin usar document -->
      <button
        class="opcion-accesibilidad"
        tabindex="-1"
        v-for="(opcion, idx) in opciones"
        :key="`opcion-accesibilidad-${idx}`"
        :id="`opcion_accesibilidad_${idx}`"
        @click="seleccionarOpcion(opcion)"
      >
        <span
          class="icono-4"
          :class="opcion.icono"
          aria-hidden="true"
        />
        {{ opcion.titulo }}
        {{ opcion.titulo === 'Vista' ? nombreTemaActual : '' }}
      </button>

      <button
        class="opcion-accesibilidad"
        tabindex="-1"
        id="opcion_accesibilidad_restablecer"
        @click="restablecer"
      >
        <span
          class="icono-4 icono-restablecer"
          aria-hidden="true"
        />
        Restablecer
      </button>
    </menu>
  </div>
</template>

<style lang="scss">
.contenedor-menu-accesibilidad.abierto .menu-accesibilidad {
  max-height: v-bind('alturaMenuAbierto') !important;
}
</style>

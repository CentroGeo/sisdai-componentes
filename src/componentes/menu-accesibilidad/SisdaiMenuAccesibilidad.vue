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

  /** Objeto store completo del proyecto. */
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

  id: {
    type: String,
    default: 'menu_accesibilidad',
  },

  /**
   * Seleciona el perfil o paleta de color desde la biblioteca de estilos.
   * Los perfiles disponibles son: `'predeterminada'`, `'gema'`, `'sisdai'`.
   */
  perfilColor: {
    type: String,
    default: 'predeterminada', // 'predeterminada' | 'sisdai' | 'gema'
  },
}

const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',

  /** Se ejecuta cuando se ha dado click en el botón "Restablecer". */
  alRestablecer: 'alRestablecer',
}
</script>

<script setup>
import {
  computed,
  onBeforeMount,
  onMounted,
  ref,
  toRefs,
  watch,
  onUnmounted,
} from 'vue'
import opcionesDefault from './opcionesDefault'

const props = defineProps(propiedades)
const emits = defineEmits(Object.values(eventos))
const { agregarOpciones, objetoStore, perfilColor } = toRefs(props)

/** Opciones que se mostrarán en el menú de accesibilidad. */
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
 * @param {Array<String>} valor es decir las clases que siendo seleccionadas.
 */
function ejecutarEnStore(accion, valor) {
  if (
    objetoStore.value !== undefined &&
    Object.prototype.hasOwnProperty.call(objetoStore.value, accion)
  ) {
    // Modifica y/o restablece las clasesAccesibles del objectoStore
    switch (accion) {
      case 'restablecer':
        objetoStore.value.restablecer()
        break
      case 'modificarClasesAccesibles':
        objetoStore.value.modificarClasesAccesibles(valor)
        break
    }
  }
  // console.log('objetoStore.value', objetoStore.value)
}

/** Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú. */
function restablecer() {
  clasesSelecciondas.value = []
  emits(eventos.alRestablecer)
  ejecutarEnStore('restablecer')
}

watch(clasesSelecciondas, (nv, ov) => {
  ejecutarEnStore('modificarClasesAccesibles', nv)

  alternarClasesBody()

  asignarTemaClaroUOscuro(nv, ov)
})

/** Alterna las clases accesibles seleccionadas en el body. */
function alternarClasesBody() {
  clasesSelecciondas.value.includes('a11y-tipografia')
    ? body.classList.add('a11y-tipografia')
    : body.classList.remove('a11y-tipografia')
  clasesSelecciondas.value.includes('a11y-simplificada')
    ? body.classList.add('a11y-simplificada')
    : body.classList.remove('a11y-simplificada')
  clasesSelecciondas.value.includes('a11y-hipervinculos')
    ? body.classList.add('a11y-hipervinculos')
    : body.classList.remove('a11y-hipervinculos')
  clasesSelecciondas.value.includes('a11y-oscura')
    ? body.classList.add('a11y-oscura')
    : body.classList.remove('a11y-oscura')
}

/**
 * Módulo de vista oscura.
 */
// Tema o modo de color con el que inicializa la aplicación.
const tema = ref('auto') // 'oscura' | 'clara' | 'auto'
let body = {}

/** Agrega el atributo para asignar el tema y el perfil de color predeterminados. */
function agregarPerfilTemaPredeterminados() {
  body.setAttribute('data-perfil', perfilColor.value)
  body.setAttribute('data-tema', 'claro')
}
/**
 * Agrega el atributo para asignar el tema claro con el perfil
 * de color al nivel de la etiqueta html del documento.
 */
function setTemaClaro() {
  body.setAttribute(`data-tema`, 'claro')
}
/**
 * Agrega el atributo para asignar el tema oscuro con el perfil
 * de color al nivel de la etiqueta html del documento.
 */
function setTemaOscuro() {
  body.setAttribute(`data-tema`, 'oscuro')
}

/**
 * Asigna el tema claro u oscuro,
 * si en las clasesSeleccionadas están el valor de a11y-oscura o no.
 * @param {Array} nv nuevo valor con las clases seleccionadas
 * @param {Array} ov viejo valor con las clases seleccionadas
 */
function asignarTemaClaroUOscuro(nv, ov) {
  if (
    nv.find(clase => clase === 'a11y-oscura') &&
    !ov.find(clase => clase === 'a11y-oscura')
  ) {
    // cuando pone la clase a11y-oscura
    setTemaOscuro()
  }
  if (
    !nv.find(clase => clase === 'a11y-oscura') &&
    ov.find(clase => clase === 'a11y-oscura')
  ) {
    // cuando quita la clase a11y-oscura
    setTemaClaro()
  }
}

/** Devuelve el tema del documento según la configuración del dispositivo. */
function getTemaDispositivo() {
  if (
    (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      tema.value === 'auto') ||
    tema.value === 'oscura'
  ) {
    return 'oscura'
  }
  return 'clara'
}

/**
 * Agrega la clase `.a11y-oscura` para la selección
 * de la vistas oscura.
 * @param {String} temaClaroUOscuro
 */
function setClaseA11yOscura(temaClaroUOscuro) {
  if (
    temaClaroUOscuro === 'oscura' &&
    !clasesSelecciondas.value.includes('a11y-oscura')
  ) {
    clasesSelecciondas.value = [...clasesSelecciondas.value, ...['a11y-oscura']]
  }
  if (
    temaClaroUOscuro === 'clara' &&
    clasesSelecciondas.value.includes('a11y-oscura')
  ) {
    clasesSelecciondas.value = clasesSelecciondas.value.filter(
      clases => !clases.includes('a11y-oscura')
    )
  }
}

/**
 * Elige el tema en el documento (clara u oscura)
 * y la key local `theme` del navegador.
 * @param {String} tema o modo de la vista: clara | oscura | auto
 */
function setTemaEnDocumentoYLocalStorage() {
  localStorage.setItem('theme', tema.value)
  let temaClaroUOscuro = getTemaDispositivo()

  // Agrega claseSeleccionada `.a11y-oscura`
  setClaseA11yOscura(temaClaroUOscuro)

  // Agrega y/o remueve el atributo selecctor para :root
  switch (temaClaroUOscuro) {
    case 'clara':
      setTemaClaro()
      break
    case 'oscura':
      setTemaOscuro()
      break
  }
}

onBeforeMount(() => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', setTemaEnDocumentoYLocalStorage)
})

onMounted(() => {
  body = document?.querySelector('body')
  agregarPerfilTemaPredeterminados()

  setTemaEnDocumentoYLocalStorage()

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setTemaEnDocumentoYLocalStorage)
})

onUnmounted(() => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', setTemaEnDocumentoYLocalStorage)
})

watch([perfilColor, tema], () => {
  setTemaEnDocumentoYLocalStorage()
})

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Menú de accesibilidad.
 */
function alternarAbiertoCerrado() {
  menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value
}

defineExpose({ alternarAbiertoCerrado, clasesSelecciondas })
</script>

<template>
  <div
    testid="menu-flotante"
    class="menu-flotante menu-flotante-derecho menu-accesibilidad"
    :class="{ abierto: menuAccesibilidadEstaAbierto }"
  >
    <button
      testid="menu-flotante-boton"
      type="button"
      class="menu-flotante-boton"
      aria-label="Abrir y cerrar menú de accesibilidad"
      aria-controls="menua11y"
      :aria-expanded="menuAccesibilidadEstaAbierto ? 'true' : 'false'"
      @click="alternarAbiertoCerrado()"
    >
      <span
        class="pictograma-accesibilidad"
        aria-hidden="true"
      ></span>
    </button>

    <menu
      id="menua11y"
      class="menu-flotante-contenedor"
      :aria-hidden="!menuAccesibilidadEstaAbierto"
    >
      <p class="menu-flotante-titulo">Herramientas de accesibilidad</p>

      <div
        testid="menu-flotante-opciones"
        v-for="opcion in opciones"
        :key="opcion.titulo"
      >
        <input
          testid="menu-flotante-input"
          :id="opcion.claseCss"
          type="checkbox"
          :value="opcion.claseCss"
          v-model="clasesSelecciondas"
          :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        />
        <label
          testid="menu-flotante-label"
          :for="opcion.claseCss"
        >
          <span
            :class="opcion.icono"
            aria-hidden="true"
          ></span>
          {{ opcion.titulo }}
        </label>
      </div>

      <button
        testid="boton-restablecer"
        type="button"
        class="boton-secundario boton-chico m-t-2"
        :tabindex="menuAccesibilidadEstaAbierto ? undefined : -1"
        @click="restablecer()"
        :disabled="!clasesSelecciondas.length"
      >
        Restablecer
      </button>
    </menu>
  </div>
</template>

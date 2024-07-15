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
import { ref, onMounted, watch, onUnmounted } from 'vue'
import SisdaiControlDeslizante from '../control-deslizante/SisdaiControlDeslizante.vue'

defineProps({
  archivo: {
    type: String,
    default: '',
  },
})

const controlVolumen = ref()
const velocidades = ref([
  { valor: 0.25, opcion: '0.25' },
  { valor: 0.5, opcion: '0.5' },
  { valor: 0.75, opcion: '0.75' },
  { valor: 1, opcion: '1.0' },
  { valor: 1.25, opcion: '1.25' },
  { valor: 2.25, opcion: '2.25' },
  { valor: 3.75, opcion: '3.75' },
])
const volumen_default = ref(100)
const velocidad_reproduccion = ref(1)
const reproduciendo = ref(false)
const id_aleatorio = idAleatorio()
const duracion = ref(0)
const tiempo_transcurrido = ref(0)

// Strings para css
const porcentaje_transcurrido = ref('0%')
const porcentaje_almacenado = ref('0%')

const slider_activo = ref(false)
//Elementos DOM
const audio = ref()
const contenedor_audio = ref()
const control_temporal = ref()

onMounted(() => {
  contenedor_audio.value = document.querySelector(`div#${id_aleatorio}`)
  audio.value = contenedor_audio.value.querySelector('audio')
  control_temporal.value = contenedor_audio.value.querySelector(
    'input.control-tiempo'
  )
  if (audio.value.readyState > 0) {
    duracion.value = audio.value.duration
    mostrarCantidadAlmacenada()
  } else {
    audio.value.addEventListener('loadedmetadata', metadatosCargados)
  }
  audio.value.addEventListener('progress', mostrarCantidadAlmacenada)
  audio.value.addEventListener('timeupdate', actualizacionTiempo)
})

onUnmounted(() => {
  audio.value.removeEventListener('loadedmetadata', metadatosCargados)
  audio.value.removeEventListener('progress', mostrarCantidadAlmacenada)
  audio.value.removeEventListener('timeupdate', actualizacionTiempo)
})

/**
 * Esta función se ejecuta al cargar los métadados. Una vez que ésto ocurre
 * se obtiene la duración del audio y se muestra dicha duración
 */
function metadatosCargados() {
  duracion.value = audio.value.duration
  mostrarCantidadAlmacenada()
}

/**
 * Esta función se ejecuta conforme se actualiza el tiempo de la reproducción
 * del audio. Cuando ésto ocurre se muestra actualiza el texto del tiempo transcurrido
 * y los estilos del input[type='range']. También se actualiza la información
 * del audio descargado
 */
function actualizacionTiempo() {
  if (!slider_activo.value) {
    tiempo_transcurrido.value = Math.floor(audio.value.currentTime)
    porcentaje_transcurrido.value = `${
      (100 * tiempo_transcurrido.value) / duracion.value
    }%`
    mostrarCantidadAlmacenada()
  }
}

/**
 * Esta función nos sirve para obtener un id aleatorio para el componente
 * @returns {String} Cadena con prefijo "audio-" contatenado con un string aleatorio
 */
function idAleatorio() {
  return 'audio-' + Math.random().toString(36).substring(2)
}

/**
 * @param {Number} segs Número que corresponde a segundos
 * @returns {String} string en formato de minutos:segundos
 */
function formatoTemporal(segs) {
  let minutos = Math.floor(segs / 60)
  let segundos = Math.floor(segs % 60)
  segundos = segundos < 10 ? `0${segundos}` : `${segundos}`
  return `${minutos}:${segundos}`
}

/**
 * Muestra el porcentaje del audio que ha sido descargado asociado al
 * fragmento mas cercano a la reproducción
 */
function mostrarCantidadAlmacenada() {
  if (audio.value.buffered.length > 0) {
    const cantidadAlmacenada = Math.floor(
      audio.value.buffered.end(audio.value.buffered.length - 1)
    )
    porcentaje_almacenado.value =
      (cantidadAlmacenada / Math.floor(duracion.value)) * 100 + '%'
  }
}

/** Adelanta el el audio 10 segundos */
function adelanta10() {
  if (tiempo_transcurrido.value < duracion.value - 10) {
    tiempo_transcurrido.value = Math.floor(audio.value.currentTime + 10)
    porcentaje_transcurrido.value = `${
      (100 * tiempo_transcurrido.value) / duracion.value
    }%`
    audio.value.currentTime = tiempo_transcurrido.value
  }
}

/** Retrasa el el audio 10 segundos */
function retrasa10() {
  if (10 < tiempo_transcurrido.value) {
    tiempo_transcurrido.value = Math.floor(audio.value.currentTime - 10)
    porcentaje_transcurrido.value = `${
      (100 * tiempo_transcurrido.value) / duracion.value
    }%`

    audio.value.currentTime = tiempo_transcurrido.value
  }
}

/** Watcha el botón de reproducción para pausar o reproducir */
watch(reproduciendo, nv => {
  if (nv) {
    audio.value.play()
  } else {
    audio.value.pause()
  }
})

/**
 * Watcha cuando se recorre el slider y cuando se suelta para actualizar
 * el tiempo transcurrido del audio
 */
watch(slider_activo, (nv, ov) => {
  // console.log(nv)
  if (!nv && ov) {
    audio.value.currentTime = +tiempo_transcurrido.value
  }
})

/** Watcha al selector de velocidad de reproducción para modificar la velocidad del audio */
watch(velocidad_reproduccion, nv => {
  audio.value.playbackRate = nv
})

/** Watcha el input de volumen para actualizar el volumen del audio */
watch(
  () => controlVolumen.value?.valor_seleccionado,
  nv => {
    audio.value.volume = nv / 100
  }
)

function funcionInput() {
  slider_activo.value = true
  porcentaje_transcurrido.value = `${(100 * tiempo_transcurrido.value) / duracion.value}%`
}
</script>

<template>
  <div
    :id="id_aleatorio"
    class="audio"
    role="toolbar"
    aria-label="Controles para reproducir audio"
  >
    <slot name="encabezado"> </slot>

    <audio
      preload="metadata"
      type="audio/mp3"
      :src="archivo"
    ></audio>

    <div class="flex flex-contenido-separado texto-color-2">
      <div
        role="timer"
        aria-label="Tiempo transcurrido"
      >
        {{ formatoTemporal(tiempo_transcurrido) }}
      </div>

      <div>
        <span class="a11y-solo-lectura"> Duración total: </span>
        {{ formatoTemporal(duracion) }}
      </div>
    </div>

    <input
      type="range"
      class="control-tiempo"
      aria-label="Barra de progreso de la reproducción"
      :max="Math.floor(duracion)"
      v-model.number="tiempo_transcurrido"
      @change="slider_activo = false"
      @input="funcionInput()"
    />

    <div class="flex">
      <div class="audio-velocidad">
        <select
          name="velocidad-reproduccion"
          class="velocidad-reproduccion"
          aria-label="Selecciona la velocidad de reproducción"
          v-model="velocidad_reproduccion"
        >
          <optgroup label="Velocidad de reproducción">
            <option
              :value="velocidad.valor"
              v-for="velocidad in velocidades"
              :key="velocidad.opcion"
            >
              {{ velocidad.opcion }}x
            </option>
          </optgroup>
        </select>
      </div>

      <div class="audio-reproduccion">
        <button
          class="boton-pictograma boton-sin-contenedor-primario"
          @click="retrasa10"
          :disabled="!(tiempo_transcurrido > 10)"
        >
          <span
            class="pictograma-regresar-10"
            aria-hidden="true"
          ></span>
          <span class="a11y-solo-lectura"> Regresar </span>
        </button>

        <button
          class="boton-pictograma boton-sin-contenedor-primario"
          @click="reproduciendo = !reproduciendo"
        >
          <span
            class="pictograma-control-comenzar"
            aria-hidden="true"
            v-if="!reproduciendo"
          ></span>
          <span class="a11y-solo-lectura"> Comenzar reproducción </span>

          <span
            class="pictograma-control-pausa"
            aria-hidden="true"
            v-if="reproduciendo"
          ></span>
          <span class="a11y-solo-lectura"> Pausar reproducción </span>
        </button>

        <button
          class="boton-pictograma boton-sin-contenedor-primario"
          @click="adelanta10"
          :disabled="!(tiempo_transcurrido < duracion - 10)"
        >
          <span
            class="pictograma-adelantar-10"
            aria-hidden="true"
          ></span>
          <span class="a11y-solo-lectura"> Adelantar </span>
        </button>
      </div>

      <div class="audio-volumen">
        <button
          class="boton-pictograma boton-sin-contenedor-primario"
          @click="
            controlVolumen?.valor_seleccionado == 0
              ? (volumen_default = 100)
              : (volumen_default = 0)
          "
        >
          <span
            class="pictograma-volumen"
            aria-hidden="true"
            v-if="controlVolumen?.valor_seleccionado > 0"
          ></span>
          <span class="a11y-solo-lectura"> Encender sonido </span>

          <span
            class="pictograma-silenciar"
            aria-hidden="true"
            v-if="controlVolumen?.valor_seleccionado == 0"
          ></span>
          <span class="a11y-solo-lectura"> Apagar sonido </span>
        </button>

        <SisdaiControlDeslizante
          ref="controlVolumen"
          class="control-volumen m-y-1 m-x-0"
          aria-label="Nivel de volumen"
          :val_entrada="volumen_default"
        ></SisdaiControlDeslizante>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
input.control-tiempo[type='range'] {
  &::-webkit-slider-runnable-track {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--campo-rango-activo),
        var(--campo-rango-activo) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_almacenado),
        var(--campo-rango) v-bind(porcentaje_almacenado)
      );
    }
  }
  &::-moz-range-track {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--campo-rango-activo),
        var(--campo-rango-activo) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_almacenado),
        var(--campo-rango) v-bind(porcentaje_almacenado)
      );
    }
  }
  &::-ms-fill-upper {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--campo-rango-activo),
        var(--campo-rango-activo) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_transcurrido),
        var(--campo-rango-cursor) v-bind(porcentaje_almacenado),
        var(--campo-rango) v-bind(porcentaje_almacenado)
      );
    }
  }
}
</style>

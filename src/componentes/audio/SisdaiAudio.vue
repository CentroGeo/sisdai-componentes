<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
defineProps({
  archivo: {
    type: String,
    default: '',
  },
})

const velocidades = ref([
  { valor: 0.25, opcion: '0.25' },
  { valor: 0.5, opcion: '0.5' },
  { valor: 0.75, opcion: '0.75' },
  { valor: 1, opcion: '1.0' },
  { valor: 1.25, opcion: '1.25' },
  { valor: 2.25, opcion: '2.25' },
  { valor: 3.75, opcion: '3.75' },
])

const velocidad_reproduccion = ref(1)
const reproduciendo = ref(false)
const volumen = ref(100)
const id_aleatorio = idAleatorio()
const duracion = ref(0)
const tiempo_transcurrido = ref(0)

// Strings para css
const porcentaje_transcurrido = ref('0%')
const porcentaje_almacenado = ref('0%')
const porcentaje_volumen = ref('100%')

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
/**
 * Adelanta el el audio 10 segundos
 */
function adelanta10() {
  if (tiempo_transcurrido.value < duracion.value - 10) {
    tiempo_transcurrido.value = Math.floor(audio.value.currentTime + 10)
    porcentaje_transcurrido.value = `${
      (100 * tiempo_transcurrido.value) / duracion.value
    }%`
    audio.value.currentTime = tiempo_transcurrido.value
  }
}
/**
 * Retrasa el el audio 10 segundos
 */
function retrasa10() {
  if (10 < tiempo_transcurrido.value) {
    tiempo_transcurrido.value = Math.floor(audio.value.currentTime - 10)
    porcentaje_transcurrido.value = `${
      (100 * tiempo_transcurrido.value) / duracion.value
    }%`

    audio.value.currentTime = tiempo_transcurrido.value
  }
}
/**
 * Watcha el botón de reproducción para pausar o reproducir
 */
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
/**
 * Watcha al selector de velocidad de reproducción para modificar la velocidad
 * del audio
 */
watch(velocidad_reproduccion, nv => {
  audio.value.playbackRate = nv
})
/**
 * Watcha el input de volumen para actualizar el volumen del audio
 */
watch(volumen, nv => {
  audio.value.volume = nv / 100
  porcentaje_volumen.value = `${nv}%`
})
</script>

<template>
  <div
    class="sisdai-audio borde-redondeado-8 p-3"
    :id="id_aleatorio"
  >
    <slot name="encabezado"> </slot>
    <audio
      preload="metadata"
      type="audio/mp3"
      :src="archivo"
    ></audio>
    <div class="flex flex-contenido-separado">
      <span class="tiempo-transcurrido columna-4 texto-color-2">{{
        formatoTemporal(tiempo_transcurrido)
      }}</span>
      <span class="tiempo-duracion columna-4 texto-derecha texto-color-2">
        {{ formatoTemporal(duracion) }}</span
      >
    </div>
    <div class="flex">
      <input
        type="range"
        class="control-tiempo columna-16"
        :max="Math.floor(duracion)"
        v-model.number="tiempo_transcurrido"
        @change="slider_activo = false"
        @input="
          slider_activo = true
          porcentaje_transcurrido = `${(100 * tiempo_transcurrido) / duracion}%`
        "
      />
    </div>

    <div class="flex flex-contenido-separado">
      <div class="columna-2-mov columna-4-esc">
        <select
          name="velocidad-reproduccion"
          class="velocidad-reproduccion m-y-1"
          v-model="velocidad_reproduccion"
        >
          <optgroup label="Velocida de reproduccion">
            <option
              :value="velocidad.valor"
              v-for="(velocidad, i) in velocidades"
              :key="i"
            >
              {{ velocidad.opcion }}
            </option>
          </optgroup>
        </select>
      </div>
      <div class="columna-4-mov columna-8-esc flex flex-contenido-centrado">
        <button
          class="boton-icono boton-sin-borde"
          @click="retrasa10"
          :disabled="!(tiempo_transcurrido > 10)"
        >
          <span class="icono-regresar-10"></span>
        </button>
        <button
          class="boton-icono boton-sin-borde"
          @click="reproduciendo = !reproduciendo"
        >
          <span
            class="icono-control-comenzar"
            v-if="!reproduciendo"
          ></span>
          <span
            class="icono-control-pausa"
            v-if="reproduciendo"
          ></span>
        </button>
        <button
          class="boton-icono boton-sin-borde"
          @click="adelanta10"
          :disabled="!(tiempo_transcurrido < duracion - 10)"
        >
          <span class="icono-adelantar-10"></span>
        </button>
      </div>
      <div class="columna-2-mov columna-4-esc flex contenedor-volumen">
        <button
          class="boton-icono boton-sin-borde"
          @click="volumen == 0 ? (volumen = 100) : (volumen = 0)"
        >
          <span
            class="icono-volumen"
            v-if="volumen > 0"
          ></span>
          <span
            class="icono-silenciar"
            v-if="volumen == 0"
          ></span>
        </button>
        <input
          type="range"
          class="control-volumen m-y-1 m-x-0"
          v-model="volumen"
          max="100"
          value="100"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.sisdai-audio {
  width: 100%;
  background: var(--tarjetas-fondo);
  button.boton-icono.boton-sin-borde:disabled {
    border-color: transparent;
  }
  .contenedor-volumen {
    flex-wrap: nowrap;
    button {
      margin-right: 0;
    }
  }
}

input[type='range'] {
  min-height: 1rem;
}
input.control-volumen[type='range'] {
  &::-moz-range-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    height: 1rem;
    width: 1rem;
    background: var(--input-controles-color);
  }
  &::-ms-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    width: 1rem;
    height: 1rem;
    background: var(--input-controles-color);
  }
  &::-webkit-slider-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    width: 1rem;
    height: 1rem;
    background: var(--input-controles-color);
  }
  &::-webkit-slider-runnable-track {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_volumen),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_volumen)
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
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_volumen),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_volumen)
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
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_volumen),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_volumen)
      );
    }
  }
}

input.control-tiempo[type='range'] {
  width: 100%;
  cursor: pointer;
  height: 1rem;
  &::-webkit-slider-runnable-track {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_almacenado),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_almacenado)
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
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_almacenado),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_almacenado)
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
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_transcurrido),
        var(--boton-primario-hover-fondo) v-bind(porcentaje_almacenado),
        var(--input-deshabilitado-fondo) v-bind(porcentaje_almacenado)
      );
    }
  }
}

input.control-tiempo[type='range'] {
  &::-moz-range-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    width: 1rem;
    height: 1rem;
    background: var(--input-controles-color);
  }
  &::-ms-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    width: 1rem;
    height: 1rem;
    background: var(--input-controles-color);
  }
  &::-webkit-slider-thumb {
    margin-top: calc((-1rem * 0.5) + 0.125rem);
    width: 1rem;
    height: 1rem;
    background: var(--input-controles-color);
  }
}

select.velocidad-reproduccion {
  max-width: 50px;
  height: 1rem;
  font-size: 0.75rem;
  background-position: calc(100% - 2px), 50%;
  border-radius: 10px;
  padding: 0 4px;
}
</style>

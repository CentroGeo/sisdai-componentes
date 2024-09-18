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
import { computed } from 'vue'

const value = defineModel()

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 5,
  },
})

function idAleatorio() {
  return 'control-acercar-alejar-' + Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  // getter
  get() {
    return Math.round(value.value)
  },
  // setter
  set(newValue) {
    emit('update:modelValue', Number(newValue))
  },
})

// const valor_porcentual = computed(() => {
//   return `${((inputValue.value - props.min) / (props.max - props.min)) * 100}%`
// })

function aumentar() {
  inputValue.value = inputValue.value + props.step
}

function disminuir() {
  inputValue.value = inputValue.value - props.step
}
</script>

<template>
  <div
    class="control-acercar-alejar"
    role="toolbar"
    aria-label="Controles para ajustar el nivel de acercamiento"
  >
    <button
      type="button"
      class="boton-pictograma boton-sin-contenedor-secundario"
      aria-label="Alejar"
      @click="disminuir"
    >
      <span
        class="pictograma-restar"
        aria-hidden="true"
      ></span>
    </button>

    <input
      type="range"
      class="control-acercar-alejar-rango"
      aria-label="Ajustar el nivel de acercamiento"
      :min="min"
      :max="max"
      :step="step"
      v-model="inputValue"
    />

    <button
      type="button"
      class="boton-pictograma boton-sin-contenedor-secundario"
      aria-label="Acercar"
      @click="aumentar"
    >
      <span
        class="pictograma-agregar"
        aria-hidden="true"
      ></span>
    </button>

    <input
      :id="id_aleatorio"
      type="text"
      maxlength="3"
      inputmode="numeric"
      min="0"
      max="100"
      pattern="\d*"
      class="control-acercar-alejar-porcentaje"
      aria-label="Porcentaje de acercamiento"
      v-model.lazy="inputValue"
    />
  </div>
</template>

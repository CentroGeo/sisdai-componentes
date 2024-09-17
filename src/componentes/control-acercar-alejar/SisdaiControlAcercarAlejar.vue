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

<template>
  <div
    class="control-acercar-alejar"
    role="toolbar"
    aria-label="Controles para ajustar el nivel de acercamiento"
  >
    <button
      class="boton-pictograma boton-sin-contenedor-secundario"
      @click="disminuir"
      aria-label="Alejar"
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
      class="boton-pictograma boton-sin-contenedor-secundario"
      @click="aumentar"
      aria-label="Acercar"
    >
      <span
        class="pictograma-agregar"
        aria-hidden="true"
      ></span>
    </button>

    <input
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
<script>
export default {
  name: 'SisdaiControlAcercarAlejar',
  props: {
    value: Number,
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
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  computed: {
    inputValue: {
      get() {
        return Math.round(this.value)
      },
      set(value) {
        this.$emit('change', Number(value))
      },
    },
    valor_porcentual() {
      return `${((this.inputValue - this.min) / (this.max - this.min)) * 100}%`
    },
  },
  methods: {
    aumentar() {
      this.inputValue = this.inputValue + this.step
    },
    disminuir() {
      this.inputValue = this.inputValue - this.step
    },
  },
}
</script>

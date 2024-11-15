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
import { ref, computed, watch } from 'vue'

const props = defineProps({
  val_min: { default: 0, type: Number },
  val_max: { default: 100, type: Number },
  val_entrada: { default: 50, type: Number },
})

const emit = defineEmits(['update:val_entrada'])

const valor_seleccionado = ref(props.val_entrada)

const valor_porcentual = computed(() => {
  return `${
    (100 * (valor_seleccionado.value - props.val_min)) /
    (props.val_max - props.val_min)
  }%`
})

watch(
  () => props.val_entrada,
  nv => {
    valor_seleccionado.value = nv
  }
)

defineExpose({
  valor_seleccionado,
})
</script>

<template>
  <input
    testid="control-deslizante-input"
    type="range"
    class="control-deslizante"
    :min="val_min"
    :max="val_max"
    role="slider"
    v-model="valor_seleccionado"
    @input="emit('update:val_entrada', $event.target.value)"
  />
</template>

<style lang="scss">
input.control-deslizante[type='range'] {
  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      var(--campo-rango-activo),
      var(--campo-rango-activo) v-bind(valor_porcentual),
      var(--campo-rango) v-bind(valor_porcentual)
    );
  }
  &::-moz-range-track {
    background: linear-gradient(
      to right,
      var(--campo-rango-activo),
      var(--campo-rango-activo) v-bind(valor_porcentual),
      var(--campo-rango) v-bind(valor_porcentual)
    );
  }
  &::-ms-fill-upper {
    background: linear-gradient(
      to right,
      var(--campo-rango-activo),
      var(--campo-rango-activo) v-bind(valor_porcentual),
      var(--campo-rango) v-bind(valor_porcentual)
    );
  }
  &:hover,
  &:focus,
  &:active {
    &::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        var(--campo-rango-cursor),
        var(--campo-rango-cursor) v-bind(valor_porcentual),
        var(--campo-rango) v-bind(valor_porcentual)
      );
    }
    &::-moz-range-track {
      background: linear-gradient(
        to right,
        var(--campo-rango-cursor),
        var(--campo-rango-cursor) v-bind(valor_porcentual),
        var(--campo-rango) v-bind(valor_porcentual)
      );
    }
    &::-ms-fill-upper {
      background: linear-gradient(
        to right,
        var(--campo-rango-cursor),
        var(--campo-rango-cursor) v-bind(valor_porcentual),
        var(--campo-rango) v-bind(valor_porcentual)
      );
    }
  }
}
</style>

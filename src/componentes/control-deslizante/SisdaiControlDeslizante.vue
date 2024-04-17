<script setup>
import { ref, computed, defineExpose } from 'vue'
const props = defineProps({
  val_min: { default: 0, type: Number },
  val_max: { default: 100, type: Number },
  val_default: { default: 50, type: Number },
})
const valor_seleccionado = ref(props.val_default)
const valor_porcentual = computed(() => {
  return `${
    (100 * (valor_seleccionado.value - props.val_min)) /
    (props.val_max - props.val_min)
  }%`
})
defineExpose({
  valor_seleccionado,
})
</script>

<template>
  <input
    type="range"
    class="sisdai-control-deslizante"
    v-model="valor_seleccionado"
    :min="val_min"
    :max="val_max"
  />
</template>

<style lang="scss">
.sisdai-control-deslizante {
  width: 100%;
  background: var(--tarjetas-fondo);
}

input.sisdai-control-deslizante[type='range'] {
  &::-webkit-slider-runnable-track {
    &,
    &:hover,
    &:focus,
    &:active {
      background: linear-gradient(
        to right,
        var(--tipografia-color-2),
        var(--tipografia-color-2) v-bind(valor_porcentual),
        var(--input-deshabilitado-fondo) v-bind(valor_porcentual)
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
        var(--tipografia-color-2) v-bind(valor_porcentual),
        var(--input-deshabilitado-fondo) v-bind(valor_porcentual)
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
        var(--tipografia-color-2) v-bind(valor_porcentual),
        var(--input-deshabilitado-fondo) v-bind(valor_porcentual)
      );
    }
  }
}
</style>

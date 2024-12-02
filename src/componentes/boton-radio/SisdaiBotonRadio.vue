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

  const identificador = idAleatorio()

  function idAleatorio() {
    return 'radio-' + Math.random().toString(36).substring(2)
  }

  defineExpose({
    identificador,
  })

  const props = defineProps({
    etiqueta: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const modeloRadio = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
  <span>
    <input 
      :id="identificador"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      v-model="modeloRadio"
      type="radio"
      v-bind="$attrs"
    />
    <label :for="identificador">
      {{ etiqueta }}
    </label>
  </span>
</template>

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
const identificador = idAleatorio()

function idAleatorio() {
  return 'campo-' + Math.random().toString(36).substring(2)
}

defineExpose({
  identificador,
})

defineProps({
  etiqueta: {
    type: String,
    required: true
  },
  ejemplo: {
    type: String,
    required: false
  },
  texto_ayuda: {
    type: String,
    default: ''
  },
  texto_error: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ""
  },
  es_etiqueta_visible: {
    type: Boolean,
    required: true,
    default: true
  },
  es_obligatorio: {
    type: Boolean,
    required: true,
    default: false
  },
})
</script>

<template>
  <div>
    <label :for="identificador" :class="(es_etiqueta_visible)?'':'a11y-solo-lectura'">
      {{ etiqueta }}
      <span 
        v-if="es_obligatorio"
        class="formulario-obligatoriedad" 
      >
        (Obligatorio)
      </span>
    </label>
    <textarea 
      :name="identificador" 
      :id="identificador"
      :placeholder="ejemplo"
      :required="es_obligatorio"
      :aria-required="es_obligatorio"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda || es_obligatorio || texto_error"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </div>
</template>

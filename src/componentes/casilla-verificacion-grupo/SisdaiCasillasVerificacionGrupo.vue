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
  defineProps({
    leyenda: {
      type: String,
      required: true
    },
    texto_ayuda: {
      type: String,
      default: ''
    },
    texto_error: {
      type: String,
      default: ''
    },
    es_vertical: {
      type: Boolean,
      default: false
    },
    es_obligatorio: {
      type: Boolean,
      default: false
    },
  });
</script>

<template>
  <div>
    <fieldset 
      class="grupo-formulario" 
      :class="{'grupo-formulario-vertical':es_vertical}"
    >
      <legend>
        {{ leyenda }}
        <span 
          v-if="es_obligatorio"
          class="formulario-obligatoriedad" 
        >
          (Obligatorio)
        </span>
      </legend>
      <slot></slot>
    </fieldset>
    <p aria-live="polite" class="formulario-ayuda" role="status" v-if="texto_ayuda || es_obligatorio || texto_error"> 
      {{ texto_error }}
      {{ texto_ayuda }}
    </p>
  </div>
</template>

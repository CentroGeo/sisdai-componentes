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
  dominio: {
    type: String,
    default: '',
  },
  ruta: {
    type: String,
    default: '',
  },
  textoAlternativo: {
    type: String,
    default: '',
  },
  leyenda: {
    type: String,
    default: '',
  },
  ancho_maximo: {
    type: String,
    default: '100%',
  },
})
</script>

<template>
  <figure>
    <picture>
      <source
        testid="source-webp"
        :srcset="`${dominio}${ruta}.webp`"
        type="image/webp"
      />
      <source
        testid="source-png"
        type="image/png"
        :srcset="`${dominio}${ruta}.png`"
      />
      <img
        testid="src-img"
        :style="{ maxWidth: ancho_maximo, width: '100%' }"
        loading="lazy"
        :src="`${dominio}${ruta}.png`"
        :alt="textoAlternativo"
      />
    </picture>

    <figcaption
      testid="figcaption"
      aria-hidden="true"
      v-html="leyenda"
    ></figcaption>
  </figure>
</template>

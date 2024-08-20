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
  versionProyecto: {
    type: String,
    required: true,
  },
  entornoProyecto: {
    type: String,
    required: true,
  },
  actualizacionProyecto: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <dl
    id="info_despliegue"
    class="informacion-despliegue"
    v-if="entornoProyecto !== 'production'"
  >
    <dt>Versión:</dt>
    <dd test="version">{{ versionProyecto }}</dd>

    <dt>Ambiente:</dt>
    <dd>{{ entornoProyecto }}</dd>

    <dt>Actualización:</dt>
    <dd>{{ actualizacionProyecto }}</dd>
  </dl>
</template>

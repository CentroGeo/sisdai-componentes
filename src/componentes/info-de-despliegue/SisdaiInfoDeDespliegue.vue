<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <div
    id="info_despliegue"
    v-if="entornoProyecto !== 'production'"
  >
    <dl class="info-entorno">
      <dt>V</dt>
      <dd>{{ versionProyecto }}</dd>
      <dt>Ambiente:</dt>
      <dd>{{ entornoProyecto }}</dd>
      <dt>Actualización:</dt>
      <dd>{{ actualizacionProyecto }}</dd>
    </dl>
  </div>
</template>

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

<style>
.info-entorno {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  user-select: none;
}
.info-entorno dt,
dd {
  color: #fff;
  font-size: 10px;
  line-height: 12px;
  padding: 0;
  margin: 0;
  text-align: left;
  display: inline-block;
}
.info-entorno dt {
  padding-left: 4px;
}
.info-entorno dd {
  padding-left: 4px;
}
.info-entorno dd:not(:last-child) {
  padding-right: 8px;
}
</style>

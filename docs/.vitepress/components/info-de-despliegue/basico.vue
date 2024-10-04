<template>
  <div class="contenerdor-panttalla-simulada">
    <SisdaiInfoDeDespliegue
      :entornoProyecto="entornoProyecto"
      :versionProyecto="versionProyecto"
      :actualizacionProyecto="actualizacionProyecto"
    />

    <ElementosParaVerSisdaiInfoDeDespliegue />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ElementosParaVerSisdaiInfoDeDespliegue from './elementos-para-ver-info-de-despliegue.vue'

import pkg from '../../../../package.json'

const entornoProyecto = computed(() => {
  return 'development'
})

const versionProyecto = computed(() => {
  return pkg.version
})

const actualizacionProyecto = computed(() => {
  let now = new Date()
  return now.toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
  })
})
</script>

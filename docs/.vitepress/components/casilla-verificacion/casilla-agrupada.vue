<script setup>
  import { ref } from 'vue'
  const casillaArreglo = ref([])
</script>
<template>
  <SisdaiCasillasVerificacionGrupo
    leyenda="Grupo de casillas de verificacion"
    texto_ayuda="Texto de ayuda"
    :es_obligatorio="true"
  >
    <SisdaiCasillaVerificacion 
      etiqueta="Casilla uno"
      value="Uno"
      v-model="casillaArreglo"
      :es_obligatorio="true"
    />
    <SisdaiCasillaVerificacion 
      etiqueta="Casilla dos"
      value="Dos"
      v-model="casillaArreglo"
      :es_obligatorio="true"
    />
  </SisdaiCasillasVerificacionGrupo>
</template>

<script setup>
import { ref } from 'vue'
const botonRadio = ref('')
</script>
<template>
  <SisdaiBotonesRadioGrupo
    leyenda="Grupo de botones de radio"
    texto_ayuda="Texto de ayuda."
    :es_obligatorio="true"
  >
    <SisdaiBotonRadio 
      etiqueta="boton radio uno"
      v-model="botonRadio"
      value="Uno"
      name="nombredelgrupo"
      :es_obligatorio="true"
    />
    <SisdaiBotonRadio 
      etiqueta="boton radio dos"
      v-model="botonRadio"
      value="Dos"
      name="nombredelgrupo"
      :es_obligatorio="true"
    />
  </SisdaiBotonesRadioGrupo>
</template>

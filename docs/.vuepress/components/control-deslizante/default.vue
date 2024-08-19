<script setup>
import { ref } from 'vue'
const controlDeslizante = ref()
</script>
<template>
  <div class="contenedor">
    <label for="identificador"
      >Valor: {{ controlDeslizante?.valor_seleccionado }}</label
    >
    <SisdaiControlDeslizante
      id="identificador"
      ref="controlDeslizante"
      :val_min="20"
      :val_max="100"
      :val_entrada="90"
      step="10"
    >
    </SisdaiControlDeslizante>
  </div>
</template>

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
      :val_min="20"
      :val_max="100"
      :val_entrada="90"
      id="identificador"
      step="10"
      ref="controlDeslizante"
      @update:val_entrada="
        $event => (controlDeslizante.valor_seleccionado = $event)
      "
    >
    </SisdaiControlDeslizante>
  </div>
</template>

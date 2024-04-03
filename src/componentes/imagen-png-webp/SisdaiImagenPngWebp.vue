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
  <figure class="m-y-2">
    <picture>
      <source
        :srcset="`${dominio}${ruta}.webp`"
        type="image/webp"
      />
      <source
        type="image/png"
        :srcset="`${dominio}${ruta}.png`"
      />
      <img
        :style="{ maxWidth: ancho_maximo, width: '100%' }"
        loading="lazy"
        :src="`${dominio}${ruta}.png`"
        :alt="textoAlternativo"
      />
    </picture>
    <figcaption
      aria-hidden="true"
      v-html="leyenda"
    />
  </figure>
</template>

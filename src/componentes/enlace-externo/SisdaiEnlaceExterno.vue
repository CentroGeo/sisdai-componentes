<script setup>
defineProps({
  enlace: {
    type: String,
    default: '#',
  },
  texto: {
    type: String,
    default: 'Enlace externo',
  },
})
</script>

<template>
  <a
    :href="enlace"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ texto }}
    <span
      class="icono-enlace-externo"
      aria-hidden="true"
    />
  </a>
</template>

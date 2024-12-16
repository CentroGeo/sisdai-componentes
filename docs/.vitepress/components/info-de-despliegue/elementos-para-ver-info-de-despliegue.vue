<template>
  <div class="">
    <div class="portada">
      <img
        class="portada-imagen"
        :src="`${cdn}documentacion/rayo.jpg`"
        alt=""
      />
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <div class="contenedor ancho-lectura">
            <p class="portada-titulo">Título de ENI</p>
          </div>
        </div>
      </div>
    </div>
    <div class="m-3">
      <div class="tarjeta m-b-2">
        <img
          class="tarjeta-imagen"
          :src="`${cdn}documentacion/latke.jpg`"
          alt=""
        />
        <div class="tarjeta-cuerpo">
          <p>Esta es una tarjeta de ejemplo</p>
        </div>
      </div>
      <a
        href="#"
        class="m-b-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        enlace a ningun lado de ejemplo
      </a>
    </div>
  </div>
</template>

<script setup>
  const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>

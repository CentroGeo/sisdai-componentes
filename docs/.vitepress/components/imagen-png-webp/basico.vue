<template>
  <div class="contenedor">
    <SisdaiImagenPngWebp
      :dominio="cdn"
      ruta="reticula_03"
      textoAlternativo="Imagen que muestra la división de retículas en version móvil"
      leyenda="La retícula en versión móvil se divide en 8 columnas"
      ancho_maximo="400px"
    ></SisdaiImagenPngWebp>
  </div>
</template>

<script setup>
const cdn=import.meta.env.VITE_CDN_ARCHIVOS.replace("sisdai-componentes", "landing-sisdai/catalogo/fundamentos/reticula")
</script>

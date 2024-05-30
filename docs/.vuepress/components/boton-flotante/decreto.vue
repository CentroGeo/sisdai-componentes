<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
      style="position: absolute"
      :enlaces="[
        {
          contenido: 'Documento externo',
          clasesCss: 'icono-resaltado',
          color: '#000000',
        },
      ]"
    />
  </div>
</template>

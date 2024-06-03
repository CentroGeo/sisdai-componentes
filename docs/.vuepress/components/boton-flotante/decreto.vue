<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
      style="position: absolute"
      :enlaces="[
        {
          contenido: 'Documento externo',
          clasesCss: 'decreto',
        },
      ]"
    />
  </div>
</template>

<style>
.boton-flotante .boton-flotante-hipervinculo.decreto,
.boton-flotante .boton-flotante-hipervinculo.decreto:hover,
.boton-flotante .boton-flotante-hipervinculo.decreto:focus {
  background: #000000;
}
</style>

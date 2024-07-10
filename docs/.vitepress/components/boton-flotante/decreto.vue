<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
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
  color: #ffffff;
}
.contenerdor-ejemplo-boton-flotante .boton-flotante {
  position: absolute;
}
</style>

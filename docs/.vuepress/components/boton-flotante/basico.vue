<template>
  <div class="contenerdor-ejemplo-boton-flotante">
    <SisdaiBotonFlotante
      style="position: absolute"
      :enlaces="[
        {
          clasesCss: 'eni',
          contenido: 'Ir a ENI',
          enlace: 'https://eni.conacyt.mx/',
          icono: 'pictograma-enlace-externo',
        },
        {
          clasesCss: 'gema',
          contenido: 'Ir a GEMA',
          enlace: 'https://gema.conacyt.mx/',
          icono: 'pictograma-enlace-externo',
        },
      ]"
    />
  </div>
</template>

<style>
.boton-flotante .boton-flotante-hipervinculo.eni,
.boton-flotante .boton-flotante-hipervinculo.eni:hover,
.boton-flotante .boton-flotante-hipervinculo.eni:focus {
  background: #3caeac;
}

.boton-flotante .boton-flotante-hipervinculo.gema,
.boton-flotante .boton-flotante-hipervinculo.gema:hover,
.boton-flotante .boton-flotante-hipervinculo.gema:focus {
  background: #ff5100;
}
</style>

<template>
  <div class="contenerdor-ejemplo-menu-flotante">
    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'eni',
          contenido: 'Ir a ENI',
          enlace: 'https://eni.conacyt.mx/',
        },
        {
          clasesCss: 'gema',
          contenido: 'Ir a GEMA',
          enlace: 'https://gema.conacyt.mx/',
        },
      ]"
    />
  </div>
</template>

<style>
.contenerdor-ejemplo-menu-flotante .menu-flotante {
  position: relative;
  top: 16px;
  left: 16px;
}
</style>

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
          colorFondo: '#3caeac',
        },
        {
          clasesCss: 'gema',
          contenido: 'Ir a GEMA',
          enlace: 'https://gema.conacyt.mx/',
          icono: 'pictograma-enlace-externo',
          colorFondo: '#ff5100',
        },
      ]"
    />
  </div>
</template>

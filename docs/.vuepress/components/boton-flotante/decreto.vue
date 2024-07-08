<template>
  <div class="contenerdor-ejemplo-menu-flotante">
    <SisdaiBotonFlotante
      :enlaces="[
        {
          contenido: 'Documento externo',
          clasesCss: 'decreto',
          icono: 'pictograma-documento',
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

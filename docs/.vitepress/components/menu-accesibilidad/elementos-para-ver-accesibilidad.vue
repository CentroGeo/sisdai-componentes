<template>
  <div class="m-3">
    <div class="tarjeta m-b-3">
      <img
        class="tarjeta-imagen"
        :src="`${cdn}documentacion/kale-3.jpg`"
        alt=""
      />
      <div class="tarjeta-cuerpo">
        <p>Esta es una tarjeta de ejemplo</p>
      </div>
    </div>

    <a
      class="tarjeta tarjeta-hipervinculo-externo"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="tarjeta-imagen"
        :src="`${cdn}documentacion/puca.jpg`"
        alt=""
      />
      <div class="tarjeta-degradado">
        <div class="tarjeta-cuerpo">
          <p>Este es un ejemplo de hipervínculo externo con forma de tarjeta</p>
          <p class="h1">
            Titulo del hipervínculo
            <span class="pictograma-enlace-externo"></span>
          </p>
        </div>
      </div>
    </a>

    <p class="m-b-10">
      Parrafo normal, <b>Negritas, </b> <i>Cursivas, </i>
      <button
        type="button"
        class="boton-secundario boton-chico"
      >
        ejemplo de botón
      </button>,
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        ejemplo de enlace a ningun lado
      </a>
    </p>

    <SisdaiBotonFlotante
      id="btnflotante"
      :enlaces="[
        {
          clasesCss: 'decreto',
        },
      ]"
    />
  </div>
</template>

<style>
.contenerdor-panttalla-simulada .menu-flotante {
  position: absolute;
}
</style>

<script setup>
  const cdn = import.meta.env.VITE_CDN_ARCHIVOS
</script>

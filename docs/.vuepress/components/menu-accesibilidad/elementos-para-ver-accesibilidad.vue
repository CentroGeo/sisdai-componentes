<template>
  <div class="elementos-ejemplo m-x-2 p-b-8">
    <div class="tarjeta m-b-2">
      <img
        class="tarjeta-imagen"
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/kale-3.jpg"
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
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/puca.jpg"
        alt=""
      />
      <div class="tarjeta-degradado">
        <div class="tarjeta-cuerpo">
          <p>Este es un ejemplo de hipervínculo externo con forma de tarjeta</p>
          <p class="h2">Titulo del hipervínculo externo</p>
        </div>
      </div>
    </a>

    <p>
      Parrafo normal, <b>Negritas, </b> <i>Cursiva,</i>
      <button
        type="button"
        class="boton-secundario boton-chico"
      >
        botón</button
      >,
      <a
        class="boton-secundario boton-chico"
        role="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        enlace con estilo de botón
      </a>
    </p>

    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'decreto',
        },
      ]"
    />
  </div>
</template>

<style>
.contenerdor-panttalla-simulada .boton-flotante {
  position: absolute;
}
.contenerdor-panttalla-simulada .menu-accesibilidad {
  position: absolute;
}
.contenerdor-panttalla-simulada {
  position: relative;
  border-right: solid gray 10px;
  border-bottom: solid #000 1px;
  min-height: 350px;
  width: 100%;
  overflow-y: hidden;
}
.boton-flotante .boton-flotante-hipervinculo.decreto,
.boton-flotante .boton-flotante-hipervinculo.decreto:hover,
.boton-flotante .boton-flotante-hipervinculo.decreto:focus {
  background: #000000;
  color: #ffffff;
}
</style>

<template>
  <div class="elementos-ejemplo m-x-2">
    <div
      class="contenedor-portada"
      style="height: 40vh"
    >
      <img
        class="portada"
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/rayo.jpg"
      />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <div class="contenedor ancho-lectura">
            <p class="titulo-eni texto-centrado">Título de ENI</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tarjeta m-y-2">
      <img
        class="fondo-imagen"
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/latke.jpg"
      />
      <div class="contenido-html">
        <p class="parrafo-texto-alto">Esta es una tarjeta de ejemplo</p>
      </div>
    </div>

    <div class="m-y-5">
      <a
        class="boton boton-secundario boton-chico"
        target="_blank"
      >
        enlace con estilo de botón
      </a>
    </div>
  </div>
</template>

<style>
.contenerdor-panttalla-simulada .info-entorno {
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
</style>

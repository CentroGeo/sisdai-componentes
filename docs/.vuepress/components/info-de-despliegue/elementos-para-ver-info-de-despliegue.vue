<template>
  <div class="elementos-ejemplo m-x-2">
    <div class="portada">
      <img
        class="portada-imagen"
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/rayo.jpg"
        alt=""
      />
      <div class="portada-degradado">
        <div class="portada-cuerpo">
          <div class="contenedor ancho-lectura">
            <p class="portada-titulo">Título de ENI</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tarjeta m-y-2">
      <img
        class="tarjeta-imagen"
        src="https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/latke.jpg"
        alt=""
      />
      <div class="tarjeta-cuerpo">
        <p>Esta es una tarjeta de ejemplo</p>
      </div>
    </div>

    <div class="m-y-5">
      <a
        href="#"
        class="boton-secundario boton-chico"
        target="_blank"
        rel="noopener noreferrer"
      >
        enlace con estilo de botón
      </a>
    </div>
  </div>
</template>

<style>
.contenerdor-panttalla-simulada .informacion-despliegue {
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

<!--This file is part of sisdai-componentes.-->

<!--sisdai-componentes is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--sisdai-componentes is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <footer
    class="contenedor gobmx-fondo-oscuro-1 piepagina-gobmx gobmx-piepagina p-t-4 p-b-10"
    aria-label="Gobierno de México"
  >
    <div class="flex flex-wrap">
      <div class="columna-8 columna-4-esc">
        <img
          src="https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg"
          alt="Gobierno de México"
          width="200px"
          height="60px"
          class="foot-logo"
        />
      </div>
      <div class="columna-8 columna-4-esc">
        <p class="titulo-lista">Enlaces</p>
        <ul class="lista-plana">
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.participa.gob.mx/"
              target="_blank"
              rel="noopener"
              >Participa</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/publicaciones"
              target="_blank"
              rel="noopener"
              >Publicaciones Oficiales</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="http://www.ordenjuridico.gob.mx/"
              target="_blank"
              rel="noopener"
              >Marco Jurídico</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml"
              target="_blank"
              rel="noopener"
              >Plataforma Nacional de Transparencia</a
            >
          </li>
        </ul>
      </div>
      <div class="columna-8 columna-4-esc">
        <p class="titulo-lista">¿Qué es gob.mx?</p>
        <p>
          <span
            >Es el portal único de trámites, información y participación
            ciudadana.
          </span>
          <a
            href="https://www.gob.mx/que-es-gobmx"
            class="hipervinculo-gobmx"
            target="_blank"
            rel="noopener"
            >Leer más</a
          >
        </p>
        <ul class="lista-plana">
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://datos.gob.mx/"
              target="_blank"
              rel="noopener"
              >Portal de datos abiertos</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/accesibilidad"
              target="_blank"
              rel="noopener"
              >Declaración de accesibilidad</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/aviso_de_privacidad"
              target="_blank"
              rel="noopener"
              >Aviso de privacidad integral</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/privacidadsimplificado"
              target="_blank"
              rel="noopener"
              >Aviso de privacidad simplificado</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/terminos"
              target="_blank"
              rel="noopener"
              >Términos y Condiciones</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
              target="_blank"
              rel="noopener"
              >Política de seguridad</a
            >
          </li>
          <li>
            <a
              class="hipervinculo-gobmx"
              href="https://www.gob.mx/sitemap"
              target="_blank"
              rel="noopener"
              >Mapa de sitio</a
            >
          </li>
        </ul>
      </div>
      <div class="columna-8 columna-4-esc">
        <p>
          <a
            class="hipervinculo-gobmx"
            href="https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54"
            target="_blank"
            rel="noopener"
            >Denuncia contra servidores públicos</a
          >
        </p>
        <p class="titulo-lista">
          Síguenos en
          <span class="a11y-solo-lectura">nuestras redes sociales:</span>
        </p>
        <ul class="lista-redes-sociales">
          <li>
            <a
              href="https://www.facebook.com/gobmx"
              class="hipervinculo-gobmx m-r-3"
              target="_blank"
              rel="noopener"
            >
              <span
                class="icono-social-facebook icono-3"
                aria-hidden="true"
              ></span>
              <span class="a11y-solo-lectura">feisbuk</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/gobmx"
              class="hipervinculo-gobmx"
              target="_blank"
              rel="noopener"
            >
              <span
                class="icono-social-x icono-3"
                aria-hidden="true"
              ></span>
              <span class="a11y-solo-lectura">x.</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.gobmx-piepagina {
  background-image: url('https://cdn.conacyt.mx/sisdai-archivos/gobmxpleca.svg');
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: auto 50px;
  color: #fff;
  font-size: 14px;
}
</style>

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

<script setup>
const anioActual = new Date().getFullYear()
</script>

<template>
  <footer
    class="contenedor piepagina-conahcyt"
    aria-label="Conahcyt"
  >
    <div class="flex flex-wrap">
      <div class="columna-8 columna-8-esc">
        <img
          src="https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg"
          alt="Conahcyt"
          width="200px"
          height="60px"
        />
        <p>
          Av. Insurgentes Sur 1582, Col. Crédito Constructor,<br />
          Demarcación Territorial Benito Juárez, C.P. 03940,<br />
          Ciudad de México Tel: (55) 5322-7700
        </p>
        <p>
          ©<span testid="anio-actual-span">{{ anioActual }}</span>
          Conahcyt Derechos Reservados en trámite
        </p>
      </div>

      <div class="columna-8 columna-4-esc">
        <p class="piepagina-titulo">Enlaces</p>

        <ul>
          <li>
            <a
              class="hipervinculo-conahcyt"
              href="https://conahcyt.mx/directorio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directorio
            </a>
          </li>
          <li>
            <a
              class="hipervinculo-conahcyt"
              href="https://conahcyt.mx/centro-de-contacto-de-atencion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centro de Contacto
            </a>
          </li>
          <li>
            <a
              class="hipervinculo-conahcyt"
              href="https://conahcyt.mx/aviso-de-privacidad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad
            </a>
          </li>
          <li>
            <a
              class="hipervinculo-conahcyt"
              href="http://comunidad.conahcyt.mx/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intranet Conahcyt
            </a>
          </li>
        </ul>
      </div>

      <div class="columna-8 columna-4-esc">
        <p class="piepagina-titulo">
          Síguenos en
          <span class="a11y-solo-lectura">nuestras redes sociales:</span>
        </p>

        <ul class="piepagina-social">
          <li>
            <a
              href="https://www.facebook.com/ConahcytMX"
              class="hipervinculo-conahcyt"
              aria-label="feisbuk,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-facebook"
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Conahcyt_Mex"
              class="hipervinculo-conahcyt"
              aria-label="x,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-x"
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/conahcyt_mex/"
              class="hipervinculo-conahcyt"
              aria-label="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-instagram"
                aria-hidden="true"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Conahcytmx"
              class="hipervinculo-conahcyt"
              aria-label="yutub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="pictograma-social-youtube"
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

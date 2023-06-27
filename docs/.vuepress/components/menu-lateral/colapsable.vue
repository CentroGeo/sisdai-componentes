<template>
  <div>
    <SisdaiMenuLateral>
      <template slot="contenido-menu-lateral">
        <ul>
          <li>
            <router-link
              to="#api"
              exact
            >
              API</router-link
            >
          </li>
          <li>
            <router-link to="#slots"> Slots</router-link>
          </li>
          <SisdaiColapsableNavegacion
            :titulo="'<SisdaiColapsableNavegacion> :D'"
          >
            <template v-slot:listado-contenido>
              <li><router-link to="#ejemplos"> Ejemplos </router-link></li>
              <li><a href="#menu-lateral"> El mero inicio </a></li>
            </template>
          </SisdaiColapsableNavegacion>
        </ul>
        <a
          href="##"
          rel="noopener"
          style="display: grid"
        >
          <span
            class="icono-social-github titulo-eni"
            aria-hidden="true"
          ></span>
          <span> ir a github</span>
        </a>
      </template>
    </SisdaiMenuLateral>
  </div>
</template>

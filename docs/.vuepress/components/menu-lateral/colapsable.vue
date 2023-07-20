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
              <li>
                <router-link
                  to="#ejemplos"
                  tabindex="-1"
                >
                  Ejemplos
                </router-link>
              </li>
              <li>
                <a
                  href="#menu-lateral"
                  tabindex="-1"
                >
                  El mero inicio
                </a>
              </li>
            </template>
          </SisdaiColapsableNavegacion>
          <li>
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
          </li>
        </ul>
      </template>
    </SisdaiMenuLateral>
  </div>
</template>

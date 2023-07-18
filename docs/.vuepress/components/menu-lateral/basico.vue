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
          <li><router-link to="#slots"> Slots</router-link></li>
          <li><router-link to="#ejemplos"> Ejemplos </router-link></li>
          <li><a href="#menu-lateral"> El mero inicio </a></li>
        </ul>
      </template>
    </SisdaiMenuLateral>
  </div>
</template>

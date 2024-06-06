<template>
  <div>
    <SisdaiIndiceDeContenido id_indice="indice-lista">
      <template #contenido-indice-contenido>
        <ul>
          <li>
            <router-link to="#indice-de-contenido">
              Elemento índice de contenido
            </router-link>
          </li>
          <li>
            <a href="#slots"> Elemento slots </a>
          </li>
        </ul>
      </template>
    </SisdaiIndiceDeContenido>
  </div>
</template>

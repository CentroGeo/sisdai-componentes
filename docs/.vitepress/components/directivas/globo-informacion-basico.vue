<template>
  <div class="contenedor flex">
    <client-only>
      <!--Un globo de informacion basico -->
      <button
        class="boton-primario"
        v-globo-informacion="'Globo de información derecha (por defecto)'"
      >
        Globo de información derecha (por defecto)
      </button>

      <!--Un globo de informacion posicionado a la izquierda -->
      <button
        class="boton-primario"
        v-globo-informacion:izquierda="'Globo de información izquierda'"
      >
        Globo de información izquierda
      </button>

      <!--Un globo de informacion extendido  posicionado arriba -->
      <button
        class="boton-primario"
        v-globo-informacion-extendido:arriba="
          'Globo de información extendido arriba'
        "
      >
        Globo de información extendido arriba
      </button>

      <!--Un globo de informacion extendido  posicionado arriba -->
      <button
        class="boton-primario"
        v-globo-informacion-extendido:abajo="
          'Globo de información extendido abajo'
        "
      >
        Globo de información extendido abajo
      </button>
      <!--Un globo de informacion  posicionado abajo, con desplazamiento personalizado (50 pixeles abajo del elemento) -->
      <button
        class="boton-primario"
        v-globo-informacion:abajo="{
          contenido: 'Globo de información abajo trasladado 50px',
          desfase: [0, 50],
        }"
      >
        Globo de información abajo trasladado 50px
      </button>

      <!--Un globo de informacion extendido  posicionado arriba, con "interactable" activado, es decir que el globo de informacion se queda para interactuar (y tiene elementos para ello)-->
      <button
        class="boton-primario"
        v-globo-informacion-extendido:arriba.interactivo="{
          contenido: `Globo de información interactivo arriba <a href='#ejemplos'>con un enlace</a>`,
        }"
      >
        Globo de información interactivo arriba
      </button>
    </client-only>
  </div>
</template>

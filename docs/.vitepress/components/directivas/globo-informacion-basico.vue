<template>
  <div class="contenedor flex">
    <client-only>
      <!--Un globo de informacion basico -->
      <button v-globo-informacion="'soy un globo de informacion'">boton</button>

      <!--Un globo de informacion posicionado a la izquierda -->
      <button v-globo-informacion:izquierda="'soy un globo de infrmación'">
        boton
      </button>

      <!--Un globo de informacion extendido  posicionado arriba a la derecha -->
      <button
        v-globo-informacion-extendido:arriba-final="
          'soy un globo de información extendido'
        "
      >
        boton
      </button>

      <!--Un globo de informacion extendido  posicionado abajo, con desplazamiento personalizado (50 pixeles abajo del elemento) -->
      <button
        v-globo-informacion-extendido:abajo="{
          contenido:
            'soy un globo de informacion desplazado 50 pixeles hacia abajo',
          desfase: [0, 50],
        }"
      >
        boton
      </button>

      <!--Un globo de informacion extendido  posicionado a la izquierda, con "interactable" activado, es decir que el globo de informacion se queda para interactuar (y tiene elementos para ello)-->
      <button
        v-globo-informacion-extendido:izquierda.interactivo="{
          contenido: `soy un globo de informacion <a  target='_blank'href='https://conacyt.mx/'>con un enlace</a>`,
        }"
      >
        boton
      </button>
    </client-only>
  </div>
</template>

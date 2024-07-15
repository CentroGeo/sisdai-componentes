<script setup>
import { ref } from 'vue'
const posicion = ref('arriba')

const posicionesDisponibles = [
  'arriba-inicio',
  'arriba',
  'arriba-final',
  'abajo-inicio',
  'abajo',
  'abajo-final',
  'derecha-inicio',
  'derecha',
  'derecha-final',
  'izquierda-inicio',
  'izquierda',
  'izquierda-final',
]
</script>
<template>
  <div>
    <client-only>
      <div
        class="elemento-padre"
        id="elementoPadre"
      >
        <div>
          Un tooltip que se posiciona a partir del elemento #ElementoPadre, pero
          que aparece/desaparece solo cuando el cursor esta en el boton
        </div>
        <button
          v-globo-informacion:[posicion]="{
            contenido: `<b>soy un tooltip</b> de #ElementoPadre`,
            asignadoAElemento: '#elementoPadre',
          }"
        >
          Pasa el cursor aqui
        </button>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          tenetur quo et ad explicabo
        </div>
      </div>
      <p>
        Posición del tooltip:
        <select v-model="posicion">
          <option
            v-for="posicion in posicionesDisponibles"
            :key="`id-${posicion}`"
            :value="posicion"
          >
            {{ posicion }}
          </option>
        </select>
      </p>
    </client-only>
  </div>
</template>

<style>
.elemento-padre {
  border: 1px solid red;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>

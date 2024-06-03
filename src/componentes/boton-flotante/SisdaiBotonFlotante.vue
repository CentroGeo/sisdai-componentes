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

<script>
const propiedades = {
  /**
   * Lista de enlaces que se mostrarán en el Botón flotante abierto, cada opción debe ser un
   * objeto con los siguientes atributos:
   * - clasesCss {`String`}: Nombre de la clase css de la opción.
   * - contenido: {`String`}: Contenido en texto que se mostrará en la interfaz.
   * - enlace {`String`}: Dirección url a la que dirigirá el botón.
   * - icono {`String`}: Visible al costado izquierdo del contenido.
   */
  enlaces: {
    type: Array,
    required: true,
  },
}
</script>

<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps(propiedades)
const { enlaces } = toRefs(props)

/**
 * Indica si el Botón flotante está abierto.
 * - Abierto: `true`
 * - Cerrado: `false`
 * @type Boolean
 */
const botonFlotanteEstaAbierto = ref(true)

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Botón flotante.
 */
function alternarEstado() {
  botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value
}

defineExpose({ alternarEstado })

function idAleatorio() {
  return Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()
</script>

<template>
  <div
    :id="id_aleatorio"
    class="boton-flotante"
    :class="{ abierto: botonFlotanteEstaAbierto }"
  >
    <button
      class="boton-primario boton-flotante-alternador"
      aria-controls="botonflotante"
      aria-label="Abrir/Cerrar menu de enlaces"
      :aria-expanded="botonFlotanteEstaAbierto ? 'true' : 'false'"
      @click="alternarEstado"
    >
      <span
        :class="`${
          botonFlotanteEstaAbierto
            ? 'boton-flotante-pictograma-abierto pictograma-restar'
            : 'boton-flotante-pictograma-cerrado pictograma-agregar'
        }`"
        aria-hidden="true"
      />
      <span class="a11y-solo-lectura">abrir o cerrar botón flotante</span>
    </button>

    <menu
      class="boton-flotante-cuerpo"
      id="botonflotantecuerpo"
      :aria-hidden="!botonFlotanteEstaAbierto"
    >
      <a
        v-for="({ enlace, clasesCss, icono, contenido }, idx) in enlaces"
        :key="`boton-flotante-enlace-${idx}`"
        :id="`boton_flotante_enlace_${idx}`"
        :href="enlace"
        :class="`boton-flotante-hipervinculo ${
          clasesCss === undefined ? '' : clasesCss
        }`"
        target="_blank"
        rel="noopener noreferrer"
        :tabindex="botonFlotanteEstaAbierto ? undefined : -1"
      >
        <span
          :class="`${icono === undefined ? 'pictograma-documento' : icono}`"
          aria-hidden="true"
        />

        {{ contenido === undefined ? 'Enlace externo' : contenido }}
      </a>
    </menu>
  </div>
</template>

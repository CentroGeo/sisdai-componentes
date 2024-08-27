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
    default: () => [
      {
        clasesCss: 'sisdai',
        contenido: 'Ir a Sisdai',
        enlace: 'https://sisdai.conacyt.mx/',
        icono: 'pictograma-flecha-arriba-derecha',
      },
    ],
  },
  /**
   * Indica si el Botón flotante estará abierto o no.
   * - Abierto: `true`
   * - Cerrado: `false`
   * @type Boolean
   */
  botonFlotanteAbiertos: {
    type: Boolean,
    default: false,
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
const botonFlotanteEstaAbierto = ref(props.botonFlotanteAbiertos)

/**
 * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
 * Botón flotante.
 */
function alternarEstado() {
  botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value
}

function idAleatorio() {
  return 'boton-flotante-' + Math.random().toString(36).substring(2)
}

const id_aleatorio = idAleatorio()

defineExpose({ alternarEstado })
</script>

<template>
  <div
    testid="menu-flotante"
    :id="id_aleatorio"
    class="menu-flotante menu-flotante-izquierdo"
    :class="{ abierto: botonFlotanteEstaAbierto }"
  >
    <button
      testid="menu-flotante-boton"
      type="button"
      class="menu-flotante-boton"
      aria-controls="menuflotante"
      :aria-label="botonFlotanteEstaAbierto ? 'Abrir' : 'Cerrar'"
      :aria-expanded="botonFlotanteEstaAbierto ? 'true' : 'false'"
      @click="alternarEstado()"
    >
      <span
        :class="`${
          botonFlotanteEstaAbierto
            ? 'boton-flotante-pictograma-abierto pictograma-restar'
            : 'boton-flotante-pictograma-cerrado pictograma-agregar'
        }`"
        aria-hidden="true"
      ></span>
    </button>

    <menu
      class="menu-flotante-contenedor"
      id="menuflotantecuerpo"
      :aria-hidden="!botonFlotanteEstaAbierto"
    >
      <a
        testid="menu-flotante-hipervinculo"
        v-for="({ enlace, clasesCss, icono, contenido }, idx) in enlaces"
        :key="`menu-flotante-enlace-${idx}`"
        :id="`menu_flotante_enlace_${idx}`"
        :class="`menu-flotante-hipervinculo m-t-2 ${clasesCss}`"
        :href="enlace"
        target="_blank"
        rel="noopener noreferrer"
        :tabindex="botonFlotanteEstaAbierto ? 0 : -1"
      >
        {{ contenido }}
        <span
          :class="`${icono}  m-l-1`"
          aria-hidden="true"
        ></span>
      </a>
    </menu>
  </div>
</template>

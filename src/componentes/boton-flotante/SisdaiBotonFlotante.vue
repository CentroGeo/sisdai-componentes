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
import { ref, toRefs, watch } from 'vue'

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

/**
 * Si el botón está abierto, remueve el atributo tabIndex.
 * Si está cerrado, agrega el atributo tabIndex en -1 para
 * saltarse los enlaces con el teclado secuencial.
 */
watch(botonFlotanteEstaAbierto, () => {
  if (botonFlotanteEstaAbierto.value) {
    enlaces.value.forEach((element, idx) => {
      document
        .getElementById(`boton_flotante_enlace_${idx}`)
        .removeAttribute('tabIndex')
    })
  } else {
    enlaces.value.forEach((element, idx) => {
      document.getElementById(`boton_flotante_enlace_${idx}`).tabIndex = '-1'
    })
  }
})
</script>

<template>
  <div
    class="contenedor-boton-flotante"
    :class="{ abierto: botonFlotanteEstaAbierto }"
  >
    <button
      :class="`boton-flotante-alternador borde-r-redondeado-20 borde-l-redondeado-${
        botonFlotanteEstaAbierto ? '' : '2'
      }0`"
      :aria-expanded="botonFlotanteEstaAbierto ? 'true' : 'false'"
      @click="alternarEstado"
    >
      <span
        :class="`icono ${
          botonFlotanteEstaAbierto ? 'icono-restar' : 'icono-agregar'
        } icono-3`"
        aria-hidden="true"
      />
      <span class="a11y-solo-lectura">abrir o cerrar botón flotante</span>
    </button>

    <div
      class="boton-flotante-contenido borde-l-redondeado-20"
      :class="{ 'borde-l': botonFlotanteEstaAbierto }"
    >
      <a
        v-for="({ enlace, clasesCss, icono, contenido }, idx) in enlaces"
        :key="`boton-flotante-enlace-${idx}`"
        :id="`boton_flotante_enlace_${idx}`"
        :href="enlace"
        :class="`enlace p-x-2 borde-redondeado-0 ${
          clasesCss === undefined ? '' : clasesCss
        }`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          :class="`icono ${
            icono === undefined ? 'icono-enlace-externo' : icono
          }`"
          aria-hidden="true"
        />
        {{ contenido === undefined ? 'Enlace externo' : contenido }}
      </a>
    </div>
  </div>
</template>

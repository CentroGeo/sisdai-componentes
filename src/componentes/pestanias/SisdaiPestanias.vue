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

<script setup>
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
  idAriaLabelledby: {
    type: String,
    default: 'id-unico-titulo',
  }
})

const { idAriaLabelledby } = toRefs(props)

const identificador = idAleatorio()

function idAleatorio() {
  return 'pestania-' + Math.random().toString(36).substring(2)
}

const tablistNodo = ref()
const tabs = ref([]);
const primerTab = ref(null);
const ultimoTab = ref(null);
const tabpaneles = ref([]);

class TabsManual {
  constructor(grupoNodo) {
    tablistNodo.value = grupoNodo;

    tabs.value = Array.from(tablistNodo.value.querySelectorAll('[role=tab]'));

    for (var i = 0; i < tabs.value.length; i += 1) {
      var tab = tabs.value[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      // Enfocando el tab, sin ser accesible a través de la navegación secuencial 
      // del teclado. Es útil para crear widgets accesibles con JavaScript.
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      tabpaneles.value.push(tabpanel);

      tab.addEventListener('keydown', onKeydown.bind(this));
      tab.addEventListener('click', onClick.bind(this));

      if (!primerTab.value) {
        primerTab.value = tab;
      }
      ultimoTab.value = tab;
    }
    // para especificar con cuál tab iniciar
    // asignarPestaniaSeleccionada(this.tabs[1]);
    asignarPestaniaSeleccionada(primerTab.value);
  }
}

function asignarPestaniaSeleccionada(tabActual) {
  for (var i = 0; i < tabs.value.length; i += 1) {
    var tab = tabs.value[i];

    if (tabActual === tab) {
      tab.setAttribute('aria-selected', 'true');
      tab.removeAttribute('tabindex');
      // this.tabpaneles[i].removeAttribute('hidden', true)
      tabpaneles.value[i].hidden = false
    } else {
      tab.setAttribute('aria-selected', 'false');
      tab.tabIndex = -1;
      tabpaneles.value[i].setAttribute('hidden', false)
      // this.tabpaneles[i].hidden = true
    }
  }
}

function moverFocusAPestania(tabActual) {
  tabActual.focus();
}

function moverFocusPestaniaAnterior(tabActual) {
  var index;
  if (tabActual === primerTab.value) {
    // Si el enfoque está en la primera pestaña, mueve el foco a la última.
    moverFocusAPestania(ultimoTab.value);
  } else {
    index = tabs.value.indexOf(tabActual);
    moverFocusAPestania(tabs.value[index - 1]);
  }
}

function moverFocusPestaniaSiguiente(tabActual) {
  var index;
  if (tabActual === ultimoTab.value) {
    // Si el enfoque está en la última pestaña, mueve el foco a la primera.
    moverFocusAPestania(primerTab.value);
  } else {
    index = tabs.value.indexOf(tabActual);
    moverFocusAPestania(tabs.value[index + 1]);
  }
}

/* EVENT HANDLERS */

function onKeydown(event) {
  var tgt = event.currentTarget,
    bandera = false;

  switch (event.key) {
    case 'ArrowLeft':
      moverFocusPestaniaAnterior(tgt);
      bandera = true;
      break;

    case 'ArrowRight':
      moverFocusPestaniaSiguiente(tgt);
      bandera = true;
      break;

    case 'Home':
      moverFocusAPestania(primerTab.value);
      bandera = true;
      break;

    case 'End':
      moverFocusAPestania(ultimoTab.value);
      bandera = true;
      break;

    default:
      break;
  }

  if (bandera) {
    event.stopPropagation();
    event.preventDefault();
  }
}

// Debido a que utiliza botones para las pestañas, el evento de click es activado
// con las teclas de barra espaciadora o enter
function onClick(event) {
  asignarPestaniaSeleccionada(event.currentTarget);
}

function cargarTablist() {
  var tablists = document.querySelectorAll(`[role=tablist]#${identificador}`);
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
}
onMounted(() => {
  // Inicializa tablist
  cargarTablist()
})
</script>

<template>
  <div class="pestanias">
    <div :id="identificador" role="tablist" :aria-labelledby="idAriaLabelledby">      
      <slot name="contenido-pestanias">
        <button id="idpestania-uno" type="button" role="tab" aria-selected="true" aria-controls="idpestaniapanel-uno">
          Pestaña 1
        </button>
        <button id="idpestania-dos" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-dos" tabindex="-1">
          Pestaña 2
        </button>
        <button id="idpestania-tres" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-tres" tabindex="-1">
          Pestaña 3
        </button>
        <button id="idpestania-cuatro" type="button" role="tab" aria-selected="false" aria-controls="idpestaniapanel-cuatro" tabindex="-1" disabled>
          Pestaña Deshabilitada
        </button>
      </slot>
    </div>
    
    <div id="id-lista-pestania-panel">      
      <slot name="contenido-paneles">
        <div id="idpestaniapanel-uno" role="tabpanel" aria-labelledby="idpestania-uno">
          <p>Contenido de la pestaña 1</p>
        </div>
        <div id="idpestaniapanel-dos" role="tabpanel" tabindex="0" aria-labelledby="idpestania-dos" hidden>
          <p>Contenido de la pestaña 2</p>
        </div>
        <div id="idpestaniapanel-tres" role="tabpanel" tabindex="0" aria-labelledby="idpestania-tres" hidden>
          <p>Contenido de la pestaña 3</p>
        </div>
        <div id="idpestaniapanel-cuatro" role="tabpanel" tabindex="0" aria-labelledby="idpestania-cuatro" hidden>
          <p>Contenido de la pestaña 4</p>
        </div>
      </slot>
    </div>        
  </div>
</template>

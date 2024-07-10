<script setup>
import { ref } from 'vue'

const catalogo = ref([
  {
    nombre: 'Grupo de capas 1',
    capas: [
      { titulo: 'Capa uno', descripcion: 'Descripción de la capa 1' },
      { titulo: 'Capa dos', descripcion: 'Descripción de la capa 2' },
    ],
  },
  {
    nombre: 'Grupo de capas 2',
    capas: [
      { titulo: 'Capa tres', descripcion: 'Descripción de la capa 3' },
      { titulo: 'Capa cuatro', descripcion: 'Descripción de la capa 4' },
      { titulo: 'Capa cinco', descripcion: 'Descripción de la capa 5' },
    ],
  },
  {
    nombre: 'Grupo de capas 3',
    capas: [
      { titulo: 'Capa seis', descripcion: 'Descripción de la capa 6' },
      { titulo: 'Capa siete', descripcion: 'Descripción de la capa 7' },
      { titulo: 'Capa ocho', descripcion: 'Descripción de la capa 8' },
      { titulo: 'Capa nueve', descripcion: 'Descripción de la capa 9' },
    ],
  },
])
const catalogoFiltrado = ref(catalogo.value)
</script>
<template>
  <div class="">
    <SisdaiCampoBusqueda
      :catalogo="catalogo"
      :catalogo-anidado="true"
      catalogo-anidado-propiedad-elementos="capas"
      propiedad-busqueda="titulo"
      @alFiltrar="r => (catalogoFiltrado = r)"
    />
    <hr />
    <p>Resultados:</p>
    <ul>
      <li
        v-for="grupo in catalogoFiltrado"
        :key="grupo.nombre"
        :id="grupo.nombre"
      >
        {{ grupo.nombre }}
        <ul>
          <li
            v-for="capa in grupo.capas"
            :key="capa.titulo"
            :id="capa.titulo"
          >
            {{ capa.titulo }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

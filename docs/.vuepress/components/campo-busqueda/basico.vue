<script setup>
import { ref } from 'vue'

const listaLanguages = ref([
  { id: 'bash', nombre: 'Bash' },
  { id: 'c', nombre: 'C' },
  { id: 'cpp', nombre: 'C++' },
  { id: 'csharp', nombre: 'C#' },
  { id: 'css', nombre: 'CSS' },
  { id: 'dart', nombre: 'Dart' },
  { id: 'docker', nombre: 'Docker' },
  { id: 'elixir', nombre: 'Elixir' },
  { id: 'go', nombre: 'Go' },
  { id: 'graphql', nombre: 'GraphQL' },
  { id: 'html', nombre: 'HTML' },
  { id: 'java', nombre: 'Java' },
  { id: 'javascript', nombre: 'JavaScript' },
  { id: 'json', nombre: 'JSON' },
  { id: 'kotlin', nombre: 'Kotlin' },
  { id: 'markdown', nombre: 'Markdown' },
  { id: 'php', nombre: 'PHP' },
  { id: 'python', nombre: 'Python' },
  { id: 'r', nombre: 'R' },
  { id: 'ruby', nombre: 'Ruby' },
  { id: 'rust', nombre: 'Rust' },
  { id: 'scss', nombre: 'SCSS' },
  { id: 'shell', nombre: 'Shell' },
  { id: 'sql', nombre: 'SQL' },
  { id: 'swift', nombre: 'Swift' },
  { id: 'typescript', nombre: 'TypeScript' },
  { id: 'xml', nombre: 'XML' },
  { id: 'yaml', nombre: 'YAML' },
])
const listaLanguagesFiltrada = ref(listaLanguages.value)
</script>
<template>
  <div>
    <SisdaiCampoBusqueda
      :catalogo="listaLanguages"
      etiqueta="Buscar lenguaje"
      @alFiltrar="r => (listaLanguagesFiltrada = r)"
    />
    <hr />
    <ul style="max-height: 300px; overflow-y: auto">
      <li
        v-for="language in listaLanguagesFiltrada"
        :key="language.id"
      >
        {{ language.id }} - {{ language.nombre }}
      </li>
    </ul>
  </div>
</template>

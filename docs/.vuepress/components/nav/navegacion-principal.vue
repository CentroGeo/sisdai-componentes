<script setup>
import { ref } from 'vue'

const pkg = require('../../../../package.json')
const navegacionPrincipal = ref(null)
</script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$frontmatter.sectionName || ''}</b>`"
    ref="navegacionPrincipal"
  >
    <!-- <ul class="nav-menu">
      <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/documentacion/"
        >
          Documentación
        </RouterLink>
      </li>

      <li>
        <a
          :href="pkg.repository.url"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-hipervinculo"
        >
          v{{ pkg.version }}
        </a>
      </li>
    </ul> -->
  </SisdaiNavegacionPrincipal>
</template>

<script setup>
const pkg = require('../../../../package.json')
</script>
<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$frontmatter.sectionName || ''}</b>`"
  >
    <ul class="nav-menu">
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
    </ul>
  </SisdaiNavegacionPrincipal>
</template>

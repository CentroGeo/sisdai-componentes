<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$frontmatter.sectionName || ''}</b>`"
  >
    <ul class="nav-menu">
      <!-- <li>
        <RouterLink
          class="nav-hipervinculo"
          to="/"
          exact
        >
          Inicio
        </RouterLink>
      </li> -->
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
          class="nav-hipervinculo"
          href="https://codigo.conahcyt.mx/sisdai/sisdai-componentes"
        >
          Repositorio
        </a>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>

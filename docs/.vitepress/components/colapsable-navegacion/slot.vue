<template>
  <SisdaiColapsableNavegacion :colapsado="false">
    <template #encabezado> Este es el título del colapsable </template>
    <template #contenido>
      <ul>
        <li>
          <a
            href="#"
            exact
          >
            Opción 1 desplegable
          </a>
        </li>
        <li>
          <a href="#"> Opción 2 desplegable </a>
        </li>
      </ul>
    </template>
  </SisdaiColapsableNavegacion>
</template>

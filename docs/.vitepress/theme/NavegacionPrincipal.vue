<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { theme, page } = useData()
const navegacionPrincipal = ref(null)
</script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${page.title}</b>`"
    ref="navegacionPrincipal"
  >
    <template #complementario>
      <a
        class="nav-hipervinculo"
        href="https://sisdai.conahcyt.mx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>IR A SISDAI</b>
      </a>
    </template>
    <ul class="nav-menu">
      <li
        v-for="nav in theme.nav"
        :key="nav.text"
      >
        <a
          class="nav-hipervinculo"
          :class="{
            'router-link-exact-active router-link-active':
              nav.activeMatch ==
              page.relativePath.replace('index.md', '').split('/')[0],
          }"
          :href="nav.link"
          :target="nav.target"
          :rel="nav.rel"
        >
          <img
            v-if="nav.img"
            class="nav-logo"
            :src="nav.img"
            alt=""
          />
          {{ nav.text }}
        </a>
      </li>
    </ul>

    <!-- <ul class="nav-menu">
      <li
        v-for="nav in theme.nav"
        :key="nav.text"
      >
        <a
          class="nav-hipervinculo"
          :class="{
            'router-link-exact-active router-link-active': isActive(
              page.relativePath,
              nav.activeMatch || nav.link,
              //!!nav.activeMatch
            ),
          }"
          :href="nav.link"
          :target="nav.target"
          :rel="nav.rel"
        >
          <img
            v-if="nav.img"
            class="nav-logo"
            :src="nav.img"
            alt=""
          />
          {{ nav.text }}
        </a>
      </li>
    </ul> -->
  </SisdaiNavegacionPrincipal>
</template>
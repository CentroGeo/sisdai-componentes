(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{279:function(n,e,o){"use strict";o.r(e),e.default="<template>\n  <div class=\"contenerdor-panttalla-simulada\">\n    <SisdaiInfoDeDespliegue\n      :entornoProyecto=\"entornoProyecto\"\n      :versionProyecto=\"versionProyecto\"\n      :actualizacionProyecto=\"actualizacionProyecto\"\n    />\n\n    <ElementosParaVerSisdaiInfoDeDespliegue />\n  </div>\n</template>\n\n<script setup>\nimport ElementosParaVerSisdaiInfoDeDespliegue from './elementos-para-ver-info-de-despliegue.vue'\nimport { computed } from 'vue'\n\nconst version = require('../../../../package.json').version\nconst now = new Date()\n\nconst entornoProyecto = computed(() => {\n  return 'development'\n})\n\nconst versionProyecto = computed(() => {\n  return version\n})\n\nconst actualizacionProyecto = computed(() => {\n  return now.toLocaleString('es-MX', {\n    timeZone: 'America/Mexico_City',\n  })\n})\n<\/script>\n"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{275:function(n,o,t){"use strict";t.r(o),o.default='<script setup>\nimport { ref } from \'vue\'\nconst contenido = ref(\'<b>Hola</b> editame!\')\n<\/script>\n\n<template>\n  <div>\n    <p>Edita el texto para ver como se actualiza el globo de información</p>\n    <button v-globo-informacion="contenido">pasa el cursor sobre mi</button>\n    <input\n      type="text"\n      v-model="contenido"\n    />\n  </div>\n</template>\n'}}]);
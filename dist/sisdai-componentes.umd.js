(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@popperjs/core"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["@popperjs/core", ], factory);
	else if(typeof exports === 'object')
		exports["sisdai-componentes"] = factory(require("@popperjs/core"), require("vue"));
	else
		root["sisdai-componentes"] = factory(root["@popperjs/core"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__693__, __WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 693:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__693__;

/***/ }),

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

// UNUSED EXPORTS: GlobosInformacion, SisdaiAudio, SisdaiBotonFlotante, SisdaiCampoBusqueda, SisdaiColapsableNavegacion, SisdaiControlAcercarAlejar, SisdaiControlDeslizante, SisdaiEnlaceExterno, SisdaiImagenPngWebp, SisdaiIndiceDeContenido, SisdaiInfoDeDespliegue, SisdaiMenuAccesibilidad, SisdaiMenuLateral, SisdaiModal, SisdaiNarrativa, SisdaiNavegacionGobMx, SisdaiNavegacionPrincipal, SisdaiPiePaginaConahcyt, SisdaiPiePaginaGobMx

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=template&id=5dd6a33f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('section', {
    staticClass: "contenedor narrativa-scroll",
    attrs: {
      "id": _vm.id_scroll
    }
  }, [_c('div', {
    staticClass: "depurador",
    style: {
      opacity: _vm.depurador ? 1 : 0,
      top: _vm.altura_sensor * 100 + 'vh'
    }
  }), _c('div', {
    staticClass: "contenedor-portada"
  }, _vm._l(_vm.bullets, function (bullet, i) {
    return _c('img', {
      key: i,
      class: `portada fondo-${i}`,
      style: {
        opacity: _setup.seccion_visible == i ? 1 : 0
      },
      attrs: {
        "srcset": bullet.imagen,
        "alt": ""
      }
    });
  }), 0), _c('article', _vm._l(_vm.bullets, function (bullet, i) {
    return _c('div', {
      key: i,
      class: `bullet`,
      attrs: {
        "data-step": i
      },
      domProps: {
        "innerHTML": _vm._s(bullet.html)
      }
    });
  }), 0)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiNarrativaScrollvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNarrativaScroll',
  props: {
    id_scroll: {
      type: String,
      default: 'id-de-narrativa-scroll'
    },
    bullets: {
      default: () => [{
        html: `<div class="contenedor-portada">
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <div class="contenedor ancho-lectura p-1">
                <h1 class="texto-centrado texto-color-1">
                  Sistema de Diseño y Accesibilidad para la Investigación
                </h1>
              </div>
            </div>
          </div>
        </div>`,
        imagen: 'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/becka.jpg'
      }, {
        html: '<p>bullet 1</p>',
        imagen: 'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/burbuja-1.jpg'
      }, {
        html: '<p>bullet 2</p>',
        imagen: 'https://cdn.conahcyt.mx/sisdai/recursos/imagenes/documentacion/nymeria.jpg'
      }],
      type: Array
    },
    depurador: {
      type: Boolean,
      default: false
    },
    altura_sensor: {
      type: Number,
      default: 0.5
    },
    degradado_inicial: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */
    const obtenerElementos = () => {
      lista_elementos.value = [...document.querySelectorAll(`section#${props.id_scroll}.narrativa-scroll article div.bullet`)];
    };

    /**
     * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
     * la sección activa
     */
    function scroleando() {
      const posicion_sensor = document.querySelector(`section#${props.id_scroll}.narrativa-scroll div.depurador`).getBoundingClientRect().top;

      // Checando elementos activos
      let posicion_actual;
      lista_elementos.value.forEach((el, i) => {
        if (el.getBoundingClientRect().top < posicion_sensor && posicion_sensor < el.getBoundingClientRect().bottom) {
          posicion_actual = i;
        } else if (posicion_sensor < lista_elementos.value[0].getBoundingClientRect().top) {
          posicion_actual = 0;
        } else if (posicion_sensor >= lista_elementos.value.slice(-1)[0].getBoundingClientRect().bottom) {
          posicion_actual = lista_elementos.value.length - 1;
        }
      });
      if (props.degradado_inicial) {
        let posicion_normalizada = (posicion_sensor - lista_elementos.value[0].getBoundingClientRect().bottom) / lista_elementos.value[0].getBoundingClientRect().height;
        lista_elementos.value[0].querySelector('.degradado-negro-abajo').style.background = 'linear-gradient(transparent,rgba(0,0,0,' + -posicion_normalizada + '))';
        lista_elementos.value[1].style.background = 'linear-gradient(rgba(0,0,0,' + -posicion_normalizada + '),transparent)';
      }
      if (posicion_actual !== seccion_visible.value) {
        seccion_visible.value = posicion_actual;
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      obtenerElementos();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      props,
      obtenerElementos,
      scroleando
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js = (SisdaiNarrativaScrollvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=5dd6a33f&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=5dd6a33f&prod&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue



;


/* normalize component */

var component = normalizeComponent(
  narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNarrativaScroll = (component.exports);
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const narrativa_scroll_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNarrativaScroll', SisdaiNarrativaScroll);
  }
};
/* harmony default export */ var narrativa_scroll = ((/* unused pure expression or super */ null && (narrativa_scroll_plugin)));
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=25ee2097
var SisdaiColapsableNavegacionvue_type_template_id_25ee2097_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "colapsable",
    class: {
      abierto: _setup._colapsado
    }
  }, [_c('button', {
    staticClass: "colapsable-boton",
    attrs: {
      "aria-controls": "colapsableboton",
      "aria-expanded": _setup._colapsado,
      "tabindex": _setup.avisarMenuLateral ? undefined : -1
    },
    on: {
      "click": function ($event) {
        _setup._colapsado = !_setup._colapsado;
      }
    }
  }, [_vm._t("encabezado", function () {
    return [_c('p', [_vm._v("Encabezado colapsable")])];
  }), _c('span', {
    staticClass: "pictograma-angulo-derecho",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("Abrir o cerrar colapsable")])], 2), _c('div', {
    staticClass: "colapsable-contenedor",
    attrs: {
      "id": "colapsablecontenedor",
      "aria-hidden": !_setup._colapsado
    }
  }, [_vm._t("contenido", function () {
    return [_c('ul', {
      attrs: {
        "id": _setup.id_aleatorio
      }
    }, [_c('li', [_c('a', {
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "exact": "",
        "tabindex": _setup._colapsado ? undefined : -1
      }
    }, [_vm._v(" Elemento desplegado")])])])];
  })], 2)]);
};
var SisdaiColapsableNavegacionvue_type_template_id_25ee2097_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiColapsableNavegacion',
  props: {
    colapsado: {
      type: Boolean,
      default: false
    },
    avisarMenuLateral: {
      type: Boolean,
      default: true
    }
  },
  emits: ['alAlternarColapsable'],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;

    // eslint-disable-next-line
    const {
      colapsado,
      avisarMenuLateral
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);
    const _colapsado = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(colapsado.value);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(colapsado, nv => _colapsado.value = nv);
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(_colapsado, () => {
      emits('alAlternarColapsable', _colapsado.value);
    });
    return {
      __sfc: true,
      props,
      colapsado,
      avisarMenuLateral,
      _colapsado,
      idAleatorio,
      id_aleatorio,
      emits
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js = (SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue





/* normalize component */
;
var SisdaiColapsableNavegacion_component = normalizeComponent(
  colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js,
  SisdaiColapsableNavegacionvue_type_template_id_25ee2097_render,
  SisdaiColapsableNavegacionvue_type_template_id_25ee2097_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiColapsableNavegacion = (SisdaiColapsableNavegacion_component.exports);
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const colapsable_navegacion_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiColapsableNavegacion', SisdaiColapsableNavegacion);
  }
};
/* harmony default export */ var colapsable_navegacion = (colapsable_navegacion_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=template&id=f42f53f4
var SisdaiMenuLateralvue_type_template_id_f42f53f4_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "menu-lateral",
    class: {
      abierto: _setup.menu_abierto
    },
    attrs: {
      "aria-label": "Menú secundario"
    }
  }, [_c('button', {
    staticClass: "menu-lateral-boton",
    attrs: {
      "aria-controls": "menulateral",
      "aria-expanded": _setup.menu_abierto ? 'true' : 'false',
      "aria-label": "Abrir/Cerrar navegación secundaria"
    },
    on: {
      "click": function ($event) {
        _setup.menu_abierto = !_setup.menu_abierto;
      }
    }
  }, [_c('span', {
    staticClass: "pictograma-angulo-izquierdo",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Expandir o colapsar navegación")])]), _c('div', {
    ref: "contenidoMenuLateral",
    staticClass: "menu-lateral-contenedor",
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_vm._t("contenido-menu-lateral", function () {
    return [_c('ul', [_c('li', [_c('a', {
      attrs: {
        "href": "#anchore",
        "exact": "",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_vm._v(" anchore link prueba ")])]), _c('li', [_c('a', {
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "target": "_blank",
        "rel": "noopener noreferrer",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_c('span', {
      staticClass: "pictograma-social-github",
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v(" ejemplo github")])])])])];
  })], 2)]);
};
var SisdaiMenuLateralvue_type_template_id_f42f53f4_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiMenuLateralvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiMenuLateral',
  emits: ['alAlternarMenu'],
  setup(__props, {
    emit: emits
  }) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const contenidoMenuLateral = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    if (typeof window !== 'undefined') {
      menu_abierto.value = window.innerWidth < 768 ? false : true;
    }
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menu_abierto, () => {
      emits('alAlternarMenu', menu_abierto.value);
    });
    return {
      __sfc: true,
      menu_abierto,
      contenidoMenuLateral,
      idAleatorio,
      id_aleatorio,
      emits
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js = (SisdaiMenuLateralvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue





/* normalize component */
;
var SisdaiMenuLateral_component = normalizeComponent(
  menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js,
  SisdaiMenuLateralvue_type_template_id_f42f53f4_render,
  SisdaiMenuLateralvue_type_template_id_f42f53f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuLateral = (SisdaiMenuLateral_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const menu_lateral_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuLateral', SisdaiMenuLateral);
  }
};
/* harmony default export */ var menu_lateral = (menu_lateral_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=template&id=39a60843
var SisdaiMenuAccesibilidadvue_type_template_id_39a60843_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "menu-flotante menu-flotante-derecho menu-accesibilidad",
    class: {
      abierto: _setup.menuAccesibilidadEstaAbierto
    }
  }, [_c('button', {
    staticClass: "menu-flotante-boton",
    attrs: {
      "aria-label": "Abrir y cerrar menú de accesibilidad",
      "aria-controls": "menua11y",
      "aria-expanded": _setup.menuAccesibilidadEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarAbiertoCerrado
    }
  }, [_c('span', {
    staticClass: "pictograma-accesibilidad",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" abrir y cerrar menú de accesibilidad ")])]), _c('menu', {
    staticClass: "menu-flotante-contenedor",
    attrs: {
      "id": "menua11y",
      "aria-hidden": !_setup.menuAccesibilidadEstaAbierto
    }
  }, [_c('p', {
    staticClass: "menu-flotante-titulo"
  }, [_vm._v("Herramientas de accesibilidad")]), _vm._l(_setup.opciones, function (opcion) {
    return _c('div', {
      key: opcion.titulo
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _setup.clasesSelecciondas,
        expression: "clasesSelecciondas"
      }],
      attrs: {
        "id": opcion.claseCss,
        "type": "checkbox",
        "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1
      },
      domProps: {
        "value": opcion.claseCss,
        "checked": Array.isArray(_setup.clasesSelecciondas) ? _vm._i(_setup.clasesSelecciondas, opcion.claseCss) > -1 : _setup.clasesSelecciondas
      },
      on: {
        "change": function ($event) {
          var $$a = _setup.clasesSelecciondas,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = opcion.claseCss,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_setup.clasesSelecciondas = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_setup.clasesSelecciondas = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _setup.clasesSelecciondas = $$c;
          }
        }
      }
    }), _c('label', {
      attrs: {
        "for": opcion.claseCss
      }
    }, [_c('span', {
      class: opcion.icono,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(opcion.titulo) + " ")])]);
  }), _c('button', {
    staticClass: "boton-secundario boton-chico m-t-2",
    attrs: {
      "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1,
      "disabled": !_setup.clasesSelecciondas.length
    },
    on: {
      "click": _setup.restablecer
    }
  }, [_vm._v(" Restablecer ")])], 2)]);
};
var SisdaiMenuAccesibilidadvue_type_template_id_39a60843_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/opcionesDefault.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.

/**
 * Lista de opciones por defecto del Menú de accesibilidad, cada opción debe ser un objeto
 * con los siguientes atributos:
 * - accion {`String`}: Nombre de la acción al dar click en la opción.
 * - claseCss: {`String`}: Nombre de la clase css de la opción.
 * - icono {`String`}: Visible a un costado del titulo.
 * - titulo {`String`}: Visible en la lista del menú abierto.
 * @type Array
 */
/* harmony default export */ var opcionesDefault = ([{
  accion: 'alternarTipografiaAccesible',
  claseCss: 'a11y-tipografia',
  icono: 'pictograma-cambio-tipografia',
  titulo: 'Cambio de fuente'
}, {
  accion: 'alternarEnlacesSubrayados',
  claseCss: 'a11y-hipervinculos',
  icono: 'pictograma-enlace-subrayado',
  titulo: 'Enlaces subrayados'
}, {
  accion: 'alternarVistaSimplificada',
  claseCss: 'a11y-simplificada',
  icono: 'pictograma-vista-simplificada',
  titulo: 'Mostrar solo texto'
}, {
  accion: 'alternarVistaOscura',
  claseCss: 'a11y-oscura',
  icono: 'pictograma-contraste',
  titulo: 'Vista Oscura'
}]);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js


const propiedades = {
  /**
   * Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  agregarOpciones: {
    type: Array,
    default: () => []
  },
  /**
   * Objeto store completo del proyecto.
   */
  objetoStore: {
    type: Object,
    default: () => {}
  },
  /**
   * Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de
   * `accesibilidad`, se debe introducir el nombre del modulo en esta propiedad.
   */
  nombreModuloStore: {
    type: String,
    default: 'accesibilidad'
  },
  id: {
    type: String,
    default: 'menu_accesibilidad'
  },
  /**
   * Seleciona el perfil o paleta de color desde la biblioteca de estilos.
   * Los perfiles disponibles son: `'predeterminada'`, `'gema'`, `'sisdai'`.
   */
  perfilColor: {
    type: String,
    default: 'predeterminada' // 'predeterminada' | 'sisdai' | 'gema'
  }
};
const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',
  /**
   * Se ejecuta cuando se ha dado click en el botón "Restablecer".
   */
  alRestablecer: 'alRestablecer'
};
/* harmony default export */ var SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiMenuAccesibilidad',
  props: propiedades,
  emits: Object.values(eventos),
  setup(__props, {
    expose,
    emit: emits
  }) {
    const props = __props;
    const {
      agregarOpciones,
      objetoStore,
      perfilColor,
      nombreModuloStore
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);

    /**
     * Opciones que se mostrarán en el menú de accesibilidad.
     */
    const opciones = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => [...opcionesDefault, ...agregarOpciones.value]);

    /**
     * Indica si el Menú de accesibilidad está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type {Boolean}
     */
    const menuAccesibilidadEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    /**
     * Arreglo de clases que se mantienen activas con el menú de accesibilidad, use esta variable
     * para facilitar la relación de interacción del menú de accesibilidad con la vista.
     * @type {Array<String>}
     */
    const clasesSelecciondas = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    /**
     * Ejecuta un cambio en el store si dicho objeto permite hacer commits (si se esta usando la
     * pripiedad `objetoStore`).
     * @param {String} accion nombre del mutation en el modulo del store.
     * @param {Array<String>} valor es decir las clases que siendo seleccionadas.
     */
    function ejecutarEnStore(accion, valor) {
      if (objetoStore.value !== undefined && Object.prototype.hasOwnProperty.call(objetoStore.value, 'commit')) {
        objetoStore.value.commit(`${nombreModuloStore.value}/${accion}`, valor);
      }
    }

    /**
     * Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú.
     */
    function restablecer() {
      clasesSelecciondas.value = [];
      emits(eventos.alRestablecer);
      ejecutarEnStore('restablecer');
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(clasesSelecciondas, (nv, ov) => {
      ejecutarEnStore('modificarClasesAccesibles', nv);
      alternarClasesBody();
      asignarTemaClaroUOscuro(nv, ov);
    });
    /**
     * Alterna las clases accesibles seleccionadas en el body.
     */
    function alternarClasesBody() {
      clasesSelecciondas.value.includes('a11y-tipografia') ? body.classList.add('a11y-tipografia') : body.classList.remove('a11y-tipografia');
      clasesSelecciondas.value.includes('a11y-simplificada') ? body.classList.add('a11y-simplificada') : body.classList.remove('a11y-simplificada');
      clasesSelecciondas.value.includes('a11y-hipervinculos') ? body.classList.add('a11y-hipervinculos') : body.classList.remove('a11y-hipervinculos');
      clasesSelecciondas.value.includes('a11y-oscura') ? body.classList.add('a11y-oscura') : body.classList.remove('a11y-oscura');
    }

    /**
     * Módulo de vista oscura.
     */
    // Tema o modo de color con el que inicializa la aplicación.
    const tema = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('auto'); // 'oscura' | 'clara' | 'auto'
    let body = {};

    /**
     * Agrega el atributo para asignar el tema y el perfil
     * de color predeterminados.
     */
    function agregarPerfilTemaPredeterminados() {
      body.setAttribute('data-perfil', perfilColor.value);
      body.setAttribute('data-tema', 'claro');
    }
    /**
     * Agrega el atributo para asignar el tema claro con el perfil
     * de color al nivel de la etiqueta html del documento.
     */
    function setTemaClaro() {
      body.setAttribute(`data-tema`, 'claro');
    }
    /**
     * Agrega el atributo para asignar el tema oscuro con el perfil
     * de color al nivel de la etiqueta html del documento.
     */
    function setTemaOscuro() {
      body.setAttribute(`data-tema`, 'oscuro');
    }
    /**
     * Asigna el tema claro u oscuro,
     * si en las clasesSeleccionadas están el valor de a11y-oscura o no.
     * @param {Array} nv nuevo valor con las clases seleccionadas
     * @param {Array} ov viejo valor con las clases seleccionadas
     */
    function asignarTemaClaroUOscuro(nv, ov) {
      if (nv.find(clase => clase === 'a11y-oscura') && !ov.find(clase => clase === 'a11y-oscura')) {
        // cuando pone la clase a11y-oscura
        setTemaOscuro();
      }
      if (!nv.find(clase => clase === 'a11y-oscura') && ov.find(clase => clase === 'a11y-oscura')) {
        // cuando quita la clase a11y-oscura
        setTemaClaro();
      }
    }
    /**
     * Devuelve el tema del documento según la configuración del dispositivo.
     */
    function getTemaDispositivo() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && tema.value === 'auto' || tema.value === 'oscura') {
        return 'oscura';
      }
      return 'clara';
    }
    /**
     * Agrega la clase `.a11y-oscura` para la selección
     * de la vistas oscura.
     * @param {String} temaClaroUOscuro
     */
    function setClaseA11yOscura(temaClaroUOscuro) {
      if (temaClaroUOscuro === 'oscura' && !clasesSelecciondas.value.includes('a11y-oscura')) {
        clasesSelecciondas.value = [...clasesSelecciondas.value, ...['a11y-oscura']];
      }
      if (temaClaroUOscuro === 'clara' && clasesSelecciondas.value.includes('a11y-oscura')) {
        clasesSelecciondas.value = clasesSelecciondas.value.filter(clases => !clases.includes('a11y-oscura'));
      }
    }
    /**
     * Elige el tema en el documento (clara u oscura)
     * y la key local `theme` del navegador.
     * @param {String} tema o modo de la vista: clara | oscura | auto
     */
    function setTemaEnDocumentoYLocalStorage() {
      localStorage.setItem('theme', tema.value);
      let temaClaroUOscuro = getTemaDispositivo();

      // Agrega claseSeleccionada `.a11y-oscura`
      setClaseA11yOscura(temaClaroUOscuro);

      // Agrega y/o remueve el atributo selecctor para :root
      switch (temaClaroUOscuro) {
        case 'clara':
          setTemaClaro();
          break;
        case 'oscura':
          setTemaOscuro();
          break;
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeMount)(() => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', setTemaEnDocumentoYLocalStorage);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      body = document?.querySelector('body');
      agregarPerfilTemaPredeterminados();
      setTemaEnDocumentoYLocalStorage();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTemaEnDocumentoYLocalStorage);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', setTemaEnDocumentoYLocalStorage);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([perfilColor, tema], () => {
      setTemaEnDocumentoYLocalStorage();
    });

    /**
     * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
     * Menú de accesibilidad.
     */
    function alternarAbiertoCerrado() {
      menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value;
    }
    expose({
      alternarAbiertoCerrado,
      clasesSelecciondas
    });
    return {
      __sfc: true,
      propiedades,
      eventos,
      props,
      emits,
      agregarOpciones,
      objetoStore,
      perfilColor,
      nombreModuloStore,
      opciones,
      menuAccesibilidadEstaAbierto,
      clasesSelecciondas,
      ejecutarEnStore,
      restablecer,
      alternarClasesBody,
      tema,
      body,
      agregarPerfilTemaPredeterminados,
      setTemaClaro,
      setTemaOscuro,
      asignarTemaClaroUOscuro,
      getTemaDispositivo,
      setClaseA11yOscura,
      setTemaEnDocumentoYLocalStorage,
      alternarAbiertoCerrado
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js = (SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue





/* normalize component */
;
var SisdaiMenuAccesibilidad_component = normalizeComponent(
  menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js,
  SisdaiMenuAccesibilidadvue_type_template_id_39a60843_render,
  SisdaiMenuAccesibilidadvue_type_template_id_39a60843_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuAccesibilidad = (SisdaiMenuAccesibilidad_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const menu_accesibilidad_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuAccesibilidad', SisdaiMenuAccesibilidad);
  }
};
/* harmony default export */ var menu_accesibilidad = (menu_accesibilidad_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=template&id=0672b952
var SisdaiBotonFlotantevue_type_template_id_0672b952_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "menu-flotante menu-flotante-izquierdo",
    class: {
      abierto: _setup.botonFlotanteEstaAbierto
    },
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_c('button', {
    staticClass: "menu-flotante-boton",
    attrs: {
      "aria-controls": "menuflotante",
      "aria-label": "Abrir/Cerrar menu de enlaces",
      "aria-expanded": _setup.botonFlotanteEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": function ($event) {
        _setup.botonFlotanteEstaAbierto = !_setup.botonFlotanteEstaAbierto;
      }
    }
  }, [_c('span', {
    class: `${_setup.botonFlotanteEstaAbierto ? 'boton-flotante-pictograma-abierto pictograma-restar' : 'boton-flotante-pictograma-cerrado pictograma-agregar'}`,
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir o cerrar botón flotante")])]), _c('menu', {
    staticClass: "menu-flotante-contenedor",
    attrs: {
      "id": "menuflotantecuerpo",
      "aria-hidden": !_setup.botonFlotanteEstaAbierto
    }
  }, _vm._l(_setup.enlaces, function ({
    enlace,
    clasesCss,
    icono,
    contenido
  }, idx) {
    return _c('a', {
      key: `menu-flotante-enlace-${idx}`,
      class: `menu-flotante-hipervinculo m-t-2 ${clasesCss === undefined ? '' : clasesCss}`,
      attrs: {
        "id": `menu_flotante_enlace_${idx}`,
        "href": enlace,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "tabindex": _setup.botonFlotanteEstaAbierto ? undefined : -1
      }
    }, [_vm._v(" " + _vm._s(contenido === undefined ? 'Ir a enlace externo' : contenido) + " "), _c('span', {
      class: `${icono === undefined ? 'pictograma-flecha-arriba-derecha' : icono}  m-l-1`,
      attrs: {
        "aria-hidden": "true"
      }
    })]);
  }), 0)]);
};
var SisdaiBotonFlotantevue_type_template_id_0672b952_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js

const SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades = {
  /**
   * Lista de enlaces que se mostrarán en el Botón flotante abierto, cada opción debe ser un
   * objeto con los siguientes atributos:
   * - clasesCss {`String`}: Nombre de la clase css de la opción.
   * - contenido: {`String`}: Contenido en texto que se mostrará en la interfaz.
   * - enlace {`String`}: Dirección url a la que dirigirá el botón.
   * - icono {`String`}: Visible al costado izquierdo del contenido.
   */
  enlaces: {
    type: Array,
    required: true
  },
  /**
   * Indica si el Botón flotante estará abierto o no.
   * - Abierto: `true`
   * - Cerrado: `false`
   * @type Boolean
   */
  botonFlotanteAbierto: {
    type: Boolean,
    default: false
  }
};
/* harmony default export */ var SisdaiBotonFlotantevue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiBotonFlotante',
  props: SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades,
  setup(__props, {
    expose
  }) {
    const props = __props;
    const {
      enlaces
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);

    /**
     * Indica si el Botón flotante está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type Boolean
     */
    const botonFlotanteEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.botonFlotanteAbierto);

    /**
     * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
     * Botón flotante.
     */
    function alternarEstado() {
      botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value;
    }
    expose({
      alternarEstado
    });
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    return {
      __sfc: true,
      propiedades: SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades,
      props,
      enlaces,
      botonFlotanteEstaAbierto,
      alternarEstado,
      idAleatorio,
      id_aleatorio
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js = (SisdaiBotonFlotantevue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue





/* normalize component */
;
var SisdaiBotonFlotante_component = normalizeComponent(
  boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js,
  SisdaiBotonFlotantevue_type_template_id_0672b952_render,
  SisdaiBotonFlotantevue_type_template_id_0672b952_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiBotonFlotante = (SisdaiBotonFlotante_component.exports);
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const boton_flotante_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiBotonFlotante', SisdaiBotonFlotante);
  }
};
/* harmony default export */ var boton_flotante = (boton_flotante_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=73ec86b1
var SisdaiNavegacionPrincipalvue_type_template_id_73ec86b1_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-conahcyt navegacion-pegada",
    class: {
      'navegacion-extendida': !_setup.esColapsable
    },
    attrs: {
      "aria-label": "Navegación principal"
    },
    on: {
      "mouseleave": function ($event) {
        return _setup.cerrarSubmenu();
      }
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._t("identidad", function () {
    return [_vm._m(0)];
  }), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto || _setup.submenuEstaAbierto
    },
    attrs: {
      "type": "button",
      "aria-expanded": _setup.menuEstaAbierto || _setup.submenuEstaAbierto,
      "aria-label": "Abrir/Cerrar navegación principal",
      "aria-controls": "navegacionprincipal"
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir y cerrar navegacion principal")])]), _setup.esColapsable ? _c('div', {
    staticClass: "nav-informacion",
    domProps: {
      "innerHTML": _vm._s(_vm.navInformacion)
    }
  }) : _vm._e()], 2), _c('div', {
    staticClass: "nav-menu-contenedor",
    class: {
      abierto: _setup.menuEstaAbierto,
      'submenu-abierto': _setup.submenuEstaAbierto
    },
    attrs: {
      "id": "navegacionprincipal"
    }
  }, [_c('div', {
    staticClass: "nav-menu-complementario"
  }, [_vm._t("complementario")], 2), _c('div', {
    ref: "cuadroElementosMenuRef",
    staticClass: "nav-menu-principal",
    attrs: {
      "tabindex": "0"
    }
  }, [_vm._t("default", function () {
    return [_c('ul', {
      staticClass: "nav-menu"
    }, [_c('li', [_c('a', {
      staticClass: "nav-hipervinculo",
      attrs: {
        "href": "#",
        "exact": ""
      },
      on: {
        "mouseover": function ($event) {
          return _setup.cerrarSubmenu();
        },
        "click": function ($event) {
          return _setup.cerrarMenuSubmenu();
        }
      }
    }, [_vm._v("Menú")])]), _c('li', {
      staticClass: "nav-contenedor-submenu"
    }, [_c('button', {
      staticClass: "nav-boton-submenu",
      attrs: {
        "aria-haspopup": "true",
        "aria-controls": "submenuEjemplo",
        "aria-expanded": _setup.submenuEstaAbierto
      },
      on: {
        "mouseover": function ($event) {
          return _setup.abrirSubmenu();
        },
        "click": _setup.alternarSubmenu
      }
    }, [_vm._v(" Menú con submenu ")]), _c('ul', {
      staticClass: "nav-submenu",
      class: {
        abierto: _setup.submenuEstaAbierto
      },
      attrs: {
        "aria-hidden": !_setup.submenuEstaAbierto
      }
    }, [_setup.esColapsable ? _c('li', [_c('button', {
      staticClass: "nav-boton-regresar",
      on: {
        "click": function ($event) {
          return _setup.regresarMenu();
        }
      }
    }, [_vm._v(" Submenu ")])]) : _vm._e(), _c('li', [_c('a', {
      staticClass: "nav-hipervinculo",
      attrs: {
        "href": "#eje"
      },
      on: {
        "click": function ($event) {
          return _setup.cerrarMenuSubmenu();
        }
      }
    }, [_vm._v("Submenu uno")])]), _c('li', [_c('a', {
      staticClass: "nav-hipervinculo",
      attrs: {
        "href": "#aja"
      },
      on: {
        "click": function ($event) {
          return _setup.cerrarMenuSubmenu();
        }
      }
    }, [_vm._v("Submenu dos")])])])])])];
  })], 2)])]);
};
var SisdaiNavegacionPrincipalvue_type_template_id_73ec86b1_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://conahcyt.mx/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('img', {
    staticClass: "nav-logo color-invertir",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai/recursos/conahcyt-azul.svg",
      "alt": "Conahcyt.",
      "width": "130",
      "height": "38"
    }
  })]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=73ec86b1

;// CONCATENATED MODULE: ./src/composables/useMenuDesenfocable.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.



/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * @typedef {Object} UseMenuDesenfocableObject
 * @property {Ref<boolean>} menuEstaAbierto  Indica el estado del menu si esta abierto o no
 * @property {function} abrirMenu  pone `menuEstaAbierto = true`
 * @property {function} cerrarMenu  pone `menuEstaAbierto = false`
 * @property {function} alternarMenu  pone `menuEstaAbierto =  !menuEstaAbierto` y cierra el submenu
 * @property {Ref<boolean>} submenuEstaAbierto  Indica el estado del submenu si esta abierto o no
 * @property {function} abrirSubmenu  pone `submenuEstaAbierto = true` y agrega el selector de estilo `abierto` al submenu
 * @property {function} cerrarSubmenu  pone `submenuEstaAbierto = false` y remueve el selector de estilo `abierto` al submenu
 * @property {function} alternarSubmenu  pone `submenuEstaAbierto =  !menuEstaAbierto`
 * @property {Ref<boolean>} esColapsable Indica si el menú está en una posición de ser colapsable o no
 * @property {function} regresarMenu pone `submenuEstaAbierto = !submenuEstaAbierto` y cierra o abre submenu según su valor
 * @property {function} cerrarMenuSubmenu cierra el Menu y el Submenu
 * @property {function} validarNavegacionColapsable valida si la navegación en colapsable o no al ancho de la navegación
 */

/**
 *  Composable que maneja el estado de *abierto-cerrado* de un menu (en los menus colapsables), adicionalmente
 *  administra los eventos *focus-blur* para cerrar el menu automaticamente al momento de que el menu pierda el foco
 *
 * @param {Ref<HTMLElement>} elementoMenuEnfocable Referecia del elemento html que contiene los
 * elementos del menu colapsable `ref<HTMLElement>`. Debe ser enfocable, si es un div o algun elemento que no
 * tenga focus por si mismo, debe agregarse el atributo [tab-index](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
 *
 * @param {<Number>} anchoNavegacion Indica el ancho de corte de navegación de la pnatalla
 *
 * @returns {UseMenuDesenfocableObject} Metodos y propiedades del composable
 * - `menuEstaAbierto: ref<boolean>`
 * - `abrirMenu: function`
 * - `cerrarMenu: function`
 * - `alternarMenu: function`
 * - `submenuEstaAbierto: ref<boolean>`
 * - `abrirSubmenu: function`
 * - `cerrarSubmenu: function`
 * - `alternarSubmenu: function`
 * - `esColapsable: ref<boolean>`
 * - `regresarMenu: function`
 * - `cerrarMenuSubmenu: function`
 * - `validarNavegacionColapsable: function`
 */
function useMenuDesenfocable(elementoMenuEnfocable, anchoNavegacion = 768) {
  const menuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const submenuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const esColapsable = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  function updateBlur() {
    //revisar que no tengo foco ningun elemento hijo
    if (menuEstaAbierto.value || submenuEstaAbierto.value) {
      setTimeout(() => {
        if (elementoMenuEnfocable.value && !elementoMenuEnfocable.value.contains(document.activeElement)) {
          menuEstaAbierto.value = false;
          cerrarSubmenu();
        }
      }, 200);
    }
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    validarNavegacionColapsable();
    window.addEventListener('resize', validarNavegacionColapsable);
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.addEventListener('blur', updateBlur);
  });
  function abrirMenu() {
    menuEstaAbierto.value = true;
  }
  function cerrarMenu() {
    menuEstaAbierto.value = false;
  }
  function alternarMenu() {
    cerrarSubmenu();
    menuEstaAbierto.value = !menuEstaAbierto.value;
  }
  function abrirSubmenu() {
    if (esColapsable.value === false) {
      if (document.querySelector('.nav-submenu')) {
        const navSubmenu = document.querySelector('.nav-submenu');
        const list = navSubmenu.classList;
        list.add('abierto');
        menuEstaAbierto.value = false;
        submenuEstaAbierto.value = true;
      }
    }
  }
  function cerrarSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu');
      const list = navSubmenu.classList;
      list.remove('abierto');
      submenuEstaAbierto.value = false;
    }
  }
  function alternarSubmenu() {
    submenuEstaAbierto.value = !submenuEstaAbierto.value;
    submenuEstaAbierto.value ? abrirSubmenu() : cerrarSubmenu();
  }
  function regresarMenu() {
    cerrarSubmenu();
    abrirMenu();
  }
  function cerrarMenuSubmenu() {
    cerrarMenu();
    cerrarSubmenu();
  }
  function validarNavegacionColapsable() {
    esColapsable.value = anchoNavegacion > window.innerWidth ? true : false;
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([menuEstaAbierto, submenuEstaAbierto], (menuEstaAbierto, submenuEstaAbierto) => {
    if (menuEstaAbierto || submenuEstaAbierto) {
      if (esColapsable.value) {
        elementoMenuEnfocable.value.focus();
      }
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
    window.removeEventListener('resize', validarNavegacionColapsable);
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.removeEventListener('blur', updateBlur);
  });
  return {
    menuEstaAbierto,
    submenuEstaAbierto,
    esColapsable,
    abrirMenu,
    cerrarMenu,
    alternarMenu,
    abrirSubmenu,
    cerrarSubmenu,
    alternarSubmenu,
    cerrarMenuSubmenu,
    regresarMenu
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNavegacionPrincipal',
  props: {
    navInformacion: {
      default: '',
      type: String
    },
    anchoNavegacion: {
      default: 768,
      type: Number
    }
  },
  setup(__props, {
    expose
  }) {
    const props = __props;

    // Que el menu se pueda cerrar automaticamente al enfocar otra cosa
    const cuadroElementosMenuRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      submenuEstaAbierto,
      esColapsable,
      alternarMenu,
      abrirSubmenu,
      cerrarSubmenu,
      alternarSubmenu,
      cerrarMenuSubmenu,
      regresarMenu
    } = useMenuDesenfocable(cuadroElementosMenuRef, props.anchoNavegacion);

    // Que el menu enfoque las secciones cuando esté abierto y cuando no no
    const navMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});
    const navSubmenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Remueve el atributo tabindex a los elementos de lista para que enfoque.
     */
    function removerTabIndex(menu) {
      for (let i = 0; i < menu.length; i++) {
        const elemento = menu[i]['children'][0];
        elemento.removeAttribute('tabIndex');
      }
    }
    /**
     * Agrega el atributo tabindex a los elementos de lista para que no enfoque.
     */
    function agregarTabIndex(menu) {
      for (let j = 0; j < menu.length; j++) {
        const elemento = menu[j]['children'][0];
        elemento.tabIndex = '-1';
      }
    }
    /**
     * Alterna el atributo tabindex a los elementos lista según el tipo de menú
     * y la disposición del tamaño de pantalla: movil o escritorio.
     */
    function alternarTabIndex() {
      if (window.innerWidth < props.anchoNavegacion) {
        // movil
        if (menuEstaAbierto.value) {
          if (submenuEstaAbierto.value) {
            agregarTabIndex(navMenu.value);
            removerTabIndex(navSubmenu.value);
          } else {
            removerTabIndex(navMenu.value);
            agregarTabIndex(navSubmenu.value);
          }
        } else {
          agregarTabIndex(navMenu.value);
          agregarTabIndex(navSubmenu.value);
        }
      } else {
        // escritorio
        if (submenuEstaAbierto.value) {
          removerTabIndex(navSubmenu.value);
        } else {
          agregarTabIndex(navSubmenu.value);
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      navMenu.value = document.querySelectorAll('#navegacionprincipal .nav-menu')[0]['children'];
      if (document.getElementsByClassName('nav-submenu')[0] !== undefined) navSubmenu.value = document.getElementsByClassName('nav-submenu')[0]['children'];
      alternarTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([menuEstaAbierto, submenuEstaAbierto], () => {
      alternarTabIndex();
    });
    expose({
      submenuEstaAbierto,
      abrirSubmenu,
      alternarSubmenu,
      esColapsable,
      regresarMenu,
      cerrarSubmenu,
      cerrarMenuSubmenu
    });
    return {
      __sfc: true,
      props,
      cuadroElementosMenuRef,
      menuEstaAbierto,
      submenuEstaAbierto,
      esColapsable,
      alternarMenu,
      abrirSubmenu,
      cerrarSubmenu,
      alternarSubmenu,
      cerrarMenuSubmenu,
      regresarMenu,
      navMenu,
      navSubmenu,
      removerTabIndex,
      agregarTabIndex,
      alternarTabIndex
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js = (SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue





/* normalize component */
;
var SisdaiNavegacionPrincipal_component = normalizeComponent(
  navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js,
  SisdaiNavegacionPrincipalvue_type_template_id_73ec86b1_render,
  SisdaiNavegacionPrincipalvue_type_template_id_73ec86b1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionPrincipal = (SisdaiNavegacionPrincipal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const navegacion_principal_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionPrincipal', SisdaiNavegacionPrincipal);
  }
};
/* harmony default export */ var navegacion_principal = (navegacion_principal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=template&id=06d9d149
var SisdaiIndiceDeContenidovue_type_template_id_06d9d149_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "indice-contenido",
    attrs: {
      "id": _vm.id_indice
    }
  }, [_c('p', {
    staticClass: "indice-contenido-titulo",
    attrs: {
      "id": "indicecontenido"
    }
  }, [_vm._v(" " + _vm._s(_vm.titulo) + " ")]), _c('nav', {
    staticClass: "indice-contenido-contenedor",
    attrs: {
      "aria-labelledby": "indicecontenido"
    }
  }, [_vm._t("contenido-indice-contenido", function () {
    return [_c('router-link', {
      attrs: {
        "to": "#routerlink"
      }
    }, [_vm._v(" router link prueba ")]), _c('a', {
      attrs: {
        "href": "#anchore"
      }
    }, [_vm._v(" anchore link prueba ")])];
  })], 2)]);
};
var SisdaiIndiceDeContenidovue_type_template_id_06d9d149_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiIndiceDeContenido',
  props: {
    titulo: {
      type: String,
      default: 'Índice'
    },
    altura: {
      type: Number,
      default: 50
    },
    id_indice: {
      type: String,
      defaul: 'id-del-indice-de-contenido'
    }
  },
  setup(__props) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */
    const obtenerRutas = () => {
      lista_elementos.value = [...document.querySelectorAll(`div#${props.id_indice}.indice-contenido a`)].map(d => {
        return {
          id: d.href.split('#').slice(-1).pop()
        };
      });
    };

    /**
     * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
     * la sección activa.
     */
    function scroleando() {
      lista_elementos.value.forEach(d => {
        if (document.getElementById(d.id)) {
          d.elemento = document.getElementById(d.id);
          d.y_min = d.elemento.offsetTop;
          d.y_max = d.elemento.offsetTop + d.elemento.offsetHeight;
        } else {
          // eslint-disable-next-line
          console.warn('Los href que introdujiste en el slot "contenido-indice-contenido" no hacen referencia a ningún id de esta vista');
        }
      });
      let posicion_scroll_y = window.pageYOffset + 100;
      lista_elementos.value.map(d => {
        if (d.y_min + props.altura <= posicion_scroll_y && posicion_scroll_y <= d.y_max + props.altura) {
          seccion_visible.value = d.id;
        }
      });
    }

    /**
     * Caracteristicas del autoscroll suave al clickear un link. Además modifica el focus
     */
    function autoScrollSuave() {
      document.querySelectorAll(`div#${props.id_indice}.indice-contenido a`).forEach(anchor => {
        anchor.addEventListener('click', () => {
          seccion_visible.value = anchor.href.split('#').slice(-1).pop();
          document.querySelector('#' + seccion_visible.value).focus();
          //e.preventDefault()

          window.scrollTo({
            top: document.querySelector('#' + seccion_visible.value).offsetTop - props.altura,
            behavior: 'smooth'
          });
        });
      });
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(seccion_visible, () => {
      document.querySelectorAll(`div#${props.id_indice}.indice-contenido a`).forEach(d => {
        if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
          d.classList.add('link-activo');
        } else {
          d.classList.remove('link-activo');
          d.classList.remove('router-link-exact-active');
        }
      });
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      obtenerRutas();
      autoScrollSuave();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      props,
      obtenerRutas,
      scroleando,
      autoScrollSuave
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js = (SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue





/* normalize component */
;
var SisdaiIndiceDeContenido_component = normalizeComponent(
  indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js,
  SisdaiIndiceDeContenidovue_type_template_id_06d9d149_render,
  SisdaiIndiceDeContenidovue_type_template_id_06d9d149_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiIndiceDeContenido = (SisdaiIndiceDeContenido_component.exports);
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const indice_de_contenido_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiIndiceDeContenido', SisdaiIndiceDeContenido);
  }
};
/* harmony default export */ var indice_de_contenido = (indice_de_contenido_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=47403468
var SisdaiNavegacionGobMxvue_type_template_id_47403468_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-gobmx",
    class: {
      'navegacion-extendida': !_setup.esColapsable
    },
    attrs: {
      "aria-label": "Menú Gobierno de México"
    },
    on: {
      "mouseleave": function ($event) {
        return _setup.cerrarSubmenu();
      }
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._m(0), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto || _setup.submenuEstaAbierto
    },
    attrs: {
      "type": "button",
      "aria-expanded": _setup.menuEstaAbierto || _setup.submenuEstaAbierto,
      "aria-label": "Abrir/Cerrar menú de gobierno de México",
      "aria-controls": "menugobiernomexico"
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir y cerrar navegacion del gobierno de México")])])]), _c('div', {
    staticClass: "nav-menu-contenedor",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    attrs: {
      "id": "menugobiernomexico"
    }
  }, [_c('div', {
    ref: "cuadroElementosMenuRef",
    staticClass: "nav-menu-principal",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('ul', {
    staticClass: "nav-menu"
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://coronavirus.gob.mx/",
      "target": "_blank",
      "rel": "noopener",
      "exact": ""
    },
    on: {
      "mouseover": function ($event) {
        return _setup.cerrarSubmenu();
      },
      "click": function ($event) {
        return _setup.cerrarMenuSubmenu();
      }
    }
  }, [_vm._v("Información sobre COVID-19")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/tramites",
      "target": "_blank",
      "rel": "noopener"
    },
    on: {
      "mouseover": function ($event) {
        return _setup.cerrarSubmenu();
      },
      "click": function ($event) {
        return _setup.cerrarMenuSubmenu();
      }
    }
  }, [_vm._v("Trámites")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/gobierno",
      "target": "_blank",
      "rel": "noopener"
    },
    on: {
      "mouseover": function ($event) {
        return _setup.cerrarSubmenu();
      },
      "click": function ($event) {
        return _setup.cerrarMenuSubmenu();
      }
    }
  }, [_vm._v("Gobierno")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/busqueda",
      "target": "_blank",
      "rel": "noopener"
    },
    on: {
      "mouseover": function ($event) {
        return _setup.cerrarSubmenu();
      },
      "click": function ($event) {
        return _setup.cerrarMenuSubmenu();
      }
    }
  }, [_c('span', {
    staticClass: "pictograma-buscar",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("ir al buscador")])])])])])])]);
};
var SisdaiNavegacionGobMxvue_type_template_id_47403468_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://www.gob.mx/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('img', {
    staticClass: "nav-logo",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai/recursos/gobmx.svg",
      "alt": "Gobierno de México.",
      "width": "128",
      "height": "38"
    }
  })]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=47403468

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNavegacionGobMx',
  props: {
    anchoNavegacion: {
      default: 768,
      type: Number
    }
  },
  setup(__props) {
    const props = __props;

    //Que el menu se pueda cerrar automaticamente al enfocar otra cosa
    const cuadroElementosMenuRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      submenuEstaAbierto,
      esColapsable,
      alternarMenu,
      cerrarSubmenu,
      cerrarMenuSubmenu
    } = useMenuDesenfocable(cuadroElementosMenuRef);
    const navMenuGobMx = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Remueve el atributo tabindex a los elementos de lista para que enfoque.
     */
    function removerTabIndex(menu) {
      for (let i = 0; i < menu.length; i++) {
        const elemento = menu[i]['children'][0];
        elemento.removeAttribute('tabIndex');
      }
    }
    /**
     * Agrega el atributo tabindex a los elementos de lista para que no enfoque.
     */
    function agregarTabIndex(menu) {
      for (let j = 0; j < menu.length; j++) {
        const elemento = menu[j]['children'][0];
        elemento.tabIndex = '-1';
      }
    }
    /**
     * Alterna el atributo tabindex a los elementos lista según el tipo de menú
     * y la disposición del tamaño de pantalla: movil o escritorio.
     */
    function alternarTabIndex() {
      if (window.innerWidth < props.anchoNavegacion) {
        // movil
        if (menuEstaAbierto.value) {
          removerTabIndex(navMenuGobMx.value);
        } else {
          agregarTabIndex(navMenuGobMx.value);
        }
      } else {
        // escritorio
        removerTabIndex(navMenuGobMx.value);
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      navMenuGobMx.value = document.querySelectorAll('#menugobiernomexico .nav-menu')[0]['children'];
      alternarTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([menuEstaAbierto, submenuEstaAbierto], () => {
      alternarTabIndex();
    });
    return {
      __sfc: true,
      props,
      cuadroElementosMenuRef,
      menuEstaAbierto,
      submenuEstaAbierto,
      esColapsable,
      alternarMenu,
      cerrarSubmenu,
      cerrarMenuSubmenu,
      navMenuGobMx,
      removerTabIndex,
      agregarTabIndex,
      alternarTabIndex
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js = (SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue





/* normalize component */
;
var SisdaiNavegacionGobMx_component = normalizeComponent(
  navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js,
  SisdaiNavegacionGobMxvue_type_template_id_47403468_render,
  SisdaiNavegacionGobMxvue_type_template_id_47403468_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionGobMx = (SisdaiNavegacionGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const navegacion_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionGobMx', SisdaiNavegacionGobMx);
  }
};
/* harmony default export */ var navegacion_gob_mx = (navegacion_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=33246625
var SisdaiPiePaginaGobMxvue_type_template_id_33246625_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaGobMxvue_type_template_id_33246625_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor piepagina-gobmx",
    attrs: {
      "aria-label": "Gobierno de México"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai/recursos/gobmx.svg",
      "alt": "Gobierno de México",
      "width": "200px",
      "height": "60px"
    }
  })]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "piepagina-titulo"
  }, [_vm._v("Enlaces")]), _c('ul', [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://participa.gob.mx/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Participa")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/publicaciones",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Publicaciones Oficiales")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "http://www.ordenjuridico.gob.mx/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Marco Jurídico")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Plataforma Nacional de Transparencia")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "piepagina-titulo"
  }, [_vm._v("¿Qué es gob.mx?")]), _c('p', [_vm._v(" Es el portal único de trámites, información y participación ciudadana. "), _c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/que-es-gobmx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Leer más")])]), _c('ul', [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://datos.gob.mx/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Portal de datos abiertos")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/accesibilidad",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Declaración de accesibilidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/aviso_de_privacidad",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Aviso de privacidad integral")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/privacidadsimplificado",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Aviso de privacidad simplificado")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Términos y Condiciones")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos#medidas-seguridad-informacion",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Política de seguridad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/sitemap",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Mapa de sitio")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Denuncia contra servidores públicos")])]), _c('p', {
    staticClass: "piepagina-titulo"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "piepagina-social"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.facebook.com/gobmx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-facebook",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://twitter.com/gobmx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x.")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=33246625

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue

var script = {}


/* normalize component */
;
var SisdaiPiePaginaGobMx_component = normalizeComponent(
  script,
  SisdaiPiePaginaGobMxvue_type_template_id_33246625_render,
  SisdaiPiePaginaGobMxvue_type_template_id_33246625_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaGobMx = (SisdaiPiePaginaGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const pie_pagina_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaGobMx', SisdaiPiePaginaGobMx);
  }
};
/* harmony default export */ var pie_pagina_gob_mx = (pie_pagina_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=551bc92e
var SisdaiPiePaginaConahcytvue_type_template_id_551bc92e_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('footer', {
    staticClass: "contenedor piepagina-conahcyt",
    attrs: {
      "aria-label": "Conahcyt"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-8-esc"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai/recursos/conahcyt-blanco.svg",
      "alt": "Conahcyt",
      "width": "200px",
      "height": "60px"
    }
  }), _vm._m(0), _c('p', [_vm._v(" ©"), _c('span', [_vm._v(_vm._s(_setup.anioActual))]), _vm._v(" Conahcyt Derechos Reservados en trámite ")])]), _vm._m(1), _vm._m(2)])]);
};
var SisdaiPiePaginaConahcytvue_type_template_id_551bc92e_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('p', [_vm._v(" Av. Insurgentes Sur 1582, Col. Crédito Constructor,"), _c('br'), _vm._v(" Demarcación Territorial Benito Juárez, C.P. 03940,"), _c('br'), _vm._v(" Ciudad de México Tel: (55) 5322-7700 ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "piepagina-titulo"
  }, [_vm._v("Enlaces")]), _c('ul', [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/directorio/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" Directorio ")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/centro-de-contacto-de-atencion/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" Centro de Contacto ")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/aviso-de-privacidad/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" Política de Privacidad ")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "http://comunidad.conahcyt.mx/index.php",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" Intranet Conahcyt ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "piepagina-titulo"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "piepagina-social"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://www.facebook.com/ConahcytMX",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-facebook",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://twitter.com/Conahcyt_Mex",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-x",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://www.instagram.com/conahcyt_mex/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-instagram",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("instagram ")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://www.youtube.com/@Conahcytmx",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_c('span', {
    staticClass: "pictograma-social-youtube",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("yutub")])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=551bc92e

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiPiePaginaConahcytvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiPiePaginaConahcyt',
  setup(__props) {
    const anioActual = new Date().getFullYear();
    return {
      __sfc: true,
      anioActual
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var pie_pagina_conahcyt_SisdaiPiePaginaConahcytvue_type_script_setup_true_lang_js = (SisdaiPiePaginaConahcytvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue





/* normalize component */
;
var SisdaiPiePaginaConahcyt_component = normalizeComponent(
  pie_pagina_conahcyt_SisdaiPiePaginaConahcytvue_type_script_setup_true_lang_js,
  SisdaiPiePaginaConahcytvue_type_template_id_551bc92e_render,
  SisdaiPiePaginaConahcytvue_type_template_id_551bc92e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaConahcyt = (SisdaiPiePaginaConahcyt_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const pie_pagina_conahcyt_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaConahcyt', SisdaiPiePaginaConahcyt);
  }
};
/* harmony default export */ var pie_pagina_conahcyt = (pie_pagina_conahcyt_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=template&id=7ee0bcbe
var SisdaiInfoDeDesplieguevue_type_template_id_7ee0bcbe_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.entornoProyecto !== 'production' ? _c('dl', {
    staticClass: "informacion-despliegue",
    attrs: {
      "id": "info_despliegue"
    }
  }, [_c('dt', [_vm._v("Versión:")]), _c('dd', [_vm._v(_vm._s(_vm.versionProyecto))]), _c('dt', [_vm._v("Ambiente:")]), _c('dd', [_vm._v(_vm._s(_vm.entornoProyecto))]), _c('dt', [_vm._v("Actualización:")]), _c('dd', [_vm._v(_vm._s(_vm.actualizacionProyecto))])]) : _vm._e();
};
var SisdaiInfoDeDesplieguevue_type_template_id_7ee0bcbe_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiInfoDeDespliegue',
  props: {
    versionProyecto: {
      type: String,
      required: true
    },
    entornoProyecto: {
      type: String,
      required: true
    },
    actualizacionProyecto: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js = (SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue





/* normalize component */
;
var SisdaiInfoDeDespliegue_component = normalizeComponent(
  info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js,
  SisdaiInfoDeDesplieguevue_type_template_id_7ee0bcbe_render,
  SisdaiInfoDeDesplieguevue_type_template_id_7ee0bcbe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiInfoDeDespliegue = (SisdaiInfoDeDespliegue_component.exports);
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const info_de_despliegue_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiInfoDeDespliegue', SisdaiInfoDeDespliegue);
  }
};
/* harmony default export */ var info_de_despliegue = (info_de_despliegue_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=template&id=cdc828da&scoped=true
var SisdaiModalvue_type_template_id_cdc828da_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('dialog', {
    ref: "trapRef",
    staticClass: "modal",
    class: _setup.tamanioModal,
    attrs: {
      "id": _setup.idModal,
      "role": "dialog",
      "aria-labelledby": "titulo_modal",
      "aria-modal": "true"
    }
  }, [_c('div', {
    staticClass: "modal-contenedor"
  }, [_c('div', {
    staticClass: "modal-cabecera"
  }, [_c('h1', {
    staticClass: "modal-titulo",
    attrs: {
      "id": "titulo_modal"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.tituloModal)
    }
  })]), _c('div', {
    staticClass: "modal-cuerpo"
  }, [_vm._t("cuerpo")], 2), _c('div', {
    staticClass: "modal-pie"
  }, [_vm._t("pie")], 2), _c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-secundario modal-cerrar",
    attrs: {
      "value": "cerrar"
    },
    on: {
      "click": function ($event) {
        return _setup.cerrarModal();
      }
    }
  }, [_c('span', {
    staticClass: "pictograma-cerrar",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Cerrar Modal. ")])])])]);
};
var SisdaiModalvue_type_template_id_cdc828da_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/composables/useFocusTrap.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const selectorElementosEnfocables = 'button, [href], input, select, details, audio, video, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * @typedef {function} useFocusTrap
 * @property {String} selectorElementosEnfocables  Indica los elementos interactivos que se pueden enfocar
 * @property {Array} elementosEnfocables  Indica los elementos enfocables dentro del modal
 * @property {Object} $primerEnfocable  Indica el primer elemento enfocable dentro del modal
 * @property {Object} $ultimoEnfocable  Indica el último elemento enfocable dentro del modal
 * @property {function} trapRef Inicializa el focusTrap cuando un elemento html es asignado y pone `$trapEl = null` si este elemento es removido del DOM.
 * @property {CustomRef<Object>} keyHandler Revisa si la tecla Tab fue presionada. O si Shift + Tab fue presionado para enfocar el primer elemento si el último estaba enfocada o viceverza.
 * @property {function} iniciaFocusTrap Almacena todos los elementos enfocables dentro del objecto referenciado. Pone el primer y último elemento enfocable a `$firstFocusable` y `$lastFocusable`. Inicializa el _keydown_ y enfoca el primer elemento.
 * @property {function} terminaFocusTrap Remueve el evento de _keydown_
 */

/**
 *  Composable que mantiene los elementos enfocables dentro del contexto de un
 *  modal. Es decir, cuando el foco llega al último elemento enfocable del modal,
 *  este regresa al primer elemento enfocable de modal y viceverza.
 *
 * @returns {useFocusTrap} Metodos y propiedades del composable
 * - `selectorElementosEnfocables: String`
 * - `elementosEnfocables: Array`
 * - `$primerEnfocable: Object`
 * - `$ultimoEnfocable: Object`
 * - `trapRef: CustomRef<Object>`
 * - `keyHandler: function`
 * - `iniciaFocusTrap: function`
 * - `terminaFocusTrap: function`
 */

const useFocusTrap = () => {
  let elementosEnfocables = [];
  let $primerEnfocable;
  let $ultimoEnfocable;

  /**
   * Inicializa el focus trap cuando un elemento html (Objeto <dialog />) es asignado
   * como valor y pone `$trapEl = null` si el elemento asignado de referencia es
   * removido del DOM para activar y desactivar el focus trap.
   */
  const trapRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.customRef)((track, trigger) => {
    let $trapEl = null;
    return {
      get() {
        track();
        return $trapEl;
      },
      set(value) {
        $trapEl = value;
        value ? iniciaFocusTrap() : terminaFocusTrap();
        trigger();
      }
    };
  });

  /**
   * Revisa si la tecla Tab fue presionada. O si Shift + Tab fue presionado y la usuaria
   * se encuentra en el primer elemento enfocable, entonces el último elemento será
   * enfocado. Sino solo se presionó Tab y la usuaria está en el último elemento
   * enfocable y el primer elemento se enfocará.
   */
  function keyHandler(e) {
    const isTabPressed = e.key === 'Tab';
    if (!isTabPressed) return;
    if (e.shiftKey) {
      if (document.activeElement === $primerEnfocable) {
        $ultimoEnfocable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === $ultimoEnfocable) {
        $primerEnfocable.focus();
        e.preventDefault();
      }
    }
  }

  /**
   * Almacena todos los elementos enfocables dentro del objecto referenciado. Pone el primer
   * y último elemento enfocable a `$firstFocusable` y `$lastFocusable`. Inicializa el
   * _keydown_ y enfoca el primer elemento.
   */
  function iniciaFocusTrap() {
    // Rescatar si no hay valor
    if (!trapRef.value) return;
    elementosEnfocables = trapRef.value.querySelectorAll(selectorElementosEnfocables);
    $primerEnfocable = elementosEnfocables[0];
    $ultimoEnfocable = elementosEnfocables[elementosEnfocables.length - 1];
    document.addEventListener('keydown', keyHandler);
    $primerEnfocable.focus();
  }

  /**
   * Remueve el evento de _keydown_.
   * Es importante limpiar los event listers, pues podrían provocar pérdidas de memoria.
   */
  function terminaFocusTrap() {
    document.removeEventListener('keydown', keyHandler);
  }
  return {
    trapRef,
    iniciaFocusTrap,
    terminaFocusTrap
  };
};
/* harmony default export */ var composables_useFocusTrap = (useFocusTrap);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js


const SisdaiModalvue_type_script_setup_true_lang_js_propiedades = {
  tituloModal: {
    type: String,
    default: ''
  },
  tamanioModal: {
    type: String,
    default: ''
  }
};
/* harmony default export */ var SisdaiModalvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiModal',
  props: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
  setup(__props, {
    expose
  }) {
    const props = __props;
    const {
      trapRef
    } = composables_useFocusTrap();
    const modal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const idModal = idAleatorio();
    const {
      tamanioModal
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);

    /**
     * Esta función nos sirve para obtener un id aleatorio para el componente
     * @returns {String} Cadena con prefijo "modal-" contatenado con un string aleatorio
     */
    function idAleatorio() {
      return 'modal-' + Math.random().toString(36).substring(2);
    }

    /** Cierra el modal y remover la clase overflow-hidden del body */
    function cerrarModal() {
      document.querySelector('body').classList.remove('overflow-hidden');
      modal.value = document.getElementById(idModal);
      modal.value.close();
    }
    /** Abre el modal y agregar la clase overflow-hidden al body */
    function abrirModal() {
      document.querySelector('body').classList.add('overflow-hidden');
      modal.value = document.getElementById(idModal);
      modal.value.showModal();
    }

    /** Revisa si la tecla Esc fue presionada para cerrar el modal */
    function siPresionaTeclaEscape(event) {
      if (event.which === 27) {
        document.querySelector('body').classList.remove('overflow-hidden');
      }
    }
    /**
     * Revisa si se da click fuera del modal o en el :backdrop
     * mientras esté abierto para cerrarlo
     * @param {Object} event
     */
    function clickFueraDelModal(event) {
      modal.value = document.getElementById(idModal);
      if (event.target === modal.value) {
        cerrarModal();
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeMount)(() => {
      window.addEventListener('keyup', siPresionaTeclaEscape);
      window.addEventListener('click', clickFueraDelModal);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
      window.removeEventListener('keyup', siPresionaTeclaEscape);
      window.addEventListener('click', clickFueraDelModal);
    });
    expose({
      abrirModal,
      cerrarModal,
      idModal
    });
    return {
      __sfc: true,
      propiedades: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
      trapRef,
      modal,
      idModal,
      props,
      tamanioModal,
      idAleatorio,
      cerrarModal,
      abrirModal,
      siPresionaTeclaEscape,
      clickFueraDelModal
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var modal_SisdaiModalvue_type_script_setup_true_lang_js = (SisdaiModalvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=cdc828da&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=cdc828da&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue



;


/* normalize component */

var SisdaiModal_component = normalizeComponent(
  modal_SisdaiModalvue_type_script_setup_true_lang_js,
  SisdaiModalvue_type_template_id_cdc828da_scoped_true_render,
  SisdaiModalvue_type_template_id_cdc828da_scoped_true_staticRenderFns,
  false,
  null,
  "cdc828da",
  null
  
)

/* harmony default export */ var SisdaiModal = (SisdaiModal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/modal/index.js

const modal_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiModal', SisdaiModal);
  }
};
/* harmony default export */ var modal = (modal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=template&id=330391fb
var SisdaiEnlaceExternovue_type_template_id_330391fb_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    attrs: {
      "href": _vm.enlace,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" " + _vm._s(_vm.texto) + " "), _c('span', {
    staticClass: "pictograma-enlace-externo",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
};
var SisdaiEnlaceExternovue_type_template_id_330391fb_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiEnlaceExternovue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiEnlaceExterno',
  props: {
    enlace: {
      type: String,
      default: '#'
    },
    texto: {
      type: String,
      default: 'Enlace externo'
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var enlace_externo_SisdaiEnlaceExternovue_type_script_setup_true_lang_js = (SisdaiEnlaceExternovue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue





/* normalize component */
;
var SisdaiEnlaceExterno_component = normalizeComponent(
  enlace_externo_SisdaiEnlaceExternovue_type_script_setup_true_lang_js,
  SisdaiEnlaceExternovue_type_template_id_330391fb_render,
  SisdaiEnlaceExternovue_type_template_id_330391fb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiEnlaceExterno = (SisdaiEnlaceExterno_component.exports);
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/index.js

const enlace_externo_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiEnlaceExterno', SisdaiEnlaceExterno);
  }
};
/* harmony default export */ var enlace_externo = (enlace_externo_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=template&id=f873348a
var SisdaiImagenPngWebpvue_type_template_id_f873348a_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('figure', [_c('picture', [_c('source', {
    attrs: {
      "srcset": `${_vm.dominio}${_vm.ruta}.webp`,
      "type": "image/webp"
    }
  }), _c('source', {
    attrs: {
      "type": "image/png",
      "srcset": `${_vm.dominio}${_vm.ruta}.png`
    }
  }), _c('img', {
    style: {
      maxWidth: _vm.ancho_maximo,
      width: '100%'
    },
    attrs: {
      "loading": "lazy",
      "src": `${_vm.dominio}${_vm.ruta}.png`,
      "alt": _vm.textoAlternativo
    }
  })]), _c('figcaption', {
    attrs: {
      "aria-hidden": "true"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.leyenda)
    }
  })]);
};
var SisdaiImagenPngWebpvue_type_template_id_f873348a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiImagenPngWebpvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiImagenPngWebp',
  props: {
    dominio: {
      type: String,
      default: ''
    },
    ruta: {
      type: String,
      default: ''
    },
    textoAlternativo: {
      type: String,
      default: ''
    },
    leyenda: {
      type: String,
      default: ''
    },
    ancho_maximo: {
      type: String,
      default: '100%'
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var imagen_png_webp_SisdaiImagenPngWebpvue_type_script_setup_true_lang_js = (SisdaiImagenPngWebpvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue





/* normalize component */
;
var SisdaiImagenPngWebp_component = normalizeComponent(
  imagen_png_webp_SisdaiImagenPngWebpvue_type_script_setup_true_lang_js,
  SisdaiImagenPngWebpvue_type_template_id_f873348a_render,
  SisdaiImagenPngWebpvue_type_template_id_f873348a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiImagenPngWebp = (SisdaiImagenPngWebp_component.exports);
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/index.js

const imagen_png_webp_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiImagenPngWebp', SisdaiImagenPngWebp);
  }
};
/* harmony default export */ var imagen_png_webp = (imagen_png_webp_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/audio/SisdaiAudio.vue?vue&type=template&id=fd0b9368
var SisdaiAudiovue_type_template_id_fd0b9368_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "audio",
    attrs: {
      "id": _setup.id_aleatorio,
      "role": "toolbar",
      "aria-label": "Controles para reproducir audio"
    }
  }, [_vm._t("encabezado"), _c('audio', {
    attrs: {
      "preload": "metadata",
      "type": "audio/mp3",
      "src": _vm.archivo
    }
  }), _c('div', {
    staticClass: "flex flex-contenido-separado texto-color-secundario"
  }, [_c('div', {
    attrs: {
      "role": "timer",
      "aria-label": "Tiempo transcurrido"
    }
  }, [_vm._v(" " + _vm._s(_setup.formatoTemporal(_setup.tiempo_transcurrido)) + " ")]), _c('div', [_c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Duración total: ")]), _vm._v(" " + _vm._s(_setup.formatoTemporal(_setup.duracion)) + " ")])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _setup.tiempo_transcurrido,
      expression: "tiempo_transcurrido",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "control-tiempo",
    attrs: {
      "type": "range",
      "aria-label": "Barra de progreso de la reproducción",
      "max": Math.floor(_setup.duracion)
    },
    domProps: {
      "value": _setup.tiempo_transcurrido
    },
    on: {
      "change": function ($event) {
        _setup.slider_activo = false;
      },
      "input": function ($event) {
        return _setup.funcionInput();
      },
      "__r": function ($event) {
        _setup.tiempo_transcurrido = _vm._n($event.target.value);
      },
      "blur": function ($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _c('div', {
    staticClass: "flex"
  }, [_c('div', {
    staticClass: "audio-velocidad"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.velocidad_reproduccion,
      expression: "velocidad_reproduccion"
    }],
    staticClass: "velocidad-reproduccion",
    attrs: {
      "name": "velocidad-reproduccion",
      "aria-label": "Selecciona la velocidad de reproducción"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _setup.velocidad_reproduccion = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('optgroup', {
    attrs: {
      "label": "Velocidad de reproducción"
    }
  }, _vm._l(_setup.velocidades, function (velocidad) {
    return _c('option', {
      key: velocidad.opcion,
      domProps: {
        "value": velocidad.valor
      }
    }, [_vm._v(" " + _vm._s(velocidad.opcion) + "x ")]);
  }), 0)])]), _c('div', {
    staticClass: "audio-reproduccion"
  }, [_c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-primario",
    attrs: {
      "disabled": !(_setup.tiempo_transcurrido > 10)
    },
    on: {
      "click": _setup.retrasa10
    }
  }, [_c('span', {
    staticClass: "pictograma-regresar-10",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Regresar ")])]), _c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-primario",
    on: {
      "click": function ($event) {
        _setup.reproduciendo = !_setup.reproduciendo;
      }
    }
  }, [!_setup.reproduciendo ? _c('span', {
    staticClass: "pictograma-control-comenzar",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Comenzar reproducción ")]), _setup.reproduciendo ? _c('span', {
    staticClass: "pictograma-control-pausa",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Pausar reproducción ")])]), _c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-primario",
    attrs: {
      "disabled": !(_setup.tiempo_transcurrido < _setup.duracion - 10)
    },
    on: {
      "click": _setup.adelanta10
    }
  }, [_c('span', {
    staticClass: "pictograma-adelantar-10",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Adelantar ")])])]), _c('div', {
    staticClass: "audio-volumen"
  }, [_c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-primario",
    on: {
      "click": function ($event) {
        _setup.controlVolumen?.valor_seleccionado == 0 ? _setup.volumen_default = 100 : _setup.volumen_default = 0;
      }
    }
  }, [_setup.controlVolumen?.valor_seleccionado > 0 ? _c('span', {
    staticClass: "pictograma-volumen",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Encender sonido ")]), _setup.controlVolumen?.valor_seleccionado == 0 ? _c('span', {
    staticClass: "pictograma-silenciar",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _vm._e(), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Apagar sonido ")])]), _c(_setup.SisdaiControlDeslizante, {
    ref: "controlVolumen",
    staticClass: "control-volumen m-y-1 m-x-0",
    attrs: {
      "aria-label": "Nivel de volumen",
      "val_entrada": _setup.volumen_default
    }
  })], 1)])], 2);
};
var SisdaiAudiovue_type_template_id_fd0b9368_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/control-deslizante/SisdaiControlDeslizante.vue?vue&type=template&id=7720a1e2
var SisdaiControlDeslizantevue_type_template_id_7720a1e2_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.valor_seleccionado,
      expression: "valor_seleccionado"
    }],
    staticClass: "control-deslizante",
    attrs: {
      "type": "range",
      "min": _vm.val_min,
      "max": _vm.val_max
    },
    domProps: {
      "value": _setup.valor_seleccionado
    },
    on: {
      "__r": function ($event) {
        _setup.valor_seleccionado = $event.target.value;
      }
    }
  });
};
var SisdaiControlDeslizantevue_type_template_id_7720a1e2_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/control-deslizante/SisdaiControlDeslizante.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var SisdaiControlDeslizantevue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiControlDeslizante',
  props: {
    val_min: {
      default: 0,
      type: Number
    },
    val_max: {
      default: 100,
      type: Number
    },
    val_entrada: {
      default: 50,
      type: Number
    }
  },
  setup(__props, {
    expose
  }) {
    const props = __props;
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.useCssVars)((_vm, _setup) => ({
      "0dc91bd1": _setup.valor_porcentual
    }));
    const valor_seleccionado = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.val_entrada);
    const valor_porcentual = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      return `${100 * (valor_seleccionado.value - props.val_min) / (props.val_max - props.val_min)}%`;
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.val_entrada, nv => {
      valor_seleccionado.value = nv;
    });
    expose({
      valor_seleccionado
    });
    return {
      __sfc: true,
      props,
      valor_seleccionado,
      valor_porcentual
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/control-deslizante/SisdaiControlDeslizante.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var control_deslizante_SisdaiControlDeslizantevue_type_script_setup_true_lang_js = (SisdaiControlDeslizantevue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/control-deslizante/SisdaiControlDeslizante.vue?vue&type=style&index=0&id=7720a1e2&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/control-deslizante/SisdaiControlDeslizante.vue?vue&type=style&index=0&id=7720a1e2&prod&lang=scss

;// CONCATENATED MODULE: ./src/componentes/control-deslizante/SisdaiControlDeslizante.vue



;


/* normalize component */

var SisdaiControlDeslizante_component = normalizeComponent(
  control_deslizante_SisdaiControlDeslizantevue_type_script_setup_true_lang_js,
  SisdaiControlDeslizantevue_type_template_id_7720a1e2_render,
  SisdaiControlDeslizantevue_type_template_id_7720a1e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiControlDeslizante = (SisdaiControlDeslizante_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/audio/SisdaiAudio.vue?vue&type=script&setup=true&lang=js



/* harmony default export */ var SisdaiAudiovue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiAudio',
  props: {
    archivo: {
      type: String,
      default: ''
    }
  },
  setup(__props) {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.useCssVars)((_vm, _setup) => ({
      "761e5316": _setup.porcentaje_transcurrido,
      "3e1ebb1b": _setup.porcentaje_almacenado
    }));
    const controlVolumen = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const velocidades = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([{
      valor: 0.25,
      opcion: '0.25'
    }, {
      valor: 0.5,
      opcion: '0.5'
    }, {
      valor: 0.75,
      opcion: '0.75'
    }, {
      valor: 1,
      opcion: '1.0'
    }, {
      valor: 1.25,
      opcion: '1.25'
    }, {
      valor: 2.25,
      opcion: '2.25'
    }, {
      valor: 3.75,
      opcion: '3.75'
    }]);
    const volumen_default = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(100);
    const velocidad_reproduccion = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(1);
    const reproduciendo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const id_aleatorio = idAleatorio();
    const duracion = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
    const tiempo_transcurrido = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);

    // Strings para css
    const porcentaje_transcurrido = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('0%');
    const porcentaje_almacenado = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('0%');
    const slider_activo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    //Elementos DOM
    const audio = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const contenedor_audio = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const control_temporal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      contenedor_audio.value = document.querySelector(`div#${id_aleatorio}`);
      audio.value = contenedor_audio.value.querySelector('audio');
      control_temporal.value = contenedor_audio.value.querySelector('input.control-tiempo');
      if (audio.value.readyState > 0) {
        duracion.value = audio.value.duration;
        mostrarCantidadAlmacenada();
      } else {
        audio.value.addEventListener('loadedmetadata', metadatosCargados);
      }
      audio.value.addEventListener('progress', mostrarCantidadAlmacenada);
      audio.value.addEventListener('timeupdate', actualizacionTiempo);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      audio.value.removeEventListener('loadedmetadata', metadatosCargados);
      audio.value.removeEventListener('progress', mostrarCantidadAlmacenada);
      audio.value.removeEventListener('timeupdate', actualizacionTiempo);
    });

    /**
     * Esta función se ejecuta al cargar los métadados. Una vez que ésto ocurre
     * se obtiene la duración del audio y se muestra dicha duración
     */
    function metadatosCargados() {
      duracion.value = audio.value.duration;
      mostrarCantidadAlmacenada();
    }

    /**
     * Esta función se ejecuta conforme se actualiza el tiempo de la reproducción
     * del audio. Cuando ésto ocurre se muestra actualiza el texto del tiempo transcurrido
     * y los estilos del input[type='range']. También se actualiza la información
     * del audio descargado
     */
    function actualizacionTiempo() {
      if (!slider_activo.value) {
        tiempo_transcurrido.value = Math.floor(audio.value.currentTime);
        porcentaje_transcurrido.value = `${100 * tiempo_transcurrido.value / duracion.value}%`;
        mostrarCantidadAlmacenada();
      }
    }

    /**
     * Esta función nos sirve para obtener un id aleatorio para el componente
     * @returns {String} Cadena con prefijo "audio-" contatenado con un string aleatorio
     */
    function idAleatorio() {
      return 'audio-' + Math.random().toString(36).substring(2);
    }

    /**
     * @param {Number} segs Número que corresponde a segundos
     * @returns {String} string en formato de minutos:segundos
     */
    function formatoTemporal(segs) {
      let minutos = Math.floor(segs / 60);
      let segundos = Math.floor(segs % 60);
      segundos = segundos < 10 ? `0${segundos}` : `${segundos}`;
      return `${minutos}:${segundos}`;
    }

    /**
     * Muestra el porcentaje del audio que ha sido descargado asociado al
     * fragmento mas cercano a la reproducción
     */
    function mostrarCantidadAlmacenada() {
      if (audio.value.buffered.length > 0) {
        const cantidadAlmacenada = Math.floor(audio.value.buffered.end(audio.value.buffered.length - 1));
        porcentaje_almacenado.value = cantidadAlmacenada / Math.floor(duracion.value) * 100 + '%';
      }
    }

    /**
     * Adelanta el el audio 10 segundos
     */
    function adelanta10() {
      if (tiempo_transcurrido.value < duracion.value - 10) {
        tiempo_transcurrido.value = Math.floor(audio.value.currentTime + 10);
        porcentaje_transcurrido.value = `${100 * tiempo_transcurrido.value / duracion.value}%`;
        audio.value.currentTime = tiempo_transcurrido.value;
      }
    }

    /**
     * Retrasa el el audio 10 segundos
     */
    function retrasa10() {
      if (10 < tiempo_transcurrido.value) {
        tiempo_transcurrido.value = Math.floor(audio.value.currentTime - 10);
        porcentaje_transcurrido.value = `${100 * tiempo_transcurrido.value / duracion.value}%`;
        audio.value.currentTime = tiempo_transcurrido.value;
      }
    }

    /**
     * Watcha el botón de reproducción para pausar o reproducir
     */
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(reproduciendo, nv => {
      if (nv) {
        audio.value.play();
      } else {
        audio.value.pause();
      }
    });

    /**
     * Watcha cuando se recorre el slider y cuando se suelta para actualizar
     * el tiempo transcurrido del audio
     */
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(slider_activo, (nv, ov) => {
      // console.log(nv)
      if (!nv && ov) {
        audio.value.currentTime = +tiempo_transcurrido.value;
      }
    });

    /**
     * Watcha al selector de velocidad de reproducción para modificar la velocidad
     * del audio
     */
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(velocidad_reproduccion, nv => {
      audio.value.playbackRate = nv;
    });

    /**
     * Watcha el input de volumen para actualizar el volumen del audio
     */
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => controlVolumen.value?.valor_seleccionado, nv => {
      audio.value.volume = nv / 100;
    });
    function funcionInput() {
      slider_activo.value = true;
      porcentaje_transcurrido.value = `${100 * tiempo_transcurrido.value / duracion.value}%`;
    }
    return {
      __sfc: true,
      controlVolumen,
      velocidades,
      volumen_default,
      velocidad_reproduccion,
      reproduciendo,
      id_aleatorio,
      duracion,
      tiempo_transcurrido,
      porcentaje_transcurrido,
      porcentaje_almacenado,
      slider_activo,
      audio,
      contenedor_audio,
      control_temporal,
      metadatosCargados,
      actualizacionTiempo,
      idAleatorio,
      formatoTemporal,
      mostrarCantidadAlmacenada,
      adelanta10,
      retrasa10,
      funcionInput,
      SisdaiControlDeslizante: SisdaiControlDeslizante
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/audio/SisdaiAudio.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var audio_SisdaiAudiovue_type_script_setup_true_lang_js = (SisdaiAudiovue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/audio/SisdaiAudio.vue?vue&type=style&index=0&id=fd0b9368&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/audio/SisdaiAudio.vue?vue&type=style&index=0&id=fd0b9368&prod&lang=scss

;// CONCATENATED MODULE: ./src/componentes/audio/SisdaiAudio.vue



;


/* normalize component */

var SisdaiAudio_component = normalizeComponent(
  audio_SisdaiAudiovue_type_script_setup_true_lang_js,
  SisdaiAudiovue_type_template_id_fd0b9368_render,
  SisdaiAudiovue_type_template_id_fd0b9368_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiAudio = (SisdaiAudio_component.exports);
;// CONCATENATED MODULE: ./src/componentes/audio/index.js

const audio_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiAudio', SisdaiAudio);
  }
};
/* harmony default export */ var audio = (audio_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue?vue&type=template&id=4250e3b0
var SisdaiCampoBusquedavue_type_template_id_4250e3b0_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "campo-busqueda"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.textoBusqueda,
      expression: "textoBusqueda"
    }],
    ref: "inputBusquedaRef",
    staticClass: "campo-busqueda-entrada",
    attrs: {
      "type": "search",
      "placeholder": _setup.props.etiqueta
    },
    domProps: {
      "value": _setup.textoBusqueda
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _setup.textoBusqueda = $event.target.value;
      }
    }
  }), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _setup.botonLimpiarBusquedaActivo,
      expression: "botonLimpiarBusquedaActivo"
    }],
    staticClass: "boton-pictograma boton-sin-contenedor-secundario campo-busqueda-borrar",
    on: {
      "click": _setup.limpiarBusqueda
    }
  }, [_c('span', {
    staticClass: "pictograma-cerrar",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("Limpiar campo de búsqueda")])]), _vm._m(0)]);
};
var SisdaiCampoBusquedavue_type_template_id_4250e3b0_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('button', {
    staticClass: "boton-primario boton-pictograma campo-busqueda-buscar"
  }, [_c('span', {
    staticClass: "pictograma-buscar",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("Buscar")])]);
}];

;// CONCATENATED MODULE: ./src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue?vue&type=template&id=4250e3b0

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue?vue&type=script&setup=true&lang=js

const SisdaiCampoBusquedavue_type_script_setup_true_lang_js_eventos = {
  /**
   * Evento que se emite al empezar a escribir en el campo de búsqueda.
   */
  alFiltrar: 'alFiltrar'
};
/* harmony default export */ var SisdaiCampoBusquedavue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiCampoBusqueda',
  props: {
    catalogo: {
      type: Array,
      default: () => []
    },
    catalogoAnidado: {
      type: Boolean,
      default: false
    },
    catalogoAnidadoPropiedadElementos: {
      type: String,
      default: 'elementos'
    },
    propiedadBusqueda: {
      type: String,
      default: 'nombre'
    },
    etiqueta: {
      type: String,
      default: 'Buscar...'
    }
  },
  emits: Object.values(SisdaiCampoBusquedavue_type_script_setup_true_lang_js_eventos),
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const {
      catalogo
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);
    const textoBusqueda = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('');
    const inputBusquedaRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    function filtroAnidado(texto) {
      if (texto.trim().length >= 1) {
        return catalogo.value.map(grupo => {
          const elementosFiltrados = {};
          elementosFiltrados[props.catalogoAnidadoPropiedadElementos] = grupo[props.catalogoAnidadoPropiedadElementos].filter(elemento => {
            const propiedadBusquedaNormalizada = elemento[props.propiedadBusqueda].normalize('NFD').replace(/\p{Diacritic}/gu, '');
            const textoNormalizado = texto.normalize('NFD').replace(/\p{Diacritic}/gu, '');
            return propiedadBusquedaNormalizada.toLowerCase().includes(textoNormalizado.trim().toLowerCase());
          });
          return {
            ...grupo,
            ...elementosFiltrados
          };
        }).filter(grupo => grupo[props.catalogoAnidadoPropiedadElementos].length);
      }
      return catalogo.value;
    }
    function filtro(texto) {
      if (props.catalogoAnidado) {
        return filtroAnidado(texto);
      }
      if (texto.trim().length >= 1) {
        return catalogo.value.filter(elemento => {
          const propiedadBusquedaNormalizada = elemento[props.propiedadBusqueda].normalize('NFD').replace(/\p{Diacritic}/gu, '');
          const textoNormalizado = texto.normalize('NFD').replace(/\p{Diacritic}/gu, '');
          return propiedadBusquedaNormalizada.toLowerCase().includes(textoNormalizado.trim().toLowerCase());
        });
      }
      return catalogo.value;
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(textoBusqueda, nv => emits(SisdaiCampoBusquedavue_type_script_setup_true_lang_js_eventos.alFiltrar, filtro(nv)));
    const botonLimpiarBusquedaActivo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => textoBusqueda.value.trim().length > 0);
    function limpiarBusqueda() {
      textoBusqueda.value = '';
      inputBusquedaRef.value.focus();
    }
    return {
      __sfc: true,
      eventos: SisdaiCampoBusquedavue_type_script_setup_true_lang_js_eventos,
      emits,
      props,
      catalogo,
      textoBusqueda,
      inputBusquedaRef,
      filtroAnidado,
      filtro,
      botonLimpiarBusquedaActivo,
      limpiarBusqueda
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var campo_busqueda_SisdaiCampoBusquedavue_type_script_setup_true_lang_js = (SisdaiCampoBusquedavue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/campo-busqueda/SisdaiCampoBusqueda.vue





/* normalize component */
;
var SisdaiCampoBusqueda_component = normalizeComponent(
  campo_busqueda_SisdaiCampoBusquedavue_type_script_setup_true_lang_js,
  SisdaiCampoBusquedavue_type_template_id_4250e3b0_render,
  SisdaiCampoBusquedavue_type_template_id_4250e3b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiCampoBusqueda = (SisdaiCampoBusqueda_component.exports);
;// CONCATENATED MODULE: ./src/componentes/campo-busqueda/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const campo_busqueda_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiCampoBusqueda', SisdaiCampoBusqueda);
  }
};
/* harmony default export */ var campo_busqueda = (campo_busqueda_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue?vue&type=template&id=ee759d8a
var SisdaiControlAcercarAlejarvue_type_template_id_ee759d8a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "control-acercar-alejar",
    attrs: {
      "role": "toolbar",
      "aria-label": "Controles para ajustar el nivel de acercamiento"
    }
  }, [_c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-secundario",
    on: {
      "click": _vm.disminuir
    }
  }, [_c('span', {
    staticClass: "pictograma-restar",
    attrs: {
      "aria-label": "Alejar"
    }
  })]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "control-acercar-alejar-rango",
    attrs: {
      "type": "range",
      "aria-label": "Ajustar el nivel de acercamiento",
      "min": _vm.min,
      "max": _vm.max,
      "step": _vm.step
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "__r": function ($event) {
        _vm.inputValue = $event.target.value;
      }
    }
  }), _c('button', {
    staticClass: "boton-pictograma boton-sin-contenedor-secundario",
    on: {
      "click": _vm.aumentar
    }
  }, [_c('span', {
    staticClass: "pictograma-agregar",
    attrs: {
      "aria-label": "Acercar"
    }
  })]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.inputValue,
      expression: "inputValue",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "control-acercar-alejar-porcentaje",
    attrs: {
      "type": "text",
      "maxlength": "3",
      "inputmode": "numeric",
      "min": "0",
      "max": "100",
      "pattern": "\\d*",
      "aria-label": "Porcentaje de acercamiento"
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "change": function ($event) {
        _vm.inputValue = $event.target.value;
      }
    }
  })]);
};
var SisdaiControlAcercarAlejarvue_type_template_id_ee759d8a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue?vue&type=script&lang=js
/* harmony default export */ var SisdaiControlAcercarAlejarvue_type_script_lang_js = ({
  name: 'SisdaiControlAcercarAlejar',
  props: {
    value: Number,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 5
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    inputValue: {
      get() {
        return Math.round(this.value);
      },
      set(value) {
        this.$emit('change', Number(value));
      }
    },
    valor_porcentual() {
      return `${(this.inputValue - this.min) / (this.max - this.min) * 100}%`;
    }
  },
  methods: {
    aumentar() {
      this.inputValue = this.inputValue + this.step;
    },
    disminuir() {
      this.inputValue = this.inputValue - this.step;
    }
  }
});
;// CONCATENATED MODULE: ./src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue?vue&type=script&lang=js
 /* harmony default export */ var control_acercar_alejar_SisdaiControlAcercarAlejarvue_type_script_lang_js = (SisdaiControlAcercarAlejarvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/control-acercar-alejar/SisdaiControlAcercarAlejar.vue





/* normalize component */
;
var SisdaiControlAcercarAlejar_component = normalizeComponent(
  control_acercar_alejar_SisdaiControlAcercarAlejarvue_type_script_lang_js,
  SisdaiControlAcercarAlejarvue_type_template_id_ee759d8a_render,
  SisdaiControlAcercarAlejarvue_type_template_id_ee759d8a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiControlAcercarAlejar = (SisdaiControlAcercarAlejar_component.exports);
;// CONCATENATED MODULE: ./src/componentes/control-acercar-alejar/index.js

const control_acercar_alejar_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiControlAcercarAlejar', SisdaiControlAcercarAlejar);
  }
};
/* harmony default export */ var control_acercar_alejar = (control_acercar_alejar_plugin);
;// CONCATENATED MODULE: ./src/componentes/control-deslizante/index.js

const control_deslizante_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiControlDeslizante', SisdaiControlDeslizante);
  }
};
/* harmony default export */ var control_deslizante = (control_deslizante_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7b27c973-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa/SisdaiNarrativa.vue?vue&type=template&id=440774d4&scoped=true
var SisdaiNarrativavue_type_template_id_440774d4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('section', {
    staticClass: "narrativa-graficas",
    attrs: {
      "id": _vm.id
    }
  }, [_c('div', {
    staticClass: "depurador",
    style: {
      opacity: _vm.depurador ? 1 : 0,
      top: _vm.altura_sensor * 100 + 'vh'
    }
  }, [_c('span', [_vm._v("Seccion activa: " + _vm._s(_setup.seccion_visible) + " "), _c('br'), _vm._v(" Posicion depurador: " + _vm._s(_setup.posicion_normalizada))])]), _c('div', {
    staticClass: "contenido-fondo-sticky"
  }, [_vm._t("contenido-fondo-sticky")], 2), _vm._t("default")], 2);
};
var SisdaiNarrativavue_type_template_id_440774d4_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa/SisdaiNarrativa.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiNarrativavue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNarrativa',
  props: {
    id: {
      type: String,
      default: () => {
        return 'id-' + Math.random().toString(36).substring(2);
      }
    },
    depurador: {
      type: Boolean,
      default: false
    },
    altura_sensor: {
      type: Number,
      default: 0.5
    },
    separacion: {
      type: Number,
      default: 1
    },
    posicion_inicial: {
      type: Number,
      default: 1
    }
  },
  setup(__props, {
    expose
  }) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(-1);
    const posicion_depurador = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
    const narrativa = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    let posicion_actual = -1;
    const posicion_normalizada = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);
    const obtenerElementos = () => {
      narrativa.value = document.querySelector(`section#${props.id}.narrativa-graficas `);
      lista_elementos.value = [...narrativa.value.querySelectorAll(` .vineta`)];
      narrativa.value.style.height = (lista_elementos.value.length + 1) * props.separacion * 100 + 'vh';
      lista_elementos.value.forEach((el, i) => {
        el.style.top = (props.posicion_inicial + i * props.separacion) * 100 + 'vh';
      });
    };
    function scroleando() {
      posicion_depurador.value = document.querySelector(`section#${props.id}.narrativa-graficas div.depurador`).getBoundingClientRect().top;
      posicion_normalizada.value = (posicion_depurador.value - lista_elementos.value[0].getBoundingClientRect().bottom) / (lista_elementos.value[1].getBoundingClientRect().top - lista_elementos.value[0].getBoundingClientRect().top);

      // Checando elementos activos
      lista_elementos.value.forEach((el, i) => {
        if (i < lista_elementos.value.length - 1) {
          if (el.getBoundingClientRect().top < posicion_depurador.value && posicion_depurador.value < lista_elementos.value[i + 1].getBoundingClientRect().top) {
            posicion_actual = i;
          }
        } else if (posicion_depurador.value < lista_elementos.value[0].getBoundingClientRect().top) {
          posicion_actual = -1;
        } else if (i === lista_elementos.value.length - 1) {
          if (posicion_depurador.value > lista_elementos.value[i].getBoundingClientRect().top) {
            posicion_actual = i;
          }
        }
      });
      if (posicion_actual !== seccion_visible.value) {
        seccion_visible.value = posicion_actual;
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      obtenerElementos();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.posicion_inicial, obtenerElementos);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(() => props.separacion, obtenerElementos);
    expose({
      seccion_visible,
      posicion_normalizada,
      lista_elementos
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      posicion_depurador,
      narrativa,
      posicion_actual,
      posicion_normalizada,
      props,
      obtenerElementos,
      scroleando
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/narrativa/SisdaiNarrativa.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var narrativa_SisdaiNarrativavue_type_script_setup_true_lang_js = (SisdaiNarrativavue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa/SisdaiNarrativa.vue?vue&type=style&index=0&id=440774d4&prod&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa/SisdaiNarrativa.vue?vue&type=style&index=0&id=440774d4&prod&scoped=true&lang=scss

;// CONCATENATED MODULE: ./src/componentes/narrativa/SisdaiNarrativa.vue



;


/* normalize component */

var SisdaiNarrativa_component = normalizeComponent(
  narrativa_SisdaiNarrativavue_type_script_setup_true_lang_js,
  SisdaiNarrativavue_type_template_id_440774d4_scoped_true_render,
  SisdaiNarrativavue_type_template_id_440774d4_scoped_true_staticRenderFns,
  false,
  null,
  "440774d4",
  null
  
)

/* harmony default export */ var SisdaiNarrativa = (SisdaiNarrativa_component.exports);
;// CONCATENATED MODULE: ./src/componentes/narrativa/index.js

const narrativa_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNarrativa', SisdaiNarrativa);
  }
};
/* harmony default export */ var narrativa = (narrativa_plugin);
;// CONCATENATED MODULE: ./src/componentes/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.




















// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(693);
;// CONCATENATED MODULE: ./src/directivas/tooltips/GloboInformacion.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.

const GLOBAL_NAME = '__VTOOLTIP__';
globalThis[GLOBAL_NAME] = globalThis[GLOBAL_NAME] || {};
const globo_informacion = {
  name: 'globo-informacion',
  bind(el, binding) {
    const unique_id = Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      // classTooltip: 'contenedor-globo-info',
      classTooltip: ['globo-informacion'],
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('focusin', props.mouseEnterListener);
    el.removeEventListener('focusout', props.mouseLeaveListener);
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const globo_informacion_extendido = {
  name: 'globo-informacion-extendido',
  bind(el, binding) {
    const unique_id = 'info-' + Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      // classTooltip: 'contenedor-globo-info-ext',
      classTooltip: ['globo-informacion', 'globo-informacion-extendido'],
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('focusin', props.mouseEnterListener);
    el.removeEventListener('focusout', props.mouseLeaveListener);
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const addMouseEnterListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];

    //revisar que no exista un timer para limpiar el toltip, si no cancelarlo, ya que esta funcion creara otro
    if ('timerToClear' in globalProps) {
      cancelTimerToRemove(globalProps);
      return;
    }
    removeAllTooltips();
    const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip, el);
    let elementToDesignate = el;
    if (typeof globalProps.value === 'object') {
      elementToDesignate = globalProps.value['asignadoAElemento'] ? document.querySelector(globalProps.value['asignadoAElemento']) : el;
    }
    (0,core_.createPopper)(elementToDesignate, tooltip, {
      placement: globalProps.placement,
      strategy: 'fixed',
      modifiers: [{
        name: 'offset',
        options: {
          offset: globalProps.offset
        }
      }]
    });
  };
  el.addEventListener('focus', fn);
  el.addEventListener('mouseenter', fn);
  return fn;
};
const addMouseLeaveListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
    //const tooltip = getTooltipElement(unique_id,globalProps.value, globalProps.classTooltip)

    if (globalProps.interactable) {
      waitToRemoveTooltip(unique_id);
      const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip, el);
      tooltip.addEventListener('focusin', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps);
      });
      tooltip.addEventListener('focusout', () => {
        //console.log("listener invocado");
        waitToRemoveTooltip(unique_id, 500);
      });
      tooltip.addEventListener('mouseenter', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps);
      });
      tooltip.addEventListener('mouseleave', () => {
        waitToRemoveTooltip(unique_id, 500);
        //removeTooltip(unique_id)
      });
      return;
    }
    removeTooltip(unique_id);
  };
  el.addEventListener('mouseleave', fn);
  el.addEventListener('focusout', fn);
  return fn;
};

/**
 * Espera antes de remover un tooltip, 1 segundo de tiempo por default
 * @param {*} unique_id identificador del tooltip
 * @param {number} ms 1000 milisegundos
 */
const waitToRemoveTooltip = (unique_id, ms = 1000) => {
  const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
  cancelTimerToRemove(globalProps);
  const timer = setTimeout(() => {
    removeTooltip(unique_id);
    delete globalProps['timerToClear'];
  }, ms);
  globalProps['timerToClear'] = timer;
};
const cancelTimerToRemove = propsOfTooltip => {
  if ('timerToClear' in propsOfTooltip) {
    //console.log("cancelando el removido porque volvio a entrar")
    const timer = propsOfTooltip['timerToClear'];
    clearTimeout(timer);
    delete propsOfTooltip['timerToClear'];
    //return
  }
};
const removeTooltip = unique_id => {
  if (document.querySelector("[tooltip-id='" + unique_id + "']") !== null) {
    document.querySelector("[tooltip-id='" + unique_id + "']").remove();
  }
};
const removeAllTooltips = () => {
  const tooltips = globalThis.document.querySelectorAll('[tooltip-id]');
  tooltips.forEach(tooltip => {
    const id = tooltip.getAttribute('tooltip-id');
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][id];
    cancelTimerToRemove(globalProps);
    tooltip.remove();
  });
};

/**
 *  Create if not exists
 * @param {string} id
 * @param {object} value
 * @param {string} classTooltip
 * @returns
 */

function getTooltipElement(id, value, classTooltip, elemento) {
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    return document.querySelector("[tooltip-id='" + id + "']");
  }
  //crearlo
  const tooltip = document.createElement('div');
  tooltip.setAttribute('tooltip-id', id);
  tooltip.setAttribute('role', 'tooltip');

  // tooltip.classList.add(classTooltip)
  classTooltip.forEach(classCss => {
    tooltip.classList.add(classCss);
  });
  let contenido = typeof value === 'object' ? value['contenido'] : value;
  // tooltip.innerHTML = `<div class="cuerpo-globo-info">${contenido}</div>`
  tooltip.innerHTML = `<div class="globo-informacion-cuerpo">${contenido}</div>`;
  //document.body.appendChild(tooltip)
  elemento.parentNode.insertBefore(tooltip, elemento.nextSibling);
  return tooltip;
}
function updateTooltipElement(id, value) {
  //solo se actualiza si existe
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    const tooltip = document.querySelector("[tooltip-id='" + id + "']");
    let contenido = typeof value === 'object' ? value['contenido'] : value;
    // tooltip.innerHTML = `<div class="cuerpo">${contenido}</div>`
    tooltip.innerHTML = `<div class="globo-informacion-cuerpo">${contenido}</div>`;
  }
}
const posiciones_espanol = {
  'izquierda-inicio': 'left-start',
  izquierda: 'left',
  'izquierda-final': 'left-end',
  'derecha-inicio': 'right-start',
  derecha: 'right',
  'derecha-final': 'right-end',
  'arriba-inicio': 'top-start',
  arriba: 'top',
  'arriba-final': 'top-end',
  'abajo-inicio': 'bottom-start',
  abajo: 'bottom',
  'abajo-final': 'bottom-end',
  inicio: 'start',
  final: 'end'
};
function getPosicionParaPopper(posicion_es) {
  return posiciones_espanol[posicion_es];
}
const offsetsBase = {
  top: [0, 8],
  bottom: [0, 8],
  right: [0, 8],
  left: [0, 8]
};

;// CONCATENATED MODULE: ./src/directivas/tooltips/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.


const tooltips_plugin = {
  install: function (Vue) {
    Vue.directive(globo_informacion.name, globo_informacion);
    Vue.directive(globo_informacion_extendido.name, globo_informacion_extendido);
  }
};
/* harmony default export */ var tooltips = (tooltips_plugin);
;// CONCATENATED MODULE: ./src/directivas/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.



;// CONCATENATED MODULE: ./src/index.js
// This file is part of sisdai-componentes.
//
//   sisdai-componentes is free software: you can redistribute it and/or modify
//   it under the terms of the GNU Lesser General Public License as published by the
//   Free Software Foundation, either version 3 of the License, or
//   (at your option) any later version.
//
//   sisdai-componentes is distributed in the hope that it will be useful,
//   but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
//   Public License for more details.
//
//   You should have received a copy of the GNU Lesser General Public License along
//   with sisdai-componentes. If not, see <https://www.gnu.org/licenses/>.



const src_plugin = {
  install: function (Vue) {
    //UI base
    Vue.use(navegacion_gob_mx);
    Vue.use(navegacion_principal);
    Vue.use(pie_pagina_gob_mx);
    Vue.use(pie_pagina_conahcyt);
    Vue.use(colapsable_navegacion);
    Vue.use(menu_lateral);
    Vue.use(indice_de_contenido);
    Vue.use(info_de_despliegue);
    Vue.use(enlace_externo);
    Vue.use(audio);
    Vue.use(control_deslizante);

    //accesibilidad
    Vue.use(menu_accesibilidad);
    Vue.use(imagen_png_webp);

    //auxiliares
    Vue.use(tooltips);
    //otros
    // Vue.use(SisdaiNarrativaScroll)
    Vue.use(narrativa);
    Vue.use(boton_flotante);
    Vue.use(modal);
    Vue.use(campo_busqueda);
    Vue.use(control_acercar_alejar);
  }
};

/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
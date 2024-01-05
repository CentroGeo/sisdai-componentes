/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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

// UNUSED EXPORTS: GlobosInformacion, SisdaiBotonFlotante, SisdaiColapsableNavegacion, SisdaiEnlaceExterno, SisdaiImagenPngWebp, SisdaiIndiceDeContenido, SisdaiInfoDeDespliegue, SisdaiMenuAccesibilidad, SisdaiMenuLateral, SisdaiModal, SisdaiNarrativaScroll, SisdaiNavegacionGobMx, SisdaiNavegacionPrincipal, SisdaiPiePaginaConahcyt, SisdaiPiePaginaGobMx

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

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=template&id=340e856c
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

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js

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
        imagen: 'https://placekitten.com/1920/1080'
      }, {
        html: '<p>bullet 1</p>',
        imagen: 'https://placekitten.com/1920/1082'
      }, {
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1042'
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
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(0);

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
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      obtenerElementos();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
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
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css

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

const narrativa_scroll_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNarrativaScroll', SisdaiNarrativaScroll);
  }
};
/* harmony default export */ var narrativa_scroll = (narrativa_scroll_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=5a4414ba
var SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-colapsable",
    class: {
      activo: _setup._colapsado
    }
  }, [_c('button', {
    staticClass: "colapsable-boton p-x-5-esc p-x-3-mov p-y-1",
    attrs: {
      "aria-expanded": _setup._colapsado,
      "tabindex": _setup.avisarMenuLateral ? undefined : -1
    },
    on: {
      "click": function ($event) {
        _setup._colapsado = !_setup._colapsado;
      }
    }
  }, [_c('div', {
    staticClass: "contenedor-encabezado-colapsable"
  }, [_vm._t("encabezado", function () {
    return [_c('p', {
      staticClass: "m-0"
    }, [_vm._v("Encabezado colapsable")])];
  })], 2), _vm._m(0)]), _c('div', {
    staticClass: "contenedor-colapsable-contenido"
  }, [_vm._t("contenido", function () {
    return [_c('ul', {
      attrs: {
        "id": _setup.id_aleatorio
      }
    }, [_c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "target": "_blank",
        "tabindex": _setup._colapsado ? undefined : -1
      }
    }, [_vm._v(" Elemento desplegado")])])])];
  })], 2)]);
};
var SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "p-t-1"
  }, [_c('span', {
    staticClass: "nav-boton-submenu",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}];

;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=5a4414ba

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiColapsableNavegacion',
  props: {
    titulo: {
      type: String,
      default: 'Titulo de colapsable'
    },
    colapsado: {
      type: Boolean,
      default: false
    },
    avisarMenuLateral: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;

    // eslint-disable-next-line
    const {
      colapsado,
      avisarMenuLateral
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRefs)(props);
    const _colapsado = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(colapsado.value);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(colapsado, nv => _colapsado.value = nv);
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();

    //const emits = defineEmits(['alAlternarColapsable'])

    /*watch(esta_activo, () => {
      emits('alAlternarColapsable', esta_activo.value)
    })*/

    return {
      __sfc: true,
      props,
      colapsado,
      avisarMenuLateral,
      _colapsado,
      idAleatorio,
      id_aleatorio
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
  SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_render,
  SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiColapsableNavegacion = (SisdaiColapsableNavegacion_component.exports);
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/index.js

const colapsable_navegacion_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiColapsableNavegacion', SisdaiColapsableNavegacion);
  }
};
/* harmony default export */ var colapsable_navegacion = (colapsable_navegacion_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=template&id=afd48694
var SisdaiMenuLateralvue_type_template_id_afd48694_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "menu-lateral-contenedor",
    attrs: {
      "aria-label": "Menú secundario"
    }
  }, [_c('div', {
    staticClass: "menu-mov",
    class: {
      abierto: _setup.menu_abierto
    },
    on: {
      "click": function ($event) {
        _setup.menu_abierto = !_setup.menu_abierto;
      }
    }
  }, [_c('button', {
    staticClass: "boton-icono boton-menu",
    attrs: {
      "aria-expanded": _setup.menu_abierto ? 'true' : 'false'
    }
  }, [_setup.menu_abierto ? _c('span', {
    staticClass: "icono-angulo-doble-izquierda",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _c('span', {
    staticClass: "icono-angulo-doble-derecha",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Expandir o colapsar navegación")])])]), _c('div', {
    staticClass: "menu-colapsable",
    class: {
      abierto: _setup.menu_abierto
    },
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_c('div', {
    ref: "contenidoMenuLateral",
    staticClass: "menu-max-height"
  }, [_vm._t("contenido-menu-lateral", function () {
    return [_c('ul', {
      staticClass: "colapsable-submenu"
    }, [_c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "#anchore",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_vm._v(" anchore link prueba ")])]), _c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "rel": "noopener",
        "target": "_blank",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_c('span', {
      staticClass: "icono-social-github",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" ejemplo github ")])])])];
  })], 2)])]);
};
var SisdaiMenuLateralvue_type_template_id_afd48694_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiMenuLateralvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiMenuLateral',
  emits: ['alAlternarMenu'],
  setup(__props, {
    emit: emits
  }) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();
    const contenidoMenuLateral = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
    if (typeof window !== 'undefined') {
      menu_abierto.value = window.innerWidth < 768 ? false : true;
    }
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(menu_abierto, () => {
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
  SisdaiMenuLateralvue_type_template_id_afd48694_render,
  SisdaiMenuLateralvue_type_template_id_afd48694_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuLateral = (SisdaiMenuLateral_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/index.js

const menu_lateral_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuLateral', SisdaiMenuLateral);
  }
};
/* harmony default export */ var menu_lateral = (menu_lateral_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=template&id=1cbb9f81
var SisdaiMenuAccesibilidadvue_type_template_id_1cbb9f81_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-menu-accesibilidad",
    class: {
      abierto: _setup.menuAccesibilidadEstaAbierto
    }
  }, [_c('button', {
    staticClass: "icono-boton-accesibilidad",
    attrs: {
      "aria-expanded": _setup.menuAccesibilidadEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarAbiertoCerrado
    }
  }, [_c('span', {
    staticClass: "icono-accesibilidad icono-5",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" abrir y cerrar menú de accesibilidad ")])]), _c('menu', {
    staticClass: "menu-accesibilidad"
  }, [_c('p', {
    staticClass: "titulo"
  }, [_vm._v("Herramientas de accesibilidad")]), _c('hr'), _vm._l(_setup.opciones, function (opcion, idx) {
    return _c('div', {
      key: `opcion-accesibilidad-${idx}`,
      staticClass: "controlador-vis m-y-1"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _setup.clasesSelecciondas,
        expression: "clasesSelecciondas"
      }],
      attrs: {
        "id": `${opcion.claseCss}_${_setup.id}`,
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
        "for": `${opcion.claseCss}_${_setup.id}`
      }
    }, [_c('span', {
      staticClass: "figura-variable icono-4",
      class: opcion.icono,
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "nombre-variable"
    }, [_c('b', [_vm._v(" " + _vm._s(opcion.titulo) + " ")])])])]);
  }), _c('button', {
    staticClass: "hipervinculo",
    attrs: {
      "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1,
      "disabled": !_setup.clasesSelecciondas.length
    },
    on: {
      "click": _setup.restablecer
    }
  }, [_c('b', [_vm._v("Restablecer")])])], 2)]);
};
var SisdaiMenuAccesibilidadvue_type_template_id_1cbb9f81_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/opcionesDefault.js
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
  icono: 'icono-cambio-tipografia',
  titulo: 'Cambio de fuente'
}, {
  accion: 'alternarEnlacesSubrayados',
  claseCss: 'a11y-hipervinculos',
  icono: 'icono-enlace-subrayado',
  titulo: 'Enlaces subrayados'
}, {
  accion: 'alternarVistaSimplificada',
  claseCss: 'a11y-simplificada',
  icono: 'icono-vista-simplificada',
  titulo: 'Mostrar solo texto'
}, {
  accion: 'alternarVistaOscura',
  claseCss: 'a11y-oscura',
  icono: 'icono-contraste',
  titulo: 'Vista Oscura'
}]);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js



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
   * Los perfiles disponibles son: `'eni'`, `'gema'`, `'sisdai'`.
   */
  perfilColor: {
    type: String,
    default: 'eni' // 'eni' | 'sisdai' | 'gema'
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
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.useCssVars)((_vm, _setup) => ({
      "1e2e10f0": _setup.alturaMenuAbierto
    }));
    const {
      agregarOpciones,
      id,
      objetoStore,
      perfilColor,
      nombreModuloStore
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRefs)(props);

    /**
     * Opciones que se mostrarán en el menú de accesibilidad.
     */
    const opciones = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => [...opcionesDefault, ...agregarOpciones.value]);

    /**
     * Indica si el Menú de accesibilidad está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type {Boolean}
     */
    const menuAccesibilidadEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);

    /**
     * Arreglo de clases que se mantienen activas con el menú de accesibilidad, use esta variable
     * para facilitar la relación de interacción del menú de accesibilidad con la vista.
     * @type {Array<String>}
     */
    const clasesSelecciondas = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)([]);

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
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(clasesSelecciondas, (nv, ov) => {
      ejecutarEnStore('modificarClasesAccesibles', nv);

      // TODO: hacer función. Solo para vista oscura
      if (nv.find(clase => clase === 'a11y-oscura') && !ov.find(clase => clase === 'a11y-oscura')) {
        // cuando pone la clase a11y-oscura
        document.documentElement.removeAttribute(`data-light-theme-${perfilColor.value}`);
        document.documentElement.removeAttribute(`data-dark-theme-${perfilColor.value}`);
        document.documentElement.setAttribute(`data-dark-theme-${perfilColor.value}`, true);
      }
      if (!nv.find(clase => clase === 'a11y-oscura') && ov.find(clase => clase === 'a11y-oscura')) {
        // cuando quita la clase a11y-oscura
        document.documentElement.removeAttribute(`data-dark-theme-${perfilColor.value}`);
        document.documentElement.removeAttribute(`data-light-theme-${perfilColor.value}`);
        document.documentElement.setAttribute(`data-light-theme-${perfilColor.value}`, true);
      }
    });

    /**
     * Módulo de vista oscura.
     */
    // Tema o modo de color con el que inicializa la aplicación.
    const tema = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)('auto'); // 'oscura' | 'clara' | 'auto'

    // function getTemaDesdeLocalStorage() {
    //   const tema = localStorage.getItem('theme') || 'clara'
    //   return tema
    // }

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
          document.documentElement.removeAttribute(`data-dark-theme-${perfilColor.value}`);
          document.documentElement.removeAttribute(`data-light-theme-${perfilColor.value}`);
          document.documentElement.setAttribute(`data-light-theme-${perfilColor.value}`, true);
          break;
        case 'oscura':
          document.documentElement.removeAttribute(`data-light-theme-${perfilColor.value}`);
          document.documentElement.removeAttribute(`data-dark-theme-${perfilColor.value}`);
          document.documentElement.setAttribute(`data-dark-theme-${perfilColor.value}`, true);
          break;
      }
    }

    // function alternarTema() {
    //   //rotar entre estos 3 valores
    //   const themes = ['clara', 'oscura', 'auto']
    //   tema.value = themes[(themes.indexOf(tema.value) + 1) % 3]
    //   localStorage.setItem('theme', tema.value)
    // }

    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onBeforeMount)(() => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', setTemaEnDocumentoYLocalStorage);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      // const tema = getTemaDesdeLocalStorage()
      // tema.value = getTemaDesdeLocalStorage()
      setTemaEnDocumentoYLocalStorage();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTemaEnDocumentoYLocalStorage);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)([perfilColor, tema], () => {
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

    /**
     * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
     * opción de restablecer y el titulo del menú.
     */
    const alturaMenuAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => `${(opciones.value.length + 1) * 48 + 145}px`);
    return {
      __sfc: true,
      propiedades,
      eventos,
      props,
      emits,
      agregarOpciones,
      id,
      objetoStore,
      perfilColor,
      nombreModuloStore,
      opciones,
      menuAccesibilidadEstaAbierto,
      clasesSelecciondas,
      ejecutarEnStore,
      restablecer,
      tema,
      getTemaDispositivo,
      setClaseA11yOscura,
      setTemaEnDocumentoYLocalStorage,
      alternarAbiertoCerrado,
      alturaMenuAbierto
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js = (SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=1cbb9f81&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=1cbb9f81&prod&lang=scss

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue



;


/* normalize component */

var SisdaiMenuAccesibilidad_component = normalizeComponent(
  menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js,
  SisdaiMenuAccesibilidadvue_type_template_id_1cbb9f81_render,
  SisdaiMenuAccesibilidadvue_type_template_id_1cbb9f81_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuAccesibilidad = (SisdaiMenuAccesibilidad_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/index.js

const menu_accesibilidad_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuAccesibilidad', SisdaiMenuAccesibilidad);
  }
};
/* harmony default export */ var menu_accesibilidad = (menu_accesibilidad_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=template&id=4ca57805
var SisdaiBotonFlotantevue_type_template_id_4ca57805_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-boton-flotante",
    class: {
      abierto: _setup.botonFlotanteEstaAbierto
    },
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_c('button', {
    class: `boton-flotante-alternador borde-r-redondeado-20 borde-l-redondeado-${_setup.botonFlotanteEstaAbierto ? '' : '2'}0`,
    attrs: {
      "aria-expanded": _setup.botonFlotanteEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarEstado
    }
  }, [_c('span', {
    class: `icono ${_setup.botonFlotanteEstaAbierto ? 'icono-restar' : 'icono-agregar'} icono-3`,
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir o cerrar botón flotante")])]), _c('div', {
    staticClass: "boton-flotante-contenido borde-l-redondeado-20",
    class: {
      'borde-l': _setup.botonFlotanteEstaAbierto
    }
  }, _vm._l(_setup.enlaces, function ({
    enlace,
    clasesCss,
    icono,
    contenido
  }, idx) {
    return _c('a', {
      key: `boton-flotante-enlace-${idx}`,
      class: `enlace p-x-2 borde-redondeado-0 ${clasesCss === undefined ? '' : clasesCss}`,
      attrs: {
        "id": `boton_flotante_enlace_${idx}`,
        "href": enlace,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "tabindex": _setup.botonFlotanteEstaAbierto ? undefined : -1
      }
    }, [_c('span', {
      class: `icono ${icono === undefined ? 'icono-enlace-externo' : icono}`,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(contenido === undefined ? 'Enlace externo' : contenido) + " ")]);
  }), 0)]);
};
var SisdaiBotonFlotantevue_type_template_id_4ca57805_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js

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
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRefs)(props);

    /**
     * Indica si el Botón flotante está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type Boolean
     */
    const botonFlotanteEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(true);

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
  SisdaiBotonFlotantevue_type_template_id_4ca57805_render,
  SisdaiBotonFlotantevue_type_template_id_4ca57805_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiBotonFlotante = (SisdaiBotonFlotante_component.exports);
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/index.js

const boton_flotante_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiBotonFlotante', SisdaiBotonFlotante);
  }
};
/* harmony default export */ var boton_flotante = (boton_flotante_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=a9ac8aea
var SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    ref: "navegacionPrincipal",
    staticClass: "navegacion navegacion-conahcyt",
    class: {
      'navegacion-pegada': _vm.fija
    },
    attrs: {
      "aria-label": "Menú principal"
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._t("identidad", function () {
    return [_vm._m(0)];
  }), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    attrs: {
      "aria-expanded": _setup.menuEstaAbierto ? 'true' : 'false'
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
  }, [_vm._v("abrir y cerrar navegacion principal")])]), _c('div', {
    staticClass: "nav-informacion",
    domProps: {
      "innerHTML": _vm._s(_vm.navInformacion)
    }
  })], 2), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    staticClass: "nav-menu-complementario"
  }, [_vm._t("complementario")], 2), _c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._t("default", function () {
    return [_vm._m(1)];
  })], 2)])]);
};
var SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://conahcyt.mx/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "nav-logo invertir",
    attrs: {
      "width": "130",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conahcyt-azul.svg",
      "alt": "Conahcyt."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu"
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Inicio")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/acerca-de"
    }
  }, [_vm._v("Acerca de")])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=a9ac8aea

;// CONCATENATED MODULE: ./src/composables/useMenuDesenfocable.js


/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * @typedef {Object} UseMenuDesenfocableObject
 * @property {Ref<boolean>} menuEstaAbierto  Indica el estado del menu si esta abierto o no
 * @property {function} abrirMenu  pone `menuEstaAbierto = true`
 * @property {function} cerrarMenu  pone `menuEstaAbierto = false`
 * @property {function} alternarMenu  pone `menuEstaAbierto =  !menuEstaAbierto`
 * @property {Ref<boolean>} submenuEstaAbierto  Indica el estado del submenu si esta abierto o no
 * @property {function} abrirSubmenu  pone `submenuEstaAbierto = true` y agrega el selector de estilo `abierto` al submenu
 * @property {function} cerrarSubmenu  pone `submenuEstaAbierto = false` y remueve el selector de estilo `abierto` al submenu
 * @property {function} alternarSubmenu  pone `submenuEstaAbierto =  !menuEstaAbierto`
 */

/**
 *  Composable que maneja el estado de *abierto-cerrado* de un menu (en los menus colapsables), adicionalmente
 *  administra los eventos *focus-blur* para cerrar el menu automaticamente al momento de que el menu pierda el foco
 *
 * @param {Ref<HTMLElement>} elementoMenuEnfocable Referecia del elemento html que contiene los
 * elementos del menu colapsable `ref<HTMLElement>`. Debe ser enfocable, si es un div o algun elemento que no
 * tenga focus por si mismo, debe agregarse el atributo [tab-index](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
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
 */
function useMenuDesenfocable(elementoMenuEnfocable) {
  const menuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
  const submenuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
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
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.addEventListener('blur', updateBlur);
  });
  function abrirMenu() {
    menuEstaAbierto.value = true;
  }
  function cerrarMenu() {
    menuEstaAbierto.value = false;
  }
  function alternarMenu() {
    if (menuEstaAbierto.value === false && submenuEstaAbierto.value === true) {
      cerrarSubmenu();
    } else {
      menuEstaAbierto.value = !menuEstaAbierto.value;
    }
  }
  function abrirSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu');
      const list = navSubmenu.classList;
      list.add('abierto');
      submenuEstaAbierto.value = true;
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
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)([menuEstaAbierto, submenuEstaAbierto], (menuEstaAbierto, submenuEstaAbierto) => {
    if (menuEstaAbierto || submenuEstaAbierto) {
      elementoMenuEnfocable.value.focus();
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.removeEventListener('blur', updateBlur);
  });
  return {
    menuEstaAbierto,
    abrirMenu,
    cerrarMenu,
    alternarMenu,
    alternarSubmenu
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNavegacionPrincipal',
  props: {
    navInformacion: {
      default: '',
      type: String
    },
    fija: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    //Que el menu se pueda cerrar automaticamente al enfocar otra cosa
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
    const navegacionPrincipal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu,
      // eslint-disable-next-line
      alternarSubmenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    const navMenuConahcyt = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si está en versión móvil
     */
    function agregaAtributoTabIndex() {
      if (window.innerWidth < 768) {
        for (let index = 0; index < navMenuConahcyt.value.length; index++) {
          const elemento = navMenuConahcyt.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está abierto en móvil, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (window.innerWidth < 768) {
        if (estaAbierto) {
          for (let i = 0; i < navMenuConahcyt.value.length; i++) {
            const elemento = navMenuConahcyt.value[i]['children'][0];
            elemento.removeAttribute('tabIndex');
          }
        } else {
          for (let j = 0; j < navMenuConahcyt.value.length; j++) {
            const elemento = navMenuConahcyt.value[j]['children'][0];
            elemento.tabIndex = '-1';
          }
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      navMenuConahcyt.value = document.getElementsByClassName('nav-menu')[1]['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(menuEstaAbierto, () => {
      actualizaAtributoTabIndex(menuEstaAbierto.value);
    });
    return {
      __sfc: true,
      cuadroElementosMenu,
      navegacionPrincipal,
      menuEstaAbierto,
      alternarMenu,
      alternarSubmenu,
      navMenuConahcyt,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex
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
  SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_render,
  SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionPrincipal = (SisdaiNavegacionPrincipal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/index.js

const navegacion_principal_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionPrincipal', SisdaiNavegacionPrincipal);
  }
};
/* harmony default export */ var navegacion_principal = (navegacion_principal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=template&id=1a8fe0af
var SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "indice-de-contenido",
    attrs: {
      "id": _vm.id_indice
    }
  }, [_c('p', {
    staticClass: "titulo-indice",
    attrs: {
      "id": "indice"
    }
  }, [_vm._v(" " + _vm._s(_vm.titulo) + " ")]), _c('nav', {
    attrs: {
      "aria-labelledby": "indice"
    }
  }, [_c('div', {
    staticClass: "contenedor-indice-de-contenido"
  }, [_vm._t("contenido-indice-de-contenido", function () {
    return [_c('router-link', {
      attrs: {
        "to": "#routerlink"
      }
    }, [_vm._v(" router link prueba ")]), _c('a', {
      attrs: {
        "href": "#anchore"
      }
    }, [_vm._v(" anchore link prueba ")])];
  })], 2)])]);
};
var SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js

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
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)();

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */

    const obtenerRutas = () => {
      lista_elementos.value = [...document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`)].map(d => {
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
          console.warn('Los href que introdujiste en el slot "contenido-indice-de-contenido" no hacen referencia a ningún id de esta vista');
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
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(anchor => {
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
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(seccion_visible, () => {
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(d => {
        if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
          d.classList.add('link-activo');
        } else {
          d.classList.remove('link-activo');
          d.classList.remove('router-link-exact-active');
        }
      });
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      obtenerRutas();
      autoScrollSuave();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onUnmounted)(() => {
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
  SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_render,
  SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiIndiceDeContenido = (SisdaiIndiceDeContenido_component.exports);
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/index.js

const indice_de_contenido_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiIndiceDeContenido', SisdaiIndiceDeContenido);
  }
};
/* harmony default export */ var indice_de_contenido = (indice_de_contenido_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=19aa1ecb
var SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-gobmx",
    attrs: {
      "aria-label": "Menú Gobierno de México"
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._m(0), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    attrs: {
      "aria-expanded": _setup.menuEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir y cerrar navegacion del gobierno de México")])])]), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._m(1)])])]);
};
var SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://www.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('img', {
    staticClass: "nav-logo",
    attrs: {
      "width": "128",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu",
    attrs: {
      "id": "nav_menu_gobmx"
    }
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://coronavirus.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Información sobre COVID-19")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/tramites",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Trámites")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/gobierno",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Gobierno")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/busqueda",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("ir al buscador")]), _c('span', {
    staticClass: "icono-buscar",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=19aa1ecb

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js



//Que el menu se pueda cerrar automaticamente al enfocar otra cosa

/* harmony default export */ var SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiNavegacionGobMx',
  setup(__props) {
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    const navMenuGobMx = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si está en versión móvil
     */
    function agregaAtributoTabIndex() {
      if (window.innerWidth < 768) {
        for (let index = 0; index < navMenuGobMx.value.length; index++) {
          const elemento = navMenuGobMx.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está abierto en móvil, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (window.innerWidth < 768) {
        if (estaAbierto) {
          for (let i = 0; i < navMenuGobMx.value.length; i++) {
            const elemento = navMenuGobMx.value[i]['children'][0];
            elemento.removeAttribute('tabIndex');
          }
        } else {
          for (let j = 0; j < navMenuGobMx.value.length; j++) {
            const elemento = navMenuGobMx.value[j]['children'][0];
            elemento.tabIndex = '-1';
          }
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onMounted)(() => {
      navMenuGobMx.value = document.getElementsByClassName('nav-menu')[0]['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.watch)(menuEstaAbierto, () => {
      actualizaAtributoTabIndex(menuEstaAbierto.value);
    });
    return {
      __sfc: true,
      cuadroElementosMenu,
      menuEstaAbierto,
      alternarMenu,
      navMenuGobMx,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex
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
  SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_render,
  SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionGobMx = (SisdaiNavegacionGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/index.js

const navegacion_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionGobMx', SisdaiNavegacionGobMx);
  }
};
/* harmony default export */ var navegacion_gob_mx = (navegacion_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1915ec7e
var SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor gobmx-fondo-oscuro-1 piepagina-gobmx gobmx-piepagina p-t-4 p-b-10",
    attrs: {
      "aria-label": "Gobierno de México"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('img', {
    staticClass: "foot-logo",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México",
      "width": "200px",
      "height": "60px"
    }
  })]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.participa.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Participa")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/publicaciones",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Publicaciones Oficiales")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "http://www.ordenjuridico.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Marco Jurídico")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Plataforma Nacional de Transparencia")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("¿Qué es gob.mx?")]), _c('p', [_c('span', [_vm._v("Es el portal único de trámites, información y participación ciudadana. ")]), _c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/que-es-gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Leer más")])]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://datos.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Portal de datos abiertos")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/accesibilidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Declaración de accesibilidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/aviso_de_privacidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad integral")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/privacidadsimplificado",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad simplificado")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Términos y Condiciones")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos#medidas-seguridad-informacion",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de seguridad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/sitemap",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Mapa de sitio")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Denuncia contra servidores públicos")])]), _c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "lista-redes-sociales"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx m-r-3",
    attrs: {
      "href": "https://www.facebook.com/gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3",
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
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-x icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x.")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1915ec7e

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1915ec7e&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1915ec7e&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue

var script = {}
;


/* normalize component */

var SisdaiPiePaginaGobMx_component = normalizeComponent(
  script,
  SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_render,
  SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaGobMx = (SisdaiPiePaginaGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/index.js

const pie_pagina_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaGobMx', SisdaiPiePaginaGobMx);
  }
};
/* harmony default export */ var pie_pagina_gob_mx = (pie_pagina_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=830c3a28
var SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor conahcyt-fondo-degradado conahcyt-texto-claro-1 conahcyt-piepagina p-y-4",
    attrs: {
      "aria-label": "Conahcyt"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-8-esc"
  }, [_c('img', {
    staticClass: "foot-logo",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conahcyt-blanco.svg",
      "alt": "Conahcyt",
      "width": "200px",
      "height": "60px"
    }
  }), _c('p', [_vm._v(" Av. Insurgentes Sur 1582, Col. Crédito Constructor,"), _c('br'), _vm._v(" Demarcación Territorial Benito Juárez, C.P. 03940,"), _c('br'), _vm._v(" Ciudad de México Tel: (55) 5322-7700 ")]), _c('p', [_vm._v("©2023 Conahcyt Derechos Reservados en trámite")])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/directorio/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Directorio")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/centro-de-contacto-de-atencion/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Centro de Contacto")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/aviso-de-privacidad/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de Privacidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "http://comunidad.conahcyt.mx/index.php",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Intranet Conahcyt")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "lista-redes-sociales"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://www.facebook.com/ConahcytMX",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://twitter.com/Conahcyt_Mex",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-x icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://www.instagram.com/conahcyt_mex/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-instagram icono-3",
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
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-youtube icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("yutub")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=830c3a28

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=830c3a28&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=830c3a28&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue

var SisdaiPiePaginaConahcyt_script = {}
;


/* normalize component */

var SisdaiPiePaginaConahcyt_component = normalizeComponent(
  SisdaiPiePaginaConahcyt_script,
  SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_render,
  SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaConahcyt = (SisdaiPiePaginaConahcyt_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/index.js

const pie_pagina_conahcyt_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaConahcyt', SisdaiPiePaginaConahcyt);
  }
};
/* harmony default export */ var pie_pagina_conahcyt = (pie_pagina_conahcyt_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=template&id=17e6b268
var SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.entornoProyecto !== 'production' ? _c('div', {
    attrs: {
      "id": "info_despliegue"
    }
  }, [_c('dl', {
    staticClass: "info-entorno"
  }, [_c('dt', [_vm._v("V")]), _c('dd', [_vm._v(_vm._s(_vm.versionProyecto))]), _c('dt', [_vm._v("Ambiente:")]), _c('dd', [_vm._v(_vm._s(_vm.entornoProyecto))]), _c('dt', [_vm._v("Actualización:")]), _c('dd', [_vm._v(_vm._s(_vm.actualizacionProyecto))])])]) : _vm._e();
};
var SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js
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
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue



;


/* normalize component */

var SisdaiInfoDeDespliegue_component = normalizeComponent(
  info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js,
  SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_render,
  SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiInfoDeDespliegue = (SisdaiInfoDeDespliegue_component.exports);
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/index.js

const info_de_despliegue_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiInfoDeDespliegue', SisdaiInfoDeDespliegue);
  }
};
/* harmony default export */ var info_de_despliegue = (info_de_despliegue_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=template&id=62bfe724&scoped=true
var SisdaiModalvue_type_template_id_62bfe724_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_setup.esta_abierto ? _c('div', {
    staticClass: "modal",
    class: _setup.overflowYX
  }, [_c('div', {
    staticClass: "modal-fondo-trasero",
    on: {
      "click": function ($event) {
        return _setup.cerrarModal();
      }
    }
  }), _c('div', {
    staticClass: "modal-contenedor",
    class: _setup.tamanio
  }, [_c('div', {
    staticClass: "modal-encabezado"
  }, [_vm._t("encabezado"), _c('button', {
    staticClass: "btn-icono icono-cerrar modal-cerrar",
    on: {
      "click": function ($event) {
        return _setup.cerrarModal();
      }
    }
  })], 2), _c('div', {
    staticClass: "modal-cuerpo"
  }, [_vm._t("cuerpo")], 2), _c('div', {
    staticClass: "modal-pie"
  }, [_vm._t("pie")], 2)])]) : _vm._e()]);
};
var SisdaiModalvue_type_template_id_62bfe724_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js

const SisdaiModalvue_type_script_setup_true_lang_js_propiedades = {
  tamanio: {
    type: String,
    default: 'chico'
  }
};
/* harmony default export */ var SisdaiModalvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiModal',
  props: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
  setup(__props) {
    const props = __props;
    const esta_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(false);
    const {
      tamanio
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRefs)(props);
    function cerrarModal() {
      esta_abierto.value = false;
      document.querySelector('body').classList.remove('overflow-hidden');
    }
    /* eslint-disable */
    function abrirModal() {
      esta_abierto.value = true;
      document.querySelector('body').classList.add('overflow-hidden');
    }
    function onEscapeKeyUp(event) {
      if (event.which === 27) {
        cerrarModal();
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onBeforeMount)(() => {
      window.addEventListener('keyup', onEscapeKeyUp);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.onBeforeUnmount)(() => {
      window.removeEventListener('keyup', onEscapeKeyUp);
    });
    const overflowYX = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.computed)(() => {
      if (tamanio.value === 'pantalla-completa') {
        return 'overflow-x-y';
      }
      return '';
    });
    return {
      __sfc: true,
      propiedades: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
      esta_abierto,
      props,
      tamanio,
      cerrarModal,
      abrirModal,
      onEscapeKeyUp,
      overflowYX
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var modal_SisdaiModalvue_type_script_setup_true_lang_js = (SisdaiModalvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=62bfe724&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=62bfe724&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue



;


/* normalize component */

var SisdaiModal_component = normalizeComponent(
  modal_SisdaiModalvue_type_script_setup_true_lang_js,
  SisdaiModalvue_type_template_id_62bfe724_scoped_true_render,
  SisdaiModalvue_type_template_id_62bfe724_scoped_true_staticRenderFns,
  false,
  null,
  "62bfe724",
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=template&id=471db523
var SisdaiEnlaceExternovue_type_template_id_471db523_render = function render() {
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
    staticClass: "icono-enlace-externo",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
};
var SisdaiEnlaceExternovue_type_template_id_471db523_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=script&setup=true&lang=js
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
  SisdaiEnlaceExternovue_type_template_id_471db523_render,
  SisdaiEnlaceExternovue_type_template_id_471db523_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e3a3bea-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=template&id=088f7d63
var SisdaiImagenPngWebpvue_type_template_id_088f7d63_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('figure', {
    staticClass: "m-y-2"
  }, [_c('picture', [_c('source', {
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
var SisdaiImagenPngWebpvue_type_template_id_088f7d63_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=script&setup=true&lang=js
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
  SisdaiImagenPngWebpvue_type_template_id_088f7d63_render,
  SisdaiImagenPngWebpvue_type_template_id_088f7d63_staticRenderFns,
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
;// CONCATENATED MODULE: ./src/componentes/index.js














;// CONCATENATED MODULE: external "@popperjs/core"
var core_namespaceObject = require("@popperjs/core");
;// CONCATENATED MODULE: ./src/directivas/tooltips/GloboInformacion.js

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
      classTooltip: 'contenedor-globo-info',
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
      classTooltip: 'contenedor-globo-info-ext',
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
    (0,core_namespaceObject.createPopper)(elementToDesignate, tooltip, {
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
  tooltip.classList.add(classTooltip);
  let contenido = typeof value === 'object' ? value['contenido'] : value;
  tooltip.innerHTML = `<div class="cuerpo-globo-info">${contenido}</div>`;
  //document.body.appendChild(tooltip)
  elemento.parentNode.insertBefore(tooltip, elemento.nextSibling);
  return tooltip;
}
function updateTooltipElement(id, value) {
  //solo se actualiza si existe
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    const tooltip = document.querySelector("[tooltip-id='" + id + "']");
    let contenido = typeof value === 'object' ? value['contenido'] : value;
    tooltip.innerHTML = `<div class="cuerpo">${contenido}</div>`;
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

const tooltips_plugin = {
  install: function (Vue) {
    Vue.directive(globo_informacion.name, globo_informacion);
    Vue.directive(globo_informacion_extendido.name, globo_informacion_extendido);
  }
};
/* harmony default export */ var tooltips = (tooltips_plugin);
;// CONCATENATED MODULE: ./src/directivas/index.js


;// CONCATENATED MODULE: ./src/index.js


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

    //accesibilidad
    Vue.use(menu_accesibilidad);
    Vue.use(imagen_png_webp);

    //auxiliares
    Vue.use(tooltips);
    //otros
    Vue.use(narrativa_scroll);
    Vue.use(boton_flotante);
    Vue.use(modal);
  }
};

/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


module.exports = __webpack_exports__["default"];
/******/ })()
;
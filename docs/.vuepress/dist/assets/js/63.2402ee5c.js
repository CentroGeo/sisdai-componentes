(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{340:function(e,a,o){"use strict";o.r(a);var n=o(1),t=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"indice-de-contenido"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indice-de-contenido"}},[e._v("#")]),e._v(" Índice de contenido")]),e._v(" "),a("p",[e._v("Este componente se utiliza como un menú de navegación para el contenido de una vista. Mediante slots se introducen enlaces, ya sean "),a("code",[e._v("<router-link/>")]),e._v(" o "),a("code",[e._v("<a/>")]),e._v(" cuya ruta sea simplmente un id de algún elemento que exista dentro de la vista en la que se muestra el componente.")]),e._v(" "),a("p",[e._v("Uso:")]),e._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("SisdaiIndiceDeContenido")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" ...contenido "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("SisdaiIndiceDeContenido")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("section",{attrs:{id:"api"}},[a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("h3",{attrs:{id:"propiedades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propiedades"}},[e._v("#")]),e._v(" Propiedades")]),e._v(" "),a("h4",{attrs:{id:"opcionales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opcionales"}},[e._v("#")]),e._v(" Opcionales")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("titulo")]),e._v(": ("),a("em",[e._v("String")]),e._v(") Corresponde al texto que se muestra como encabezado del componente. Por "),a("em",[e._v("default")]),e._v(" tiene el valor 'Contenido'.")]),e._v(" "),a("li",[a("code",[e._v("altura")]),e._v(": ("),a("em",[e._v("Number")]),e._v(") Este valor corresponde al la distancia en pixeles entre la orilla superior de la ventana y el inicio de un elemento de la página a los cuales hacen referencia los enlaces del índice. Al hacer click en uno de los enlaces del índice, el contenido se desplaza de forma que el elemento referenciado coindida con el borde superior de la ventana más esta cantidad "),a("code",[e._v("altura")]),e._v(". Si no se tomara en cuenta esta propiedad, la barra de navegación superior quedaría encima del inicio del elemento seleccionado. Su valor por "),a("em",[e._v("default")]),e._v(" es 50")])]),e._v(" "),a("h3",{attrs:{id:"metodos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metodos"}},[e._v("#")]),e._v(" Métodos")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("autoScrollSuave")]),e._v(" Este metodo selecciona los enlaces del componente y les especifica a que posición se debe mover el documento cuando se clickea un enlace, que es la posición del elemento referenciado menos "),a("code",[e._v("props.altura")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("scroleando")]),e._v(" Cada que se scrolea el documento, se verifica si el límite superior e inferior de algun elemento referenciado coindice con la posición superior de la ventana más "),a("code",[e._v("props.altura")]),e._v(". En caso verdadero, se añade la clase "),a("code",[e._v("link-activo")]),e._v(" al indice asociado al elemento referenciado")]),e._v(" "),a("li",[a("code",[e._v("obtenerRutas")]),e._v(" Obtiene la lista de "),a("code",[e._v("href")]),e._v("s en el índice")])]),e._v(" "),a("h3",{attrs:{id:"slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[e._v("#")]),e._v(" Slots")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("'contenido-indice-de-contenido'")]),e._v(": Este es el único slot que tiene este componente. En él se deben introducir elementos de enlaces como "),a("code",[e._v("<a></a>")]),e._v(" o "),a("code",[e._v("<router-link>")]),e._v(". Los enlaces que se introducen deben contener el id del elemento al que se quiere navegar, y a su vez, este elemento debe existir en el documento.")])])]),e._v(" "),a("section",{attrs:{id:"ejemplos"}},[a("h2",{attrs:{id:"ejemplos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ejemplos"}},[e._v("#")]),e._v(" Ejemplos")]),e._v(" "),a("p",[e._v("Este ejemplo usa enlaces a elementos existentes en el documento. Se ejemplifica usando un elemento "),a("code",[e._v("<router-link>")]),e._v(" y un elemento"),a("code",[e._v("<a></a>")]),e._v(". Al dar click en los enlaces, puedes observar como la vista se desplaza a dichos elementos")]),e._v(" "),a("utils-ejemplo-doc",{attrs:{ruta:"indice-de-contenido/basico.vue"}}),e._v(" "),a("p",[e._v("Este ejemplo es análogo al anterior. La diferencia es que los enlaces se ingresan mediante una lista no ordenada\n"),a("utils-ejemplo-doc",{attrs:{ruta:"indice-de-contenido/lista.vue"}})],1)],1)])}),[],!1,null,null,null);a.default=t.exports}}]);
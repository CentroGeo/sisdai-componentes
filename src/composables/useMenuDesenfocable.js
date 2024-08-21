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

import { onMounted, onUnmounted, ref, watch } from 'vue'

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
 * @property {function} validarNavegacionColapsable valida si la navegación es colapsable o no al ancho de la navegación
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
export function useMenuDesenfocable(
  elementoMenuEnfocable,
  anchoNavegacion = 768
) {
  const menuEstaAbierto = ref(false)

  const submenuEstaAbierto = ref(false)

  const esColapsable = ref(false)

  function updateBlur() {
    //revisar que no tengo foco ningun elemento hijo

    if (menuEstaAbierto.value || submenuEstaAbierto.value) {
      setTimeout(() => {
        if (
          elementoMenuEnfocable.value &&
          !elementoMenuEnfocable.value.contains(document.activeElement)
        ) {
          menuEstaAbierto.value = false
          cerrarSubmenu()
        }
      }, 200)
    }
  }

  onMounted(() => {
    validarNavegacionColapsable()

    if (elementoMenuEnfocable.value)
      elementoMenuEnfocable.value.addEventListener('blur', updateBlur)
  })

  function abrirMenu() {
    menuEstaAbierto.value = true
  }

  function cerrarMenu() {
    menuEstaAbierto.value = false
  }

  function alternarMenu() {
    cerrarSubmenu()
    menuEstaAbierto.value = !menuEstaAbierto.value
  }

  function abrirSubmenu() {
    if (esColapsable.value === false) {
      if (document.querySelector('.nav-submenu')) {
        const navSubmenu = document.querySelector('.nav-submenu')
        const list = navSubmenu.classList
        list.add('abierto')
        menuEstaAbierto.value = false
        submenuEstaAbierto.value = true
      }
    }
  }

  function cerrarSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu')
      const list = navSubmenu.classList
      list.remove('abierto')
      submenuEstaAbierto.value = false
    }
  }

  function alternarSubmenu() {
    submenuEstaAbierto.value = !submenuEstaAbierto.value
    submenuEstaAbierto.value ? abrirSubmenu() : cerrarSubmenu()
  }

  function regresarMenu() {
    cerrarSubmenu()
    abrirMenu()
  }

  function cerrarMenuSubmenu() {
    cerrarMenu()
    cerrarSubmenu()
  }

  /**
   * Valida si la navegación es colapsable o no al ancho de la navegación
   */
  function validarNavegacionColapsable() {
    esColapsable.value = anchoNavegacion > window.innerWidth ? true : false

    window
    .matchMedia(`(min-width: ${anchoNavegacion}px)`)
    .addEventListener('change', ev => (esColapsable.value = !ev.matches))
  }

  watch(
    [menuEstaAbierto, submenuEstaAbierto],
    (menuEstaAbierto, submenuEstaAbierto) => {
      if (menuEstaAbierto || submenuEstaAbierto) {
        if (esColapsable.value) {
          elementoMenuEnfocable.value.focus()
        }
      }
    }
  )

  onUnmounted(() => {
    if (elementoMenuEnfocable.value)
      elementoMenuEnfocable.value.removeEventListener('blur', updateBlur)
  })

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
    regresarMenu,
  }
}

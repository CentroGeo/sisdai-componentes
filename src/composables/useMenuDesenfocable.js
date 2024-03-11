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
export function useMenuDesenfocable(elementoMenuEnfocable) {
  const menuEstaAbierto = ref(false)

  const submenuEstaAbierto = ref(false)

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
    if (menuEstaAbierto.value === false && submenuEstaAbierto.value === true) {
      cerrarSubmenu()
    } else {
      menuEstaAbierto.value = !menuEstaAbierto.value
    }
  }

  function abrirSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu')
      const list = navSubmenu.classList
      list.add('abierto')
      submenuEstaAbierto.value = true
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

  watch(
    [menuEstaAbierto, submenuEstaAbierto],
    (menuEstaAbierto, submenuEstaAbierto) => {
      if (menuEstaAbierto || submenuEstaAbierto) {
        elementoMenuEnfocable.value.focus()
      }
    }
  )

  onUnmounted(() => {
    if (elementoMenuEnfocable.value)
      elementoMenuEnfocable.value.removeEventListener('blur', updateBlur)
  })

  return {
    menuEstaAbierto,
    abrirMenu,
    cerrarMenu,
    alternarMenu,
    alternarSubmenu,
  }
}

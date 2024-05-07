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

import { customRef } from 'vue'

const selectorElementosEnfocables =
  'button, [href], input, select, details, audio, video, textarea, [tabindex]:not([tabindex="-1"])'

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
  let elementosEnfocables = []
  let $primerEnfocable
  let $ultimoEnfocable

  /**
   * Inicializa el focus trap cuando un elemento html (Objeto <dialog />) es asignado
   * como valor y pone `$trapEl = null` si el elemento asignado de referencia es
   * removido del DOM para activar y desactivar el focus trap.
   */
  const trapRef = customRef((track, trigger) => {
    let $trapEl = null
    return {
      get() {
        track()
        return $trapEl
      },
      set(value) {
        $trapEl = value
        value ? iniciaFocusTrap() : terminaFocusTrap()
        trigger()
      },
    }
  })

  /**
   * Revisa si la tecla Tab fue presionada. O si Shift + Tab fue presionado y la usuaria
   * se encuentra en el primer elemento enfocable, entonces el último elemento será
   * enfocado. Sino solo se presionó Tab y la usuaria está en el último elemento
   * enfocable y el primer elemento se enfocará.
   */
  function keyHandler(e) {
    const isTabPressed = e.key === 'Tab'

    if (!isTabPressed) return

    if (e.shiftKey) {
      if (document.activeElement === $primerEnfocable) {
        $ultimoEnfocable.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === $ultimoEnfocable) {
        $primerEnfocable.focus()
        e.preventDefault()
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
    if (!trapRef.value) return
    elementosEnfocables = trapRef.value.querySelectorAll(
      selectorElementosEnfocables
    )
    $primerEnfocable = elementosEnfocables[0]
    $ultimoEnfocable = elementosEnfocables[elementosEnfocables.length - 1]
    document.addEventListener('keydown', keyHandler)
    $primerEnfocable.focus()
  }

  /**
   * Remueve el evento de _keydown_.
   * Es importante limpiar los event listers, pues podrían provocar pérdidas de memoria.
   */
  function terminaFocusTrap() {
    document.removeEventListener('keydown', keyHandler)
  }

  return {
    trapRef,
    iniciaFocusTrap,
    terminaFocusTrap,
  }
}

export default useFocusTrap

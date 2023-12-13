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
import { createPopper } from '@popperjs/core'

const GLOBAL_NAME = '__VTOOLTIP__'

globalThis[GLOBAL_NAME] = globalThis[GLOBAL_NAME] || {}

const globo_informacion = {
  name: 'globo-informacion',
  bind(el, binding) {
    const unique_id = Math.random().toString(36).substring(4)
    el.setAttribute('host-tooltip-id', unique_id)

    const modifiers = binding.modifiers
    const interactable = modifiers['interactivo'] ? true : false

    const placement_es = binding.arg ? binding.arg : 'derecha'
    const placement = getPosicionParaPopper(placement_es)

    let offset = offsetsBase[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset
    }

    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info',
      interactable: interactable,
    }
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id')

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha'
    const placement = getPosicionParaPopper(placement_es)

    let offset = offsetsBase[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset
    }

    const props = globalThis[GLOBAL_NAME][unique_id]

    props.placement = placement
    props.offset = offset
    props.value = binding.value

    updateTooltipElement(unique_id, props.value)
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id')
    const props = globalThis[GLOBAL_NAME][unique_id]
    el.removeEventListener('focusin', props.mouseEnterListener)
    el.removeEventListener('focusout', props.mouseLeaveListener)

    el.removeEventListener('mouseenter', props.mouseEnterListener)
    el.removeEventListener('mouseleave', props.mouseLeaveListener)
  },
}

const globo_informacion_extendido = {
  name: 'globo-informacion-extendido',
  bind(el, binding) {
    const unique_id = 'info-' + Math.random().toString(36).substring(4)
    el.setAttribute('host-tooltip-id', unique_id)

    const modifiers = binding.modifiers
    const interactable = modifiers['interactivo'] ? true : false

    const placement_es = binding.arg ? binding.arg : 'derecha'
    const placement = getPosicionParaPopper(placement_es)

    let offset = offsetsBase[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset
    }

    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info-ext',
      interactable: interactable,
    }
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id')

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha'
    const placement = getPosicionParaPopper(placement_es)

    let offset = offsetsBase[placement.split('-')[0]]
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset
    }

    const props = globalThis[GLOBAL_NAME][unique_id]

    props.placement = placement
    props.offset = offset
    props.value = binding.value

    updateTooltipElement(unique_id, props.value)
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id')
    const props = globalThis[GLOBAL_NAME][unique_id]
    el.removeEventListener('focusin', props.mouseEnterListener)
    el.removeEventListener('focusout', props.mouseLeaveListener)

    el.removeEventListener('mouseenter', props.mouseEnterListener)
    el.removeEventListener('mouseleave', props.mouseLeaveListener)
  },
}

const addMouseEnterListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps =
      globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id]

    //revisar que no exista un timer para limpiar el toltip, si no cancelarlo, ya que esta funcion creara otro
    if ('timerToClear' in globalProps) {
      cancelTimerToRemove(globalProps)
      return
    }

    removeAllTooltips()
    const tooltip = getTooltipElement(
      unique_id,
      globalProps.value,
      globalProps.classTooltip,
      el
    )

    let elementToDesignate = el
    if (typeof globalProps.value === 'object') {
      elementToDesignate = globalProps.value['asignadoAElemento']
        ? document.querySelector(globalProps.value['asignadoAElemento'])
        : el
    }

    createPopper(elementToDesignate, tooltip, {
      placement: globalProps.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: globalProps.offset,
          },
        },
      ],
    })
  }
  el.addEventListener('focus', fn)
  el.addEventListener('mouseenter', fn)
  return fn
}

const addMouseLeaveListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps =
      globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id]
    //const tooltip = getTooltipElement(unique_id,globalProps.value, globalProps.classTooltip)

    if (globalProps.interactable) {
      waitToRemoveTooltip(unique_id)
      const tooltip = getTooltipElement(
        unique_id,
        globalProps.value,
        globalProps.classTooltip,
        el
      )
      tooltip.addEventListener('focusin', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps)
      })
      tooltip.addEventListener('focusout', () => {
        //console.log("listener invocado");
        waitToRemoveTooltip(unique_id, 500)
      })

      tooltip.addEventListener('mouseenter', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps)
      })
      tooltip.addEventListener('mouseleave', () => {
        waitToRemoveTooltip(unique_id, 500)
        //removeTooltip(unique_id)
      })

      return
    }

    removeTooltip(unique_id)
  }
  el.addEventListener('mouseleave', fn)
  el.addEventListener('focusout', fn)

  return fn
}

/**
 * Espera antes de remover un tooltip, 1 segundo de tiempo por default
 * @param {*} unique_id identificador del tooltip
 * @param {number} ms 1000 milisegundos
 */
const waitToRemoveTooltip = (unique_id, ms = 1000) => {
  const globalProps =
    globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id]
  cancelTimerToRemove(globalProps)
  const timer = setTimeout(() => {
    removeTooltip(unique_id)
    delete globalProps['timerToClear']
  }, ms)
  globalProps['timerToClear'] = timer
}

const cancelTimerToRemove = propsOfTooltip => {
  if ('timerToClear' in propsOfTooltip) {
    //console.log("cancelando el removido porque volvio a entrar")
    const timer = propsOfTooltip['timerToClear']
    clearTimeout(timer)
    delete propsOfTooltip['timerToClear']
    //return
  }
}

const removeTooltip = unique_id => {
  if (document.querySelector("[tooltip-id='" + unique_id + "']") !== null) {
    document.querySelector("[tooltip-id='" + unique_id + "']").remove()
  }
}

const removeAllTooltips = () => {
  const tooltips = globalThis.document.querySelectorAll('[tooltip-id]')
  tooltips.forEach(tooltip => {
    const id = tooltip.getAttribute('tooltip-id')
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][id]

    cancelTimerToRemove(globalProps)
    tooltip.remove()
  })
}

/**
 *  Create if not exists
 * @param {string} id
 * @param {object} value
 * @param {string} classTooltip
 * @returns
 */

function getTooltipElement(id, value, classTooltip, elemento) {
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    return document.querySelector("[tooltip-id='" + id + "']")
  }
  //crearlo
  const tooltip = document.createElement('div')
  tooltip.setAttribute('tooltip-id', id)

  tooltip.classList.add(classTooltip)
  let contenido = typeof value === 'object' ? value['contenido'] : value
  tooltip.innerHTML = `<div class="cuerpo-globo-info">${contenido}</div>`
  //document.body.appendChild(tooltip)
  elemento.parentNode.insertBefore(tooltip, elemento.nextSibling)
  return tooltip
}

function updateTooltipElement(id, value) {
  //solo se actualiza si existe
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    const tooltip = document.querySelector("[tooltip-id='" + id + "']")
    let contenido = typeof value === 'object' ? value['contenido'] : value
    tooltip.innerHTML = `<div class="cuerpo">${contenido}</div>`
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
  final: 'end',
}

function getPosicionParaPopper(posicion_es) {
  return posiciones_espanol[posicion_es]
}

const offsetsBase = {
  top: [0, 8],
  bottom: [0, 8],
  right: [0, 8],
  left: [0, 8],
}

export { globo_informacion, globo_informacion_extendido }

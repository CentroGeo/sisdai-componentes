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
export default [
  {
    accion: 'alternarTipografiaAccesible',
    claseCss: 'a11y-tipografia',
    icono: 'pictograma-cambio-tipografia',
    titulo: 'Cambio de fuente',
  },
  {
    accion: 'alternarEnlacesSubrayados',
    claseCss: 'a11y-hipervinculos',
    icono: 'pictograma-enlace-subrayado',
    titulo: 'Enlaces subrayados',
  },
  {
    accion: 'alternarVistaSimplificada',
    claseCss: 'a11y-simplificada',
    icono: 'pictograma-vista-simplificada',
    titulo: 'Mostrar solo texto',
  },
  {
    accion: 'alternarVistaOscura',
    claseCss: 'a11y-oscura',
    icono: 'pictograma-contraste',
    titulo: 'Vista Oscura',
  },
]

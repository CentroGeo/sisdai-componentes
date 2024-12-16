# Changelog

Todos los cambios más importantes de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0)
y este proyecto se adhiere al [Versionamiento semántico](https://semver.org/spec/v2.0.0.html).

*Nota: Este Changelog se comenzó el 2024-10-28. Se documentaron hacia atrás los cambios más relevantes
de la biblioteca. Por lo tanto no se listan aquí todos los tags existentes.

Al principio de cada entrada se lista la versión de la biblioteca de sisdai-css con la
que la versión indicada de sisdai-componentes es compatible y tiene instalada.

## [4.12.0] - 2024-12-16

### Agregado (Added)

- Se agrega el componente SisdaiPestanias

## [4.11.0] - 2024-12-16

### Agregado (Added)

- Se agregaron metadatos de información para compartir la página de documentación.
- Se agregaron variables de entorno.

### Fixed (Changed)

- Se ajustó la orientación de las tarjetas del inicio.
- Se ajustaron rutas de imágenes.

## [4.10.2] - 2024-12-12

### Arreglado (Fixed)

- Se recupera la documentación del vitepress en las secciones de Instalación y Uso de componentes
- Se arregla la propiedad indefinida item en el Ìndice de contenido en el Layout

## [4.10.1] - 2024-12-13

### Arreglado (Fixed)

- Se arreglo la ruta hacia los componentes area-texto, boton-radio, campo-base, casilla-verificacion y selector

## [4.10.0] - 2024-12-12

### Cambiado (Changed)

- Se actualiza sisdai-css v1.7.2

## [4.9.0] - 2024-12-12

### Cambiado (Changed)

- Se actualiza maqueta de documentación

## [4.8.0] - 2024-11-29

### Agregado (Added)

- Se agrega el componente SisdaiBotonRadio y SisdaiBotonesRadioGrupo para mejorar la accesibilidad en elementos de botones de radio para formularios

## [4.7.0] - 2024-11-29

### Agregado (Added)

- Se agrega el componente SisdaiCasillaVerificacion y SisdaiCasillasVerificacionGrupo para mejorar la accesibilidad en elementos de casillas de verificación

## [4.6.1] - 2024-11-29

sisdai-css v1.5.0

### Cambiado (Changed)

- Cambiamos algunas partes de la documentación para especificar que la importación debe ser de `@centrogeomx/sisdai-componentes` en lugar de `sisdai-componentes`.
- Se agregó la clase css 'pie-logo' a las imágenes de los pies para que evitar que se oculten al activar Mostrar solo texto en el menú de accesibilidad.
- Se actualizó la versión de `sisdai-css` a la v1.5.0

## [4.6.0] - 2024-11-25

### Agregado (Added)

- Se agrega el componente SisdaiSelector para mejorar uso del elemento selector del formulario

## [4.5.0] - 2024-11-25

### Agregado (Added)

- Se agrega el componente SisdaiAreaTexto para uso del elemento de campo de texto del formulario

## [4.4.0] - 2024-11-25

### Agregado (Added)

- Se agrega el componente SisdaiCampoBase para uso general de la mayoría de los campos del formulario

## [4.3.2] - 2024-11-21

## Arreglado (Fixed)

- Url del repositorio de npm de la biblioteca en el README.md

## [4.3.1] - 2024-11-21

### Cambiado (Changed)

- El nombre del proyecto en el `package.json` pasa a ser @centrogeomx/sisdai-componentes para su publicación en el repositorio de npm
- Se ajusta documentación de acuerdo a lo anterior

## [4.3.0] - 2024-11-20

### Agregado (Added)

- Pruebas unitarias para componentes, composables y store

## [4.2.2] - 2024-11-06

Arreglado (Fixed)

- Se cambia la manera en la que se configura el id de matomo para las analíticas

## [4.2.1] - 2024-11-06

### Agregado (Added)

- Enlace externo de _IR A SISDAI_ en la navegación principa, que va al portal del Sisdai

### Cambiado (Changed)

- Se quita aviso de documentación en construcción ya que no es relevante para las personas desarrolladoras usuarias de esta biblioteca

## [4.2.0] - 2024-11-04

### Agregado (Added)

- Script y archivos de variable de entorno para seguimiento de analíticas en Matomo

## [4.1.6] - 2024-11-04

### Agregado (Added)

- Se agrega aviso de que la documentación se encuentra en construcción para poderla desplegar en una versión "beta"

### Cambiado (Changed)

- La pestaña del navegador decía SISDAI-COMPONENTES. Se corrige a sisdai-componentes

## [4.1.5] - 2024-10-22

sisdai-css v1.3.3

### Cambiado (Changed)

- Acomodo de los ejemplos con contenedor de pantalla simulada para menu de accesibilidad e info de despliegue

### Agregado (Added)

- Perfil eni

## [4.1.0] - 2024-10-15 - Release

A partir de esta versión contiene la dentidad gráfica del gobierno federal para el periodo 2024-2030

sisdai-css v1.3.0 ó v1.3.1

### Cambiado (Changed)

- Nueva identidad gráfica con colores institucionales del Gobierno de México para el periodo 2024-2030

## [4.0.0] - 2024-10-07 - Release

Contiene la dentidad gráfica deprecada del gobierno federal para el periodo 2018-2024

sisdai.css v1.2.6 ó v1.2.7

### Cambiado (Changed)

- Biblioteca refactorizada a Vue 3
- Actualización de versión de sisdai-css a v1.2.6
- Actualización de dependencias para tener compatibilidad con Vue 3
- Actualización de aria-label
- Homologación de estilos de selectores para pruebas unitarias

### Agregado (Added)

- Pruebas unitarias para composables
- Pruebas unitarias para componente `MenuAccesibilidad`
- Pruebas unitarias para componente `SisdaiModal`
- Pruebas unitarias para componente `SisdaiNavegacion`
- Pruebas unitarias para componente `CampoBusqueda` con emits y eventos asíncronos
- Pruebas unitarias para store de accesibilidad en Pinia
- Componentes de Pie de página
- Componentes de Barra de navegación
- Componente de Narrativa
- Componente de modal
- Componente de control deslizante
- Componente de control para acercar y alejar
- Componente campo de búsqueda

### Eliminado (Removed)

- Componente de Narrativa Scroll

## [3.2.1] - 2024-10-21 - Release

### Cambiado (Changed)

Versiones deprecadas de Vue 2 con la identidad gráfica del gobierno federal
para el periodo 2024-2030

sisdai-css v1.3.1. ó v1.3.2

### Cambiado (Changed)

- Corrección de errores de Sass

## [3.1.5] - 2024-09-23

Versiones deprecadas de Vue 2 con la identidad gráfica del gobierno federal
para el periodo 2018-2024

sisdai-css v1.2.7

## [3.0.0] - 2024-07-08 - Release

sisdai-css v1.0.4

### Cambiado (Changed)

- Refactorización en base a la versión v1.0.0 de sisdai-componentes, que incluye refactorización de color y nombres de clases
- Refactorización de las clases de estilo css
- Actualización de la plantilla de vuepress a estos cambios
- Mejora de la accesibilidad en los componentes

### Agreagado (Added)

- Implementación del nuevo modelo de color
- Licencias

## [2.0.0] - 2023-04-18 - Release

sisdai-css v0.37.3

Segunda versión estable

## [1.0.0] - 2023-04-04 - Release

sisdai-css v0.37.3

Primera versión estable
[4.12.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.11.0...v4.12.0
[4.11.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.10.2...v4.11.0
[4.10.2]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.10.1...v4.10.2
[4.10.1]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.10.0...v4.10.1
[4.10.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.9.0...v4.10.0
[4.9.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.8.0...v4.9.0
[4.8.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.7.0...v4.8.0
[4.7.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.6.1...v4.7.0
[4.6.1]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.6.0...v4.6.1
[4.6.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.5.0...v4.6.0
[4.5.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.4.0...v4.5.0
[4.4.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.3.2...v4.4.0
[4.3.2]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.3.1...v4.3.2
[4.3.1]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.2.1...v4.3.1
[4.2.1]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.2.0...v4.2.1
[4.2.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.1.6...v4.2.0
[4.1.6]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.1.5...v4.1.6
[4.1.5]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.1.0...v4.1.5
[4.1.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.0.0...v4.1.0
[4.0.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v4.0.0...v3.2.1
[3.2.1]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v3.1.5...v3.2.1
[3.1.5]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v3.0.0...v3.1.5
[3.0.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v2.0.0...v3.0.0
[2.0.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/compare/v1.0.0...v2.0.0
[1.0.0]: https://codigo.conahcyt.mx/sisdai/sisdai-componentes/-/releases/v1.0.0

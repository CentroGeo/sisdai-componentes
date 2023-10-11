---
layout: LayoutDocumentacion
---

# Modal

Este Modal desactiva el contenido y las acciones principales para colocar un
contenedor encima de estos que requiera toda la atención y acción de la
persona usuaria. El contenido y la navegación principal se reactivan una
vez que la persona usuaria acepte, cancele o concluya la tarea que le
demanda el componente modal.

Los elementos básicos de un modal son el **contenedor**, **la capa de transparencia** y **el botón de salir**.

Para utilizar el componente basta con copiar y pegar el código html a
continuación y designar una etiqueta que active la función de abrir el
modal como un botón o elemento clickeable.

Uso:

```html
<SisdaiModal ref="nombre_modal"></SisdaiModal>

<button @click="abreModal()">Abrir Modal</button>
```

Es importante colocar la clase `.overflow-hidden` con la propiedad _overflow_ en _hidden_ en la hoja de estilo css
principal de la aplicación o en el App.vue

<section id="api">

## API

### Propiedades

- **ref**
  Referencia del
  componente para acceder al método abrirModal mediante el evento de
  click.

  - Tipo: `String`
  - Requerido: si

- **tamanio**
  Tamaño del contenedor del modal: _chico, mediano, grande o pantalla-completa_. Por defecto usa el tamaño chico.

  - Tipo: `String`
  - Valor predeterminado: `chico`

### Metodos

- **abrirModal**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Botón flotante.

### Eventos

Este componente no dispara eventos externos

### Slots

Este componente no permite contenido con slots

</section>

<section id="ejemplos">

## Ejemplos

El ancho del modal en versión móvil es del 100% de la pantalla y el alto
es proporcional al contenido del mismo.

Utiliza el modal en los siguientes casos:

- **Entregar información crítica a la persona usuaria**

  - Notifica a la persona usuaria de acciones críticas o posibles
    errores que afecten su flujo de trabajo y que
    **requieran atención inmediata**, por ejemplo si la persona ha
    olvidado guardar los cambios.
  - En estos casos, no se incluye el botón de cerrar, puesto que la
    persona usuaria tiene que decidir una acción concreta a realizar.
  - El mensaje debe ser claro sobre la situación y las acciones que debe
    realizar la persona usuaria.
  - Ofrece opciones de acción a través botones que le permitan a la
    persona usuaria decidir, por ejemplo un botón de “guardar cambios”,
    “no guardar” y “cancelar”.

- **Visualizar imágenes a detalle**

  - Al activar el modal, la imagen debe verse en pantalla completa y su
    tamaño de presentación debe ser más grande que su versión
    predeterminada.
  - No todas las imágenes deben desencadenar un modal, solo aquellas
    imágenes que por sus características requieran una visualización a
    detalle, por ejemplo imágenes de mapas.

- **Realizar tareas dentro de un flujo de trabajo**
  - Usa el modal para fragmentar flujos de trabajo complejos en tareas o
    pasos más pequeños. Por ejemplo, actividades como importar o
    exportar archivos.
  - Las tareas a desarrollar en el modal deben tener un inicio y fin
    claros.
  - Al finalizar la tarea o cerrar el modal, la persona usuaria debe
    regresar a la pantalla en la que se encontraba inicialmente.

#### Uso básico

Los elementos a disponer en cada parte del modal pueden variar de acuerdo
con la función y el contexto de este. Es decir, el modal puede contener
diferentes componentes tales como carruseles de imágenes, botones de
acción, campos de texto, opciones de selección, entre otros.

<utils-ejemplo-doc ruta="modal/basico.vue"/>

#### Modal chico

Dentro de las etiquetas `<SisdaiModal></SisdaiModal>` se incluyen tres slots de vue (encabezado, cuerpo y pie) para colocar
contenido html. Se recomienda utilizar el slot de cuerpo para colocar el
contenido deseado. A continuación se presentan algunos ejemplos con
contenido.

<utils-ejemplo-doc ruta="modal/chico.vue"/>

#### Modal mediano

<utils-ejemplo-doc ruta="modal/mediano.vue"/>

#### Modal grande

<utils-ejemplo-doc ruta="modal/grande.vue"/>

#### Pantalla grande

Para ejemplificar el caso uso 2 se presentan dos propuestas con contenido
para un modal de pantalla grande.

<utils-ejemplo-doc ruta="modal/pantalla-grande.vue"/>

#### Pantalla completa

<utils-ejemplo-doc ruta="modal/pantalla-completa.vue"/>

## Mejores prácticas

- Evita el scroll en el modal, si el contenido excede la altura de la
  pantalla es posible que se deba repensar el uso del modal.
- Utiliza el modal con precaución. El modal es un componente que genera
  una interrupción en la experiencia de usuario, por lo que su uso debe
  ser justificado.

### Salir del modal

Para salir del modal, la persona usuaria puede:

- Dar clic sobre el botón de salir (icono de tache) ubicado en la esquina
  superior derecha de los modales.
- Presionar la tecla ESC.
- Dar clic fuera del modal.

## Vista simplificada

En la vista simplificada, los modales funcionan de la misma forma como lo
hacen en la vista predeterminada. Solo el modal para visualizar imágenes a
detalle no se utiliza, ya que en la vista simplificada no se muestran
imágenes.

</section>

---
layout: LayoutDocumentacion
---

# Modal

Este componente desactiva el contenido y las acciones principales para colocar un contenedor encima de estos que requiera toda la tención y acción de la persona usuaria.

Uso:

```html
<SisdaiModal ref="sisdaiModal"> ...contenido </SisdaiModal>

<!-- Botón que acciona el modal -->
<button @click="sisdaiModal?.abrirModal()">Abrir Modal</button>
```

Es importante colocar la clase `.overflow-hidden` con la propiedad _overflow_ en _hidden_ en la hoja de estilo css
principal de la aplicación o en el App.vue

<section id="api">

## API

### Propiedades

- **ref**
  Referencia del
  componente para acceder al método abrirModal y cerrarModal mediante el evento de
  click.

  - Tipo: `String`
  - Requerido: si

- **tamanioModal**
  Tamaño del contenedor del modal: _chico, grande o pantalla-completa_. Por defecto usa el tamaño chico.

  - Tipo: `String`
  - Valor predeterminado: `chico`

### Metodos

- **abrirModal**
  Abre el modal y agrega la clase .overflow-hidden al elemento body del documento.

- **cerrarModal**
  Cierra el modal y remueve la clase .overflow-hidden al elemento body del documento.

### Eventos

Este componente no dispara eventos externos

### Slots

#### default

- Requerido: si

Slot para el contenido del modal, son los elementos de formulario u otros para filtrar la información requerida para una petición de orden o instrucción.

</section>

<section id="ejemplos">

## Ejemplos

#### Uso básico

<utils-ejemplo-doc ruta="modal/basico.vue"/>

#### Modal grande

<utils-ejemplo-doc ruta="modal/grande.vue"/>

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

---
layout: LayoutDocumentacion
---

# BotonFlotante

Este Botón flotante permite tener enlaces externos en todas las vistas del sitio, posicionado como un elemento `fixed` en el esquina inferior izquierda.

Uso:

```html
<SisdaiBotonFlotante :enlaces="[...]" />
```

<section id="api">

## API

### Propiedades

- **enlaces**
  Lista de enlaces que se mostrarán en el Botón flotante abierto, cada opción debe ser un objeto con los siguientes atributos:

  ```js
  {
    clasesCss: <String> 'Nombre de la clase css de la opción.',
    contenido: <String> 'Contenido en texto que se mostrará en la interfaz.',
    enlace: <String> 'Dirección url a la que dirigirá el botón.',
    icono: <String> 'Visible al costado izquierdo del contenido.',
  }
  ```

  - Tipo: `Array`
  - Valor predeterminado: `[]`
  - Requerido: si

### Métodos

- **alternarEstado**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Botón flotante.

### Eventos

Este componente no dispara eventos externos

### Slots

Este componente no permite contenido con slots

</section>

<section id="ejemplos">

## Ejemplos

#### Enlaces con fondo de color

El color de fondo de cada enlace es transparente por defecto, si se desea agregar un color, se puede sobreescribir el estilo agregando una clase en cada elemento de la siguiente manera.

<utils-ejemplo-doc ruta="boton-flotante/basico.vue"/>

#### Enlace con documento resaltado

Para este ejemplo se hace uso de la clase `icono-resaltado` la cual ejecuta la animación `animacionResaltada` para resaltar el icono asignado.

<utils-ejemplo-doc ruta="boton-flotante/decreto.vue"/>

</section>

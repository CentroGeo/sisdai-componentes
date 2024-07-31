<script setup>
import EjemploChico from "../../.vitepress/components/modal/chico.vue";
import EjemploGrande from "../../.vitepress/components/modal/grande.vue";
</script>

# Modal

El componente `SisdaiModal` interrumpe el contenido y las interacciones principales de la página para colocar un elemento HTML `<dialog/>` de tipo modal encima que requiere toda la atención y acción de la persona usuaria. Consulte la [sección del elemento dialog](https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog) para más información.

<section id="uso">

## Uso

Para utilizar el componente , incorpora en tu plantilla y coloca el contenido que deseas mostrar dentro del modal. Puedes controlar la apertura del modal mediante una referencia al componente y un método de apertura. A continuación, se muestra un ejemplo de etiqueta simple:

```html
<SisdaiModal ref="sisdaiModal"> ...contenido </SisdaiModal>
```

Botón que acciona el modal:

```html
<button @click="sisdaiModal?.abrirModal()">Abrir Modal</button>
```

Es importante colocar la clase `.overflow-hidden` con la propiedad _overflow_ en _hidden_ en la hoja de estilo CSS principal de la aplicación o en el body para interrumpir el desplazamiento (scroll) con el resto de la página.

```css
/* css */
.overflow-hidden {
  overflow: hidden;
}
```

Vista simplificada

En la vista simplificada, el componente `SisdaiModal` funciona de la misma forma como lo hacen en la vista predeterminada. Solo el modal para visualizar imágenes a detalle no se utiliza, ya que en la vista simplificada no se muestran imágenes.

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades, métodos y slots:

### Propiedades

- `ref`: referencia del componente para acceder al método abrirModal y cerrarModal mediante el evento de clic.
  - Tipo: `String`
  - Requerido: sí
- `tamanioModal`: se puede elegir entre un tamaño grande del modal.
  - Tipo: `String`
  - Requerido: no

### Métodos

- **abrirModal:** abre el modal y agrega la clase .overflow-hidden al elemento body del documento.
- **cerrarModal:** cierra el modal y remueve la clase .overflow-hidden al elemento body del documento.
- **siPresionaTeclaEscape:** si la tecla ESC es presionada se remueve la clase .overflow-hidden al elemento body del documento.
- **clickFueraDelModal:** si la persona usuaria da clic fuera del modal mientras este esté abierto, este se cerrará.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'encabezado'`: en este se indica el título del modal.
- `'cuerpo'`: en este se indica el cuerpo del modal.
- `'pie'`: en este se indican los elementos de pie del modal, como botones.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Uso básico

Su ancho máximo es de 462 px equivalentes a 6 columnas.

<!-- <utils-ejemplo-doc ruta="modal/chico.vue"/> -->
<EjemploChico />
<<< @/.vitepress/components/modal/chico.vue

#### Modal grande

Su ancho máximo es de 1110 px equivalentes a 14 columnas.

<!-- <utils-ejemplo-doc ruta="modal/grande.vue"/> -->
<EjemploGrande />
<<< @/.vitepress/components/modal/grande.vue

## Mejores prácticas

- Evita el desplazamiento (scroll) en el modal: si el contenido excede la altura de la pantalla, es posible que se deba repensar el uso del modal.
- Utiliza el modal con precaución: el modal es un componente que genera una interrupción en la experiencia de la persona usuaria , por lo que su uso debe ser justificado.

### Salir del modal

Para salir del modal, la persona usuaria puede:

- Dar clic sobre el botón de salir (ícono de tache) ubicado en la esquina superior derecha de los modales.
- Presionar la tecla ESC.
- Dar clic fuera del modal.

</section>

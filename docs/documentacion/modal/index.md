<script setup>
import EjemploChico from "../../.vitepress/components/modal/chico.vue";
import EjemploGrande from "../../.vitepress/components/modal/grande.vue";
</script>

# Modal

Este componente interrumpe el contenido y las interacciones principales de la página para colocar un elemento html `<dialog/>` de tipo modal encima que requiera toda la atención y acción de la persona usuaria.

Consulte la [sección del elemento dialog](https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog) para más información.

Uso:

```html
<SisdaiModal ref="sisdaiModal"> ...contenido </SisdaiModal>

<!-- Botón que acciona el modal -->
<button @click="sisdaiModal?.abrirModal()">Abrir Modal</button>
```

Es importante colocar la clase `.overflow-hidden` con la propiedad _overflow_ en _hidden_ en la hoja de estilo css
principal de la aplicación o en el body para interrumpir el scroll con el resto de la página.

```css
/* css */
.overflow-hidden {
  overflow: hidden;
}
```

<section id="api">

## API

### Propiedades

- `ref` Referencia del
  componente para acceder al método abrirModal y cerrarModal mediante el evento de
  click.
  - Tipo: `String`
  - Requerido: si
- `tituloModal` Título del modal, se pueden utilizar elementos html mediante la props dinámica. Se requiere para que los lectores de pantalla lo lean.
  - Tipo: `String`
  - Valor predeterminado: ``
- `tamanioModal` Se puede elegir entre un tamaño grande del modal.
  - Tipo: `String`
  - Requerido: no

### Métodos

- `abrirModal` Abre el modal y agrega la clase .overflow-hidden al elemento body del documento.
- `cerrarModal` Cierra el modal y remueve la clase .overflow-hidden al elemento body del documento.
- `siPresionaTeclaEscape` Si la tecla _Esc_ es presionada se remueve la clase .overflow-hidden al elemento body del documento.
- `clickFueraDelModal` Si la usuaria da click fuera del modal mientras este esté abierto, este se cerrará.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'cuerpo'`: En este se indica el cuerpo del modal.
- `'pie'`: En este se indican los elementos de pie del modal como botones.

</section>

<section id="ejemplos">

## Ejemplos

#### Uso básico

Su ancho máximo es de 462px equivalentes a 6 columnas.

<!-- <utils-ejemplo-doc ruta="modal/chico.vue"/> -->
<EjemploChico />
<<< @/.vitepress/components/modal/chico.vue

#### Modal grande

Su ancho máximo es de 1110px equivalentes a 14 columnas.

<!-- <utils-ejemplo-doc ruta="modal/grande.vue"/> -->
<EjemploGrande />
<<< @/.vitepress/components/modal/grande.vue

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

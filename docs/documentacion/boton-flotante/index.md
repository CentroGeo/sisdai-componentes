<script setup>
import EjemploBasico from "../../.vitepress/components/boton-flotante/basico.vue";
</script>

# Botón flotante <span class="etiqueta">preliminar</span>

El componente `SisdaiBotonFlotante` permite tener enlaces externos en todas las vistas del sitio, posicionado como un elemento fijo en la esquina inferior izquierda.

<section id="uso">

## Uso

El componente `SisdaiBotonFlotante` se utiliza para agregar enlaces externos que estarán disponibles en todas las vistas del sitio web. Puedes especificar los enlaces mediante la propiedad enlaces, que debe ser un array de objetos con las propiedades `clasesCss`, `contenido` y `enlace`. A continuación, se muestra un ejemplo de uso de etiqueta simple:

```html
<SisdaiBotonFlotante :enlaces="[...]" />
```

</section>

<section id="api">

## API

Este componente admite las siguientes propiedades y métodos:

### Propiedades

- `enlaces`: indica la lista de enlaces que serán mostrados en el botón flotante. Cada enlace debe ser un objeto con los atributos especificados a continuación.
  - Tipo: `Array<Object>`
  - Valor predeterminado: `[]`
  - Requerido: sí
- `botonFlotanteAbierto`: indica si el Botón flotante estará abierto o cerrado inicialmente.
  - Tipo: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no

Cada opción del array `enlaces` debe tener los siguientes atributos:

```js
{
  clasesCss: <String> 'Nombre de la clase css de la opción.',
  contenido: <String> 'Contenido en texto que se mostrará en la interfaz.',
  enlace: <String> 'Dirección url a la que dirigirá el botón.',
  icono: <String> 'Visible al costado izquierdo del contenido.',
}
```

### Métodos

- **alternarEstado:**
  cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del botón flotante.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

En este ejemplo, se muestran dos enlaces en el botón flotante:

<!-- <EjemploDoc ruta="boton-flotante/decreto.vue" /> -->
<EjemploBasico />
<<< @/.vitepress/components/boton-flotante/basico.vue

</section>

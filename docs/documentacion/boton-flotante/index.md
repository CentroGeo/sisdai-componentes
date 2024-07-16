<script setup>
import EjemploBasico from "../../.vitepress/components/boton-flotante/basico.vue";
</script>

# Botón flotante <span class="etiqueta">preliminar</span>

Este Botón flotante permite tener enlaces externos en todas las vistas del sitio, posicionado como un elemento `fixed` en el esquina inferior izquierda.

Uso:

```html
<SisdaiBotonFlotante :enlaces="[...]" />
```

<section id="api">

## API

### Propiedades

- `enlaces` Lista de enlaces que se mostrarán en el Botón flotante abierto.
  - Tipo: `Array<Object>`
  - Valor predeterminado: `[]`
  - Requerido: si
- `botonFlotanteAbierto` Indica si el Botón flotante estará abierto o no.
  - Tipo: `Boolean`
  - Valor predeterminado: `false`
  - Requerido: no

Cada opción debe ser un objeto con los siguientes atributos:

```js
{
  clasesCss: <String> 'Nombre de la clase css de la opción.',
  contenido: <String> 'Contenido en texto que se mostrará en la interfaz.',
  enlace: <String> 'Dirección url a la que dirigirá el botón.',
  icono: <String> 'Visible al costado izquierdo del contenido.',
}
```

### Métodos

- **alternarEstado**
  Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del Botón flotante.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no permite contenido con slots.

</section>

<section id="ejemplos">

## Ejemplos

<!-- <EjemploDoc ruta="boton-flotante/decreto.vue" /> -->
<EjemploBasico />
<<< @/.vitepress/components/boton-flotante/basico.vue

</section>

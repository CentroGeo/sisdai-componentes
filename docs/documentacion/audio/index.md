---
layout: LayoutDocumentacion
sectionName: audio
---

# Audio

Este componente permite reproducir audios en el navegador. Incluye un slot llamado "encabezado" para agregar información sobre el archivo, así como diversos controles de reproducción.

Uso:

```html
<SisdaiAudio archivo="" />
```

<section id="api">

## API

### Propiedades

- `archivo` Esta propiedad indica la ruta del archivo del audio. Es importante que si éste se consume de una url remota, el archivo cuente con los permisos de reproducción necesarios.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: si

### Métodos

- `metadatosCargados`
  Esta función se ejecuta al cargar los métadados. Una vez que ésto ocurre se obtiene la duración del audio y se muestra dicha duración.
- `actualizacionTiempo`
  Esta función se ejecuta conforme se actualiza el tiempo de la reproducción del audio. Cuando ésto ocurre se muestra actualiza el texto del tiempo transcurrido y los estilos del input[type='range']. También se actualiza la información del audio descargado.
- `adelanta10`
  Adelanta el el audio 10 segundos
- `retrasa10`
  Retrasa el audio 10 segundos.

### Eventos

Este componente no dispara eventos externos

### Slots

Este componente no permite contenido con slots

- `'encabezado'`: Este es el único slot que contiene el componente. Permite agregar contenido arriba de los controles de audio y se suele usar para proporcionar información sobre el archivo.

</section>

<section id="ejemplos">

## Ejemplos

### Ejemplo básico

Únicamente se indica la ruta del archivo.

<utils-ejemplo-doc ruta="audio/basico.vue"/>

### Ejemplo con slot

Agregando el slot de encabezado.

<utils-ejemplo-doc ruta="audio/con-slot.vue"/>

</section>

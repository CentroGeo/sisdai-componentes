<script setup>
import EjemploBasico from "../../.vitepress/components/audio/basico.vue";
import EjemploConSlot from "../../.vitepress/components/audio/con-slot.vue";
</script>

# Audio

El componente `SisdaiAudio` permite reproducir audios en el navegador. El componente incluye diversos controles de reproducción.

<section id="uso">

## Uso

El componente `SisdaiAudio` permite reproducir un archivo de audio especificado mediante la propiedad archivo. Puedes incluir información adicional sobre el archivo utilizando el slot `encabezado`. A continuación, se muestra un ejemplo de uso con etiqueta simple:

```html
<SisdaiAudio archivo="" />
```

Vista simplificada

En la vista simplificada el componente `SisdaiAudio` no se modifica en diseño ni en comportamiento.

</section>

<section id="api">

## API

### Propiedades

Este componente admite las siguientes propiedades, métodos y slots:

- `archivo`: esta propiedad indica la ruta del archivo del audio. Es importante que si este se consume de una URL remota, el archivo cuente con los permisos de reproducción necesarios.
  - Tipo: `String`
  - Valor predeterminado: `''`
  - Requerido: sí

### Métodos

- **metadatosCargados:**
  Esta función se ejecuta al cargar los metadatos. Una vez que esto ocurre, se obtiene la duración del audio y se muestra dicha duración.
- **actualizacionTiempo:**
  Esta función se ejecuta conforme se actualiza el tiempo de la reproducción del audio. Actualiza el texto del tiempo transcurrido y los estilos del input[type='range']. También se actualiza la información del audio descargado.
- **adelanta10:**
  Adelanta el audio 10 segundos.
- **retrasa10:**
  Retrasa el el audio 10 segundos.

### Eventos

Este componente no dispara eventos externos.

### Slots

- `'encabezado'`: Este es el único slot que contiene el componente. Permite agregar contenido encima de los controles de audio y se suele usar para proporcionar información sobre el archivo.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

En este ejemplo, únicamente se indica la ruta del archivo:

<!-- <UtilsEjemploDoc ruta="audio/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/audio/basico.vue

### Ejemplo con slot

En este ejemplo se agrega el slot de `encabezado` para proporcionar información adicional sobre el archivo de audio.

<!-- <utils-ejemplo-doc ruta="audio/con-slot.vue"/> -->
<EjemploConSlot />
<<< @/.vitepress/components/audio/con-slot.vue

</section>

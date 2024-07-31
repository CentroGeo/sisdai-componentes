<script setup>
import EjemploBasico from "../../.vitepress/components/info-de-despliegue/basico.vue";
</script>

# Información de despliegue

El componente `SisdaiInfoDeDespliegue` sirve para presentar la información acerca del versionamiento, el ambiente y la fecha de despliegue.

<section id="uso">

## Uso

La información de despliegue se coloca al final de cada página del sitio, encima del último elemento de esta, como el pie de página del Conahcyt. Este componente sirve principalmente para:

- Dar certeza de la versión en la que se está desplegando actualmente el proyecto.
- Brindar información del ambiente ya sea de pruebas, desarrollo o producción.

```html
<SisdaiInfoDeDespliegue />
```

</section>

**Vista simplificada**

En la vista simplificada la información de despliegue no se modifica en diseño ni en comportamiento, ya que solo sirve como referencia en los ambientes de desarrollo y pruebas. Es importante mencionar que el componente solo se mostrará cuando se despliegue únicamente en el ambiente de desarrollo y pruebas, no en producción.

<section id="api">

## API

Este componente admite las siguientes propiedades:

### Propiedades

- `versionProyecto`: identificador de versionamiento semántico del proyecto. Este valor se encuentra en el archivo package.json en la propiedad de versión. Ejemplo: '0.0.1'
  - Tipo: `String`
  - Requerido: sí
- `entornoProyecto`: define el entorno o ambiente de programación en el que se encuentre desplegado actualmente el proyecto. Este valor se obtiene de los archivos `.env` con las variables de entorno. Ejemplo: 'desarrollo'
  - Tipo: `String`
  - Requerido: sí
- `actualizacionProyecto`: se trata de la fecha en que el proyecto está siendo desplegado. Es decir, toma el momento actual del día, mes, año y hora centrada en América y Ciudad de México. Ejemplo: '1/01/2023, 12:00:00'
  - Tipo: `String`
  - Requerido: sí

Para el proyecto en donde se instale este componente es necesario crear archivos .`env` con las variables de entorno para el ambiente de pruebas, QA, desarrollo, preproducción y producción, según sea el caso. Estos deben contar al menos con la siguiente variable:

```bash
NODE_ENV = ambiente
```

### Métodos

Este componente no cuenta con métodos públicos.

### Eventos

Este componente no dispara eventos externos.

### Slots

Este componente no utiliza slots.

</section>

<section id="ejemplos">

## Ejemplos de uso

### Ejemplo básico

A continuación se presenta el componente usando las propiedades computadas de manera local. Sin embargo, es recomendable que esas propiedades se obtengan de las variables de entorno, como se mencionó anteriormente.

<!-- <utils-ejemplo-doc ruta="info-de-despliegue/basico.vue"/> -->
<EjemploBasico />
<<< @/.vitepress/components/info-de-despliegue/basico.vue

</section>

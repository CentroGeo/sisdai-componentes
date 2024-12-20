---
home: false
title: Instalación
---

<section id="instalacion">

# Instalación

Para instalar la biblioteca en el proyecto Vue, sigue estos pasos:

1. En la carpeta principal de tu proyecto Vue, abre una terminal.
2. Instala la biblioteca en las dependencias de tu proyecto con el siguiente comando npm:

**Opción A.** Desde el repositorio del [sisdai-componentes en npm](https://www.npmjs.com/package/@centrogeomx/sisdai-componentes).

En la línea de comando escribe

```bash
npm i @centrogeomx/sisdai-componentes
```

**Opción B.** Desde el repositorio de [sisdai-componentes en github.com](https://github.com/CentroGeo/sisdai-componentes).

En la línea de comando escribe

```bash
npm install git+https://github.com/CentroGeo/sisdai-componentes
```

## Actualización

Dependiendo de la versión de la biblioteca que se desee instalar, el comando puede variar. Por ejemplo, para instalar una versión específica, usa el siguiente comando:

**Opción A.** Para versiones publicadas en el repositorio de [sisdai-componentes en npm](https://www.npmjs.com/package/sisdai-componentes).

```bash
npm i @centrogeomx/sisdai-componentes@vN.N.N
```

**Opción B.** Para cualquier versión desde el repositorio de [sisdai-componentes en github.com](https://github.com/CentroGeo/sisdai-componentes)

```bash
npm install git+https://github.com/CentroGeo/sisdai-componentes#vN.N.N
```

en donde N.N.N representa el número de versión, por ejemplo v1.0.0

## Instalación de estilos

Debido a que el estilo de los componentes está ligado a las reglas de [Sisdai](https://sisdai.conahcyt.mx/) es necesario incluir los estilos de [Sisdai Css](https://github.com/CentroGeo/sisdai-css) en el archivo de inicialización de tu proyecto.

Si tu proyecto tiene configurado el preprocesador `sass` o `scss`, generalmente el archivo es ‘src/main.js’. Añade la siguiente línea para importar los estilos:

```js
import '@centrogeomx/sisdai-css/dist/sisdai.min.css'
```

Adicionalmente, debes agregar las tipografías de Montserrat y Atkinson Hyperlegible de Google Fonts en el encabezado `<head></head>` del documento HTML base de tu proyecto:

```html
<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
/>
<link
  href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&family=Montserrat:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

</section>
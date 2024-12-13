---
home: false
title: Instalación
---

## Instalación

Para instalar la biblioteca en el proyecto Vue, sigue estos pasos:

1. En la carpeta principal de tu proyecto Vue, abre una terminal.
2. Instala la biblioteca en las dependencias de tu proyecto con el siguiente comando npm:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes
```

Dependiendo de la versión de la biblioteca que se desee instalar, el comando puede variar. Por ejemplo, para instalar una versión específica, usa el siguiente comando:

```bash
npm install git+https://codigo.conahcyt.mx/sisdai/sisdai-componentes#vN.N.N
```

en donde N.N.N representa el número de versión, por ejemplo v1.0.0

**Instalación de estilos**

Debido a que el estilo de los componentes está ligado a las reglas de [Sisdai](https://sisdai.conahcyt.mx/) es necesario incluir los estilos de [Sisdai Css](https://codigo.conahcyt.mx/sisdai/sisdai-css) en el archivo de inicialización de tu proyecto.

Si tu proyecto tiene configurado el preprocesador `sass` o `scss`, generalmente el archivo es ‘src/main.js’. Añade la siguiente línea para importar los estilos:

```js
import 'sisdai-css/dist/sisdai.min.css'
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
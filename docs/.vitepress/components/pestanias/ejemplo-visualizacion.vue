<template>
  <div class="contenedor">
    <div class="contenedor-vis m-y-3">
      <div class="contenedor-vis-paneles con-panel-encabezado-vis con-panel-pie-vis">
        <div class="panel-encabezado-vis">
          <p id="vistitulovisualizacion" class="vis-titulo-visualizacion">
            Título visualización
          </p>
          <p class="vis-fecha-actualizacion">
            Fecha de actualización
          </p>
          <p class="vis-instruccional">
            Instruccional ó texto descriptivo de la visualización.
          </p>
        </div>

        <SisdaiPestanias idAriaLabelledby="vistitulovisualizacion">
          <template #contenido-pestanias>
            <button id="tabvis-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanelvis-1">
              Gráfica
            </button>
            <button id="tabvis-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-2" tabindex="-1">
              Tabla
            </button>
            <button id="tabvis-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanelvis-3" tabindex="-1" disabled>
              Deshabilitada
            </button>
          </template>

          <template #contenido-paneles>
            <div id="tabpanelvis-1" role="tabpanel" tabindex="0" aria-labelledby="tabvis-1">
              <div class="contenido-vis">
                <div style="border: 1px dashed #00f; padding: 8px; height: 100%;">
                  <p class="vis-titulo-ejes">
                    Título de ejes
                  </p>
                  <p class="vis-valores-ejes">
                    Valores de ejes
                  </p>
                </div>
              </div>

              <div class="panel-pie-vis">
                <p class="vis-titulo-leyenda">
                  Título de leyenda
                </p>

                <p class="vis-nomenclatura">
                  <span class="figura-variable disabled"></span>
                  Nomenclatura deshabilitada
                </p>
                <p class="vis-nomenclatura">
                  <span class="figura-variable"></span>
                  Nomenclatura
                </p>
              </div>
            </div>

            <div id="tabpanelvis-2" role="tabpanel" tabindex="0" aria-labelledby="tabvis-2" hidden>
              <div class="contenido-vis">
                <div class="contenedor-tabla">
                  <table>
                    <caption class="a11y-solo-lectura">Tabla con contenedor horizontal</caption>
                    <thead>
                      <tr>
                        <th>Encabezado A</th>
                        <th>Encabezado B</th>
                        <th>Encabezado C</th>
                        <th>Encabezado D</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Celda 1</td>
                        <td>Celda 2</td>
                        <td>Celda 3</td>
                        <td>Celda 4</td>
                      </tr>
                      <tr>
                        <td>Celda 5</td>
                        <td>Celda 6</td>
                        <td>Celda 7</td>
                        <td>Celda 8</td>
                      </tr>
                      <tr>
                        <td>Celda 9</td>
                        <td>Celda 10</td>
                        <td>Celda 11</td>
                        <td>Celda 12</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Pie 1</td>
                        <td>Pie 2</td>
                        <td>Pie 3</td>
                        <td>Pie 4</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
              
            <div id="tabpanelvis-3" role="tabpanel" tabindex="0" aria-labelledby="tabvis-3" hidden>
              <p></p>
            </div>
          </template>
        </SisdaiPestanias>
      </div>

      <div class="contenedor-vis-atribuciones borde-t borde-color-secundario">
        <a class="logo-conacyt" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          <img
            class="a11y-oscura-filtro-blanco"
            src="https://cdn.conahcyt.mx/sisdai/recursos/conahcyt-azul.svg"
            alt="Conahcyt"
          />
        </a>
        <a href="https://sisdai.conahcyt.mx/" target="_blank" rel="noopener noreferrer">
          Sisdai
        </a>
      </div>
    </div>
  </div>
</template>
  
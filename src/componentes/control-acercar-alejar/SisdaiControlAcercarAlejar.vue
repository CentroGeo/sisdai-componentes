<template>
  <div
    class="control-acercar-alejar"
    role="toolbar"
    aria-label="Controles para ajustar el nivel de acercamiento"
  >
    <button
      class="boton-pictograma boton-sin-contenedor-secundario"
      @click="disminuir"
    >
      <span
        class="pictograma-restar"
        aria-label="Alejar"
      ></span>
    </button>

    <input
      type="range"
      class="control-acercar-alejar-rango"
      aria-label="Ajustar el nivel de acercamiento"
      :min="min"
      :max="max"
      :step="step"
      v-model="inputValue"
    />

    <button
      class="boton-pictograma boton-sin-contenedor-secundario"
      @click="aumentar"
    >
      <span
        class="pictograma-agregar"
        aria-label="Acercar"
      ></span>
    </button>

    <input
      type="text"
      maxlength="3"
      inputmode="numeric"
      min="0"
      max="100"
      pattern="\d*"
      class="control-acercar-alejar-porcentaje"
      aria-label="Porcentaje de acercamiento"
      v-model.lazy="inputValue"
    />
  </div>
</template>
<script>
export default {
  name: 'SisdaiControlAcercarAlejar',
  props: {
    value: Number,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 5,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  computed: {
    inputValue: {
      get() {
        return Math.round(this.value)
      },
      set(value) {
        this.$emit('change', Number(value))
      },
    },
    valor_porcentual() {
      return `${((this.inputValue - this.min) / (this.max - this.min)) * 100}%`
    },
  },
  methods: {
    aumentar() {
      this.inputValue = this.inputValue + this.step
    },
    disminuir() {
      this.inputValue = this.inputValue - this.step
    },
  },
}
</script>

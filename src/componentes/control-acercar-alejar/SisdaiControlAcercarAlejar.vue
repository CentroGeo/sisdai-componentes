<template>
  <div class="selector-zoom m-x-2">
    <button
      class="boton-secundario boton-chico boton-icono"
      @click="disminuir"
    >
      <span class="icono-restar"></span>
    </button>
    <input
      type="range"
      class="input-rango"
      :min="min"
      :max="max"
      :step="step"
      v-model="inputValue"
    />
    <button
      class="boton-secundario boton-chico boton-icono m-l-1"
      @click="aumentar"
    >
      <span class="icono-agregar"></span>
    </button>
    <input
      type="text"
      class="input-texto"
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

<style lang="scss" scoped>
.selector-zoom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  input[type='range'].input-rango {
    max-height: inherit;
    margin: 0;
    background-color: transparent;
    min-width: 200px;
  }
  input[type='text'].input-texto {
    max-height: inherit;
    //TODO quitar los importants
    margin: 0 !important;
    background-color: var(--pagina-fondo) !important;
    width: 4.5rem !important;
  }
  &::after {
    content: '%';
    position: absolute;
    right: 0.5rem;
    color: var(--tipografia-color);
    top: 25%;
  }
}
</style>

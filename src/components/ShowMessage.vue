<template>
  <div id="show">
    <div class="columns">
      <div class="column col-4 bg-secondary">
        <h2>Krok 1</h2>
        <div class="form-group">
          <label class="form-label" for="input-file">Wyślij plik graficzny</label>
          <input
            class="form-input"
            id="input-file"
            type="file"
            @change="uploadEncodedImage"
            accept="image/png">
        </div>
        <h2>Krok 2</h2>
        <div class="form-group">
          <button
            class="btn btn-primary btn-block"
            :disabled="isBtnDisabled"
            @click="show">
              Odczytaj wiadomość <i class="icon icon-upload"></i>
          </button>
        </div>
        <h2>Krok 3</h2>
        <div class="form-group">
          <label class="form-label" for="output-text">Odczytana wiadomości</label>
          <textarea
            ref="output"
            class="form-input"
            id="output-text"
            placeholder="Wyślij obraz żeby odczytać wiadomość!"
            rows="3"
            v-model="textInput"></textarea>
        </div>
      </div>
      <div class="column col-8">
        <div class="p-relative">
          <img class="img-responsive" :src=imgEncodedSrc>
          <span class="p-absolute label label-secondary">Zakodowany obraz</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import steg from '../steganography'
export default {
  name: 'HideMessage',
  props: {
    msg: String
  },
  data () {
    return {
      target: '#show',
      imgEncodedSrc: '',
      textInput: ''
    }
  },
  computed: {
    isBtnDisabled () {
      return this.imgEncodedSrc === ''
    }
  },
  methods: {
    uploadEncodedImage (e) {
      this.$emit('toggle-loader')
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = f => {
        this.imgEncodedSrc = f.target.result
        this.$emit('toggle-loader')
      }
      reader.readAsDataURL(file)
    },
    show: function () {
      this.$emit('toggle-loader')
      setTimeout(() => {
        this.textInput = steg.decode(this.imgEncodedSrc)
        this.$refs.output.focus()
        this.$emit('toggle-loader')
      }, 500)
    }
  }
}
</script>

<style scoped>
.label {
  top: 0;
}
</style>

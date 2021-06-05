<template>
  <div id="show">
    <div class="columns">
      <div class="column col-4">
        <div class="panel bg-secondary">
          <div class="panel-body">
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
                class="btn btn-primary btn-block mb-2"
                :disabled="isBtnDisabled"
                @click="show">
                  Odczytaj wiadomość <i class="icon icon-upload"></i>
              </button>
              <label class="form-label" for="output-text">Odczytana wiadomości</label>
              <textarea
                ref="output"
                class="form-input"
                id="output-text"
                placeholder="Wyślij obraz żeby odczytać wiadomość!"
                rows="3"
                v-model="textOutput"></textarea>
            </div>
          </div>
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
  data () {
    return {
      imgEncodedSrc: '',
      textOutput: ''
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
    show () {
      this.$emit('toggle-loader')
      setTimeout(() => {
        this.textOutput = steg.decode(this.imgEncodedSrc)
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

.panel {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>

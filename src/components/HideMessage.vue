<template>
  <div id="hide">
    <div class="columns">
      <div class="column col-4">
        <div class="panel bg-secondary">
          <div class="panel-body">
            <h2>Krok 1</h2>
            <div class="form-group">
              <label class="form-label" for="input-text">Wpisz tekst do ukrycia</label>
              <textarea
                class="form-input"
                id="input-text"
                placeholder="Ukryta wiadomość"
                rows="3"
                v-model="textInput"></textarea>
            </div>
            <h2>Krok 2</h2>
            <div class="form-group">
              <label class="form-label" for="input-file">Wyślij plik graficzny</label>
              <input
                class="form-input"
                id="input-file"
                type="file"
                @change="uploadOriginalImage"
                accept="image/png, image/jpeg">
            </div>
            <h2>Krok 3</h2>
            <div class="form-group">
              <button
                class="btn btn-primary btn-block"
                :disabled="isBtnDisabled"
                @click="hide">
                Ukryj wiadomość <i class="icon icon-edit"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="column col-8">
        <div class="columns">
          <div class="column">
            <div class="p-relative">
            <img class="img-responsive" :src=imgSrc>
              <span class="p-absolute label">Oryginalny obraz</span>
            </div>
          </div>
          <div class="divider-vert" data-content="⤰"></div>
          <div class="column">
            <div class="p-relative">
            <img class="img-responsive" :src="imgEncodedSrc">
              <span class="p-absolute label label-secondary">Zakodowany obraz</span>
            </div>
          </div>
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
      imgSrc: '',
      imgEncodedSrc: '',
      textInput: ''
    }
  },
  computed: {
    isBtnDisabled () {
      return this.textInput === '' || this.imgSrc === ''
    }
  },
  methods: {
    uploadOriginalImage (e) {
      this.$emit('toggle-loader')
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = f => {
        this.imgSrc = f.target.result
        this.$emit('toggle-loader')
      }
      reader.readAsDataURL(file)
    },
    hide () {
      this.$emit('toggle-loader')
      setTimeout(() => {
        this.imgEncodedSrc = steg.encode(this.textInput, this.imgSrc)
        this.$emit('toggle-loader')
      }, 1)
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

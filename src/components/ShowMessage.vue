<template>
  <div id="show" class="container">
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
          <button class="btn btn-primary btn-block" @click="show">Odczytaj wiadomość <i class="icon icon-upload"></i></button>
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
        <h3>Zaszyfrowany obraz</h3>
        <img class="img-responsive" :src=imgSrc>
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
  methods: {
    uploadEncodedImage (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = f => {
        this.imgSrc = f.target.result
      }
      reader.readAsDataURL(file)
    },
    show () {
      this.textInput = steg.decode(this.imgSrc)
      this.$refs.output.focus()
    }
  }
}
</script>

<template>
  <div id="hide" class="container">
    <div class="columns">
      <div class="column col-4 bg-secondary">
        <h2>Krok 1</h2>
        <div class="form-group">
          <label class="form-label" for="input-text">Wpisz tekst do ukrycia</label>
          <textarea
            class="form-input"
            id="input-text"
            placeholder="Zaszyfruj mnie!"
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
          <button class="btn btn-primary btn-block" @click="hide">Ukryj wiadomość <i class="icon icon-edit"></i></button>
        </div>
      </div>
      <div class="column col-8">
        <div class="columns">
          <div class="column">
            <h3>Oryginalny obraz</h3>
            <img class="img-responsive" :src=imgSrc>
          </div>
          <div class="divider-vert" data-content="⤰"></div>
          <div class="column">
            <h3>Zakodowany obraz</h3>
            <img class="img-responsive" :src="imgEncodedSrc">
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
  methods: {
    uploadOriginalImage (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = f => {
        this.imgSrc = f.target.result
      }
      reader.readAsDataURL(file)
    },
    hide () {
      this.imgEncodedSrc = steg.encode(this.textInput, this.imgSrc)
    },
    handleTabs (e) {
      const target = e.target
      this.target = target.hash
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column col-2 col-md-12">
        <img alt="Vue logo" class="img-responsive" src="./assets/logo.png">
      </div>
      <div class="column col-10 col-md=12">
        <HelloWorld msg="Stegano Vue"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'spectre.css'
import 'spectre.css/dist/spectre-icons.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

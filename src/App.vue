<template>
  <div class="container">
    <header class="navbar">
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">Stegano Vue</a>
      </section>
      <section class="navbar-center">
        <img alt="Vue logo" width="40" src="./assets/logo.png">
      </section>
      <section class="navbar-section">
        <a href="https://github.com/skotniczny" class="btn btn-link">GitHub</a>
      </section>
    </header>
    <Tabs />
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
import 'spectre.css'
import 'spectre.css/dist/spectre-icons.css'

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
</style>

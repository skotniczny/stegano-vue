<template>
  <div class="hello">
    <div class="loader" v-if="isLoading">
      <div class="loading-lg loading"></div>
    </div>
    <ul class="tab tab-block">
      <li v-for="tab in tabs" class="tab-item" :class="{active: isActive(tab.id)}" :key="tab.id" @click="handleTabs">
        <a :href="tab.id">{{tab.text}}</a>
      </li>
    </ul>
    <component v-bind:is="currentTab" @toggle-loader="toggleLoader" class="tab-content"></component>
  </div>
</template>

<script>
import HideMessage from './HideMessage.vue'
import ShowMessage from './ShowMessage.vue'
export default {
  name: 'Tabs',
  data () {
    return {
      isLoading: false,
      target: '#hide',
      tabs: [
        {
          id: '#hide',
          text: 'Zapisz wiadomość'
        },
        {
          id: '#show',
          text: 'Oczytaj wiadomość'
        }
      ]
    }
  },
  computed: {
    currentTab () {
      switch (this.target) {
        case '#hide':
          return HideMessage
        case '#show':
          return ShowMessage
        default:
          return HideMessage
      }
    }
  },
  methods: {
    handleTabs (e) {
      e.preventDefault()
      const target = e.target
      this.target = target.hash
    },
    isActive (id) {
      return this.target === id
    },
    toggleLoader () {
      this.isLoading = !this.isLoading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 841px) {
  .hello {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

.tab-content {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.loader {
  top: 2rem;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
}
</style>

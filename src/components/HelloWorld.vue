<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="tab tab-block">
      <li v-for="tab in tabs" class="tab-item" :class="{active: isActive(tab.id)}" :key="tab.id" @click="handleTabs">
        <a :href="tab.id">{{tab.text}}</a>
      </li>
    </ul>
    <component v-bind:is="currentTab" class="tab-content"></component>
  </div>
</template>

<script>
import HideMessage from './HideMessage.vue'
import ShowMessage from './ShowMessage.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.tab-content {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>

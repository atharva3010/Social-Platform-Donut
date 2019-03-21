<template lang="html">
  <div>
    <ul>
      <li v-for='greeting in greetings'>
        <span>{{greeting}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import welcomeAPI from '@/services/welcomeAPI.js'
export default {
  data () {
    return {
      greetings: []
    }
  },
  mounted () {
    this.loadGreetings()
  },
  methods: {
    async loadGreetings () {
      const response = await welcomeAPI.getGreeTings()
      this.greetings = response.data
    }
  }
}
</script>
<style lang="css">
</style>
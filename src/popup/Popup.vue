<template>
  <div>
    <Landing />
  </div>
</template>

<script>
import Landing from '../components/Landing.vue'

export default {
  name: 'App',
  components: { Landing }
}
</script>

<style>
  html {
    width: 450px;
    height: 450px;
  }
  body {
    width: inherit;
    height: inherit;
    padding: 10px;
  }
</style>
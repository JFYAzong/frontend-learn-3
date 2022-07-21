<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  components:{ Main },
  name: 'App'
}
</script>

<style>
#app{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

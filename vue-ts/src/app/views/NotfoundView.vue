<template lang="pug">
div
  h1 here is 404 page
  div
    span vue-typescript test is under there:
    div.test(
      @click="testFunc"
    ) {{ test }}
</template>

<style lang="stylus" scoped>
.test
  width 50px
  height 50px
  background #ecf5ff
</style>

<script lang="ts">
import NotfoundView from './HomeView'
export default NotfoundView
</script>

<template lang="pug">
div
  span here is 404 page
  div
    span vue-typescript test is under there:
    div.test(
      @click="testFunc"
    ) {{ test }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NotfoundView extends Vue {

  test = null

  testFunc() {
    this.test = '1'
  }
}
</script>

<style lang="stylus" scoped>
.test
  width 50px
  height 50px
  background red
</style>

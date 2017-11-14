import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NotfoundView extends Vue {
  test = null

  testFunc() {
    this.test = 'im clicked'
  }

  mounted() {
    this.test = 'im mounted'
  }
}

Vue.component('tabs', {
  name: 'pane',
  template: '\
    <div class="pane" v-show="show"> \
      <slot></slot> \
    </div>',
  data() {
    return {
      show: true
    }
  }
})

Vue.component('tabs', {
  template: '\
    <div class="tabs"> \
      <div class="tabs-bar"> \
    </div> \
    <div class="tabs-content"> \
      <slot></slot> \
    </div></div>',
  data() {
    return {
      navList: []
    }
  },
  methods: {
    getTabs() {
      return this.$children.filter(function(item) {
        return item.$options.name === 'pane';
      })
    },
    updateNav() {
      this.navList = [];
      var _this = this;
      this.getTabs().forEach(function(pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index
        });
      })
    }
  }
})

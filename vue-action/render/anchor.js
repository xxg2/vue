Vue.component('anchor', {
  props: {
    level: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(createElement) {
    return createElement(
      'h' + this.level,
      [
        createElement('a', {domProps: {href: '#'+this.title}},this.$slots.default)
      ]
    )
  }
})

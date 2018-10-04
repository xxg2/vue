Vue.component('anchor', {
  data() {
    return {
      value: '',
      list: []
    }
  },
  render(createElement) {
    var _this = this;
    if(this.list.length) {
      var listNode = createElement('ul', this.list.map(function(item) {
        return createElement('li', item);
      }))
    } else {
      var listNode = createElement('p', 'no content');
    }
    return createElement(
      listNode,
      createElement('input', {
        attrs: {placeholder: 'input, enter'},
        style: {width: '200px'},
        on: {
          keyup: function(event) {
            if(event.keyCode !== 13) return;
            _this.list.push(event.target.value);
            event.target.value = '';
          }
        }
      })
    )
  }
})

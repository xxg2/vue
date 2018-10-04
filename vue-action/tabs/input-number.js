Vue.component('input-number', {
  template: '<div>test</div>',
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    },
    value(val) {
      this.updateValue(val);
    }
  },
  methods: {
    updateValue(val) {
      if(val>this.max) val = this.max;
      if(val<this.min) val = this.min;
      this.currentValue = val;
    }
  },
  mounted() {
    this.updateValue(this.value);
  },
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  }
})

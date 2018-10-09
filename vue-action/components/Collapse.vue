<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  const prefixCls = 'ivu-collapse';

  export default {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String]
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    computed: {
      classes() {
        return '${prefixCls}';
      }
    },
    methods: {
      getActiveKey() {
        let activeKey = this.currentValue || [];
        const accordion = this.accordion;
        if(!Array.isArray(activeKey)) {
          activeKey = [activeKey];
        }
        if(accordion && activeKey.length > 1) {
          activeKey = [activeKey[0]];
        }
        for(let i = 0; i<activeKey.length;i++) {
          activeKey[i] = activeKey[i].toString();
        }
        return activeKey;
      },
      setActive() {
        const activeKey = this.getActiveKey();
        this.$children.forEach((child, index) => {
          const name = child.name || index.toString();
          let isActive = false;
          if(self.accordion) {
            isActive = activeKey === name;
          } else {
            isActive = activeKey.indexOf(name) > -1;
          }
          child.isActive = isActive;
          child.index = index;
        });
      }
    },
    mounted() {
      this.setActive();
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue() {
        this.setActive();
      }
    }
  }
</script>

<template>
  <div :class="itemClasses">
    <div :class="headerClasses">
      <slot></slot>
    </div>
    <div :class="contentClasses">
      <div :class="boxClasses">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  const prefixCls = 'ivu-collapse';

  export default {
    name: 'Panel',
    data() {
      return {
        index: 0,
        isActive: false
      };
    },
    methods: {
      toggle() {
        this.$parent.toggle({
          name: this.name || this.index,
          isActive: this.isActive
        });
      }
    },
    computed: {
      itemClasses() {
        return [
          '${prefixCls}-item',
          {
            ['${prefixCls}-item-active']:this.isActive
          }
        ]
      },
      headerClasses() {
        return '${prefixCls}-header';
      },
      contentClasses() {
        return '${prefixCls}-content';
      },
      boxClasses() {
        return '${prefixCls}-content-box';
      }
    }
    props: {
      name: {
        type: String
      }
    }
  }
</script>

<template>
  <div>
    首页
    {{count}}
    <button @click="handleIncrement">+5</button>
    <button @click="handleDecrease">-1</button>
    {{list}}
    {{listCount}}
    <button @click="handleActionIncrement">-1</button>
  </div>
</template>
<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      },
      list() {
        //return this.$store.state.list.filter(item => item < 10)
        return this.$store.getters.filteredList;
      },
      listCount() {
        return this.$store.getters.listCount;
      }
    },
    methods: {
      handleIncrement() {
        this.$store.commit('increment', 5);
      },
      handleDecrease() {
        this.$store.commit('decrease');
      },
      handleActionIncrement() {
        this.$store.dispatch('increment');
      },
      handleAsyncIncrement() {
        this.$store.dispatch('asyncIncrement').then(() => {
          console.log(this.$store.state.count);
        });
      },
    }
  }
</script>

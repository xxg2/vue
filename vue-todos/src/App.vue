<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <li v-for="(todo,index) in todos" :id="index" :class="{'checked':todo.done  }">
      <label>{{index+1}}.{{todo.value}}</label>
      <time>{{todo.created | date}}</time>
    </li>
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/en-au'
moment.locale('en-au')

export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {value:"阅读一本书，关于前端",done:false,created:Date.now()},
        {value:"补充范例代码",done:true,created:Date.now()+300000},
        {value:"写心得",done:false,created:Date.now()-3000000000}
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  filters: {
    date(val) {
      return moment(val).calendar()
    }
  }
}
</script>

<style>
@import './assets/todos.less'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

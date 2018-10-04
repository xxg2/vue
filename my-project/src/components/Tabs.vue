<template>
    <div class="tabs">
        <ul>
            <router-link :to="{name:'Home'}" tag="li" active-class="active">
        <div>
          <img src="">
          <div>首页</div>
        </div>
      </router-link>
      <router-link :to="{name:'Cart'}" tag="li">
        <div>
          <img src="">
          <div>购物车</div>
        </div>
      </router-link>
      <router-link :to="{name:'Explorer'}" tag="li" replace>
        <div>
          <img src="">
          <div>分类</div>
        </div>
      </router-link>
      <router-link :to="{name:'Me'}" tag="li">
        <div>
          <img src="">
          <div>我</div>
        </div>
      </router-link>
      <router-link :to="{name:'BookDetails', params: {id:1}}" tag="li">
        <div>
          <img src="">
          <div>详情</div>
        </div>
      </router-link>
        </ul>
    </div>
</template>
<style type="less">
    @import "./tabs.less"
</style>
<script>
    //const _data = require("../assets/images/category.svg").toString()
    //console.log(_data)
    export default {}
</script>
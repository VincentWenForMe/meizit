<template>
  <div class="menu">
    <div class="top-menu">
      <div class="menu-avatar">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4186807976,1707145605&fm=27&gp=0.jpg"
          width="100%"
          alt="">
      </div>
      <div class="menu-title">
        zhangsan
      </div>
    </div>
    <ul class="menu-list">
      <li class="border-1px">
        <router-link to="/welfare"><i class="iconfont icon-welfare"></i>福利</router-link>
      </li>
      <li class="border-1px">
        <router-link to="/day"><i class="iconfont icon-day"></i>每日推荐</router-link>
      </li>
      <li class="border-1px">
        <router-link to="/android"><i class="iconfont icon-android"></i>Android</router-link>
      </li>
      <li class="border-1px">
        <router-link to="/iso"><i class="iconfont icon-ios"></i>ISO</router-link>
      </li>
      <li class="border-1px">
        <router-link to="/web"><i class="iconfont icon-web"></i>前端</router-link>
      </li>
    </ul>
    <div class="end-menu">
      MIT 协议
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu'
  }
</script>

<style lang="stylus">
  @import "./menu.styl";
</style>

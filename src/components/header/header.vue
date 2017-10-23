<template>
  <div class="header">
    <div class="fixed-top">
      <span class="iconfont icon-fenlei"></span>
      <span class="title">title</span>
      <span class="iconfont icon-sousuo_sousuo"></span>
    </div>
    <v-menu v-show="menuShow"></v-menu>
  </div>
</template>

<script>
  import Menu from '../menu/menu.vue';
  import { mapState } from 'vuex'
  
  export default {
    name: 'header',
    data() {
      return {
        show: false
      }
    },
    computed: {
      ...mapState(['menuShow'])
    },
    
    components: {
      'v-menu': Menu
    },
    
    methods: {
      isShow() {
        this.$store.commit('UPDATE_MENUSHOW');
      }
    }
  }
</script>

<style lang="stylus">
  @import "header.styl";
</style>

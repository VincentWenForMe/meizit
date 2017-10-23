<template>
  <div class="welcome">
    <div class="loader-inner paceMan"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  import { savaToLocal } from '../../common/js/store';
  
  export default {
    name: 'welcome',
    mounted() {
      setTimeout(() => {
        this.$router.push({
          name: ''
        });
        savaToLocal('gank', 'welcome', ture);
      }, 2000)
    }
  }
</script>

<style lang="stylus">
  @import "./welcome.styl";
</style>

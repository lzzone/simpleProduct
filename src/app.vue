<template>
  <div id="app">
    <Index />
  </div>
</template>
<script>
import Index from './views/index/index.vue';

export default {
  data() {
    return {};
  },
  components: {
    Index,
  },
  beforeCreate() {
  },
  created() {
  },
}
</script>
<style lang="less">
  @import '../static/css/reset.less';
  @import '../static/css/untils.less';
</style>

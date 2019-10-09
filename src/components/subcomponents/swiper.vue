<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 组件中v-for时一定要添加key值,注意：item.url会使key出现重复的值，item.img值唯一 -->

      <!-- 谁使用组件,谁传lunbotulist
      此时的lunbotulist应该是父组件向子组件传值来设置
       -->
      <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
        <img :src="item.img" alt :class="{'full':isfull}"  />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    props:["lunbotulist","isfull"]
};
</script>
<style lang="scss" scoped>
    .mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    
    img {
    //   width: 100%;
      height: 100%;
    }
  }
}
.full{
    width:100%;
}
</style>
<template>
  <div>
     <!-- //轮播图
    <mt-swipe :auto="4000">
      //组件中v-for时一定要添加key值,注意：item.url会使key出现重复的值，item.img值唯一 
      <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe> -->
    <swiper :lunbotulist="lunbotulist" :isfull="true"></swiper>




    <!-- 九宫格改造成六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="src/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="src/images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src="src/images/menu3.png"/>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="src/images/menu4.png"/>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/images/menu5.png"/>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/images/menu6.png"/>
          <div class="mui-media-body">留言我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue';
export default {
  data() {
    return {
      lunbotulist: [], //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http
        .get("api/getlunbo")
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            //获取成功
            this.lunbotulist = result.body.message;
          } else {
            //获取失败
            Toast("获取轮播图失败...");
          }
        });
    }
  },
  components:{
    swiper
  }
};
</script>
<style lang="scss" scoped>
/* .mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: yellowgreen;
    }
    &:nth-child(2) {
      background-color: skyblue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
} */
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img{
    width:60px;
    height:60px;
  }
  
  
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  .mui-media-body{
    font-size:13px;
  }
}

</style>
<template>
    <div class="newsInfo-Container">
        <!-- 头部标题 -->
      <h1 class="title">{{newsinfo.title}}</h1>
      <!-- 二级标题 -->
      <p class="subtitle">
          <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
          <span>点击:{{newsinfo.click}}次</span>
      </p>
      <hr>
      <!-- 内容区 -->
      <div class="content" v-html="newsinfo.content"> </div>
      <!-- 评论子组件的引入 -->
      <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
//引入评论组件
import comment from '../subcomponents/comment.vue';

import {Toast} from 'mint-ui';
export default {
    data(){
        return {
            id:this.$route.params.id, //将URL地址中传递过来的id值,挂载到data中,方便以后调用
            newsinfo:{},
        }
    },
    created(){
        this.getnewsInfo();
    },
    methods:{
        getnewsInfo(){
            this.$http.get("api/getnew/"+this.id).then(result=>{
                if(result.body.status===0){
                    //获取数据成功
                    this.newsinfo=result.body.message[0];
                }else{
                    //获取数据失败
                    Toast('加载数据失败。。。');
                }
            })
        }
    },
    components:{
        //用来注册子组件的节点
        "comment-box":comment
    }
}
</script>
<style lang="scss" scoped>
    .newsInfo-Container{
        padding:0 4px;
        .title{
            font-size:16px;
            color:red;
            text-align:center;
            margin:15px 0;
        }
        .subtitle{
            font-size:13px;
            color:#222aff;
            display:flex;
            justify-content:space-between;
        }
        .content{
            img{
                width:100%;
            }
        }
    }
</style>
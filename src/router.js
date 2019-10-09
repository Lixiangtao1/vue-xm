
/* 1.导入vue-router包 */
import VueRouter from 'vue-router';

/* 将tabbar下的各组件导入到router.js中 */
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
//将新闻列表组件导入到router.js中
import newslist from './components/news/newslist.vue';
import newsInfo from './components/news/newsInfo.vue';
//将图片列表的组件导入
import Photolist from './components/Photos/Photolist.vue';
//将图片详情的组件导入
import Photoinfo from './components/Photos/Photoinfo.vue';

//将商品列表的组件导入
import Goodlist from './components/Goods/Goodlist.vue';
//商品详情导入
import Goodinfo from './components/Goods/Goodinfo.vue';
//商品评论及图文介绍页面
import GoodComment from './components/Goods/GoodComment.vue';
import GoodDesc from './components/Goods/GoodDesc.vue';

/* 创建一个router对象 */
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsInfo},
        {path:'/home/photolist',component:Photolist},
        {path:'/home/photoinfo/:id',component:Photoinfo},
        {path:'/home/goodlist/',component:Goodlist},
        {path:'/home/goodinfo/:id',component:Goodinfo,name:'goodinfo'},
        {path:'/home/goodcomment/:id',component:GoodComment,name:'goodcomment'},
        {path:'/home/gooddesc/:id',component:GoodDesc,name:'gooddesc'},
    ],
    linkActiveClass:'mui-active'//覆盖路由默认高亮的类 router-link-active
})
export default router
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import("../views/home/Home")
  },
  {
    path:'/category',
    component:()=>import("../views/category/Cate")
  },
  {
    path:'/profile',
    component:()=>import("../views/profile/Profile")
  },
  
]


//创建路由
const router = new VueRouter({
  mode:'history',
  routes
})

//导出router
export default router
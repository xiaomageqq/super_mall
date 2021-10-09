<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
       <img slot="item-icon" src="../assets/img/home.png" alt="">
     <img slot="item-active-icon" src="../assets/img/home2.png" alt="">
      <span slot="item-text">首页</span>
    </tab-bar-item>  
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="../assets/img/bk1.png" alt="">
      <img slot="item-active-icon" src="../assets/img/bk2.png" alt="">
      <span slot="item-text">分类</span>
    </tab-bar-item>  
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="../assets/img/per.png" alt="">
      <img slot="item-active-icon" src="../assets/img/per2.png" alt="">
      <span slot="item-text">我的</span>  
    </tab-bar-item>  
  </tab-bar> 
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  props:{
    mm:String
  },
  watch:{
    // mm(newV,oldV){
    //   console.log('newV',newV)
    //   console.log('oldV',oldV)
    // }
    mm:{
      immediate:true,
      handler(newV,oldV){
        console.log('newV',newV)
        console.log('oldV',oldV)
      }
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<template>
  <div id="app">
    <!-- {{full}}{{full}}{{full}}
    <input v-model="full" ><br>
    <input v-model="first" > <br>
    <input v-model="second" > 
    --
    {{fullt()}}
    {{fullt()}}
    {{fullt()}}
    {{fullt()}} -->
    {{perName}}
    <input v-model="first" > <br>
    <input v-model="per.name">
    <main-tab-bar mm="11"></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
export default {
  name: 'App',

  data(){
    return{
      first:'美女',
      second:'姐姐',
      per:{
        name:'倩倩',
        age:'18'
      }
    }
  },
  watch:{
    first(newVal,oldVal){
      console.log('newVal',newVal)
      console.log('oldVal',oldVal)
    },
    per:{
      handler(oldVal,newVal){
        console.log('newVal',newVal)
        console.log('oldVal',oldVal)
      },
      deep:true,
    },
    'per.name':function(newVal,oldVal){
      console.log('newVal->',newVal)
      console.log('oldVal->',oldVal)
    },
    perName(){
      console.log('name改变了')
    }
  },
  computed:{
    perName:function(){
      return this.per.name
    }
  },
  // computed:{
  //   full:{
  //     get(){
  //       console.log('computed')
  //       return this.first + ' ' + this.second
  //     },
  //     set(val){
  //       let names = val.split(' ')
  //       this.first = names[0]
  //       this.second = names[1]
  //     }
  //   }
  // },
  // methods:{
  //   fullt(){
  //     console.log('method')
  //     return this.first + ' ' + this.second
  //   }
  // },

  components: {
    MainTabBar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

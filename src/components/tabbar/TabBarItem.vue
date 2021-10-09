<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-active-icon"></slot>
    <div :style="activeStyle">
      <slot  name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"tabbaritem",
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  data(){
    return{
      //isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      //return this.isActive ? `color:${this.activeColor}`:'color:#000'
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
  font-size:14px;
}
.tab-bar-item img{
  width:20px;
  height:20px;
  display:block;
  vertical-align: middle;
}
</style>
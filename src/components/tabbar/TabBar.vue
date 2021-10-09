<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#tab-bar{
  display:flex;
  background:#eee;
  position: fixed;
  left:0;
  bottom:0;
  right:0;
  box-shadow: 0px -3px 3px #eee;
  padding-top:8px;
  box-sizing: border-box;
}

</style>
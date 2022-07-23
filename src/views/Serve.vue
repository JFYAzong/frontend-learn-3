<template>
  <div class="box">
    <div class="title-box">
      <div class="title-box__title" @click="openServiceDialog">XX服务中心 . 访客列表</div>
    </div>

    <div class="message-box">
      <div class="dialog-box" v-if="showServiceDialog"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      showServiceDialog: false
    }
  },
  methods:{
    openServiceDialog(){
      this.showServiceDialog = ! this.showServiceDialog
    }
  }
};
</script>

<style scoped lang="scss">
.box{
  width: 100vw;
  height: 100vh;
  // background-size: 100% 100%;

  .title-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1017px;
  background: linear-gradient(180deg, #7db7df 0%, #6aace7 100%);
  &__title {
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 51px;
    right: 1209px;
    font-size: 45px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    line-height: 63px;
    letter-spacing: 1px;
  }
}
.message-box{
  position: absolute;
  left: 483px;
  top: 183px;
  right: 0;
  bottom: 0;
  background-color: blue;

  .dialog-box{
    position: absolute;
    top: 160px;
    left: 209px;
    right: 198px;
    bottom: 318px;
    background-color: red;
    z-index: 4;
  }
}
  
}

</style>
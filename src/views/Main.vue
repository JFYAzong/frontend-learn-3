<template>
  <div class="box">
    <div class="title">{{ title }}</div>

    <div class="botton-box">
      <div
        class="botton-box__botton"
        v-for="(item, index) in buttons"
        :key="index"
        @click="onClickButton(index)"
      >
        <div class="botton-box__text">{{ item.text }}</div>
      </div>
    </div>

    <div class="time-box">
      <div class="time-box__time">{{date}}</div>
    </div>

    <!-- <div class="data">data</div>

    <div class="time">time</div> -->
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      title: "XX客服服务系统",
      buttons: [{ text: "服务窗口" }, { text: "人员注册" }],
      date: null,
      nowtimer: "",
    };
  },
  mounted() {
    this.nowtimer = setInterval(this.gettime, 1000)
  },
  methods: {
    gettime(){
      this.date = new Date().toLocaleString();
    },
    onClickButton(index){
      if(index = 0){
        this.$router.push("/serve");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  background: url("../assets/bg.jpg");
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;

  .title {
    position: absolute;
    top: 345px;
    left: 0%;
    right: 0%;
    text-align: center;
    font-size: 100px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    line-height: 140px;
    letter-spacing: 3px;
  }

  .botton-box {
    position: absolute;
    top: 670px;
    left: 559px;
    right: 558px;
    display: flex;
    justify-content: space-between;

    &__botton {
      position: relative;
      width: 325px;
      height: 188px;
      background: #d8d8d8;
      border-radius: 8px;
    }

    &__text {
      position: absolute;
      top: 66px;
      left: 80px;
      font-size: 40px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 56px;
      letter-spacing: 1px;
    }
  }

  .time-box {
    position: absolute;
    top: 1044px;
    left: 1525px;
    right: 88px;
    bottom: 24px;
    display: flex;
    flex-direction: column;

    &__time {
      font-size: 50px;
      font-family: PingFangSC-Semibold, PingFang SC;
      color: rgba(255, 255, 255, 0.85);
      line-height: 70px;
      letter-spacing: 1px;
      text-align: center;
    }


  }


}
</style>
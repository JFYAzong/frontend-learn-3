<template>
  <div class="box">
    <div class="title">XX客服服务系统</div>

    <div class="botton-box">
      <div class="botton-box__botton">
        <div class="botton-box__text">服务窗口</div>
      </div>
      <div class="botton-box__botton">
        <div class="botton-box__text">人员注册</div>
      </div>
    </div>

    <div class="data">data</div>

    <div class="time">time</div>
  </div>
</template>

<script>
export default {
  name: "Main",
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

  .data {
    position: absolute;
    top: 1044px;
    left: 1525px;
    width: 307px;
    height: 70px;
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    line-height: 70px;
    letter-spacing: 1px;
  }

  .time {
    position: absolute;
    top: 1106px;
    left: 1568px;
    width: 220px;
    height: 70px;
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    line-height: 70px;
    letter-spacing: 1px;
  }
}
</style>
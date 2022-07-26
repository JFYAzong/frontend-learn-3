<template>
  <div class="container">
    <div class="title-box">
      <div class="title-box__title" >
        XX服务中心 . 访客列表
      </div>
    </div>

    <div class="information">
      <div class="avatar"></div>
      <div class="persion-box">
        <div class="persion-box__item">姓名</div>
        <div class="persion-box__item">身份</div>
        <div class="persion-box__item">政治面貌</div>
        <div class="persion-box__item">签到日期</div>
        <div class="persion-box__item">签到时间</div>
      </div>
    </div>

    <div class="message-box">
      <div class="message-box__bar">
        <div class="message-box__bar__item2">签到时间</div>
        <div class="message-box__bar__item1">姓名</div>
        <div class="message-box__bar__item2">联系电话</div>
        <div class="message-box__bar__item2">来访明细</div>
        <div class="message-box__bar__item1">评价</div>
      </div>

      <div class="message-box__detail"></div>

      <div class="botton-box">
        <div class="botton-box__evaluate" @click="openServiceDialog">
          <div class="botton-box__evaluate__text" >服务评价</div>
        </div>

        <div class="botton-box__choose">
          <div class="botton-box__choose__text">选择服务</div>
        </div>
      </div>
    </div>

    <div class="dialog-box" v-if="showServiceDialog"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showServiceDialog: false,
    };
  },
  methods: {
    openServiceDialog() {
      this.showServiceDialog = !this.showServiceDialog;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
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
  .information {
    position: absolute;
    top: 183px;
    left: 0;
    right: 1437px;
    bottom: 0;
    background-color: #f5f5f5;

    .avatar {
      position: absolute;
      top: 19px;
      left: 222px;
      right: 61px;
      bottom: 798px;
      background: #d8d8d8;
      border: 1px solid #979797;
      border-radius: 50%;
    }

    .persion-box {
      position: absolute;
      top: 230px;
      left: 86px;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;

      &__item {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(145, 141, 141, 0.85);
        line-height: 56px;
        letter-spacing: 1px;
        margin: 0 0 95px;
      }
    }
  }
  .message-box {
    position: absolute;
    left: 483px;
    top: 183px;
    right: 0;
    bottom: 0;
    background: #ffffff;

    &__bar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 917px;
      background: #d8d8d8;
      display: flex;

      &__item2 {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 56px;
        letter-spacing: 1px;
        flex-grow: 2;
        text-align: center;
        margin: 22px;
      }

      &__item1 {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 56px;
        letter-spacing: 1px;
        flex-grow: 1;
        text-align: center;
        margin: 22px;
      }
    }

    &__detail {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 759px;
      background: #ffffff;
      border: 1px solid #979797;
    }

    .botton-box {
      position: absolute;
      top: 887px;
      left: 0;
      right: 0;
      bottom: 0;
      background: #d8d8d8;
      border: 1px solid #979797;

      &__evaluate {
        position: absolute;
        top: 0;
        left: 827px;
        right: 299px;
        bottom: 0;
        background: #efae8a;
        cursor: pointer;

        &__text {
          position: absolute;
          top: 37px;
          left: 0;
          right: 0;
          bottom: 37px;
          text-align: center;
          font-size: 40px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          line-height: 56px;
          letter-spacing: 1px;
        }
      }

      &__choose{
        position: absolute;
        top: 0;
        left: 1136px;
        right: 0;
        bottom: 0;
        background: #77B3E1;
        cursor: pointer;

        &__text{
          position: absolute;
          top: 37px;
          left: 0;
          right: 0;
          bottom: 37px;
          text-align: center;
          font-size: 40px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          line-height: 56px;
          letter-spacing: 1px;
        }
      }
    }
  }
  .dialog-box {
    position: absolute;
    top: 160px;
    left: 209px;
    right: 198px;
    bottom: 318px;
    background-color: red;
    z-index: 4;
  }
}
</style>
<template>
  <div class="container">
    <div class="title-box">
      <div class="title-box__title">XX服务中心 . 访客列表</div>
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

      <div class="detail-box">
        <div
          class="detail-box__detail"
          v-for="(item, index) in visitorList"
          :key="index"
        >
          <div class="detail-box__detail__cell2">
            {{ item.date }}<br />{{ item.time }}
          </div>
          <div class="detail-box__detail__cell1">{{ item.name }}</div>
          <div class="detail-box__detail__cell2">{{ item.phone }}</div>
          <div class="detail-box__detail__cell2">{{ item.detail }}</div>
          <div class="detail-box__detail__cell1">{{ item.evaluation }}</div>
        </div>
      </div>

      <div class="botton-box">
        <div class="botton-box__evaluate">
          <div class="botton-box__evaluate__text" @click="openEvaluateDialog">
            服务评价
          </div>
        </div>

        <div class="botton-box__choose" @click="openServiceDialog">
          <div class="botton-box__choose__text">选择服务</div>
        </div>
      </div>
    </div>

    <div
      class="dialog-mask"
      v-if="showServiceDialog"
      @click="closeServiceDialog"
    >
      <div class="dialog-box" @click.stop>
        <div class="dialog-box__consult">
          <div class="dialog-box__text">办事咨询</div>
        </div>

        <div class="dialog-box__visit">
          <div class="dialog-box__text">参观</div>
        </div>

        <div class="dialog-box__meeting">
          <div class="dialog-box__text">参加会议</div>
        </div>

        <div class="dialog-box__activity">
          <div class="dialog-box__text">参加活动</div>
        </div>

        <div class="dialog-box__remark"></div>

        <div class="botton-confirm">
          <div class="botton-confirm__text">确认</div>
        </div>

        <div class="botton-cancel" @click="closeServiceDialog">
          <div class="botton-cancel__text">取消</div>
        </div>
      </div>
    </div>

    <div
      class="dialog-mask"
      v-if="showEvaluateDialog"
      @click="closeEvaluateDialog"
    >
      <div class="dialog-evaluate">
        <div class="dialog-evaluate__good"></div>
        <div class="dialog-evaluate__general"></div>
        <div class="dialog-evaluate__bad"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showServiceDialog: false,
      showEvaluateDialog: false,
      user: {},
      visitorList: [
        {
          name: "张三",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
        {
          name: "张4",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
        {
          name: "张5",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
        {
          name: "张6",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
        {
          name: "张7",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
        {
          name: "张8",
          date: "2022-10-03",
          time: "10:10",
          phone: "133",
          detail: "test",
          evaluation: "good",
        },
      ],
    };
  },
  methods: {
    openServiceDialog() {
      this.showServiceDialog = true;
    },
    closeServiceDialog() {
      this.showServiceDialog = false;
    },
    openEvaluateDialog() {
      this.showEvaluateDialog = true;
    },
    closeEvaluateDialog() {
      this.showEvaluateDialog = false;
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

    .detail-box {
      position: absolute;
      top: 100px;
      left: 0;
      height: 787px;
      width: 1437px;
      overflow-y: auto;

      &__detail {
        top: 100px;
        left: 0;
        right: 0;
        bottom: 759px;
        background: #ffffff;
        border-bottom: 1px solid #979797;
        display: flex;

        &__cell1 {
          font-size: 35px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 49px;
          letter-spacing: 1px;
          flex-grow: 1;
          text-align: center;
          margin: 22px;
        }
        &__cell2 {
          font-size: 35px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 49px;
          letter-spacing: 1px;
          flex-grow: 2;
          text-align: center;
          margin: 22px;
        }
      }
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

      &__choose {
        position: absolute;
        top: 0;
        left: 1136px;
        right: 0;
        bottom: 0;
        background: #77b3e1;
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
    }
  }

  .dialog-mask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);

    .dialog-box {
      position: absolute;
      top: 344px;
      left: 634px;
      right: 256px;
      bottom: 317px;
      background: #e4e4e4;
      box-shadow: 3px 5px 11px 0px rgba(0, 0, 0, 0.5);
      border-radius: 21px;
      z-index: 4;

      &__consult {
        position: absolute;
        top: 93px;
        left: 33px;
        right: 793px;
        bottom: 339px;
        background: #fdfdfd;
        border-radius: 7px;
      }

      &__visit {
        position: absolute;
        top: 93px;
        left: 274px;
        right: 552px;
        bottom: 339px;
        background: #fdfdfd;
        border-radius: 7px;
      }

      &__meeting {
        position: absolute;
        top: 236px;
        left: 33px;
        right: 793px;
        bottom: 196px;
        background: #fdfdfd;
        border-radius: 7px;
      }

      &__activity {
        position: absolute;
        top: 236px;
        left: 274px;
        right: 552px;
        bottom: 196px;
        background: #fdfdfd;
        border-radius: 7px;
      }

      &__text {
        position: absolute;
        top: 33px;
        left: 0px;
        right: 0px;
        bottom: 32px;
        text-align: center;
        font-size: 30px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(111, 111, 111, 0.85);
        line-height: 42px;
      }

      &__remark {
        position: absolute;
        top: 93px;
        left: 530px;
        right: 54px;
        bottom: 185px;
        background: #ffffff;
        border: 1px solid #979797;
      }

      .botton-confirm {
        position: absolute;
        top: 431px;
        left: 326px;
        right: 534px;
        bottom: 35px;
        background: #77b3e1;
        border-radius: 21px;
        cursor: pointer;

        &__text {
          position: absolute;
          top: 16px;
          bottom: 16px;
          left: 54px;
          right: 54px;
          font-size: 30px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          line-height: 42px;
        }
      }

      .botton-cancel {
        position: absolute;
        top: 430px;
        left: 533px;
        right: 327px;
        bottom: 36px;
        background: #cbc6c3;
        border-radius: 21px;
        cursor: pointer;

        &__text {
          position: absolute;
          top: 15px;
          bottom: 15px;
          left: 54px;
          right: 54px;
          font-size: 30px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          line-height: 42px;
        }
      }
    }

    .dialog-evaluate {
      position: absolute;
      top: 343px;
      left: 692px;
      right: 198px;
      bottom: 318px;
      background: #ffffff;
      box-shadow: 3px 5px 11px 0px rgba(0, 0, 0, 0.5);
      border-radius: 21px;
      z-index: 4;

      &__good {
        position: absolute;
        top: 120px;
        left: 107px;
        right: 690px;
        bottom: 186px;
        background: url("../assets/好.png");
        background-size: 100% 100%;
      }

      &__general {
        position: absolute;
        top: 120px;
        left: 399px;
        right: 398px;
        bottom: 186px;
        background: url("../assets/中.png");
        background-size: 100% 100%;
      }

      &__bad {
        position: absolute;
        top: 120px;
        left: 691px;
        right: 106px;
        bottom: 186px;
        background: url("../assets/差.png");
        background-size: 100% 100%;
      }
    }
  }
}
</style>
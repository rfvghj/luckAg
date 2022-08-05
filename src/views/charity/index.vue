<template>
  <div class="container">
    <Header @tapMenu="tapMenu"/>
    <div class="main_box">
      <div class="charity_box" ref="charity">
        <div class="char_title">{{$t('cha.v1')}}</div>
        <div class="vote_box border_box">
          <img class="zuan_img visible-md-block visible-lg-block" src="../../assets/image/pc/zuan.png" alt="">
          <img class="nai_img visible-md-block visible-lg-block" src="../../assets/image/pc/nai.png" alt="">
          <div>{{$t('cha.v2_1')}}</div>
          <div class="vote_flex_box">
            <div class="vote_item_box">
              {{$t('cha.v2_2')}}：0
              <br>
              {{$t('cha.v2_3')}}：0
              <br>
              {{$t('cha.v2_4')}}：0
            </div>
            <div>
              {{$t('cha.v2_5')}}：0
              <br>
              {{$t('cha.v2_6')}}：0
              <br>
              {{$t('cha.v2_7')}}：0
            </div>
          </div>
        </div>
        <div class="girl_box">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 girl_md_box">
              <div class="girl_item">
                <img class="girl_img" src="../../assets/image/pc/girl1.png" alt="">
                <div class="girl_title">#1</div>
              </div>
              <div class="girl_per_box">
                <div class="jin_box">
                  <span style="position: relative;z-index: 9;">50%</span>
                </div>
                <input type="checkbox">
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 girl_md_box">
              <div class="girl_item">
                <img class="girl_img" src="../../assets/image/pc/girl2.png" alt="">
                <div class="girl_title">#2</div>
              </div>
              <div class="girl_per_box">
                <div class="jin_box">
                  <span style="position: relative;z-index: 9;">50%</span>
                </div>
                <input type="checkbox">
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 girl_md_box">
              <div class="girl_item">
                <img class="girl_img" src="../../assets/image/pc/girl3.png" alt="">
                <div class="girl_title">#3</div>
              </div>
              <div class="girl_per_box">
                <div class="jin_box">
                  <span style="position: relative;z-index: 9;">50%</span>
                </div>
                <input type="checkbox">
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 girl_md_box">
              <div class="girl_item">
                <img class="girl_img" src="../../assets/image/pc/girl4.png" alt="">
                <div class="girl_title">#4</div>
              </div>
              <div class="girl_per_box">
                <div class="jin_box">
                  <span style="position: relative;z-index: 9;">50%</span>
                </div>
                <input type="checkbox">
              </div>
            </div>
          </div>
          <div class="par_btn vote_btn btn_common">{{$t('cha.v3')}}</div>
        </div>
        <div class="history_box border_box">
          <div class="history_title">{{$t('cha.v4')}}</div>
          <div class="row his_main">
            <div class="col-xs-12  col-md-4 his_img_box">
              <img src="../../assets/image/pc/his1.png" alt="">
            </div>
            <div class="col-xs-12  col-md-4 his_img_box">
              <img src="../../assets/image/pc/his2.png" alt="">
            </div>
            <div class="col-xs-12  col-md-4 his_img_box">
              <img src="../../assets/image/pc/his3.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "@/components/Header";
  import {CHAINID} from "../../config";

  import {linkWallet, addressHandler} from "../../utils";
  import {switchEthereumChain, addToNetwork} from "../../utils/metaMask.js";
  import Strong from "../../utils/storage.js";

  export default {
    name: "home",
    components: {
      Header,
    },
    data() {
      return {
        contractShow: false,
        handShow: false,
        handFlexShow: false,
        tokenShow: false,
        currentIndex: [],
      };
    },
    mounted() {
      console.log(this.contractShow)
      window.addEventListener('scroll', this.handleScroll)
      const {invite} = this.$route.query;
      Strong.setItem("olyoly_invite", invite);
    },

    methods: {
      handleScroll () {
        let _this = this
        // console.log(this.handFlexShow)
        let refArray = [
          {ref: 'contract', show: 'contractShow'},
          {ref: 'hand', show: 'handShow'},
          {ref: 'hand_flex', show: 'handFlexShow'},
          {ref: 'token', show: 'tokenShow'},
          {ref: 'time', show: 'timeShow'},
          {ref: 'dixian', show: 'dixianShow'}
        ]
        refArray.forEach((r,i) => {
          _this.gdjz(r.ref, 200, () => {
            console.log(r.show,_this[r.show])
            _this[r.show] = true
          })
        })
      },
      gdjz (div, offset, callback) {
        let dom = this.$refs[div]
        if(dom){
          var a,b,c,d;
          d = dom.offsetTop
          a = eval(d + offset)
          b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          c = document.documentElement.clientHeight || document.body.clientHeight
          if( b > d ) {
            callback && callback()
          }
        }
      },
    },

  };
</script>

<style lang="less" scoped>
  .container {
    padding: 0;
    margin: 0;
    height: 100%;

    .font_24 {
      font-size: 0.24rem;
    }
  }

  .main_box {
    width: 100%;
    z-index: 1;
    padding: 0 0.8rem;
    margin-top: 0.92rem;
    position: absolute;
    background: url("../../assets/image/pc/bak.png");
    background-size: 100%;



    .border_box {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
    }
    .charity_box{
      margin-bottom: 0.2rem;
      color: #000;
      position: relative;

      .history_box{
        width: 100%;
        margin-top: 0.2rem;
        padding: 0;
        .his_main{
          padding: 0 0.3rem;
        }
        .his_img_box{
          margin: 0.2rem 0;
          img{
            width: 80%;
            height: auto;
            margin: 0 auto;
          }
        }
        .history_title{
          height: 0.8rem;
          line-height: 0.8rem;
          border-top-left-radius: 0.2rem;
          border-top-right-radius: 0.2rem;
          background: rgba(255,255,255,0.3);
          font-weight: bold;
          text-align: center;
        }
      }
      .girl_box{
        margin-top: 0.2rem;
        .vote_btn{
          width: 2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          text-align: center;
          margin: 0 auto;
          color: #FF9000;
        }
        .girl_per_box{
          width: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          .jin_box{
            width: 2rem;
            height: 0.2rem;
            line-height: 0.2rem;
            border-radius: 0.1rem;
            background: #fff;
            text-align: center;
            position: relative;
          }
          input[type="radio"], input[type="checkbox"]{
            margin: 0;
          }
          .jin_box:after{
            content: '';
            position: absolute;
            width: 50%;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: 0.1rem;
            background: #4E7BF6;

          }
          input{
            width: 0.5rem;
          }
        }
        .girl_md_box{
          margin-bottom: 0.2rem;
        }
        .girl_item{
          position: relative;
          .girl_title{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            margin-top: 5%;
          }
          .girl_img{
            float: left;
          }
        }
      }
      .vote_box{
        text-align: center;
        font-weight: bold;
        font-size: 0.28rem;
        position: relative;
        z-index: 9;
        .zuan_img{
          width: 1.5rem;
          height: auto;
          position: absolute;
          top: 10%;
          left: 0.5rem;
        }
        .nai_img{
          width: 1.5rem;
          height: auto;
          position: absolute;
          top: 10%;
          right: 0.5rem;
        }
        .vote_flex_box{
          position: relative;
          z-index: 9;
          font-size: 0.16rem;
          display: flex;
          justify-content: center;
          text-align: left;
          margin-top: 0.2rem;
          .vote_item_box{
            margin-right: 0.5rem;
          }
        }
      }
      .char_title {
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        font-weight: bold;
      }
    }

    .par_btn {
      border-radius: 0.2rem;
      background: linear-gradient(to right, rgba(222, 192, 202), rgba(255, 205, 241));
    }
    .ido_box {
      width: 100%;

      .ido_left {
        min-height: 7.4rem;
        margin-bottom: 0.2rem;
        padding: 0;
        .ido_main_box{
          width: 100%;
          color: #000;
          padding: 0.26rem;
          .ido_btn_box{
            width: 100%;
            margin-top: 0.2rem;
            display: flex;
            justify-content: space-evenly;
            div{
              width: 30%;
              text-align: center;
              padding: 0.15rem 0;
            }

          }
          .ido_input_box{
            width: 60%;
            position: relative;
            margin: 0 auto;
            display: flex;
            .add_btn{
              width: 0.6rem;
              height: 0.6rem;
              line-height: 0.6rem;
              text-align: center;
              font-size: 0.26rem;
              background: rgba(255,255,255,0.6);
              border-bottom-right-radius: 0.1rem;
              border-top-right-radius: 0.1rem;
            }
            .minus_btn{
              width: 0.6rem;
              height: 0.6rem;
              line-height: 0.6rem;
              text-align: center;
              font-size: 0.26rem;
              background: rgba(255,255,255,0.6);
              border-bottom-left-radius: 0.1rem;
              border-top-left-radius: 0.1rem;
            }
            .ido_input{
              width: 60%;
              height: 0.6rem;
              line-height: 0.6rem;
              text-align: center;
              background: rgba(255,255,255,0.3);
            }
          }
          .ido_percent_box{
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0 0.2rem;
            border-radius: 0.2rem;
            color: #fff;
            background: linear-gradient(to right, #B6325F, #FF887c);
          }
          .ido_pro_box{
            text-align: center;
            margin: 0.2rem 0;
          }
          .ido_item_box{
            display: flex;
            justify-content: space-between;
            margin-top: 0.2rem;
            .ido_name_box{
              color: #555555;
            }
          }
          .ido_main_title{
            text-align: center;
            font-size: 0.24rem;
            font-weight: bold;
          }
        }

        .ido_left_title {
          width: 100%;
          background: rgba(255, 255, 255, 0.3);
          border-top-left-radius: 0.2rem;
          border-top-right-radius: 0.2rem;
          padding: 0.2rem 0;

          .ido_img {
            width: 40%;
            height: auto;
            margin: 0 auto;
          }
        }
      }

      .ido_clain_box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.26rem;
        .ido_btn{
          color: #B50000;
          width: 2rem;
          height: 0.65rem;
          line-height: 0.65rem;
          text-align: center;
        }
        .ido_clain_left{
          color: #736768;
          font-size: 0.18rem;
        }
      }

      .ido_right {
        margin-bottom: 0.2rem;
        min-height: 6rem;
        padding: 0.2rem;
        position: relative;
        background: url("../../assets/image/pc/ido_right.png") no-repeat;
        background-size: 100% 100%;
        color: #000;
        .ido_right_flex_box{
          width: 60%;
          height: 5.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          margin: 0 auto;
          .ido_right_main_box{
            color: #fff;
            font-size: 0.14rem;
            .ido_right_title{
              color: #784246;
              font-size: 0.18rem;
            }
          }
        }


        .ido_right_box{
          font-weight: bold;
          text-align: center;
          font-size: 0.28rem;
        }
      }

      .ido_title {
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        font-weight: bold;
      }

    }

    .lootery_box {
      margin-bottom: 0.2rem;

      .lootery_left_box {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;

        .tickets_box {
          width: 48%;
          height: 2.5rem;
          padding: 0.2rem;

          .tickets_title {
            color: #000;
            font-weight: bold;
            text-align: center;
            font-size: 0.22rem;
          }

          .tickets_main_box {
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .pool_text {
              font-size: 0.18rem;
              /*margin-top: 0.1rem;*/
              color: #fff;
            }
          }
        }

        .pool_box {
          width: 48%;
          height: 2.5rem;
          padding: 0.2rem;

          .pool_main_box {
            width: 100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;

            .pool_text {
              font-size: 0.18rem;
              /*margin-top: 0.1rem;*/
              color: #B76300;
            }
          }

          .pool_img {
            width: 60%;
            height: auto;
            margin: 0 auto;
          }
        }
      }

      .participate_box {
        width: 100%;
        height: 6.75rem;
        color: #000;
        position: relative;

        .sun_img {
          position: absolute;
          width: 1.5rem;
          height: auto;
          right: 0.5rem;
        }

        .par_btn {
          border-radius: 0.2rem;
          background: linear-gradient(to right, rgba(222, 192, 202), rgba(255, 205, 241));
        }

        .par_input {
          height: 0.6rem;
          padding: 0 0.2rem;
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.3);
          color: #000;
        }

        .award_btn {
          width: 3rem;
          height: 0.6rem;
          line-height: 0.6rem;
          border-radius: 0.3rem;
          text-align: center;
          font-size: 0.24rem;
          font-weight: bold;
          background: linear-gradient(to right, #FF887c, #B6325F);
          margin-top: 0.4rem;
        }

        .claim_box {
          width: 100%;
          display: flex;
          margin-top: 0.4rem;

          .nft_btn {
            width: 3.2rem;
            height: 0.6rem;
            color: #000;
            margin-right: 0.2rem;
            font-size: 0.18rem;
            display: flex;
            align-items: center;
            justify-content: center;
            word-break: break-all;
          }

          .clain_btn {
            width: 3.2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #000;
            margin-right: 0.2rem;
            font-size: 0.18rem;
          }
        }

        .par_btn_main_box {
          width: 100%;
          display: flex;
          margin-top: 0.4rem;

          div {
            width: 1.8rem;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #FF9000;
            margin-right: 0.2rem;
          }
        }

        .par_info {
          font-size: 0.16rem;
          margin-bottom: 0.1rem;
        }

        .par_title {
          font-size: 0.32rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
        }
      }

      .number_box {
        height: 4.07rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 0.2rem;

        .loot_img {
          width: 2.6rem;
          height: auto;
          position: absolute;
          top: -0.9rem;
          left: 0.3rem;
        }

        .num_flex_box {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #000;
          font-size: 0.2rem;

          .num_title_box {
            font-size: 0.24rem;
            font-weight: bold;
          }

          .num_bak_box {
            width: 50%;
            position: relative;

            .loot_num_value {
              width: 80%;
              height: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              position: absolute;
              top: 0%;

              .loot_item_num {
                width: 15%;
                height: 60%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                color: #B76300;
                border: 0.03rem solid #666;
                border-radius: 0.05rem;
              }
            }
          }
        }
      }

      .my_lucky_box {
        width: 100%;
        color: #000;
        font-size: 0.32rem;
        text-align: center;
        margin: 0.2rem 0;
        position: relative;

        .ok_img {
          width: 1.2rem;
          height: auto;
          position: absolute;
          left: 0.2rem;
        }

        .butterfly_img {
          width: 1.2rem;
          height: auto;
          position: absolute;
          right: 0.2rem;
          top: 0.5rem;
        }

        .my_num {
          color: #65484B;
          font-size: 0.72rem;
        }
      }

      .lootery_title {
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        font-weight: bold;
      }
    }

    .partner_box {
      margin-bottom: 0.26rem;

      .partner_right_box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        color: #000;
        margin-bottom: 0.2rem;

        .partner_item_box {
          width: 45%;
          height: 1.8rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.2rem;
          padding: 0.26rem;
          font-size: 0.2rem;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .par_price_box {
            font-size: 0.36rem;
            color: #AC6100;
          }
        }
      }

      .partner_left_box {
        width: 100%;
        height: 5.8rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.26rem;
        margin-bottom: 0.2rem;
        position: relative;

        .sheep_img {
          width: 0.8rem;
          height: auto;
          position: absolute;
          bottom: 0rem;
          right: 0.5rem;
        }

        .per_info_box {
          font-size: 0.18rem;
          color: #000;
          margin: 0.5rem 0;
        }

        .enjoy_box {
          color: #000;
          font-size: 0.22rem;
          font-weight: bold;
          margin-top: 0.3rem;
        }

        .left_item_box {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          img {
            width: 1.5rem;
            height: auto;
          }

          .left_link_box {
            width: 60%;
            color: #000;
            font-size: 0.32rem;
            text-align: center;

            .copy_btn {
              height: 0.6rem;
              padding: 0 0.2rem;
              border-radius: 0.3rem;
              line-height: 0.6rem;
              font-size: 0.2rem;
              color: #FF9C00;
              margin-top: 0.2rem;
              text-align: center;
              background: linear-gradient(to right, rgba(222, 192, 202), rgba(255, 205, 241));

            }
          }
        }
      }

      .dash_title {
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        font-weight: bold;
      }
    }

    .dash_box {
      .dash_left_bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #000;
        margin-bottom: 0.35rem;

        .bottom_item_box {
          width: 45%;
          height: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.2rem;
          padding: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /*align-items: center;*/

          .bottom_price_box {
            font-size: 0.32rem;
          }
        }
      }

      .dash_left_top {
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.26rem;
        margin-bottom: 0.4rem;

        .mark_box {
          width: 100%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.2rem;
          padding: 0.26rem;
          margin-top: 0.2rem;
          display: flex;
          justify-content: space-between;

          .center_box {
            flex: 2;
            border-left: 0.05rem solid rgba(255, 255, 255, 0.3);
            border-right: 0.05rem solid rgba(255, 255, 255, 0.3);
          }

          .item_box {
            flex: 1;
            color: #000;
            text-align: center;

            .item_price_box {
              color: #FF5A52;
              font-size: 0.24rem;
            }
          }
        }

        .price_box {
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          .price_main_box {
            width: 3rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 0.2rem;
            padding: 0.16rem;
            color: #000;
          }

          img {
            width: 1.5rem;
            height: auto;
          }
        }
      }

      .dash_title {
        font-size: 0.8rem;
        text-align: center;
        color: #000;
        font-weight: bold;
      }
    }

    .FAQ_box2 {
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .row_box {
        column-count: 2;
        column-gap: 0;
        position: relative;

        .letter_img {
          width: 1rem;
          height: auto;
          position: absolute;
          top: 0.4rem;
          left: 45%;
        }

        .berry_img {
          width: 1rem;
          height: auto;
          position: absolute;
          bottom: 0.2rem;
          left: 45%;
        }

        .faq_item_box2 {
          width: 80%;
          margin: 0 auto;
        }
      }

      .item_title_box {
        color: #6E6E6E;
        font-weight: bold;
      }

      .FAQ_title {
        color: #4E7BF6;
        font-size: 0.59rem;
        width: 100%;
        text-align: center;
      }
    }

    .FAQ_box {
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .faq_item_box {
        margin-bottom: 0.2rem;

        .item_value_box {
          margin-top: 0.2rem;
          max-height: 0;
          overflow: hidden;
          transition: 0.3s;
        }

        .item_value_box2 {
          max-height: 10rem;
        }
      }

      .item_title_box {
        color: #6E6E6E;
        font-weight: bold;
      }

      .FAQ_title {
        color: #4E7BF6;
        font-size: 0.59rem;
        width: 100%;
        text-align: center;
      }
    }

    .token_box {
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .token_left_box {
        width: 100%;
        display: flex;
        justify-content: center;

        .cat2_img {
          width: 1.5rem;
          height: auto;
        }
      }

      .token_right_box {
        width: 80%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.1rem 0.26rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        font-size: 0.26rem;
      }

      .token_img {
        width: 2rem;
        height: auto;
        margin: 0 auto;
        margin-bottom: 0.2rem;
      }
    }

    .flex_box {
      .item_box {
        width: 100%;
        height: 3.5rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.26rem;
        margin-bottom: 0.2rem;

        .item_text_box {
          color: #000000;
          font-size: 0.14rem;
          width: 80%;
          height: 80%;
          text-align: center;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

      }
    }

    .hand_box {
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .title_box {
        width: 100%;
        text-align: center;
        color: #FF9000;
        font-size: 0.32rem;
      }
    }

    .about_main_box {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .letter_img {
        width: 1.5rem;
        /*margin: 0 auto;*/
      }

      .gif2_img {
        width: 3.5rem;
        margin: 0 auto;
      }
    }

    .contract_main_box {
      margin-bottom: 0.2rem;

      .right_box {
        padding: 0.2rem;
      }

      .left_box {
        padding: 0.2rem;
      }

      .contract_right_box {
        height: 2.2rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.26rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: auto;
        }

        .address_box {
          width: 100%;
          height: 0.6rem;
          line-height: 0.6rem;
          border-radius: 0.3rem;
          text-align: center;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.6);
          color: #A86B6B;
          font-size: 0.22rem;
        }
      }

      .contract_box {
        height: 2.2rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
        padding: 0.26rem;
        position: relative;

        .title_img {
          width: 100%;
          height: auto;
        }

        .chick_img {
          width: 20%;
          height: auto;
          position: absolute;
          top: 35%;
          right: 5%;
        }

      }
    }

    .lottery_main_box {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.2rem;
      padding: 0.26rem;
      margin-bottom: 0.2rem;

      .cat_img {
        width: 2rem;
        height: auto;
        margin: 0 auto;
      }

      .click_box {
        max-width: 4rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        line-height: 0.6rem;
        text-align: center;
        margin: 0 auto;
        background: linear-gradient(to right, rgba(222, 192, 202), rgba(255, 205, 241));
      }

      .title_box {
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
      }
    }

    .title_box {
      color: #FF9C00;
      font-size: 0.56rem;
      font-weight: bold;
      text-shadow: 0rem 0.02rem 0.02rem rgba(0, 0, 0, 0.5);
      margin-bottom: 0.3rem;
    }

    .luck_img {
      width: 260px;
      height: auto;
      margin: 0 auto;
      margin-bottom: 0.2rem;
    }

  }

  .bak_box {
    width: 100%;
    position: relative;
    top: 0.92rem;
    z-index: 2;

    .angle_img{
      width: 50%;
      height: auto;
      margin: 0 auto;
      position: relative;
      top: 5%;
      z-index: 0;
    }

    .heart_img {
      width: 15%;
      height: auto;
      position: absolute;
      top: 60%;
      left: 30%;
    }

    .music_img {
      width: 15%;
      height: auto;
      position: absolute;
      top: 20%;
      left: 30%;
    }

    .g1_img {
      width: 30%;
      height: auto;
      position: absolute;
      top: -18%;
      left: 30%;
    }

    .wing_img {
      width: 25%;
      height: auto;
      position: absolute;
      top: -5%;
      left: 55%;
    }

    .g3_img {
      width: 15%;
      height: auto;
      position: absolute;
      top: 55%;
      left: 65%;
    }

    .bak_img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

  }
</style>

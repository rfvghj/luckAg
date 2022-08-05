<template>
  <div class="container">
    <Header/>

    <div class="bak_box">
      <img class="angle_img" src="../../assets/image/pc/angle.png" alt="">
      <img class="g3_img" src="../../assets/image/pc/gif3.gif" alt="">
      <img class="wing_img" src="../../assets/image/pc/wing.gif" alt="">
      <img class="g1_img" src="../../assets/image/pc/gif1.gif" alt="">
      <img class="music_img" src="../../assets/image/pc/music.gif" alt="">
      <img class="heart_img" src="../../assets/image/pc/heart.gif" alt="">
    </div>
    <div class="main_box ">
      <img class="luck_img" src="../../assets/image/pc/lucky.png" alt="">
      <div ref="home1" class="row about_main_box" >
        <div class="col-md-5 ">
          <img class="letter_img" src="../../assets/image/pc/letter.png" alt="">
          <img class="gif2_img" src="../../assets/image/pc/gif2.gif" alt="">
        </div>
        <div class="col-md-7">
          <div class="title_box">{{$t('home.v10')}}</div>
          <div class="font_24 ">
            {{$t('home.v11')}}
          </div>
        </div>
      </div>
      <div ref="home2" class="row lottery_main_box">
        <div class="title_box">{{$t('home.v1')}}</div>
        <div class="col-md-7">
          <div class="font_24 ">
            ·{{$t('home.v2')}}
            <br>
            ·{{$t('home.v3')}}
            <br>
            ·{{$t('home.v4')}}
            <br>
            ·{{$t('home.v5')}}
            <br>
            ·{{$t('home.v6')}}
            <br>
            ·{{$t('home.v7')}}
            <br>
            ·{{$t('home.v8')}}
          </div>
        </div>
        <div class="col-md-5 ">
          <img class="cat_img" src="../../assets/image/pc/cat.png" alt="">
          <div class="click_box btn_common">
            {{$t('home.v9')}}
          </div>
        </div>
      </div>
      <div ref="home3" class=" row contract_main_box">
        <div class="col-md-6 left_box">
          <div class="contract_box">
            <img class="title_img" src="../../assets/image/pc/holder.png" alt="">
            <div style="font-size: 0.25rem;margin-top: 0.2rem;z-index: 3;position:relative;">
              <div>1. <span style="color: #1400AD">{{$t('home.v12')}}</span></div>
              <div>2. <span style="color: #008AFF">{{$t('home.v13')}}</span></div>
              <div>3. <span style="color: #00FFA2">{{$t('home.v14')}}</span></div>
            </div>
            <img class="chick_img" src="../../assets/image/pc/chick.png" alt="">
          </div>
        </div>
        <div class="col-md-6 right_box">
          <div class="contract_right_box">
            <img src="../../assets/image/pc/angel_img.png" alt="">
            <div class="address_box">0x6A4fcA7762C961F877Edbb486Dfbdb08483BEa0f</div>
          </div>
        </div>
      </div>
      <div ref="home4" class="hand_box">
        <div class="title_box">{{$t('home.v15')}}</div>
        <div style="font-size: 0.32rem;margin: 0.12rem 0;text-align: center;font-weight: bold;color: #000">
          {{$t('home.v16_1')}}
          <span style="color: #00B509">100 $</span>
          {{$t('home.v16_2')}}
        </div>
        <img style="margin-top: 0.1rem;width: 2rem;height: auto;margin: 0 auto" src="../../assets/image/pc/hand.png"
             alt="">
        <div style="color: #000;margin:0 auto;margin-top: 0.2rem;text-align: center;width: 60%;font-size: 0.24rem">
          {{$t('home.v17')}}
        </div>
      </div>
      <div class=" row flex_box">
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home5">
          <div class="item_box">
            <img style="width: 100%;height: auto;margin-bottom: 0.1rem" src="../../assets/image/pc/flex1.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v18')}}</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home6">
          <div class="item_box">
            <img style="width: 100%;height: auto;margin-bottom: 0.1rem" src="../../assets/image/pc/flex2.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v19')}}</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home7">
          <div class="item_box">
            <img style="width: 60%;height: auto;margin: 0 auto;margin-bottom: 0.1rem"
                 src="../../assets/image/pc/flex3.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v20')}}</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home8">
          <div class="item_box">
            <img style="width: 100%;height: auto;margin: 0 auto;margin-bottom: 0.1rem"
                 src="../../assets/image/pc/flex4.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v21')}}</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home9">
          <div class="item_box" >
            <img style="width: 100%;height: auto;margin: 0 auto;margin-bottom: 0.1rem"
                 src="../../assets/image/pc/flex5.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v22')}}</div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4" ref="home10">
          <div class="item_box" >
            <img style="width: 60%;height: auto;margin: 0 auto;margin-bottom: 0.1rem"
                 src="../../assets/image/pc/flex6.png" alt="">
            <div class="item_text_box">
              <div>{{$t('home.v23')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div ref="home11" class=" token_box">
        <img class="token_img" src="../../assets/image/pc/token.png" alt="">
        <div class="row">
          <div class="col-md-6">
            <div class="token_left_box">
              <div>
                <img style="width: 0.8rem;height: auto;margin: 0 auto" src="../../assets/image/pc/buy.png" alt="">
                <div style="color: #000;font-weight: bold;font-size: 0.22rem;text-align: center">
                  {{$t('home.v24_1')}}
                  <br>
                  {{$t('home.v24_2')}}
                </div>
              </div>
              <img class="cat2_img" src="../../assets/image/pc/cat2.png" alt="">
              <div>
                <img style="width: 0.8rem;height: auto;margin: 0 auto" src="../../assets/image/pc/sale.png" alt="">
                <div style="color: #000;font-weight: bold;font-size: 0.22rem;text-align: center">
                  {{$t('home.v25_1')}}
                  <br>
                  {{$t('home.v25_2')}}
                </div>
              </div>
            </div>
            <div class="title_box" style="color: #FF9933;font-size: 0.24rem;text-align: center">{{$t('home.v26')}}
            </div>
          </div>
          <div class="col-md-6" style="height: 2rem">
            <div class="token_right_box">
              <div style="color: #8C8C8C">{{$t('home.v27')}}</div>
              <div style="color: #A1784E">{{$t('home.v28')}}</div>
              <div style="color: #83A14E">{{$t('home.v29')}}</div>
              <div style="color: #4E8FA1">{{$t('home.v30')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div ref="home12" class="FAQ_box visible-xs-block visible-sm-block">
        <div class="FAQ_title">{{$t('home.v31')}}</div>
        <div class="row">
          <div class="col-md-6 faq_item_box" v-for="(item,index) in FaqList" @click="tapFaq(index)">
            <div class="item_title_box">{{$t(item.title)}}</div>
            <div class="item_value_box" :class="currentIndex.indexOf(index)>-1 ?'item_value_box2':''">{{$t(item.value)}}</div>
          </div>
        </div>
      </div>
      <div ref="home12" class="FAQ_box2 visible-md-block visible-lg-block">
        <div class="FAQ_title">FAQ's</div>
        <div class="row_box">
          <img class="berry_img" src="../../assets/image/pc/berry.png" alt="">
          <img class="letter_img" src="../../assets/image/pc/letter.png" alt="">
          <div class="faq_item_box2" v-for="(item,index) in FaqList" @click="tapFaq(index)">
            <div class="item_title_box">{{$t(item.title)}}</div>
            <div class="item_value_box3">{{$t(item.value)}}</div>
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
        FaqList: [
          {
            title: 'home.v32',
            value: 'home.v33'
          },
          {
            title: 'home.v34_1',
            value: 'home.v34_2'
          },
          {
            title: 'home.v35_1',
            value: 'home.v35_2'
          },
          {
            title: 'home.v36_1',
            value: 'home.v36_2'
          },
          {
            title: 'home.v37_1',
            value: 'home.v37_2'
          },
          {
            title: 'home.v38_1',
            value: 'home.v38_2'
          },
          {
            title: 'home.v39_1',
            value: 'home.v39_2'
          }

        ]
      };
    },
    mounted() {
      console.log(this.contractShow)
      window.addEventListener('scroll', this.handleScroll)
      const {invite} = this.$route.query;
      if (invite) Strong.setItem("olyoly_invite", invite);
    },

    methods: {
      handle(){},
      handleScroll () {
        let _this = this
        let refArray = ['home1','home2','home3','home4','home5','home6','home7','home8','home9','home10','home11','home12']
        refArray.forEach((r,i) => {
          _this.gdjz(r, 800, () => {
            this.$refs[r].classList.add('animate__animated')
            this.$refs[r].classList.add('animate__fadeInDown')
          })
        })
      },
      gdjz (div, offset, callback) {
        let dom = this.$refs[div]
        if(dom){
          var a,b,c,d;
          d = dom.offsetTop
          b = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if( b > d-offset ) {
            callback && callback()
          }
        }
      },
      tapFaq(index) {
        if(this.currentIndex.indexOf(index)>-1){
          this.currentIndex = this.currentIndex.filter(item =>item != index)
        }else{
          this.currentIndex.push(index)
        }
      }
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

  .head_box{
    width: 100%;
    padding: 0rem 0.22rem;
    font-size: 0.16rem;
    height: 0.92rem;
    box-sizing: border-box;
    background: linear-gradient(to right, #FEB0AA, #D28890);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 6;
    .head_center_box{
      display: flex;
      div{
        margin: 0 0.15rem;
        cursor: pointer;
        font-size: 0.14rem;
      }
    }
    .head_right_box{
      img{
        width: 1.6rem;
      }
    }
    .head_left_box{
      display: flex;
      align-items: center;
      .logo_img{
        width: 0.6rem;
        height: auto;
      }
      .lucky_logo_img{
        width: 1.5rem;

      }
    }
  }
  .main_box {
    width: 100%;
    z-index: 1;
    padding: 0 0.8rem;
    padding-top: 50%;
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

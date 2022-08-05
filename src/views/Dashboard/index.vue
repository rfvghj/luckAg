<template>
  <div class="container">
    <Header />
    <div class="main_box">
      <div class="dash_box" ref="dash">
        <div class="dash_title">{{$t('dash.v1')}}</div>
        <div class="row">
          <div class="col-md-6">
            <div class="dash_left_top">
              <div class="price_box">
                <img src="../../assets/image/pc/cat.png" alt="">
                <div class="price_main_box">
                  <div>{{$t('dash.v2')}}</div>
                  <div style="color: #FF9000;font-size: 0.4rem">$0.7623</div>
                </div>
              </div>
              <div class="mark_box">
                <div class="item_box">
                  <div>{{$t('dash.v3')}}</div>
                  <div class="item_price_box">$0.7623</div>
                </div>
                <div class="item_box center_box">
                  <div>{{$t('dash.v4')}}</div>
                  <div class="item_price_box">$0.7623</div>
                </div>
                <div class="item_box">
                  <div>{{$t('dash.v5')}}</div>
                  <div class="item_price_box">$0.7623</div>
                </div>
              </div>
            </div>
            <div class="dash_left_bottom">
              <div class="bottom_item_box">
                <div>{{$t('dash.v6')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
              <div class="bottom_item_box">
                <div>{{$t('dash.v7')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="dash_left_bottom">
              <div class="bottom_item_box">
                <div>{{$t('dash.v8')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
              <div class="bottom_item_box">
                <div>{{$t('dash.v9')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
            </div>
            <div class="dash_left_bottom">
              <div class="bottom_item_box">
                <div>{{$t('dash.v10')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
              <div class="bottom_item_box">
                <div>{{$t('dash.v11')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
            </div>
            <div class="dash_left_bottom">
              <div class="bottom_item_box">
                <div>{{$t('dash.v12')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
              <div class="bottom_item_box">
                <div>{{$t('dash.v13')}}</div>
                <div class="bottom_price_box"><span style="color: #0E9200">$</span>467,623</div>
              </div>
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
      if (invite) Strong.setItem("olyoly_invite", invite);
      this.$store.dispatch("linkWalletAction");
      if (ethereum.networkVersion !== CHAINID) {
        addToNetwork();
      }
      ethereum.on("accountsChanged", (accounts) => {
        this.$store.dispatch("linkWalletAction");
      });

      ethereum.on("chainChanged", (chainId) => {
        const _chainId = Number(chainId).toString(10);
        if (_chainId !== CHAINID) {
          switchEthereumChain();
        }
      });
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
    min-height: 100%;
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

    .par_btn {
      border-radius: 0.2rem;
      background: linear-gradient(to right, rgba(222, 192, 202), rgba(255, 205, 241));
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

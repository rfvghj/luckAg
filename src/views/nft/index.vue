<template>
  <div class="container">
    <Header/>
    <img class="top_img" src="../../assets/image/index/datu.png" alt="">
    <img class="top_img2" src="../../assets/image/index/iFonts--e68.png" alt="">
    <div class="main_box">
      <img class="js_img" src="../../assets/image/nft/js.png" alt="">
      <div class="detail_box">
        <img class="bak_img" src="../../assets/image/nft/cz.png" alt="">
        <img class="btn_img1" src="../../assets/image/nft/btn.png" alt="">
        <img class="btn_img2" src="../../assets/image/nft/btn.png" alt="">
        <img class="btn_img3" src="../../assets/image/nft/btn.png" alt="">
        <div class="info_box">
          （注：未来将开放铸造系统，通过支付相对应数量的SUPPER GAMBLER进行铸造，铸造成功后持有角色NFT将能获得USDT分红奖励）
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
      };
    },
    methods: {
    },

    mounted() {

      const {invite} = this.$route.query;
      Strong.setItem("olyoly_invite", invite);
    },
  };
</script>

<style lang="less" scoped>
  .main_box{
    width: 100%;
    height: 21rem;
    background: url("../../assets/image/bak.png") no-repeat;
    background-size: 100%;
    background-position: 0 2.5rem;

    .detail_box{
      width: 6.96rem;
      height: 19.82rem;
      background: url("../../assets/image/nft/bak.png") no-repeat;
      background-size: 100%;
      margin: 0 auto;
      text-align: center;
      padding-top: 0.52rem;
      position: relative;
      .info_box{
        width: 5.62rem;
        line-height: 0.46rem;
        font-size: 0.24rem;
        color: #FFA200;
        text-align: center;
        position: absolute;
        bottom: 1rem;
        left: 0.78rem;
      }
      .btn_img1{
        position: absolute;
        width: 3.98rem;
        height: auto;
        top: 4.29rem;
        left: 1.41rem;
      }
      .btn_img2{
        position: absolute;
        width: 3.98rem;
        height: auto;
        top: 10rem;
        left: 1.41rem;
      }
      .btn_img3{
        position: absolute;
        width: 3.98rem;
        height: auto;
        top: 16rem;
        left: 1.41rem;
      }
      .bak_img{
        margin: 0 auto;
        width: 6rem;
        height: auto;
      }

    }
    .js_img{
      width: 3.63rem;
      height: auto;
      margin: 0 auto;
      margin-top: 0.39rem;
    }

  }

  .top_img, .top_img2 {
    width: 100%;
    height: auto;
  }
</style>

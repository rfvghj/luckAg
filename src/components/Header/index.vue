<template>
  <div style="width: 100%;position:fixed;z-index: 9;" >
    <div class="visible-xs-inline-block visible-sm-inline-block" style="width: 100%">
      <div class="header">
        <div class="left-wrap">
          <div class="nav-icon image" @click="hasShowNav(true)"></div>
          <img class="logo_img" src="../../assets/image/pc/logo.png" alt="">
          <div class="logo-icon image"></div>
        </div>
        <div class="right-wrap" @click="linkWalletAction()">
        </div>
        <div class="nav-wrap" v-show="showNav" @click="hasShowNav(false)">
          <div class="nav-list">
            <div class="nav-item" v-for="(item,index) in menuList1" @click="goPage(item.path)" :key="index">
              <div class="item_left">
                <span>{{ $t(item.name)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="visible-md-block visible-lg-block" style="width: 100%">
      <div class="head_box">
        <div class="head_left_box">
          <img class="logo_img" src="../../assets/image/pc/logo.png" alt="">
          <img class="lucky_logo_img" src="../../assets/image/pc/lucky.png" alt="">
        </div>
        <div class="head_center_box">
          <div v-for="item in menuList1" @click="goPage(item.path)">{{$t(item.name)}}</div>
        </div>
        <div class="head_right_box" @click="linkWalletAction()" style="    width: 13%;
    height: 50px;
    background: #ff4c4b;
    text-align: center;
    line-height: 50px;
    border-radius: 20px;">
          <!-- <img src="../../assets/image/connect.png" alt=""> -->
            {{priviteAddress?priviteAddress:$t("header.connect")}}
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "heade",
  data() {
    return {
      showNav: false,
      priviteAddress:this.$store.state.showWallerAddress,
      menuList1: [
        {
          name: 'header.menu1',
          path: 'home'
        },
        {
          name: 'header.menu2',
          path: 'dash'
        },
        {
          name: 'header.menu3',
          path: 'partner'
        },
        {
          name: 'header.menu4',
          path: 'Lootery'
        },
        {
          name: 'header.menu5',
          path: 'ido'
        },
        {
          name: 'header.menu6',
          path: 'charity'
        },
        {
          name: 'header.menu7',
          path: 'language'
        }
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getUserInfoAction");
  },
  methods: {

    switchLang() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "zh";
      }
    },
    hasShowNav(flag) {
      this.showNav = flag;
    },
    goPage(name) {
      if(name == 'language'){
        this.switchLang()
      }else{
        this.$router.push({
          name
        })
      }
    },
    async linkWalletAction() {
      console.log(2);
    await  this.$store.dispatch("linkWalletAction");
    this.priviteAddress = this.$store.state.showWallerAddress;
    },
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>

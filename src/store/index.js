import Vue from 'vue'
import Vuex from 'vuex'
import { ethers } from "ethers";


import { IDO_ADDRESS, NUM } from '../config'

import {
  addressHandler,
  linkWallet
} from '../utils/metaMask'

import {
  useApprove,
  joinInvestUnion,
  buyBox,
  openBox,
  claimToken,
  enbleIdoBind,
  getUserInfo,
  joinInvest
} from '../utils'

import Strong from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    privateAddress: '',
    walletWithProvider:null,
    showWallerAddress: 'Connect Wallet',
    inviteesNumber: 0, 
    partnerAddr: '',
    amount: 0,  
    isAir: false,
    isPartner: false,
    isBind: false,
    boxNum: 0,
    yourLink: ''
  },
  getters: {
  },
  mutations: {
    walletAddressChange(state, payload) {
      state.privateAddress = payload
    },
    walletWithProviderChange(state, payload) {
      state.walletWithProvider = payload
    },
    showWallerAddressChange(state, payload) {
      state.showWallerAddress = payload
    },
    inviteesNumberChange(state, payload) {
      state.inviteesNumber = payload
    },
    partnerAddrChange(state, payload) {
      state.partnerAddr = payload
    },
    amountChange(state, payload) {
      state.amount = payload
    },
    isAirChange(state, payload) {
      state.isAir = payload
    },
    isPartnerChange(state, payload) {
      state.isPartner = payload
    },
    isBindChange(state, payload) {
      state.isBind = payload
    },
    boxNumChange(state, payload) {
      state.boxNum = payload
    },
    yourLinkChange(state, payload) {
      state.yourLink = payload
    }
  },
  actions: {
    async linkWalletAction({ commit, dispatch }, payload) {
      const obj = await linkWallet()
      const res = addressHandler(obj.address)
      const walletWithProvider1 = obj.wallet;
      const path = window.location.origin

      commit('yourLinkChange', `${path}/#/home?invite=${obj.address}`)
      commit('walletAddressChange', obj.address)
      commit('walletWithProviderChange',walletWithProvider1)
      commit('showWallerAddressChange', res)
      dispatch('getUserInfoAction')

    },
    async approveAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      return new Promise(async (resolve, reject) => {
        try {
          const res = await useApprove(account, provider, IDO_ADDRESS, payload)
          resolve(true)
        } catch (error) {

        }
      })

    },
    async joinInvestAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const res = await joinInvest('olyoly_invite', account, provider, IDO_ADDRESS)

      if (res) {
        dispatch('getUserInfoAction')
      };
    },
    async joinInvestUnionAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const res = await joinInvestUnion('olyoly_invite', account, provider, IDO_ADDRESS)

      if (res) {
        dispatch('getUserInfoAction')
      };
    },
    async buyBoxAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const res = await useApprove(account, provider, IDO_ADDRESS, 58)
      const buyRes = await buyBox(provider, IDO_ADDRESS, 1)
      if (buyRes) {
        dispatch('getUserInfoAction')
      }
    },
    async openBoxAction({ state, commit, dispatch }, payload) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      if(state.boxNum === 0) return;
      const res = await openBox(provider, IDO_ADDRESS)
      const openBoxResult = parseFloat(ethers.utils.formatEther(res)) * NUM;
      if(openBoxResult === 0) alert('SORRY DIDNOT WIN') 
      if(openBoxResult === 1) alert('CONGRATULATION, Gain NFT') 

      dispatch('getUserInfoAction')
    },
    async claimTokenAction({ state, commit, dispatch }, payload) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const res = await claimToken(provider, IDO_ADDRESS)
    },
    async enbleIdoBindAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      return new Promise(async (resolve, reject) => {
        const res = await enbleIdoBind('olyoly_invite', account, provider, IDO_ADDRESS)
        if (res) resolve(true)
      })
    },
    async getUserInfoAction({ state, commit, dispatch }, payload) {
      const account = state.privateAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const userInfo = await getUserInfo(account, provider, IDO_ADDRESS)
      const invitees = userInfo.invitees.length

      const _amount = ~~ethers.utils.formatEther(userInfo.claim)
      const isPartner = userInfo.isPartner
      const isAir = userInfo.isAir
      const bindTime = ethers.utils.formatEther(userInfo.bindTime) * NUM
      let isBind = bindTime ? true : false;
      const boxNum = ~~(parseFloat(ethers.utils.formatEther(userInfo.boxNum)) * NUM)
      
      const partnerAddr = userInfo.partnerAddr
      const partner = Strong.getItem("olyoly_invite");
      let _partnerAddress = isBind ? partnerAddr : partner

      commit('amountChange', _amount)
      commit('inviteesNumberChange', invitees)
      commit('partnerAddrChange', _partnerAddress)
      commit('isAirChange', isAir)
      commit('isPartnerChange', isPartner)
      commit('isBindChange', isBind)
      commit('boxNumChange', boxNum)
    }
  },
  modules: {
  }
})






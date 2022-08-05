import { ethers } from "ethers";
import { CHAINID } from '../config'
import Web3 from "web3";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const toHex = (num) => {
  return "0x" + num.toString(16);
};

export const formatEther = (base) => {
  return ethers.utils.formatEther(base)
};

 export const addressHandler = (address) => {
  const newAddress = address.slice(0, 4) + '....' + address.slice(-4);
  return newAddress;
}


export const linkWallet = async () => {
  var obj={
    address:"",
    wallet:null
  }
  var web3Provider;
    var windowNew = window;
    if (windowNew.ethereum) {
      web3Provider = windowNew.ethereum;
      try {
        // 请求用户授权
        await windowNew.ethereum.enable();
      } catch (error) {
        // 用户不授权时
        console.error("User denied account access");
      }
    } else if (windowNew.web3) {
      // 老版 MetaMask Legacy dapp browsers...
      web3Provider = windowNew.web3.currentProvider;
    } else {
      alert("检测到当前浏览器没有MetaMask插件！");
      web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
    }
    var web3 = new Web3(web3Provider);
    //从MetaMask中取出用户
    let provider = new ethers.providers.Web3Provider(web3Provider);
    let walletWithProvider = provider.getSigner();
    //获取input的实例
    var privateAddress = await walletWithProvider.getAddress();
    console.log(privateAddress);
    obj.address = privateAddress;
    obj.wallet = walletWithProvider;
  return obj;
}

export const addToNetwork = async () => {
  const chains = await fetcher("https://chainid.network/chains.json");
  const chain = chains.find((c) => c.networkId?.toString() === CHAINID.toString());
  const params = {
    chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
    chainName: chain.name,
    nativeCurrency: {
      name: chain.nativeCurrency.name,
      symbol: chain.nativeCurrency.symbol, // 2-6 characters long
      decimals: chain.nativeCurrency.decimals,
    },
    rpcUrls: chain.rpc,
    blockExplorerUrls: [
      chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
        ? chain.explorers[0].url
        : chain.infoURL,
    ],
  };
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [params],
  })

};


export const switchEthereumChain = async () => {
  await ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: toHex(CHAINID) }],
  });

}




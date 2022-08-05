import _ERC20_ABI from './abi/ERC20_ABI.json'
import _IDO_ABI from './abi/IDO_ABI.json'
import _NFT_ABI from './abi/NFT_ABI.json'
import _ABI from './abi/ABI.json'


export const ERC20_ABI = _ERC20_ABI
export const IDO_ABI = _IDO_ABI
export const NFT_ABI = _NFT_ABI
export const ABI = _ABI


export const APPROVE_USDT_INVEST = 100;
export const APPROVE_USDT_UNINVEST = 200;

export const NUM = '1000000000000000000';

export const CHAINID = Number(process.env.VUE_APP_CHAINID);


export const IDO_ADDRESS = process.env.VUE_APP_IDOADDRESS
export const NFT_ADDRESS = process.env.VUE_APP_NFTADDRESS
export const USTD_CONTRACT_ADDRESS = process.env.VUE_APP_USTDADDRESS



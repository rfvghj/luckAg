import { ethers } from "ethers";

import {
  ERC20_ABI,
  IDO_ABI,
  USTD_CONTRACT_ADDRESS,
  NUM
} from '../config'

import Strong from './storage'


export const useApprove = (account, library, ido_address, amount) => {
  const signer = library.getSigner();
  const daiContract_USDT = new ethers.Contract(
    USTD_CONTRACT_ADDRESS,
    ERC20_ABI,
    signer
  );
  return new Promise(async (resolve, reject) => {
    try {
      const allowance = await daiContract_USDT.allowance(account, ido_address);
      const isAllowance = Number(ethers.utils.formatEther(allowance));
      if (isAllowance < amount) {
        const approve = await daiContract_USDT.approve(ido_address, BigInt(amount * NUM));
        library.once(approve.hash, async (receipt) => {
          resolve(true)
        });
      } else {
        resolve(true)
      }
    } catch (error) {
    }
  })
}


 export const joinInvest = async (name, account, library, ido_address) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);

  let superiorAddress = Strong.getItem(name)
  if (!superiorAddress) superiorAddress = account;

  return new Promise(async (resolve, reject) => {
    try {
      const invest = await ido_daiContract.invest(account);
      library.once(invest.hash, (receipt) => {
        resolve(true)
      });
    } catch (error) {
    }
  })
}


export const joinInvestUnion = async (name, account, library, ido_address) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);
  let superiorAddress = Strong.getItem(name) 
  if (!superiorAddress) superiorAddress = account; 
  return new Promise(async (resolve, reject) => {
    try {
      const investUnion = await ido_daiContract.investUnion(superiorAddress);
      library.once(investUnion.hash, (receipt) => {
        resolve(true)
      });
    } catch (error) {
    }
  })
}



 export const buyBox = async (library, ido_address, boxNumber) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);

  return new Promise(async (resolve, reject) => {
    try {
      const res = await ido_daiContract.buyBox(boxNumber);
      library.once(res.hash, async (receipt) => {
        resolve(true)
      });
    } catch (error) {
    }
  })
}


export const openBox = async (library, ido_address) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);
  return new Promise(async (resolve, reject) => {
    try {
      const open = await ido_daiContract.openBox(Math.ceil(Math.random() * 100),{gasLimit:300000}) ;
      const res = await monitorOnOpenBox(library, ido_address)
      library.once(open.hash, async (receipt, error) => {
        resolve(res)
      })
    } catch (error) {
    }
  })
}

export const monitorOnOpenBox = async (library, ido_address) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);
  return new Promise((resolve, reject) => {
    ido_daiContract.on("OpenBox", (from, to) => {
      resolve(to)
    });
  })
}


 export const claimToken = async(library, idoAddress)=>{
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(idoAddress, IDO_ABI, signer);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await ido_daiContract.claimToken();
      library.once(res.hash, (receipt) => {
        resolve(true)
      });
    } catch (error) {

    }
  })
}


 export const enbleIdoBind = async (name, account, library, ido_address) => {
  const signer = library.getSigner();
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, signer);

  let superiorAddress = Strong.getItem(name) 
  if (!superiorAddress) superiorAddress = account; 
  
  return new Promise(async (resolve, reject) => {
    try {
      const res = await ido_daiContract.bind(superiorAddress)
      library.once(res.hash, (receipt) => {
        resolve(true)
      });
    } catch (error) {
    }
  })
}


 export const getIdoConfig = async (library, ido_address) => {
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, library);
  return new Promise(async (resolve, reject) => {
    try {
      const res = await ido_daiContract.configDetail()
      if (res) resolve(res)
    } catch (error) {

    }

  })
}

 export const getUserInfo = async (account, library, ido_address) => {
  const ido_daiContract = new ethers.Contract(ido_address, IDO_ABI, library);
  return new Promise(async (resolve, reject) => {
    try {
      const info = await ido_daiContract.userInfo(account);
      resolve(info)
    } catch (error) {

    }
  })
}

import { Death } from './DeathABI'
import { getContract, getUserAddress, towie } from './Web3'
const address = "0x5686203AD0A722B9D20F8eF1F7D061C75852199f"

export const getTime =async()=>{
    const Contract = await getContract(Death, address);
    console.log("getContract", Contract)
    const data = await Contract.methods._kothLength().call();
    return data;
}

export const KOTH = async()=>{
    const Contract = await getContract(Death, address);
    const data = await Contract.methods._inKOTH().call();
    return data;
} 

export const Winner = async()=>{
    const Contract = await getContract(Death, address);
    const data = await Contract.methods._currentKOTHWinner().call();
    return data;
}

export const WinnerAmount = async()=>{
    const Contract = await getContract(Death, address);
    const data = await Contract.methods._currentKOTHWinnings().call();
    return data/10**18;
}
import { Death } from './DeathABI'
import { getContract, getUserAddress, towie } from './Web3'
const address = "0xaF4b199F9340064838Db5EFDdB2f2a5915269b3f"

export const getTime =async()=>{
    const Contract = await getContract(Death, address);
    
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
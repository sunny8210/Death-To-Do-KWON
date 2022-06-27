import Web3 from "web3";
const web3 = new Web3(window.ethereum)

export const Login =async()=>{
   try {
    if (window.ethereum) {
        window.ethereum.enable();
    }
   } catch (error) {
    console.log(error)
   }
} 

export const getUserAddress = async()=> {
    try {
        const address = await web3.eth.getAccounts();
        return address[0]
    } catch (error) {
        console.log(error)
    }
}

export const getContract = async(abi, address)=> {
    try {
        const Contract = new web3.eth.Contract(abi, address)
        return Contract
    } catch (error) {
        console.log(error)
    }
}


export const towie = async(amount)=> {
    try {
        const number = await web3.utils.toWei(amount.toString(), 'ether');
        return number
    } catch (error) {
        console.log(error)
    }
}

export const getWeb =()=>{
    return web3
}

export const GetChainId = async()=>{
    const web3 = getWeb();
    const id = await web3.eth.getChainId();
    return id;
}
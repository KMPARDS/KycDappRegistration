import { addresses ,typechain,CustomProvider} from 'eraswap-sdk';
import {ethers} from 'ethers';

export const providerESN = new CustomProvider(process.env.REACT_APP_NODE_ENV === 'development' ? 'testnet' : 'mainnet');

export const kycInst = typechain.ESN.KycDappFactory.connect(
    (process.env.REACT_APP_NODE_ENV === 'development' 
    ? addresses.development.ESN.kycdapp
    : addresses.production.ESN.kycdapp),
    providerESN
    )

//@ts-ignore
window._ethers = ethers;
//@ts-ignore
window.providerESN = providerESN;
//@ts-ignore
window.kycInst = kycInst;
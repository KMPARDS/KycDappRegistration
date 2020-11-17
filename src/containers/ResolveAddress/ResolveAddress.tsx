import { ethers } from 'ethers';
import React, { useState } from 'react';
import { kycInst } from '../../ethereum';

export const ResolveAddress = () => {
  let username: string;
  const [kycMessage,setKycMessage] = useState('');

  async function resolveUserAddress(){
    try{
      const address = await kycInst.resolveAddressStrict(ethers.utils.formatBytes32String(username));
      setKycMessage(address);
    }catch(e){
      console.log(e);
      setKycMessage(e.message);
    }
  }

  return <div className="custom-section">
    <h2>Resolve Address</h2>
  <form>
      <div className="form-group">
        <label>Enter Username</label>
        <input type='text' className="form-control" onChange={e => (username = e.target.value)}/>
      </div>
      {kycMessage?.length ? <div className="alert alert-info">{kycMessage}</div> : null}
      <button type="button" className="btn btn-success" onClick={resolveUserAddress}>Resolve Address</button>
  </form>
  </div>
}
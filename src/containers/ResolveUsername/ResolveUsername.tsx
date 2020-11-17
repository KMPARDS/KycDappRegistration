import { ethers } from 'ethers';
import React, { useState } from 'react';
import { kycInst } from '../../ethereum';

export const ResolveUsername = () => {
  let address: string;
  const [kycMessage,setKycMessage] = useState('');

  async function resolveUserUsername(){
    try{
      const username = await kycInst.resolveUsernameStrict(address);
      
      setKycMessage(ethers.utils.parseBytes32String(username));
    }catch(e){
      console.log(e);
      setKycMessage(e.message);
    }
  }

  return <div className="custom-section">
    <h2>Resolve Username</h2>
  <form>
      <div className="form-group">
        <label>Enter Address</label>
        <input type='text' className="form-control" onChange={e => (address = e.target.value)}/>
      </div>
      {kycMessage?.length ? <div className="alert alert-info">{kycMessage}</div> : null}
      <button type="button" className="btn btn-success" onClick={resolveUserUsername}>Resolve Address</button>
  </form>
  </div>
}
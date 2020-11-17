import { ethers } from 'ethers';
import React, { useState } from 'react';
import { kycInst, providerESN } from '../../ethereum';

export const RegisterKyc = () => {
  const [state,setState] = useState({
    kycMessage: '',
    isProcessing: false
  });
    let privateKey: string,
    username: string,
    walletAddress: string,
    isGovernanceControllable: boolean = false,
    kycStatus: string = '1';

    async function submitKyc(){
      try{
        await setState({
          kycMessage: 'Processing',
          isProcessing: true
        })
        const wallet = new ethers.Wallet(privateKey);
        console.log(
          ethers.utils.formatBytes32String(username),
          walletAddress,
          isGovernanceControllable,
          kycStatus
        );
        
        const tx = await kycInst.connect(wallet.connect(providerESN)).setIdentityOwner(
          ethers.utils.formatBytes32String(username),
          walletAddress,
          isGovernanceControllable,
          kycStatus
          );
        await tx.wait();
        setState({ 
          kycMessage: tx.hash,
          isProcessing: false
        });  
      }catch(e){
        setState({ 
          kycMessage: e.message,
          isProcessing: false
        });
      }
        
    }
    return<div className="custom-section">
      <h2>Register Kyc</h2>
        <form role="form">
            <div className="form-group">
                <label>Enter Private Key</label>
                <input 
                  type={process.env.REACT_APP_NODE_ENV === 'development' ? 'text' : 'password'} 
                  onChange={e => (privateKey = e.target.value)}
                  className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Enter Kyc Username</label>
                <input 
                  type='text'
                  onChange={e => (username = e.target.value)}
                  className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Enter Kyc Wallet Address</label>
                <input 
                  type='text'
                  onChange={e => (walletAddress = e.target.value)}
                  className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Is Governance Controllable</label>
                <select className="form-control" onChange={e => ( isGovernanceControllable = Number(e.target.value) === 1 ? true : false)}>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select>
            </div>
            <div className="form-group">
                <label>Kyc Status</label>
                <select className="form-control" onChange={e => ( kycStatus = e.target.value)}>
                <option value="1" selected>Accepted</option>
                <option value="0">Pending</option>
                <option value="2">Suspended</option>
                </select>
            </div>
            {state.kycMessage?.length ? <div className="alert alert-info">{state.kycMessage}</div>: null}
            <button
              type="button"
              onClick={submitKyc}
              className="btn btn-success"
              disabled={state.isProcessing}
              >Submit</button>
        </form>
    </div>;
}
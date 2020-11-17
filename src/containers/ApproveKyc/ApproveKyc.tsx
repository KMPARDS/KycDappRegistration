import { ethers } from 'ethers';
import React, { useState } from 'react';
import { kycInst, providerESN } from '../../ethereum';

export const ApproveKyc = () => {
  const [state,setState] = useState({
    kycMessage: '',
    isProcessing: false
  });
    let privateKey: string,
    username: string,
    level: number,
    platformAddress: string,
    specialization: string,
    kycStatus: string = '1';

    async function approveKyc(){
      try{
        await setState({
          kycMessage: 'Processing',
          isProcessing: true
        })
        const wallet = new ethers.Wallet(privateKey);
        let platformIdentifier;
				if(level>1){
					platformIdentifier = ethers.utils.parseBytes32String(await kycInst.resolveUsername(platformAddress));
					if(!platformIdentifier.length)
						throw new Error('Invalid Platform Address');
				}
        const tx = await kycInst.connect(wallet.connect(providerESN)).updateKycStatus(
					ethers.utils.formatBytes32String(username),
          level,
          level > 1 && platformIdentifier ? ethers.utils.formatBytes32String(platformIdentifier) : ethers.constants.HashZero,
					level > 1 ? ethers.utils.formatBytes32String(specialization) : ethers.constants.HashZero,
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
      <h2>Approve Kyc</h2>
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
                <label>Enter Level</label>
                <input 
                    type="number" 
                    min="1" max="5" 
                    className="form-control" 
                    name="level"
                    onChange={e => (level = Number(e.target.value))}
                />
            </div>
            <div className="form-group">
                <label>Platform Address</label>
                <input 
                  type='text'
                  onChange={e => (platformAddress = e.target.value)}
                  className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Specialization</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="specialization"
                    onChange={e => (specialization = e.target.value)}
                />
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
              onClick={approveKyc} 
              className="btn btn-success"
              disabled={state.isProcessing}
              >Submit</button>
        </form>
    </div>;
}
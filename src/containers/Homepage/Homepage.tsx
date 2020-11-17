import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import { ProgressiveImage } from "../../components/ProgressiveImage";
import { kycInst } from "../../ethereum";

interface KycStatusUpdated {
  username: string,
  level: string,
  platformIdentifier: string,
  specialization: string,
  newKycStatus: string,
}

type State = {
  kycList: KycStatusUpdated[]
}
type Props = {};

export class Homepage extends React.Component<Props, State> {
  state: State ={
    kycList: []
  };

  async componentDidMount(){
    try{
      const data = (await kycInst.queryFilter(
        kycInst.filters.KycStatusUpdated(null,null,null,null,null)
      ))
      .map(log => kycInst.interface.parseLog(log))
      .map(log => ({
        username: log.args['username'],
        level: log.args['level'],
        platformIdentifier: log.args['platformIdentifier'],
        specialization: log.args['specialization'],
        newKycStatus: log.args['newKycStatus']
      } as KycStatusUpdated));
      this.setState({ kycList: data });
    }catch(e){
      console.log(e);
    }
  }

  render() {
    return (
      <section>
        <div className="custom-section">
          <Link className="btn btn-primary" to='/register'>Register</Link>
          <Link className="btn btn-primary" to='/approve'>Approve</Link>
        </div>
        <div className="container">
          <table className='table table-striped'>
            <thead>
              <td>Username</td>
              <td>Level</td>
              <td>Platform Identifier</td>
              <td>Specialization</td>
              <td>Kyc Status</td>
            </thead>
          {this.state.kycList?.length ?
            this.state.kycList.map(kyc => <tr>
              <td>{ethers.utils.parseBytes32String(kyc.username)}</td>
              <td>{kyc.level}</td>
              <td>{ethers.utils.parseBytes32String(kyc.platformIdentifier)}</td>
              <td>{ethers.utils.parseBytes32String(kyc.specialization)}</td>
              <td>{kyc.newKycStatus}  </td>
            </tr>)
          :
            <tr>
              <td colSpan={5}>No Kycs Yet</td>
            </tr>
          }
          </table>
          
        </div>
      </section>
    );
  }
}

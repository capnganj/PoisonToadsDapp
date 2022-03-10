import React from 'react';
import { ethers, BigNumber } from 'ethers'

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  tokenPrice: BigNumber;
  discountPrice: BigNumber;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return !this.props.isPaused;
  }

  render() {
    return (
      <>
        <div className="collection-status">
          <div className="user-address">
            <span className="label">Wallet address:</span>
            <span className="address">{this.props.userAddress}</span>
          </div>
          
          <div className="supply">
            <span className="label">Supply</span>
            {this.props.totalSupply}/{this.props.maxSupply}
          </div>

          <div className='mint-discount'>
            <span className='label'>Token Price</span>
            { ethers.utils.formatEther(this.props.discountPrice).slice(0,6) } Matic
          </div>

        </div>
      </>
    );
  }
}

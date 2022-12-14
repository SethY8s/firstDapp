import React, { useState, useContext } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import './connect.css';

import authContext from '../../context/authContext';

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'Web 3 Modal Demo',
      //   infuraId: process.env.REACT_APP_INFURA_KEY,
    },
  },
};

export default function Web3ModalButton() {
  const { hello } = useContext(authContext)
  
  const [web3Provider, setWeb3Provider] = useState(null);

  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );

      setWeb3Provider(web3ModalProvider);
      console.log(web3ModalProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {web3Provider ? (
        <h2 style={{ color: 'white' }}>Connected</h2>
      ) : (
        <button className="button-63" onClick={connectWallet}>
          Connect
        </button>
        
      )}
    </>
  );
}

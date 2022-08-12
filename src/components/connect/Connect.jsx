import React from 'react';
import { ethers } from 'ethers';

export default function Connect() {
  const conncetWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error(
          'You do now have MetaMask waller, please add extenison to continue'
        );
      }

      await window.ethereum.send('eth_requestAccounts');
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={() => conncetWallet()}>Connect to MetaMask</button>;
}

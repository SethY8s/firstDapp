import React from 'react';
import Crypto from './Crypto';
import './crypto.css';

export default function CryptoHome() {
  const cryptoInformation = [
    {
      tag: 'BTC',
      name: 'Bitcoin',
      image:
        'https://brandpalettes.com/wp-content/uploads/2021/06/bitcoin-color-codes.svg',
    },
    {
      tag: 'ETH',
      name: 'Ethereum',
      image:
        'https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png',
    },
    {
      tag: 'DOT',
      name: 'PolkaDot',
      image:
        'https://www.freelogovectors.net/wp-content/uploads/2022/05/polkadot_logo_dot_freelogovectors.net_-400x400.png',
    },
  ];

  return (
    <div className="crypto_home_container">
      {cryptoInformation.map((el) => (
        <Crypto props={el} />
      ))}
    </div>
  );
}

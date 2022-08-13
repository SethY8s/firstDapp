import React from 'react';
import Crypto from './Crypto';

export default function CryptoHome() {
  const meh = ['BTC', 'ETH', 'DOT'];

  return (
    <div>
      {meh.map((el) => (
        <Crypto props={el} />
      ))}
    </div>
  );
}

import React from 'react';
import Connectwallet from '../connect/Connectwallet';
import Web3ModalButton from '../connect/Web3ModalButton';

export default function Navbar() {
  return (
    <div>
      <Connectwallet />
      <Web3ModalButton />
    </div>
  );
}

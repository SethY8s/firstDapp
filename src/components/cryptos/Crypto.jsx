import React from 'react';
import InfoModal from './InfoModal';
import './crypto.css'
import Modal from 'react-modal';

export default function Crypto({ props }) {
  return (
    <div className='crypto_crypto_container'>
        {/* <div className='Crypto_Image'></div> */}
        <img className='Crypto_Image' src={props.image} alt="Crypto Logo" />
      <h4>{props.name}</h4>
      <div></div>
      <span>
        <button className="button-62">Down</button>
        <button className="button-62"> Up</button>
      </span>
      <div className='bar'></div>
      <InfoModal />
    </div>
  );
}



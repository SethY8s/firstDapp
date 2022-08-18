import React, { useState, useEffect, useRef } from 'react';
import InfoModal from './InfoModal';
import './crypto.css';
import Modal from 'react-modal';
import axios from 'axios';

export default function Crypto({ props }) {
  const effectRan = useRef(false);

  const [coinData, setCoinData] = useState('');

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchCoinData = async () => {
        try {
          const coin = await axios(
            `https://api.coingecko.com/api/v3/coins/${props.name.toLowerCase()}`
          );
          console.log(coin.data.market_data.current_price.usd);
          setCoinData(coin.data.market_data.current_price.usd);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCoinData();

      return () => {
        effectRan.current = true;
      }
    }
  }, []);

  return (
    <div className="crypto_crypto_container">
      {/* <div className='Crypto_Image'></div> */}
      <img className="Crypto_Image" src={props.image} alt="Crypto Logo" />
      <h4>{props.name}</h4>
      <div></div>
      <span>
        <button className="button-62">Down</button>
        <button className="button-62 button-62-up"> Up</button>
      </span>
      <div className="bar"></div>
      <InfoModal coinProps={props} coinPrice={coinData} />
    </div>
  );
}

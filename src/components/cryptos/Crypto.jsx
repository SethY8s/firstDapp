import React, { useState, useEffect, useRef } from 'react';
import InfoModal from './InfoModal';
import './crypto.css';
import Modal from 'react-modal';
import axios from 'axios';
import { useMoralis } from 'react-moralis';

export default function Crypto({ props }) {
  const effectRan = useRef(false);

  const [coinData, setCoinData] = useState('');
  const [ratio, setRatio] = useState();
  const { Moralis, isInitialized } = useMoralis();

  useEffect(() => {
    if (isInitialized) {
      getVotes(props.tag, setRatio);
    }
  }, [isInitialized]);

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
      };
    }
  }, []);

  const getVotes = async (tick, setRatio) => {
    const Voters = Moralis.Object.extend('Voters');
    const query = new Moralis.Query(Voters);
    query.equalTo('ticker', tick);
    query.descending('createdAt');
    const results = await query.first();
    let up = Number(results.attributes.up);
    let down = Number(results.attributes.down);
    let ratios = Math.round((up / (up + down)) * 100);
    setRatio(ratios);
    console.log(props.name, up, down);
  };

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
      <div className="bar">
        <div style={{ width: `${ratio}%` }} className="inner-bar"></div>
      </div>
      <InfoModal coinProps={props} coinPrice={coinData} />
    </div>
  );
}

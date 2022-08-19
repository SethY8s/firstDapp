import React, { useState, useEffect, useRef } from 'react';
import InfoModal from './InfoModal';
import './crypto.css';
import axios from 'axios';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import vote from './voteFunction';

export default function Crypto({ props }) {
  const effectRan = useRef(false);

  const [coinData, setCoinData] = useState('');
  const [ratio, setRatio] = useState();
  const { Moralis, isInitialized, isAuthenticated } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  useEffect(() => {
    if (isInitialized) {
      getVotes(props.tag, setRatio);

      const createLiveQuery = async () => {
        let query = new Moralis.Query('Voters');
        let subscription = await query.subscribe();
        subscription.on('update', (object) => {
          if (object.attributes.ticker === props.tag) {
            getVotes(props.tag, setRatio);
          }
        });
      };
      createLiveQuery();
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

  // const vote = async (voteType) => {
  //   const options = {
  //     contractAddress: '0x9B978C23b1198050BCa1b98bE6688986AC16038d',
  //     functionName: 'vote',
  //     abi: [
  //       {
  //         inputs: [
  //           {
  //             internalType: 'string',
  //             name: '_ticker',
  //             type: 'string',
  //           },
  //           {
  //             internalType: 'bool',
  //             name: '_vote',
  //             type: 'bool',
  //           },
  //         ],
  //         name: 'vote',
  //         outputs: [],
  //         stateMutability: 'nonpayable',
  //         type: 'function',
  //       },
  //     ],
  //     params: {
  //       _ticker: props.tag,
  //       _vote: voteType,
  //     },
  //   };

  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       console.log('vote succesful');
  //     },
  //     onError: (error) => {
  //       alert(error);
  //     },
  //   });
  // };

  return (
    <div className="crypto_crypto_container">
      {/* <div className='Crypto_Image'></div> */}
      <img className="Crypto_Image" src={props.image} alt="Crypto Logo" />
      <h4>{props.name}</h4>
      <div></div>
      <span>
        <button
          onClick={() => {
            vote(false);
          }}
          className="button-62"
        >
          Down
        </button>
        <button
          onClick={() => {
            vote(true);
          }}
          className="button-62 button-62-up"
        >
          {' '}
          Up
        </button>
      </span>
      <div className="bar">
        {ratio > 50 ? (
          <div style={{ width: `${ratio}%` }} className="inner-bar"></div>
        ) : (
          <div
            style={{ width: `${ratio}%`, backgroundColor: 'red' }}
            className="inner-bar"
          ></div>
        )}
      </div>
      <InfoModal coinProps={props} coinPrice={coinData} />
    </div>
  );
}

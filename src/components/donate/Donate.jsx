import React from 'react';
import './donate.css';

export default function Donate() {
  return (
    <div className="donate-container">
      <div className="donate">
        <h4>If you enjoyoed my first Dapp, feel free to Donate</h4>
        <p>
          Please note that the smart contract is on a test node, meaning you
          will use goelri eth to vote, however donations are in main net eth.
        </p>
        <input type="text" placeholder="Amount" />
        <button>Submit</button>
      </div>
    </div>
  );
}

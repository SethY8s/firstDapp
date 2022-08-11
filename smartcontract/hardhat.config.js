require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
const dotenv = require('dotenv');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  newworks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env,
  },
};

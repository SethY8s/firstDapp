require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');

const dotenv = require('dotenv');
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',

  networks: {
    goerli: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

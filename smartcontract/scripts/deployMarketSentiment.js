const hre = require('hardhat');

async function main() {
  const MarketSentimnet = await hre.ethers.getContractFactory(
    'MarketSentiment'
  );
  const marketsentiment = await MarketSentimnet.deploy();

  await marketsentiment.deployed();

  console.log('MarketSentiment', marketsentiment.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

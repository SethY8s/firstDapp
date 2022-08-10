const {
  time,
  loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers');
const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs');
const { expect } = require('chai');

describe('MarketSentiment', function () {
  let contract;
  let owner;

  beforeEach(async function () {
    const MarketSentiment = await ethers.getContractFactory('MarketSentiment');
    const marketsentiment = await MarketSentiment.deploy();
    contract = await marketsentiment.deployed();

    [owner] = await ethers.getSigners();
  });

  // it("Should return the new greeting once it's changed", async function () {
  //   expect(await contract.greet()).to.equal("Hello, world!");
  //   const setGreetingTx = await contract.setGreeting("Hola, mundo!");
  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();
  // });

  it('blabla', async function () {
    const test = await contract.addTicker('BTC');
    const tickArr = await contract.getArr(0);
    expect(tickArr).to.equal('BTC');
  });
});

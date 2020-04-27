const UniboCoin = artifacts.require('UniboCoin');
const { getAccountsAndNodes } = require('../utils.js');

contract('UniboCoin: test if deployment initial status is correct', () => {
  let nodes = [];
  let allAccounts = [];
  let accountsOfNode = [];

  // With this function we retrieve all the accounts
  // on all the available Quorum nodes
  before(async () => {
    let result = await getAccountsAndNodes();
    nodes = result.nodes;
    allAccounts = result.allAccounts;
    accountsOfNode = result.accountsOfNode;
  });

  it('should put 10000 UniboCoins in the first account of NODE_1', () =>
    UniboCoin.deployed()
      .then(instance => instance.balanceOf(accountsOfNode[0][0]))
      .then(balance => {
        assert.equal(
          balance.valueOf(),
          10000,
          "10000 wasn't in the first account"
        );
      }));

  it('should put 0 UniboCoins in the other accounts', () => {
    // Loop starts from 1, since accounts[0] is
    // the first account of Node 1, that has 10000 UB
    for (let i = 1; i < allAccounts.length; ++i) {
      UniboCoin.deployed()
        .then(instance => instance.balanceOf(allAccounts[i]))
        .then(balance => {
          assert.equal(
            balance.valueOf(),
            0,
            'more than 0 was in the first account'
          );
        });
    }
  });
});

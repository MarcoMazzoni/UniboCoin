const UniboCoin_private = artifacts.require('UniboCoin_private');
const { getAccountsAndNodes } = require('../utils.js');

describe('UniboCoin_private contract: test if deployment initial status is correct', () => {
  let nodes = [];
  let accounts = [];
  let accountsOfNode = [];

  // With this function we retrieve all the accounts
  // on all the available Quorum nodes
  before(async function() {
    let result = await getAccountsAndNodes();
    nodes = result.nodes;
    accounts = result.allAccounts;
    accountsOfNode = result.accountsOfNode;
  });

  it('should put 10000 UniboCoins in the first account of NODE_1', () =>
    UniboCoin_private.deployed()
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
    for (let i = 1; i < accounts.length; ++i) {
      UniboCoin_private.deployed()
        .then(instance => instance.balanceOf(accounts[i]))
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

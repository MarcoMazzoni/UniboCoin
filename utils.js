const Web3 = require('web3');
const { networks } = require('./truffle-config.js');

async function getAccountsAndNodes() {
  let nodes = []; // list of RPC clients (Quorum Nodes)
  let allAccounts = []; // list of all accounts on all nodes
  let accountsOfNode = []; // list of accounts per node

  for (let networkName in networks) {
    // create the reference to the geth
    // instance of each node
    quorumClient = new Web3(
      new Web3.providers.HttpProvider(
        'http://localhost:' + networks[networkName].port
      )
    );
    nodes.push(quorumClient);
    accountList = await quorumClient.eth.getAccounts();
    accountsOfNode.push(accountList); // bidimensional
    allAccounts = [...allAccounts, ...accountList];
  }

  return {
    nodes: nodes,
    allAccounts: allAccounts,
    accountsOfNode: accountsOfNode
  };
}

module.exports.getAccountsAndNodes = getAccountsAndNodes;

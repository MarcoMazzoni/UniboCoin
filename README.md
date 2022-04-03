# UniboCoin
Implementation of an ERC20 token using Truffle. 
The token contracts are deployed on a **ConsenSys Quorum** private network (https://github.com/ConsenSys/quorum).

## Structure
The project has the following structure:

```
UniboCoin
├── contracts
│   ├── Migrations.sol
│   └── UniboCoin.sol
├── migrations
│   ├── 1_initial_migration.js
│   ├── 2_deploy_public_token.js
│   └── 3_deploy_private_token.js
├── package.json
├── package-lock.json
├── test
│   ├── test_deployment.js
│   └── test_private_deployment.js
├── truffle-config.js
└── utils.js
```

## Explanation
It is worth noting that:
* The `2_deploy_public_token.js` migration file deploys the token on all Quorum nodes, as if the network was a common Ethereum private network.
* The `3_deploy_private_token.js` migration file makes deployment private to the nodes specified in the `privateFor:` field of the `deploy` method.

In order to make a private deployment in Quorum, it is necessary to specify the Tessera public keys of the target nodes.

## Requirements
You need to setup a local private Quorum network. Then, you need to specify the network nodes in the `truffle-config.js` file. 

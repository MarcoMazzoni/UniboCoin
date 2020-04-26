const UniboCoin = artifacts.require('UniboCoin');

module.exports = function(deployer) {
  const _name = 'UniboCoin';
  const _symbol = 'UB';
  const _amount = 10000;

  deployer.deploy(UniboCoin, _name, _symbol, _amount);
};

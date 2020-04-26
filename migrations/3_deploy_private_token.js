const UniboCoin_private = artifacts.require('UniboCoin_private');
const tesseraKeys = [
  'gB2qBmx+Zcu6aiHEny+thOlYXQsheDeunB5ohr4GZSQ=',
  'oqIiW27AYGJYTJuAgbZdX8ooUoR0WaZup3l79xdpclc=',
  '45VIqLNK7ep6DbCKG9qEiCkmuXIgyQnaQ224ufluVgw='
];

module.exports = function(deployer) {
  const _name = 'UniboCoin';
  const _symbol = 'UB';
  const _amount = 10000;

  deployer.deploy(UniboCoin_private, _name, _symbol, _amount, {
    privateFor: [tesseraKeys[1], tesseraKeys[2]]
  });
};

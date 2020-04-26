pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UniboCoin is ERC20 {
    constructor(string memory _name, string memory _symbol, uint256 _amount)
      ERC20(_name, _symbol) public {
        require(_amount > 0, "Amount has to be greater than 0");
        _mint(msg.sender, _amount);
    }
}

contract UniboCoin_private is ERC20 {
    constructor(string memory _name, string memory _symbol, uint256 _amount)
      ERC20(_name, _symbol) public {
        require(_amount > 0, "Amount has to be greater than 0");
        _mint(msg.sender, _amount);
    }
}
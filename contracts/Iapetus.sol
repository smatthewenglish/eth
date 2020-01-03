pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Iapetus is ERC20 {
  
  uint public INITIAL_SUPPLY = 50;
  uint8 public decimals = 0;

  string public symbol = "TSCHX";
  string public name = "iapetus";
    
  constructor() public {

      _mint(msg.sender, INITIAL_SUPPLY);
  }

}
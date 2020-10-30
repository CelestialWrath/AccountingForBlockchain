pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Stock is ERC1155 {
    uint256 public constant SURFBOARD = 0;
    uint256 public constant SKATEBOARD = 1;
    uint256 public constant SHINPADS = 2;
    uint256 public constant KNEEPADS = 3;
    uint256 public constant HELMET = 4;

    constructor() public ERC1155("") {
        _mint(msg.sender, SURFBOARD, 40, "");
        _mint(msg.sender, SKATEBOARD, 50, "");
        _mint(msg.sender, SHINPADS, 50, "");
        _mint(msg.sender, KNEEPADS, 50, "");
        _mint(msg.sender, HELMET, 30, "");
    } 
}
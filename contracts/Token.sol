// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// This will import all the variables and methods of contracts mentioned after <is<
// So we can accessing and override them according to our needs.
contract AAAtoken is ERC20, ERC20Burnable, Ownable {
    uint256 public tokenPrice;
    uint256 public maxSupply;

    constructor() ERC20("AAAtoken", "AAA") {
        // Setting token price to 0.2 ether
        tokenPrice = 2000000000000000;

        // Max supply is 150 tokens
        maxSupply = 150000000000000000000;
    }

    function mint(uint256 amount) public payable {
        // checking if totalSupply + requested amount is <= max allowed Supply(maxSupply)
        require(totalSupply() + amount <= maxSupply, "Exceeding max supply");

        // checking if ether sent by minter is in accordence with tokenPrice and amount.
        require(
            (msg.value * 10**decimals()) / amount >= tokenPrice,
            "Pay Ether according to Token Price"
        );

        // This _mint() function is provided by OpenZeppelin ERC20 contract. There are generic codes that every ERC20 contract must have. OpenZeppelin helps us by removing the need to writing generic code and focus on requirement part.
        _mint(msg.sender, amount);
    }

    function withdrawEther() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // We are returning multiple things from single function here so that we won<t have to call each getter function one by one.
    function returnState()
        public
        view
        returns (
            uint256 _myBalance,
            uint256 _maxSupply,
            uint256 _totalSupply,
            uint256 _tokenPrice
        )
    {
        return (balanceOf(msg.sender), maxSupply, totalSupply(), tokenPrice);
    }
}

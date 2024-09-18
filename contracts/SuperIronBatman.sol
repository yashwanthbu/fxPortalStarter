// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract SuperIronBatman is ERC721A{
    address public owner;
    uint256 public max = 5;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmXHX7P1XvvzGXcCfJsA4z73Nem2rAe5H3iS79MfR3pVuP";

    string public prompt =
        "superman with a batman mask fighting with ironman";

    constructor() ERC721A("SuperBatIronMan", "SBI") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= max ,"Allowed Nfts = 5");
        _mint(msg.sender, quantity);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}

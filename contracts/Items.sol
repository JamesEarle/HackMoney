// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Receiver.sol";
import "./ERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Items is ERC1155, ERC1155Receiver, ERC2981 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC1155("https://ipfs/{id}.json") {}

    function royaltyInfo(uint256 _tokenId, uint256 _salePrice)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        return (address(0), 1);
    }

    function addItem() public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId, 1, "");

        return newItemId;
    }

    function addItems(uint256 tokenCount) public {
        uint256[] memory tokenIds = new uint256[](tokenCount);
        uint256[] memory tokenAmounts = new uint256[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            _tokenIds.increment();
            tokenIds[i] = _tokenIds.current();
            tokenAmounts[i] = 1;
        }

        _mintBatch(msg.sender, tokenIds, tokenAmounts, "");
    }

    function onERC1155Received(
        address owner,
        address,
        uint256 id,
        uint256,
        bytes memory
    ) public virtual override returns (bytes4) {
        _mint(owner, id, 1, "");
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] memory ids,
        uint256[] memory values,
        bytes memory data
    ) public virtual override returns (bytes4) {
        for (uint256 i = 0; i < ids.length; i++) {
            _mint(operator, ids[i], 1, "");
        }
        return this.onERC1155BatchReceived.selector;
    }
}

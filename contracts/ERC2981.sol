// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "./IERC2981.sol";
import "@openzeppelin/contracts/introspection/ERC165.sol";

abstract contract ERC2981 is ERC165, IERC2981 {
    constructor() internal {
        _registerInterface(ERC2981(address(0)).royaltyInfo.selector);
    }
}

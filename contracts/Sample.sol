// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Sample {
    string public name = "James";

    function setName(string memory _name) public {
        name = _name;
    }
}

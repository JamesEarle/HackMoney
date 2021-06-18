// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sample {
    string name = "James";

    function setName(string memory _name) public {
        name = _name;
    }
}

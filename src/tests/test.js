/* Truffle gives us certain objects that are "undefined" to eslint */
/* eslint-disable no-undef */

const { assert } = require("chai");

const Sample = artifacts.require('Sample');

contract('Sample', () => {
    let _sample;

    before(async () => {
        _sample = await Sample.deployed();
    })

    describe('properties exist', async () => {
        it("has documentCount", async () => {
            const name = await _sample.name();
            assert.equal(name, "James");
        })
    });
})
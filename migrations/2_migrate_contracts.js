const Items = artifacts.require('Items');

module.exports = async (deployer) => {
  deployer.deploy(Items);
}

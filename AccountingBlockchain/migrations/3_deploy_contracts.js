var Stock = artifacts.require("Stock");

module.exports = function(deployer) {
  deployer.deploy(Stock);
};

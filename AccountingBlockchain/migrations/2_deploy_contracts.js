var Accounting = artifacts.require("Accounting");
var Stock = artifacts.require("Stock");

module.exports = function(deployer) {
  deployer.deploy(Accounting);
  deployer.deploy(Stock);
};

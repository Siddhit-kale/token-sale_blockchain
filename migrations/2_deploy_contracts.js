const DappToken = artifacts.require("DappToken");
const DappTokenSale = artifacts.require("DappTokenSale");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function() {
    // Ensure the token price is set correctly
    var tokenPrice = 1000000000000000; // 1 finney
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  });
};

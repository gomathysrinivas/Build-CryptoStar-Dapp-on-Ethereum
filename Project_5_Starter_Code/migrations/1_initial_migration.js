const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

 // module.exports = function(deployer, accounts[3]) {
    // Use the accounts within your migrations.
   // deployer.deploy(Migrations);
  
  
};

/**
 * voilà
 */

const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic mnemonic";
const infuraKey = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

module.exports = {

  networks: {

    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/00000000000000000000000000000000"),
      network_id: 1,      
      gas: 5000000,
      gasPrice: 5e9,
      confirmations: 2,   
      timeoutBlocks: 200,  
      skipDryRun: true     
    },

  },

  mocha: {},

  compilers: {
    solc: {}
  }
}

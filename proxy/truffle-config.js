const mnemonic = "";

/*
 * References - Truffle Configuration:
 * https://truffleframework.com/docs/truffle/reference/configuration - Truffle
 * Commands:
 * https://truffleframework.com/docs/truffle/reference/truffle-commands -
 * web3.js 1.0 API : https://web3js.readthedocs.io/en/1.0/
 */
module.exports = {
  contracts_directory : "./contracts",
  contracts_build_directory : "./build/contracts",
  migrations_directory : "./migrations",

  networks : {
    development : {
      host : '127.0.0.1',
      port : 8070, 
      network_id : 37,
      from : '0xC5776C5d4ba76dD38424A160927c6B7054b55edD',
      gas : 6000000, // Gas limit used for deploys.
  	  gasPrice : 10000000000 // Gas price used for deploys
    }
  },

  mocha : {
    useColors : true
  },

  compilers : {
    solc : {
      version : "^0.5.4",
      settings : {
        optimizer : {
          enabled : true,
          runs : 200
        }
      }
    }
  }
};


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/artifacts/',
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.0",
    }
  }
};

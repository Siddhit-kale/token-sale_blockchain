module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // ✅ Keep as a number, no quotes needed
      network_id: "*" // ✅ Match any network
    },
  //   rinkeby: {
  //     host: "localhost",
  //     port: 8545,
  //     network_id: 4,
  //     gas: 4700000
  //   }
  }
};

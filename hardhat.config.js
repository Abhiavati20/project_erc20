// We need to import these extensions in order for hardhat to function properly
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// We need hardhat-etherscan to upload(verify) aur smart contractto etherscan.
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
  },
};

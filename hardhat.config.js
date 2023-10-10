require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "VGJ-6WuDF0_iZpw4xQZmFjXoNVy7IzfQ";
const SEPOLIA_PRIVATE_KEY = "df5cbe0889b12a764798059945f4e7e1c5ba9867ce5c999c782d91bf97d1c07f";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "7IWTRK9FKI1FEZK2TEEI3URCMA5YE5UQK5",
  },
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[SEPOLIA_PRIVATE_KEY]
    }
  }
};

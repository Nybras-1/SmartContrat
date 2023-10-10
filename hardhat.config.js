require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "Ingresar su propio API JEY de ALCHEMY";
const SEPOLIA_PRIVATE_KEY = "Ingresar clave pricada de la cuenta a utilizar";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan: {
    apiKey: "Ingresar API KEY generada, desde la cuenta de EtherScan",
  },
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[SEPOLIA_PRIVATE_KEY]
    }
  }
};

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const config: HardhatUserConfig = {
  etherscan: {
    apiKey: {
      blast_sepolia: "blast_sepolia",
      goerli: "KBF2X687NQT93U9JY7554N93JQCX5WBJSM",
      sepolia: "KBF2X687NQT93U9JY7554N93JQCX5WBJSM",
    },
    customChains: [
      {
        network: "blast_sepolia",
        chainId: 168587773,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io"
        }
      },
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io"
        }
      },
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      }
    ]
  },
  networks: {
    blast_sepolia: {
      url: 'https://sepolia.blast.io',
      accounts: [process.env.PRIVATE_KEY as string]
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY as string]
    },
    sepolia: {
      url: 'https://ethereum-sepolia.publicnode.com',
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "solidity-coverage";

const accounts = process.env.NETWORK_RPC_ENDPOINT_PRIVATE_KEY && {
  accounts: [process.env.NETWORK_RPC_ENDPOINT_PRIVATE_KEY],
};

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    artifacts: "src/artifacts",
    sources: "src/contracts",
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v6",
    // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    alwaysGenerateOverloads: false,
    // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    externalArtifacts: ["externalArtifacts/*.json"],
  },
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          chainId: 1337,
          allowUnlimitedContractSize: true,
      },
      ganache: {
          chainId: 1337, //event though config says it's 5777
          url: process.env.NETWORK_RPC_ENDPOINT ?? "http://127.0.0.1:7545",
          allowUnlimitedContractSize: true,
          ...accounts,
      },
      mumbai: {
          chainId: 80001,
          url:
              process.env.NETWORK_RPC_ENDPOINT ??
              "https://matic-mumbai.chainstacklabs.com",
          ...accounts,
      },
      polygon_mainnet: {
          chainId: 137,
          url: process.env.NETWORK_RPC_ENDPOINT ?? "https://polygon-rpc.com",
          ...accounts,
      },
      hardhat_node: {
          chainId: 1337,
          url: "http://127.0.0.1:8545",
          allowUnlimitedContractSize: true,
      },
  },
  etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};

export default config;

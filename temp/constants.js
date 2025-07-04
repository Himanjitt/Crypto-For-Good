import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

export const CrowdFundingAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
if (!CrowdFundingAddress) {
  console.error(
    "Contract address not configured. Please set NEXT_PUBLIC_CONTRACT_ADDRESS in .env file"
  );
}

export const NETWORK = process.env.NEXT_PUBLIC_NETWORK || "localhost";

export const CrowdFundingABI = crowdFunding.abi;

const networks = {
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_sepolia"],
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  },
  localhost: {
    chainId: `0x${Number(1337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://etherscan.io/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = NETWORK;
  await changeNetwork({ networkName });
};

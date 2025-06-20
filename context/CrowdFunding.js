import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

//INTERNAL  IMPORT
import {
  CrowdFundingABI,
  CrowdFundingAddress,
  handleNetworkSwitch,
} from "./constants";

//---FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const titleData = "Crowd Funding Contract";
  const [currentAccount, setCurrentAccount] = useState("");

  const getAddress = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      return accounts[0];
    } catch (error) {
      console.log("Something wrong while connecting to wallet");
    }
  };

  const createCampaign = async (campaign) => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      if (!currentAccount) {
        await connectWallet();
      }

      if (
        !CrowdFundingAddress ||
        CrowdFundingAddress === "DEPLOYED_CONTRACT_ADDRESS"
      ) {
        alert(
          "Contract address not configured. Please make sure you have deployed your contract and set the address in .env file"
        );
        return;
      }

      const { title, description, amount, deadline } = campaign;
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      try {
        const contract = fetchContract(signer);
        console.log("Contract Address:", CrowdFundingAddress);
        console.log("Current Account:", currentAccount);

        const transaction = await contract.createCampaign(
          currentAccount, // owner
          title, // title
          description, // description
          ethers.utils.parseUnits(amount, 18),
          Math.floor(new Date(deadline).getTime() / 1000) // deadline,
        );

        await transaction.wait();
        console.log("contract call success", transaction);
        window.location.reload();
      } catch (error) {
        console.error("Contract call failure:", error);
        if (error.message.includes("resolver or addr is not configured")) {
          alert(
            "Contract address is not properly configured. Please check your .env file and make sure you've deployed your contract."
          );
        } else {
          alert("Error creating campaign: " + error.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);
    }
  };

  const getCampaigns = async () => {
    try {
      const address = await checkIfWalletConnected();
      if (address) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();

        const parsedCampaings = campaigns.map((campaign, i) => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.utils.formatEther(campaign.target.toString()),
          deadline: campaign.deadline.toNumber(),
          amountCollected: ethers.utils.formatEther(
            campaign.amountCollected.toString()
          ),
          pId: i,
        }));
        console.log(parsedCampaings);
        return parsedCampaings;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserCampaigns = async () => {
    try {
      const address = await checkIfWalletConnected();
      if (address) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();

        const filteredCampaigns = allCampaigns.filter(
          (campaign) => campaign.owner.toLowerCase() === address.toLowerCase()
        );

        const userData = filteredCampaigns.map((campaign, i) => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.utils.formatEther(campaign.target.toString()),
          deadline: campaign.deadline.toNumber(),
          amountCollected: ethers.utils.formatEther(
            campaign.amountCollected.toString()
          ),
          pId: i,
        }));
        console.log(userData);
        return userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const donate = async (pId, amount) => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const campaignData = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      });

      await campaignData.wait();
      window.location.reload();

      return campaignData;
    } catch (error) {
      console.log(error);
    }
  };

  const getDonations = async (pId) => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const contract = fetchContract(provider);

      const donations = await contract.getDonators(pId);
      const numberOfDonations = donations[0].length;

      const parsedDonations = [];

      for (let i = 0; i < numberOfDonations; i++) {
        parsedDonations.push({
          donator: donations[0][i],
          donation: ethers.utils.formatEther(donations[1][i].toString()),
        });
      }

      return parsedDonations;
    } catch (error) {
      console.log(error);
    }
  };

  //---CHECK IF WALLET IS CONNECTD
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");
      const network = await handleNetworkSwitch();

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        return accounts[0];
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something wrong while connecting to wallet");
    }
  };

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error while connecting to wallet");
    }
  };

  const gasLimit = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      //0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199
      const donations = await contract.send(
        "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
        {
          value: ethers.utils.parseEther("45"),
          gasLimit: 100000,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CrowdFundingContext.Provider
      value={{
        titleData,
        currentAccount,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        connectWallet,
        gasLimit,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};

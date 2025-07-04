# 🚀 Decentralized Crowdfunding Platform

A modern, decentralized crowdfunding platform built on Ethereum blockchain that enables transparent and secure fundraising campaigns without intermediaries.

## 🌟 Features

### Core Functionality

- **Create Campaigns**: Launch fundraising campaigns with title, description, target amount, and deadline
- **Secure Donations**: Direct peer-to-peer donations through smart contracts
- **Real-time Tracking**: Monitor campaign progress and donation history
- **Wallet Integration**: Seamless MetaMask wallet connectivity

### User Experience

- **Responsive Design**: Modern UI built with Tailwind CSS
- **Campaign Management**: View all campaigns or filter by your created campaigns
- **Donation Popup**: Interactive donation interface with campaign details
- **Transaction Transparency**: All transactions recorded on blockchain

## 🛠️ Tech Stack

### Frontend

- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Ethers.js v5** - Ethereum library for blockchain interaction
- **Web3Modal** - Universal wallet connection
- **Axios** - HTTP client for API requests

### Blockchain

- **Solidity** - Smart contract language
- **Hardhat** - Ethereum development environment

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Himanjitt/Crypto-For-Good.git
cd CrowdFunding
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
NETWORK_RPC_URL=your_rpc_url_here
PRIVATE_KEY=your_private_key_here
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

### 4. Compile Smart Contracts

```bash
npm run compile
```

### 5. Start Local Blockchain (Optional)

```bash
npm run node
```

### 6. Deploy Smart Contract

```bash
# Deploy to local network
npm run deploy-local

```

### 7. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Usage Guide

### For Campaign Creators

1. **Connect Wallet**: Click on "Connect Wallet" and approve MetaMask connection
2. **Create Campaign**: Fill in campaign details (title, description, target amount, deadline)
3. **Manage Campaigns**: View your created campaigns in the dashboard
4. **Monitor Progress**: Track donations and campaign status

### For Donors

1. **Browse Campaigns**: View all active campaigns on the homepage
2. **Select Campaign**: Click on any campaign to view details
3. **Make Donation**: Enter donation amount and confirm transaction
4. **Track Contributions**: View your donation history

## 🔧 Smart Contract Details

### Contract Architecture

The `CrowdFunding.sol` contract includes:

- **Campaign Struct**: Stores campaign data (owner, title, description, target, deadline, etc.)
- **Create Campaign**: `createCampaign()` function for launching new campaigns
- **Donate**: `donateToCampaign()` function for making contributions
- **Getter Functions**: Retrieve campaign data and donation history

### Key Features

- ✅ Deadline validation
- ✅ Direct fund transfer to campaign owner
- ✅ Donation tracking and history
- ✅ Campaign enumeration

### Security Considerations

- Time-based deadline checks
- Input validation
- Safe transfer patterns

## 🌐 Deployment

### Production Build

```bash
npm run build
```

### Available Networks

- **Local**: Hardhat local blockchain (chainId: 1337)
- **Sepolia**: Ethereum testnet (chainId: 11155111)

### Deployment Scripts

```bash
# Clean build artifacts
npm run clear

# Deploy and verify on specific network
npm run deploy-[network-name]
```

## 🚨 Disclaimer

This is a educational/demonstration project. Please ensure proper security audits before deploying to mainnet with real funds.

**Built with ❤️ for the decentralized future**

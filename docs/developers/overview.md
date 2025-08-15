---
title: Development Environment
sidebar_position: 1
---

# Development Environment

Set up your local environment to build on Jaine's infrastructure. This guide covers everything from initial setup to deploying your first integration.

## Quick Start

Clone the boilerplate and get building immediately:

```bash
git clone https://github.com/0glabs/jane-amm-contracts
cd jaine-first-contract-example
npm install
```

Then jump to [Local Node Setup](#local-node-setup) to start developing.

## Start from Scratch

Learn the underlying concepts by building your environment step-by-step.

### Prerequisites

| Requirement | Version | Installation |
|-------------|---------|--------------|
| **Node.js** | ≥ 16.0 | [nodejs.org](https://nodejs.org) |
| **NPM** | ≥ 8.0 | Comes with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com) |
| **IDE** | Any | VS Code recommended |

### Step 1: Initialize Project

```bash
# Create project directory
mkdir my-jaine-integration
cd my-jaine-integration

# Initialize NPM project
npm init -y

# Add Hardhat development framework
npm add --save-dev hardhat
```

### Step 2: Configure Hardhat

Initialize Hardhat with TypeScript support:

```bash
npx hardhat init
```

Select the following options:
- Create a TypeScript project
- Add .gitignore
- Install dependencies

### Step 3: Install Jaine Contracts

```bash
# Install Jaine V3 contracts
npm add @jane-amm-contracts/core @jane-amm-contracts/periphery

# Install OpenZeppelin for utilities
npm add @openzeppelin/contracts
```

### Step 4: Configure Compiler

Edit `hardhat.config.ts`:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    "0g-testnet": {
      url: "https://rpc-testnet.0g.ai",
      chainId: 16600,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};

export default config;
```

## Local Node Setup

### Forking Mainnet

Run a local fork for testing:

```bash
# Fork 0G testnet
npx hardhat node --fork https://rpc-testnet.0g.ai

# In another terminal, run tests
npx hardhat test --network localhost
```

### Environment Variables

Create `.env` file:

```bash
# Network RPC
RPC_URL=https://rpc-testnet.0g.ai

# Private key for deployment (NEVER commit this)
PRIVATE_KEY=your_private_key_here

# Contract addresses
ROUTER_ADDRESS=0x... # Will be updated
FACTORY_ADDRESS=0x... # Will be updated
```

## Your First Contract

### Basic Swap Contract

Create `contracts/SimpleSwap.sol`:

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@jane-amm-contracts/contracts/base/interfaces/ISwapRouter.sol';
import '@jane-amm-contracts/contracts/libraries/TransferHelper.sol';

contract SimpleSwap {
    ISwapRouter public immutable swapRouter;
    
    // Testnet token addresses
    address public constant USDT = 0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf;
    address public constant ETH = 0x0fe9b43625fa7edd663adcec0728dd635e4abf7c;
    address public constant BTC = 0x36f6414ff1df609214ddaba71c84f18bcf00f67d;
    
    uint24 public constant poolFee = 3000; // 0.3%

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    function swapExactInputSingle(uint256 amountIn) 
        external 
        returns (uint256 amountOut) 
    {
        // Transfer token to this contract
        TransferHelper.safeTransferFrom(
            USDT, 
            msg.sender, 
            address(this), 
            amountIn
        );
        
        // Approve router to spend token
        TransferHelper.safeApprove(USDT, address(swapRouter), amountIn);
        
        // Set up swap parameters
        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: USDT,
                tokenOut: ETH,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp + 900, // 15 minutes
                amountIn: amountIn,
                amountOutMinimum: 0, // Set this in production!
                sqrtPriceLimitX96: 0
            });
        
        // Execute swap
        amountOut = swapRouter.exactInputSingle(params);
    }
}
```

### Compile Your Contract

```bash
npx hardhat compile
```

Expected output:
```
Compiled X Solidity files successfully
```

## Testing Your Integration

### Write Tests

Create `test/SimpleSwap.test.ts`:

```typescript
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleSwap", function () {
  let swap: any;
  let owner: any;
  
  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    
    const SimpleSwap = await ethers.getContractFactory("SimpleSwap");
    swap = await SimpleSwap.deploy(ROUTER_ADDRESS);
    await swap.deployed();
  });
  
  it("Should execute a swap", async function () {
    // Test implementation
    const amountIn = ethers.utils.parseEther("100");
    
    // Get USDT contract
    const usdt = await ethers.getContractAt("IERC20", USDT_ADDRESS);
    
    // Approve and execute
    await usdt.approve(swap.address, amountIn);
    const tx = await swap.swapExactInputSingle(amountIn);
    
    // Verify transaction
    expect(tx).to.emit(swap, "SwapExecuted");
  });
});
```

### Run Tests

```bash
# Run all tests
npx hardhat test

# Run specific test
npx hardhat test test/SimpleSwap.test.ts

# With gas reporting
REPORT_GAS=true npx hardhat test
```

## Deployment

### Deploy Script

Create `scripts/deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
  // Get deployer account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);
  
  // Deploy contract
  const SimpleSwap = await ethers.getContractFactory("SimpleSwap");
  const swap = await SimpleSwap.deploy(ROUTER_ADDRESS);
  await swap.deployed();
  
  console.log("SimpleSwap deployed to:", swap.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

### Deploy to Testnet

```bash
npx hardhat run scripts/deploy.ts --network 0g-testnet
```

## Advanced Development

### Multi-hop Swaps

```solidity
function swapExactInputMultihop(
    bytes calldata path,
    uint256 amountIn
) external returns (uint256 amountOut) {
    // Implementation for multi-hop swaps
    ISwapRouter.ExactInputParams memory params =
        ISwapRouter.ExactInputParams({
            path: path,
            recipient: msg.sender,
            deadline: block.timestamp + 900,
            amountIn: amountIn,
            amountOutMinimum: 0
        });
    
    amountOut = swapRouter.exactInput(params);
}
```

### Liquidity Provision

```solidity
function addLiquidity(
    address token0,
    address token1,
    uint256 amount0,
    uint256 amount1
) external returns (uint256 liquidity) {
    // Implementation for adding liquidity
    // Uses NFT Position Manager
}
```

## Development Tools

### Useful Libraries

| Library | Purpose | Installation |
|---------|---------|--------------|
| **ethers.js** | Ethereum interactions | `npm add ethers` |
| **web3.js** | Alternative to ethers | `npm add web3` |
| **hardhat-deploy** | Deployment management | `npm add hardhat-deploy` |
| **hardhat-gas-reporter** | Gas optimization | `npm add hardhat-gas-reporter` |

### VS Code Extensions

Recommended extensions for development:
- Solidity by Juan Blanco
- Hardhat Solidity
- Prettier - Code formatter
- ESLint

## Best Practices

### Security Checklist

✅ **Always**:
- Use slippage protection
- Set reasonable deadlines
- Validate input parameters
- Handle reverts gracefully
- Test thoroughly on testnet

❌ **Never**:
- Hardcode private keys
- Skip input validation
- Ignore slippage protection
- Use infinite approvals in production
- Deploy without auditing

### Gas Optimization

| Technique | Savings | Example |
|-----------|---------|---------|
| **Batch operations** | 20-30% | Combine swaps |
| **Pack structs** | 10-15% | Optimize storage |
| **Use events** | 5-10% | Instead of storage |
| **Short-circuit** | 5-10% | Order conditions |

## Troubleshooting

### Common Issues

<details>
<summary><b>Compilation Errors</b></summary>

| Error | Solution |
|-------|----------|
| **Wrong compiler version** | Set to 0.7.6 in config |
| **Import not found** | Check npm installations |
| **Contract too large** | Enable optimizer |
| **Stack too deep** | Refactor into functions |

</details>

<details>
<summary><b>Runtime Errors</b></summary>

| Error | Solution |
|-------|----------|
| **Insufficient allowance** | Approve tokens first |
| **Slippage exceeded** | Increase tolerance |
| **Deadline passed** | Use longer deadline |
| **Pool doesn't exist** | Check token pair/fee |

</details>

## Next Steps

With your environment ready:

1. **Explore Contracts**: [Smart Contracts](./smart-contracts)
2. **Learn the API**: [API Reference](./api-reference)
3. **Use the SDK**: [SDK Documentation](./sdk)
4. **Read Guides**: [Integration Guides](./integration-guides)

## Resources

### Documentation
- [Jaine Docs](/) - This documentation
- [GitHub Repository](https://github.com/0glabs/jane-amm-contracts)
- [Security Audits](../security/audits)

### Community
- Discord: Development channel
- GitHub: Issues and discussions
- Email: dev@jaine.app (coming soon)

## Support

Need help with development?
1. Check this documentation
2. Search GitHub issues
3. Ask in Discord
4. Contact developer support
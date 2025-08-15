---
title: Smart Contracts
sidebar_position: 2
---

# Smart Contracts

Complete reference for Jaine's smart contract architecture, addresses, and interfaces.

## Contract Addresses

### Testnet Contracts (0G Testnet)

| Contract | Address | Description |
|----------|---------|-------------|
| **SwapRouter** | `TBD` | Main router for swaps |
| **Factory** | `TBD` | Pool creation factory |
| **NFT Position Manager** | `TBD` | LP position NFTs |
| **Quoter** | `TBD` | Quote helper contract |

### Token Addresses (Testnet)

| Token | Symbol | Address | Decimals |
|-------|--------|---------|----------|
| **Tether** | USDT | `0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf` | 18 |
| **Ethereum** | ETH | `0x0fe9b43625fa7edd663adcec0728dd635e4abf7c` | 18 |
| **Bitcoin** | BTC | `0x36f6414ff1df609214ddaba71c84f18bcf00f67d` | 18 |

:::info Mainnet Launch
Mainnet contract addresses will be published here upon deployment.
:::

## Core Interfaces

### ISwapRouter

The main interface for executing swaps:

```solidity
interface ISwapRouter {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    struct ExactOutputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountOut;
        uint256 amountInMaximum;
        uint160 sqrtPriceLimitX96;
    }

    function exactInputSingle(ExactInputSingleParams calldata params)
        external
        payable
        returns (uint256 amountOut);

    function exactOutputSingle(ExactOutputSingleParams calldata params)
        external
        payable
        returns (uint256 amountIn);
}
```

### Pool Interface

```solidity
interface IJainePool {
    function token0() external view returns (address);
    function token1() external view returns (address);
    function fee() external view returns (uint24);
    function liquidity() external view returns (uint128);
    function slot0() external view returns (
        uint160 sqrtPriceX96,
        int24 tick,
        uint16 observationIndex,
        uint16 observationCardinality,
        uint16 observationCardinalityNext,
        uint8 feeProtocol,
        bool unlocked
    );
}
```

## Integration Examples

### Basic Swap Implementation

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@jane-amm-contracts/contracts/libraries/TransferHelper.sol';
import '@jane-amm-contracts/contracts/base/interfaces/ISwapRouter.sol';

contract SimpleSwap {
    ISwapRouter public immutable swapRouter;
    
    address public constant USDT = 0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf;
    address public constant ETH = 0x0fe9b43625fa7edd663adcec0728dd635e4abf7c;
    uint24 public constant poolFee = 3000;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    function swapExactInputSingle(uint256 amountIn) 
        external 
        returns (uint256 amountOut) 
    {
        // Transfer USDT to this contract
        TransferHelper.safeTransferFrom(
            USDT, 
            msg.sender, 
            address(this), 
            amountIn
        );
        
        // Approve router
        TransferHelper.safeApprove(USDT, address(swapRouter), amountIn);
        
        // Setup swap parameters
        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: USDT,
                tokenOut: ETH,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });
        
        // Execute swap
        amountOut = swapRouter.exactInputSingle(params);
    }
}
```

### Exact Output Swap

```solidity
function swapExactOutputSingle(
    uint256 amountOut, 
    uint256 amountInMaximum
) external returns (uint256 amountIn) {
    // Transfer max input amount
    TransferHelper.safeTransferFrom(
        USDT, 
        msg.sender, 
        address(this), 
        amountInMaximum
    );
    
    // Approve router
    TransferHelper.safeApprove(USDT, address(swapRouter), amountInMaximum);

    ISwapRouter.ExactOutputSingleParams memory params =
        ISwapRouter.ExactOutputSingleParams({
            tokenIn: USDT,
            tokenOut: ETH,
            fee: poolFee,
            recipient: msg.sender,
            deadline: block.timestamp,
            amountOut: amountOut,
            amountInMaximum: amountInMaximum,
            sqrtPriceLimitX96: 0
        });
    
    // Execute swap
    amountIn = swapRouter.exactOutputSingle(params);
    
    // Refund unused tokens
    if (amountIn < amountInMaximum) {
        TransferHelper.safeApprove(USDT, address(swapRouter), 0);
        TransferHelper.safeTransfer(
            USDT, 
            msg.sender, 
            amountInMaximum - amountIn
        );
    }
}
```

## Security Considerations

### Integration Best Practices

:::warning Critical Security Points
When integrating with Jaine contracts, always:
1. **Use Price Oracles**: Never rely solely on pool prices for large values
2. **Implement Slippage Protection**: Always set `amountOutMinimum`
3. **Set Deadlines**: Use reasonable deadlines to prevent stale transactions
4. **Validate Inputs**: Check token addresses and amounts
5. **Handle Failures**: Implement proper error handling
:::

### Common Vulnerabilities to Avoid

| Risk | Description | Mitigation |
|------|-------------|------------|
| **Price Manipulation** | Flash loan attacks on pool prices | Use TWAP oracles |
| **Sandwich Attacks** | Front-running large trades | Set tight slippage |
| **Reentrancy** | Callbacks during swaps | Use reentrancy guards |
| **Approval Risks** | Unlimited approvals | Approve exact amounts |
| **Deadline Issues** | Stale transactions | Set short deadlines |

### Safe Integration Pattern

```solidity
contract SafeIntegration {
    using SafeMath for uint256;
    
    uint256 private constant MAX_SLIPPAGE = 100; // 1%
    uint256 private constant DEADLINE_BUFFER = 900; // 15 minutes
    
    modifier nonReentrant() {
        require(!locked, "Reentrant call");
        locked = true;
        _;
        locked = false;
    }
    
    function safeSwap(
        address tokenIn,
        address tokenOut,
        uint256 amountIn
    ) external nonReentrant returns (uint256) {
        // Calculate minimum output with slippage
        uint256 expectedOut = getQuote(tokenIn, tokenOut, amountIn);
        uint256 minOut = expectedOut.mul(10000 - MAX_SLIPPAGE).div(10000);
        
        // Set reasonable deadline
        uint256 deadline = block.timestamp.add(DEADLINE_BUFFER);
        
        // Execute with protection
        return executeSwap(tokenIn, tokenOut, amountIn, minOut, deadline);
    }
}
```

## Development Environment

### Setting Up Your Environment

1. **Install Dependencies**
```bash
npm install @jane-amm-contracts/core @jane-amm-contracts/periphery
```

2. **Configure Hardhat**
```javascript
module.exports = {
  solidity: "0.7.6",
  networks: {
    "0g-testnet": {
      url: "https://rpc-testnet.0g.ai",
      chainId: 16600,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

3. **Import Interfaces**
```solidity
import '@jane-amm-contracts/contracts/base/interfaces/ISwapRouter.sol';
import '@jane-amm-contracts/contracts/libraries/TransferHelper.sol';
```

## Testing Your Integration

### Local Testing

```javascript
const { ethers } = require("hardhat");

describe("Swap Integration", function() {
  let swapContract;
  let usdt, eth;
  
  beforeEach(async function() {
    // Deploy or get contracts
    const SwapContract = await ethers.getContractFactory("YourSwap");
    swapContract = await SwapContract.deploy(ROUTER_ADDRESS);
    
    // Get token contracts
    usdt = await ethers.getContractAt("IERC20", USDT_ADDRESS);
    eth = await ethers.getContractAt("IERC20", ETH_ADDRESS);
  });
  
  it("Should execute swap", async function() {
    const amountIn = ethers.utils.parseEther("100");
    
    // Approve and swap
    await usdt.approve(swapContract.address, amountIn);
    await swapContract.swapExactInputSingle(amountIn);
    
    // Check balance increased
    const ethBalance = await eth.balanceOf(signer.address);
    expect(ethBalance).to.be.gt(0);
  });
});
```

### Mainnet Fork Testing

```bash
npx hardhat node --fork https://rpc-testnet.0g.ai
npx hardhat test --network localhost
```

## Gas Optimization

### Efficient Patterns

| Pattern | Gas Savings | Implementation |
|---------|-------------|----------------|
| **Batch Operations** | ~30% | Combine multiple swaps |
| **Direct Path** | ~20% | Avoid multi-hop when possible |
| **Exact Input** | ~10% | Cheaper than exact output |
| **Minimal Checks** | ~15% | Only essential validations |

### Gas Estimates

| Operation | Estimated Gas | Cost (10 gwei) |
|-----------|---------------|----------------|
| **Simple Swap** | 150,000 | 0.0015 ETH |
| **Multi-hop Swap** | 250,000 | 0.0025 ETH |
| **Add Liquidity** | 200,000 | 0.002 ETH |
| **Remove Liquidity** | 180,000 | 0.0018 ETH |

## Audit Reports

### Contract Audits

All Jaine contracts undergo rigorous security audits:

| Audit | Scope | Status | Report |
|-------|-------|--------|--------|
| **Core AMM** | V3 contracts | Ongoing | Coming soon |
| **Periphery** | Router & helpers | Ongoing | Coming soon |
| **Perp Contracts** | Perpetuals system | Planned | Q2 2024 |

For historical Vertex audits that inform our architecture, see [Security Audits](../security/audits).

## Support & Resources

### Developer Resources

- **GitHub**: [github.com/0glabs/jane-amm-contracts](https://github.com/0glabs/jane-amm-contracts)
- **NPM Packages**: `@jane-amm-contracts/core` and `/periphery`
- **Technical Support**: dev@jaine.app (coming soon)
- **Bug Bounty**: See [Security](../security/audits)

### Getting Help

For integration support:
1. Check this documentation
2. Review example contracts
3. Join developer Discord
4. Contact technical team

## Related Topics

- [API Reference](./api-reference)
- [SDK Documentation](./sdk)
- [Integration Guides](./integration-guides)
- [Security Best Practices](../security/audits)
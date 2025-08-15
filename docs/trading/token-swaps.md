---
title: Token Swaps
sidebar_position: 1
---

# Token Swaps

Token swaps are the core functionality of Jaine's AMM, allowing instant exchange between supported tokens.

## How Swaps Work

Jaine uses an automated market maker (AMM) model with concentrated liquidity for efficient price discovery and execution.

### Core Components

| Component | Description |
|-----------|-------------|
| **Liquidity Pools** | Smart contracts holding token pairs for trading |
| **Price Discovery** | Automatic pricing based on pool ratios and liquidity |
| **Instant Execution** | Immediate settlement without order books |
| **Fee Distribution** | 0.3% fee distributed to liquidity providers |

## Swap Types

<details>
<summary><b>Exact Input Swaps</b></summary>

- Specify exact amount of tokens to **sell**
- Receive variable amount based on current price
- Most common swap type for traders
- Example: Swap exactly 100 USDT for ETH

</details>

<details>
<summary><b>Exact Output Swaps</b></summary>

- Specify exact amount of tokens to **receive**
- Pay variable amount based on current price
- Useful for specific purchase requirements
- Example: Buy exactly 1 ETH with USDT

</details>

## Step-by-Step Guide

### 1. Access Swap Interface
Navigate to the **Swap** tab on [test.jaine.app](https://test.jaine.app)

### 2. Select Token Pair

| Field | Action |
|-------|--------|
| **From Token** | Select the token you want to sell |
| **To Token** | Select the token you want to buy |
| **Amount** | Enter quantity in either field |

### 3. Review Transaction Details

:::info Before Confirming
Always review these details:
- Exchange rate
- Price impact
- Minimum received
- Network fee
:::

### 4. Configure Settings

<details>
<summary><b>Slippage Tolerance</b></summary>

| Setting | Recommended | Use Case |
|---------|-------------|----------|
| **0.1%** | Stable pairs | USDT/USDC swaps |
| **0.5%** | Normal trading | Most token pairs |
| **1-3%** | Volatile tokens | New or low liquidity tokens |
| **Custom** | Advanced users | Specific requirements |

</details>

### 5. Execute Swap
Click **Swap** and confirm the transaction in your wallet

## Supported Tokens

### Testnet Tokens

| Token | Symbol | Contract Address |
|-------|--------|-----------------|
| **Tether** | USDT | `0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf` |
| **Ethereum** | ETH | `0x0fe9b43625fa7edd663adcec0728dd635e4abf7c` |
| **Bitcoin** | BTC | `0x36f6414ff1df609214ddaba71c84f18bcf00f67d` |

{/* TODO: Add mainnet token addresses when available */}

## Trading Fees

### Fee Structure

| Pool Type | Fee Tier | Description |
|-----------|----------|-------------|
| **Standard** | 0.30% | Most token pairs |
| **Stable** | 0.05% | Stablecoin pairs (coming soon) |
| **Exotic** | 1.00% | Low liquidity pairs (coming soon) |

### Fee Calculation Example

```
Swap Amount: 1000 USDT
Fee Rate: 0.3%
Trading Fee: 3 USDT
Amount Used: 997 USDT
```

## Advanced Features

### Multi-Hop Routing
Automatically finds the best path through multiple pools for optimal pricing.

### Price Impact Protection
Warns when your trade will significantly move the market price.

### MEV Protection
Built-in mechanisms to protect against sandwich attacks.

## Common Scenarios

<details>
<summary><b>Large Trades</b></summary>

For trades with high price impact:
1. Consider splitting into smaller trades
2. Use limit orders (coming soon)
3. Check multiple routes
4. Adjust slippage accordingly

</details>

<details>
<summary><b>Failed Transactions</b></summary>

Common causes and solutions:

| Issue | Solution |
|-------|----------|
| **Insufficient balance** | Check token and gas balances |
| **Slippage too low** | Increase slippage tolerance |
| **Network congestion** | Increase gas price or wait |
| **Pool liquidity** | Try smaller amount |

</details>

## Best Practices

:::tip Trading Tips
1. **Check price impact** before large trades
2. **Set appropriate slippage** based on volatility
3. **Compare rates** with other DEXs
4. **Monitor gas prices** for optimal timing
5. **Use limit orders** for better pricing (coming soon)
:::

## Troubleshooting

### Transaction Pending
- Check network status
- Verify gas price
- Consider speeding up or canceling

### High Price Impact
- Trade smaller amounts
- Wait for more liquidity
- Use different token route

### Slippage Errors
- Increase slippage tolerance
- Try during less volatile periods
- Reduce trade size

## Related Topics

- [Understanding Slippage](./slippage)
- [Trading Fees](./fees)
- [Liquidity Provision](../liquidity/add-liquidity)
- [Price Limits](./price-limits)

{/* TODO: Add swap interface screenshots */}
{/* TODO: Add example transaction links */}
{/* TODO: Add video tutorial */}
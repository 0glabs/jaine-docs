---
title: Get Testnet Tokens
sidebar_position: 3
---

# Get Testnet Tokens

To interact with Jaine on the 0G Testnet, you'll need testnet tokens for gas fees and trading.

## Quick Access

| Faucet | Purpose | Link | Frequency |
|--------|---------|------|-----------|
| **0G Main Faucet** | Native tokens for gas | [faucet.0g.ai](https://faucet.0g.ai) | Every 24h |
| **Jaine In-App** | Trading tokens | [test.jaine.app](https://test.jaine.app) | Every 24h |

## Claiming Process

<details>
<summary><b>Option 1: 0G Main Faucet</b></summary>

### Steps to Claim Native Tokens

| Step | Action | Details |
|------|--------|---------|
| **1** | Visit Faucet | Navigate to [faucet.0g.ai](https://faucet.0g.ai) |
| **2** | Connect Wallet | Ensure you're on 0G Testnet |
| **3** | Enter Address | Paste your wallet address |
| **4** | Request Tokens | Click the claim button |
| **5** | Confirm | Wait for transaction confirmation |

:::info Gas Tokens
Native 0G tokens are required for all transaction fees on the network
:::

</details>

<details>
<summary><b>Option 2: Jaine In-App Faucet</b></summary>

### Steps to Claim Trading Tokens

| Step | Action | Details |
|------|--------|---------|
| **1** | Open Jaine | Visit [test.jaine.app](https://test.jaine.app) |
| **2** | Navigate | Click the **Faucet** tab |
| **3** | Select Token | Choose BTC, ETH, or USDT |
| **4** | Claim | Click claim button |
| **5** | Approve | Confirm in wallet |

### Available Tokens

| Token | Amount | Purpose |
|-------|--------|---------|
| **BTC** | 0.1 BTC | Trading & LP |
| **ETH** | 1 ETH | Trading & LP |
| **USDT** | 1000 USDT | Stableswaps & Collateral |

</details>

## Token Details

### Testnet Token Specifications

| Token | Symbol | Contract Address | Primary Use |
|-------|--------|-----------------|-------------|
| **0G Native** | OG | Native Token | Gas fees |
| **Test Bitcoin** | BTC | `0x36f6414ff1df609214ddaba71c84f18bcf00f67d` | Trading pairs |
| **Test Ethereum** | ETH | `0x0fe9b43625fa7edd663adcec0728dd635e4abf7c` | Trading pairs |
| **Test USDT** | USDT | `0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf` | Stable pairs |

## Rate Limits & Rules

:::warning Important Limits
- **Frequency**: Once every 24 hours per wallet
- **Amount**: Fixed amounts per claim
- **Network**: 0G Testnet only
- **Purpose**: Testing and development only
:::

## Troubleshooting

<details>
<summary><b>Check Your Balance</b></summary>

| Method | How to Check |
|--------|-------------|
| **Wallet UI** | Check token balance in MetaMask/wallet |
| **Jaine App** | View balances in top-right corner |
| **Block Explorer** | Search your address on [explorer-testnet.0g.ai](https://explorer-testnet.0g.ai) |
| **Manual Add** | Import token contracts if not visible |

</details>

<details>
<summary><b>Faucet Errors</b></summary>

| Error | Fix |
|-------|-----|
| **Rate Limited** | Wait 24 hours from last claim |
| **Connection Failed** | Check network and try different browser |
| **Transaction Failed** | Ensure wallet is unlocked and on correct network |
| **Invalid Address** | Verify address format is correct |

</details>

<details>
<summary><b>Token Not Appearing</b></summary>

| Issue | Solution |
|-------|----------|
| **Wrong Network** | Switch to 0G Testnet (Chain ID: 16601) |
| **Token Not Visible** | Add token contract manually |
| **Transaction Pending** | Wait 30-60 seconds for confirmation |
| **Balance Not Updated** | Refresh page or reconnect wallet |


### MetaMask Instructions

1. Open MetaMask
2. Click **Import tokens**
3. Select **Custom token**
4. Enter token contract address
5. Token symbol and decimals should auto-populate
6. Click **Add custom token**

### Token Contracts for Import

| Token | Contract Address |
|-------|------------------|
| **BTC** | `0x36f6414ff1df609214ddaba71c84f18bcf00f67d` |
| **ETH** | `0x0fe9b43625fa7edd663adcec0728dd635e4abf7c` |
| **USDT** | `0x3ec8a8705be1d5ca90066b37ba62c4183b024ebf` |

</details>

## Next Steps

After receiving your testnet tokens:

| Action | Description | Link |
|--------|-------------|------|
| **First Swap** | Learn basic trading | [Make your first swap](./first-swap) |
| **Add Liquidity** | Become an LP | [Provide liquidity](../liquidity/add-liquidity) |
| **Advanced Trading** | Explore perpetuals | [Try perpetual trading](../perps/what-are-perps) |

## Support

Need help with testnet tokens?

- Check our [FAQ](../resources/faq)
- Join our community channels
- Review network status at [chainscan-galileo.0g.ai](https://chainscan-galileo.0g.ai)

{/* TODO: Add Discord support link when available */}
{/* TODO: Update token amounts when finalized */}
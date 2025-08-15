---
title: Your First Swap
sidebar_position: 4
---

# Your First Swap

Ready to make your first token swap on Jaine? This guide walks you through the process step-by-step.

## Pre-flight Checklist

| Requirement | Status | Action |
|-------------|--------|--------|
| **Wallet Connected** | Required | [Connect wallet](./connect-wallet) |
| **Testnet Tokens** | Required | [Get tokens](./get-testnet-tokens) |
| **Gas Tokens (A0GI)** | Required | Need ~0.01 A0GI for fees |

## Quick Start Guide

### Step 1: Access Swap Interface

Navigate to [test.jaine.app](https://test.jaine.app) and click the **Swap** tab.

### Step 2: Configure Your Trade

| Component | Action | Details |
|-----------|--------|---------|
| **From Token** | Select token to sell | Click top selector |
| **To Token** | Select token to buy | Click bottom selector |
| **Amount** | Enter quantity | Type in either field |

### Step 3: Review & Execute

<details>
<summary><b>Transaction Details to Review</b></summary>

| Detail | What to Check | Action if Needed |
|--------|---------------|------------------|
| **Exchange Rate** | Compare to market | Wait for better rate |
| **Price Impact** | Should be < 1% | Reduce trade size |
| **Minimum Received** | Acceptable amount | Adjust slippage |
| **Network Fee** | Gas cost in A0GI | Wait for lower fees |

</details>

## Detailed Walkthrough

### Token Selection

<details>
<summary><b>Available Trading Pairs</b></summary>

| Base Token | Trading Pairs | Liquidity |
|------------|---------------|-----------|
| **A0GI** | USDT, ETH, BTC | High |
| **ETH** | USDT, A0GI, BTC | High |
| **BTC** | USDT, A0GI, ETH | Medium |
| **USDT** | All pairs | Highest |

:::tip Best Pairs for Beginners
Start with USDT pairs - they have the most liquidity and lowest price impact
:::

</details>

### Slippage Configuration

<details>
<summary><b>Setting Appropriate Slippage</b></summary>

| Token Type | Recommended | When to Use |
|------------|-------------|-------------|
| **Stablecoins** | 0.1% | USDT/USDC swaps |
| **Major Tokens** | 0.5% | ETH, BTC, A0GI |
| **Volatile Tokens** | 1-3% | New listings |
| **Custom** | User defined | Special cases |

:::warning Slippage Protection
- **Too Low**: Transaction may fail during volatility
- **Too High**: You may receive less than expected
- **Just Right**: 0.5% works for most trades
:::

</details>

### Price Impact Analysis

| Impact Level | Percentage | Visual | Recommendation |
|--------------|------------|--------|----------------|
| **Minimal** | < 0.5% | 🟢 Green | Proceed normally |
| **Low** | 0.5-1% | 🟢 Green | Good to trade |
| **Medium** | 1-3% | 🟡 Yellow | Consider smaller size |
| **High** | > 3% | 🔴 Red | Split into multiple trades |

## Transaction Flow

### First-Time Token Approval

<details>
<summary><b>Token Approval Process</b></summary>

When swapping a token for the first time:

| Step | Action | Purpose |
|------|--------|---------|
| **1** | Click "Approve [Token]" | Grant permission |
| **2** | Set spending limit | Infinite or custom |
| **3** | Confirm in wallet | Sign transaction |
| **4** | Wait for confirmation | ~30 seconds |

:::info One-Time Process
Token approval is only needed once per token. After approval, future swaps are direct.
:::

</details>

### Executing the Swap

| Step | Action | What Happens |
|------|--------|--------------|
| **1** | Click "Swap" button | Opens confirmation |
| **2** | Review final details | Check amounts |
| **3** | Confirm in wallet | Sign transaction |
| **4** | Wait for execution | 15-30 seconds |
| **5** | Receive tokens | Auto-credited |

## Example Trade Scenarios

<details>
<summary><b>Example 1: Small Test Swap</b></summary>

```
Trade: 10 A0GI → USDT
Rate: 1 A0GI = 2.5 USDT
Expected: 25 USDT
Slippage: 0.5%
Minimum: 24.875 USDT
Gas Fee: ~0.002 A0GI

Result: Received 24.92 USDT
```

</details>

<details>
<summary><b>Example 2: Larger Trade with Impact</b></summary>

```
Trade: 1000 USDT → ETH
Rate: 1 ETH = 2000 USDT
Expected: 0.5 ETH
Price Impact: 1.2% (Yellow)
Slippage: 1%
Minimum: 0.494 ETH
Gas Fee: ~0.003 A0GI

Action: Consider splitting into 2x 500 USDT trades
```

</details>

## Troubleshooting Guide

<details>
<summary><b>Common Issues & Solutions</b></summary>

### Transaction Failures

| Error | Cause | Solution |
|-------|-------|----------|
| **"Insufficient allowance"** | Token not approved | Approve token first |
| **"Slippage tolerance exceeded"** | Price moved | Increase slippage |
| **"Insufficient balance"** | Not enough tokens | Check balances |
| **"Transaction underpriced"** | Low gas | Increase gas price |

### Pending Transactions

| Status | Wait Time | Action |
|--------|-----------|--------|
| **Normal** | < 1 min | Wait |
| **Slow** | 1-5 min | Optional: Speed up |
| **Stuck** | > 5 min | Cancel & retry |

</details>

## Pro Tips

:::tip Optimize Your Trades
1. **Time it right** - Trade during high liquidity hours
2. **Check multiple routes** - Interface finds best path automatically
3. **Use limit orders** - Coming soon for better pricing
4. **Monitor gas** - Trade when network is less congested
:::

## Safety Checklist

<details>
<summary><b>Before Every Swap</b></summary>

- [ ] Verify you're on correct website (test.jaine.app)
- [ ] Check token addresses match official list
- [ ] Review transaction details carefully
- [ ] Ensure sufficient gas for transaction
- [ ] Double-check receiving address is yours
- [ ] Confirm amounts are correct

</details>

## What's Next?

After mastering basic swaps:

| Level | Activity | Description |
|-------|----------|-------------|
| **Intermediate** | [Provide Liquidity](../liquidity/add-liquidity) | Earn trading fees |
| **Advanced** | [Perpetual Trading](../perps/what-are-perps) | Trade with leverage |
| **Expert** | [LP Strategies](../liquidity/lp-strategies) | Optimize returns |

## Quick Reference

### Swap Interface Hotkeys
- **Enter**: Confirm swap
- **Escape**: Close modals
- **Tab**: Navigate fields

### Network Status Indicators
- 🟢 **Fast**: < 15 seconds
- 🟡 **Normal**: 15-30 seconds  
- 🔴 **Congested**: > 30 seconds

## Need Support?

- Review our [FAQ](../resources/faq)
- Check [Common Issues](#troubleshooting-guide) above
- Join community channels for help

{/* TODO: Add swap interface screenshots */}
{/* TODO: Add video walkthrough */}
{/* TODO: Add Discord/Telegram links */}
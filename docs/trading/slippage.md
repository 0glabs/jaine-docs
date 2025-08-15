---
title: Understanding Slippage
sidebar_position: 2
---

# Understanding Slippage

Slippage is the difference between the expected price of a trade and the actual execution price. Understanding and managing slippage is crucial for successful trading.

## What is Slippage?

:::info Definition
**Slippage** = (Actual Execution Price - Expected Price) / Expected Price × 100%
:::

## Root Causes

| Cause | Description | Impact |
|-------|-------------|--------|
| **Market Movement** | Price changes during execution | Variable |
| **Liquidity Depth** | Available liquidity at each price level | High on large trades |
| **Network Delays** | Time between submission and confirmation | Higher during congestion |
| **MEV Activity** | Bots front-running transactions | Can be significant |

## Optimal Settings Guide

### Quick Reference

| Market Condition | Stable Pairs | Major Pairs | Volatile Pairs | Action |
|-----------------|--------------|-------------|----------------|--------|
| **Normal** | 0.1% | 0.5% | 1-2% | Standard settings |
| **Active** | 0.2% | 0.8% | 2-3% | Slight increase |
| **Volatile** | 0.5% | 1-2% | 3-5% | Higher tolerance |
| **Extreme** | 1% | 3% | 5%+ | Maximum caution |

<details>
<summary><b>Detailed Configuration Guide</b></summary>

### Setting Custom Slippage

| Step | Action | Details |
|------|--------|----------|
| **1** | Open Settings | Click gear icon in swap interface |
| **2** | Select Slippage | Choose "Slippage tolerance" |
| **3** | Enter Value | Type custom percentage |
| **4** | Confirm | Save settings |

### When to Adjust

- **Increase**: After failed transactions
- **Decrease**: For stable pair trading
- **Reset**: Return to 0.5% default

</details>

## Protection Mechanisms

<details>
<summary><b>How Slippage Protection Works</b></summary>

### Protection Flow

| Stage | Process | Result |
|-------|---------|--------|
| **Calculate** | Determine minimum acceptable output | Sets floor price |
| **Encode** | Include `amountOutMinimum` in transaction | On-chain protection |
| **Execute** | Smart contract checks actual output | Automatic verification |
| **Revert** | Transaction fails if below minimum | Funds protected |

### Example Calculation

```
Trade: 1 ETH → USDT
Expected Rate: 2000 USDT/ETH
Expected Output: 2000 USDT
Slippage: 1%
Minimum Output: 1980 USDT

Scenarios:
✅ Actual: 1995 USDT → Success
❌ Actual: 1975 USDT → Reverted
```

</details>

## Trading Impact Analysis

### Slippage Scenarios

| Type | Frequency | Cause | Result |
|------|-----------|-------|--------|
| **Positive** | ~20% | Price improvement | Extra tokens received |
| **Negative** | ~60% | Normal market movement | Fewer tokens (within tolerance) |
| **Zero** | ~20% | Stable conditions | Exact expected amount |

<details>
<summary><b>Real-World Examples</b></summary>

### Positive Slippage Example
```
Expected: 1000 USDT for 0.5 ETH
Actual: 1015 USDT received
Bonus: +15 USDT (1.5% positive)
```

### Negative Slippage Example
```
Expected: 1000 USDT for 0.5 ETH
Tolerance: 1% (minimum 990 USDT)
Actual: 992 USDT received
Slippage: -0.8% (within tolerance)
```

</details>

## Trade Size Management

<details>
<summary><b>Small Trades (< $1,000)</b></summary>

| Strategy | Setting | Rationale |
|----------|---------|----------|
| **Default** | 0.5% | Works for most cases |
| **Monitor** | Check failures | Adjust if needed |
| **Quick Execute** | Market orders | Speed over price |

</details>

<details>
<summary><b>Medium Trades ($1,000 - $10,000)</b></summary>

| Strategy | Setting | Rationale |
|----------|---------|----------|
| **Balanced** | 0.8-1.2% | Account for impact |
| **Split Orders** | 2-3 transactions | Reduce per-trade impact |
| **Time Selection** | High liquidity hours | Better execution |

</details>

<details>
<summary><b>Large Trades (> $10,000)</b></summary>

| Strategy | Setting | Rationale |
|----------|---------|----------|
| **Conservative** | 1-3% | Ensure execution |
| **Multiple Splits** | 5+ transactions | Minimize impact |
| **Limit Orders** | When available | Precise pricing |
| **TWAP** | Time-weighted | Average better price |

</details>

## Slippage vs Price Impact

### Key Differences

| Aspect | Slippage | Price Impact |
|--------|----------|-------------|
| **Definition** | Price change during execution | Your trade's market effect |
| **Predictability** | Unpredictable | Calculated before trade |
| **Control** | Set tolerance | Reduce trade size |
| **Cause** | Market movement | Liquidity consumption |
| **Display** | Percentage setting | Warning indicator |

:::tip Understanding Both
- **Price Impact**: Shows before you trade ("This trade will move the price by X%")
- **Slippage**: Protects during execution ("Accept up to Y% price change")
:::

## Advanced Strategies

### Dynamic Slippage
{/* TODO: Add details when dynamic slippage is implemented */}
- Auto-adjusts based on volatility
- Optimizes for execution success
- Reduces failed transactions

### MEV Protection
Minimize sandwich attacks:
- Use private mempools
- Set tight slippage when possible
- Consider flashbot protection

## Troubleshooting Guide

<details>
<summary><b>Transaction Failures</b></summary>

| Issue | Cause | Solution | Prevention |
|-------|-------|----------|------------|
| **"Slippage exceeded"** | Market moved | Increase tolerance | Monitor volatility |
| **"Cannot estimate gas"** | Slippage too low | Start at 1% | Use recommended settings |
| **Multiple failures** | High volatility | Wait or increase to 3%+ | Trade in calmer periods |

</details>

<details>
<summary><b>Poor Execution</b></summary>

| Symptom | Likely Cause | Fix | Long-term Solution |
|---------|--------------|-----|--------------------|
| **Much less received** | High market volatility | Use limit orders | Trade smaller amounts |
| **Inconsistent results** | Variable liquidity | Check pool depth | Use deeper pools |
| **Always max slippage** | Poor timing | Trade off-peak | Monitor liquidity |

</details>

<details>
<summary><b>MEV & Front-running</b></summary>

### Protection Strategies

| Method | How it Helps | Implementation |
|--------|--------------|----------------|
| **Tight Slippage** | Less room for attacks | Set minimum viable |
| **Private Mempool** | Hide from bots | Use Flashbots |
| **Small Trades** | Less attractive target | Split large orders |
| **Random Timing** | Harder to predict | Avoid patterns |

</details>

## Best Practices Checklist

<details>
<summary><b>Do's and Don'ts</b></summary>

### Essential Do's

| Action | Why | How |
|--------|-----|-----|
| **Match to volatility** | Ensures execution | Check recent price movement |
| **Start conservative** | Test the waters | Begin with recommended settings |
| **Monitor failures** | Learn patterns | Track what works |
| **Reset after trades** | Avoid accidents | Return to defaults |

### Critical Don'ts

| Mistake | Risk | Alternative |
|---------|------|-------------|
| **Excessive slippage** | Lose money to MEV | Use reasonable limits |
| **Ignore warnings** | Bad execution | Heed interface alerts |
| **"Set and forget"** | Miss optimization | Adjust per trade |
| **Trade blind** | Poor results | Check conditions first |

</details>

## Market Condition Matrix

| Condition | Indicators | Stable Pairs | Major Pairs | Volatile Pairs | Strategy |
|-----------|------------|--------------|-------------|----------------|----------|
| **Calm** | Low volume, tight spreads | 0.1% | 0.3-0.5% | 1% | Normal trading |
| **Normal** | Average activity | 0.1-0.2% | 0.5% | 1-2% | Standard settings |
| **Active** | Increasing volume | 0.3% | 0.8-1% | 2-3% | Monitor closely |
| **Volatile** | Price swings, news | 0.5-1% | 1-2% | 3-5% | Trade carefully |
| **Extreme** | Major events, crashes | 1%+ | 3%+ | 5-10% | Consider waiting |

:::warning During Major Events
Consider postponing non-urgent trades during:
- Protocol launches
- Major news announcements  
- Market crashes/rallies
- Network congestion
:::

## Advanced Strategies

<details>
<summary><b>Professional Techniques</b></summary>

### Dynamic Slippage Management

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| **Graduated Orders** | Increase slippage per attempt | Failed transactions |
| **Time-Based** | Adjust by time of day | Predictable patterns |
| **Volatility-Scaled** | Match market conditions | Automated trading |
| **Split & Conquer** | Multiple orders, different settings | Large positions |

### MEV Protection Advanced

1. **Commit-Reveal**: Hide intentions
2. **Time Randomization**: Unpredictable submission
3. **Private Pools**: Avoid public mempool
4. **Batch Transactions**: Multiple trades at once

</details>

## Quick Action Guide

| Your Situation | Immediate Action | Slippage Setting |
|----------------|------------------|------------------|
| **First trade** | Use defaults | 0.5% |
| **Transaction failed** | Increase slippage | 1-2% |
| **Trading stables** | Reduce slippage | 0.1% |
| **High volatility** | Increase buffer | 2-3% |
| **Large trade** | Split order | 1% per piece |

## Related Topics

- [Price Limits](./price-limits) - Setting maximum prices
- [Trading Fees](./fees) - Understanding costs
- [Token Swaps](./token-swaps) - Basic trading guide
- [Multi-hop Swaps](./multi-hop-swaps) - Complex routing

{/* TODO: Add slippage calculator tool */}
{/* TODO: Add real-time volatility indicators */}
{/* TODO: Add historical slippage analytics */}
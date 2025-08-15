---
title: Trading Fees
sidebar_position: 3
---

# Trading Fees

Understanding Jaine's fee structure helps you optimize your trading costs and maximize returns.

## Fee Overview

| Component | Rate | Recipient | Purpose |
|-----------|------|-----------|---------|
| **Trading Fee** | 0.3% | Liquidity Providers | Incentivize liquidity |
| **Protocol Fee** | 0% | Protocol | Currently none |
| **Gas Fee** | Variable | Network Validators | Transaction processing |

## Trading Fee Tiers

### Current Fee Structure

| Pool Type | Fee Rate | Basis Points | Best For |
|-----------|----------|--------------|----------|
| **Standard** | 0.30% | 30 bps | Most token pairs |
| **Stable** | 0.05% | 5 bps | Stablecoin pairs (coming) |
| **Exotic** | 1.00% | 100 bps | Low liquidity pairs (coming) |

<details>
<summary><b>Fee Calculation Examples</b></summary>

### Example 1: Standard Swap
```
Trade: 1,000 USDT → ETH
Pool Fee: 0.3%
Trading Fee: 1,000 × 0.003 = 3 USDT
Amount Used: 997 USDT
ETH Received: Based on 997 USDT
```

### Example 2: Large Trade
```
Trade: 10,000 USDT → BTC
Pool Fee: 0.3%
Trading Fee: 10,000 × 0.003 = 30 USDT
Amount Used: 9,970 USDT
BTC Received: Based on 9,970 USDT
```

### Example 3: Multi-hop Trade
```
Trade: ETH → USDT → BTC (2 hops)
Hop 1 Fee: 0.3% on ETH amount
Hop 2 Fee: 0.3% on USDT amount
Total Fee: ~0.6% (compounded)
```

</details>

## Fee Distribution

### Where Fees Go

| Recipient | Percentage | Purpose |
|-----------|------------|---------|
| **Liquidity Providers** | 100% | Reward for providing liquidity |
| **Protocol Treasury** | 0% | Currently no protocol fee |
| **Referral Program** | TBD | Coming soon |

<details>
<summary><b>LP Fee Earnings</b></summary>

### How LPs Earn Fees

1. **Pro-rata Distribution**: Fees distributed based on liquidity share
2. **Auto-compound**: Fees automatically added to position
3. **Real-time Accrual**: Earnings accumulate with each trade
4. **Claimable**: Can be claimed when removing liquidity

### Estimated APR Calculation
```
Daily Volume: $1,000,000
Pool TVL: $5,000,000
Daily Fees: $1,000,000 × 0.003 = $3,000
Daily APR: ($3,000 / $5,000,000) × 100 = 0.06%
Annual APR: 0.06% × 365 = 21.9%
```

</details>

## Gas Fees

### Network Transaction Costs

| Action | Estimated Gas | Cost (at 10 gwei) |
|--------|---------------|-------------------|
| **Simple Swap** | 150,000 gas | ~0.0015 A0GI |
| **Multi-hop Swap** | 250,000 gas | ~0.0025 A0GI |
| **Add Liquidity** | 200,000 gas | ~0.002 A0GI |
| **Remove Liquidity** | 180,000 gas | ~0.0018 A0GI |

:::tip Gas Optimization
- Batch transactions when possible
- Trade during low congestion periods
- Use appropriate gas price (not overpaying)
:::

## Fee Comparison

### DEX Comparison

| Platform | Standard Fee | Stable Fee | Notes |
|----------|--------------|------------|-------|
| **Jaine** | 0.30% | 0.05%* | 100% to LPs |
| **Uniswap V3** | 0.30% | 0.05% | Variable tiers |
| **Curve** | 0.04% | 0.04% | Stables focused |
| **PancakeSwap** | 0.25% | 0.01% | BSC chain |

*Coming soon

## Cost Optimization Strategies

<details>
<summary><b>For Traders</b></summary>

### Minimize Trading Costs

| Strategy | Savings | How To |
|----------|---------|--------|
| **Direct Routes** | 0.3% per hop | Avoid multi-hop when possible |
| **Larger Trades** | Lower % impact | Consolidate small trades |
| **Stable Pairs** | Up to 0.25% | Use stable pools when available |
| **Limit Orders** | Better pricing | Coming soon |

### Cost Analysis Framework
1. **Calculate total cost**: Fee + Slippage + Gas
2. **Compare routes**: Check different paths
3. **Time trades**: Avoid high congestion
4. **Size appropriately**: Balance impact vs fees

</details>

<details>
<summary><b>For Liquidity Providers</b></summary>

### Maximize Fee Earnings

| Strategy | Benefit | Implementation |
|----------|---------|----------------|
| **High Volume Pairs** | More fees | Focus on active pairs |
| **Optimal Range** | Higher share | Concentrate around price |
| **Active Management** | Maintain efficiency | Rebalance positions |
| **Fee Reinvestment** | Compound growth | Add earned fees to position |

</details>

## Fee Calculator

### Quick Estimation

<details>
<summary><b>Calculate Your Trading Costs</b></summary>

```javascript
// Trading Fee Calculator
function calculateTradingFee(amount, feeRate = 0.003) {
  const fee = amount * feeRate;
  const amountAfterFee = amount - fee;
  
  return {
    inputAmount: amount,
    fee: fee,
    effectiveAmount: amountAfterFee,
    feePercentage: (feeRate * 100).toFixed(2) + '%'
  };
}

// Example Usage
calculateTradingFee(1000, 0.003);
// Returns: {
//   inputAmount: 1000,
//   fee: 3,
//   effectiveAmount: 997,
//   feePercentage: '0.30%'
// }
```

</details>

## Future Fee Features

### Coming Soon

| Feature | Description | Status |
|---------|-------------|--------|
| **Volume Discounts** | Reduced fees for high volume | 🔜 Planned |
| **Referral Rewards** | Earn from referrals | 🔜 Planned |
| **Dynamic Fees** | Market-based pricing | 🔜 Research |
| **Fee Holidays** | Promotional periods | 🔜 Planned |

## Fee FAQs

<details>
<summary><b>Common Questions</b></summary>

### Q: Are fees taken from input or output?
**A:** Fees are calculated on the input amount and deducted before the swap calculation.

### Q: Can I avoid fees?
**A:** No, fees are essential for incentivizing liquidity providers. However, you can minimize costs by using efficient routes and timing.

### Q: Do fees compound on multi-hop trades?
**A:** Yes, each hop incurs its own fee. A 2-hop trade effectively costs ~0.6% in fees.

### Q: How often can I claim LP fees?
**A:** Fees accumulate in real-time and can be claimed when you remove or adjust your liquidity position.

</details>

## Best Practices

:::tip Fee Optimization Tips
1. **Compare routes** - Check if direct pairs are available
2. **Consider timing** - Trade during optimal liquidity periods  
3. **Size matters** - Larger trades have better fee efficiency
4. **Watch gas** - Include network fees in cost calculations
5. **LP wisely** - Choose pools with good volume/TVL ratios
:::

## Related Topics

- [Token Swaps](./token-swaps) - How to trade
- [Slippage Settings](./slippage) - Price protection
- [Liquidity Provision](../liquidity/add-liquidity) - Earn fees
- [Concentrated Liquidity](../liquidity/concentrated-liquidity) - Maximize returns

{/* TODO: Add dynamic fee calculator widget */}
{/* TODO: Add historical fee analytics */}
{/* TODO: Add volume-based discount tiers when available */}

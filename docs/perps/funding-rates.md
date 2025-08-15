---
title: Funding Rates
sidebar_position: 4
---

# Funding Rates

Funding rates are periodic payments between long and short positions that keep perpetual prices anchored to the underlying spot price.

## Overview

The funding rate mechanism ensures that perpetual futures prices converge with spot prices over time. When the perpetual trades above spot, longs pay shorts. When it trades below, shorts pay longs.

## Funding Formula

### Core Calculation

```
Funding Rate = Average Premium Index + clamp(Interest Rate - Premium Index, -0.04%, +0.04%)
```

Where:
- **Premium Index** = (Mark Price - Index Price) / Index Price
- **Interest Rate** = 0.01% per 8-hour period (fixed)

### Calculation Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| **Sampling Frequency** | Every 15 seconds | Aligned with mark price updates |
| **Averaging Period** | 8 hours | Time-weighted average |
| **Payment Frequency** | Every 8 hours | 00:00, 08:00, 16:00 UTC |
| **Rate Caps** | ±0.04% per period | ±0.365% annually |

## Payment Mechanism

### Funding Payment Calculation

```
Funding Payment = Position Size × Oracle Price × Funding Rate
```

Where:
- **Position Size**: Signed position size (positive for long, negative for short)
- **Oracle Price**: Chainlink index price at payment time
- **Funding Rate**: Calculated rate for the period

### Payment Direction

| Funding Rate | Who Pays | Who Receives | Market Condition |
|--------------|----------|--------------|------------------|
| **Positive** | Longs | Shorts | Perp > Spot (bullish) |
| **Negative** | Shorts | Longs | Perp < Spot (bearish) |
| **Zero** | Nobody | Nobody | Perfect equilibrium |

## Interest Rate Component

### Fixed Rate Structure

| Component | Rate | Period | Annualized |
|-----------|------|--------|------------|
| **Base Rate** | 0.01% | 8 hours | ~11% |
| **Daily Rate** | 0.03% | 24 hours | 11% |
| **Economic Basis** | Fixed | N/A | Cost of capital |

:::info Rate Adjustment
The interest rate is initially fixed but can be adjusted via governance mechanism post-launch based on market conditions.
:::

## Understanding Funding

### Why Funding Exists

Funding rates serve three critical purposes:

1. **Price Convergence**: Keeps perp prices aligned with spot
2. **Market Balance**: Incentivizes traders to take unpopular side
3. **No Expiry Cost**: Replaces the natural convergence of dated futures

### How It Works

<details>
<summary><b>When Perps Trade Above Spot (Positive Funding)</b></summary>

**Scenario**: BTC perp at $51,000, BTC spot at $50,000

1. **Premium**: 2% above spot
2. **Funding Rate**: Positive (~0.02% per 8h)
3. **Effect**: Longs pay shorts
4. **Result**: Encourages shorts, discourages longs
5. **Convergence**: Perp price pushed down toward spot

</details>

<details>
<summary><b>When Perps Trade Below Spot (Negative Funding)</b></summary>

**Scenario**: BTC perp at $49,000, BTC spot at $50,000

1. **Discount**: 2% below spot
2. **Funding Rate**: Negative (~-0.02% per 8h)
3. **Effect**: Shorts pay longs
4. **Result**: Encourages longs, discourages shorts
5. **Convergence**: Perp price pushed up toward spot

</details>

## Payment Schedule

### UTC Payment Times

| Time (UTC) | Period Coverage | Payment Calculation |
|------------|-----------------|---------------------|
| **00:00** | 16:00-00:00 | Based on 8h average |
| **08:00** | 00:00-08:00 | Based on 8h average |
| **16:00** | 08:00-16:00 | Based on 8h average |

### Important Notes

:::warning Payment Timing
- Funding is exchanged at the exact payment time
- You only pay/receive if holding a position at payment time
- Closing before payment time avoids funding
- Opening after payment time avoids current period funding
:::

## Funding Strategies

### For Traders

<details>
<summary><b>Long Position Strategies</b></summary>

| Strategy | When to Use | Risk Level |
|----------|-------------|------------|
| **Hold Through** | Negative/low funding | Low |
| **Close Before Payment** | High positive funding | Medium |
| **Funding Arbitrage** | Spot hedge available | Advanced |
| **Scale In** | Funding turning negative | Medium |

</details>

<details>
<summary><b>Short Position Strategies</b></summary>

| Strategy | When to Use | Risk Level |
|----------|-------------|------------|
| **Collect Funding** | High positive funding | Medium |
| **Avoid Payment** | High negative funding | Low |
| **Basis Trade** | Consistent positive funding | Advanced |
| **Hedge Spot** | Protect holdings | Low |

</details>

### Funding Arbitrage

Advanced traders can profit from funding rate differentials:

1. **Cash and Carry**: Long spot, short perp when funding positive
2. **Reverse Cash and Carry**: Short spot, long perp when funding negative
3. **Cross-Exchange Arb**: Exploit funding differences between exchanges

## Real-World Examples

### Example 1: Long Position

```
Position: Long 1 BTC at $50,000
Funding Rate: +0.01% (positive)
Oracle Price: $50,000
Payment: 1 × $50,000 × 0.0001 = $5 (you pay)
```

### Example 2: Short Position

```
Position: Short 2 BTC at $50,000
Funding Rate: +0.01% (positive)
Oracle Price: $50,000
Payment: -2 × $50,000 × 0.0001 = -$10 (you receive)
```

### Example 3: Negative Funding

```
Position: Long 0.5 BTC at $50,000
Funding Rate: -0.02% (negative)
Oracle Price: $50,000
Payment: 0.5 × $50,000 × (-0.0002) = -$5 (you receive)
```

## Monitoring Funding

### Key Indicators

| Indicator | What It Shows | Action Signal |
|-----------|---------------|---------------|
| **Current Rate** | Next payment amount | Position timing |
| **Predicted Rate** | Future trend | Strategy planning |
| **Historical Average** | Market sentiment | Long-term positioning |
| **Rate Volatility** | Market uncertainty | Risk assessment |

### Dashboard Metrics

Your position dashboard displays:
- Next funding payment time
- Estimated payment amount
- Current funding rate
- Historical funding paid/received
- Cumulative funding P&L

## Risk Management

### Funding Risk Factors

:::caution Important Considerations
1. **Accumulation**: Small rates compound over time
2. **Volatility**: Rates can spike during market stress
3. **Direction Changes**: Can flip from positive to negative quickly
4. **Leverage Impact**: Magnifies funding costs on leveraged positions
:::

### Best Practices

1. **Monitor Regularly**: Check funding rates before opening positions
2. **Factor Into P&L**: Include funding in profit calculations
3. **Set Alerts**: Use rate alerts for significant changes
4. **Time Entries**: Consider funding timing for position entry/exit
5. **Hedge When Needed**: Use spot positions to offset funding costs

## FAQ

<details>
<summary><b>Common Questions</b></summary>

**Q: Do I pay funding on unrealized P&L?**
A: No, funding is calculated only on your position size, not on profits or losses.

**Q: Can I avoid funding by using limit orders?**
A: Funding only applies to open positions at payment time, regardless of order type.

**Q: What happens if I can't pay funding?**
A: Funding is deducted from your margin. If insufficient, liquidation may occur.

**Q: Is funding the same across all assets?**
A: No, each perpetual contract has its own funding rate based on its market dynamics.

</details>

## Related Topics

- [Mark Price Calculation](./mark-price)
- [Leverage & Margin](./leverage-margin)
- [Liquidation System](./liquidations)
- [PnL Calculation](./pnl-calculation)
- [How to Trade Perps](./how-to-trade)
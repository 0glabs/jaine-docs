---
title: Liquidation System
sidebar_position: 6
---

# Liquidation System

The liquidation system protects the protocol from bad debt by closing positions before they become insolvent. Understanding liquidations is crucial for managing risk in leveraged trading.

## Overview

Liquidation occurs when your margin ratio falls below the maintenance margin requirement. The system automatically closes your position to prevent further losses.

### Liquidation Trigger

**Liquidation occurs when:**
```
Margin Ratio ≤ 3%
```

Where:
```
Margin Ratio = Account Value / (Total Position Notional × Margin Requirement)
```

## Liquidation Process

### Three-Stage System

| Stage | Trigger | Action | Impact |
|-------|---------|--------|--------|
| **Partial Liquidation** | Margin ≤ 3% | Reduce position by 25% | Preserves 75% of position |
| **Progressive Liquidation** | Still ≤ 3% | Further 25% reductions | Gradual position reduction |
| **Full Liquidation** | Insufficient improvement | Close entire position | Complete position closure |
| **Auto-Deleveraging** | Extreme scenarios | System-wide deleveraging | Last resort mechanism |

### Liquidation Flow

<details>
<summary><b>Step-by-Step Process</b></summary>

1. **Margin Check**: System monitors margin ratio continuously
2. **Trigger Detection**: Identifies positions below 3% margin
3. **Partial Close**: Reduces position by 25%
4. **Re-evaluation**: Checks if margin improved
5. **Repeat or Complete**: Continue reduction or fully liquidate
6. **Settlement**: Transfer remaining collateral

</details>

## Liquidation Price Calculation

### Formula

For **Long Positions**:
```
Liquidation Price = Entry Price × (1 - 1/Leverage + Maintenance Margin Rate)
```

For **Short Positions**:
```
Liquidation Price = Entry Price × (1 + 1/Leverage - Maintenance Margin Rate)
```

### Examples

<details>
<summary><b>Long Position Example</b></summary>

```
Entry Price: $50,000
Leverage: 10x
Maintenance Margin: 3%

Liquidation Price = $50,000 × (1 - 1/10 + 0.03)
Liquidation Price = $50,000 × 0.93
Liquidation Price = $46,500
```

You'll be liquidated if BTC falls to $46,500.

</details>

<details>
<summary><b>Short Position Example</b></summary>

```
Entry Price: $50,000
Leverage: 10x
Maintenance Margin: 3%

Liquidation Price = $50,000 × (1 + 1/10 - 0.03)
Liquidation Price = $50,000 × 1.07
Liquidation Price = $53,500
```

You'll be liquidated if BTC rises to $53,500.

</details>

## Margin Requirements

### Margin Levels

| Margin Type | Percentage | Leverage | Purpose |
|-------------|------------|----------|---------|
| **Initial Margin** | 5% minimum | 20x max | Opening positions |
| **Maintenance Margin** | 3% | N/A | Liquidation threshold |
| **Buffer Zone** | 3-5% | N/A | Warning zone |
| **Safe Zone** | >5% | N/A | Comfortable margin |

### Cross-Margin System

Jaine uses cross-margin across all positions:
- All positions share the same collateral pool
- Profits from one position offset losses in another
- Single liquidation threshold for entire account
- More capital efficient than isolated margin

## Liquidation Penalties

### Fee Structure

| Component | Rate | Description |
|-----------|------|-------------|
| **Liquidation Fee** | 0.5% | Paid to liquidation engine |
| **Insurance Fund** | 0.3% | Protocol protection |
| **Keeper Reward** | 0.2% | Incentive for liquidators |
| **Total Cost** | 1.0% | Total liquidation penalty |

:::warning Cost Impact
Liquidation incurs a 1% penalty on top of your trading losses. Always maintain adequate margin to avoid liquidation.
:::

## Auto-Deleveraging (ADL)

### When ADL Occurs

Auto-deleveraging is the backstop mechanism when:
- Liquidation engine cannot close positions normally
- Insurance fund is depleted
- Market conditions are extreme

### ADL Priority

Positions are deleveraged based on profitability and leverage:

| Priority | Profit Status | Leverage | Risk Score |
|----------|--------------|----------|------------|
| **1st** | Highest profit | Highest leverage | Maximum |
| **2nd** | High profit | High leverage | High |
| **3rd** | Moderate profit | Moderate leverage | Medium |
| **Last** | Loss/Low profit | Low leverage | Minimum |

## Risk Management

### Avoiding Liquidation

<details>
<summary><b>Prevention Strategies</b></summary>

| Strategy | Description | Effectiveness |
|----------|-------------|---------------|
| **Lower Leverage** | Use 5-10x instead of 20x | High |
| **Add Margin** | Deposit more collateral | Immediate |
| **Reduce Position** | Close partial position | Quick |
| **Stop Loss** | Set automatic exit | Proactive |
| **Monitor Closely** | Watch margin ratio | Continuous |

</details>

### Warning Indicators

Watch for these warning signs:

| Indicator | Warning Level | Action Required |
|-----------|--------------|-----------------|
| **Margin Ratio 5-7%** | Yellow | Monitor closely |
| **Margin Ratio 3-5%** | Orange | Add margin or reduce |
| **Margin Ratio &lt;3%** | Red | Immediate action |
| **Price Near Liq** | Critical | Exit or add margin |

## Liquidation Calculator

### Quick Reference Table

| Leverage | Long Liquidation | Short Liquidation |
|----------|-----------------|-------------------|
| **2x** | -47% from entry | +47% from entry |
| **5x** | -17% from entry | +17% from entry |
| **10x** | -7% from entry | +7% from entry |
| **20x** | -2% from entry | +2% from entry |

*Assuming 3% maintenance margin requirement*

### Calculate Your Liquidation Price

```javascript
// Long Position Liquidation Price
function calcLongLiqPrice(entryPrice, leverage, maintMargin = 0.03) {
  return entryPrice * (1 - 1/leverage + maintMargin);
}

// Short Position Liquidation Price
function calcShortLiqPrice(entryPrice, leverage, maintMargin = 0.03) {
  return entryPrice * (1 + 1/leverage - maintMargin);
}

// Distance to Liquidation
function distanceToLiq(currentPrice, liqPrice, isLong) {
  if (isLong) {
    return ((currentPrice - liqPrice) / currentPrice) * 100;
  } else {
    return ((liqPrice - currentPrice) / currentPrice) * 100;
  }
}
```

## Best Practices

### Risk Management Rules

:::tip Golden Rules
1. **Never use maximum leverage** - Leave room for market volatility
2. **Set stop losses** - Don't rely solely on liquidation as exit
3. **Monitor funding** - Account for funding in margin calculations
4. **Keep reserves** - Have additional capital ready
5. **Understand the math** - Know your liquidation price before trading
:::

### Position Sizing

| Account Risk | Max Position Size | Recommended Leverage |
|--------------|------------------|---------------------|
| **Conservative** | 10% of capital | 2-3x |
| **Moderate** | 25% of capital | 5-7x |
| **Aggressive** | 50% of capital | 10-12x |
| **Maximum** | 75% of capital | 15-20x |

## Emergency Procedures

### If Approaching Liquidation

1. **Immediate Actions**:
   - Add margin immediately
   - Reduce position size
   - Close losing positions

2. **Preventive Measures**:
   - Set price alerts at 10% buffer
   - Use stop losses at 5% buffer
   - Keep emergency funds ready

3. **Post-Liquidation**:
   - Review what went wrong
   - Adjust risk parameters
   - Start with lower leverage

## FAQ

<details>
<summary><b>Common Questions</b></summary>

**Q: Can I cancel a liquidation once it starts?**
A: No, once triggered, liquidation cannot be cancelled. You can only add margin before it triggers.

**Q: What happens to my remaining collateral after liquidation?**
A: After deducting losses and fees, any remaining collateral is returned to your account.

**Q: Can I get liquidated from funding payments?**
A: Yes, funding payments affect your margin. High funding rates can push you toward liquidation.

**Q: Is there a grace period before liquidation?**
A: No, liquidation is automatic once your margin ratio hits 3%. Monitor your positions closely.

**Q: Can I set a custom maintenance margin?**
A: No, the 3% maintenance margin is protocol-wide and cannot be customized.

</details>

## Related Topics

- [Leverage & Margin](./leverage-margin)
- [How to Trade](./how-to-trade)
- [Mark Price Calculation](./mark-price)
- [PnL Calculation](./pnl-calculation)
- [Funding Rates](./funding-rates)
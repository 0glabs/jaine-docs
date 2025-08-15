---
title: Mark Price Calculation
sidebar_position: 1
---

# Mark Price Calculation

The mark price is a critical component of perpetual trading on Jaine, used to determine unrealized PnL and trigger liquidations.

## Primary Method (Normal Conditions)

Under normal market conditions, the mark price is calculated as:

```
Mark Price = CLOB Mid Price
Where: Mid Price = (Best Bid + Best Ask) / 2
```

## Fallback Method (Low Liquidity)

When liquidity conditions deteriorate, Jaine uses a weighted average:

```
Mark Price = (CLOB Mid Price × 0.7) + (Index Price × 0.3)
```

### Trigger Conditions for Fallback

The fallback method activates when any of these conditions are met:
- Spread > 0.5% of mid price
- Order book depth < $10,000 within 0.1% of mid
- Mark price divergence > 2% from index price

## Circuit Breakers

To protect traders from extreme market conditions:

### Emergency Halt
- **Trigger**: Mark price divergence > 5% from index price
- **Action**: Automatic trading suspension
- **Recovery**: Requires admin intervention and system health verification

### Update Frequency
Mark price updates every **15 seconds** to ensure accurate pricing while maintaining system efficiency.

## Oracle System

Jaine uses a dual-oracle system for reliability:

### Primary Oracle
- **Provider**: Chainlink
- **Update Frequency**: Real-time via oracle network

### Secondary Oracle
- **Provider**: Substream
- **Purpose**: Backup and validation
- **Note**: Secondary oracle failover to be implemented in Phase 2

## Price Impact on Trading

The mark price affects:
- **Unrealized PnL**: Calculated using current mark price
- **Liquidation Triggers**: Position health based on mark price
- **Funding Payments**: Premium calculations use mark price

## Example Calculation

```javascript
// Normal conditions
bestBid = 50000.00
bestAsk = 50010.00
markPrice = (50000.00 + 50010.00) / 2 = 50005.00

// Low liquidity conditions
clobMidPrice = 50005.00
indexPrice = 50020.00
markPrice = (50005.00 × 0.7) + (50020.00 × 0.3)
markPrice = 35003.50 + 15006.00 = 50009.50
```

## Important Considerations

:::warning Risk Management
Always monitor the mark price relative to the index price. Large divergences may indicate:
- Low liquidity conditions
- Potential market manipulation
- Imminent circuit breaker activation
:::

## Related Topics

- [Funding Rates](./funding-rates)
- [Liquidation System](./liquidations)
- [PnL Calculation](./pnl-calculation)